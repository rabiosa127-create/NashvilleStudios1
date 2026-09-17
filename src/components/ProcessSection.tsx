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
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          
          {/* Label Header */}
          <div className="col-span-12 mb-10 sm:mb-14">
            <span className="label-tag !text-[#224347] font-extrabold">// 04 Methodology</span>
          </div>

          {/* Process Steps in 3D Tactile Liquid Glass Cards */}
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`col-span-12 sm:col-span-6 lg:col-span-3 p-6 sm:p-7 cursor-pointer transition-all rounded-2xl sm:rounded-3xl flex flex-col justify-between gap-6 variation2-card ${
                  isActive
                    ? '!border-[#224347] !bg-white/80 shadow-[0_20px_45px_rgba(34,67,71,0.22)]'
                    : 'hover:!bg-white/70'
                }`}
              >
                <div>
                  <div
                    className="font-mono-label text-xs uppercase tracking-widest mb-3 font-extrabold text-[#224347]"
                  >
                    {step.number}
                  </div>

                  <h3 className="font-syne text-lg sm:text-2xl font-bold uppercase tracking-tight text-[#224347]">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs text-[#224347]/80 leading-relaxed font-inter font-medium">
                  {stepDescriptions[idx]}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};
