import { readdirSync, statSync } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

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

export async function GET() {
  try {
    const galleryDir = join(process.cwd(), 'public/gallery-items');

    // Valid extensions
    const validExtensions = {
      image: ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg'],
      video: ['.mp4', '.webm', '.mov', '.avi'],
    };

    // Orientation priority order
    const orientationOrder: { [key: string]: number } = {
      'square': 1,
      'potrait': 2,
      'portrait': 2,
      'landscape': 3,
    };

    const getOrientationKey = (folder: string): string => {
      const lower = folder.toLowerCase();
      if (lower.includes('square')) return 'square';
      if (lower.includes('potrait') || lower.includes('portrait')) return 'potrait';
      if (lower.includes('landscape')) return 'landscape';
      return folder;
    };

    const hasOrientationSubfolders = (folderPath: string): boolean => {
      try {
        const files = readdirSync(folderPath);
        return files.some((file) => {
          const stat = statSync(join(folderPath, file));
          if (stat.isDirectory()) {
            const lower = file.toLowerCase();
            return (
              lower.includes('square') ||
              lower.includes('potrait') ||
              lower.includes('portrait') ||
              lower.includes('landscape')
            );
          }
          return false;
        });
      } catch {
        return false;
      }
    };

    // Read all items in gallery-items folder
    const entries = readdirSync(galleryDir);
    const categories: GalleryCategory[] = [];

    entries.forEach((entry) => {
      const fullPath = join(galleryDir, entry);
      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
        // It's a folder - check if it has orientation subfolders
        try {
          const files = readdirSync(fullPath);
          let items: GalleryItem[] = [];

          // Check if this folder has orientation subfolders
          if (hasOrientationSubfolders(fullPath)) {
            // Process orientation subfolders
            const orientationFolders = files
              .filter((file) => {
                const stat = statSync(join(fullPath, file));
                return stat.isDirectory();
              })
              .sort((a, b) => {
                const keyA = getOrientationKey(a);
                const keyB = getOrientationKey(b);
                return (orientationOrder[keyA] || 999) - (orientationOrder[keyB] || 999);
              });

            let itemId = 0;
            orientationFolders.forEach((orientationFolder) => {
              try {
                const orientationPath = join(fullPath, orientationFolder);
                const orientationFiles = readdirSync(orientationPath);
                const orientationKey = getOrientationKey(orientationFolder);

                orientationFiles
                  .filter((file) => {
                    const ext = file.substring(file.lastIndexOf('.')).toLowerCase();
                    return (
                      validExtensions.image.includes(ext) ||
                      validExtensions.video.includes(ext)
                    );
                  })
                  .sort((a, b) => a.localeCompare(b))
                  .forEach((file) => {
                    const ext = file.substring(file.lastIndexOf('.')).toLowerCase();
                    const isImage = validExtensions.image.includes(ext);

                    items.push({
                      id: `gallery-${entry}-${itemId}-${file.replace(/[^a-zA-Z0-9]/g, '')}`,
                      name: file.replace(/\.[^/.]+$/, ''),
                      type: isImage ? 'image' : 'video',
                      src: `/gallery-items/${entry}/${orientationFolder}/${file}`,
                      extension: ext,
                      orientation: orientationKey,
                      section: orientationFolder,
                    });
                    itemId++;
                  });
              } catch (err) {
                console.warn(
                  `Failed to read orientation folder: ${entry}/${orientationFolder}`,
                  err
                );
              }
            });
          } else {
            // Flat folder - read files directly
            items = files
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
          }

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