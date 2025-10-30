# 🎯 Quick Reference Card

## Color Codes (Copy-Paste Ready)

```css
/* Primary Background */
#0A0E27

/* Card Background */
#1A1F3A

/* Cyan Accent (Primary) */
#00F0FF

/* Violet Accent (Secondary) */
#7B61FF

/* Text Primary */
#E0E7FF

/* Text Muted */
#8B92B0

/* White */
#FFFFFF
```

## Files to Customize (Priority Order)

1. `components/Hero.tsx` - Your name, tagline, links
2. `components/Projects.tsx` - Your projects (lines 16-64)
3. `components/About.tsx` - Your bio (lines 40-58)
4. `components/Skills.tsx` - Your tech stack (lines 7-38)
5. `components/Contact.tsx` - Email & social links
6. `app/layout.tsx` - SEO metadata (lines 18-27)

## Common Tasks

### Update Your Name
Find & replace `"Your Name"` across:
- `components/Hero.tsx`
- `components/Contact.tsx`
- `app/layout.tsx`

### Change Primary Color
Edit `tailwind.config.ts` line 17:
```typescript
cyan: "#00F0FF", // Change this hex code
```

### Add a Project
Add to array in `components/Projects.tsx`:
```typescript
{
  title: "Project Name",
  description: "What it does...",
  technologies: ["React", "Node.js"],
  image: "/images/project.jpg",
  liveUrl: "https://demo.com",
  githubUrl: "https://github.com/you/repo",
}
```

### Change Font
Edit `app/layout.tsx`:
```typescript
import { YourFont } from "next/font/google";
```

## Terminal Commands

```powershell
# Install
npm install

# Run
npm run dev

# Build
npm run build

# Deploy (push to GitHub, then)
# Connect GitHub repo to Vercel
```

## File Locations

| Item | Location |
|------|----------|
| Name | `components/Hero.tsx:69` |
| Email | `components/Hero.tsx:119` |
| GitHub | `components/Hero.tsx:117` |
| LinkedIn | `components/Hero.tsx:118` |
| Bio | `components/About.tsx:40-58` |
| Skills | `components/Skills.tsx:7-38` |
| Projects | `components/Projects.tsx:16-64` |
| SEO | `app/layout.tsx:18-27` |
| Colors | `tailwind.config.ts:9-38` |

## Animation Speeds

Fast: `200ms` - Buttons, hovers
Medium: `600ms` - Section reveals
Slow: `1000ms+` - Background effects

Change in `components/AnimatedSection.tsx:36`

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768-1024px
- Desktop: > 1024px

Use: `md:`, `lg:`, `xl:` prefixes in className

## Important URLs to Update

Search for and replace:
- `https://github.com/yourusername`
- `https://linkedin.com/in/yourusername`
- `your.email@example.com`
- `yourusername` (everywhere)

## Add Images

1. Save to: `public/images/project-1.jpg`
2. Reference as: `/images/project-1.jpg`
3. Optimize: < 200KB each

## Deploy Checklist

- [ ] `npm run build` succeeds
- [ ] All links work
- [ ] Mobile tested
- [ ] Content updated
- [ ] Push to GitHub
- [ ] Deploy to Vercel

## Get Help

1. Error? → `SETUP_GUIDE.md`
2. Customize? → `CUSTOMIZATION_CHECKLIST.md`
3. Design? → `DESIGN_SYSTEM.md`
4. Overview? → `PROJECT_COMPLETE.md`

---

**Quick Start**: `npm install` → `npm run dev` → http://localhost:3000
