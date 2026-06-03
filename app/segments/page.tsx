'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import { simplifiedSegments, notForSegments } from '@/lib/data';

export default function SegmentsPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Who We Work With"
        subtitle="We specialize in three core segments, each with unique visual branding and communication needs."
        showAnimation={true}
      />

      {/* Segments Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {simplifiedSegments.map((segment, index) => (
              <motion.div
                key={segment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -8 }}
                className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 card-shadow h-full flex flex-col"
              >
                <div className="text-6xl mb-4">{segment.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{segment.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">{segment.description}</p>

                {/* Examples */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <h4 className="text-sm font-bold text-gray-700 uppercase mb-3 tracking-wide">Examples</h4>
                  <div className="flex flex-wrap gap-2">
                    {segment.examples.map((example) => (
                      <span
                        key={example}
                        className="text-xs px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-medium"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Needs */}
                <div>
                  <h4 className="text-sm font-bold text-gray-700 uppercase mb-3 tracking-wide">Your Needs</h4>
                  <ul className="space-y-2">
                    {segment.needs.map((need) => (
                      <li key={need} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-accent font-bold mt-0.5">✓</span>
                        <span>{need}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Not For Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="section-title mb-4">Who We Are Not For</h2>
            <p className="section-subtitle">
              We want to be transparent about our focus and expertise. Here's what we don't do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {notForSegments.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-2xl border-2 border-red-200 text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-white rounded-2xl border-2 border-primary-200 text-center"
          >
            <p className="text-lg text-gray-800 leading-relaxed">
              <span className="font-bold text-primary-700">We believe in saying no to projects that aren't the right fit.</span> This helps us deliver exceptional work for clients we can truly help. If you're in one of our three segments and need a strategic creative partner, let's talk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        heading="Is Your Project a Good Fit?"
        subheading="If you're in Events, Startups & Businesses, or Agencies, we'd love to chat."
        description="Let's discuss your project, your goals, and how we can create visual systems that drive real results."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
