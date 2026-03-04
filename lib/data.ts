export interface CaseStudy {
  id: number;
  title: string;
  category: string;
  description: string;
  results: string[];
  image: string;
}

export interface ServicePillar {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Segment {
  id: number;
  type: 'B2C' | 'B2B';
  title: string;
  description: string;
  examples: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'TechCon 2024 Campaign',
    category: 'Event Identity',
    description: 'Complete visual identity system for India\'s largest tech conference with 5000+ attendees.',
    results: ['200% social media engagement increase', 'Unified visual presence across 8 platforms', 'Premium brand perception'],
    image: '/images/case-study-1.webp',
  },
  {
    id: 2,
    title: 'EduStartup Rebranding',
    category: 'Brand Identity',
    description: 'Complete rebrand for an EdTech platform targeting college students with modern, AI-forward visual language.',
    results: ['40% increase in user retention', 'Enhanced brand recognition', 'Improved conversion rates by 35%'],
    image: '/images/case-study-2.webp',
  },
  {
    id: 3,
    title: 'Fest Media Campaign',
    category: 'Content & Campaign',
    description: 'Designed comprehensive video and graphic content suite for annual college festival.',
    results: ['1.2M+ video views', 'Peak engagement on all channels', 'Record ticket sales'],
    image: '/images/case-study-3.webp',
  },
  {
    id: 4,
    title: 'Real Estate Launch Campaign',
    category: 'Marketing Creative',
    description: 'Premium campaign design for luxury residential project targeting high-net-worth individuals.',
    results: ['Pre-launch interest 3x target', '85% unit sold in first month', 'Featured in 5 leading publications'],
    image: '/images/case-study-4.webp',
  },
];

export const servicePillars: ServicePillar[] = [
  {
    id: 1,
    title: 'Brand Identity Systems',
    description: 'Complete visual identity including logo design, color systems, typography guidelines, and brand applications across digital and print mediums.',
    icon: '🎨',
  },
  {
    id: 2,
    title: 'Event & Launch Campaign Systems',
    description: 'Structured visual strategies for event launches, conferences, and product releases. Complete suite from concept to execution.',
    icon: '🚀',
  },
  {
    id: 3,
    title: 'Content & Media Design',
    description: 'High-impact graphics, video content, social media assets, and multimedia pieces designed for maximum engagement and brand consistency.',
    icon: '📹',
  },
  {
    id: 4,
    title: 'Marketing Creative Support',
    description: 'Ongoing retainer-based creative support for your marketing initiatives. Flexible, responsive, and scalable solutions.',
    icon: '💡',
  },
];

export const segments: Segment[] = [
  {
    id: 1,
    type: 'B2C',
    title: 'College Events',
    description: 'Fests, conferences, workshops, and sports events that need modern, student-centric visual campaigns.',
    examples: ['College Fests', 'Conferences', 'Workshops', 'Sports Events'],
  },
  {
    id: 2,
    type: 'B2C',
    title: 'Alumni & Professional Organizations',
    description: 'Professional visual branding for alumni associations and placement cell campaigns.',
    examples: ['Alumni Associations', 'Placement Cells', 'Networking Events'],
  },
  {
    id: 3,
    type: 'B2C',
    title: 'Startups & Businesses',
    description: 'Emerging entrepreneurs need bold, structured visual identities to stand out in competitive markets.',
    examples: ['Tech Startups', 'D2C Brands', 'Service Businesses'],
  },
  {
    id: 4,
    type: 'B2C',
    title: 'EdTech & Content Creators',
    description: 'Online education platforms and content creators require premium, modern visual systems.',
    examples: ['EdTech Platforms', 'YouTubers', 'Course Creators', 'Podcasters'],
  },
  {
    id: 5,
    type: 'B2B',
    title: 'Event Organizers',
    description: 'Full-service visual design partners for event management companies handling corporate and consumer events.',
    examples: ['Event Management', 'Conference Planning', 'Festival Organization'],
  },
  {
    id: 6,
    type: 'B2B',
    title: 'Marketing Agencies',
    description: 'Creative studios that need reliable design partners for client campaigns and projects.',
    examples: ['Advertising Agencies', 'Digital Marketing', 'PR Agencies'],
  },
  {
    id: 7,
    type: 'B2B',
    title: 'NGOs & Social Organizations',
    description: 'Non-profits and social organizations that need impactful visual campaigns on lean budgets.',
    examples: ['NGOs', 'Social Causes', 'Community Organizations'],
  },
  {
    id: 8,
    type: 'B2B',
    title: 'Real Estate Companies',
    description: 'Property developers need sophisticated visual campaigns for residential and commercial launches.',
    examples: ['Real Estate Developers', 'Property Consultants', 'Architects'],
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'Understanding your brand, audience, and goals through detailed consultation.',
  },
  {
    number: '02',
    title: 'Concept Development',
    description: 'Creating initial design directions and visual concepts aligned with strategy.',
  },
  {
    number: '03',
    title: 'Design & Refinement',
    description: 'Developing comprehensive designs with multiple iterations based on feedback.',
  },
  {
    number: '04',
    title: 'System Development',
    description: 'Building complete brand systems with guidelines for consistent application.',
  },
  {
    number: '05',
    title: 'Asset Creation',
    description: 'Producing all final assets optimized for different mediums and platforms.',
  },
  {
    number: '06',
    title: 'Launch & Support',
    description: 'Delivering complete packages with documentation and ongoing support.',
  },
];
