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
      whileHover={{ y: -8 }}
      className={`p-8 rounded-2xl border-2 ${bgColor} ${borderColor} card-shadow`}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900 flex-1">{title}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-bold ${badgeBg}`}>
          {type}
        </span>
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {examples.map((example) => (
          <span
            key={example}
            className="text-sm bg-white bg-opacity-60 text-gray-800 px-3 py-1 rounded-full border border-gray-200"
          >
            {example}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
