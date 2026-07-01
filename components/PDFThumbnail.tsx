'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

type Props = {
  pdfUrl: string;
  title: string;
  className?: string;
};

const PDFThumbnail: React.FC<Props> = ({ pdfUrl, title, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let active = true;

    const renderFirstPage = async () => {
      setIsLoading(true);
      setHasError(false);

      try {
        const document = await pdfjsLib.getDocument({ url: pdfUrl }).promise;
        const page = await document.getPage(1);
        const viewport = page.getViewport({ scale: 1.2 });
        const canvas = canvasRef.current;

        if (!canvas || !active) return;

        const context = canvas.getContext('2d');
        if (!context) throw new Error('Unable to get canvas context');

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
          canvasContext: context,
          canvas,
          viewport,
        }).promise;
      } catch (error) {
        if (active) {
          setHasError(true);
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    };

    renderFirstPage();

    return () => {
      active = false;
    };
  }, [pdfUrl]);

  return (
    <div className={`relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-50 ${className}`}>
      <canvas
        ref={canvasRef}
        className="h-full w-full object-cover"
        aria-label={`Preview of ${title}`}
      />

      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 text-center">
          <p className="text-sm font-semibold text-gray-800">Loading preview…</p>
        </div>
      )}

      {hasError && !isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 text-center">
          <p className="text-sm font-semibold text-gray-800">Preview unavailable</p>
          <p className="mt-1 text-xs text-gray-600">Open the PDF to view it</p>
        </div>
      )}

      <div className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
        PDF
      </div>
    </div>
  );
};

export default PDFThumbnail;
