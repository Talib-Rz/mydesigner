You are a senior frontend architect and UI/UX designer.

Build a complete production-ready agency website using:

- Next.js (latest stable version with App Router)
- React
- Tailwind CSS
- Framer Motion for animations
- TypeScript
- Fully responsive design
- Clean folder structure
- SEO optimized
- Ready for deployment on Vercel

Project Name: myDesigner

This is a premium visual branding and campaign studio website.

The website must feel:
- Modern
- Premium
- Structured
- Confident
- Slightly AI-forward
- Clean typography
- Smooth animations
- Minimal but bold

----------------------------------
COMPANY POSITIONING
----------------------------------

myDesigner is a visual campaign & branding studio serving:

B2C:
- College Events (Fest, Conference, Workshops, Sports Events)
- Alumni Associations
- Placement Cells
- Startups & Businesses
- EdTech Platforms
- Content Creators

B2B:
- Event Organizers
- Marketing Agencies
- NGOs & Social Organizations
- Real Estate Companies

Core Service Pillars:
1. Brand Identity Systems
2. Event & Launch Campaign Systems
3. Content & Media Design (Graphic + Video)
4. Marketing Creative Support (Retainer Model)

----------------------------------
WEBSITE STRUCTURE
----------------------------------

Create the following pages using Next.js App Router:

/ (Home)
/services
/segments
/case-studies
/about
/contact

----------------------------------
DESIGN SYSTEM
----------------------------------

Use Tailwind CSS.

Primary Color: Deep Indigo or Electric Blue
Secondary Color: Soft Gray tones
Accent Color: Neon Cyan or Bright Gradient Accent
Background: White with subtle gray sections
Typography: Modern sans-serif (e.g., Inter or Poppins)

Use:
- Large bold hero text
- Strong spacing
- Section-based layout
- Subtle hover animations
- Clean card components
- Rounded-xl or 2xl corners
- Shadow-md or shadow-lg for cards

----------------------------------
HOME PAGE STRUCTURE
----------------------------------

1. Hero Section
   - Big headline:
     "We Build Structured Visual Campaigns"
   - Subheading explaining agency
   - 2 CTA buttons: "View Services" and "Get In Touch"
   - Animated entrance using Framer Motion

2. Who We Serve Section
   - Grid layout (cards for each segment)
   - Hover animation
   - Icons

3. Service Pillars Section
   - 4 large cards with descriptions
   - Smooth scroll reveal animation

4. Featured Work Section
   - Placeholder case study cards
   - Image + title + short description

5. Process Section
   - 6-step horizontal or vertical timeline
   - Animated on scroll

6. Final CTA Section
   - Strong closing statement
   - Contact button

----------------------------------
SERVICES PAGE
----------------------------------

Detailed breakdown of:

- Brand Identity Systems
- Campaign Systems
- Content & Media Design
- Creative Retainer Support

Use:
- Section headers
- Bullet points
- Icon grids
- Clean layout

----------------------------------
SEGMENTS PAGE
----------------------------------

Two clear sections:

B2C
B2B

Each with cards explaining how myDesigner helps them.

----------------------------------
CASE STUDIES PAGE
----------------------------------

Create dynamic case study structure.

Use mock data array:

[
  {
    title,
    category,
    description,
    results,
    image
  }
]

Render as reusable component.

----------------------------------
ABOUT PAGE
----------------------------------

Include:

- Mission
- Vision
- Why Choose Us
- AI-enhanced workflow explanation
- Small team introduction placeholder

----------------------------------
CONTACT PAGE
----------------------------------

Include:

- Contact form (Name, Email, Message)
- Use simple client-side validation
- Ready to integrate with Formspree later
- Contact details placeholder
- Clean minimal layout

----------------------------------
ANIMATIONS
----------------------------------

Use Framer Motion for:

- Fade up on scroll
- Hero entrance animation
- Card hover scale effect
- Button hover micro interaction

Do NOT overuse animations.

----------------------------------
SEO
----------------------------------

- Use proper metadata in layout.tsx
- Add page titles
- Add meta description
- Proper semantic HTML
- Use alt text for images

----------------------------------
FOLDER STRUCTURE
----------------------------------

Organize as:

/app
  /services
  /segments
  /case-studies
  /about
  /contact
/components
  Navbar.tsx
  Footer.tsx
  Hero.tsx
  ServiceCard.tsx
  SegmentCard.tsx
  CaseStudyCard.tsx
  ProcessSection.tsx
  CTASection.tsx
/lib
/data.ts
/styles

----------------------------------
NAVBAR
----------------------------------

- Fixed top
- Transparent initially
- Becomes solid on scroll
- Responsive mobile menu (hamburger)
- Smooth transitions

----------------------------------
FOOTER
----------------------------------

- Company summary
- Quick links
- Social links placeholder
- Copyright

----------------------------------
RESPONSIVENESS
----------------------------------

- Fully responsive
- Mobile-first approach
- Test breakpoints:
  sm
  md
  lg
  xl

----------------------------------
CODE QUALITY
----------------------------------

- Use reusable components
- Use TypeScript interfaces
- Clean naming
- Modular structure
- No unnecessary inline styles
- Use Tailwind properly

----------------------------------
DELIVERABLE
----------------------------------

Generate:

1. Full project structure
2. All required files
3. Clean readable code
4. Production-ready layout
5. Ready for GitHub push
6. Ready for Vercel deployment

Start by generating:
- package.json
- next.config.js
- tailwind.config.js
- global styles
- layout.tsx
- homepage
- then other pages step by step

Build the entire project in a structured way.