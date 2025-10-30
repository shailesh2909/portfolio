# Place your project screenshots here

## Recommended Image Specifications

- **Format**: JPG or WebP for photos, PNG for graphics with transparency
- **Dimensions**: 800x600px or 1200x900px (4:3 aspect ratio)
- **File size**: Optimize to under 200KB per image
- **Naming**: Use descriptive kebab-case names (e.g., `ecommerce-platform.jpg`)

## Example Structure

```
images/
├── project-1.jpg
├── project-2.jpg
├── project-3.jpg
├── project-4.jpg
├── project-5.jpg
└── avatar.jpg (optional)
```

## Tools for Image Optimization

- [TinyPNG](https://tinypng.com/) - Compress PNG/JPG
- [Squoosh](https://squoosh.app/) - Advanced image compression
- [CloudConvert](https://cloudconvert.com/) - Convert to WebP

## Next.js Image Component

When you're ready to add real images, update ProjectCard.tsx to use Next.js Image:

```typescript
import Image from "next/image";

// Replace the placeholder div with:
<Image
  src={project.image}
  alt={project.title}
  width={800}
  height={600}
  className="object-cover"
/>
```
