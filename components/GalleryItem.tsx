'use client';

import { motion } from 'framer-motion';

interface BrochureLink {
  fileName: string;
  displayName: string;
  url: string;
}

interface GalleryItemProps {
  id: string;
  src: string;
  brochureLink?: BrochureLink;
}

export default function GalleryItem({ id, src, brochureLink }: GalleryItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative rounded overflow-hidden bg-white cursor-default group"
    >
      {/* Brochure items: clickable image with hover overlay + blur */}
      {brochureLink ? (
        <a href={brochureLink.url} target="_blank" rel="noreferrer" className="block relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            className="w-full h-auto object-contain transition-filter duration-200 group-hover:blur-sm"
            loading="lazy"
          />

          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-sm">Click to see full brochure design</span>
          </div>
        </a>
      ) : (
        // non-brochure image
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" className="w-full h-auto object-contain" loading="lazy" />
      )}
    </motion.div>
  );
}
