"use client";

import React, { useEffect, useRef } from 'react';

type Props = {
  files: string[];
  folderRel: string;
};

const DesignsGallery: React.FC<Props> = ({ files, folderRel }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  // PDFs open in a new tab; no modal state required

  useEffect(() => {
    if (!containerRef.current) return;

    const videos: HTMLVideoElement[] = Array.from(
      containerRef.current.querySelectorAll('video')
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLVideoElement;
          try {
            if (entry.isIntersecting) {
              el.muted = true;
              el.play().catch(() => {});
            } else {
              el.pause();
            }
          } catch (e) {
            // ignore
          }
        });
      },
      { threshold: 0.5 }
    );

    videos.forEach((v) => observer.observe(v));

    return () => observer.disconnect();
  }, [files]);

  // No modal keyboard handlers required for PDFs opening in new tab

  return (
    <>
    <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {files.map((file) => {
        const ext = file.split('.').pop()?.toLowerCase();
        const publicUrl = `${folderRel.replace(/\/$/, '')}/${file}`;
        if (ext === 'mp4' || ext === 'webm') {
          return (
            <div key={file} className="aspect-square overflow-hidden rounded-lg bg-gray-50">
              <video
                src={publicUrl}
                muted
                playsInline
                loop
                preload="metadata"
                className="w-full h-full object-cover"
                controls
              />
            </div>
          );
        }

        if (ext === 'pdf') {
          return (
            <div key={file} className="aspect-square overflow-hidden rounded-lg bg-gray-50 p-2">
              <div className="relative w-full h-full bg-white border rounded">
                <a
                  href={publicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full block"
                >
                  {/* first-page preview as clear thumbnail */}
                  <iframe
                    src={`${publicUrl}#page=1`}
                    title={file}
                    className="w-full h-full pointer-events-none"
                  />
                  <span className="absolute top-2 left-2 bg-white/90 text-xs text-primary-700 px-2 py-1 rounded">PDF</span>
                </a>
              </div>
            </div>
          );
        }

        // eslint-disable-next-line @next/next/no-img-element
        return (
          <div key={file} className="aspect-square overflow-hidden rounded-lg bg-gray-50">
            <img src={publicUrl} alt={file} className="w-full h-full object-cover" />
          </div>
        );
      })}
    </div>

      {/* PDFs open in new tab; modal viewer removed for mobile compatibility */}
    </>
  );
};

export default DesignsGallery;
