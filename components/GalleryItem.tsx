'use client';

import { motion } from 'framer-motion';
// Import analytics tracking function for gallery interactions
import { trackGalleryClick } from '@/lib/analytics';

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
  /**
   * Handle gallery item click/view
   * Tracks when users interact with gallery items for engagement analytics
   */
  const handleGalleryClick = () => {
    // Extract the category and name from the src path for better tracking
    // Example: /gallery-items/Brochure Designs/Landscape/item.jpg
    const pathParts = src.split('/');
    const category = pathParts[2] || 'gallery'; // Category folder name
    const fileName = pathParts[pathParts.length - 1] || 'unknown';
    
    // Track the gallery item click event
    // Parameters: item name, category, item ID
    trackGalleryClick(
      brochureLink?.displayName || fileName,
      category,
      id
    );
  };

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
        // Link with analytics tracking for brochure downloads
        <a 
          href={brochureLink.url} 
          onClick={handleGalleryClick}
          target="_blank" 
          rel="noreferrer" 
          className="block relative"
        >
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
        // Non-brochure image with click tracking
        <div onClick={handleGalleryClick} className="block relative cursor-pointer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" className="w-full h-auto object-contain" loading="lazy" />
        </div>
      )}
    </motion.div>
  );
}
