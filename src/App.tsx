import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkSection } from './components/WorkSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';
import { useTactileSounds } from './hooks/useTactileSounds';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [inquiredService, setInquiredService] = useState<string>('Business Websites');

  // Activate subtle tactile sound feedback on buttons, cards, and interactive controls
  useTactileSounds();

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProject = () => {
    scrollToSection('contact');
  };

  const handleViewWork = () => {
    scrollToSection('work');
  };

  const handleSelectService = (serviceTitle: string) => {
    setInquiredService(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#AFBEA4] text-[#224347] selection:bg-[#224347] selection:text-[#AFBEA4] relative overflow-x-hidden font-inter">
      {/* 1. Header / iOS Glass Navbar */}
      <Navbar
        onContactClick={handleStartProject}
        onWorkClick={handleViewWork}
      />

      {/* 2. Hero Section (Self-contained deep cobalt canvas with generative ASCII animation) */}
      <Hero
        onViewWork={handleViewWork}
        onStartProject={handleStartProject}
      />

      {/* 3. Main Body Sections with #AFBEA4 Background & #224347 Typography */}
      <main className="relative z-10 bg-[#AFBEA4] text-[#224347]">
        {/* Subtle tactile micro-dot grid across the canvas */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(rgba(34,67,71,0.12)_1px,transparent_1px)] [background-size:28px_28px] opacity-70" />

        <div className="relative z-10">
          {/* 01 Work Section */}
          <WorkSection
            onSelectProject={(project) => setSelectedProject(project)}
          />

          {/* 02 Capabilities / Services Section */}
          <ServicesSection
            onSelectService={handleSelectService}
          />

          {/* 03 About Studio Section */}
          <AboutSection />

          {/* 04 Methodology / Process Section */}
          <ProcessSection />

          {/* Contact Section */}
          <ContactSection
            preselectedService={inquiredService}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={() => {
          setSelectedProject(null);
          scrollToSection('contact');
        }}
      />
    </div>
  );
}
