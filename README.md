# myDesigner - Premium Visual Branding & Campaign Studio

A modern, fully responsive Next.js website for a premium visual branding and campaign studio. Built with Next.js 14, React, Tailwind CSS, and Framer Motion.

## Features

- ✨ **Modern Design** - Clean, premium aesthetics with bold typography and smooth animations
- 📱 **Fully Responsive** - Mobile-first approach with perfect responsiveness across all devices
- ⚡ **High Performance** - Optimized for speed with Next.js 14 App Router
- 🎨 **Component-Based** - Reusable, well-organized React components
- 🎬 **Smooth Animations** - Framer Motion animations for engaging user experience
- 🔍 **SEO Optimized** - Proper metadata, semantic HTML, and structured data
- 📝 **TypeScript** - Full TypeScript support for type safety
- 🎨 **Tailwind CSS** - Utility-first CSS framework for efficient styling

## Project Structure

```
/app                      # Next.js App Router pages
  /services              # Services page
  /segments              # Market segments page
  /case-studies          # Case studies showcase
  /about                 # About page
  /contact               # Contact form page
  layout.tsx             # Root layout
  page.tsx               # Home page

/components               # Reusable React components
  Navbar.tsx             # Navigation bar
  Footer.tsx             # Footer
  Hero.tsx               # Hero section component
  ServiceCard.tsx        # Service card component
  SegmentCard.tsx        # Segment card component
  CaseStudyCard.tsx      # Case study card component
  ProcessSection.tsx     # Process/timeline section
  CTASection.tsx         # Call-to-action section

/lib
  data.ts                # Mock data and interfaces

/styles
  globals.css            # Global styles and Tailwind directives

package.json             # Project dependencies
tailwind.config.js       # Tailwind CSS configuration
next.config.js           # Next.js configuration
tsconfig.json            # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd mydesigner_webpage
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Development

### Local Development
```bash
npm run dev
```
Runs the development server with hot reload.

### Build for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Pages & Routes

- **`/`** - Home page with hero, services, featured work, and process
- **`/services`** - Detailed breakdown of all four service pillars
- **`/segments`** - B2C and B2B market segments explanation
- **`/case-studies`** - Portfolio showcase with detailed case study pages
- **`/about`** - Company mission, values, team, and AI workflow
- **`/contact`** - Contact form with client-side validation

## Customization

### Colors
Edit the color palette in `tailwind.config.js`:
- Primary: Deep Indigo (primary-700: `#4338ca`)
- Accent: Cyan (accent: `#06b6d4`)
- Secondary: Gray tones

### Typography
The site uses the Inter font family from Google Fonts. To change:
1. Update font import in `app/layout.tsx`
2. Modify font settings in `tailwind.config.js`

### Content
- **Case Studies**: Update data in `lib/data.ts`
- **Services**: Modify service descriptions in `app/services/page.tsx`
- **Segments**: Update segment information in `lib/data.ts`

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git push origin main
```

2. **Import in Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "Add New" → "Project"
- Import your GitHub repository
- Click "Deploy"

### Environment Variables
Add any required environment variables in Vercel dashboard under Project Settings → Environment Variables.

### Custom Domain
1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Update DNS records as per Vercel instructions

## Contact Form Integration

The contact form currently uses client-side validation. To enable backend submission:

### Option 1: Formspree
1. Create account at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update form submission in `app/contact/page.tsx`

### Option 2: Email Service
Use your preferred email service (SendGrid, EmailJS, etc.) and integrate with the form submission handler.

## Performance Optimization

- Images are optimized through Next.js Image component
- CSS is minified using Tailwind
- JavaScript is code-split automatically
- Static pages are pre-rendered for fast loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Code Quality

### TypeScript
All components are fully typed with TypeScript for better developer experience and type safety.

### Component Naming
- Components use clear, descriptive names
- Props interfaces are well-defined
- Responsive classes follow Tailwind conventions

### Responsive Design
- Mobile-first approach
- Tailwind breakpoints: sm, md, lg, xl
- Tested on various screen sizes

## Future Enhancements

- [ ] Blog section for case study articles
- [ ] Team member profiles with images
- [ ] Client testimonials carousel
- [ ] Animated counter statistics
- [ ] Dark mode support
- [ ] Multi-language support
- [ ] Newsletter subscription
- [ ] Project gallery with filters

## Support

For questions or issues:
- Email: hello@mydesigner.in
- Phone: +91 98765 43210
- Website: [mydesigner.in](/)

## License

This project is proprietary and confidential. All rights reserved.

## Credits

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
