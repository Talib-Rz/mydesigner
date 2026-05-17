'use client';

import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';

interface TestimonialCardProps {
  name: string;
  title: string;
  company: string;
  testimonial: string;
  image?: string;
  rating: number;
  index: number;
}

export default function TestimonialCard({
  name,
  title,
  company,
  testimonial,
  image,
  rating,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -12 }}
      className="bg-white rounded-2xl p-10 card-shadow flex flex-col h-full"
    >
      {/* Rating Stars */}
      <div className="flex gap-1.5 mb-8">
        {Array.from({ length: rating }).map((_, i) => (
          <HiStar key={i} size={24} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 mb-10 flex-1 leading-relaxed text-lg italic">
        "{testimonial}"
      </p>

      {/* Client Info */}
      <div className="flex items-center gap-5 pt-6 border-t border-gray-100">
        {/* Client Image */}
        <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent/20 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-2xl">👤</div>
          )}
        </div>

        {/* Client Details */}
        <div>
          <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
          <p className="text-sm text-gray-600 font-medium">{title}</p>
          <p className="text-xs text-primary-700 font-semibold mt-1">{company}</p>
        </div>
      </div>
    </motion.div>
  );
}
