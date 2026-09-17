import React from 'react';

interface NashvilleLogoProps {
  className?: string;
  showStarGlow?: boolean;
}

/**
 * Nashville Studios Official Brand Mark
 * 100% Vector recreation featuring razor-sharp pixelated typography
 * and the iconic 4-point periwinkle sparkle star with glass sheen.
 */
export const NashvilleLogo: React.FC<NashvilleLogoProps> = ({
  className = 'h-6 sm:h-6.5 md:h-7 lg:h-7.5 w-auto',
  showStarGlow = true,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 359 64"
      fill="none"
      className={`block select-none pointer-events-none transition-transform duration-300 ${className}`}
      aria-label="Nashville Studios"
      role="img"
    >
      <defs>
        {/* Soft periwinkle ambient core glow behind star */}
        <radialGradient id="star-core-glow" cx="307" cy="32" r="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7075F7" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#7075F7" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#7075F7" stopOpacity="0" />
        </radialGradient>

        {/* Subtle glass internal lens specular gradient */}
        <linearGradient id="logo-lens-highlight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.02" />
          <stop offset="100%" stopColor="#224347" stopOpacity="0.08" />
        </linearGradient>

        {/* Crisp star filter */}
        <filter id="star-bloom" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Internal lens refraction highlight layer */}
      <rect x="0" y="0" width="359" height="64" rx="32" fill="url(#logo-lens-highlight)" />

      {/* Ambient glow behind star */}
      {showStarGlow && <circle cx="307" cy="32" r="26" fill="url(#star-core-glow)" />}

      {/* Pixelated Typography: Razor-sharp pixel-aligned rendering */}
      <g id="pixel-letters" shapeRendering="crispEdges">
<rect x="42" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="62" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="42" y="22.0" width="4" height="4" fill="#FFFFFF" /><rect x="46" y="22.0" width="4" height="4" fill="#FFFFFF" /><rect x="62" y="22.0" width="4" height="4" fill="#FFFFFF" /><rect x="42" y="26.0" width="4" height="4" fill="#FFFFFF" /><rect x="50" y="26.0" width="4" height="4" fill="#FFFFFF" /><rect x="62" y="26.0" width="4" height="4" fill="#FFFFFF" /><rect x="42" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="54" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="62" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="42" y="34.0" width="4" height="4" fill="#FFFFFF" /><rect x="58" y="34.0" width="4" height="4" fill="#FFFFFF" /><rect x="62" y="34.0" width="4" height="4" fill="#FFFFFF" /><rect x="42" y="38.0" width="4" height="4" fill="#FFFFFF" /><rect x="62" y="38.0" width="4" height="4" fill="#FFFFFF" /><rect x="42" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="62" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="77" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="81" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="85" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="89" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="73" y="22.0" width="4" height="4" fill="#FFFFFF" /><rect x="93" y="22.0" width="4" height="4" fill="#FFFFFF" /><rect x="73" y="26.0" width="4" height="4" fill="#FFFFFF" /><rect x="93" y="26.0" width="4" height="4" fill="#FFFFFF" /><rect x="73" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="77" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="81" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="85" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="89" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="93" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="73" y="34.0" width="4" height="4" fill="#FFFFFF" /><rect x="93" y="34.0" width="4" height="4" fill="#FFFFFF" /><rect x="73" y="38.0" width="4" height="4" fill="#FFFFFF" /><rect x="93" y="38.0" width="4" height="4" fill="#FFFFFF" /><rect x="73" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="93" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="108" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="112" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="116" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="120" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="104" y="22.0" width="4" height="4" fill="#FFFFFF" /><rect x="104" y="26.0" width="4" height="4" fill="#FFFFFF" /><rect x="108" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="112" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="116" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="120" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="124" y="34.0" width="4" height="4" fill="#FFFFFF" /><rect x="124" y="38.0" width="4" height="4" fill="#FFFFFF" /><rect x="108" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="112" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="116" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="120" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="135" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="155" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="135" y="22.0" width="4" height="4" fill="#FFFFFF" /><rect x="155" y="22.0" width="4" height="4" fill="#FFFFFF" /><rect x="135" y="26.0" width="4" height="4" fill="#FFFFFF" /><rect x="155" y="26.0" width="4" height="4" fill="#FFFFFF" /><rect x="135" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="139" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="143" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="147" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="151" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="155" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="135" y="34.0" width="4" height="4" fill="#FFFFFF" /><rect x="155" y="34.0" width="4" height="4" fill="#FFFFFF" /><rect x="135" y="38.0" width="4" height="4" fill="#FFFFFF" /><rect x="155" y="38.0" width="4" height="4" fill="#FFFFFF" /><rect x="135" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="155" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="166" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="186" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="166" y="22.0" width="4" height="4" fill="#FFFFFF" /><rect x="186" y="22.0" width="4" height="4" fill="#FFFFFF" /><rect x="166" y="26.0" width="4" height="4" fill="#FFFFFF" /><rect x="186" y="26.0" width="4" height="4" fill="#FFFFFF" /><rect x="166" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="186" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="170" y="34.0" width="4" height="4" fill="#FFFFFF" /><rect x="182" y="34.0" width="4" height="4" fill="#FFFFFF" /><rect x="170" y="38.0" width="4" height="4" fill="#FFFFFF" /><rect x="182" y="38.0" width="4" height="4" fill="#FFFFFF" /><rect x="174" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="178" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="197" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="201" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="197" y="22.0" width="4" height="4" fill="#FFFFFF" /><rect x="201" y="22.0" width="4" height="4" fill="#FFFFFF" /><rect x="197" y="26.0" width="4" height="4" fill="#FFFFFF" /><rect x="201" y="26.0" width="4" height="4" fill="#FFFFFF" /><rect x="197" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="201" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="197" y="34.0" width="4" height="4" fill="#FFFFFF" /><rect x="201" y="34.0" width="4" height="4" fill="#FFFFFF" /><rect x="197" y="38.0" width="4" height="4" fill="#FFFFFF" /><rect x="201" y="38.0" width="4" height="4" fill="#FFFFFF" /><rect x="197" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="201" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="212" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="212" y="22.0" width="4" height="4" fill="#FFFFFF" /><rect x="212" y="26.0" width="4" height="4" fill="#FFFFFF" /><rect x="212" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="212" y="34.0" width="4" height="4" fill="#FFFFFF" /><rect x="212" y="38.0" width="4" height="4" fill="#FFFFFF" /><rect x="212" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="216" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="220" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="224" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="228" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="239" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="239" y="22.0" width="4" height="4" fill="#FFFFFF" /><rect x="239" y="26.0" width="4" height="4" fill="#FFFFFF" /><rect x="239" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="239" y="34.0" width="4" height="4" fill="#FFFFFF" /><rect x="239" y="38.0" width="4" height="4" fill="#FFFFFF" /><rect x="239" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="243" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="247" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="251" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="255" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="266" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="270" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="274" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="278" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="282" y="18.0" width="4" height="4" fill="#FFFFFF" /><rect x="266" y="22.0" width="4" height="4" fill="#FFFFFF" /><rect x="266" y="26.0" width="4" height="4" fill="#FFFFFF" /><rect x="266" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="270" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="274" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="278" y="30.0" width="4" height="4" fill="#FFFFFF" /><rect x="266" y="34.0" width="4" height="4" fill="#FFFFFF" /><rect x="266" y="38.0" width="4" height="4" fill="#FFFFFF" /><rect x="266" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="270" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="274" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="278" y="42.0" width="4" height="4" fill="#FFFFFF" /><rect x="282" y="42.0" width="4" height="4" fill="#FFFFFF" />
      </g>

      {/* 4-Point Astroid Sparkle Star: Silky vector curve */}
      <path
        d="M 307,16.0 Q 307,32.0 321,32.0 Q 307,32.0 307,48.0 Q 307,32.0 293,32.0 Q 307,32.0 307,16.0 Z"
        fill="#7075F7"
        filter="url(#star-bloom)"
        shapeRendering="geometricPrecision"
      />
    </svg>
  );
};
