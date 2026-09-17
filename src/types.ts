export type ProjectType = 'client' | 'concept' | 'demo';

export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  type: ProjectType;
  typeLabel: string; // e.g. "Client Project" or "Concept Website — Demo"
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  technologies: string[];
  websiteUrl?: string;
  badgeColor?: string;
  accentColor: string;
  theme: 'dark' | 'light' | 'vibrant';
  featuredInHero?: boolean;
  mockupData: {
    heroHeading: string;
    heroTagline: string;
    navItems: string[];
    accentGlow: string;
    previewBadge: string;
    featuredCards?: { title: string; subtitle: string; tag: string }[];
  };
}

export interface TeamMember {
  id: string;
  name: string;
  roles: string[];
  initials: string;
  shortBio?: string;
  socialLinks?: {
    instagram?: string;
    email?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  keyFeatures: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  timelineEstimate?: string;
}

export interface ValueItem {
  title: string;
  description: string;
  iconName: string;
}

export interface StudioContactConfig {
  studioName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  availabilityNote: string;
  instagram: string;
  instagramHandle: string;
  email: string;
  whatsapp: string;
  whatsappNumberDisplay: string;
}
