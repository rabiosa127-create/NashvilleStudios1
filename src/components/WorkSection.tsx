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

export const WorkSection: React.FC<WorkSectionProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-24 sm:py-32 border-t border-[#224347]/20">
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
            <span className="label-tag !text-[#224347] font-extrabold">// 01 Selected Works</span>
          </motion.div>

          {/* Cards with 3D Tactile Liquid Glass on #AFBEA4 Background */}
          {PROJECTS_DATA.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onClick={() => onSelectProject(project)}
              className="col-span-12 md:col-span-4 variation2-card p-6 sm:p-8 flex flex-col gap-6 cursor-pointer group rounded-2xl sm:rounded-3xl"
            >
              {/* Tag */}
              <div className="flex items-center justify-between">
                <span className="label-tag !text-[#224347] font-bold">
                  {project.typeLabel} // {project.number}
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#224347] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              {/* Card Image / Viewport Canvas */}
              <div className="aspect-[16/10] bg-gradient-to-b from-white/80 to-white/45 backdrop-blur-md shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.95),0_4px_16px_rgba(34,67,71,0.06)] border border-[#224347]/20 relative overflow-hidden rounded-xl flex flex-col justify-between p-4 group-hover:border-[#224347]/40 transition-all">
                {/* Specular top light rim */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

                <div className="flex items-center justify-between text-[9px] font-mono-label text-[#224347] font-bold">
                  <span className="uppercase text-[#224347]">{project.category}</span>
                  <span className="text-[#224347]/70">{project.deliverables[0]}</span>
                </div>

                <div className="my-auto py-2">
                  <div className="text-[10px] font-mono-label text-[#224347] uppercase font-semibold">
                    {project.mockupData.previewBadge}
                  </div>
                  <div className="font-syne text-xs sm:text-sm font-bold text-[#224347] mt-1 line-clamp-2">
                    {project.mockupData.heroHeading}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#224347]/15 text-[9px] font-mono-label font-bold">
                  <span className="text-[#224347]/70">SPECS: SUB-SECOND</span>
                  <span className="text-[#224347] underline decoration-[#224347] underline-offset-2 group-hover:text-[#172e31] transition-colors">VIEW DETAILS →</span>
                </div>
              </div>

              {/* Project Title & Description */}
              <div>
                <h3 className="font-syne text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#224347] group-hover:text-[#172e31] transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#224347]/80 mt-3 leading-relaxed font-medium">
                  {project.shortDescription}
                </p>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};
