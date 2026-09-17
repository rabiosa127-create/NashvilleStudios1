import React, { useState } from 'react';
import { Project } from '../types';
import { X, Monitor, Smartphone, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onContactClick }) => {
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity"
      />

      {/* Refined Glass Atelier Modal Window */}
      <div className="glass-panel relative w-full max-w-4xl overflow-hidden z-10 my-8 rounded-2xl sm:rounded-3xl border border-[#224347]/25 shadow-[0_32px_80px_rgba(34,67,71,0.25)] text-[#224347]">
        
        {/* Modal Top Header Bar */}
        <div className="relative flex items-center justify-between px-6 py-4 border-b border-[#224347]/20 bg-white/80 backdrop-blur-md">
          {/* Subtle internal light specular reflection line */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

          <div className="flex items-center gap-3">
            <span className="font-mono-label text-xs text-[#224347] font-extrabold">
              {project.number}
            </span>
            <div>
              <h3 className="font-syne text-base sm:text-lg text-[#224347] font-bold uppercase">
                {project.name}
              </h3>
              <div className="text-[10px] font-mono-label text-[#224347] uppercase font-bold">
                {project.category}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Viewport switcher */}
            <div className="flex items-center gap-1 p-1 bg-white/80 border border-[#224347]/20 rounded-full backdrop-blur-md shadow-sm">
              <button
                onClick={() => setPreviewMode('desktop')}
                className={`p-1.5 rounded-full text-xs transition-colors cursor-pointer ${
                  previewMode === 'desktop' ? 'bg-[#224347] text-[#AFBEA4] font-bold border border-[#224347]' : 'text-[#224347] hover:text-[#172e31]'
                }`}
                title="Desktop Viewport"
              >
                <Monitor className={`w-4 h-4 ${previewMode === 'desktop' ? 'text-[#AFBEA4]' : 'text-[#224347]'}`} />
              </button>
              <button
                onClick={() => setPreviewMode('mobile')}
                className={`p-1.5 rounded-full text-xs transition-colors cursor-pointer ${
                  previewMode === 'mobile' ? 'bg-[#224347] text-[#AFBEA4] font-bold border border-[#224347]' : 'text-[#224347] hover:text-[#172e31]'
                }`}
                title="Mobile Viewport"
              >
                <Smartphone className={`w-4 h-4 ${previewMode === 'mobile' ? 'text-[#AFBEA4]' : 'text-[#224347]'}`} />
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 border border-[#224347]/30 hover:border-[#224347] text-[#224347] hover:bg-[#224347]/10 transition-all cursor-pointer rounded-full"
              aria-label="Close case study"
            >
              <X className="w-4 h-4 text-[#224347]" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Interactive Mockup Container with Refined Glass Depth */}
          <div className="relative overflow-hidden border border-[#224347]/20 bg-white/60 backdrop-blur-xl rounded-[3px] shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.9)]">
            {/* Top specular refraction line */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none" />

            <div className="flex items-center justify-between px-4 py-2.5 bg-white/80 border-b border-[#224347]/15 text-[10px] font-mono-label text-[#224347] font-bold">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#224347]/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#224347]/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#224347]/70" />
              </div>
              <span className="text-[#224347]/80">PREVIEW // {previewMode.toUpperCase()} VIEWPORT</span>
              <span className="font-extrabold text-[#224347] underline decoration-[#224347]">LIVE SPEC</span>
            </div>

            <div className={`transition-all duration-300 mx-auto p-6 sm:p-8 ${
              previewMode === 'mobile' ? 'max-w-xs' : 'w-full'
            }`}>
              <div className="p-6 bg-white/80 border border-[#224347]/20 rounded-[3px] backdrop-blur-lg shadow-sm">
                <span className="text-[10px] font-mono-label text-[#224347] uppercase font-extrabold">
                  {project.mockupData.previewBadge}
                </span>
                <h4 className="font-syne text-lg sm:text-xl text-[#224347] mt-2 mb-3 uppercase font-bold">
                  {project.mockupData.heroHeading}
                </h4>
                <p className="font-inter text-xs text-[#224347]/80 mb-4 leading-relaxed font-medium">
                  {project.mockupData.heroTagline}
                </p>

                {project.mockupData.featuredCards && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {project.mockupData.featuredCards.map((c, i) => (
                      <div key={i} className="p-2.5 bg-white/90 border border-[#224347]/15 rounded-[2px] shadow-xs">
                        <div className="text-[9px] font-mono-label text-[#224347] font-bold">{c.tag}</div>
                        <div className="text-[11px] font-bold text-[#224347]">{c.title}</div>
                        <div className="text-[10px] text-[#224347]/70 font-medium">{c.subtitle}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Project Details & Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="label-tag !text-[#224347] font-extrabold mb-2">// Overview &amp; Strategy</div>
              <p className="font-inter text-xs sm:text-sm text-[#224347]/80 leading-relaxed font-medium">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <div className="label-tag !text-[#224347] font-extrabold mb-3">// Key Deliverables</div>
              <div className="space-y-2.5">
                {project.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-inter text-[#224347] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#224347]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Action Strip inside Modal */}
          <div className="pt-6 border-t border-[#224347]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono-label text-[#224347] font-extrabold">
              Interested in a similar digital flagship?
            </span>
            <button
              onClick={onContactClick}
              className="btn-primary !py-3 !px-6 !text-xs cursor-pointer w-full sm:w-auto shadow-[0_10px_30px_rgba(51,36,33,0.25)]"
            >
              <span className="text-[#F3ECE2]">Inquire Similar Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#F3ECE2]" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
