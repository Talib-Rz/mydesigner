import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Services - myDesigner',
  description: 'Explore our four core service pillars: Brand Identity Systems, Campaign Systems, Content & Media Design, and Creative Retainer Support.',
  keywords: 'design services, branding, campaign design, graphic design',
};

interface ServiceDetailProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  deliverables: string[];
  index: number;
}

function ServiceDetail({
  icon,
  title,
  description,
  features,
  deliverables,
  index,
}: ServiceDetailProps) {
  return (
    <div className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={index % 2 === 0 ? 'order-1' : 'md:order-2'}>
            <div className="text-5xl mb-6">{icon}</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{description}</p>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Receive</h3>
              <ul className="space-y-3">
                {deliverables.map((deliverable) => (
                  <li
                    key={deliverable}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="text-primary-700 font-bold mt-1">→</span>
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual */}
          <div
            className={`relative h-96 rounded-2xl bg-gradient-to-br from-primary-100 via-accent/20 to-primary-50 flex items-center justify-center order-2 ${
              index % 2 === 0 ? 'md:order-2' : 'md:order-1'
            }`}
          >
            <div className="text-center">
              <div className="text-8xl opacity-20">{icon}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
