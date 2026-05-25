'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  heading = "Ready to Transform Your Brand?",
  subheading = "Let's create something extraordinary together.",
  description = "Work with our team to develop a visual identity that positions your brand for success.",
  buttonText = "Get In Touch",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-accent/20 text-white overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-accent rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-primary-400 rounded-full blur-3xl opacity-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
            {heading}
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 mb-4 sm:mb-6 md:mb-6 font-semibold">
            {subheading}
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-12 md:mb-14 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={buttonHref}
              className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-primary-700 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              {buttonText}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
