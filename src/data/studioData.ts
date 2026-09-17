import { Project, ServiceItem, ProcessStep, TeamMember, StudioContactConfig } from '../types';

export const STUDIO_CONFIG: StudioContactConfig = {
  studioName: 'NASHVILLE STUDIOS',
  tagline: 'Digital design atelier & web architecture.',
  heroHeadline: 'WE BUILD DIGITAL EXPERIENCES THAT STAND OUT.',
  heroSubheadline: 'An independent digital atelier partnering with ambitious brands to craft high-conversion websites, tactile glass interfaces, and memorable brand systems.',
  availabilityNote: 'AVAILABLE FOR PROJECTS',
  instagram: 'https://instagram.com',
  instagramHandle: '@nashvillestudios',
  email: 'hello@nashvillestudios.com',
  whatsapp: 'https://wa.me/?text=Hi%20Nashville%20Studios%2C%20I%20would%20like%20to%20discuss%20a%20new%20digital%20experience%20project',
  whatsappNumberDisplay: '+1 (Direct Studio Line)',
};

/**
 * SELECTED WORK
 * Designed with dedicated screenshot viewports, cobalt blue accents, and cool grey framing.
 */
export const PROJECTS_DATA: Project[] = [
  {
    id: 'dreamland-amusement-park',
    number: '01',
    name: 'Dreamland Landmark',
    category: 'Entertainment & Destinations',
    type: 'client',
    typeLabel: 'Client Project',
    shortDescription: 'Interactive attraction guides, real-time park status, and frictionless mobile ticket bookings.',
    fullDescription: 'We engineered a mobile-first digital experience for Dreamland designed to eliminate visitor friction. Highlights include instant attraction guides, live wait-time indicators, and frictionless one-tap booking flows optimized for smartphone visitors.',
    deliverables: ['Mobile-First Experience', 'Interactive Attraction Guide', 'Instant Booking Flow', 'Sub-Second Page Loads'],
    technologies: ['High-Performance React', 'Tactile Glass Navigation', 'Kinetic Micro-Interactions'],
    websiteUrl: 'https://dreamland-demo.example.com',
    accentColor: '#224347',
    theme: 'dark',
    featuredInHero: true,
    mockupData: {
      heroHeading: 'EXPERIENCE THE THRILL AT DREAMLAND',
      heroTagline: 'Family adventures, world-class rollercoasters, and memories that last a lifetime.',
      navItems: ['Rides', 'Tickets', 'Hours', 'Plan Visit'],
      accentGlow: 'rgba(34, 67, 71, 0.35)',
      previewBadge: 'PARK OPEN TODAY • 10 AM - 9 PM',
      featuredCards: [
        { title: 'The Sky Falcon', subtitle: '65mph Hypercoaster', tag: 'High Thrill' },
        { title: 'Lagoon Splash', subtitle: 'Family Water Play', tag: 'All Ages' },
        { title: 'Sunset Wheel', subtitle: 'Panoramic Skyline', tag: 'Scenic' }
      ]
    }
  },
  {
    id: 'amrit-glass',
    number: '02',
    name: 'Amrit Architectural',
    category: 'Hardware & Architecture',
    type: 'client',
    typeLabel: 'Client Project',
    shortDescription: 'Industrial precision catalog connecting architects, contractors, and instant quotation workflows.',
    fullDescription: 'We created an authoritative digital catalog for Amrit Glass. The platform simplifies product discovery for architects, contractors, and builders with high-resolution finish galleries, downloadable specification sheets, and fast quotation requests.',
    deliverables: ['Product Architecture Catalog', 'Architect Spec Download Hub', 'Rapid Quote Request Engine', 'High-Res Material Showcase'],
    technologies: ['Architectural Glass UI', 'Instant Spec Search', 'Responsive Mobile Catalog'],
    websiteUrl: 'https://amritglass-demo.example.com',
    accentColor: '#4B729F',
    theme: 'dark',
    featuredInHero: true,
    mockupData: {
      heroHeading: 'PRECISION ARCHITECTURAL GLASS & FITTINGS',
      heroTagline: 'Engineering timeless clarity and structural durability for modern spaces.',
      navItems: ['Glass Solutions', 'Hardware', 'Specs', 'Quote'],
      accentGlow: 'rgba(75, 114, 159, 0.3)',
      previewBadge: 'CERTIFIED ARCHITECTURAL GRADE',
      featuredCards: [
        { title: 'Toughened Facades', subtitle: 'Structural Glazing', tag: 'Safety' },
        { title: 'Hardware Systems', subtitle: 'Stainless Series', tag: 'Interior' },
        { title: 'Acoustic Glass', subtitle: 'Soundproof Units', tag: 'Acoustic' }
      ]
    }
  },
  {
    id: 'vireo',
    number: '03',
    name: 'Vireo Audio Device',
    category: 'Personal Technology & Audio',
    type: 'demo',
    typeLabel: 'Concept Flagship',
    shortDescription: 'Acoustic showcase blending spatial audio demonstrations with tactile glass interaction design.',
    fullDescription: 'A studio exploration demonstrating our approach to luxury hardware storefronts. Features interactive spatial acoustic visualizers, responsive exploded-assembly diagrams, and an effortless mobile checkout flow.',
    deliverables: ['Product Art Direction', 'Spatial Audio Interactive UI', 'Streamlined Mobile Checkout', 'Fluid Micro-Interactions'],
    technologies: ['Interactive Canvas Display', 'Editorial Typography Pairing', 'Sub-Second Navigation'],
    websiteUrl: 'https://vireo-concept.example.com',
    accentColor: '#224347',
    theme: 'dark',
    featuredInHero: true,
    mockupData: {
      heroHeading: 'ACOUSTIC PURITY IN PHYSICAL FORM',
      heroTagline: 'Precision engineered wireless headphones with neutral sound profiles.',
      navItems: ['Acoustics', 'Craft', 'Specs', 'Order'],
      accentGlow: 'rgba(34, 67, 71, 0.3)',
      previewBadge: 'STUDIO CONCEPT DEMO • 2026',
      featuredCards: [
        { title: 'Vireo One Monitor', subtitle: 'Planar Magnetic Drivers', tag: 'Flagship' },
        { title: 'Lossless Audio', subtitle: 'Ultra-low Latency', tag: 'Acoustic' },
        { title: 'Titanium Frame', subtitle: 'Zero-pressure Fit', tag: 'Precision' }
      ]
    }
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'service-business-websites',
    number: '01',
    title: 'Business Websites',
    description: 'Bespoke digital flagships engineered to position your company ahead of competitors and turn visitors into qualified leads.',
    keyFeatures: [
      'Tailored brand identity & typography',
      'Clear service & pricing tiers',
      'Location, maps, & operating hours',
      'One-tap WhatsApp & phone triggers'
    ]
  },
  {
    id: 'service-website-redesigns',
    number: '02',
    title: 'Website Redesigns',
    description: 'Transform outdated sites into sleek, modern web experiences that build instant credibility on mobile and desktop screens.',
    keyFeatures: [
      'Preserve established SEO rankings',
      'Replace clunky, slow templates',
      'Frictionless customer conversion journeys',
      'Crisp Retina display aesthetics'
    ]
  },
  {
    id: 'service-landing-pages',
    number: '03',
    title: 'Landing Pages',
    description: 'Laser-focused campaign pages engineered to hook attention, communicate value instantly, and maximize conversion rates.',
    keyFeatures: [
      'High-impact visual hierarchy',
      'Frictionless call-to-action buttons',
      'Sub-second page load performance',
      'Optimized for Instagram & paid ad traffic'
    ]
  },
  {
    id: 'service-digital-experiences',
    number: '04',
    title: 'Digital Experiences',
    description: 'Bespoke microsites, interactive product reveals, and sensory showcases that leave an unforgettable impression.',
    keyFeatures: [
      'Interactive canvas & scroll effects',
      'Frosted glass micro-interactions',
      'Fluid gesture & kinematic motion',
      'Distinctive spatial art direction'
    ]
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'We clarify your market positioning, customer psychology, and core goals before writing any code.',
    timelineEstimate: 'Phase 01 • Strategy'
  },
  {
    number: '02',
    title: 'DESIGN',
    description: 'We craft the visual universe, typography systems, and tactile glass interfaces with editorial precision.',
    timelineEstimate: 'Phase 02 • Art Direction'
  },
  {
    number: '03',
    title: 'BUILD',
    description: 'We engineer high-performance frontend code with sub-second loading speeds and responsive accuracy.',
    timelineEstimate: 'Phase 03 • Engineering'
  },
  {
    number: '04',
    title: 'LAUNCH',
    description: 'We rigorously audit, polish animations, deploy to global edge servers, and prepare your site to convert.',
    timelineEstimate: 'Phase 04 • Deployment'
  },
];

export const STUDIO_PHILOSOPHY = {
  quote: 'WE TURN BUSINESSES INTO DIGITAL EXPERIENCES.',
  manifesto: 'Most business websites look like templates created by committee. We believe your digital presence should feel as confident, refined, and memorable as your product. By pairing rigorous engineering with editorial typography and tactile glass interfaces, we craft web experiences that turn visitors into loyal clients.',
  pillars: [
    { label: '01', title: 'EXPERIMENTAL RIGOR', desc: 'Avant-garde visual craft grounded in measurable conversion metrics.' },
    { label: '02', title: 'TACTILE INTERFACES', desc: 'Real-time iOS-grade glassmorphism, responsive depth, and kinetic physics.' },
    { label: '03', title: 'ZERO BLOAT', desc: 'Handcrafted frontend with sub-second response times and zero template lag.' },
  ]
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'ash',
    name: 'ASH',
    initials: 'AS',
    roles: ['Creative Direction', 'Frontend Engineering'],
    shortBio: 'Directing visual identity systems, interface architecture, and bespoke typography executions.',
    socialLinks: {
      instagram: 'https://instagram.com',
      email: 'ash@nashvillestudios.com'
    }
  },
  {
    id: 'nick',
    name: 'NICK',
    initials: 'NI',
    roles: ['Operations', 'Growth Strategy'],
    shortBio: 'Guiding studio production workflows, project timelines, budget allocations, and delivery precision.',
    socialLinks: {
      instagram: 'https://instagram.com',
      email: 'nick@nashvillestudios.com'
    }
  },
  {
    id: 'animesh',
    name: 'ANIMESH',
    initials: 'AN',
    roles: ['Client Acquisition', 'Brand Partnerships'],
    shortBio: 'Partnering with ambitious business leaders and aligning creative scope with strategic growth.',
    socialLinks: {
      instagram: 'https://instagram.com',
      email: 'animesh@nashvillestudios.com'
    }
  }
];
