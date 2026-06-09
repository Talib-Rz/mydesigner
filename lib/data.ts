export interface CaseStudy {
  id: number;
  title: string;
  category: string;
  segment: 'Event' | 'Startup & Business' | 'Agency';
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

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  testimonial: string;
  image: string;
  rating: number;
}

export interface HomepageSegment {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface DeliverablePillar {
  id: number;
  category: string;
  icon: string;
  description: string;
  items: string[];
}

export interface WhyChooseUs {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface ProblemPoint {
  id: number;
  text: string;
}

export interface SimplifiedSegment {
  id: number;
  title: string;
  icon: string;
  examples: string[];
  needs: string[];
  description: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'TechCon 2024 Campaign',
    category: 'Event Identity',
    segment: 'Event',
    description: 'Complete visual identity system for India\'s largest tech conference with 5000+ attendees.',
    results: ['200% social media engagement increase', 'Unified visual presence across 8 platforms', 'Premium brand perception'],
    image: '/images/case-studies/case-study-1.png',
  },
  {
    id: 2,
    title: 'EduStartup Rebranding',
    category: 'Brand Identity',
    segment: 'Startup & Business',
    description: 'Complete rebrand for an EdTech platform targeting college students with modern, AI-forward visual language.',
    results: ['40% increase in user retention', 'Enhanced brand recognition', 'Improved conversion rates by 35%'],
    image: '/images/case-studies/case-study-2.png',
  },
  {
    id: 3,
    title: 'Fest Media Campaign',
    category: 'Content & Campaign',
    segment: 'Event',
    description: 'Designed comprehensive video and graphic content suite for annual college festival.',
    results: ['1.2M+ video views', 'Peak engagement on all channels', 'Record ticket sales'],
    image: '/images/case-studies/case-study-3.png',
  },
  {
    id: 4,
    title: 'Real Estate Launch Campaign',
    category: 'Marketing Creative',
    segment: 'Agency',
    description: 'Premium campaign design for luxury residential project targeting high-net-worth individuals.',
    results: ['Pre-launch interest 3x target', '85% unit sold in first month', 'Featured in 5 leading publications'],
    image: '/images/case-studies/case-study-4.png',
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

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Praveen Sankaran',
    title: 'Associate Professor',
    company: 'NIT Calicut',
    testimonial: 'Working with myDesigner was a fantastic experience. Their team quickly understood our vision and translated it into compelling designs that effectively communicated our message. The professionalism, creativity, and attention to detail exceeded our expectations.',
    image: '/images/testimonials/testimonial-1.png',
    rating: 5,
  },
  {
    id: 2,
    name: 'Prateek Negi',
    title: 'Associate Dean (Research & Consultancy)',
    company: 'NIT Calicut',
    testimonial: 'myDesigner brought a unique blend of creativity and strategic thinking to our projects. Their ability to create visually engaging content while maintaining clarity and professionalism made a significant impact. I highly appreciate their commitment to quality and timely delivery.',
    image: '/images/testimonials/testimonial-2.png',
    rating: 5,
  },
  {
  id: 3,
    name: 'Abbad Maliyekkal',
    title: 'Founder, IQUED',
    company: 'HTIC (IIT Madras)',
    testimonial: 'The team at myDesigner consistently delivered exceptional creative solutions that elevated our brand presence. Their designs were modern, impactful, and perfectly aligned with our goals. I would confidently recommend them to anyone looking for high-quality design and branding services.',
    image: '/images/testimonials/testimonial-3.png',
    rating: 5,
  },
];

// Home Page Specific Data
export const homepageSegments: HomepageSegment[] = [
  {
    id: 1,
    title: 'Events',
    description: 'Conferences, workshops, summits, college fests, alumni meets and corporate events.',
    icon: '🎉',
  },
  {
    id: 2,
    title: 'Startups & Businesses',
    description: 'Branding, presentations, marketing assets, launch campaigns and growth-focused visual systems.',
    icon: '🚀',
  },
  {
    id: 3,
    title: 'Agencies',
    description: 'White-label design support, campaign creatives and client delivery support.',
    icon: '🤝',
  },
];

export const problemPoints: ProblemPoint[] = [
  {
    id: 1,
    text: 'Event branding feels inconsistent',
  },
  {
    id: 2,
    text: 'Marketing creatives look generic',
  },
  {
    id: 3,
    text: 'Different vendors create disconnected experiences',
  },
  {
    id: 4,
    text: 'Teams struggle to maintain visual consistency',
  },
  {
    id: 5,
    text: 'AI tools generate visuals but not complete systems',
  },
  {
    id: 6,
    text: 'Campaigns fail to stand out in crowded markets',
  },
];

export const deliverablePillars: DeliverablePillar[] = [
  {
    id: 1,
    category: 'Brand',
    icon: '🎨',
    description: 'Build a professional visual identity that people recognize and remember. From logos to comprehensive brand systems that maintain consistency across all touchpoints.',
    items: ['Logos', 'Identity Systems', 'Brand Guidelines', 'Presentations', 'Brochures'],
  },
  {
    id: 2,
    category: 'Content',
    icon: '📹',
    description: 'Create visually consistent content that engages your audience. We design everything from social media creatives to motion graphics that drive engagement and conversions.',
    items: ['Social Media Creatives', 'Reels', 'Motion Graphics', 'Campaign Creatives', 'YouTube Assets'],
  },
  {
    id: 3,
    category: 'Experiences',
    icon: '✨',
    description: 'Bring your brand to life through immersive visual experiences. From events to merchandise, we create tangible brand touchpoints that leave lasting impressions.',
    items: ['Event Branding', 'Stage Backdrops', 'Certificates', 'Standees', 'Merchandise', 'Venue Graphics'],
  },
];

export const whyChooseUs: WhyChooseUs[] = [
  {
    id: 1,
    title: 'Strategic Thinking',
    description: 'Every design decision is backed by strategy and purpose, not just aesthetics.',
    icon: '🎯',
  },
  {
    id: 2,
    title: 'Consistent Identity',
    description: 'We create cohesive visual systems that work across all touchpoints and platforms.',
    icon: '✓',
  },
  {
    id: 3,
    title: 'End-to-End Support',
    description: 'From concept to delivery, we handle everything you need for a complete visual solution.',
    icon: '🔄',
  },
];

export const homeProcessSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understanding your brand, goals, and audience through detailed consultation.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Creating strategic design directions and visual concepts.',
  },
  {
    number: '03',
    title: 'Execute',
    description: 'Developing comprehensive designs with iterative refinement.',
  },
  {
    number: '04',
    title: 'Refine',
    description: 'Building complete systems with guidelines for consistency.',
  },
  {
    number: '05',
    title: 'Deliver',
    description: 'Delivering final assets with documentation and support.',
  },
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: 'What types of events do you work with?',
    answer: 'We work with all types of events including conferences, workshops, college fests, alumni meets, hackathons, and corporate events. We specialize in creating complete visual identity systems that work across all event touchpoints.',
  },
  {
    id: 2,
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. Most branding projects take 2-4 weeks, while event campaigns can be completed in 1-2 weeks. We\'ll provide a detailed timeline during the discovery phase.',
  },
  {
    id: 3,
    question: 'Do you offer retainer services?',
    answer: 'Yes, we offer flexible retainer packages for ongoing creative support. This is ideal for agencies, startups, and organizations that need consistent design support throughout the year.',
  },
  {
    id: 4,
    question: 'What\'s included in a visual identity system?',
    answer: 'Our visual identity systems include logo design, color palettes, typography guidelines, brand applications, templates, and a comprehensive brand guidelines document to ensure consistency across all materials.',
  },
  {
    id: 5,
    question: 'Can you work with our existing brand guidelines?',
    answer: 'Absolutely! We can work within your existing brand guidelines or help you evolve and refine them. We\'re flexible and collaborative in our approach.',
  },
  {
    id: 6,
    question: 'Do you provide source files and ownership?',
    answer: 'Yes, all deliverables come with source files, and you retain complete ownership of all designs. We provide everything you need to maintain and evolve your visual systems independently.',
  },
];

// Simplified Segments for Segments Page
export const simplifiedSegments: SimplifiedSegment[] = [
  {
    id: 1,
    title: 'Events',
    icon: '🎪',
    examples: ['Conferences', 'College Fests', 'Workshops', 'Hackathons', 'Alumni Meets', 'Corporate Events'],
    needs: ['Branding', 'Promotion', 'Certificates', 'Venue Graphics', 'Event Experience'],
    description: 'From intimate workshops to large-scale conferences, we create visual experiences that make events memorable. Our event branding systems ensure consistency across all touchpoints while creating the excitement your attendees expect.',
  },
  {
    id: 2,
    title: 'Startups & Businesses',
    icon: '🚀',
    examples: ['Startups', 'EdTech', 'Consulting Firms', 'SaaS Companies', 'Growing Businesses'],
    needs: ['Brand Identity', 'Marketing Assets', 'Presentations', 'Launch Campaigns'],
    description: 'Whether you\'re pre-launch or scaling, we create visual systems that position you for success. From founding identity to growth marketing, we help you communicate your value clearly and professionally.',
  },
  {
    id: 3,
    title: 'Agencies',
    icon: '🤝',
    examples: ['Marketing Agencies', 'Advertising Agencies', 'PR Agencies', 'Creative Studios'],
    needs: ['White-label Design Support', 'Campaign Assets', 'Client Deliverables'],
    description: 'We\'re your trusted creative partner. Whether you need white-label design support for client projects or campaign-specific creatives, we deliver consistently excellent work that reflects well on your agency.',
  },
];

export interface NotForSegment {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const notForSegments: NotForSegment[] = [
  {
    id: 1,
    title: 'One-off Poster Design Only',
    description: 'Businesses looking for quick, isolated design pieces without any brand consistency or strategic thinking.',
    icon: '❌',
  },
  {
    id: 2,
    title: 'Quick Template-Based Work',
    description: 'Projects that need rapid turnarounds with generic templates or minimal customization.',
    icon: '❌',
  },
  {
    id: 3,
    title: 'Projects Without Clear Goals',
    description: 'Work without defined branding or communication objectives where impact is uncertain.',
    icon: '❌',
  },
];

export interface Partner {
  id: number;
  name: string;
  location: string;
  description: string;
  website?: string;
  logo?: string;
}

export const executionPartners: Partner[] = [
  {
    id: 1,
    name: 'ArtPlus',
    location: 'Muzaffarpur, Bihar',
    description: 'Trusted printing and fabrication partner supporting businesses, institutions and events with high-quality production solutions.',
    website: 'https://www.artplus.in',
    logo: '/images/partners/artplus-logo.png',
  },
];
