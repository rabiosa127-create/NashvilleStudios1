import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/studioData';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
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

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [openId, setOpenId] = useState<string>(SERVICES_DATA[0].id);

  return (
    <section id="services" className="py-24 sm:py-32 border-t border-[#224347]/20">
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
            className="flex items-end justify-between gap-6 flex-wrap mb-10 sm:mb-14"
          >
            <h2 className="font-syne text-[clamp(1.85rem,5vw,3.25rem)] font-bold tracking-tight text-[#224347]">
              Capabilities
            </h2>
            <p className="text-sm text-[#224347]/65 max-w-[22rem] leading-relaxed">
              Four ways we partner with brands. Open one to see what's included.
            </p>
          </motion.div>

          {/* Expandable Capability List */}
          <motion.div variants={itemVariants} className="border-t border-[#224347]/15">
            {SERVICES_DATA.map((service) => {
              const isOpen = openId === service.id;
              return (
                <div key={service.id} className="border-b border-[#224347]/15">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? '' : service.id)}
                    className="w-full flex items-center justify-between gap-6 py-7 sm:py-9 text-left cursor-pointer group"
                  >
                    <span className="font-syne text-xl sm:text-3xl font-bold tracking-tight text-[#332421] group-hover:text-[#261a18] transition-colors">
                      {service.title}
                    </span>
                    <span
                      className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? 'rotate-45 bg-[#332421] border-[#332421]'
                          : 'border-[#224347]/30 group-hover:border-[#332421]/60'
                      }`}
                    >
                      <Plus className={`w-4 h-4 transition-colors ${isOpen ? 'text-[#AFBEA4]' : 'text-[#332421]'}`} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 sm:pb-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10">
                          <p className="md:col-span-6 text-sm sm:text-base text-[#224347]/80 leading-relaxed max-w-md">
                            {service.description}
                          </p>

                          <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 content-start">
                            {service.keyFeatures.map((feature, i) => (
                              <div key={i} className="text-xs text-[#224347] font-medium flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#332421] shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>

                          <button
                            onClick={() => onSelectService(service.title)}
                            className="md:col-span-12 inline-flex w-fit items-center gap-2 text-xs font-semibold text-[#F3ECE2] bg-[#332421] hover:bg-[#261a18] px-4 py-2 rounded-full border border-white/20 shadow-sm transition-all cursor-pointer"
                          >
                            Inquire about {service.title}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
