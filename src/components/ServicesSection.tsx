import React from 'react';
import { SERVICES_DATA } from '../data/studioData';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
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

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 sm:py-32 border-t border-[#224347]/20">
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
            <span className="label-tag !text-[#224347] font-extrabold">// 02 Capabilities</span>
          </motion.div>

          {/* Cards with 3D Tactile Liquid Glass on #AFBEA4 Canvas */}
          {SERVICES_DATA.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              onClick={() => onSelectService(service.title)}
              className="col-span-12 md:col-span-6 variation2-card p-6 sm:p-10 flex flex-col justify-between gap-8 cursor-pointer group rounded-2xl sm:rounded-3xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono-label text-xs text-[#224347] font-extrabold">
                    {service.number}
                  </span>
                  <div className="flex items-center gap-1 text-[0.7rem] uppercase tracking-wider font-mono-label text-[#224347] font-bold group-hover:text-[#172e31] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="font-syne text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#224347] group-hover:text-[#172e31] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-[#224347]/80 mt-4 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>

              {/* Key Deliverables Chips */}
              <div className="pt-6 border-t border-[#224347]/15 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.keyFeatures.map((feature, i) => (
                  <div key={i} className="text-xs text-[#224347] font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#224347] shadow-[0_0_8px_rgba(34,67,71,0.6)]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};
