import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { Artwork } from "@/data/artworks";

type Props = {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  title: string;
  subtitle: string;
  artworks: Artwork[];
};

const GalleryModal = ({ open, onOpenChange, title, subtitle, artworks }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-panel max-w-5xl w-[95vw] max-h-[88vh] overflow-y-auto border-primary/30 bg-background/70">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl md:text-4xl text-glow">
            {title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {subtitle}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {artworks.map((art, i) => (
            <figure
              key={art.id}
              className="group glass-panel rounded-2xl overflow-hidden animate-float-up"
              style={{ animationDelay: `${i * 60}ms`, opacity: 0 }}
            >
              <div className="overflow-hidden aspect-[4/5] bg-muted">
                <img
                  src={art.image}
                  alt={art.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <figcaption className="p-4">
                <div className="text-xs uppercase tracking-widest text-accent/90">{art.category}</div>
                <h3 className="font-display text-xl mt-1">{art.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{art.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;
