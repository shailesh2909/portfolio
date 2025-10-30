# Portfolio Customization Checklist

Use this checklist to ensure you've personalized all aspects of your portfolio.

## ✅ Essential Customizations

### Personal Information

- [ ] **Name** - Update in multiple locations:
  - [ ] `components/Hero.tsx` (line 69)
  - [ ] `components/Header.tsx` (line 47)
  - [ ] `components/Contact.tsx` (line 85)
  - [ ] `app/layout.tsx` (line 19, 22)

- [ ] **Email Address**
  - [ ] `components/Hero.tsx` (line 119)
  - [ ] `components/Contact.tsx` (lines 24, 57)

- [ ] **Social Media Links**
  - [ ] GitHub URL in `components/Hero.tsx` (line 117)
  - [ ] LinkedIn URL in `components/Hero.tsx` (line 118)
  - [ ] GitHub URL in `components/Contact.tsx` (line 13)
  - [ ] LinkedIn URL in `components/Contact.tsx` (line 18)

### Content

- [ ] **Hero Section**
  - [ ] Tagline/headline (line 78)
  - [ ] Description paragraph (lines 88-91)
  - [ ] Avatar/initials (line 51)

- [ ] **About Me**
  - [ ] First paragraph - your background (lines 40-46)
  - [ ] Second paragraph - your expertise (lines 47-52)
  - [ ] Third paragraph - personal interests (lines 53-57)
  - [ ] Highlight cards (optional, lines 8-22)

- [ ] **Skills & Technologies**
  - [ ] Frontend technologies (lines 9-16)
  - [ ] Backend technologies (lines 19-27)
  - [ ] Tools & Others (lines 30-38)
  - [ ] Statistics (lines 95-104)
    - [ ] Years of experience
    - [ ] Number of projects
    - [ ] Technologies count

- [ ] **Projects** (minimum 3-5 projects)
  - [ ] Project 1: Title, description, technologies, URLs
  - [ ] Project 2: Title, description, technologies, URLs
  - [ ] Project 3: Title, description, technologies, URLs
  - [ ] Project 4: Title, description, technologies, URLs
  - [ ] Project 5: Title, description, technologies, URLs

### SEO & Metadata

- [ ] **Page Title** (`app/layout.tsx` line 19)
- [ ] **Meta Description** (`app/layout.tsx` line 20)
- [ ] **Keywords** (`app/layout.tsx` line 21)
- [ ] **Author Name** (`app/layout.tsx` line 22)
- [ ] **Open Graph Data** (`app/layout.tsx` lines 23-27)

## 🎨 Optional Customizations

### Design

- [ ] **Colors** (if you want different colors)
  - [ ] Background colors in `tailwind.config.ts`
  - [ ] Accent colors (cyan/violet)
  - [ ] Text colors

- [ ] **Fonts** (if you want different fonts)
  - [ ] Display font (currently Space Grotesk)
  - [ ] Body font (currently Inter)
  - [ ] Update imports in `app/layout.tsx`

- [ ] **Logo/Branding**
  - [ ] Header logo text (`components/Header.tsx` line 47)
  - [ ] Favicon (add to `public/`)

### Content Enhancements

- [ ] **Resume PDF**
  - [ ] Add `resume.pdf` to `public/` directory
  - [ ] Or update download link in `components/Hero.tsx` (line 110)

- [ ] **Project Images**
  - [ ] Add real project screenshots to `public/images/`
  - [ ] Update image paths in `components/Projects.tsx`
  - [ ] Implement Next.js Image component in `ProjectCard.tsx`

- [ ] **Avatar/Photo**
  - [ ] Replace placeholder in `components/Hero.tsx` (lines 47-53)
  - [ ] Add your photo to `public/images/avatar.jpg`

- [ ] **Additional Sections** (if desired)
  - [ ] Testimonials
  - [ ] Blog/Articles
  - [ ] Certifications
  - [ ] Experience timeline

### Technical

- [ ] **Analytics** (optional)
  - [ ] Add Google Analytics
  - [ ] Or Vercel Analytics
  - [ ] Or other analytics service

- [ ] **Forms** (optional)
  - [ ] Replace contact section with a working form
  - [ ] Use FormSpree, Web3Forms, or build custom API

- [ ] **Additional Features**
  - [ ] Light/dark mode toggle
  - [ ] Language switcher (i18n)
  - [ ] Blog section
  - [ ] Case studies for projects

## 🚀 Pre-Launch Checklist

### Testing

- [ ] **Test all navigation links**
- [ ] **Test on mobile devices** (responsive design)
- [ ] **Test on different browsers** (Chrome, Firefox, Safari, Edge)
- [ ] **Test all external links** (GitHub, LinkedIn, live demos)
- [ ] **Check for spelling/grammar errors**
- [ ] **Verify all images load correctly**

### Performance

- [ ] **Run Lighthouse audit** (aim for 90+ in all categories)
- [ ] **Optimize images** (compress, convert to WebP)
- [ ] **Test loading speed** (should be under 3 seconds)
- [ ] **Check Core Web Vitals**

### SEO

- [ ] **Verify meta tags are correct**
- [ ] **Add robots.txt** (if needed)
- [ ] **Add sitemap.xml** (Next.js can generate this)
- [ ] **Test Open Graph preview** (LinkedIn, Twitter cards)

### Accessibility

- [ ] **Test keyboard navigation** (Tab through the site)
- [ ] **Verify color contrast** (WCAG AA compliant)
- [ ] **Test with screen reader** (if possible)
- [ ] **Check all images have alt text**

### Legal & Professional

- [ ] **Add copyright year** (already in footer)
- [ ] **Privacy Policy** (if collecting data)
- [ ] **Terms of Service** (if applicable)
- [ ] **License** (for open source)

## 📦 Deployment Checklist

- [ ] **Environment Variables** (if any)
  - [ ] Set up in hosting platform
  - [ ] Create `.env.local` for local development

- [ ] **Domain Setup**
  - [ ] Purchase domain (optional)
  - [ ] Configure DNS settings
  - [ ] Set up custom domain in Vercel/hosting

- [ ] **Final Build Test**
  - [ ] Run `npm run build` locally
  - [ ] Test production build (`npm start`)
  - [ ] Fix any build errors

- [ ] **Deploy**
  - [ ] Push to GitHub
  - [ ] Deploy to Vercel/Netlify/other
  - [ ] Verify live site works correctly

- [ ] **Post-Deployment**
  - [ ] Submit to Google Search Console
  - [ ] Share on social media
  - [ ] Add to LinkedIn profile
  - [ ] Update resume with portfolio link

## 📝 Notes

**Priority Items** (Must do before going live):
1. Update name and contact information
2. Add at least 3 real projects
3. Write custom About Me content
4. Update skills to match your actual tech stack
5. Test on mobile devices

**Nice-to-Have** (Can be added later):
- Professional photos/screenshots
- Resume PDF download
- Analytics integration
- Additional sections (blog, testimonials)

---

**Pro Tip**: Work through this checklist section by section. Don't try to do everything at once. Start with Essential Customizations, then move to Optional items based on your needs.

**Remember**: A live, imperfect portfolio is better than a perfect portfolio that never launches! Start with the essentials and iterate over time.
