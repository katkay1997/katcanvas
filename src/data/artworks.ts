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
  { id: "g1",  title: "Detectives",       category: "Character", description: "Fashionably Serious", image: "/images/artwork/1-Magnify-glass.jpg" },
  { id: "g2",  title: "Solange",       category: "Portrait", description: "Nail stylist working",  image: "/images/artwork/2-Salon.jpg" },
  { id: "g3",  title: "Toona",      category: "Illustration", description: "Toona the Bodega cat from East New York", image: "/images/artwork/3-Toona.jpg" },
  { id: "g4",  title: "Jacob Elordi",        category: "Illustration",  description: "Jacob Elordi drawn manga-style", image: "/images/artwork/4-Lordi.jpg" },
  { id: "g5",  title: "Special Christmas", category: "Illustration", description: "A family enjoying Christmas", image:"/images/artwork/5-Christmas.jpg"},
  { id: "g6",  title: "Remi Wolf",    category: "Illustration", description: "Remi posing for the 2025 New Year", image:"/images/artwork/6-New-Year.jpg" },
  { id: "g7",  title: "Billie at the Awards Show", category: "Illustration", description: "Billie ready for the camera", image:"/images/artwork/7-Billie.jpg"},
  { id: "g8",  title: "Smiling on Vacay",   category: "Illustration",    description: "Life is worth smiling about", image: "/images/artwork/8-Orange.jpg"},
  { id: "g9",  title: "At bar with a Cigar",category: "Illustration", description: "The cigar is too good to pass up", image:"/images/artwork/9-Cuban.jpg" },
  { id: "g10", title: "Arsham and His Pet Goat", category: "Illustration", description: "A friend of mine when he was a toddler",image: "/images/artwork/10-Arsham.jpg"},
  { id: "g11", title: "Unfinished 70s Sketch",   category: "Illustration",  description: "Where ink meets watercolor wash.",  image:"/images/artwork/11-70s-vibe.jpg" },
  { id: "g12", title: "Smokey",   category: "Illustration",     description: "My friend's senior cat", image:"/images/artwork/12-Smokey.jpg" },
  { id: "g13", title: "Pinkpantheress & piri&tommy", category: "Illustration",description: "I hoped that Pinkpanthress & piri&tommy would collab on song one day. Piri&tommy broke up,but I hope Piri will collab with Pink.", image:"/images/artwork/13-Piriandpink.jpg" },
  { id: "g14", title: "Pink Heaven",       category: "Illustration", description: "I wanted the illustration to have a pink pastel theme. The pink clouds were a perfect touch.",image:"/images/artwork/14-heaven.jpg" },
  { id: "g15", title: "Pinkpantheress",          category: "Illustration",  description: "Posing for her album cover",  image:"/images/artwork/15-Pink-album.jpg"},
  { id: "g16", title: "Smoking the Stress Away",     category: "Illustration", description: "Photographed at a photography club at BMCC",        image: "/images/artwork/16-Detective.jpg"},
  { id: "g17", title: "Nicki Nicole",   category: "Illustration", description: "Argentine rapper, photographed at Rolling Stone",  image: "/images/artwork/17-Niki.jpg"},
  { id: "g18", title: "Jerina",        category: "Illustration",  description: "A friend of mine drawn in harajuku fashion",       image: "/images/artwork/18-Harajuku.jpg"},
  { id: "g19", title: "Fabulous Hair",        category: "Portrait",     description: "A random woman I found on Pinterest",        image: "/images/artwork/19-Purple-hair.jpg" },
  { id: "g20", title: "Friendly Lady in the Subway",  category: "Illustration", description: "Soft noise over a sweet color.", image: "/images/artwork/20-Subway.jpg" },
  { id: "g21", title: "Victoria Monet",     category: "Illustration",    description: "Endless rows in a dreamed countryside.",       image: "/images/artwork/21-Victoria-.jpg" },
  { id: "g22", title: "Adelina",         category: "Illustration",    description: "A quick sketch of a friend",          image: "/images/artwork/22-Addy-.jpg"},
  { id: "g23", title: "It's Katera!",         category: "Illustration", description: "A streak of pink across a violet night.",      image: "/images/artwork/23-Katera.jpg" },
  { id: "g24", title: "Kirby in Saigon",        category: "Illustration", description: "Light spilling onto a quiet street.",          image: "/images/artwork/24-kirby-.jpg" },
  { id: "g25", title: "Stuck on a comic page",       category: "Illustration", description: "Warm static, slow breath.",                    image: "/images/artwork/25-Comic-Page.jpg"},
  { id: "g26", title: "Pretty Locs",   category: "Illustration", description: "Flowers that only open after dark.",           image: "/images/artwork/26-drawing.jpg"},
  { id: "g27", title: "Holographic Tear",   category: "Illustration",  description: "A single tear catching every color.",         image: ph("katcanvas-27") },
  { id: "g28", title: "Taro Bubble Tea",         category: "Illustration", description: "My first drawing on an iPad",       image: "/images/artwork/28-Taro.jpg" },
  { id: "g29", title: "Nice Lipstick",         category: "Illustration",    description: "My first person drawing on iPad",  image: "/images/artwork/29-Red-lips.jpg" },
  { id: "g30", title: "Baby Potter",       category: "Illustration", description: "A song that won't quite leave.",          image: "/images/artwork/30-Baby-potter.jpg" },
  { id: "g31", title: "Protective Cover",        category: "Illustration", description: "A lady with a wrap over her locs",           image: "/images/artwork/31-wrap.jpg" },
  { id: "g32", title: "Posing for a Magazine",      category: "Illustration",  description: "Two pretty ladies from Reddit",              image: "/images/artwork/32-girlfriends.png" },
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
