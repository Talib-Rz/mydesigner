"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';

type Props = {
  files: string[];
  folderRel: string;
};

const DesignsGallery: React.FC<Props> = ({ files, folderRel }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [modalUrl, setModalUrl] = useState<string | null>(null);

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

  // close modal on Escape
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setModalUrl(null);
  }, []);

  useEffect(() => {
    if (!modalUrl) return;
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [modalUrl, handleKey]);

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
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setModalUrl(publicUrl)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setModalUrl(publicUrl);
                    }
                  }}
                  className="w-full h-full block cursor-pointer"
                >
                  {/* first-page preview as clear thumbnail */}
                  <iframe
                    src={`${publicUrl}#page=1`}
                    title={file}
                    className="w-full h-full pointer-events-none"
                  />
                  <span className="absolute top-2 left-2 bg-white/90 text-xs text-primary-700 px-2 py-1 rounded">PDF</span>
                </div>
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

      {/* Modal viewer for PDFs */}
      {modalUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setModalUrl(null)} />
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] bg-white rounded shadow-lg overflow-hidden">
            <button
              onClick={() => setModalUrl(null)}
              className="absolute top-3 right-3 z-10 bg-white/80 rounded-full p-2 hover:bg-white"
              aria-label="Close PDF viewer"
            >
              ✕
            </button>
            <iframe src={modalUrl} title="PDF Viewer" className="w-full h-full" />
          </div>
        </div>
      )}
    </>
  );
};

export default DesignsGallery;
