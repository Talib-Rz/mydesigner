# Deployment Guide for myDesigner

Complete guide to deploy your myDesigner website to production.

## Quick Start - Vercel (Recommended)

Vercel is the optimal choice for Next.js applications and offers the best performance, automatic previews, and seamless integration.

### Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: myDesigner website"
```

2. **Create GitHub Repository**
- Go to [github.com/new](https://github.com/new)
- Create a repository named `mydesigner-website`
- Follow GitHub's instructions to push your local code

```bash
git remote add origin https://github.com/YOUR_USERNAME/mydesigner-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Go to Vercel**
- Visit [vercel.com](https://vercel.com)
- Sign up or log in with GitHub

2. **Import Project**
- Click "Add New" → "Project"
- Select your `mydesigner-website` repository
- Vercel will automatically detect Next.js configuration
- Click "Deploy"

**That's it!** Your site is now live at a Vercel URL (e.g., `mydesigner-website.vercel.app`)

### Step 3: Connect Custom Domain

1. **In Vercel Dashboard**
- Go to your project → Settings → Domains
- Click "Add Domain"
- Enter your domain (e.g., `mydesigner.in`)

2. **Update DNS Records**
- Follow Vercel's DNS configuration instructions
- Point your domain to Vercel's nameservers:
  - `ns1.vercel-dns.com`
  - `ns2.vercel-dns.com`

3. **SSL Certification**
- Vercel automatically provisions free SSL certificates
- HTTPS will be enabled within minutes

## Alternative Deployment Options

### Option 1: Netlify

1. **Connect Repository**
- Go to [netlify.com](https://netlify.com)
- Click "Add New Site" → "Import an existing project"
- Select your GitHub repository

2. **Build Settings**
- Build Command: `npm run build`
- Publish Directory: `.next`
- Click "Deploy"

### Option 2: Self-Hosted (VPS/Cloud Server)

**Prerequisites:**
- Node.js 18+ installed on server
- SSH access to server
- Domain pointing to server IP

**Steps:**
1. **Connect to server**
```bash
ssh user@your-server-ip
```

2. **Clone repository**
```bash
git clone https://github.com/YOUR_USERNAME/mydesigner-website.git
cd mydesigner-website
```

3. **Install dependencies**
```bash
npm install
```

4. **Build for production**
```bash
npm run build
```

5. **Install PM2 (process manager)**
```bash
npm install -g pm2
```

6. **Start application**
```bash
pm2 start "npm start" --name "mydesigner"
pm2 save
pm2 startup
```

7. **Set up reverse proxy (Nginx)**
```nginx
server {
    listen 80;
    server_name mydesigner.in www.mydesigner.in;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

8. **Enable SSL with Let's Encrypt**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d mydesigner.in -d www.mydesigner.in
```

## Environment Variables

Create a `.env.local` file in your project root for local development:

```env
# Email service (if using Formspree)
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id

# API endpoints (if needed)
NEXT_PUBLIC_API_URL=https://api.mydesigner.in
```

For production deployment, set these in your hosting platform's environment variables:

**Vercel:**
1. Project Settings → Environment Variables
2. Add variables for Production environment

## Performance Optimization

### Image Optimization
- Use Next.js Image component (already implemented)
- Serve images in modern formats (WebP)
- Implement lazy loading

### Code Splitting
- Next.js automatically code-splits pages
- Framer Motion is dynamically imported

### Caching
- Set browser caching headers:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600, must-revalidate"
        }
      ]
    }
  ]
}
```

## Monitoring & Analytics

### Vercel Analytics
1. Go to Project Settings → Analytics
2. Enable Web Analytics
3. Track Core Web Vitals, traffic patterns, and performance

### Custom Analytics (Optional)

Add Google Analytics:
```tsx
// In app/layout.tsx
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-MEASUREMENT_ID"
/>
<script>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-MEASUREMENT_ID');`}
</script>
```

## Continuous Integration/Deployment (CI/CD)

Vercel automatically handles:
- Automatic deployments on push to main
- Preview deployments for pull requests
- Automatic rollbacks if builds fail

## Troubleshooting

### Build Fails
1. Check build logs in Vercel dashboard
2. Ensure all TypeScript types are correct
3. Verify environment variables are set

### Slow Performance
1. Check Vercel Analytics for bottlenecks
2. Optimize images and assets
3. Review Core Web Vitals

### DNS Not Working
1. Verify DNS changes propagated: `dig mydesigner.in`
2. Wait up to 48 hours for DNS propagation
3. Check Vercel's DNS status in project settings

## Contact Form Setup

To enable email notifications when someone submits the contact form:

### Option 1: Formspree

1. Go to [formspree.io](https://formspree.io)
2. Create a new form
3. Get your form endpoint
4. In `app/contact/page.tsx`, update the form submission:

```tsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

### Option 2: SendGrid (More Professional)

1. Create SendGrid account
2. Set up API key
3. Install SendGrid package: `npm install @sendgrid/mail`
4. Create API route for form submission

## Monitoring the Site

### Regular Checks
- Test responsiveness on mobile devices
- Verify all links are working
- Check load times and Core Web Vitals
- Test contact form functionality

### Uptime Monitoring
- Use Uptime Robot (free tier available)
- Set up alerts for downtime

## Rollback Procedures

**Vercel:**
1. Go to Deployments tab
2. Find the stable version
3. Click three dots → "Promote to Production"

## Security Checklist

- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Set up environment variables securely
- [ ] Keep dependencies updated: `npm audit`
- [ ] Add security headers in `next.config.js`
- [ ] Validate all form inputs
- [ ] Use Content Security Policy (CSP)

## Next Steps

1. Test the deployment thoroughly
2. Set up analytics and monitoring
3. Configure email notifications for contact form
4. Optimize performance based on metrics
5. Plan regular content updates

## Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Open a ticket in your repository

## Checklist Before Going Live

- [ ] All pages tested and working
- [ ] Contact form validated
- [ ] SEO metadata verified
- [ ] Images optimized
- [ ] Mobile responsiveness confirmed
- [ ] Performance metrics checked
- [ ] Security headers configured
- [ ] Domain connected
- [ ] SSL certificate active
- [ ] Analytics set up
- [ ] Backup strategy planned
