import { Instagram, Sparkles, Linkedin, Github } from "lucide-react";
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
                href="#"
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
      <header className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-6 md:px-12 pt-12 md:pt-16">
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

      {/* === Auto slideshow, aligned with the computer-screen area === */}
      <section className="absolute inset-x-0 top-[55%] -translate-y-1/2 z-10">
        <ArtSlideshow />
      </section>

      {/* === Bottom tagline === */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center px-6">
        <p className="font-body text-sm md:text-base font-bold text-foreground italic animate-fade-in text-glow">
          My art world off of Instagram
        </p>
      </div>
    </main>
  );
};

export default Index;
