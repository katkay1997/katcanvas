# 4. Slideshow / Gallery

The auto-scrolling slideshow in the middle of the page uses the **same
data** as the gallery hotspot — so editing one updates both.

---

## 📍 Where slideshow images come from

The slideshow component itself:

```
src/components/ArtSlideshow.tsx
```

At the top of that file you'll see:

```ts
import { galleryArtworks } from "@/data/artworks";
```

That means the images, titles, categories, and descriptions all come
from the **`galleryArtworks` array** in:

```
src/data/artworks.ts
```

So to change slideshow images, you edit `src/data/artworks.ts`
(see [02-editing-artwork.md](./02-editing-artwork.md)).

---

## 🔁 Simple example — replace ONE mock image

Open `src/data/artworks.ts` and find the first item in `galleryArtworks`:

**Before:**
```ts
{
  id: "g1",
  title: "Moonlit Muse",
  category: "Illustration",
  description: "A quiet portrait painted under city stars.",
  image: ph("katcanvas-1"),
}
```

**After** (using a real image you placed in `public/images/artwork/`):
```ts
{
  id: "g1",
  title: "Moonlit Muse",
  category: "Illustration",
  description: "A quiet portrait painted under city stars.",
  image: "/images/artwork/moonlit-muse.jpg",
}
```

Save → the slideshow now shows your real artwork in that slot.

---

## ⚙️ Tweaking the look (optional)

In `src/components/ArtSlideshow.tsx`:

- **Slide width** → change the `w-[78vw] sm:w-[55vw] md:w-[40vw] ...` classes.
- **Border thickness/color** → change `border-4 border-primary/60`.
- **Spacing between slides** → change `gap-5 md:gap-7`.

The animation speed is controlled by the `animate-marquee-rtl` class,
defined in `src/index.css`. Lower the duration there to speed it up,
raise it to slow it down.
