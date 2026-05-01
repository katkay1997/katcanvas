# 1. Image Setup

This guide shows **where to put your image files** and **how to name them**
so the project can find them.

---

## 📁 Where the image folder should live

Put your art files inside the `public` folder, in a subfolder called
`images/artwork`:

```
public/
└── images/
    └── artwork/
        ├── moonlit-muse.jpg
        ├── velvet-hours.jpg
        └── sketch-01.jpg
```

> 💡 Anything inside `/public/` is served from the website root.
> So a file at `public/images/artwork/moonlit-muse.jpg` is referenced
> in code as `"/images/artwork/moonlit-muse.jpg"` (no `public/` prefix).

If the folder doesn't exist yet, **create it manually** — the project
will pick it up automatically.

---

## 🏷️ Recommended naming conventions

Keep filenames:

- **lowercase**
- **with hyphens** instead of spaces
- **descriptive** but short
- **no special characters** (no `é`, `&`, `#`, spaces, etc.)

✅ Good examples:
```
moonlit-muse.jpg
velvet-hours.jpg
sketch-hands-01.jpg
study-color-dusk.jpg
```

❌ Avoid:
```
Moonlit Muse.JPG
final FINAL (2).png
piece#3.jpeg
```

### Suggested prefixes by category

| Type             | Prefix     | Example                  |
| ---------------- | ---------- | ------------------------ |
| Finished gallery | `art-`     | `art-moonlit-muse.jpg`   |
| Sketches / WIP   | `sketch-`  | `sketch-hands-01.jpg`    |
| Studies          | `study-`   | `study-color-dusk.jpg`   |

This makes your folder easy to scan later.

---

## 🖼️ Recommended sizes & formats

| Use case                    | Size              | Format |
| --------------------------- | ----------------- | ------ |
| Gallery (finished pieces)   | ~800 × 1000 px    | `.jpg` |
| Sketches & studies          | ~800 × 800 px     | `.jpg` |
| Background image            | ~1600 × 2400 px   | `.png` or `.jpg` |
| Anything needing transparency | any             | `.png` |

Keep each file under **~500 KB** so the page stays fast.
Compress with [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app).
