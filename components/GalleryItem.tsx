'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface GalleryItemProps {
  id: string;
  name: string;
  type: 'image' | 'video';
  src: string;
  index: number;
}

export default function GalleryItem({
  id,
  name,
  type,
  src,
  index,
}: GalleryItemProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group relative aspect-square rounded-lg overflow-hidden bg-white cursor-pointer"
    >
      {type === 'image' ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover transition-all duration-300"
        />
      ) : (
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover transition-all duration-300"
          muted
          loop
          playsInline
        />
      )}

      {/* Overlay with name on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 flex items-end p-4">
        <div className="text-white">
          <p className="font-semibold text-sm line-clamp-2">{name}</p>
          <p className="text-xs text-gray-300 mt-1">
            {type === 'video' ? '▶ Video' : '🖼 Image'}
          </p>
        </div>
      </div>

      {/* Badge for video */}
      {type === 'video' && (
        <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
          ▶ VIDEO
        </div>
      )}
    </motion.div>
  );
}
