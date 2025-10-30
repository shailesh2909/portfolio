# Component Architecture

## 🏗️ Component Hierarchy

```
app/page.tsx (Main Page)
│
├── Header (Sticky Navigation)
│   ├── Logo/Name
│   ├── Navigation Links
│   └── Mobile Menu Toggle
│
├── Hero Section
│   ├── Animated Avatar
│   ├── Name & Tagline
│   ├── Description
│   ├── CTA Buttons
│   │   ├── "View Projects" Button
│   │   └── "Download Resume" Button
│   ├── Social Links
│   │   ├── GitHub Link
│   │   ├── LinkedIn Link
│   │   └── Email Link
│   └── Scroll Indicator
│
├── About Section
│   ├── Section Header
│   ├── Bio Column
│   │   └── 3 Paragraphs
│   └── Highlights Column
│       ├── Clean Code Card
│       ├── Modern Tech Card
│       └── Performance Card
│
├── Skills Section
│   ├── Section Header
│   ├── Skills Grid
│   │   ├── Frontend Category
│   │   │   └── 8 Technology Badges
│   │   ├── Backend Category
│   │   │   └── 7 Technology Badges
│   │   └── Tools Category
│   │       └── 8 Technology Badges
│   └── Statistics Grid
│       ├── Years Experience
│       ├── Projects Completed
│       ├── Technologies
│       └── Coffee Consumed
│
├── Projects Section
│   ├── Section Header
│   └── Projects Grid
│       ├── Project Card 1 (Featured)
│       ├── Project Card 2 (Featured)
│       ├── Project Card 3
│       ├── Project Card 4
│       └── Project Card 5
│
└── Contact Section
    ├── Section Header
    ├── Contact CTA Card
    │   ├── Message
    │   ├── "Say Hello" Button
    │   └── Social Links Grid
    └── Footer
        ├── Copyright
        └── Attribution
```

## 📦 Component Breakdown

### Header Component
**File**: `components/Header.tsx`
**Type**: Client Component (interactive)
**Features**:
- Sticky positioning
- Backdrop blur on scroll
- Mobile hamburger menu
- Smooth scroll to sections

### Hero Component
**File**: `components/Hero.tsx`
**Type**: Client Component (animations)
**Features**:
- Stagger animation sequence
- Gradient avatar placeholder
- Animated CTA buttons
- Social media links
- Animated scroll indicator

### About Component
**File**: `components/About.tsx`
**Type**: Client Component (scroll reveal)
**Features**:
- Two-column responsive layout
- Icon-based highlight cards
- Scroll-triggered animation

### Skills Component
**File**: `components/Skills.tsx`
**Type**: Client Component (animations)
**Features**:
- Three skill categories
- Animated badges on reveal
- Statistics display
- Hover effects on badges

### Projects Component
**File**: `components/Projects.tsx`
**Type**: Client Component (grid layout)
**Features**:
- Responsive grid (2 cols on desktop)
- Project data array
- Renders ProjectCard components

### ProjectCard Component
**File**: `components/ProjectCard.tsx`
**Type**: Client Component (3D effects)
**Features**:
- 3D tilt on mouse move
- Gradient glow on hover
- Technology badges
- Live demo & GitHub buttons
- Featured badge (conditional)

### Contact Component
**File**: `components/Contact.tsx`
**Type**: Client Component (animations)
**Features**:
- Contact CTA
- Social links with animations
- Footer with copyright
- Heart animation

### AnimatedSection Component
**File**: `components/AnimatedSection.tsx`
**Type**: Reusable wrapper component
**Features**:
- Scroll-triggered reveal
- Configurable delay
- Fade + slide animation
- IntersectionObserver based

## 🎨 UI Components (shadcn/ui)

### Button Component
**File**: `components/ui/button.tsx`
**Variants**:
- `default` - Cyan background
- `outline` - Cyan border, transparent
- `secondary` - Violet background
- `ghost` - Transparent, hover effect
- `link` - Underlined link style

**Sizes**: `sm`, `default`, `lg`, `icon`

### Card Components
**File**: `components/ui/card.tsx`
**Components**:
- `Card` - Container with glass effect
- `CardHeader` - Top section with padding
- `CardTitle` - Heading with gradient
- `CardDescription` - Subtitle/description
- `CardContent` - Main content area
- `CardFooter` - Bottom actions area

### Badge Component
**File**: `components/ui/badge.tsx`
**Variants**:
- `default` - Cyan badge
- `secondary` - Violet badge
- `outline` - Muted outline badge

## 🔄 Data Flow

```
Projects.tsx
    │
    ├── projects[] array (data)
    │
    └── maps over array
        │
        └── renders <ProjectCard project={...} />
            │
            └── displays project data
```

## 🎯 Prop Interfaces

### ProjectCard Props
```typescript
interface ProjectCardProps {
  project: Project;
  index: number;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}
```

### AnimatedSection Props
```typescript
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}
```

## 📱 Layout Structure

```
app/layout.tsx
│
├── <html> with dark class
│
└── <body> with font variables
    │
    └── {children} (page content)
```

```
app/page.tsx
│
└── <main>
    │
    ├── Background gradient elements (fixed)
    │
    ├── <Header /> (fixed, z-50)
    │
    └── Content wrapper (relative, z-10)
        ├── <Hero />
        ├── <About />
        ├── <Skills />
        ├── <Projects />
        └── <Contact />
```

## 🎨 Styling Approach

**Component-Level Styles**:
- Tailwind utility classes
- Inline in className prop
- Responsive prefixes (md:, lg:)

**Global Styles** (`app/globals.css`):
- Custom utilities (.text-gradient, .glass, .glow-cyan)
- Scrollbar styling
- Base element resets

**Theme Configuration** (`tailwind.config.ts`):
- Color palette
- Font families
- Custom animations
- Extended utilities

## ⚡ Performance Optimizations

**Server Components** (where possible):
- Layout component (metadata)
- Static content sections

**Client Components** (when needed):
- Interactive elements
- Animations with Framer Motion
- Scroll detection
- Mouse tracking

**Code Splitting**:
- Automatic by Next.js
- Each component is its own chunk
- Lazy loading of non-critical components

## 🔌 External Dependencies

```
Framer Motion → Animations
    ├── Hero animations
    ├── Scroll reveals
    ├── 3D tilt effect
    └── Hover states

Lucide React → Icons
    ├── Social icons
    ├── Feature icons
    └── Button icons

Tailwind CSS → Styling
    ├── Utility classes
    ├── Responsive design
    └── Custom theme

Next.js → Framework
    ├── App Router
    ├── Font optimization
    ├── Image optimization
    └── SEO features
```

## 🗂️ File Relationships

```
page.tsx
    ↓ imports
Header.tsx, Hero.tsx, About.tsx, etc.
    ↓ imports
AnimatedSection.tsx (wrapper)
    ↓ imports
framer-motion
    ↓ imports
Button.tsx, Card.tsx, Badge.tsx
    ↓ imports
utils.ts (cn function)
    ↓ imports
tailwind-merge, clsx
```

---

This architecture provides:
✅ Clear separation of concerns
✅ Reusable components
✅ Easy to maintain
✅ Scalable structure
✅ Type-safe with TypeScript
