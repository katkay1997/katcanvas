# 5. Adding This Landing Page to Your Existing TypeScript Project

This guide shows you how to take the Kat Canvas landing page and drop
it into a larger React + TypeScript project (e.g. your personal site).

It assumes your existing project uses:
- React 18+
- TypeScript
- Tailwind CSS
- Vite, Next.js, or CRA (any will work with small adjustments)

---

## 🧱 Step 1 — Copy these files into your project

From this project, copy the following into the matching folders of your
existing project:

| Copy from                                | Copy to                                    |
| ---------------------------------------- | ------------------------------------------ |
| src/pages/Index.tsx                    | src/pages/KatCanvas.tsx (rename!)        |
| src/components/ArtSlideshow.tsx        | src/components/ArtSlideshow.tsx          |
| src/components/Hotspot.tsx             | src/components/Hotspot.tsx               |
| src/components/GalleryModal.tsx        | src/components/GalleryModal.tsx          |
| src/data/artworks.ts                   | src/data/artworks.ts                     |
| src/assets/artist-desk-bg.png          | src/assets/artist-desk-bg.png            |
| public/images/artwork/ (if you have real images) | public/images/artwork/        |

> 💡 Rename Index.tsx to something descriptive like KatCanvas.tsx
> so it doesn't clash with your existing home page.

---

## 📦 Step 2 — Install dependencies

The landing page uses these packages. Install any you don't already have:

```bash
npm install lucide-react class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-dialog @radix-ui/react-tooltip
```

It also relies on shadcn/ui components (button, dialog, etc.).
If you already use shadcn, you're set. If not, install them:

```bash
npx shadcn@latest add button dialog tooltip toast sonner
```

---

## 🎨 Step 3 — Bring over the design tokens

The page uses custom CSS variables and animations defined in:

src/index.css
tailwind.config.ts

Open both files in this project, find the Kat Canvas-specific
sections, and merge them into the matching files of your project:

### From src/index.css, copy:
- The :root { --background, --primary, --glow-purple, ... } color tokens.
- The .glass-panel, .text-glow, .bg-gradient-dreamy utility classes.
- The .star style and @keyframes marquee-rtl animation.

### From tailwind.config.ts, copy:
- Any custom colors (e.g. glow-purple).
- The animation and keyframes entries (marquee-rtl, fade-in, etc.).
- The boxShadow entries like shadow-glow.

> ⚠️ If your project already defines --primary, --background, etc.,
> don't overwrite them globally. Instead, scope the Kat Canvas tokens
> under a wrapper class like .kat-canvas { ... } and add that class
> to the page's root <main> element.

---

## 🛣️ Step 4 — Add the route

### If you use React Router:

```tsx
// src/App.tsx (or wherever your routes live)
import KatCanvas from "@/pages/KatCanvas";

<Routes>
  {/* ...your existing routes... */}
  <Route path="/art" element={<KatCanvas />} />
</Routes>
```

Now https://yoursite.com/art shows the landing page.

### If you use Next.js (app router):

Move KatCanvas.tsx into app/art/page.tsx and add "use client" at
the very top of the file (the page uses hooks/state).

```tsx
"use client";
// ...rest of the file
```

### If you use Next.js (pages router):

Move it into pages/art.tsx — no extra config needed.

---

## 🖼️ Step 5 — Fix asset imports if needed

This project uses the @/ path alias (e.g. @/assets/...,
@/components/...). Make sure your project has the same alias in:

**tsconfig.json:**
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**vite.config.ts** (Vite only):
```ts
import path from "path";

export default defineConfig({
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
```

If your project doesn't use @/, do a find-and-replace:
@/ → ../ (and adjust paths as needed).

---

## ✅ Step 6 — Final checklist

- [ ] Files copied into the right folders
- [ ] Dependencies installed (lucide-react, shadcn, etc.)
- [ ] CSS tokens + animations merged into index.css
- [ ] Tailwind config merged
- [ ] Route added (/art or whatever you choose)
- [ ] @/ path alias set up
- [ ] Background image visible in src/assets/
- [ ] Instagram URL updated in KatCanvas.tsx

Then run your project:

```bash
npm run dev
```

…and visit your new route. 🎉

---

## 🆘 Common issues

| Problem                                | Fix                                                      |
| -------------------------------------- | -------------------------------------------------------- |
| Background image is missing            | Check the import bgImage from "@/assets/..." path.     |
| Tailwind classes aren't styling        | Make sure tailwind.config.ts includes the page's path in content: [...]. |
| Colors look wrong / washed out         | You forgot to copy the CSS variables from index.css.   |
| Cannot find module "@/..."           | Add the @/ path alias (see Step 5).                    |
| Next.js error: "useState in Server Component" | Add "use client"; at the top of the page file.   |
