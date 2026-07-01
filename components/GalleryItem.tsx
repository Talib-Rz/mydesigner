'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
// Import analytics tracking function for gallery interactions
import { trackGalleryClick } from '@/lib/analytics';

const PDFThumbnail = dynamic(() => import('@/components/PDFThumbnail'), {
  ssr: false,
  loading: () => (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
      <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 text-center">
        <p className="text-sm font-semibold text-gray-800">Loading preview…</p>
      </div>
    </div>
  ),
});

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

  // Check if brochureLink is a PDF
  const isPdf = brochureLink?.url.toLowerCase().endsWith('.pdf');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative rounded overflow-hidden bg-white cursor-default group"
    >
      {/* PDF items: clickable thumbnail with PDF tag */}
      {isPdf ? (
        <div>
          <a
            href={brochureLink!.url}
            onClick={handleGalleryClick}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            aria-label={`Open ${brochureLink!.displayName} in a new tab`}
          >
            <div className="relative">
              <PDFThumbnail pdfUrl={brochureLink!.url} title={brochureLink!.displayName} />
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-200 group-hover:bg-black/10" />
            </div>
          </a>
        </div>
      ) : brochureLink ? (
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
