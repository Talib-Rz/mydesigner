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
      className={`py-16 sm:py-20 md:py-32 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header with Icon, Title, and Description */}
        <div className="mb-8 sm:mb-12">
          <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">{icon}</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">{title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">{description}</p>
        </div>

        {/* Landscape Image */}
        <div className="mb-12 sm:mb-16 rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 md:h-96 lg:h-[28rem]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Features & Deliverables Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Key Features */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-6 sm:p-8 md:p-10">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-3">
              <span className="text-primary-700 text-lg sm:text-xl">✓</span>
              Key Features
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 sm:gap-4">
                  <span className="text-accent font-bold text-base sm:text-lg flex-shrink-0 mt-0.5 sm:mt-1">•</span>
                  <span className="text-gray-700 leading-relaxed text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What You'll Receive */}
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-6 sm:p-8 md:p-10 border border-accent/20">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 flex items-center gap-3">
              <span className="text-accent text-lg sm:text-xl">→</span>
              What You'll Receive
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {deliverables.map((deliverable, idx) => (
                <li key={idx} className="flex items-start gap-3 sm:gap-4">
                  <span className="text-primary-700 font-bold text-base sm:text-lg flex-shrink-0 mt-0.5 sm:mt-1">⬩</span>
                  <span className="text-gray-700 leading-relaxed text-sm sm:text-base">{deliverable}</span>
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
    title: 'Brand Systems',
    description:
      'Build trust and credibility through a complete, cohesive visual identity. Brand Systems go beyond a logo—we create foundational visual frameworks that represent your organization and resonate with your audience across all touchpoints.',
    features: [
      'Strategic brand positioning',
      'Logo design and variations',
      'Color palette and typography',
      'Complete brand guidelines',
      'Application templates',
      'Consistency frameworks',
    ],
    deliverables: [
      'Logo (vector formats)',
      'Brand guidelines document',
      'Business collateral (letterhead, cards, envelopes)',
      'Company profiles and presentations',
      'Brochure templates',
      'Digital and print specifications',
    ],
    image: '/images/services/service-brand-identity.png',
    index: 0,
  },
  {
    icon: '📹',
    title: 'Content Systems',
    description:
      'Drive engagement and grow your audience with strategic visual content. Content Systems include high-impact graphics, videos, and multimedia designed to capture attention, tell your story, and inspire action across all digital platforms.',
    features: [
      'Content strategy and planning',
      'Multi-platform graphics design',
      'Video editing and animation',
      'Motion graphics creation',
      'Reels and short-form content',
      'Ad creative optimization',
    ],
    deliverables: [
      'Social media content packs (all platforms)',
      'Reels and motion graphics',
      'Campaign advertising creatives',
      'YouTube thumbnails and assets',
      'Email newsletter templates',
      'Web and app graphics',
    ],
    image: '/images/services/service-content.png',
    index: 1,
  },
  {
    icon: '✨',
    title: 'Experience Systems',
    description:
      'Create unforgettable moments through integrated visual experiences. Experience Systems unite events, conferences, and live activations with cohesive branding that makes a lasting impression on attendees.',
    features: [
      'Event branding strategy',
      'Conference visual identity',
      'Collateral and signage design',
      'Stage and venue graphics',
      'Merchandise and giveaways',
      'Print coordination',
    ],
    deliverables: [
      'Event brand guidelines',
      'Stage backdrops and signage',
      'Certificates and awards design',
      'Standees and banners',
      'Merchandise designs',
      'Venue graphics and wayfinding',
    ],
    image: '/images/services/service-campaign.png',
    index: 2,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="Three core systems designed to build trust, drive engagement, and create memorable experiences for your brand."
        primaryCta={{ label: 'Get In Touch', href: '/contact' }}
        showAnimation={true}
      />

      {/* Service Details */}
      {services.map((service) => (
        <ServiceDetail key={service.title} {...service} />
      ))}

      {/* Production & Execution Support Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="section-title">Production & Execution Support</h2>
              <p className="section-subtitle">
                Beyond design—we handle the execution details to bring your vision to life
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Handle</h3>
              {[
                {
                  icon: '📄',
                  title: 'Print Collaterals',
                  description: 'Business cards, letterheads, envelopes, folders, and all printed materials optimized for production.',
                },
                {
                  icon: '🏷️',
                  title: 'Signage & Banners',
                  description: 'Event signage, wayfinding graphics, banners, and large-format designs production-ready.',
                },
                {
                  icon: '🎪',
                  title: 'Event Branding Production',
                  description: 'Stage backdrops, certificates, standees, and all event-specific branding materials.',
                },
                {
                  icon: '🔧',
                  title: 'Fabrication Coordination',
                  description: 'End-to-end coordination with printers, fabricators, and vendors. We ensure quality at every step.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-200"
                >
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-accent/10 rounded-2xl p-10 border border-primary-100 flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why This Matters</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Design is only half the battle. Flawless execution transforms good designs into great results. We bridge the gap between concept and reality, ensuring your vision is perfectly realized in print and production.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg mt-1">✓</span>
                  <p className="text-gray-700">Quality assurance at every stage</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg mt-1">✓</span>
                  <p className="text-gray-700">Vendor relationships we've built</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg mt-1">✓</span>
                  <p className="text-gray-700">Production specifications expertise</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-bold text-lg mt-1">✓</span>
                  <p className="text-gray-700">One point of accountability</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
        heading="Ready to Build Your Systems?"
        subheading="Let's discuss which outcomes matter most for your organization."
        description="Whether you need Brand, Content, or Experience Systems—or a combination—we're ready to help you create visual work that drives real results."
        buttonText="Schedule a Consultation"
        buttonHref="/contact"
      />
    </>
  );
}
