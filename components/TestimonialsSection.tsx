'use client';

import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import { Testimonial } from '@/lib/data';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-primary-50/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle text-center">
            Don't just take our word for it. Hear directly from the brands and organizations we've worked with.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              {...testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-gray-200"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 text-center">
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-700 mb-2 sm:mb-3">
                50+
              </p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">Successful Projects</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-700 mb-2 sm:mb-3">
                5/5
              </p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-700 mb-2 sm:mb-3">
                98%
              </p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
