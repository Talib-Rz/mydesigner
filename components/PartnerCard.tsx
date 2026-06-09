'use client';

import { motion } from 'framer-motion';
import { Partner } from '@/lib/data';
import Link from 'next/link';

interface PartnerCardProps {
  partner: Partner;
  index: number;
}

export default function PartnerCard({ partner, index }: PartnerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8 }}
      className="p-8 bg-white rounded-2xl border border-gray-100 card-shadow h-full flex flex-col items-center text-center hover:shadow-xl transition-shadow"
    >
      {/* Logo Placeholder */}
      {partner.logo ? (
        <div className="mb-6 h-16 flex items-center justify-center">
          <img
            src={partner.logo}
            alt={partner.name}
            className="max-h-14 max-w-full object-contain"
          />
        </div>
      ) : (
        <div className="mb-6 h-16 flex items-center justify-center">
          <span className="text-3xl">🤝</span>
        </div>
      )}

      {/* Partner Name */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>

      {/* Location */}
      <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
        {partner.location}
      </p>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {partner.description}
      </p>

      {/* Website Button */}
      {partner.website ? (
        <a
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${partner.name} website`}
          className="inline-flex items-center justify-center px-3 py-2 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-lg transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6" />
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M10 14L21 3" />
          </svg>
        </a>
      ) : (
        <button
          disabled
          className="inline-flex items-center justify-center px-3 py-2 bg-gray-100 text-gray-500 font-semibold rounded-lg cursor-not-allowed"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6" />
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M10 14L21 3" />
          </svg>
        </button>
      )}
    </motion.div>
  );
}
