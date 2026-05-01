# 3. Background Image

The big artist's-desk image behind everything is the **background image**.

---

## 📍 Where it lives

The actual file is here:

```
src/assets/artist-desk-bg.png
```

It is **imported and used** in:

```
src/pages/Index.tsx
```

Near the top of `Index.tsx` you'll see:

```ts
// ============================================================
// Change background image here.
// Drop a new file into src/assets/ and update this import.
// ============================================================
import bgImage from "@/assets/artist-desk-bg.png";
```

---

## 🔁 How to swap the background image

### Step 1 — Add your new image
Put your new background file in the `src/assets/` folder, e.g.:

```
src/assets/my-new-bg.png
```

### Step 2 — Update the import line
Change the import in `src/pages/Index.tsx` to point at your new file:

```ts
import bgImage from "@/assets/my-new-bg.png";
```

Save the file — the background updates immediately.

---

## 💡 Tips

- **Keep a similar composition.** The hotspots (computer, sketchbook,
  paper stack) are positioned with percentages. If your new image puts
  these in different spots, edit the `<Hotspot />` `top/left/width/height`
  values in `src/pages/Index.tsx` to line them up.
- **Use a portrait-ish image** (~1600 × 2400 px works great).
- **Compress it.** Backgrounds are large — keep under ~800 KB if you can.
- `.jpg` is smaller; `.png` is sharper for line art.
