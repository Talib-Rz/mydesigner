import { readdirSync, statSync } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

interface GalleryItem {
  id: string;
  name: string;
  type: 'image' | 'video';
  src: string;
  extension: string;
}

interface GalleryCategory {
  category: string;
  items: GalleryItem[];
}

export async function GET() {
  try {
    const galleryDir = join(process.cwd(), 'public/gallery-items');

    // Valid extensions
    const validExtensions = {
      image: ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg'],
      video: ['.mp4', '.webm', '.mov', '.avi'],
    };

    // Read all items in gallery-items folder
    const entries = readdirSync(galleryDir);
    const categories: GalleryCategory[] = [];

    entries.forEach((entry) => {
      const fullPath = join(galleryDir, entry);
      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
        // It's a folder - read files inside
        try {
          const files = readdirSync(fullPath);

          const items: GalleryItem[] = files
            .filter((file) => {
              const ext = file.substring(file.lastIndexOf('.')).toLowerCase();
              return (
                validExtensions.image.includes(ext) ||
                validExtensions.video.includes(ext)
              );
            })
            .map((file, index): GalleryItem => {
              const ext = file.substring(file.lastIndexOf('.')).toLowerCase();
              const isImage = validExtensions.image.includes(ext);

              return {
                id: `gallery-${entry}-${index}-${file.replace(/[^a-zA-Z0-9]/g, '')}`,
                name: file.replace(/\.[^/.]+$/, ''),
                type: isImage ? 'image' : 'video',
                src: `/gallery-items/${entry}/${file}`,
                extension: ext,
              };
            })
            .sort((a, b) => a.name.localeCompare(b.name));

          if (items.length > 0) {
            categories.push({
              category: entry,
              items,
            });
          }
        } catch (err) {
          console.warn(`Failed to read folder: ${entry}`, err);
        }
      }
    });

    // Sort categories alphabetically
    categories.sort((a, b) => a.category.localeCompare(b.category));

    return NextResponse.json(categories);
  } catch (error) {
    console.error('Gallery API Error:', error);

    return NextResponse.json(
      { error: 'Failed to fetch gallery items' },
      { status: 500 }
    );
  }
}