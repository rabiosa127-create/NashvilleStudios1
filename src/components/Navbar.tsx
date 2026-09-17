import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { NashvilleLogo } from './NashvilleLogo';
import { isSoundMuted, toggleSound, subscribeSoundState } from '../utils/sound';

interface NavbarProps {
  onContactClick: () => void;
  onWorkClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [muted, setMuted] = useState(isSoundMuted());

  useEffect(() => {
    const unsubscribe = subscribeSoundState((newMuted) => setMuted(newMuted));
    return unsubscribe;
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section on scroll
      const sections = ['contact', 'process', 'about', 'services', 'work', 'home'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-2.5 sm:top-4 md:top-5 left-0 right-0 z-50 flex flex-col items-center px-3 sm:px-5 md:px-6 pointer-events-none transition-all duration-300">
      {/* Floating 3D Frosted Glass Capsule */}
      <div
        className={`glass3d rounded-full pointer-events-auto w-full max-w-5xl flex items-center justify-between gap-2.5 sm:gap-4 md:gap-6 px-3 sm:px-4.5 md:px-6 lg:px-7 transition-all duration-300 ${
          scrolled ? 'is-scrolled py-1.5 sm:py-2 md:py-2.5' : 'py-2 sm:py-2.5 md:py-3'
        }`}
      >
        {/* Official Nashville Studios Logo with Matching Liquid Glassmorphism */}
        <a
          href="#home"
          className="glass-logo group flex items-center shrink-0 cursor-pointer transition-all duration-300 active:scale-95 focus:outline-none"
          aria-label="Nashville Studios Home"
        >
          <NashvilleLogo className="h-6 sm:h-6.5 md:h-7 lg:h-7.5 w-auto" />
        </a>

        {/* Center Nav Links */}
        <nav className="glass3d hidden md:flex items-center gap-1 p-1 rounded-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-[0.7rem] uppercase tracking-[0.14em] font-mono-label font-bold px-3.5 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#224347] text-[#AFBEA4] shadow-[0_2px_8px_rgba(34,67,71,0.35),inset_0_1px_1.5px_rgba(255,255,255,0.4)] border border-[#224347]'
                    : 'text-[#224347]/85 hover:text-[#224347] hover:bg-white/40 border border-transparent'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button: iOS Glass Accent Button & Sound Control */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Subtle Tactile Sound Toggle */}
          <button
            type="button"
            onClick={() => toggleSound()}
            title={muted ? 'Enable tactile sound' : 'Mute tactile sound'}
            aria-label={muted ? 'Enable tactile sound' : 'Mute tactile sound'}
            className="p-1.5 sm:p-2 rounded-full backdrop-blur-md transition-all cursor-pointer text-[#224347] bg-white/60 hover:bg-white border border-[#224347]/25 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.9)] flex items-center justify-center"
          >
            {muted ? (
              <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#224347]/60" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#224347]" />
            )}
          </button>

          <button
            onClick={onContactClick}
            className="btn-primary !py-1.5 sm:!py-2 !px-3 sm:!px-4.5 !text-[0.62rem] sm:!text-[0.65rem] !tracking-wider rounded-full cursor-pointer whitespace-nowrap shrink-0 shadow-[0_4px_18px_rgba(34,67,71,0.2),inset_0_1px_1.5px_rgba(255,255,255,0.9)] border border-white/60 active:scale-95 transition-transform"
          >
            <span className="text-[#022d28]">Let&apos;s Talk</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 sm:p-2 md:hidden rounded-full backdrop-blur-md transition-all cursor-pointer text-[#224347] bg-white/70 hover:bg-white border border-[#224347]/30 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.9)]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer in iOS Frosted Sheet Style */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden w-full max-w-5xl mt-2.5 p-4 shadow-[0_24px_50px_rgba(34,67,71,0.18),inset_0_1px_2px_rgba(255,255,255,1)] bg-white/95 backdrop-blur-3xl flex flex-col gap-1.5 z-50 rounded-3xl border border-[#224347]/25 animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xs uppercase tracking-[0.14em] font-mono-label font-bold py-2.5 px-4 rounded-2xl border transition-all ${
                  isActive
                    ? 'bg-[#224347] border-[#224347] text-[#AFBEA4] shadow-sm'
                    : 'border-transparent text-[#224347]/80 hover:bg-[#224347]/10 hover:text-[#224347]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onContactClick();
            }}
            className="btn-primary !py-3 w-full justify-center !text-xs mt-2 rounded-2xl cursor-pointer shadow-[0_6px_20px_rgba(34,67,71,0.4)] !text-[#AFBEA4] !bg-[#224347]"
          >
            Initiate Project
          </button>

          <button
            type="button"
            onClick={() => toggleSound()}
            className="flex items-center justify-between py-2 px-4 rounded-xl border border-[#224347]/15 bg-white/70 text-[#224347] text-xs font-mono-label font-bold cursor-pointer mt-1"
          >
            <span className="flex items-center gap-2">
              {muted ? <VolumeX className="w-4 h-4 text-[#224347]/60" /> : <Volume2 className="w-4 h-4 text-[#224347]" />}
              <span>Tactile Audio</span>
            </span>
            <span className="text-[10px] uppercase font-bold text-[#224347]/70">
              {muted ? 'Muted' : 'Active'}
            </span>
          </button>
        </div>
      )}
    </header>
  );
};
