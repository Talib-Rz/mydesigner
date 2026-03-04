# Quick Start Guide - myDesigner

Get your myDesigner website up and running in 5 minutes!

## Prerequisites

Before you begin, make sure you have:
- **Node.js 18+** - Download from [nodejs.org](https://nodejs.org/)
- **npm** - Comes with Node.js
- **Git** (optional but recommended)
- A code editor (VS Code recommended)

## Installation Steps

### 1. Navigate to Project Directory

```bash
cd mydesigner_webpage
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js
- React
- Tailwind CSS
- Framer Motion
- React Icons

**Installation time:** 2-5 minutes depending on internet speed

### 3. Run Development Server

```bash
npm run dev
```

You'll see output similar to:
```
> ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

## Viewing Your Site

1. **Open your browser** and go to: http://localhost:3000
2. You should see the myDesigner homepage with all sections loaded

## Project Layout

```
mydesigner_webpage/
├── app/                    # Page files
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── case-studies/      # Case studies
│   ├── segments/          # Market segments
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Main layout
├── components/            # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── CaseStudyCard.tsx
│   └── ...
├── lib/
│   └── data.ts            # Mock data
├── styles/
│   └── globals.css        # Global styles
├── public/                # Static assets
├── package.json           # Dependencies
└── tailwind.config.js     # Tailwind config
```

## Making Changes

The development server has **hot reload** enabled, so changes appear instantly:

### Edit a Page
1. Open `app/page.tsx`
2. Change some text
3. Save the file
4. Changes appear immediately in browser

### Edit a Component
1. Open any component in `/components`
2. Make your changes
3. The page auto-updates

### Edit Styles
1. Open `styles/globals.css`
2. Modify Tailwind classes or CSS
3. Changes apply instantly

## Customization Quick Tips

### Change Colors
Edit `tailwind.config.js` - Primary, Secondary, and Accent colors are defined there

### Update Navigation Links
Edit `components/Navbar.tsx` - Update the `navLinks` array

### Modify Content
Edit `lib/data.ts` - Update service, segment, and case study data

### Change Company Info
Update text in:
- `components/Footer.tsx` - Footer links and info
- `app/page.tsx` - Homepage content
- `app/about/page.tsx` - About page content

## Useful Commands

```bash
# Development server (from above)
npm run dev

# Build for production
npm run build

# Start production build locally
npm start

# Run linting/code quality check
npm run lint

# Clear Next.js cache (if needed)
rm -rf .next
```

## Troubleshooting

### Port 3000 Already in Use
```bash
# On Windows (PowerShell)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Module Not Found Error
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Styling Not Appearing
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Can't Connect to Localhost
- Ensure port 3000 is not blocked by firewall
- Try accessing `127.0.0.1:3000` instead of `localhost:3000`

## Next Steps

1. **Explore the site** - Click through all pages to understand the structure
2. **Customize content** - Update your company info, services, and projects
3. **Add your own images** - Create `/public/images` folder and update image references
4. **Test the contact form** - Fill it out to see validation
5. **Deploy when ready** - See `DEPLOYMENT.md` for detailed deployment instructions

## File-by-File Customization Guide

### Update Homepage
- **File:** `app/page.tsx`
- **What to change:** Hero title, subtitle, CTA buttons
- **Also edit:** `lib/data.ts` for services and case studies

### Update Services Page
- **File:** `app/services/page.tsx`
- **What to change:** Service descriptions, features, deliverables

### Update Contact Page
- **File:** `app/contact/page.tsx`
- **What to change:** Email, phone, contact methods
- **Later:** Integrate with Formspree or email service

### Update Footer
- **File:** `components/Footer.tsx`
- **What to change:** Links, company info, social profiles

## Adding New Content

### Add a New Service
1. Edit `app/services/page.tsx`
2. Add a new entry to the `services` array
3. The component automatically renders it

### Add a Case Study
1. Edit `lib/data.ts`
2. Add a new object to `caseStudies` array
3. Homepage and case-studies page auto-update

## Performance Tips

- Images load on-demand (lazy loading)
- CSS is minified automatically
- Pages are optimized for Core Web Vitals
- Static content is pre-rendered

## Browser Testing

After changes, test on:
- Chrome/Chromium
- Firefox
- Safari
- Mobile (use DevTools - F12, Device toggle)

## Getting Help

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **React Icons:** https://react-icons.github.io/react-icons/

## Production Checklist

Before deploying to production:
- [ ] All page content updated
- [ ] Images optimized and added
- [ ] Contact form testing complete
- [ ] All links verified
- [ ] Mobile responsiveness checked
- [ ] Performance tested (npm run build)
- [ ] SEO metadata verified in layout.tsx
- [ ] Social links updated in Footer
- [ ] Custom domain ready
- [ ] Analytics set up (optional)

## Ready to Deploy?

See `DEPLOYMENT.md` for step-by-step deployment instructions to:
- Vercel (Recommended)
- Netlify
- Self-hosted servers
- Custom domain setup

---

**Happy coding! 🚀 If you have any questions, refer to the documentation files in the project root.**
