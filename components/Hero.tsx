'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  showAnimation?: boolean;
}

export default function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  showAnimation = true,
}: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-primary-50 to-accent/5 pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full">
        <motion.div
          variants={showAnimation ? containerVariants : {}}
          initial={showAnimation ? 'hidden' : {}}
          animate={showAnimation ? 'visible' : {}}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1
            variants={showAnimation ? itemVariants : {}}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4"
          >
            {title.split(' ').map((word, i) => (
              <span key={i}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={showAnimation ? itemVariants : {}}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-4"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={showAnimation ? itemVariants : {}}
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-stretch sm:items-center mt-8 sm:mt-10 px-4"
          >
            {primaryCta && (
              <Link href={primaryCta.href} className="btn-primary">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-secondary">
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-primary-400 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
}
