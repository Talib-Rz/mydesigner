'use client';

import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -12 }}
      className="p-10 bg-white rounded-2xl border border-gray-100 card-shadow h-full flex flex-col"
    >
      <div className="text-6xl mb-8">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-5 leading-tight">{title}</h3>
      <p className="text-gray-600 leading-relaxed flex-1">{description}</p>
    </motion.div>
  );
}
