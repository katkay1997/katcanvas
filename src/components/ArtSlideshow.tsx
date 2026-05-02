// =============================================================
// Slideshow – index-based slider with autoplay.
// Exposes prev/next + current index via ref so the parent can
// render a counter and arrow controls above the slider.
// =============================================================
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { galleryArtworks, type Artwork } from "@/data/artworks";

type Props = {
  paused?: boolean;
  onSlideClick?: (art: Artwork) => void;
  onIndexChange?: (index: number) => void;
};

export type ArtSlideshowHandle = {
  next: () => void;
  prev: () => void;
  total: number;
};

const AUTOPLAY_MS = 2600;

const ArtSlideshow = forwardRef<ArtSlideshowHandle, Props>(
  ({ paused = false, onSlideClick, onIndexChange }, ref) => {
    const total = galleryArtworks.length;
    const [index, setIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);

    const go = (next: number) => {
      const clamped = ((next % total) + total) % total;
      setIndex(clamped);
    };

    useImperativeHandle(ref, () => ({
      next: () => go(index + 1),
      prev: () => go(index - 1),
      total,
    }), [index, total]);

    // Notify parent of index changes (for the counter)
    useEffect(() => {
      onIndexChange?.(index);
    }, [index, onIndexChange]);

    // Autoplay – only when not paused
    useEffect(() => {
      if (paused) return;
      const id = window.setInterval(() => {
        setIndex((i) => (i + 1) % total);
      }, AUTOPLAY_MS);
      return () => window.clearInterval(id);
    }, [paused, total]);

    return (
      <div
        className="relative w-full overflow-hidden py-4"
        aria-label="Artwork slideshow"
      >
        {/* soft fade edges so images blend into the scene */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-background/70 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-background/70 to-transparent" />

        <div
          ref={trackRef}
          className="flex gap-5 md:gap-7 transition-transform duration-700 ease-in-out will-change-transform px-[5vw] sm:px-[16vw] md:px-[24vw] lg:px-[28vw] xl:px-[31vw]"
          style={{
            // Each slide width + gap is variable; translate by index * (slide% + gap)
            // We approximate using calc with a CSS var per breakpoint via inline style.
            transform: `translateX(calc(${-index} * (var(--slide-w) + var(--slide-gap))))`,
          }}
        >
          {galleryArtworks.map((art, i) => {
            const clickable = paused && !!onSlideClick;
            const isActive = i === index;
            return (
              <figure
                key={art.id}
                onClick={clickable ? () => onSlideClick!(art) : undefined}
                className={`glass-panel shrink-0 w-[90vw] sm:w-[68vw] md:w-[52vw] lg:w-[44vw] xl:w-[38vw] rounded-2xl overflow-hidden border-4 border-primary/60 shadow-[0_0_25px_hsl(var(--glow-purple)/0.45)] transition-all duration-500 ${
                  isActive ? "scale-100 opacity-100" : "scale-[0.92] opacity-70"
                } ${clickable ? "cursor-zoom-in hover:scale-[1.02]" : ""}`}
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
            );
          })}
        </div>

        {/* Per-breakpoint slide width + gap variables (matches Tailwind classes above) */}
        <style>{`
          [aria-label="Artwork slideshow"] > div:nth-child(3) {
            --slide-w: 90vw;
            --slide-gap: 1.25rem;
          }
          @media (min-width: 640px) {
            [aria-label="Artwork slideshow"] > div:nth-child(3) {
              --slide-w: 68vw;
            }
          }
          @media (min-width: 768px) {
            [aria-label="Artwork slideshow"] > div:nth-child(3) {
              --slide-w: 52vw;
              --slide-gap: 1.75rem;
            }
          }
          @media (min-width: 1024px) {
            [aria-label="Artwork slideshow"] > div:nth-child(3) {
              --slide-w: 44vw;
            }
          }
          @media (min-width: 1280px) {
            [aria-label="Artwork slideshow"] > div:nth-child(3) {
              --slide-w: 38vw;
            }
          }
        `}</style>
      </div>
    );
  }
);

ArtSlideshow.displayName = "ArtSlideshow";

export default ArtSlideshow;
