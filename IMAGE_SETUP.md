# Image Setup Guide - myDesigner Website

## Folder Structure

A complete folder structure has been created in `/public/images/` for organizing all website photos. Simply add your 1:1 (square) photos to the appropriate folders, and they'll automatically appear on the website!

```
public/
├── images/
│   ├── case-studies/          👈 Case study project photos
│   ├── team/                  👈 Team member photos
│   ├── portfolio/             👈 Portfolio/work samples
│   ├── testimonials/          👈 Client testimonial photos
│   └── about/                 👈 About page photos
└── favicon.png
```

---

## Where to Add Photos

### 1. **Case Studies** (`/public/images/case-studies/`)
Add case study photos here. The website currently expects:
- `case-study-1.webp` - TechCon 2024 Campaign
- `case-study-2.webp` - EduStartup Rebranding
- `case-study-3.webp` - Fest Media Campaign
- `case-study-4.webp` - Real Estate Launch Campaign

**How it works:**
- Photos appear on the "Case Studies" page in a 2-column grid
- Each photo displays in a 1:1 (square) aspect ratio
- Located in `/app/case-studies/` page

**Update path in code:**
Edit `/lib/data.ts` caseStudies array:
```javascript
{
  id: 1,
  title: 'TechCon 2024 Campaign',
  image: '/images/case-studies/case-study-1.webp',  // Add your image path here
  ...
}
```

---

### 2. **Team** (`/public/images/team/`)
For team member profiles (future feature).

**Usage location:** About page (when implemented)

**File naming suggestion:**
- `team-member-1.webp`
- `team-member-2.webp`
- etc.

---

### 3. **Portfolio** (`/public/images/portfolio/`)
For work samples and portfolio pieces.

**Usage location:** Services page or dedicated portfolio section (when implemented)

**File naming suggestion:**
- `portfolio-1.webp`
- `portfolio-2.webp`
- etc.

---

### 4. **Testimonials** (`/public/images/testimonials/`)
For client profile photos with testimonials.

**Usage location:** Client testimonials section (when implemented)

**File naming suggestion:**
- `client-1.webp`
- `client-2.webp`
- etc.

---

### 5. **About** (`/public/images/about/`)
For about page hero images or content images.

**Usage location:** About page

**File naming suggestion:**
- `about-hero.webp`
- `about-team.webp`
- etc.

---

## Photo Requirements

✅ **Required Specifications:**
- **Size:** 1:1 (square) aspect ratio (e.g., 400x400px, 800x800px, 1200x1200px)
- **Format:** `.webp` (recommended for web), `.jpg`, or `.png`
- **File size:** Keep under 500KB per image for optimal performance
- **Quality:** High resolution recommended (at least 800x800px)

---

## Quick Start

### Step 1: Prepare Photos
- Take or collect 1:1 aspect ratio photos
- Convert to WebP format (or use JPG/PNG)
- Resize to appropriate dimensions

### Step 2: Add Photos
1. Navigate to `/public/images/case-studies/`
2. Paste your photos
3. Rename to match expected filenames (e.g., `case-study-1.webp`)

### Step 3: Verify in Code
Update `/lib/data.ts` if filenames don't match the expected path.

### Step 4: Test
1. Run: `npm run dev`
2. Visit: `http://localhost:3000/case-studies`
3. Photos should now be visible! 🎉

---

## Update Image Paths (Data)

### Edit Case Studies (`/lib/data.ts`)
```javascript
export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Your Project Title',
    category: 'Your Category',
    description: 'Your description',
    results: ['Result 1', 'Result 2', 'Result 3'],
    image: '/images/case-studies/case-study-1.webp',  // ← Update this path
  },
  // ... more case studies
];
```

---

## WebP Conversion Guide

### Using Online Tool (Easiest)
1. Visit: https://cloudconvert.com/webp
2. Upload your JPG/PNG
3. Download as WebP
4. Save to `/public/images/case-studies/`

### Using ImageMagick (CLI)
```bash
magick convert input.jpg output.webp
```

### Using FFmpeg
```bash
ffmpeg -i input.jpg output.webp
```

---

## Troubleshooting

### Photos Not Appearing?
1. ✅ Check file path matches exactly (case-sensitive on Linux/Mac)
2. ✅ Verify 1:1 aspect ratio
3. ✅ Check file format is supported (.webp, .jpg, .png)
4. ✅ Ensure file size is reasonable (<500KB)
5. ✅ Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### Images Look Blurry?
- Increase resolution to at least 800x800px
- Use `.webp` format for better compression
- Ensure original image quality is high

### File Path Issues?
- Paths are relative to `/public/` folder
- Always use forward slashes: `/images/case-studies/`
- Check that filename matches exactly in data files

---

## Component Reference

### Where Photos Are Used

| Component | Location | Folder | Props |
|-----------|----------|--------|-------|
| **CaseStudyCard** | `/app/case-studies/` | `/public/images/case-studies/` | `image` prop from data |
| **ServiceCard** | `/app/services/` | (Future) | TBD |
| **TeamCard** | (Future) | `/public/images/team/` | TBD |
| **TestimonialCard** | (Future) | `/public/images/testimonials/` | TBD |

---

## Image Optimization Tips

1. **Use WebP Format**
   - Smaller file sizes
   - Better quality
   - Supported by all modern browsers

2. **Compress Before Upload**
   - Use: https://tinypng.com/ or https://compressor.io/
   - Aim for <300KB per image

3. **Consistent Dimensions**
   - Keep all case study photos same size (e.g., 800x800px)
   - Prevents layout shift

4. **Alt Text**
   - Images automatically use title as alt text
   - Helps with SEO and accessibility

---

## Future Enhancements

These folders are ready for future features:
- ✅ Team member profiles with photos
- ✅ Client testimonials with headshots
- ✅ Portfolio gallery
- ✅ About page team photos

Just add photos to the respective folders when implementing these features!

---

## Support

For questions or issues:
1. Check the "Troubleshooting" section above
2. Verify file paths and formats
3. Ensure 1:1 aspect ratio requirement is met

Happy adding photos! 📸
