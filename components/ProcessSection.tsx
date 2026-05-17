'use client';

import { motion } from 'framer-motion';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

function ProcessStep({ number, title, description, index }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative"
    >
      {/* Card */}
      <div className="bg-white rounded-2xl p-10 h-full card-shadow flex flex-col">
        {/* Number Badge */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-700 to-accent rounded-2xl text-white text-3xl font-bold mb-8 flex-shrink-0">
          {number}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{title}</h3>
        <p className="text-gray-600 leading-relaxed flex-1">{description}</p>
      </div>

      {/* Connecting Line (hidden on mobile, shown on desktop) */}
      {index < 5 && (
        <div className="hidden lg:block absolute top-28 left-full w-8 h-0.5 bg-gradient-to-r from-primary-700 to-accent transform translate-y-6" />
      )}
    </motion.div>
  );
}

interface ProcessSectionProps {
  steps: {
    number: string;
    title: string;
    description: string;
  }[];
}

export default function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">
            A structured approach to creating exceptional visual campaigns and brand identities.
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
