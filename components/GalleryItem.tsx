'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface BrochureLink {
  fileName: string;
  displayName: string;
  url: string;
}

interface GalleryItemProps {
  id: string;
  name: string;
  type: 'image' | 'video';
  src: string;
  index: number;
  brochureLink?: BrochureLink;
  category?: string;
}

export default function GalleryItem({
  id,
  name,
  type,
  src,
  index,
  brochureLink,
  category,
}: GalleryItemProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    if (type !== 'video') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {
              // Autoplay might be blocked, continue
            });
          } else {
            videoRef.current.pause();
          }
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [type]);

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (brochureLink?.url) {
      window.open(brochureLink.url, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group relative aspect-square rounded-lg overflow-hidden bg-white cursor-pointer"
      onMouseEnter={() => category === 'Brochure Designs' && setShowLink(true)}
      onMouseLeave={() => setShowLink(false)}
    >
      {type === 'image' ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
        />
      ) : (
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
          muted
          loop
          playsInline
        />
      )}

      {/* Overlay with name on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-4">
        <div className="text-white w-full">
          <p className="font-semibold text-sm line-clamp-2">{name}</p>
          <p className="text-xs text-gray-300 mt-1">
            {type === 'video' ? '▶ Video' : '🖼 Image'}
          </p>

          {/* Brochure Link Section */}
          {brochureLink && showLink && (
            <div className="mt-3 pt-3 border-t border-gray-400">
              <p className="text-xs text-gray-300 mb-2">
                {brochureLink.displayName}
              </p>
              <button
                onClick={handleLinkClick}
                className="inline-flex items-center gap-1 text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition-colors"
              >
                <span>🔗</span>
                <span>Visit Link</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Badge for video */}
      {type === 'video' && (
        <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
          ▶ VIDEO
        </div>
      )}

      {/* Badge for Brochure with Link */}
      {brochureLink && category === 'Brochure Designs' && (
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
          🔗 LINK
        </div>
      )}
    </motion.div>
  );
}
