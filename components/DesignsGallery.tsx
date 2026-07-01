"use client";

import dynamic from 'next/dynamic';
import React, { useEffect, useRef } from 'react';

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
            <div key={file}>
              <a
                href={publicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
                aria-label={`Open ${file} in a new tab`}
              >
                <PDFThumbnail pdfUrl={publicUrl} title={file} />
                <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-200 group-hover:bg-black/10" />
              </a>
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
