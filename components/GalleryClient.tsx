'use client';

import { useEffect, useState } from 'react';
import GalleryItem from './GalleryItem';

interface GalleryItem {
  id: string;
  name: string;
  type: 'image' | 'video';
  src: string;
  extension: string;
}

export default function GalleryClient() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/gallery');
        
        if (!response.ok) {
          throw new Error('Failed to fetch gallery items');
        }
        
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Gallery fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryItems();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">Failed to load gallery: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-primary-700 text-white rounded hover:bg-primary-800 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">📁</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Gallery is Empty
        </h3>
        <p className="text-gray-600 mb-6">
          Add PNG, SVG, or video files to the <code className="bg-gray-100 px-2 py-1 rounded">/public/gallery-items/</code> folder to get started.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto text-left">
          <h4 className="font-semibold text-blue-900 mb-3">Quick Start:</h4>
          <ol className="text-sm text-blue-800 space-y-2 list-decimal list-inside">
            <li>Add your images (PNG, JPG, WebP, SVG) to <code className="bg-white px-1">/public/gallery-items/</code></li>
            <li>Add your videos (MP4, WebM, MOV) to the same folder</li>
            <li>Refresh the page - items will appear automatically!</li>
            <li>Videos will autoplay when scrolled into view</li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
      {items.map((item, index) => (
        <GalleryItem
          key={item.id}
          {...item}
          index={index}
        />
      ))}
    </div>
  );
}
