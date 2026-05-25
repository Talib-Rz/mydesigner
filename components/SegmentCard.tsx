'use client';

import { motion } from 'framer-motion';

interface SegmentCardProps {
  type: 'B2C' | 'B2B';
  title: string;
  description: string;
  examples: string[];
  index: number;
}

export default function SegmentCard({
  type,
  title,
  description,
  examples,
  index,
}: SegmentCardProps) {
  const bgColor = type === 'B2C' ? 'bg-blue-50' : 'bg-purple-50';
  const borderColor = type === 'B2C' ? 'border-blue-200' : 'border-purple-200';
  const badgeBg = type === 'B2C' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -10 }}
      className={`p-6 sm:p-8 md:p-10 rounded-2xl border-2 ${bgColor} ${borderColor} card-shadow flex flex-col h-full`}
    >
      <div className="flex items-start justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex-1 leading-tight">{title}</h3>
        <span className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap ${badgeBg}`}>
          {type}
        </span>
      </div>
      <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed flex-1 text-sm sm:text-base">{description}</p>
      <div className="flex flex-wrap gap-2">
        {examples.map((example) => (
          <span
            key={example}
            className="text-xs sm:text-sm bg-white bg-opacity-60 text-gray-800 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-gray-200"
          >
            {example}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
