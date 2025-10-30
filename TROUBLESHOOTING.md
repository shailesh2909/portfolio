# 🔧 Troubleshooting Guide

## Common Issues & Solutions

### Installation Issues

#### ❌ Problem: `npm install` fails
**Error**: `ENOENT: no such file or directory`

**Solution**:
```powershell
# Make sure you're in the correct directory
cd d:\IMPORTANT\Project\portfolio

# Verify package.json exists
dir package.json

# Try clearing npm cache
npm cache clean --force

# Install again
npm install
```

---

#### ❌ Problem: TypeScript errors everywhere
**Error**: `Cannot find module 'react'` or similar

**Solution**:
This is **NORMAL** before installing dependencies! 

```powershell
# Just run install
npm install

# Errors will disappear automatically
```

---

### Development Server Issues

#### ❌ Problem: Port 3000 already in use
**Error**: `Port 3000 is already in use`

**Solution 1** - Kill the process:
```powershell
# Find process on port 3000
netstat -ano | findstr :3000

# Kill it (replace <PID> with the number from above)
taskkill /PID <PID> /F
```

**Solution 2** - Use different port:
```powershell
npm run dev -- -p 3001
```

---

#### ❌ Problem: Changes not showing
**Error**: Updates not reflecting in browser

**Solutions**:
1. **Hard refresh**: Ctrl + Shift + R (Chrome/Edge)
2. **Clear cache**: 
   - Open DevTools (F12)
   - Right-click refresh button
   - Select "Empty Cache and Hard Reload"
3. **Restart dev server**:
   ```powershell
   # Stop: Ctrl + C
   # Start again: npm run dev
   ```

---

### Build Issues

#### ❌ Problem: Build fails
**Error**: Various build-time errors

**Common causes & fixes**:

1. **Missing semicolons or syntax errors**
   - Check the file mentioned in error
   - Look for red underlines in VS Code
   
2. **Unused imports**
   ```typescript
   // Remove unused imports
   // import { Something } from 'somewhere' // Not used
   ```

3. **Type errors**
   ```typescript
   // Fix by adding proper types
   const name: string = "Your Name"
   ```

---

#### ❌ Problem: `Image` component errors
**Error**: `Image with src "/images/..." is missing required...`

**Solution**:
```typescript
// Option 1: Add width/height
<Image src="/images/pic.jpg" alt="..." width={800} height={600} />

// Option 2: Use fill with container
<div className="relative w-full h-64">
  <Image src="/images/pic.jpg" alt="..." fill className="object-cover" />
</div>

// Option 3: Don't use Next Image yet (placeholder approach)
<div className="bg-gradient-to-br from-cyan to-violet">
  {/* Placeholder */}
</div>
```

---

### Styling Issues

#### ❌ Problem: Tailwind classes not working
**Error**: Classes like `bg-accent-cyan` have no effect

**Solutions**:

1. **Check tailwind.config.ts**:
   ```typescript
   // Make sure custom colors are defined
   extend: {
     colors: {
       accent: {
         cyan: "#00F0FF",
       }
     }
   }
   ```

2. **Restart dev server**:
   ```powershell
   # Tailwind config changes require restart
   # Ctrl + C, then npm run dev
   ```

3. **Verify imports in globals.css**:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

---

#### ❌ Problem: Fonts not loading
**Error**: Fonts look wrong or don't apply

**Solution**:
```typescript
// Check app/layout.tsx has proper font setup
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// And in JSX:
<body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
```

---

### Animation Issues

#### ❌ Problem: Animations not playing
**Error**: Content just appears without animating

**Solutions**:

1. **Check Framer Motion is installed**:
   ```powershell
   npm list framer-motion
   # Should show version number
   ```

2. **Verify component is client component**:
   ```typescript
   "use client"; // Must be at top of file
   ```

3. **Check initial/animate props**:
   ```typescript
   <motion.div
     initial={{ opacity: 0 }}  // ✓ Correct
     animate={{ opacity: 1 }}  // ✓ Correct
   >
   ```

---

#### ❌ Problem: Scroll animations not triggering
**Error**: Sections don't reveal on scroll

**Solution**:
```typescript
// In AnimatedSection.tsx, check:
const isInView = useInView(ref, { 
  once: true,      // ✓ Only animate once
  margin: "-100px" // ✓ Trigger before element visible
});
```

---

### Deployment Issues

#### ❌ Problem: Vercel build fails
**Error**: Build fails on Vercel but works locally

**Common fixes**:

1. **Check environment**:
   - Node version: Should be 18.x or higher
   - In Vercel settings, set Node version

2. **Fix linting errors**:
   ```powershell
   # Run locally first
   npm run lint
   
   # Fix any errors shown
   ```

3. **Check all imports are correct**:
   ```typescript
   // Use @ alias correctly
   import Component from "@/components/Component" // ✓
   import Component from "../components/Component" // Also works
   ```

4. **Ensure all files are committed**:
   ```powershell
   git status
   git add .
   git commit -m "Fix build"
   git push
   ```

---

### TypeScript Issues

#### ❌ Problem: `any` type errors
**Error**: `Parameter 'x' implicitly has an 'any' type`

**Solution**:
```typescript
// Add types to all parameters
function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
  // ...
}

// Or for simple cases
const items: string[] = [];
```

---

#### ❌ Problem: Module not found
**Error**: `Cannot find module '@/components/...'`

**Solutions**:

1. **Check tsconfig.json paths**:
   ```json
   {
     "compilerOptions": {
       "paths": {
         "@/*": ["./*"]  // ✓ Should be present
       }
     }
   }
   ```

2. **Restart TS server in VS Code**:
   - Ctrl + Shift + P
   - Type: "TypeScript: Restart TS Server"
   - Press Enter

---

### Performance Issues

#### ❌ Problem: Page loads slowly
**Error**: Site feels sluggish

**Solutions**:

1. **Optimize images**:
   - Compress images (use TinyPNG)
   - Convert to WebP format
   - Keep under 200KB each

2. **Check for heavy animations**:
   ```typescript
   // Reduce complexity if needed
   // Use will-change for GPU acceleration
   className="will-change-transform"
   ```

3. **Run Lighthouse audit**:
   - Open DevTools (F12)
   - Go to "Lighthouse" tab
   - Click "Generate report"
   - Fix suggestions

---

### VS Code Issues

#### ❌ Problem: IntelliSense not working
**Error**: No auto-complete suggestions

**Solutions**:

1. **Restart VS Code**
2. **Install extensions**:
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - TypeScript and JavaScript Language Features

3. **Check workspace trust**:
   - VS Code might block features in untrusted workspaces
   - Trust the workspace when prompted

---

## 🐛 Debugging Tips

### Use Browser DevTools

**Open**: Press F12 or Right-click → Inspect

**Console tab**: See JavaScript errors
```javascript
// Add debug logs
console.log("Component rendered", data);
```

**Network tab**: Check if files are loading
- Look for 404 errors (file not found)
- Check file sizes

**Elements tab**: Inspect HTML/CSS
- See computed styles
- Check which classes are applied

---

### React DevTools

**Install**: [React DevTools Extension](https://react.dev/learn/react-developer-tools)

**Use**:
- See component tree
- Inspect props and state
- Track component re-renders

---

### Check Terminal Output

Always watch the terminal where `npm run dev` is running:

```powershell
# Good output:
✓ Ready in 2.3s
○ Compiling / ...
✓ Compiled /

# Bad output (errors):
✖ Failed to compile
Error: ...
```

---

## 📝 Getting Help

### Before Asking for Help

1. ✅ Read the error message carefully
2. ✅ Check this troubleshooting guide
3. ✅ Search the error on Google
4. ✅ Check GitHub Issues for libraries
5. ✅ Try the "obvious" fixes first:
   - Restart dev server
   - Clear browser cache
   - Run `npm install` again

### Where to Get Help

1. **Stack Overflow**: Search for error messages
2. **Next.js Discord**: [nextjs.org/discord](https://nextjs.org/discord)
3. **GitHub Issues**:
   - [Next.js Issues](https://github.com/vercel/next.js/issues)
   - [Framer Motion Issues](https://github.com/framer/motion/issues)
4. **Documentation**:
   - [Next.js Docs](https://nextjs.org/docs)
   - [Tailwind Docs](https://tailwindcss.com/docs)

---

## 🔍 Diagnostic Commands

```powershell
# Check Node version (should be 18+)
node --version

# Check npm version
npm --version

# List installed packages
npm list --depth=0

# Check for outdated packages
npm outdated

# Clear Next.js cache
Remove-Item -Recurse -Force .next

# Clear npm cache
npm cache clean --force

# Reinstall everything fresh
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

---

## ⚠️ Known Issues

### Issue: CSS @apply warnings
**Not a problem**: These are just warnings from the CSS language server. The code works fine.

**To hide**: Add this to VS Code settings:
```json
{
  "css.lint.unknownAtRules": "ignore"
}
```

---

### Issue: React import not needed
**Not a problem**: Next.js 14 auto-imports React. Old warning.

**Safe to ignore** or add this to .eslintrc.json:
```json
{
  "rules": {
    "react/react-in-jsx-scope": "off"
  }
}
```

---

## 🆘 Emergency Reset

If everything is broken and you want to start fresh:

```powershell
# 1. Stop the dev server (Ctrl + C)

# 2. Remove build files and dependencies
Remove-Item -Recurse -Force .next
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# 3. Reinstall
npm install

# 4. Start fresh
npm run dev
```

---

## ✅ Pre-Deployment Checklist

Before deploying, run these checks:

```powershell
# 1. Build succeeds
npm run build
# Should complete without errors

# 2. Lint passes
npm run lint
# Fix any errors shown

# 3. Test production build locally
npm start
# Visit http://localhost:3000

# 4. Check all links work
# Click through entire site

# 5. Test on mobile
# Use DevTools device emulation
```

---

## 💡 Pro Tips

1. **Always check the terminal**: Most errors show up there first
2. **Use VS Code's problems panel**: Shows TypeScript errors
3. **Keep DevTools open**: Catch errors as they happen
4. **Test after each change**: Don't make 10 changes then debug
5. **Read error messages**: They usually tell you exactly what's wrong
6. **Google the exact error**: Someone has probably solved it
7. **Check file paths**: Windows uses `\`, URLs use `/`
8. **Restart when in doubt**: Works more often than you'd think!

---

**Still stuck?** Check the other documentation files or search for your specific error message online. Most issues have been solved by someone else already!
