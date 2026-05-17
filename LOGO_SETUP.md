# Logo Setup Guide

## Quick Start

### Step 1: Prepare Your Logo
- **Format:** PNG (recommended for transparency) or JPG
- **Size:** Any size (recommend min 200x50px for clarity)
- **Aspect Ratio:** Any ratio (will auto-scale to fit navbar)
- **Background:** Transparent recommended for PNG

### Step 2: Upload Your Logo
1. Navigate to: `/public/logo/`
2. Add your logo file as: **`logo.png`**
3. Done! Your logo will appear in the navbar automatically

### Step 3: Test
```bash
npm run dev
# Visit: http://localhost:3000
# Your logo should appear in the top-left corner
```

---

## Logo Display Details

### Current Configuration
- **Location:** Top-left of navbar (all pages)
- **Height:** 40px (responsive, maintains aspect ratio)
- **Width:** Auto (scales based on height)
- **Hover:** Links to home page ("/")

### How It Looks
- On scroll: Navbar background becomes white, logo stays visible
- Mobile: Logo visible on hamburger menu open/close
- Responsive: Adapts to all screen sizes

---

## File Path

```
public/
├── logo/
│   └── logo.png          👈 Your logo file goes here
├── images/
│   ├── case-studies/
│   ├── team/
│   ├── testimonials/
│   └── ...
├── favicon.png
```

---

## Troubleshooting

### Logo Not Appearing?
1. ✅ Check filename is exactly: `logo.png`
2. ✅ Verify file is in `/public/logo/` folder
3. ✅ Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
4. ✅ Restart dev server: `npm run dev`

### Logo Looks Blurry?
- Use higher resolution image (min 400px width recommended)
- Ensure original quality is high
- PNG format generally looks sharper than JPG

### Logo Size Wrong?
- Current height is set to 40px in navbar
- Logo width auto-scales to maintain aspect ratio
- To adjust, edit height in `/components/Navbar.tsx` line 47:
  ```
  className="h-10 w-auto"  // h-10 = 40px, adjust to h-12 = 48px, h-8 = 32px, etc.
  ```

### Logo Needs Dark/Light Version?
Currently using single logo. To create dark/light variants:
1. Add `logo-dark.png` and `logo-light.png` to `/public/logo/`
2. Update Navbar to switch logos based on scroll state (use `isScrolled` state)

---

## Logo Specifications (Recommended)

For best results, upload a logo with these specs:
- **Dimensions:** 400x100px or larger
- **Format:** PNG with transparent background
- **File Size:** Under 100KB
- **Color Mode:** RGB or RGBA
- **Resolution:** 72 DPI minimum (96 DPI for crisp display)

---

## How to Convert/Optimize Your Logo

### If You Have SVG
Best option: Convert to PNG
1. Use: https://cloudconvert.com/svg-to-png
2. Set dimensions to 400x100px
3. Download as PNG
4. Save to `/public/logo/logo.png`

### If You Have JPG
Option 1: Use as-is
- Save directly to `/public/logo/logo.png` (rename extension)

Option 2: Convert to PNG (better for transparency)
1. Use: https://cloudconvert.com/jpg-to-png
2. Download
3. Save to `/public/logo/logo.png`

### If You Have High-Res Image
Optimize first:
1. Visit: https://tinypng.com/
2. Upload your logo
3. Download optimized version
4. Save to `/public/logo/logo.png`

---

## Current Navbar Configuration

**File:** `/components/Navbar.tsx`

```jsx
{/* Logo */}
<Link href="/" className="flex items-center">
  <img
    src="/logo/logo.png"
    alt="myDesigner Logo"
    className="h-10 w-auto"  // Height: 40px, width: auto-scale
  />
</Link>
```

### Customization Options

**Change Logo Height:**
- `h-8` = 32px
- `h-10` = 40px (current)
- `h-12` = 48px
- `h-16` = 64px

**Change Logo Path:**
If you want to name your logo differently (e.g., `my-logo.png`):
```jsx
src="/logo/my-logo.png"  // Change logo.png to your-filename.png
```

---

## Multiple Logo Versions (Advanced)

If you need different logos for different pages or themes, you can add multiple logos to `/public/logo/`:

```
public/logo/
├── logo.png              # Main logo
├── logo-light.png        # Light version
├── logo-dark.png         # Dark version
├── logo-horizontal.png   # Horizontal variant
└── logo-vertical.png     # Vertical variant
```

Then update the Navbar component to use conditional logic based on page or scroll state.

---

## File Size Guidelines

Keep logo file size optimized:
- **PNG:** Typically 20-50KB
- **JPG:** Typically 10-30KB
- **SVG:** Typically 5-15KB (if converted to PNG: see above)

Use compression tools to reduce size without losing quality:
- https://tinypng.com/ (automatic, excellent)
- https://compressor.io/ (manual quality control)

---

## Next Steps

1. **Prepare your logo** in PNG format
2. **Save as:** `/public/logo/logo.png`
3. **Refresh** your browser
4. **Logo appears** in navbar automatically! ✨

---

## Support

**Issue with logo display?**
1. Check filename: `logo.png` (exact match)
2. Check location: `/public/logo/` folder
3. Hard refresh browser cache
4. Restart dev server

**Want to customize further?**
Edit `/components/Navbar.tsx` to:
- Change logo size (height class)
- Switch logos based on scroll/theme
- Add secondary logo on mobile
- Add logo to other locations (footer, etc.)

---

## Quick Reference

| Item | Details |
|------|---------|
| **File Path** | `/public/logo/logo.png` |
| **Folder** | `/public/logo/` |
| **Dimensions** | 400x100px recommended |
| **Format** | PNG or JPG |
| **Max Size** | 100KB |
| **Current Height** | 40px (h-10) |
| **Current Width** | Auto-scale |
| **Location in Site** | Navbar (all pages, top-left) |

Your logo is ready to be uploaded! 🎉
