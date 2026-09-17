import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/studioData';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepDescriptions = [
    'We clarify the fundamental value proposition and digital positioning before writing a single line of code.',
    'Crafting bespoke digital interfaces, typography pairings, and layout systems that command authority.',
    'Handcrafted, sub-second React engineering with responsive precision and zero template bloat.',
    'Edge infrastructure deployment, SEO indexing, and direct studio handover ready to convert visitors.'
  ];

  return (
    <section id="process" className="py-24 sm:py-32 border-t border-[#224347]/20">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="flex items-end justify-between gap-6 flex-wrap mb-14 sm:mb-20">
          <h2 className="font-syne text-[clamp(1.85rem,5vw,3.25rem)] font-bold tracking-tight text-[#224347]">
            How we work
          </h2>
          <p className="text-sm text-[#224347]/65 max-w-[22rem] leading-relaxed">
            Four phases, always in this order. Select a phase to read more about it.
          </p>
        </div>

        {/* Connected Rail */}
        <div className="relative">
          <div className="hidden sm:block absolute top-[13px] left-[13px] right-[13px] h-px bg-[#224347]/20" />

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-6 gap-y-8">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className="relative cursor-pointer group flex sm:block items-start gap-4"
                >
                  <span
                    className={`relative z-10 w-7 h-7 rounded-full border flex items-center justify-center font-mono-label text-[11px] font-bold shrink-0 transition-colors duration-300 ${
                      isActive
                        ? 'bg-[#332421] border-[#332421] text-[#AFBEA4]'
                        : 'bg-[#AFBEA4] border-[#224347]/40 text-[#224347]/70 group-hover:border-[#332421]'
                    }`}
                  >
                    {step.number}
                  </span>

                  <div className="mt-0 sm:mt-6">
                    <h3
                      className={`font-syne text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300 ${
                        isActive ? 'text-[#332421]' : 'text-[#332421]/55 group-hover:text-[#332421]/80'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm mt-2 leading-relaxed max-w-[16rem] transition-colors duration-300 ${
                        isActive ? 'text-[#224347]/85' : 'text-[#224347]/45'
                      }`}
                    >
                      {stepDescriptions[idx]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
