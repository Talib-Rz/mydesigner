'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';

interface ServiceDetailProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  deliverables: string[];
  image: string;
  index: number;
}

function ServiceDetail({
  icon,
  title,
  description,
  features,
  deliverables,
  image,
  index,
}: ServiceDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header with Icon, Title, and Description */}
        <div className="mb-12">
          <div className="text-6xl mb-6">{icon}</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">{description}</p>
        </div>

        {/* Landscape Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-lg h-80 md:h-96 lg:h-[28rem]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Features & Deliverables Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Key Features */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="text-primary-700">✓</span>
              Key Features
            </h3>
            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-accent font-bold text-lg flex-shrink-0 mt-1">•</span>
                  <span className="text-gray-700 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What You'll Receive */}
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 md:p-10 border border-accent/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <span className="text-accent">→</span>
              What You'll Receive
            </h3>
            <ul className="space-y-4">
              {deliverables.map((deliverable, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-primary-700 font-bold text-lg flex-shrink-0 mt-1">⬩</span>
                  <span className="text-gray-700 leading-relaxed">{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const services: ServiceDetailProps[] = [
  {
    icon: '🎨',
    title: 'Brand Identity Systems',
    description:
      'Create a complete, cohesive visual identity that represents your brand\'s values and resonates with your audience. From logo design to comprehensive brand guidelines.',
    features: [
      'Logo design and variations',
      'Color palette development',
      'Typography selection and hierarchy',
      'Icon systems and illustration style',
      'Photography style guide',
      'Brand personality and tone guidelines',
    ],
    deliverables: [
      'Logo files (SVG, PNG, vector formats)',
      'Complete brand guidelines document',
      'Color specifications (RGB, HEX, CMYK)',
      'Typography usage documentation',
      'Business collateral templates',
      'Digital and print specifications',
    ],
    image: '/images/services/service-brand-identity.svg',
    index: 0,
  },
  {
    icon: '🚀',
    title: 'Event & Launch Campaign Systems',
    description:
      'Structured visual strategies for product launches, events, and major announcements. We create unified campaigns that work across all touchpoints.',
    features: [
      'Campaign concept and strategy',
      'Unified visual language',
      'Multi-channel asset creation',
      'Social media content suite',
      'Event branding and collateral',
      'Timeline and rollout strategy',
    ],
    deliverables: [
      'Campaign brand book',
      'Social media asset pack',
      'Email and web templates',
      'Print collateral designs',
      'Video storyboards and concepts',
      'Content calendar and guidelines',
    ],
    image: '/images/services/service-campaign.svg',
    index: 1,
  },
  {
    icon: '📹',
    title: 'Content & Media Design',
    description:
      'High-impact graphics, videos, and multimedia content that captures attention and drives engagement. Every piece designed for maximum impact.',
    features: [
      'Social media graphics (all platforms)',
      'Video editing and animation',
      'Infographic design',
      'Presentation design',
      'Email newsletter templates',
      'Web and app graphics',
    ],
    deliverables: [
      'Ad-ready creative files',
      'Video exports (multiple formats)',
      'Social media content calendar',
      'Motion graphics packages',
      'Web-optimized assets',
      'Print-ready files',
    ],
    image: '/images/services/service-content.svg',
    index: 2,
  },
  {
    icon: '💡',
    title: 'Marketing Creative Retainer',
    description:
      'Ongoing creative support for your marketing initiatives. Flexible, responsive design partnership that scales with your needs.',
    features: [
      'Monthly retainer-based model',
      'Priority turnaround times',
      'Unlimited revisions',
      'Strategic creative direction',
      'Brand consistency audits',
      'Quarterly performance reviews',
    ],
    deliverables: [
      'Custom monthly content packages',
      'Priority support and revisions',
      'Strategic campaign recommendations',
      'Performance insights and reporting',
      'Brand consistency guidelines updates',
      'Scalable asset libraries',
    ],
    image: '/images/services/service-marketing.svg',
    index: 3,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="Four core service pillars designed to meet every aspect of your visual branding needs."
        primaryCta={{ label: 'Get In Touch', href: '/contact' }}
        showAnimation={true}
      />

      {/* Service Details */}
      {services.map((service) => (
        <ServiceDetail key={service.title} {...service} />
      ))}

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose myDesigner</h2>
            <p className="section-subtitle">
              We combine strategic thinking with creative excellence to deliver work that matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 grid-center">
            {[
              {
                number: '150+',
                label: 'Projects Completed',
                description: 'From college events to enterprise brands',
              },
              {
                number: '95%',
                label: 'Client Satisfaction',
                description: 'Consistent excellence and on-time delivery',
              },
              {
                number: '5+',
                label: 'Years Experience',
                description: 'Deep expertise in visual branding and campaigns',
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary-700 to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        heading="Ready to Get Started?"
        subheading="Let's discuss which services are right for your project."
      />
    </>
  );
}
