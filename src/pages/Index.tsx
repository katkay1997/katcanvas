import { useRef, useState } from "react";
import { Instagram, Sparkles, Linkedin, Github, Pause, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ArtSlideshow, { type ArtSlideshowHandle } from "@/components/ArtSlideshow";
import { galleryArtworks, type Artwork } from "@/data/artworks";

// ============================================================
// Change background image here.
// Drop a new file into src/assets/ and update this import.
// ============================================================
import bgImage from "@/assets/artist-desk-bg.png";

// ============================================================
// Change Instagram link here.
// ============================================================
const INSTAGRAM_URL = "https://www.instagram.com/katera_kanvas?igsh=ZHQxbnNrb3pyOHk1";

const Index = () => {
  const [paused, setPaused] = useState(false);
  const [previewArt, setPreviewArt] = useState<Artwork | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideshowRef = useRef<ArtSlideshowHandle>(null);
  const totalSlides = galleryArtworks.length;

  const handleSlideClick = (art: Artwork) => {
    // Slider is paused — open the enlarged preview
    setPreviewArt(art);
  };

  const closePreview = () => {
    // Closing the preview leaves the slider paused (per spec)
    setPreviewArt(null);
  };

  const togglePlay = () => {
    // If user resumes playback, also close any open preview
    setPaused((p) => {
      const next = !p;
      if (!next) setPreviewArt(null);
      return next;
    });
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background">
      {/* === Background image === */}
      <div
        className="absolute inset-0 bg-cover"
        style={{ backgroundImage: `url(${bgImage})`, backgroundPosition: "70% center" }}
        aria-hidden="true"
      />
      {/* Gentle violet wash so text stays readable without hiding the art */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/20 to-background/70"
        aria-hidden="true"
      />

      {/* === Twinkly stars (soft, dreamy) === */}
      <div className="pointer-events-none absolute inset-0 z-[5]" aria-hidden="true">
        {[
          { top: "8%", left: "12%", delay: "0s", size: 2 },
          { top: "14%", left: "78%", delay: "1.2s", size: 3 },
          { top: "22%", left: "42%", delay: "2.4s", size: 2 },
          { top: "30%", left: "88%", delay: "0.6s", size: 2 },
          { top: "38%", left: "6%", delay: "3s", size: 3 },
          { top: "46%", left: "60%", delay: "1.8s", size: 2 },
          { top: "55%", left: "20%", delay: "2.1s", size: 2 },
          { top: "62%", left: "92%", delay: "0.3s", size: 3 },
          { top: "70%", left: "48%", delay: "1.5s", size: 2 },
          { top: "78%", left: "14%", delay: "2.7s", size: 2 },
          { top: "84%", left: "70%", delay: "0.9s", size: 3 },
          { top: "90%", left: "34%", delay: "3.3s", size: 2 },
          { top: "18%", left: "26%", delay: "2s", size: 2 },
          { top: "50%", left: "82%", delay: "1.1s", size: 2 },
        ].map((s, i) => (
          <span
            key={i}
            className="star"
            style={{
              top: s.top,
              left: s.left,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: s.delay,
            }}
          />
        ))}
      </div>

      {/* === Navigation bar === */}
      <nav
        className="relative z-30 w-full border-b border-border/30 bg-background/20 backdrop-blur-sm"
        aria-label="Main navigation"
      >
        <div className="flex items-stretch justify-between">
          {/* Left: brand */}
          <a
            href="#"
            className="px-6 md:px-8 py-4 text-sm md:text-base font-semibold tracking-[0.35em] text-foreground border-r border-border/30 hover:bg-foreground/5 transition-colors"
          >
            KATERA
          </a>

          {/* Right: social icons + links */}
          <ul className="flex items-stretch">
            <li className="border-l border-border/30">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex items-center justify-center h-full px-4 md:px-5 hover:bg-foreground/5 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-foreground" />
              </a>
            </li>
            <li className="border-l border-border/30">
              <a
                href="https://github.com/katkay1997"
                aria-label="GitHub"
                className="flex items-center justify-center h-full px-4 md:px-5 hover:bg-foreground/5 transition-colors"
              >
                <Github className="h-4 w-4 text-foreground" />
              </a>
            </li>
            {["INFO", "PROJECTS", "BLOG"].map((item) => (
              <li key={item} className="border-l border-border/30">
                <a
                  href="#"
                  className="flex items-center h-full px-5 md:px-7 text-xs md:text-sm tracking-[0.25em] text-foreground hover:bg-foreground/5 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* === Top bar: brand + tagline + IG === */}
      <header className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 md:px-12 pt-3 md:pt-4">
        <div className="animate-fade-in">
          <div className="flex items-center gap-2 text-accent/90">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs uppercase tracking-[0.3em]">Artist Portfolio</span>
          </div>
          {/* Artist name uses Helvetica per request */}
          <h1
            className="text-4xl md:text-6xl mt-1 text-glow font-bold"
            style={{ fontFamily: "Helvetica, 'Helvetica Neue', Arial, sans-serif" }}
          >
            Kat Canvas
          </h1>
        </div>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-in"
        >
          <Button
            size="lg"
            className="glass-panel bg-gradient-dreamy hover:opacity-90 text-primary-foreground rounded-full px-6 shadow-[var(--shadow-glow)] transition-all hover:scale-105"
          >
            <Instagram className="mr-2 h-5 w-5" />
            Follow on Instagram
          </Button>
        </a>
      </header>

      {/* === Auto slideshow (in-flow so the page can grow taller) === */}
      <section className="relative z-10 mt-24 md:mt-36">
        {/* Counter + arrow controls (above the slider) */}
        <div className="relative z-20 mb-6 md:mb-8 flex items-center justify-center gap-5 px-6">
          <button
            type="button"
            onClick={() => slideshowRef.current?.prev()}
            aria-label="Previous slide"
            className="glass-panel flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-background/30 text-foreground text-xl backdrop-blur-md transition-all hover:scale-110 hover:bg-background/50"
          >
            ←
          </button>

          <div
            className="glass-panel rounded-full border border-primary/40 bg-background/30 px-5 py-2 text-xs md:text-sm tracking-[0.2em] uppercase text-foreground backdrop-blur-md"
            aria-live="polite"
          >
            Slide {currentIndex + 1} of {totalSlides}
          </div>

          <button
            type="button"
            onClick={() => slideshowRef.current?.next()}
            aria-label="Next slide"
            className="glass-panel flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-background/30 text-foreground text-xl backdrop-blur-md transition-all hover:scale-110 hover:bg-background/50"
          >
            →
          </button>
        </div>

        <ArtSlideshow
          ref={slideshowRef}
          paused={paused}
          onSlideClick={handleSlideClick}
          onIndexChange={setCurrentIndex}
        />
      </section>

      {/* === Pause / Play control (between slider and quote) === */}
      <div className="relative z-20 mt-10 md:mt-14 flex justify-center px-6">
        <Button
          onClick={togglePlay}
          size="lg"
          aria-pressed={paused}
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          className="glass-panel bg-background/30 hover:bg-background/40 text-foreground rounded-full px-6 backdrop-blur-md border border-primary/40 transition-all hover:scale-105"
        >
          {paused ? (
            <>
              <Play className="mr-2 h-5 w-5" /> Play
            </>
          ) : (
            <>
              <Pause className="mr-2 h-5 w-5" /> Pause
            </>
          )}
        </Button>
      </div>

      {/* === Quote / tagline === */}
      <div className="relative z-20 mt-12 md:mt-20 pb-10 flex justify-center px-6">
        <p className="font-body text-sm md:text-base font-bold text-foreground italic animate-fade-in text-glow">
          My art world off of Instagram
        </p>
      </div>

      {/* === Click-to-preview overlay (only opens while paused) === */}
      {previewArt && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Preview: ${previewArt.title}`}
          onClick={closePreview}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-background/70 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-panel relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl border-2 border-primary/50 shadow-[var(--shadow-glow)] bg-background/60 flex flex-col md:flex-row animate-scale-in"
          >
            <button
              onClick={closePreview}
              aria-label="Close preview"
              className="absolute top-3 right-3 z-10 rounded-full p-2 bg-background/60 hover:bg-background/80 text-foreground backdrop-blur-md transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex-1 bg-muted/30 flex items-center justify-center overflow-hidden">
              <img
                src={previewArt.image}
                alt={previewArt.title}
                className="w-full h-full max-h-[60vh] md:max-h-[90vh] object-contain"
              />
            </div>

            <div className="md:w-80 p-6 md:p-8 flex flex-col justify-center bg-background/40 backdrop-blur-md">
              <div className="text-[11px] uppercase tracking-[0.25em] text-accent/90">
                {previewArt.category}
              </div>
              <h2 className="font-display text-2xl md:text-3xl mt-2 text-glow">
                {previewArt.title}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mt-3 leading-relaxed">
                {previewArt.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Index;
