'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import SegmentCard from '@/components/SegmentCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { servicePillars, caseStudies, processSteps, segments, testimonials } from '@/lib/data';

// Section Component
function Section({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`section-padding ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

export default function Home() {
  const b2cSegments = segments.filter((s) => s.type === 'B2C').slice(0, 2);
  const b2bSegments = segments.filter((s) => s.type === 'B2B').slice(0, 2);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="We Build Structured Visual Campaigns"
        subtitle="Premium visual branding and campaign studio for businesses, events, and startups. We create bold, modern identities that stand out."
        primaryCta={{ label: 'View Services', href: '/services' }}
        secondaryCta={{ label: 'Get In Touch', href: '/contact' }}
      />

      {/* Who We Serve Section */}
      <Section className="bg-gray-50">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Who We Serve</h2>
            <p className="section-subtitle">
              We work with a diverse range of clients across B2C and B2B segments, from college events to real estate companies.
            </p>
          </motion.div>
        </div>

        {/* B2C Segment */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">For Businesses & Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 grid-center">
            {b2cSegments.map((segment, index) => (
              <SegmentCard key={segment.id} {...segment} index={index} />
            ))}
          </div>
        </div>

        {/* B2B Segment */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">For Agencies & Organizations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 grid-center">
            {b2bSegments.map((segment, index) => (
              <SegmentCard key={segment.id} {...segment} index={index + 2} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/segments"
            className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800 transition-colors"
          >
            Explore All Segments →
          </a>
        </motion.div>
      </Section>

      {/* Service Pillars Section */}
      <Section className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title">Service Pillars</h2>
          <p className="section-subtitle">
            Four core services that cover all your visual branding and campaign design needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 grid-center">
          {servicePillars.map((service, index) => (
            <ServiceCard
              key={service.id}
              {...service}
              index={index}
            />
          ))}
        </div>
      </Section>

      {/* Featured Work Section */}
      <Section className="bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            Selection of recent projects showcasing our creative excellence and strategic thinking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 grid-center">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} {...study} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800 transition-colors"
          >
            View All Case Studies →
          </a>
        </motion.div>
      </Section>

      {/* Process Section */}
      <ProcessSection steps={processSteps} />

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Final CTA Section */}
      <CTASection
        heading="Let's Create Something Extraordinary"
        subheading="Your brand deserves a visual identity that matches your ambition."
        description="Get in touch with our team to discuss your project and explore how we can help you achieve your goals."
      />
    </>
  );
}
