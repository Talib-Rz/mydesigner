'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import SegmentCard from '@/components/SegmentCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Link from 'next/link';
import { homepageSegments, simplifiedSegments, caseStudies, testimonials, homeProcessSteps, deliverablePillars, whyChooseUs, problemPoints, faqs } from '@/lib/data';

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
  const benefits = [
    { title: 'Consistent Event Branding', text: 'Across every touchpoint—from invitations to stage design.', icon: '✓' },
    { title: 'High-Impact Marketing Creatives', text: 'Designed to capture attention and increase engagement.', icon: '✓' },
    { title: 'One Unified Visual Experience', text: 'Every asset works together as one cohesive brand system.', icon: '✓' },
    { title: 'Visual Consistency Across Teams', text: 'Easy-to-use design systems that scale effortlessly.', icon: '✓' },
    { title: 'AI-Enhanced Design Workflow', text: 'We use AI to enhance research, ideation, content exploration, and production speed while every final design is thoughtfully crafted by experienced designers.', icon: '✓' },
    { title: 'Designed to Stand Out', text: 'Creative visuals that leave a lasting impression online and offline.', icon: '✓' },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Visual Experiences That People Remember"
        subtitle="We help events, startups and agencies present themselves professionally through branding, content design, motion creatives and complete visual systems."
        primaryCta={{ label: 'View Our Work', href: '/case-studies' }}
        secondaryCta={{ label: 'Let\'s Discuss Your Project', href: '/contact' }}
      />

      {/* Who We Work With Section */}
      <Section className="bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title mb-4">Who We Work With</h2>
          <p className="section-subtitle">
            We partner with events, startups, and creative teams to build visual identities that stand out and drive results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {simplifiedSegments.slice(0, 3).map((segment, index) => (
            <motion.div
              key={segment.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              className="h-full"
            >
              <Link
                href="/solutions#who-we-help"
                aria-label={`Explore ${segment.title}`}
                className="block h-full p-6 bg-white rounded-2xl card-shadow hover:shadow-xl transition-shadow transform hover:-translate-y-2 flex flex-col items-center text-center justify-between"
              >
                <div>
                  <div className="text-5xl mb-3">{segment.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-5">{segment.title}</h3>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {segment.examples.slice(0, 5).map((example) => (
                      <span
                        key={example}
                        className="text-xs px-2 py-1 bg-primary-50 text-primary-700 rounded-full border border-primary-100"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800 transition-colors text-sm">
                  Expand <span className="inline-block">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Great Ideas Look Extraordinary */}
      <Section className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">Great Ideas Look Extraordinary</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            We create consistent, memorable, and high-impact visual experiences for brands, businesses, and events.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: '0 18px 40px rgba(34, 197, 94, 0.12)' }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 shadow-sm"
              >
                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
                  <span className="text-lg font-semibold">✓</span>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold leading-relaxed">{benefit.title}</p>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{benefit.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <p className="text-lg font-semibold text-gray-900 leading-relaxed text-center">
              We combine strategic thinking, human creativity, and AI-powered workflows to deliver faster, smarter, and better design without compromising quality.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* What We Actually Do */}
      <Section className="bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title">What We Deliver</h2>
          <p className="section-subtitle">
            We create systems that help organizations communicate consistently across every touchpoint.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deliverablePillars.map((pillar, idx) => (
            <Link
              key={pillar.id}
              href="/solutions#more-than-individual-designs"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -8 }}
                className="p-6 bg-white rounded-2xl card-shadow h-full flex flex-col items-center text-center hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="text-5xl mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{pillar.category}</h3>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {pillar.items.slice(0, 5).map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2 py-1 bg-primary-50 text-primary-700 rounded-full border border-primary-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800 transition-colors text-sm">
                  Expand <span className="inline-block">→</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Featured Work Section */}
      <Section className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            Real projects with real results. See how we help brands succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...caseStudies].reverse().slice(0, 3).map((study, index) => (
            <CaseStudyCard key={study.id} {...study} index={index} variant="small" />
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
            Explore More Case Studies →
          </a>
        </motion.div>
      </Section>

      {/* Why Clients Choose myDesigner Section */}
      <Section className="bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title">Why Clients Choose myDesigner</h2>
          <p className="section-subtitle">
            What sets us apart in the creative industry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyChooseUs.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8 }}
              className="p-10 bg-white rounded-2xl border border-gray-100 card-shadow h-full flex flex-col text-center"
            >
              <div className="text-6xl mb-6">{reason.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed flex-1">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <ProcessSection steps={homeProcessSteps} />

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Metrics Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Metrics</h2>
            <p className="section-subtitle">
              A snapshot of experience, impact, and the results delivered over the years.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { number: '3', label: 'Segments We Specialize In' },
              { number: '10+', label: 'Projects Delivered' },
              { number: '50+', label: 'Creative Assets Produced' },
              { number: '8+', label: 'Organizations Trusted Us' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-700 to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <CTASection
        heading="Planning an Event, Building a Startup or Running an Agency?"
        subheading="Let's create visuals that people remember."
        description="Get in touch with our team to discuss your project and explore how we can bring your vision to life."
        buttonText="Get In Touch"
        buttonHref="/contact"
      />
    </>
  );
}
