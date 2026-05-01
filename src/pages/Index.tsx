import { useState } from "react";
import { Instagram, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hotspot from "@/components/Hotspot";
import GalleryModal from "@/components/GalleryModal";
import { galleryArtworks, sketchArtworks, studyArtworks, type Artwork } from "@/data/artworks";

// ============================================================
// Change background image here.
// Drop a new file into src/assets/ and update this import.
// ============================================================
import bgImage from "@/assets/artist-desk-bg.png";

// ============================================================
// Change Instagram link here.
// ============================================================
const INSTAGRAM_URL = "https://instagram.com/YOUR_USERNAME";

type ModalState = {
  open: boolean;
  title: string;
  subtitle: string;
  artworks: Artwork[];
};

const Index = () => {
  const [modal, setModal] = useState<ModalState>({
    open: false,
    title: "",
    subtitle: "",
    artworks: [],
  });

  const openModal = (title: string, subtitle: string, artworks: Artwork[]) =>
    setModal({ open: true, title, subtitle, artworks });

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* === Background image === */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden="true"
      />
      {/* Gentle violet wash so text stays readable without hiding the art */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/20 to-background/70" aria-hidden="true" />

      {/* === Twinkling stars sprinkled on top === */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {[
          { top: "8%", left: "12%", size: 2, delay: "0s" },
          { top: "14%", left: "62%", size: 3, delay: "1.2s" },
          { top: "6%", left: "82%", size: 2, delay: "2.4s" },
          { top: "20%", left: "30%", size: 2, delay: "0.6s" },
          { top: "11%", left: "48%", size: 1.5, delay: "1.8s" },
          { top: "18%", left: "88%", size: 2, delay: "3s" },
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
              boxShadow: "0 0 8px hsl(var(--glow-soft) / 0.9)",
            }}
          />
        ))}
      </div>

      {/* === Top bar: brand + tagline + IG === */}
      <header className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 md:px-12 pt-8 md:pt-10">
        <div className="animate-fade-in">
          <div className="flex items-center gap-2 text-accent/90">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs uppercase tracking-[0.3em]">Artist Portfolio</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl mt-1 text-glow">
            Kat Canvas
          </h1>
          <p className="font-body text-sm md:text-base text-muted-foreground mt-1 italic">
            My art world off of Instagram
          </p>
        </div>

        {/* Change Instagram link here (also see INSTAGRAM_URL above) */}
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

      {/* === Interactive hotspot layer ===
          Positioned over the desk image. Percentages keep them aligned
          across screen sizes since the bg uses cover/center. */}
      <div className="absolute inset-0 z-10">
        {/* Computer screen → main gallery */}
        <Hotspot
          top="36%" left="32%" width="36%" height="18%"
          label="Open gallery on the computer screen"
          onClick={() =>
            openModal(
              "Gallery",
              "Finished pieces from the studio.",
              galleryArtworks,
            )
          }
        />

        {/* Sketchbook (bottom-left open book) → sketches / WIP */}
        <Hotspot
          top="76%" left="6%" width="30%" height="20%"
          label="Open sketchbook"
          onClick={() =>
            openModal(
              "Sketches & WIP",
              "Loose pages, ideas in progress.",
              sketchArtworks,
            )
          }
        />

        {/* Stack of papers (bottom-center/right) → studies */}
        <Hotspot
          top="78%" left="40%" width="32%" height="18%"
          label="Open studies and practice"
          onClick={() =>
            openModal(
              "Studies & Practice",
              "Reps, references, and color tests.",
              studyArtworks,
            )
          }
        />

        {/* Pencil cup → tooltip only */}
        <Hotspot
          top="58%" left="71%" width="12%" height="14%"
          label="Tools I use"
          tooltip="Tools I use ✦ iPad + Procreate, Wacom Intuos, ink pens & a very loved sketchbook"
        />
      </div>

      {/* === Bottom hint === */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center px-6">
        <p className="glass-panel rounded-full px-5 py-2 text-xs md:text-sm text-muted-foreground animate-fade-in">
          ✦ Tap the glowing spots — the screen, the sketchbook, the papers, the pencils ✦
        </p>
      </div>

      <GalleryModal
        open={modal.open}
        onOpenChange={(o) => setModal((m) => ({ ...m, open: o }))}
        title={modal.title}
        subtitle={modal.subtitle}
        artworks={modal.artworks}
      />
    </main>
  );
};

export default Index;
