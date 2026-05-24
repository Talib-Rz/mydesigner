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

export async function GET() {
  try {
    const galleryDir = join(process.cwd(), 'public/gallery-items');
    
    // Read files from gallery-items folder
    const files = readdirSync(galleryDir);
    
    // Filter valid image and video files
    const validExtensions = {
      image: ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg'],
      video: ['.mp4', '.webm', '.mov', '.avi'],
    };
    
    const galleryItems: GalleryItem[] = files
      .filter((file) => {
        const ext = file.substring(file.lastIndexOf('.')).toLowerCase();
        return (
          validExtensions.image.includes(ext) ||
          validExtensions.video.includes(ext)
        );
      })
      .map((file, index) => {
        const ext = file.substring(file.lastIndexOf('.')).toLowerCase();
        const isImage = validExtensions.image.includes(ext);
        
        return {
          id: `gallery-${index}-${file.replace(/[^a-zA-Z0-9]/g, '')}`,
          name: file.replace(/\.[^/.]+$/, ''),
          type: (isImage ? 'image' : 'video') as const,
          src: `/gallery-items/${file}`,
          extension: ext,
        } as GalleryItem;
      })
      .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically
    
    return NextResponse.json(galleryItems);
  } catch (error) {
    console.error('Gallery API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch gallery items' },
      { status: 500 }
    );
  }
}
