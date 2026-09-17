import React from 'react';
import { PROJECTS_DATA } from '../data/studioData';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface WorkSectionProps {
  onSelectProject: (project: Project) => void;
}

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-24 sm:py-32 border-t border-[#224347]/20">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="flex items-end justify-between gap-6 flex-wrap mb-12 sm:mb-16"
          >
            <h2 className="font-syne text-[clamp(1.85rem,5vw,3.25rem)] font-bold tracking-tight text-[#224347]">
              Selected work
            </h2>
            <p className="text-sm text-[#224347]/65 max-w-[22rem] leading-relaxed">
              A short list of recent studio projects, from client flagships to concepts we built to test new ideas.
            </p>
          </motion.div>

          {/* Editorial Rows */}
          <div className="border-t border-[#224347]/15">
            {PROJECTS_DATA.map((project, idx) => {
              const mediaFirst = idx % 2 === 1;
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  onClick={() => onSelectProject(project)}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 py-10 sm:py-14 border-b border-[#224347]/15 cursor-pointer items-center"
                >
                  {/* Text Side */}
                  <div className={`md:col-span-5 ${mediaFirst ? 'md:order-2' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-syne text-sm font-bold text-[#224347]/35">{project.number}</span>
                      <span className="text-xs text-[#224347]/60 uppercase tracking-wide">{project.category}</span>
                    </div>

                    <h3 className="font-syne text-2xl sm:text-3xl font-bold tracking-tight text-[#224347] group-hover:text-[#172e31] transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-sm sm:text-base text-[#224347]/75 mt-4 leading-relaxed max-w-md">
                      {project.shortDescription}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-[#332421] group-hover:bg-[#261a18] border border-white/20 shadow-sm transition-all">
                      <span className="text-[#F3ECE2] pb-0.5">
                        {project.typeLabel}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#F3ECE2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Media Side */}
                  <div className={`md:col-span-7 ${mediaFirst ? 'md:order-1' : ''}`}>
                    <div className="aspect-[16/10] rounded-2xl bg-gradient-to-b from-white/80 to-white/45 backdrop-blur-md border border-[#224347]/20 relative overflow-hidden p-5 sm:p-6 flex flex-col justify-between shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.9),0_10px_30px_rgba(34,67,71,0.08)] transition-all duration-500 group-hover:scale-[1.015] group-hover:border-[#224347]/40">
                      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

                      <div className="flex items-center justify-between text-[10px] font-mono-label text-[#224347] font-bold">
                        <span>{project.mockupData.previewBadge}</span>
                        <span className="text-[#224347]/60">{project.deliverables[0]}</span>
                      </div>

                      <div className="font-syne text-sm sm:text-base font-bold text-[#224347] leading-snug max-w-sm">
                        {project.mockupData.heroHeading}
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-[#224347]/15 text-[10px] font-mono-label font-bold text-[#224347]/70">
                        <span>{project.technologies[0]}</span>
                        <span className="text-[#224347] underline decoration-[#224347]/40 underline-offset-2 group-hover:text-[#172e31] transition-colors">
                          View case study
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
