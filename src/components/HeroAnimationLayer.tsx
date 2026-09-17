import React from 'react';
import { motion } from 'motion/react';
import { AsciiEarthCanvas } from './AsciiEarthCanvas';

export const HeroAnimationLayer: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none bg-[#AFBEA4]">
      {/* 1. Generative ASCII Earth Particle Animation (Limited strictly to Hero Section) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AsciiEarthCanvas />
      </div>

      {/* 2. Atmospheric Ambient Depth Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-transparent pointer-events-none z-[1]" />

      {/* 3. 3D Perspective Floating Abstract Glass Geometric Layers (Translucent Liquid Glass) */}
      <div 
        className="absolute inset-0 flex items-center justify-end pr-4 sm:pr-12 lg:pr-24 pointer-events-none z-[2]"
        style={{ perspective: 1200 }}
      >
        {/* Layer 1: Back Ambient Glass Plane */}
        <motion.div
          className="absolute w-[280px] sm:w-[460px] lg:w-[580px] h-[220px] sm:h-[340px] lg:h-[400px] rounded-2xl border border-white/60 bg-gradient-to-br from-white/45 via-white/25 to-white/10 backdrop-blur-xl shadow-[0_24px_50px_rgba(34,67,71,0.15),inset_0_1.5px_2px_rgba(255,255,255,0.9)]"
          initial={{ opacity: 0, rotateX: 18, rotateY: -22, rotateZ: -6, y: 50 }}
          animate={{
            opacity: 1,
            rotateX: [16, 22, 16],
            rotateY: [-24, -18, -24],
            rotateZ: [-7, -4, -7],
            y: [0, -18, 0],
          }}
          transition={{
            opacity: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
            rotateX: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
            rotateY: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
            rotateZ: { duration: 16, repeat: Infinity, ease: 'easeInOut' },
            y: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          {/* Specular Edge Highlight Refraction */}
          <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
          {/* Subtle grid mesh lines within the glass */}
          <div className="w-full h-full opacity-15 bg-[radial-gradient(rgba(34,67,71,0.4)_1px,transparent_1px)] [background-size:20px_20px]" />
        </motion.div>

        {/* Layer 2: Foreground Elevated Glass Slab */}
        <motion.div
          className="relative w-[240px] sm:w-[400px] lg:w-[480px] h-[180px] sm:h-[280px] lg:h-[320px] rounded-xl border border-white/70 bg-gradient-to-tr from-white/55 via-white/35 to-white/20 backdrop-blur-2xl shadow-[0_32px_70px_rgba(34,67,71,0.18),inset_0_1.5px_2px_rgba(255,255,255,0.95)]"
          initial={{ opacity: 0, rotateX: 20, rotateY: -18, rotateZ: 3, y: 70 }}
          animate={{
            opacity: 1,
            rotateX: [20, 14, 20],
            rotateY: [-18, -24, -18],
            rotateZ: [2, 6, 2],
            y: [0, 22, 0],
          }}
          transition={{
            opacity: { duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
            rotateX: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
            rotateY: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
            rotateZ: { duration: 15, repeat: Infinity, ease: 'easeInOut' },
            y: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          {/* Internal Specular Light Rim */}
          <div className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent" />
          <div className="absolute bottom-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </motion.div>
      </div>

      {/* 4. Smooth Transition Gradient to (#AFBEA4) at the bottom of the Hero section */}
      <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-[#AFBEA4] via-[#AFBEA4]/80 to-transparent pointer-events-none z-[3]" />
    </div>
  );
};
