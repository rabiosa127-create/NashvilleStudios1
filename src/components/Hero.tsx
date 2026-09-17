import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onViewWork: () => void;
  onStartProject: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const Hero: React.FC<HeroProps> = ({ onViewWork, onStartProject }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-[#AFBEA4]">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-10">
        <motion.div
          className="grid grid-cols-12 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Label in Refined Frosted Glass Badge */}
          <motion.div variants={itemVariants} className="col-span-12 mb-4 sm:mb-6">
            <div className="glass3d label-tag rounded-full max-w-full inline-flex items-center gap-2 px-4 py-2 text-[0.65rem] sm:text-xs text-[#224347]">
              <span className="w-2 h-2 rounded-full bg-[#224347] shadow-[0_0_8px_rgba(34,67,71,0.6)] shrink-0" />
              <span>Available for projects</span>
            </div>
          </motion.div>

          {/* Sculptural Syne Heading in Deep Cyprus #224347 */}
          <motion.h1
            variants={itemVariants}
            className="col-span-12 font-syne text-[clamp(1.65rem,6.8vw,2.75rem)] sm:text-[clamp(2.75rem,8vw,8.5rem)] font-extrabold leading-[1.02] sm:leading-[0.88] tracking-[-0.02em] sm:tracking-[-0.04em] uppercase text-[#224347]"
          >
            <span className="inline-block">We</span>{' '}
            <span className="inline-block">build</span>{' '}
            <br className="hidden sm:inline" />
            <span className="inline-block">digital</span>{' '}
            <span className="inline-block">experiences</span>{' '}
            <br className="hidden sm:inline" />
            <span className="inline-block">that</span>{' '}
            <span className="inline-block underline decoration-[#224347] decoration-[4px] sm:decoration-[8px] underline-offset-4 sm:underline-offset-8">
              stand out
            </span>
            .
          </motion.h1>

          {/* Hero Subtitle in #224347 Cyprus Ink */}
          <motion.p
            variants={itemVariants}
            className="col-span-12 lg:col-span-8 font-mono-label text-xs sm:text-base lg:text-lg text-[#224347]/85 mt-5 sm:mt-10 font-medium leading-[1.65] sm:leading-[1.75] tracking-tight max-w-2xl"
          >
            An independent digital atelier partnering with ambitious brands to craft high-conversion websites, tactile glass interfaces, and memorable brand systems.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="col-span-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-7 sm:mt-12"
          >
            <button
              onClick={onStartProject}
              className="btn-primary cursor-pointer w-full sm:w-auto justify-center"
            >
              <span className="text-[#022d28]">Start a Project</span>
              <ArrowUpRight className="w-4 h-4 text-[#022d28]" />
            </button>

            <button
              onClick={onViewWork}
              className="btn-outline cursor-pointer w-full sm:w-auto justify-center"
            >
              <span>View our Work</span>
              <ArrowDown className="w-4 h-4 text-[#224347]" />
            </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
