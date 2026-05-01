import { Instagram, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ArtSlideshow from "@/components/ArtSlideshow";

// ============================================================
// Change background image here.
// Drop a new file into src/assets/ and update this import.
// ============================================================
import bgImage from "@/assets/artist-desk-bg.png";

// ============================================================
// Change Instagram link here.
// ============================================================
const INSTAGRAM_URL = "https://instagram.com/YOUR_USERNAME";

const Index = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* === Background image === */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden="true"
      />
      {/* Gentle violet wash so text stays readable without hiding the art */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/20 to-background/70"
        aria-hidden="true"
      />

      {/* === Top bar: brand + tagline + IG === */}
      <header className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 md:px-12 pt-8 md:pt-10">
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
          <p className="font-body text-sm md:text-base text-muted-foreground mt-1 italic">
            My art world off of Instagram
          </p>
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

      {/* === Auto slideshow, aligned with the computer-screen area === */}
      <section className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10">
        <ArtSlideshow />
      </section>

      {/* === Bottom hint === */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center px-6">
        <p className="glass-panel rounded-full px-5 py-2 text-xs md:text-sm text-muted-foreground animate-fade-in">
          ✦ A quiet little gallery from the desk ✦
        </p>
      </div>
    </main>
  );
};

export default Index;
