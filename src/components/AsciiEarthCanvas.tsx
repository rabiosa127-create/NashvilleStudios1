import React, { useEffect, useRef } from 'react';

// ASCII glyph palette ordered from lightest to densest
const ASCII_GLYPHS = ['.', '·', ':', '+', '*', '#', '@'];

interface Particle {
  id: number;
  // Base normalized coordinate in [0, 1]
  u: number;
  v: number;
  
  // Abstract wave position
  ax: number;
  ay: number;
  az: number;
  
  // Globe sphere target position (spherical coordinates)
  lat: number;
  lon: number;
  isLand: boolean;
  elevation: number;
  isRing: boolean;
  
  // Dynamics & morph state
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  glyphIndex: number;
  colorType: 'white' | 'silver' | 'blue';
}

// Procedural continent detector for realistic yet artistic digital Earth
function isEarthLand(latDeg: number, lonDeg: number): boolean {
  // Fractal boundary noise
  const turb =
    Math.sin(latDeg * 0.16 + lonDeg * 0.12) * 5.5 +
    Math.cos(latDeg * 0.26 - lonDeg * 0.2) * 3.8 +
    Math.sin(latDeg * 0.52 + lonDeg * 0.44) * 2.2;

  const lat = latDeg + turb;
  const lon = lonDeg + turb;

  // North America
  if (lat >= 14 && lat <= 72 && lon >= -168 && lon <= -52) {
    if (lat < 30 && lon < -105) return false;
    if (lat < 24 && lon > -80) return false;
    return true;
  }
  // South America
  if (lat >= -56 && lat <= 13 && lon >= -82 && lon <= -34) {
    if (lat < -35 && lon > -60) return false;
    if (lat < -45 && lon < -75) return false;
    return true;
  }
  // Europe
  if (lat >= 35 && lat <= 71 && lon >= -10 && lon <= 45) {
    if (lat > 65 && lon > 32) return false;
    return true;
  }
  // Africa
  if (lat >= -35 && lat <= 38 && lon >= -18 && lon <= 52) {
    if (lat < 0 && lon < 8) return false;
    if (lat < -20 && lon > 36) return false;
    return true;
  }
  // Asia
  if (lat >= 8 && lat <= 76 && lon >= 45 && lon <= 178) {
    if (lat < 15 && lon < 95 && (lon < 70 || lon > 88)) return false;
    return true;
  }
  // Australia & New Zealand
  if (lat >= -44 && lat <= -10 && lon >= 112 && lon <= 155) {
    if (lat < -38 && lon < 140) return false;
    return true;
  }
  // Antarctica
  if (lat <= -65) {
    return true;
  }

  return false;
}

// Smooth cubic easing
function smoothstep(min: number, max: number, value: number): number {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

export const AsciiEarthCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for subtle liquid reaction
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
      radius: 170,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Particle setup
    const isMobile = width < 768;
    const PARTICLE_COUNT = isMobile ? 1200 : 2600;
    const particles: Particle[] = [];

    // Initialize particles with Fibonacci sphere distribution + ambient field
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Uniform latitude and golden spiral longitude for globe
      const yNorm = 1 - (i / (PARTICLE_COUNT - 1)) * 2; // from 1 to -1
      const lat = Math.asin(Math.max(-1, Math.min(1, yNorm)));
      const lon = (i * Math.PI * (3 - Math.sqrt(5))) % (Math.PI * 2);

      const latDeg = (lat * 180) / Math.PI;
      const lonDeg = (((lon + Math.PI) % (Math.PI * 2)) - Math.PI) * (180 / Math.PI);
      const isLand = isEarthLand(latDeg, lonDeg);
      const isRing = i % 18 === 0;

      particles.push({
        id: i,
        u: Math.random(),
        v: Math.random(),
        ax: Math.random() * width,
        ay: Math.random() * height,
        az: (Math.random() - 0.5) * 200,
        lat,
        lon,
        isLand,
        elevation: isLand ? 0.035 + Math.random() * 0.025 : 0.0,
        isRing,
        x: Math.random() * width,
        y: Math.random() * height,
        z: 0,
        vx: 0,
        vy: 0,
        size: 1.5,
        alpha: 0.8,
        glyphIndex: 1,
        colorType: 'silver',
      });
    }

    // Responsive Canvas Resizing with DPR capping
    const updateDimensions = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });
    resizeObserver.observe(canvas);

    // Pause loop when scrolled past hero
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(canvas);

    // Timeline configuration (Total cycle: 38 seconds)
    // 0s - 9s: Abstract Fluid Waves & Halftone Contours
    // 9s - 13s: Morphing into 3D Rotating Earth
    // 13s - 27s: Rotating Digital Earth
    // 27s - 31s: Dissolving back to Fluid Waves
    // 31s - 38s: Spherical Distortions & Topographic Waves
    const CYCLE_DURATION = 38000;
    const startTime = performance.now();

    // Render loop
    const render = (now: number) => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const elapsed = (now - startTime) % CYCLE_DURATION;
      const t = now * 0.001;

      // Calculate state and morph factor
      let morph = 0; // 0 = abstract fluid, 1 = digital earth
      let earthRotationSpeed = 0.18;

      if (elapsed < 9000) {
        // Phase 1: Pure Abstract Fluid Topography
        morph = 0;
      } else if (elapsed < 13000) {
        // Phase 2: Morph to Earth
        morph = smoothstep(9000, 13000, elapsed);
      } else if (elapsed < 27000) {
        // Phase 3: Pure Rotating Digital Earth
        morph = 1;
      } else if (elapsed < 31000) {
        // Phase 4: Dissolve Earth back to Fluid
        morph = 1 - smoothstep(27000, 31000, elapsed);
      } else {
        // Phase 5: Dynamic Topography & Spherical Distortion
        morph = 0;
      }

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Clear with #AFBEA4 background gradient
      ctx.clearRect(0, 0, width, height);

      // Harmonious #AFBEA4 Canvas Backdrop with subtle organic tonal variation
      const bgGrad = ctx.createRadialGradient(
        width * 0.65,
        height * 0.45,
        0,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.85
      );
      bgGrad.addColorStop(0, '#B9C8B0');   // Soft lighter luminous sage center
      bgGrad.addColorStop(0.45, '#AFBEA4'); // Base sage #AFBEA4
      bgGrad.addColorStop(0.8, '#A3B498');  // Subtle deeper tonal sage
      bgGrad.addColorStop(1, '#97A98C');    // Organic perimeter
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle atmospheric warmth vignette
      const vignette = ctx.createLinearGradient(0, 0, 0, height);
      vignette.addColorStop(0, 'rgba(255, 255, 255, 0.16)');
      vignette.addColorStop(0.5, 'transparent');
      vignette.addColorStop(1, 'rgba(34, 67, 71, 0.12)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      // Earth parameters
      // Desktop: placed in right-center region (cx ~ 0.64) to gracefully balance hero typography
      // Mobile: centered nicely behind the content
      const earthCenterX = width < 768 ? width * 0.5 : width * 0.63;
      const earthCenterY = width < 768 ? height * 0.46 : height * 0.48;
      const earthRadius = Math.min(width, height) * (width < 768 ? 0.34 : 0.36);

      // 3D Earth orientation: axial tilt (~23.4°), continuous spin
      const earthAngle = t * earthRotationSpeed;
      const tiltAngle = 0.408; // 23.4 degrees in radians
      const cosTilt = Math.cos(tiltAngle);
      const sinTilt = Math.sin(tiltAngle);

      // Fluid metaball centers for abstract mode (reference video behavior)
      const meta1X = width * (0.35 + 0.22 * Math.sin(t * 0.4));
      const meta1Y = height * (0.4 + 0.25 * Math.cos(t * 0.32));
      const meta2X = width * (0.65 + 0.2 * Math.cos(t * 0.36));
      const meta2Y = height * (0.55 + 0.18 * Math.sin(t * 0.45));
      const meta3X = width * (0.5 + 0.15 * Math.sin(t * 0.55 + 2));
      const meta3Y = height * (0.35 + 0.15 * Math.cos(t * 0.6 + 1));

      // Font configuration for ASCII rendering
      ctx.font = '600 10px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Sort particles by Z-depth when Earth is active for accurate 3D layering
      if (morph > 0.3) {
        particles.sort((a, b) => a.z - b.z);
      }

      // Process and render each particle
      const len = particles.length;
      for (let i = 0; i < len; i++) {
        const p = particles[i];

        // 1. ABSTRACT FLUID POSITION (Reference Video Halftone Waves)
        // Multi-frequency sine field + metaball density potential
        const waveX = p.u * width;
        const waveY = p.v * height;

        const d1 = Math.hypot(waveX - meta1X, waveY - meta1Y);
        const d2 = Math.hypot(waveX - meta2X, waveY - meta2Y);
        const d3 = Math.hypot(waveX - meta3X, waveY - meta3Y);

        const fluidDensity =
          Math.sin(waveX * 0.0035 + t * 0.7) * Math.cos(waveY * 0.0035 + t * 0.6) +
          0.6 * Math.sin((waveX + waveY) * 0.0028 - t * 0.5) +
          300 / (d1 + 120) +
          260 / (d2 + 110) +
          200 / (d3 + 90);

        // Fluid drift
        const abstractX = waveX + Math.sin(waveY * 0.005 + t * 0.8) * 28;
        const abstractY = waveY + Math.cos(waveX * 0.005 + t * 0.7) * 28;
        const abstractZ = (fluidDensity - 1) * 80;

        // 2. 3D ROTATING DIGITAL EARTH POSITION
        const r = earthRadius * (1 + p.elevation);
        const rotLon = p.lon + earthAngle;

        // Cartesian sphere coordinates
        const sx = r * Math.cos(p.lat) * Math.sin(rotLon);
        const sy = -r * Math.sin(p.lat);
        const sz = r * Math.cos(p.lat) * Math.cos(rotLon);

        // Axial tilt rotation around Z
        const rx = sx * cosTilt - sy * sinTilt;
        const ry = sx * sinTilt + sy * cosTilt;
        const rz = sz;

        // Perspective projection
        const camDist = earthRadius * 2.8;
        const projScale = camDist / (camDist + rz);
        const globeX = earthCenterX + rx * projScale;
        const globeY = earthCenterY + ry * projScale;
        const globeZ = rz;

        // 3. MORPH INTERPOLATION WITH STREAMLINE VORTEX
        // Add a gentle curved swirl during transitions
        const swirlAngle = (1 - morph) * morph * Math.PI * 2 * (p.id % 2 === 0 ? 1 : -1);
        const cosSwirl = Math.cos(swirlAngle);
        const sinSwirl = Math.sin(swirlAngle);

        const directX = abstractX * (1 - morph) + globeX * morph;
        const directY = abstractY * (1 - morph) + globeY * morph;
        const targetZ = abstractZ * (1 - morph) + globeZ * morph;

        // Apply swirl around local center during transition
        const midX = (abstractX + globeX) * 0.5;
        const midY = (abstractY + globeY) * 0.5;
        const dx = directX - midX;
        const dy = directY - midY;
        const curX = midX + (dx * cosSwirl - dy * sinSwirl);
        const curY = midY + (dx * sinSwirl + dy * cosSwirl);

        // 4. MOUSE INTERACTION (Liquid Surface Distortion)
        let mouseForceX = 0;
        let mouseForceY = 0;
        if (mouse.x > 0 && mouse.y > 0) {
          const mdx = curX - mouse.x;
          const mdy = curY - mouse.y;
          const mdist = Math.hypot(mdx, mdy);
          if (mdist < mouse.radius) {
            const force = (1 - mdist / mouse.radius) * 32;
            const normX = mdx / (mdist || 1);
            const normY = mdy / (mdist || 1);
            // Radial push + subtle tangential curl
            mouseForceX = normX * force + -normY * force * 0.35;
            mouseForceY = normY * force + normX * force * 0.35;
          }
        }

        p.vx += (mouseForceX - p.vx) * 0.12;
        p.vy += (mouseForceY - p.vy) * 0.12;

        p.x = curX + p.vx;
        p.y = curY + p.vy;
        p.z = targetZ;

        // 5. EDITORIAL DENSITY ATTENUATION BEHIND MAIN HEADLINE
        // Softly fade particles directly behind the hero headline for maximum contrast
        let headlineMask = 1.0;
        if (width >= 1024) {
          // Desktop headline zone: left 10% to 55%, vertical 28% to 68%
          if (p.x > width * 0.08 && p.x < width * 0.54 && p.y > height * 0.22 && p.y < height * 0.72) {
            headlineMask = 0.55;
          }
        }

        // 6. COLOR & GLYPH DENSITY ASSIGNMENT
        let intensity = 0.5;
        let isFrontOfEarth = true;

        if (morph > 0.5) {
          // On Earth: front hemisphere is bright, back hemisphere recedes into deep cobalt
          const normZ = globeZ / earthRadius; // -1 to +1
          isFrontOfEarth = normZ > -0.2;
          const depthShading = (normZ + 1) * 0.5; // 0 to 1

          if (p.isLand) {
            // Continents: prominent bright white & silver luminous nodes
            intensity = 0.65 + depthShading * 0.35;
          } else if (p.isRing) {
            // Faint coordinate orbital/meridian rings
            intensity = 0.45 + depthShading * 0.3;
          } else {
            // Ocean points: delicate subtle dots
            intensity = 0.25 + depthShading * 0.35;
          }

          // Back of Earth fade
          if (!isFrontOfEarth) {
            intensity *= 0.25;
          }
        } else {
          // In Abstract Fluid mode: map fluid density to halftone dot intensity
          const normDensity = Math.max(0, Math.min(1, (fluidDensity + 1.2) / 3.2));
          intensity = normDensity;
        }

        intensity *= headlineMask;

        // Map intensity to ASCII character or dot
        const gIdx = Math.max(0, Math.min(ASCII_GLYPHS.length - 1, Math.floor(intensity * ASCII_GLYPHS.length)));
        const glyph = ASCII_GLYPHS[gIdx];

        // Particle size
        const ptSize = 1.0 + intensity * 2.6;

        // Render: Crisp #224347 deep cyprus ink glyphs and tactile dots on #AFBEA4 canvas
        if (intensity > 0.75) {
          // High intensity (continents / prominent wave crests): deep saturated cyprus ink
          ctx.fillStyle = `rgba(34, 67, 71, ${0.92 * headlineMask})`;
          if (i % 3 === 0) {
            ctx.fillText(glyph, p.x, p.y);
          } else {
            ctx.beginPath();
            ctx.arc(p.x, p.y, ptSize * 0.9, 0, Math.PI * 2);
            ctx.fill();
          }
        } else if (intensity > 0.42) {
          // Medium intensity: medium deep cyprus tone
          ctx.fillStyle = `rgba(34, 67, 71, ${0.68 * headlineMask})`;
          if (i % 4 === 0) {
            ctx.fillText(glyph, p.x, p.y);
          } else {
            ctx.beginPath();
            ctx.arc(p.x, p.y, ptSize * 0.8, 0, Math.PI * 2);
            ctx.fill();
          }
        } else if (intensity > 0.18) {
          // Low intensity: soft translucent cyprus dot
          ctx.fillStyle = `rgba(34, 67, 71, ${0.35 * headlineMask})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(0.9, ptSize * 0.65), 0, Math.PI * 2);
          ctx.fill();
        } else if (morph > 0.5 && isFrontOfEarth) {
          // Faint spatial coordinate
          ctx.fillStyle = `rgba(34, 67, 71, ${0.18 * headlineMask})`;
          ctx.fillRect(p.x, p.y, 1, 1);
        }
      }

      // Subtle atmospheric horizon rim when Earth is assembled
      if (morph > 0.4) {
        ctx.save();
        ctx.globalAlpha = (morph - 0.4) * 1.66 * 0.35;
        const atmosphereGrad = ctx.createRadialGradient(
          earthCenterX,
          earthCenterY,
          earthRadius * 0.92,
          earthCenterX,
          earthCenterY,
          earthRadius * 1.08
        );
        atmosphereGrad.addColorStop(0, 'rgba(34, 67, 71, 0)');
        atmosphereGrad.addColorStop(0.7, 'rgba(34, 67, 71, 0.2)');
        atmosphereGrad.addColorStop(1, 'rgba(34, 67, 71, 0)');
        ctx.fillStyle = atmosphereGrad;
        ctx.beginPath();
        ctx.arc(earthCenterX, earthCenterY, earthRadius * 1.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none block select-none"
      style={{ touchAction: 'none' }}
      aria-hidden="true"
    />
  );
};
