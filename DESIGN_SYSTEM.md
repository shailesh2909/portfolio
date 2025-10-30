# Design System Documentation

## 🎨 Color Palette - High-Tech Minimalist

### Primary Colors

| Color Name | HEX Code | RGB | Usage |
|------------|----------|-----|-------|
| **Deep Space** | `#0A0E27` | rgb(10, 14, 39) | Primary background, establishes depth |
| **Dark Slate** | `#1A1F3A` | rgb(26, 31, 58) | Secondary background, cards, elevated surfaces |
| **Cyan Accent** | `#00F0FF` | rgb(0, 240, 255) | Primary accent, CTAs, highlights, links |
| **Violet Glow** | `#7B61FF` | rgb(123, 97, 255) | Secondary accent, gradients, hover states |
| **Light Periwinkle** | `#E0E7FF` | rgb(224, 231, 255) | Primary text (dark mode) |
| **Muted Steel** | `#8B92B0` | rgb(139, 146, 176) | Secondary text, muted content |
| **Pure White** | `#FFFFFF` | rgb(255, 255, 255) | Headers, emphasis text |

### Color Usage Guidelines

**Backgrounds:**
- Main page background: Deep Space (`#0A0E27`)
- Cards and containers: Dark Slate (`#1A1F3A`)
- Overlays: Dark Slate with opacity

**Text:**
- Headers: Pure White (`#FFFFFF`) or gradient
- Body text: Light Periwinkle (`#E0E7FF`)
- Secondary/muted text: Muted Steel (`#8B92B0`)

**Accents & Interactions:**
- Primary buttons: Cyan Accent (`#00F0FF`)
- Links: Cyan Accent (`#00F0FF`)
- Hover states: Violet Glow (`#7B61FF`)
- Gradients: Cyan → Violet

**Borders:**
- Subtle borders: Cyan with 10% opacity
- Hover borders: Cyan with 30% opacity

### Gradients

```css
/* Text gradient (used in headings) */
background: linear-gradient(to right, #00F0FF, #7B61FF);

/* Glow effect */
box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);

/* Background gradient accent */
background: radial-gradient(circle, rgba(0, 240, 255, 0.05), transparent);
```

## 📝 Typography

### Font Families

**Display Font: Space Grotesk**
- Weight: 600-700 (Semibold to Bold)
- Use for: Headings (h1-h3), logo, important text
- Characteristics: Technical, geometric, modern
- Import: Google Fonts

**Body Font: Inter**
- Weight: 400-500 (Regular to Medium)
- Use for: Body text, descriptions, UI elements
- Characteristics: Clean, highly readable, professional
- Import: Google Fonts

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Font |
|---------|---------------|---------------|--------|------|
| Hero H1 | 6rem (96px) | 3rem (48px) | 700 | Space Grotesk |
| Hero H2 | 3.75rem (60px) | 2rem (32px) | 600 | Space Grotesk |
| Section H2 | 3rem (48px) | 2.5rem (40px) | 700 | Space Grotesk |
| Card Title | 1.5rem (24px) | 1.25rem (20px) | 600 | Space Grotesk |
| Body Large | 1.25rem (20px) | 1.125rem (18px) | 400 | Inter |
| Body | 1rem (16px) | 1rem (16px) | 400 | Inter |
| Small | 0.875rem (14px) | 0.875rem (14px) | 400 | Inter |

### Line Heights

- Headings: 1.2
- Body text: 1.6-1.7
- UI elements: 1.5

## 🎯 Visual Style - High-Tech Minimalist

### Core Principles

1. **Generous Negative Space**
   - Ample padding and margins
   - Never cramped or cluttered
   - Breathing room between sections

2. **Clean Geometric Lines**
   - Sharp corners or subtle rounding (0.75rem max)
   - Precise alignment
   - Grid-based layout

3. **Subtle Neon Accents**
   - Glow effects on interactive elements
   - Grid background patterns
   - Animated gradients

4. **Glass Morphism**
   - Frosted glass effect on cards
   - Backdrop blur with subtle transparency
   - Layered depth

### Component Styles

**Cards:**
```css
background: rgba(26, 31, 58, 0.5);
backdrop-filter: blur(12px);
border: 1px solid rgba(0, 240, 255, 0.1);
border-radius: 0.75rem;
```

**Buttons (Primary):**
```css
background: #00F0FF;
color: #0A0E27;
padding: 0.75rem 2rem;
border-radius: 0.5rem;
transition: all 0.3s ease;

/* Hover */
background: rgba(0, 240, 255, 0.9);
transform: translateY(-2px);
box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
```

**Buttons (Outline):**
```css
background: transparent;
color: #00F0FF;
border: 1px solid #00F0FF;
padding: 0.75rem 2rem;
border-radius: 0.5rem;

/* Hover */
background: rgba(0, 240, 255, 0.1);
```

## ✨ Animation Specifications

### Timing Functions

- **Ease Out Expo**: `cubic-bezier(0.22, 1, 0.36, 1)` - Main animations
- **Ease In Out**: `ease-in-out` - Subtle transitions
- **Spring**: Framer Motion spring for interactive elements

### Durations

- Fast: 200ms - Hover states, button clicks
- Medium: 400-600ms - Page transitions, reveals
- Slow: 1000ms+ - Background animations, ambient effects

### Scroll Reveal Pattern

```javascript
{
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1]
  }
}
```

### Hover Effects

**3D Tilt (Project Cards):**
- Rotate: ±7.5 degrees max
- Transform style: preserve-3d
- Spring animation for smoothness

**Button Hover:**
- Scale: 1.05
- Lift: translateY(-2px)
- Glow: box-shadow with accent color

**Icon Hover:**
- Scale: 1.1
- Rotate: 5 degrees
- Duration: 200ms

## 📐 Spacing System

Using Tailwind's default spacing scale (4px base):

- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 4rem (64px)
- 3xl: 6rem (96px)

### Component Spacing

- Section padding: 6rem (96px) vertical
- Container max-width: 1280px (6xl)
- Card padding: 1.5-2rem (24-32px)
- Gap between cards: 2rem (32px)

## 🎪 Special Effects

### Grid Background

```css
background-image:
  linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px);
background-size: 50px 50px;
```

### Glow Effects

**Cyan Glow:**
```css
box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
```

**Violet Glow:**
```css
box-shadow: 0 0 20px rgba(123, 97, 255, 0.3);
```

### Glass Morphism

```css
background: rgba(26, 31, 58, 0.5);
backdrop-filter: blur(12px);
border: 1px solid rgba(0, 240, 255, 0.1);
```

## 📱 Responsive Breakpoints

Using Tailwind defaults:

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

### Mobile-First Approach

Design decisions for mobile:
- Single column layouts
- Larger touch targets (min 44px)
- Reduced animations (respect prefers-reduced-motion)
- Simplified navigation (hamburger menu)

## ♿ Accessibility Standards

### Color Contrast (WCAG AA)

- Text on Deep Space: AAA compliant
- Cyan on Dark Slate: AA compliant
- All text meets minimum 4.5:1 ratio

### Interactive Elements

- Minimum touch target: 44x44px
- Focus indicators: 2px solid accent color
- Keyboard navigation: Full support
- Screen reader: Semantic HTML + ARIA labels

## 🎬 Animation Principles

1. **Purpose-Driven**: Every animation serves UX purpose
2. **Subtle & Smooth**: Never distracting or jarring
3. **Performance**: GPU-accelerated transforms
4. **Respect Preferences**: Honor prefers-reduced-motion
5. **Progressive Enhancement**: Works without JavaScript

---

## Implementation Notes

All colors, fonts, and styles are configured in:
- `tailwind.config.ts` - Colors, fonts, extensions
- `app/globals.css` - Custom utilities, global styles
- Component files - Component-specific styling

To modify the design system, update these files and the changes will propagate throughout the application.
