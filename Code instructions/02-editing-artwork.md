# 2. Editing Artwork (Links, Titles, Categories, Descriptions)

All artwork data lives in **one single file**:

```
src/data/artworks.ts
```

You don't need to touch any component code to change the artwork —
just edit this file.

---

## 📦 What's inside `artworks.ts`

There are **three arrays**, one per hotspot / section:

| Array name         | Used by                                  |
| ------------------ | ---------------------------------------- |
| `galleryArtworks`  | The slideshow + the computer screen modal |
| `sketchArtworks`   | The sketchbook hotspot modal              |
| `studyArtworks`    | The paper-stack hotspot modal             |

Each item in an array looks like this:

```ts
{
  id: "g1",
  title: "Moonlit Muse",
  category: "Illustration",
  description: "A quiet portrait painted under city stars.",
  image: ph("katcanvas-1"), // <-- placeholder
},
```

---

## ✏️ What each field means

| Field         | What it controls                                       |
| ------------- | ------------------------------------------------------ |
| `id`          | A unique short ID. Just keep it unique (e.g. `g1`, `g2`). |
| `title`       | The artwork title shown under the image.               |
| `category`    | The small uppercase label (e.g. "Illustration").       |
| `description` | The short sentence under the title.                    |
| `image`       | The image URL (placeholder OR your own file path).     |

---

## 🔁 How to change one piece (full example)

**Before** (using a placeholder):

```ts
{
  id: "g1",
  title: "Moonlit Muse",
  category: "Illustration",
  description: "A quiet portrait painted under city stars.",
  image: ph("katcanvas-1"),
},
```

**After** (using your own image + your own text):

```ts
{
  id: "g1",
  title: "Window at 2 AM",
  category: "Digital Painting",
  description: "Painted on a sleepless Tuesday night.",
  image: "/images/artwork/window-at-2am.jpg",
},
```

That's it — save the file and the page updates automatically.

---

## ➕ Adding a new artwork

Add a new object at the end of the array (don't forget the comma):

```ts
export const galleryArtworks: Artwork[] = [
  { id: "g1",  title: "Moonlit Muse",       category: "Illustration", description: "A quiet portrait painted under city stars.", image: ph("katcanvas-1") },
  { id: "g2",  title: "Velvet Hours",       category: "Digital Paint", description: "Soft purples bleeding into a midnight sky.",  image: ph("katcanvas-2") },
  { id: "g3",  title: "Window Dreams",      category: "Illustration", description: "She watches the city breathe.",                image: ph("katcanvas-3") },
  { id: "g4",  title: "Plum Garden",        category: "Concept Art",  description: "Imagined botanicals from a half-asleep mind.", image: ph("katcanvas-4") },
  { id: "g5",  title: "Neon Quiet",         category: "Digital Paint", description: "The hum of a sleeping city in lavender.",     image: ph("katcanvas-5") },
  { id: "g6",  title: "Paper Lanterns",     category: "Illustration", description: "Warm glow against a cool blue evening.",       image: ph("katcanvas-6") },
  { id: "g7",  title: "Sugar Static",       category: "Experimental", description: "Playful pinks and grain.",                     image: ph("katcanvas-7") },
  { id: "g8",  title: "Soft Spell",         category: "Character",    description: "A tiny magic, sketched and finished in one sitting.", image: ph("katcanvas-8") },
  { id: "g9",  title: "Cassette Heart",     category: "Illustration", description: "A love letter to lo-fi nights.",               image: ph("katcanvas-9") },
  { id: "g10", title: "Honey Static",       category: "Digital Paint", description: "Warm light through tired eyes.",              image: ph("katcanvas-10") },
  { id: "g11", title: "Ink Bloom",          category: "Mixed Media",  description: "Where ink meets watercolor wash.",             image: ph("katcanvas-11") },
  { id: "g12", title: "Lilac Hush",         category: "Portrait",     description: "A soft moment in violet.",                     image: ph("katcanvas-12") },
  {
    id: "g13",
    title: "New Piece",
    category: "Illustration",
    description: "Something new I just finished.",
    image: "/images/artwork/new-piece.jpg",
  },
];
```

## ➖ Removing an artwork

Just delete the whole `{ ... },` block. The grid handles any number.
