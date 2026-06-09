'use client';

import { motion } from 'framer-motion';
import Hero from '../../components/Hero';
import CTASection from '../../components/CTASection';
import ProcessSection from '../../components/ProcessSection';
import CaseStudyCard from '../../components/CaseStudyCard';
import PartnerCard from '../../components/PartnerCard';
import Link from 'next/link';
import { caseStudies, homeProcessSteps, deliverablePillars, whyChooseUs, executionPartners } from '../../lib/data';

function Section({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`section-padding ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">{children}</div>
    </section>
  );
}

export default function SolutionsPage() {
  const whoWeHelp = [
    {
      title: 'Events',
      description:
        "Conferences, workshops, college fests, hackathons—we create complete visual identities that make every experience feel professional and memorable.",
      icon: '🎉',
      examples: ['Conferences', 'Workshops', 'Alumni Events', 'College Fests', 'Hackathons', 'Corporate Events'],
    },
    {
      title: 'Startups & Businesses',
      description:
        'Growing companies need consistent branding, professional communication, and marketing assets that build credibility and trust.',
      icon: '🚀',
      examples: ['Startups', 'SaaS Companies', 'EdTech Platforms', 'Consulting Firms', 'Service Businesses'],
    },
    {
      title: 'Agencies',
      description:
        'Reliable white-label creative support for agencies that need scalable design execution and consistent delivery for clients.',
      icon: '🤝',
      examples: ['Marketing Agencies', 'Advertising Agencies', 'Creative Studios', 'PR Agencies', 'Brand Consultants'],
    },
  ];
  const problems = [
    { text: 'Event branding feels inconsistent', icon: '❌' },
    { text: 'Marketing creatives look generic', icon: '❌' },
    { text: 'Different vendors create disconnected experiences', icon: '❌' },
    { text: 'Teams struggle to maintain visual consistency', icon: '❌' },
    { text: 'AI tools generate visuals but not complete systems', icon: '❌' },
    { text: 'Campaigns fail to stand out in crowded markets', icon: '❌' },
  ];

  // Vertical process with animated connectors
  const processSteps = [
    { num: '01', title: 'Discover', desc: 'Understand goals, audience and requirements.' },
    { num: '02', title: 'Design', desc: 'Create visual concepts and systems.' },
    { num: '03', title: 'Execute', desc: 'Develop all required assets.' },
    { num: '04', title: 'Refine', desc: 'Gather feedback and improve.' },
    { num: '05', title: 'Deliver', desc: 'Provide organized, ready-to-use assets.' },
  ];
  

  const segmentSolutions = [
    {
      title: 'Events',
      icon: '🎪',
      challenge: 'We need everything to look professional and connected.',
      helps: [
        'Event Identity',
        'Promotion Campaigns',
        'Social Media Creatives',
        'Certificates & Visuals',
      ],
    },
    {
      title: 'Startups & Businesses',
      icon: '💼',
      challenge: 'We need our brand to look credible and professional.',
      helps: [
        'Brand Identity',
        'Marketing Assets',
        'Presentations & Brochures',
        'Launch Campaigns',
      ],
    },
    {
      title: 'Agencies',
      icon: '⚙️',
      challenge: 'We need a reliable creative partner who can scale.',
      helps: [
        'Campaign Assets',
        'Creative Production',
        'Client Deliverables',
        'White-label Design',
      ],
    },
  ];

  const faqs = [
    {
      question: 'Do you only design posters?',
      answer:
        'No. We build complete visual systems including branding, presentations, social media creatives, campaign assets, event branding and motion content.',
    },
    {
      question: 'Do you create reels and video content?',
      answer:
        'Yes. We create motion graphics, promotional videos, event teasers, announcement reels and content assets for digital campaigns.',
    },
    {
      question: 'Can you handle complete event branding?',
      answer:
        'Yes. From event identity and promotional campaigns to certificates, stage visuals and sponsor creatives.',
    },
    {
      question: 'Do you work with agencies?',
      answer: 'Yes. We provide white-label design support and creative execution for agencies and consultants.',
    },
    {
      question: 'Do you work on long-term projects?',
      answer:
        'Yes. Many clients engage us as an ongoing creative partner for branding, campaigns and marketing support.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="Visual Systems Built for Growth, Engagement and Impact"
        subtitle="We help events, startups and agencies communicate professionally through branding, content design, campaign assets and complete visual experiences."
        primaryCta={{ label: 'View Our Work', href: '/case-studies' }}
        secondaryCta={{ label: "Let's Discuss Your Project", href: '/contact' }}
        showAnimation={true}
      />

      {/* Who We Help */}
      <Section className="bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title mb-4">Who We Help</h2>
          <p className="section-subtitle">
            We partner with organizations that rely on strong visual communication to build trust, attract attention and create memorable experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whoWeHelp.map((segment, idx) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -12 }}
              className="p-8 bg-white rounded-2xl border border-gray-100 card-shadow h-full flex flex-col"
            >
              <div className="text-6xl mb-6">{segment.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">{segment.title}</h3>
              <p className="text-gray-600 leading-relaxed flex-1 mb-6">{segment.description}</p>
              <div className="flex flex-wrap gap-2">
                {segment.examples.map((example) => (
                  <span
                    key={example}
                    className="text-xs px-3 py-1.5 bg-primary-50 text-primary-700 rounded-full border border-primary-100 font-medium"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-gray-700">
            Not sure if you fit one of these categories?{' '}
            <Link href="/contact" className="text-primary-700 font-semibold hover:text-primary-800 transition-colors">
              Reach out
            </Link>{' '}
            and let's discuss your requirements.
          </p>
        </motion.div>
      </Section>

      {/* The Problem */}
      <Section className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">Great Ideas Often Look Ordinary</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Common challenges we solve for our clients
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {problems.map((problem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 rounded-lg bg-red-50 border border-red-100"
              >
                <div className="text-2xl flex-shrink-0">{problem.icon}</div>
                <p className="text-gray-700 font-medium">{problem.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-gradient-to-r from-primary-50 to-accent/10 rounded-2xl border border-primary-200"
          >
            <p className="text-lg font-bold text-primary-900">
              ✓ We solve this through structured visual systems.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* What We Actually Do */}
      <Section className="bg-gray-50">
        <div id="more-than-individual-designs">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="section-title">More Than Individual Designs</h2>
            <p className="section-subtitle">
              We create systems that help organizations communicate consistently across every touchpoint.
            </p>
          </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deliverablePillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8 }}
              className="p-6 bg-white rounded-2xl border border-gray-100 card-shadow h-full flex flex-col hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{pillar.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{pillar.category}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-1 leading-relaxed">{pillar.description}</p>
              
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {pillar.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2 py-1 bg-primary-50 text-primary-700 rounded-full border border-primary-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.slice(0, 3).map((study, index) => (
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
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800 transition-colors"
          >
            Explore More Case Studies →
          </Link>
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

      {/* Our Printing & Execution Partners Section */}
      <Section className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title mb-4">Our Printing & Execution Partners</h2>
          <p className="section-subtitle max-w-3xl">
            Great design deserves great execution. While myDesigner focuses on branding, content, campaigns and visual experiences, we collaborate with trusted local partners who help bring these designs into the real world.
          </p>
        </motion.div>

        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          Whether it's event branding, brochures, standees, signage, certificates or large-format installations, our execution partners help ensure that designs are produced professionally and delivered with care.
        </p>

        {/* Partner Grid */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {executionPartners.map((partner, idx) => (
            <div key={partner.id} className="w-full md:w-1/2 lg:w-1/4 flex justify-center">
              <PartnerCard partner={partner} index={idx} />
            </div>
          ))}
        </div>

        {/* Expanding Across More Cities Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary-200 mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Expanding Across More Cities</h3>
          <p className="text-gray-700 leading-relaxed">
            We are actively building a network of trusted printing, fabrication and execution partners across different cities. This helps us connect clients with reliable local support while maintaining consistent quality standards.
          </p>
        </motion.div>

        {/* Become a Partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Become an Execution Partner?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking to collaborate with reliable printing, fabrication, signage and production partners who share our commitment to quality and professionalism.
          </p>
          <Link
            href="/partners"
            className="inline-block px-8 py-4 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-lg transition-colors text-lg"
          >
            Apply as a Partner
          </Link>
        </motion.div>
      </Section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="bg-white rounded-lg border border-gray-200 p-6 cursor-pointer hover:border-primary-300 transition-colors"
              >
                <summary className="font-bold text-gray-900 flex items-center justify-between">
                  {faq.question}
                  <span className="text-primary-700">+</span>
                </summary>
                <p className="text-gray-600 mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        heading="Planning an Event, Building a Startup or Running an Agency?"
        subheading="Let's create visuals that people remember."
        description="Get in touch with our team to discuss your project and explore how we can bring your vision to life."
        buttonText="Get In Touch"
        buttonHref="/contact"
      />
    </main>
  );
}
