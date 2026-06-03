# myDesigner - Premium Visual Campaign & Branding Studio

<div align="center">

A modern, production-ready Next.js website for a premium visual branding and campaign design studio. Built with Next.js 14, React, Tailwind CSS, TypeScript, and Framer Motion for stunning animations and seamless user experience.

**[Live Demo](#) • [Documentation](#) • [Report Bug](#) • [Request Feature](#)**

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Available Scripts](#available-scripts)
- [Pages & Routes](#pages--routes)
- [Customization](#customization)
- [Email Configuration](#email-configuration)
- [Gallery Setup](#gallery-setup)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Support](#support)

---

## 🎯 About

**myDesigner** is a premium visual campaign and branding design studio serving both B2C and B2B clients. The website showcases our expertise in:

### B2C Services
- College Events (Fests, Conferences, Workshops, Sports Events)
- Alumni Associations & Placement Cells
- Startups & Small Businesses
- EdTech Platforms
- Content Creators

### B2B Services
- Event Organizers
- Marketing Agencies
- NGOs & Social Organizations
- Real Estate Companies

### Core Service Pillars
1. **Brand Identity Systems** - Logos, color palettes, typography guidelines
2. **Visual Campaign Design** - Posters, flyers, social media assets
3. **Event Branding** - Certificates, materials, promotional graphics
4. **Design Consultation** - Strategy and creative direction

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| **Modern Design** | Clean, premium aesthetics with bold typography and smooth animations |
| **Fully Responsive** | Mobile-first approach with perfect responsiveness across all devices |
| **High Performance** | Optimized for speed with Next.js 14 App Router and lazy loading |
| **Component-Based** | Reusable, well-organized, maintainable React components |
| **Smooth Animations** | Framer Motion animations for engaging, interactive experiences |
| **SEO Optimized** | Proper metadata, semantic HTML, and structured data |
| **TypeScript** | Full type safety for better development experience |
| **Tailwind CSS** | Utility-first CSS framework for efficient styling |
| **Email Integration** | Contact form with Resend/Nodemailer email capabilities |
| **Gallery System** | Dynamic gallery with image organization and filtering |
| **Feedback Collection** | Client feedback form with email notifications |
| **WhatsApp Integration** | Quick contact button with WhatsApp link |
| **Responsive Images** | Optimized image handling with Next.js Image component |

---

## 🛠 Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React 18, Next.js 14 (App Router), TypeScript |
| **Styling** | Tailwind CSS 3, PostCSS, Autoprefixer |
| **Animations** | Framer Motion 10 |
| **Icons** | React Icons |
| **Email** | Resend, Nodemailer |
| **Deployment** | Vercel (Recommended) |
| **Node.js** | 18+ required |

---

## 📁 Project Structure

```
mydesigner_webpage/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── contact/
│   │   └── page.tsx             # Contact form page
│   ├── services/
│   │   ├── layout.tsx           # Services layout
│   │   └── page.tsx             # Services showcase
│   ├── segments/
│   │   └── page.tsx             # B2C/B2B segments page
│   ├── case-studies/
│   │   └── page.tsx             # Portfolio/case studies
│   ├── gallery/
│   │   └── page.tsx             # Gallery showcase
│   ├── feedback/
│   │   └── page.tsx             # Feedback form page
│   └── api/                      # API routes
│       ├── send-email/          # Contact form endpoint
│       ├── send-feedback/       # Feedback endpoint
│       └── gallery/             # Gallery data endpoint
│
├── components/                   # Reusable React components
│   ├── Navbar.tsx               # Navigation bar
│   ├── Footer.tsx               # Footer
│   ├── Hero.tsx                 # Hero section
│   ├── ServiceCard.tsx          # Service card component
│   ├── SegmentCard.tsx          # Segment card component
│   ├── CaseStudyCard.tsx        # Case study card
│   ├── TestimonialCard.tsx      # Testimonial card
│   ├── TestimonialsSection.tsx  # Testimonials section
│   ├── ProcessSection.tsx       # Process/timeline section
│   ├── CTASection.tsx           # Call-to-action section
│   ├── GalleryClient.tsx        # Gallery client component
│   ├── GalleryItem.tsx          # Individual gallery item
│   └── WhatsAppButton.tsx       # WhatsApp contact button
│
├── lib/
│   ├── data.ts                  # Mock data and interfaces
│   └── brochure-links.json      # Brochure links
│
├── styles/
│   └── globals.css              # Global styles and Tailwind directives
│
├── public/                       # Static assets
│   ├── images/
│   │   ├── case-studies/        # Case study images
│   │   ├── services/            # Service images
│   │   ├── team/                # Team photos
│   │   └── testimonials/        # Testimonial images
│   ├── logo/                    # Logo files
│   └── gallery-items/           # Gallery organized by category
│       ├── Brochure Designs/
│       ├── Certificates/
│       ├── Events Companies Logo/
│       └── Posters & Flyers/
│
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.js            # PostCSS configuration
└── README.md                    # This file
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** - [Download](https://nodejs.org/)
- **npm** - Comes with Node.js
- A code editor (VS Code recommended)

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

4. **Open in browser**
Open [http://localhost:3000](http://localhost:3000) and you should see the website running!

---

## 📝 Available Scripts

```bash
# Development
npm run dev           # Start dev server with hot reload (http://localhost:3000)

# Production
npm run build         # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint to check code quality
```

---

## 🌐 Pages & Routes

| Route | Purpose |
|-------|---------|
| `/` | **Home** - Hero section, services overview, featured work, process, testimonials |
| `/services` | **Services** - Detailed breakdown of all four service pillars |
| `/segments` | **Market Segments** - B2C and B2B positioning and services |
| `/case-studies` | **Portfolio** - Featured case studies and project showcases |
| `/about` | **About Us** - Mission, values, team, and AI workflow |
| `/gallery` | **Gallery** - Visual portfolio organized by categories |
| `/contact` | **Contact** - Contact form with email integration |
| `/feedback` | **Feedback** - Client feedback collection form |

---

## 🎨 Customization

### Colors & Design System
Edit the color palette in `tailwind.config.js`:
```javascript
// Primary brand color
primary: {
  700: '#4338ca'  // Deep Indigo
}

// Accent color
accent: '#06b6d4'  // Cyan

// Secondary colors
gray: { ... }
```

**To customize colors:**
1. Open `tailwind.config.js`
2. Update the color values in the `colors` object
3. Colors automatically update across all components

### Typography
The site uses the **Inter** font family from Google Fonts. To change:
1. Open `app/layout.tsx`
2. Update the font import in the `Metadata` section
3. Modify font settings in `tailwind.config.js`

### Content Updates
- **Case Studies**: `lib/data.ts` - Contains all case study data
- **Services**: `app/services/page.tsx` - Service descriptions and details
- **Segments**: `lib/data.ts` - B2C and B2B segment information
- **Testimonials**: `lib/data.ts` - Client testimonials
- **Team**: `lib/data.ts` - Team member information

---

## 📧 Email Configuration

### Setup Instructions
The contact and feedback forms use email integration. Choose one of these options:

#### Option 1: Resend (Recommended)
1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add to environment variables:
```env
RESEND_API_KEY=your_api_key_here
```

#### Option 2: Nodemailer
1. Configure SMTP credentials in `app/api/send-email/route.ts`
2. Add environment variables:
```env
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password
```

**See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed setup instructions**

---

## 🖼 Gallery Setup

The gallery system displays organized design work by category:
- Brochure Designs (Landscape & Portrait)
- Certificates (Landscape & Portrait)
- Events Companies Logos
- Posters & Flyers (Landscape, Portrait, Square)

**To add gallery items:**
1. Upload images to the appropriate folder in `public/gallery-items/`
2. Images are automatically discovered and displayed
3. See [GALLERY_SETUP.md](./GALLERY_SETUP.md) for detailed instructions

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

Vercel is optimized for Next.js and offers the best performance:

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit: myDesigner"
git remote add origin https://github.com/YOUR_USERNAME/mydesigner.git
git branch -M main
git push -u origin main
```

2. **Deploy to Vercel**
- Visit [vercel.com](https://vercel.com)
- Click "Add New Project"
- Select "Import Git Repository"
- Choose your mydesigner repository
- Click "Deploy"

3. **Configure Environment Variables**
- In Vercel Dashboard → Settings → Environment Variables
- Add your email configuration variables (RESEND_API_KEY, etc.)

4. **Custom Domain**
- In Vercel Dashboard → Settings → Domains
- Add your custom domain
- Update DNS records per Vercel instructions

**See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment guide**

---

## 📱 Browser Support

This website is fully responsive and tested on:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Minimum screen sizes:**
- Mobile: 320px
- Tablet: 768px
- Desktop: 1024px and up

See [RESPONSIVE_DESIGN.md](./RESPONSIVE_DESIGN.md) for responsive design details.

---

## 🔧 Troubleshooting

### Common Issues

**Port 3000 already in use**
```bash
npm run dev -- -p 3001
```

**Dependencies installation fails**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Tailwind CSS not working**
```bash
npm run build
npm start
```

**Email not sending**
- Check environment variables are set correctly
- Verify API keys are valid
- See [RESEND_TROUBLESHOOTING.md](./RESEND_TROUBLESHOOTING.md)

**See [PROJECT_INSTRUCTIONS.md](./PROJECT_INSTRUCTIONS.md) for more troubleshooting**

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

## 📄 Project Documentation

- [QUICKSTART.md](./QUICKSTART.md) - 5-minute quick start guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Complete deployment guide
- [EMAIL_SETUP.md](./EMAIL_SETUP.md) - Email configuration setup
- [GALLERY_SETUP.md](./GALLERY_SETUP.md) - Gallery configuration
- [RESEND_TROUBLESHOOTING.md](./RESEND_TROUBLESHOOTING.md) - Email troubleshooting
- [RESPONSIVE_DESIGN.md](./RESPONSIVE_DESIGN.md) - Responsive design details
- [PROJECT_COMPLETE.md](./PROJECT_COMPLETE.md) - Project completion checklist
- [PROJECT_INSTRUCTIONS.md](./PROJECT_INSTRUCTIONS.md) - Detailed project instructions

---

## 💡 Tips for Success

1. **Backup your data** before making major changes
2. **Test locally** before deploying to production
3. **Keep dependencies updated** regularly
4. **Use Git for version control** to track changes
5. **Optimize images** before adding to gallery
6. **Mobile test** frequently during development
7. **Monitor analytics** after deployment

---

## 📞 Support

For issues, questions, or feature requests:
1. Check the troubleshooting section above
2. Review project documentation files
3. Check Next.js documentation
4. Contact the development team

---

## 📄 License

This project is private and proprietary to myDesigner studio.

---

<div align="center">

**Made with ❤️ by myDesigner Studio**

*Premium Visual Campaign & Branding Design*

</div>
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
- Email: mydesigner2024@gmail.com
- Phone: +91 98765 43210
- Website: [mydesigner.in](/)

## License

This project is proprietary and confidential. All rights reserved.

## Credits

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
