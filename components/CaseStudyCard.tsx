'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

interface CaseStudyCardProps {
  title: string;
  category: string;
  description: string;
  results: string[];
  index: number;
  id: number;
  image?: string;
}

export default function CaseStudyCard({
  title,
  category,
  description,
  results,
  index,
  id,
  image,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -15, shadow: 'xl' }}
      className="bg-white rounded-2xl overflow-hidden card-shadow h-full flex flex-col"
    >
      {/* Image Section */}
      <div className="w-full aspect-square bg-gradient-to-br from-primary-100 via-accent/20 to-primary-50 flex items-center justify-center overflow-hidden relative">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center">
            <div className="text-7xl opacity-50">📸</div>
            <p className="text-sm text-gray-500 mt-3">Add image in /public/images/case-studies/</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-10 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-bold">
            {category}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{title}</h3>

        <p className="text-gray-600 mb-8 flex-1 leading-relaxed">{description}</p>

        {/* Results */}
        <div className="mb-6">
          <p className="text-sm font-bold text-gray-700 mb-2">Key Results</p>
          <ul className="space-y-2">
            {results.slice(0, 2).map((result) => (
              <li key={result} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Link */}
        <Link
          href={`/case-studies#study-${id}`}
          className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800 transition-colors"
        >
          View Details <HiArrowRight size={18} />
        </Link>
      </div>
    </motion.div>
  );
}
