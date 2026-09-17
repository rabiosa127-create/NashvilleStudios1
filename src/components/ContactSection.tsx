import React, { useState } from 'react';
import { STUDIO_CONFIG } from '../data/studioData';
import { ArrowUpRight, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService = 'Business Websites' }) => {
  const [projectName, setProjectName] = useState('');
  const [service, setService] = useState(preselectedService);
  const [vision, setVision] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const text = `Hello Nashville Studios! Project Name: "${projectName || 'New Project'}". Selected Scope: ${service}. Vision: ${vision || 'Looking to discuss a new website project.'}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 border-t border-[#224347]/20">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-5">
            <h2 className="font-syne text-[clamp(1.75rem,6.5vw,2.5rem)] sm:text-5xl lg:text-[3.5rem] font-extrabold uppercase leading-[1.0] sm:leading-[0.95] tracking-[-0.02em] sm:tracking-[-0.03em] text-[#224347] mb-6">
              <span className="inline-block">Let&apos;s</span>{' '}
              <span className="inline-block">build</span> <br />
              <span className="inline-block">something</span> <br />
              <span className="inline-block underline decoration-[#224347] decoration-[5px] sm:decoration-[7px] underline-offset-8">
                memorable
              </span>
              .
            </h2>

            <div className="space-y-4 pt-4">
              <a
                href={`mailto:${STUDIO_CONFIG.email}`}
                className="text-sm sm:text-base text-[#224347] hover:text-[#172e31] font-bold transition-all block font-mono-label"
              >
                {STUDIO_CONFIG.email}
              </a>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={STUDIO_CONFIG.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline !py-3 !px-5 !text-[0.7rem] !text-[#F3ECE2] !border-white/20 !bg-[#332421] hover:!bg-[#261a18] backdrop-blur-md font-bold transition-all shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#F3ECE2]" />
                  <span className="text-[#F3ECE2]">WhatsApp Direct</span>
                </a>

                <a
                  href={STUDIO_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline !py-3 !px-5 !text-[0.7rem] !text-[#F3ECE2] !border-white/20 !bg-[#332421] hover:!bg-[#261a18] backdrop-blur-md font-bold transition-all shadow-sm"
                >
                  <span className="text-[#F3ECE2]">Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F3ECE2]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form with 3D Tactile Liquid Glass Surface & Inputs */}
          <div className="col-span-12 lg:col-span-7">
            <form onSubmit={handleSubmit} className="variation2-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl space-y-6">
              <div>
                <label className="label-tag !text-[#224347] font-bold mb-2.5 block">Project Name</label>
                <input
                  type="text"
                  required
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="e.g. Acme Studio"
                  className="w-full glass-input p-4 !text-[#224347] font-inter text-sm rounded-xl transition-all placeholder-[#224347]/50 font-semibold"
                />
              </div>

              <div>
                <label className="label-tag !text-[#224347] font-bold mb-2.5 block">Target Capability</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Business Websites', 'Website Redesign', 'Landing Pages', 'Digital Experiences'].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setService(item)}
                      className={`p-3 text-xs uppercase tracking-wider font-mono-label text-left rounded-xl transition-all cursor-pointer backdrop-blur-md ${
                        service === item
                          ? 'border border-[#224347] bg-[#224347] text-[#AFBEA4] font-extrabold shadow-sm'
                          : 'border border-[#224347]/20 bg-white/70 text-[#224347] hover:border-[#224347]/40 hover:bg-white font-semibold'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="label-tag !text-[#224347] font-bold mb-2.5 block">Vision</label>
                <textarea
                  rows={4}
                  required
                  value={vision}
                  onChange={(e) => setVision(e.target.value)}
                  placeholder="Tell us what you'd like to achieve..."
                  className="w-full glass-input p-4 !text-[#224347] font-inter text-sm rounded-xl transition-all placeholder-[#224347]/50 resize-none font-semibold"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center !py-4 cursor-pointer shadow-[0_10px_30px_rgba(51,36,33,0.25)]"
              >
                <span className="text-[#F3ECE2]">Initiate Project</span>
                <ArrowUpRight className="w-4 h-4 text-[#F3ECE2]" />
              </button>

              {submitted && (
                <div className="text-center font-mono-label text-xs text-[#224347] font-bold">
                  Opening direct dialogue with studio directors...
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
