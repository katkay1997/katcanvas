// =============================================================
// Slideshow autoplay – replace images here.
// Pulls from src/data/artworks.ts (galleryArtworks).
// Smooth right-to-left continuous marquee. No clicks needed.
// =============================================================
import { galleryArtworks } from "@/data/artworks";

const ArtSlideshow = () => {
  // Duplicate the list so the marquee loops seamlessly.
  const reel = [...galleryArtworks, ...galleryArtworks];

  return (
    <div
      className="relative w-full overflow-hidden py-4"
      aria-label="Artwork slideshow"
    >
      {/* soft fade edges so images blend into the scene */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-background/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-background/70 to-transparent" />

      <div className="flex gap-5 md:gap-7 animate-marquee-rtl will-change-transform">
        {reel.map((art, i) => (
          <figure
            key={`${art.id}-${i}`}
            className="glass-panel shrink-0 w-[58vw] sm:w-[40vw] md:w-[28vw] lg:w-[22vw] xl:w-[18vw] rounded-2xl overflow-hidden border-primary/20"
          >
            <div className="aspect-[4/5] overflow-hidden bg-muted/40">
              <img
                src={art.image}
                alt={art.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="px-3 py-2 bg-background/40 backdrop-blur-md">
              <div className="text-[10px] uppercase tracking-[0.18em] text-accent/90">
                {art.category}
              </div>
              <h3 className="font-display text-lg leading-tight mt-0.5">
                {art.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-snug">
                {art.description}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default ArtSlideshow;
