// =============================================================
// MOCK ARTWORK DATA
// Replace these mock images with your own artwork.
// See IMAGE_REPLACEMENT_INSTRUCTIONS.txt for full instructions.
// =============================================================

export type Artwork = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string; // <-- swap this URL with your own (e.g. "/images/artwork/my-piece.jpg")
};

// Soft purple/pink placeholder images via picsum (seeded for stability)
const ph = (seed: string, w = 800, h = 1000) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

// ---- GALLERY (computer screen) -----------------------------
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
];

// ---- SKETCHES / WIP (sketchbook) ---------------------------
export const sketchArtworks: Artwork[] = [
  { id: "s1", title: "Morning Pages",   category: "Sketch / WIP", description: "Loose figure studies before coffee.", image: ph("katsketch-1", 800, 800) },
  { id: "s2", title: "Pose Tests",      category: "Sketch / WIP", description: "Gesture warmups, 30 seconds each.",   image: ph("katsketch-2", 800, 800) },
  { id: "s3", title: "Costume Idea",    category: "Sketch / WIP", description: "A character I can't stop thinking about.", image: ph("katsketch-3", 800, 800) },
  { id: "s4", title: "Hands Practice",  category: "Sketch / WIP", description: "Hands. Always hands.",                image: ph("katsketch-4", 800, 800) },
  { id: "s5", title: "Mood Thumbnails", category: "Sketch / WIP", description: "Tiny compositions for a bigger piece.", image: ph("katsketch-5", 800, 800) },
  { id: "s6", title: "Late Night Doodle", category: "Sketch / WIP", description: "1 a.m. brain on paper.",            image: ph("katsketch-6", 800, 800) },
];

// ---- STUDIES / PRACTICE (paper stack) ----------------------
export const studyArtworks: Artwork[] = [
  { id: "p1", title: "Color Study — Dusk",  category: "Study", description: "Trying to catch that purple-pink light.", image: ph("katstudy-1", 800, 800) },
  { id: "p2", title: "Anatomy — Shoulders", category: "Study", description: "Reps, reps, reps.",                       image: ph("katstudy-2", 800, 800) },
  { id: "p3", title: "Master Copy",         category: "Study", description: "Learning from the greats.",               image: ph("katstudy-3", 800, 800) },
  { id: "p4", title: "Lighting — Windows",  category: "Study", description: "Soft side-light through fabric.",         image: ph("katstudy-4", 800, 800) },
  { id: "p5", title: "Perspective Drill",   category: "Study", description: "Two-point cityscape practice.",           image: ph("katstudy-5", 800, 800) },
  { id: "p6", title: "Fabric Folds",        category: "Study", description: "Drapery study from observation.",         image: ph("katstudy-6", 800, 800) },
];
