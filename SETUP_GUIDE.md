# Portfolio Setup Guide

## 🚀 Quick Start

Follow these steps to get your portfolio up and running:

### 1. Install Dependencies

Open PowerShell in the project directory and run:

```powershell
npm install
```

### 2. Start Development Server

```powershell
npm run dev
```

Your portfolio will be available at `http://localhost:3000`

### 3. Build for Production

```powershell
npm run build
npm start
```

## 🎨 Customization Guide

### Update Personal Information

#### 1. **Hero Section** (`components/Hero.tsx`)
Replace the following placeholders:
- Line 56: `"Your Name"` → Your actual name
- Line 61: `"I build exceptional digital experiences"` → Your tagline
- Line 68-70: Update the description
- Lines 117-119: Update social media links
  - GitHub: `https://github.com/yourusername`
  - LinkedIn: `https://linkedin.com/in/yourusername`
  - Email: `your.email@example.com`

#### 2. **Header** (`components/Header.tsx`)
- Line 47: `{"<YourName />"}` → Your preferred logo/name

#### 3. **About Section** (`components/About.tsx`)
- Lines 40-58: Replace with your personal bio and story
- Update the highlights if needed (lines 8-22)

#### 4. **Skills Section** (`components/Skills.tsx`)
- Lines 7-38: Update the technologies you know
- Lines 95-104: Update statistics (years of experience, projects, etc.)

#### 5. **Projects Section** (`components/Projects.tsx`)
Update the projects array (lines 16-64) with your actual projects:

```typescript
{
  title: "Your Project Title",
  description: "Project description...",
  technologies: ["Tech1", "Tech2", "Tech3"],
  image: "/images/your-project.jpg",
  liveUrl: "https://your-live-demo.com",
  githubUrl: "https://github.com/you/project",
  featured: true, // Optional: marks as featured
}
```

#### 6. **Contact Section** (`components/Contact.tsx`)
- Lines 11-24: Update social links
- Line 44: Update email address
- Line 57: Update email in button
- Line 85: Update your name in footer

#### 7. **Layout & Metadata** (`app/layout.tsx`)
- Line 19: Update page title
- Line 20: Update description
- Line 21: Update keywords
- Line 22: Update author name

### Add Project Images

1. Create images in the `public/images/` directory
2. Name them descriptively (e.g., `ecommerce-platform.jpg`)
3. Update the `image` property in your projects array
4. Recommended size: 800x600px or similar aspect ratio

### Change Color Scheme

Edit `tailwind.config.ts` (lines 9-38) to customize colors:

```typescript
colors: {
  background: {
    DEFAULT: "#0A0E27",  // Your primary background
    secondary: "#1A1F3A", // Your secondary background
  },
  accent: {
    cyan: "#00F0FF",     // Your primary accent
    violet: "#7B61FF",   // Your secondary accent
  },
  // ... etc
}
```

### Update Fonts

Edit `app/layout.tsx` to change fonts:

```typescript
import { YourFont1, YourFont2 } from "next/font/google";

const bodyFont = YourFont1({
  subsets: ["latin"],
  variable: "--font-inter",
});

const displayFont = YourFont2({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
```

## 📁 Project Structure Explained

```
portfolio/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout with fonts & metadata
│   ├── page.tsx           # Main homepage
│   └── globals.css        # Global styles & Tailwind
│
├── components/            # React components
│   ├── ui/               # shadcn/ui components (reusable)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   │
│   ├── AnimatedSection.tsx  # Scroll-reveal wrapper
│   ├── Header.tsx           # Sticky navigation
│   ├── Hero.tsx             # Hero/landing section
│   ├── About.tsx            # About me section
│   ├── Skills.tsx           # Skills & technologies
│   ├── Projects.tsx         # Projects grid
│   ├── ProjectCard.tsx      # Individual project card
│   └── Contact.tsx          # Contact & footer
│
├── lib/                   # Utility functions
│   └── utils.ts           # cn() helper for Tailwind
│
├── public/               # Static assets
│   └── images/          # Project screenshots
│
└── Configuration files
    ├── tailwind.config.ts    # Tailwind & color configuration
    ├── tsconfig.json         # TypeScript configuration
    └── next.config.mjs       # Next.js configuration
```

## 🎯 Key Features Implemented

### Animations (Framer Motion)
- **Scroll-triggered reveals**: Components fade in as you scroll
- **3D tilt effect**: Project cards tilt on mouse hover
- **Smooth transitions**: Page elements animate smoothly
- **Interactive elements**: Buttons and links have hover animations

### Design System
- **Color Palette**: High-tech minimalist with cyan and violet accents
- **Typography**: Space Grotesk (display) + Inter (body)
- **Dark Mode**: Optimized for dark theme
- **Glass Morphism**: Subtle blur effects on cards

### Performance
- **Server Components**: Used where possible for better performance
- **Font Optimization**: next/font for zero-layout-shift fonts
- **Image Optimization**: Ready for Next.js Image component

### Accessibility
- **Semantic HTML**: Proper heading hierarchy
- **ARIA labels**: On interactive elements
- **Keyboard navigation**: Full keyboard support
- **Reduced motion**: Respects user preferences

## 🔧 Common Tasks

### Add a New Component

1. Create file in `components/` directory
2. Use "use client" if it needs interactivity
3. Import into `app/page.tsx`
4. Wrap with `<AnimatedSection>` for scroll reveals

### Change Animation Speed

In `components/AnimatedSection.tsx`, adjust the `duration` value:
```typescript
transition: {
  duration: 0.6, // Change this (in seconds)
}
```

### Add More Sections

1. Create new component in `components/`
2. Import and add to `app/page.tsx`
3. Add navigation link in `components/Header.tsx`

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Deploy to Other Platforms

Build the project:
```powershell
npm run build
```

The optimized production build will be in `.next/` directory.

## 🐛 Troubleshooting

### TypeScript Errors
These are expected until you run `npm install`. They will disappear after installing dependencies.

### Port Already in Use
```powershell
# Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- -p 3001
```

### Build Errors
Make sure all placeholder content is properly formatted and all imports are correct.

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)

## 💡 Tips

1. **Test on mobile**: Use browser DevTools to test responsive design
2. **Optimize images**: Use WebP format and compress before uploading
3. **Add analytics**: Consider Google Analytics or Vercel Analytics
4. **SEO**: Update metadata in `app/layout.tsx` for better SEO
5. **Performance**: Run Lighthouse audit in Chrome DevTools

---

**Need help?** Check the component files for inline comments and examples.

**Ready to customize?** Start with the Hero section and work your way down!
