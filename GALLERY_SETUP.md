# Dynamic Gallery System - Quick Start Guide

## What You Have
A completely **dynamic gallery page** at `/gallery` that automatically detects and displays all images and videos from the `/public/gallery-items/` folder.

## Supported File Types

### Images
- `.png` - PNG format (recommended)
- `.jpg` / `.jpeg` - JPEG format
- `.webp` - WebP format
- `.svg` - SVG format
- `.gif` - GIF format

### Videos
- `.mp4` - MPEG-4 video
- `.webm` - WebM video
- `.mov` - QuickTime video
- `.avi` - AVI video

## How It Works

1. **Add Files**: Place your PNG/SVG images and videos in `/public/gallery-items/` folder
2. **Auto-Detection**: The gallery automatically reads all files from this folder
3. **Sorting**: Items are sorted alphabetically by filename
4. **Display**: A responsive 3-column grid on desktop, 2 columns on tablet, 1 on mobile
5. **Video Autoplay**: Videos automatically play when scrolled into view and pause when scrolled out
6. **Hover Effects**: Show image/video name on hover with brightness effect

## Quick Setup Instructions

### Step 1: Prepare Your Files
- Convert all images to 1:1 ratio (square) as you mentioned
- Name files clearly (e.g., `campaign-1.png`, `social-media-design.png`)
- Keep files under 5MB for optimal performance

### Step 2: Add Files
Copy your files to: `d:\DevZone\mydesigner_webpage\public\gallery-items\`

Example structure:
```
public/gallery-items/
├── campaign-1.png
├── campaign-2.png
├── logo-design.svg
├── social-media-grid.png
├── video-intro.mp4
├── promo-animation.webm
└── (add more files...)
```

### Step 3: Visit the Gallery
Navigate to `http://localhost:3000/gallery` and see your items appear automatically!

### Step 4: Refresh
If new files don't appear immediately, refresh the page (Ctrl+R or Cmd+R)

## Features

✅ **Fully Dynamic** - No coding needed to add/remove items
✅ **Auto-Sort** - Items sort alphabetically by filename
✅ **Video Autoplay** - Videos play when scrolled into view
✅ **Responsive Design** - Works on all screen sizes
✅ **Hover Labels** - Shows file name and type on hover
✅ **Video Badge** - Red badge shows which items are videos
✅ **Smooth Animations** - Fade-in and scale animations as items appear
✅ **Error Handling** - Gracefully handles missing files

## Filename Tips

Use clear, descriptive names for better presentation:
- `brand-identity-system.png` ← Shows as "brand identity system" on hover
- `event-campaign-2024.png` ← Shows as "event campaign 2024"
- `social-media-design.svg` ← Shows as "social media design"

Avoid special characters and numbers only:
- `design-1.png` ← Good
- `design_1.png` ← Also good
- `!!!design.png` ← Avoid

## Ordering Images

Files are displayed in **alphabetical order**. To control the order, use prefixes:

```
01-hero-campaign.png
02-brand-system.png
03-social-media.png
04-event-poster.png
05-video-promo.mp4
```

This ensures they appear in your desired sequence!

## Video Optimization Tips

For best performance with videos:

1. **Format**: MP4 is most compatible
2. **Size**: Keep under 10MB per video
3. **Duration**: Shorter videos work best (under 30 seconds)
4. **Codecs**: H.264 video + AAC audio (standard MP4)
5. **Resolution**: Match your image aspect ratio

Example command to compress videos (using FFmpeg):
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -c:a aac -b:a 128k output.mp4
```

## Troubleshooting

### Videos not autoplaying?
- Ensure browser allows autoplay (some browsers block it)
- Videos will play on user scroll interaction
- Try MP4 format for best compatibility

### Images look blurry?
- Ensure source image quality is high
- For 1:1 ratio, use minimum 800x800px
- PNG or WebP formats recommended for quality

### Items not showing?
1. Check file is in `/public/gallery-items/`
2. Verify file extension is correct (lowercase)
3. Refresh the page
4. Check browser console for errors

### Too many items loading slowly?
- Consider splitting into folders (if you add pagination later)
- Optimize large files with compression tools
- Use modern formats like WebP

## API Details

The gallery uses an API route at `/api/gallery` that:
- Reads files from `/public/gallery-items/`
- Filters for valid image/video extensions
- Returns JSON with file metadata
- Sorts items alphabetically

Endpoint: `GET /api/gallery`

Response format:
```json
[
  {
    "id": "gallery-0-design1",
    "name": "design-1",
    "type": "image",
    "src": "/gallery-items/design-1.svg",
    "extension": ".svg"
  }
]
```

## Next Steps

1. Add your PNG/SVG images to `/public/gallery-items/`
2. Optionally add video files for promotional content
3. Visit `/gallery` to see your portfolio
4. Share the page with clients!

---

**Note**: The gallery is fully responsive and works on all devices. Videos will autoplay when visible on desktop and tablet, but mobile browsers may have autoplay restrictions.
