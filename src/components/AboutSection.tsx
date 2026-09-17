import React, { useState } from 'react';
import { STUDIO_PHILOSOPHY, TEAM_MEMBERS } from '../data/studioData';
import { Mail, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const TactileGlassWidget: React.FC = () => {
  const [refraction, setRefraction] = useState(82);
  const [preset, setPreset] = useState<'liquid' | 'frosted' | 'haptic'>('frosted');
  const [hapticTriggered, setHapticTriggered] = useState(false);

  const handlePresetChange = (mode: 'liquid' | 'frosted' | 'haptic') => {
    setPreset(mode);
    if (mode === 'liquid') setRefraction(95);
    if (mode === 'frosted') setRefraction(80);
    if (mode === 'haptic') setRefraction(60);
    setHapticTriggered(true);
    setTimeout(() => setHapticTriggered(false), 400);
  };

  return (
    <div id="tactile-glass-controller" className="mt-3.5 space-y-3">
      {/* Interactive Refraction Slider */}
      <div className="relative p-3.5 bg-white/70 border border-[#224347]/20 rounded-xl backdrop-blur-md shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.95)]">
        <div className="flex items-center justify-between text-[10px] font-mono-label text-[#224347] font-bold mb-2">
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <span className={`w-1.5 h-1.5 rounded-full bg-[#224347] transition-transform duration-300 ${hapticTriggered ? 'scale-150 shadow-[0_0_8px_rgba(34,67,71,0.9)]' : 'opacity-80'}`} />
            TACTILE REFRACTION
          </span>
          <span className="font-extrabold text-[#224347]">{refraction}%</span>
        </div>

        <div className="relative w-full h-2 bg-[#224347]/15 rounded-full overflow-hidden border border-[#224347]/20">
          <div
            className="h-full bg-gradient-to-r from-[#224347] via-[#2d565b] to-[#3c7278] rounded-full transition-all duration-100"
            style={{ width: `${refraction}%` }}
          />
        </div>
        <input
          type="range"
          min="20"
          max="100"
          value={refraction}
          onChange={(e) => {
            setRefraction(Number(e.target.value));
            setHapticTriggered(true);
            setTimeout(() => setHapticTriggered(false), 200);
          }}
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
          aria-label="Adjust tactile refraction level"
        />
      </div>

      {/* Preset Mode Selectors */}
      <div className="grid grid-cols-3 gap-1.5">
        {(['liquid', 'frosted', 'haptic'] as const).map((mode) => (
          <button
            key={mode}
            type="button"
            onClick={() => handlePresetChange(mode)}
            className={`py-1.5 px-2 text-[9px] font-mono-label uppercase font-bold rounded-lg transition-all cursor-pointer border whitespace-nowrap ${
              preset === mode
                ? 'bg-[#224347] border-[#224347] text-[#AFBEA4] shadow-sm'
                : 'bg-white/60 border-[#224347]/20 text-[#224347]/80 hover:border-[#224347]/40 hover:text-[#224347]'
            }`}
          >
            {mode}
          </button>
        ))}
      </div>

      {/* Live Specular Haptic Pad */}
      <div
        onClick={() => {
          setHapticTriggered(true);
          setTimeout(() => setHapticTriggered(false), 300);
        }}
        className={`relative h-14 rounded-xl border border-[#224347]/25 overflow-hidden flex items-center justify-between px-3 cursor-pointer transition-all duration-300 ${
          hapticTriggered ? 'scale-[0.98] border-[#224347] shadow-[0_0_15px_rgba(34,67,71,0.25)]' : ''
        }`}
        style={{
          background: `linear-gradient(135deg, rgba(255,255,255,${0.7 + refraction * 0.002}) 0%, rgba(240,245,255,0.6) 100%)`,
          backdropFilter: `blur(${Math.max(10, Math.round(refraction * 0.35))}px)`,
        }}
      >
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

        {/* Dynamic Kinetic Waveform Bars */}
        <div className="flex items-end gap-1 h-5 pointer-events-none">
          <span
            className="w-1 bg-[#224347] rounded-full transition-all duration-200"
            style={{ height: `${Math.min(100, Math.max(25, refraction * 0.95))}%` }}
          />
          <span
            className="w-1 bg-[#224347] rounded-full transition-all duration-200"
            style={{ height: `${Math.min(100, Math.max(15, refraction * 0.6))}%` }}
          />
          <span
            className="w-1 bg-[#224347] rounded-full transition-all duration-200"
            style={{ height: `${Math.min(100, Math.max(35, refraction * 0.85))}%` }}
          />
          <span
            className="w-1 bg-[#224347] rounded-full transition-all duration-200"
            style={{ height: `${Math.min(100, Math.max(20, refraction * 0.5))}%` }}
          />
        </div>

        <div className="text-right pointer-events-none">
          <div className="text-[8px] font-mono-label text-[#224347]/70 uppercase">Tactile Pulse</div>
          <div className="text-[10px] font-mono-label text-[#224347] font-extrabold uppercase tracking-wider">
            {preset} // {Math.round(refraction * 1.4)}Hz
          </div>
        </div>
      </div>
    </div>
  );
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-[#224347]/20">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-10">
        <motion.div
          className="grid grid-cols-12 gap-4 sm:gap-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Label Header */}
          <motion.div variants={itemVariants} className="col-span-12 mb-8">
            <span className="label-tag !text-[#224347] font-extrabold">// 03 About Studio</span>
          </motion.div>

          {/* Large Syne Statement */}
          <motion.div variants={itemVariants} className="col-span-12 lg:col-span-10 mb-8 sm:mb-12">
            <h2 className="font-syne text-[clamp(1.5rem,5.5vw,2.25rem)] sm:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.02] sm:leading-[0.95] tracking-[-0.02em] sm:tracking-[-0.03em] text-[#224347]">
              <span className="inline-block">We</span>{' '}
              <span className="inline-block">turn</span>{' '}
              <span className="inline-block">businesses</span>{' '}
              <br className="hidden sm:inline" />
              <span className="inline-block">into</span>{' '}
              <span className="inline-block underline decoration-[#224347] decoration-[4px] sm:decoration-[7px] underline-offset-4 sm:underline-offset-8">
                digital experiences
              </span>
              .
            </h2>
            <p className="text-sm sm:text-xl text-[#224347]/80 mt-5 sm:mt-8 leading-relaxed max-w-3xl font-medium">
              {STUDIO_PHILOSOPHY.manifesto}
            </p>
          </motion.div>

          {/* Pillars */}
          {STUDIO_PHILOSOPHY.pillars.map((pillar) => (
            <motion.div
              key={pillar.label}
              variants={itemVariants}
              className="col-span-12 md:col-span-4 variation2-card p-6 sm:p-8 flex flex-col justify-between gap-4 rounded-2xl sm:rounded-3xl"
            >
              <span className="font-mono-label text-xs text-[#224347] font-extrabold">
                {pillar.label}
              </span>
              <div>
                <h3 className="font-syne text-lg sm:text-xl font-bold uppercase text-[#224347]">
                  {pillar.title}
                </h3>
                {pillar.label === '02' ? (
                  <TactileGlassWidget />
                ) : (
                  <p className="text-xs sm:text-sm text-[#224347]/80 mt-2 leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                )}
              </div>
            </motion.div>
          ))}

          {/* Studio Directors Strip */}
          <motion.div variants={itemVariants} className="col-span-12 mt-12 pt-8 border-t border-[#224347]/20">
            <div className="label-tag !text-[#224347] font-extrabold mb-6">// Studio Directors</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.id}
                  className="variation2-card p-6 flex flex-col justify-between gap-4 rounded-2xl sm:rounded-3xl"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-syne text-base font-bold text-[#224347] uppercase">
                        {member.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <a
                          href={member.socialLinks.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#224347]/75 hover:text-[#224347] transition-colors"
                          title={`${member.name} Instagram`}
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                        <a
                          href={`mailto:${member.socialLinks.email}`}
                          className="text-[#224347]/75 hover:text-[#224347] transition-colors"
                          title={`Email ${member.name}`}
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                    <div className="text-[10px] font-mono-label text-[#224347] mt-1 font-bold">
                      {member.roles.join(' • ')}
                    </div>
                    <p className="text-xs text-[#224347]/80 mt-3 leading-relaxed font-medium">
                      {member.shortBio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
