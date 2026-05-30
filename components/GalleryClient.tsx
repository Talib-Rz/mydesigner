'use client';

import { useEffect, useState } from 'react';
import GalleryItem from './GalleryItem';

interface GalleryItem {
  id: string;
  name: string;
  type: 'image' | 'video';
  src: string;
  extension: string;
  orientation?: string;
  section?: string;
}

interface GalleryCategory {
  category: string;
  items: GalleryItem[];
}

interface BrochureLink {
  fileName: string;
  displayName: string;
  url: string;
}

export default function GalleryClient() {
  const [categories, setCategories] = useState<GalleryCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [brochureLinks, setBrochureLinks] = useState<{ [key: string]: BrochureLink }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch gallery items
        const galleryResponse = await fetch('/api/gallery');
        if (!galleryResponse.ok) {
          throw new Error('Failed to fetch gallery items');
        }
        const galleryData = await galleryResponse.json();
        setCategories(galleryData);

        // Fetch brochure links
        try {
          const brochureResponse = await fetch('/brochure-links.json');
          if (brochureResponse.ok) {
            const brochureData = await brochureResponse.json();
            // Create a map for easy lookup (case-insensitive)
            const linksMap: { [key: string]: BrochureLink } = {};
            brochureData.brochureDesigns.forEach((link: BrochureLink) => {
              // Store with lowercase key for case-insensitive lookup
              linksMap[link.fileName.toLowerCase()] = link;
            });
            setBrochureLinks(linksMap);
          }
        } catch (err) {
          console.warn('Failed to load brochure links:', err);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Gallery fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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

  if (categories.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">📁</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Gallery is Empty
        </h3>
        <p className="text-gray-600 mb-6">
          Create subfolders in <code className="bg-gray-100 px-2 py-1 rounded">/public/gallery-items/</code> and add your images/videos.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto text-left">
          <h4 className="font-semibold text-blue-900 mb-3">Quick Start:</h4>
          <ol className="text-sm text-blue-800 space-y-2 list-decimal list-inside">
            <li>Create subfolders in <code className="bg-white px-1">/public/gallery-items/</code> (e.g., "Portfolio", "Campaigns", "Logos")</li>
            <li>Add your images (PNG, JPG, WebP, SVG) to each subfolder</li>
            <li>Add your videos (MP4, WebM, MOV) to each subfolder</li>
            <li>Refresh the page - categories with items will appear automatically!</li>
            <li>Videos will autoplay when scrolled into view</li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {categories.map((category, categoryIndex) => {
        // Check if this category has orientation sections
        const hasOrientationSections = category.items.some((item) => item.section);

        // Group items by section if sections exist
        let itemsGroups: Array<{ section: string; items: GalleryItem[] }> = [];
        if (hasOrientationSections) {
          const groupMap = new Map<string, GalleryItem[]>();
          category.items.forEach((item) => {
            const section = item.section || 'Other';
            if (!groupMap.has(section)) {
              groupMap.set(section, []);
            }
            groupMap.get(section)!.push(item);
          });
          itemsGroups = Array.from(groupMap.entries()).map(([section, items]) => ({
            section,
            items,
          }));
        } else {
          itemsGroups = [
            {
              section: 'all',
              items: category.items,
            },
          ];
        }

        return (
          <div key={category.category}>
            {/* Category Heading */}
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {category.category}
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-primary-700 to-accent rounded-full"></div>
            </div>

            {/* Category Items with Section Breaks */}
            <div className="space-y-6 lg:space-y-8">
              {itemsGroups.map((group, groupIndex) => (
                <div key={`${category.category}-${group.section}`}>
                  {/* Grid for each section */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {group.items.map((item, index) => {
                      // Get brochure link if available
                      const brochureLink =
                        category.category === 'Brochure Designs'
                          ? brochureLinks[
                              (item.name + (item.extension || '')).toLowerCase()
                            ]
                          : null;

                      return (
                        <GalleryItem
                          key={item.id}
                          {...item}
                          index={index}
                          brochureLink={brochureLink}
                          category={category.category}
                        />
                      );
                    })}
                  </div>
                  {/* Line break after each section (except last) */}
                  {groupIndex < itemsGroups.length - 1 && (
                    <div className="my-6 lg:my-8 border-t border-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
