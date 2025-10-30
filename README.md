# Modern Developer Portfolio

A high-performance, fully responsive software developer portfolio built with Next.js 14+, featuring a "High-Tech Minimalist" aesthetic with smooth animations and dark mode support.

## 🎨 Design System

### Color Palette
- **Deep Space** (`#0A0E27`) - Primary background, establishes depth
- **Dark Slate** (`#1A1F3A`) - Secondary background, cards, elevated surfaces
- **Cyan Accent** (`#00F0FF`) - Primary accent, CTAs, highlights
- **Violet Glow** (`#7B61FF`) - Secondary accent, gradients, hover states
- **Light Periwinkle** (`#E0E7FF`) - Primary text (dark mode)
- **Muted Steel** (`#8B92B0`) - Secondary text, muted content
- **Pure White** (`#FFFFFF`) - Headers, emphasis text

### Typography
- **Headers**: Space Grotesk - Technical, geometric, modern
- **Body**: Inter - Clean, highly readable, professional

### Design Philosophy
**High-Tech Minimalist** aesthetic featuring:
- Clean geometric lines and generous negative space
- Subtle neon accents and glows
- Smooth, purposeful animations
- Glass morphism effects on cards
- Scroll-triggered reveals for progressive disclosure

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Space Grotesk, Inter)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Hero.tsx            # Hero section with animated introduction
│   ├── About.tsx           # About me section
│   ├── Skills.tsx          # Skills & tech stack display
│   ├── Projects.tsx        # Projects showcase grid
│   ├── ProjectCard.tsx     # Individual project card component
│   ├── Contact.tsx         # Contact/footer section
│   ├── Header.tsx          # Sticky animated header
│   └── AnimatedSection.tsx # Reusable scroll-reveal wrapper
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   └── images/             # Project images and assets
└── package.json
```

## ✨ Features

### Animations
- **Scroll-Triggered Reveals**: Sections fade and slide into view as you scroll
- **Interactive Header**: Morphs on scroll with backdrop blur
- **Project Card Hover**: 3D tilt effect with gradient glow
- **Smooth Transitions**: Framer Motion throughout

### Accessibility
- WCAG AA compliant
- Semantic HTML structure
- Keyboard navigation support
- Reduced motion support for accessibility preferences

### Performance
- Server Components for optimal performance
- Optimized images with Next.js Image
- Font optimization with next/font
- Minimal JavaScript bundle

## 🎯 Customization

### Update Personal Information
Edit the content in each component file:
- `components/Hero.tsx` - Name, title, tagline
- `components/About.tsx` - Bio and description
- `components/Skills.tsx` - Your tech stack
- `components/Projects.tsx` - Your projects data

### Modify Color Palette
Update `tailwind.config.ts` to change colors:
```typescript
colors: {
  background: '#0A0E27',
  foreground: '#E0E7FF',
  accent: {
    cyan: '#00F0FF',
    violet: '#7B61FF',
  },
  // ... etc
}
```

## 📚 Documentation

**→ [DOCS_INDEX.md](./DOCS_INDEX.md) - Complete documentation index and navigation guide**

Comprehensive guides to help you get started:

- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Quick reference card for common tasks ⚡
- **[PROJECT_COMPLETE.md](./PROJECT_COMPLETE.md)** - Complete project summary
- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Detailed installation and customization guide
- **[CUSTOMIZATION_CHECKLIST.md](./CUSTOMIZATION_CHECKLIST.md)** - Step-by-step personalization checklist
- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Complete design specifications and color codes
- **[VISUAL_PREVIEW.md](./VISUAL_PREVIEW.md)** - Visual walkthrough of the portfolio
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Component structure and architecture
- **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)** - Common issues and solutions

## 🎯 Quick Commands

```bash
# Install dependencies (first time only)
npm install

# Run development server (starts at http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## ✨ Key Features at a Glance

- ✅ **Smooth Animations** - Framer Motion throughout
- ✅ **3D Project Cards** - Interactive tilt effect
- ✅ **Scroll Reveals** - Progressive content disclosure
- ✅ **Glass Morphism** - Modern frosted glass UI
- ✅ **Dark Mode** - Optimized for dark theme
- ✅ **Fully Responsive** - Mobile, tablet, desktop
- ✅ **Accessible** - WCAG AA compliant
- ✅ **SEO Optimized** - Next.js metadata API
- ✅ **TypeScript** - Fully typed
- ✅ **Production Ready** - Deploy to Vercel instantly

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**: Navigate to `http://localhost:3000`

4. **Customize**: Follow the [CUSTOMIZATION_CHECKLIST.md](./CUSTOMIZATION_CHECKLIST.md)

5. **Deploy**: Push to GitHub and deploy on Vercel

## �📝 License

MIT License - Feel free to use this template for your own portfolio!

## 🤝 Credits

Built with modern web technologies and a focus on performance, accessibility, and aesthetics.

---

**Need help?** Check out the comprehensive documentation files listed above, or refer to the [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) for common tasks.
