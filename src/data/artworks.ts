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
  { id: "g13", title: "Starling Song",      category: "Illustration", description: "Birds traced from memory.",                    image: ph("katcanvas-13") },
  { id: "g14", title: "Glass Orchid",       category: "Digital Paint", description: "Translucent petals catching moonlight.",      image: ph("katcanvas-14") },
  { id: "g15", title: "Quiet Hum",          category: "Concept Art",  description: "Rooms lit only by their screens.",             image: ph("katcanvas-15") },
  { id: "g16", title: "Twilight Drift",     category: "Illustration", description: "Floating between sleep and waking.",           image: ph("katcanvas-16") },
  { id: "g17", title: "Cotton Candy Sky",   category: "Digital Paint", description: "Pink clouds at the edge of dusk.",            image: ph("katcanvas-17") },
  { id: "g18", title: "Paper Crane",        category: "Mixed Media",  description: "Folded wishes on lined paper.",                image: ph("katcanvas-18") },
  { id: "g19", title: "Indigo Hour",        category: "Portrait",     description: "Blue shadows on tired skin.",                  image: ph("katcanvas-19") },
  { id: "g20", title: "Cherry Static",      category: "Experimental", description: "Soft noise over a sweet color.",               image: ph("katcanvas-20") },
  { id: "g21", title: "Lavender Field",     category: "Landscape",    description: "Endless rows in a dreamed countryside.",       image: ph("katcanvas-21") },
  { id: "g22", title: "Velour Cat",         category: "Character",    description: "A familiar shape on a velvet couch.",          image: ph("katcanvas-22") },
  { id: "g23", title: "Soft Comet",         category: "Illustration", description: "A streak of pink across a violet night.",      image: ph("katcanvas-23") },
  { id: "g24", title: "Glow Window",        category: "Digital Paint", description: "Light spilling onto a quiet street.",         image: ph("katcanvas-24") },
  { id: "g25", title: "Peach Static",       category: "Experimental", description: "Warm static, slow breath.",                    image: ph("katcanvas-25") },
  { id: "g26", title: "Midnight Bouquet",   category: "Illustration", description: "Flowers that only open after dark.",           image: ph("katcanvas-26") },
  { id: "g27", title: "Holographic Tear",   category: "Concept Art",  description: "A single tear catching every color.",          image: ph("katcanvas-27") },
  { id: "g28", title: "Ribbon Sky",         category: "Digital Paint", description: "Wind written across a pastel evening.",       image: ph("katcanvas-28") },
  { id: "g29", title: "Soft Armor",         category: "Character",    description: "A gentle knight in lilac plates.",             image: ph("katcanvas-29") },
  { id: "g30", title: "Vinyl Memory",       category: "Illustration", description: "A song that won't quite leave.",               image: ph("katcanvas-30") },
  { id: "g31", title: "Sleepy Tide",        category: "Landscape",    description: "Waves moving in slow purple loops.",           image: ph("katcanvas-31") },
  { id: "g32", title: "Sticker Heart",      category: "Mixed Media",  description: "Layered cutouts on a love note.",              image: ph("katcanvas-32") },
  { id: "g33", title: "Galaxy Pocket",      category: "Digital Paint", description: "A small universe held in one hand.",          image: ph("katcanvas-33") },
  { id: "g34", title: "Soft Goodnight",     category: "Illustration", description: "The last sketch before sleep.",                image: ph("katcanvas-34") },
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
