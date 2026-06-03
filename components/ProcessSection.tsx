'use client';

import { motion } from 'framer-motion';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  index: number;
  totalSteps: number;
}

function ProcessStep({ number, title, description, index, totalSteps }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative group"
    >
      <div className="flex gap-8 items-start">
        {/* Step Number Circle */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex-shrink-0"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-100 to-accent/20 border-2 border-primary-200 flex items-center justify-center text-2xl font-bold text-primary-700 group-hover:shadow-lg group-hover:border-primary-400 transition-all duration-300">
            {number}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          whileHover={{ x: 8 }}
          className="flex-1 pt-2"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{title}</h3>
          <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
        </motion.div>
      </div>

      {/* Connector Line to Next Step */}
      {index < totalSteps - 1 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          whileInView={{ opacity: 1, height: 64 }}
          transition={{ duration: 0.6, delay: index * 0.12 + 0.1 }}
          viewport={{ once: true }}
          className="ml-10 flex justify-center items-center"
        >
          <div className="flex flex-col items-center h-full">
            <div className="flex-1 w-0.5 bg-gradient-to-b from-primary-300 to-transparent" />
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary-400 text-xl -mb-1"
            >
              ↓
            </motion.div>
          </div>
        </motion.div>
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
          className="mb-16 sm:mb-20 text-center"
        >
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A structured approach to creating exceptional visual campaigns and brand identities. From discovery to delivery, we guide you through every step.
          </p>
        </motion.div>

        {/* Vertical Process Steps */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col gap-4">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                index={index}
                totalSteps={steps.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
