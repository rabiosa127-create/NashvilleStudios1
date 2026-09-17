import React, { useState, useRef } from 'react';
import { Sparkles, Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const HeroGlassArtifact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-(y / rect.height) * 14);
    setRotateY((x / rect.width) * 14);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-md lg:max-w-lg aspect-square flex items-center justify-center perspective-[1200px]"
    >
      {/* Background Soft Cobalt Glow (Subtle and intentional) */}
      <div className="absolute inset-0 ambient-cobalt-light scale-125 opacity-70 -z-10" />

      {/* 3D Tilting Multi-Layer Glass Assembly */}
      <div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${isHovered ? '24px' : '0px'})`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full p-4 sm:p-6 flex items-center justify-center select-none"
      >
        {/* Layer 1: Backing Charcoal-Cobalt Graphic Surface */}
        <div className="absolute inset-4 rounded-3xl bg-[#12151D]/90 border border-white/[0.08] shadow-2xl overflow-hidden">
          {/* Subtle Grid Lines & Binary Stamps (inspired by reference image) */}
          <div className="absolute inset-0 bg-editorial-grid opacity-30" />
          
          <div className="absolute top-4 left-6 text-[10px] font-mono-code text-[#4B729F] tracking-wider">
            [SYS_COORDINATES] 36.1627° N, 86.7816° W
          </div>

          <div className="absolute bottom-4 left-6 text-[9px] font-mono-code text-[#828E9F]/60 leading-tight">
            00, 01, 11, 0011 // COBALT GLASS ENGINE<br />
            TRANSLUCENT SPEC: 20px BLUR // 2026 ED.
          </div>

          {/* Bold Cobalt Architectural Slice inspired by reference image */}
          <div className="absolute -right-8 -bottom-8 w-60 h-60 rounded-full bg-[#224347]/25 blur-2xl" />
        </div>

        {/* Layer 2: Main iOS Frosted Glass Panel */}
        <div
          style={{ transform: 'translateZ(36px)' }}
          className="relative w-11/12 rounded-2xl glass-surface-deep p-6 sm:p-8 border border-white/[0.18] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden"
        >
          {/* Internal Specular Glass Highlight Line */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-xl pointer-events-none" />
          
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.10]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#224347] status-dot-pulse" />
              <span className="font-studio text-[10px] sm:text-[11px] text-[#D2DAE6] tracking-wider">
                NASHVILLE // ATELIER
              </span>
            </div>

            {/* Pixel Year Stamp directly inspired by reference image "2026" */}
            <div className="px-2.5 py-0.5 rounded-md bg-[#224347]/20 border border-[#224347]/40 text-white font-pixel-heading text-xs tracking-widest">
              2026
            </div>
          </div>

          {/* Central Artistic Element */}
          <div className="space-y-4 my-4">
            <div className="text-[11px] font-mono-code text-[#828E9F] uppercase tracking-widest flex items-center justify-between">
              <span>INTERFACE SPECIFICATION</span>
              <span className="text-[#224347]">v4.2 PRO</span>
            </div>

            <h3 className="font-pixel-heading text-xl sm:text-2xl text-white font-semibold leading-snug">
              TACTILE SURFACES &amp; <span className="text-[#224347]">DIGITAL CRAFT</span>
            </h3>

            <p className="font-body text-xs text-[#828E9F] leading-relaxed">
              Engineered with real-time iOS-inspired glass refraction, sub-second load kinematics, and bespoke editorial typography.
            </p>
          </div>

          {/* Micro Telemetry Widgets */}
          <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-white/[0.08]">
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="text-[9px] font-mono-code text-[#828E9F]">LATENCY</div>
              <div className="text-xs font-mono-code text-white font-bold">&lt; 120MS EDGE</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="text-[9px] font-mono-code text-[#828E9F]">ART DIRECTION</div>
              <div className="text-xs font-mono-code text-[#D2DAE6] font-bold">BESPOKE</div>
            </div>
          </div>
        </div>

        {/* Layer 3: Floating Foreground Glass Chip */}
        <div
          style={{ transform: 'translateZ(64px)' }}
          className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-2 p-3 sm:p-4 rounded-xl glass-surface border border-white/[0.22] shadow-xl backdrop-blur-xl flex items-center gap-3 animate-float-subtle"
        >
          <div className="w-8 h-8 rounded-lg bg-[#224347] flex items-center justify-center text-white shadow-[0_0_12px_rgba(34,67,71,0.5)]">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="font-studio text-[10px] text-white tracking-wide">
              iOS TRANSLUCENCY
            </div>
            <div className="text-[9px] font-mono-code text-[#828E9F]">
              REAL BACKDROP BLUR
            </div>
          </div>
        </div>

        {/* Layer 4: Floating Precision Indicator */}
        <div
          style={{ transform: 'translateZ(54px)' }}
          className="absolute -top-3 -right-2 sm:top-6 sm:right-4 px-3 py-2 rounded-xl glass-surface border border-white/[0.20] shadow-lg backdrop-blur-xl flex items-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#224347]" />
          <span className="font-mono-code text-[10px] text-[#D2DAE6]">
            STUDIO ATELIER
          </span>
        </div>
      </div>
    </div>
  );
};
