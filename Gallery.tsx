import { useState } from "react";
import { X } from "lucide-react";
import { useInView } from "../hooks/useInView";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const { ref: headerRef, isInView: headerVisible } = useInView();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-dark-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 sm:mb-20">
          <span
            className={`text-gold text-xs font-semibold tracking-[0.3em] uppercase ${
              headerVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Our Work
          </span>
          <h2
            className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 ${
              headerVisible ? "animate-fade-in-up animation-delay-100" : "opacity-0"
            }`}
          >
            Style <span className="text-gradient">Gallery</span>
          </h2>
          <p
            className={`text-white/50 max-w-2xl mx-auto text-lg ${
              headerVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            Every cut tells a story. Browse our latest work and find your next look.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {images.map((image, index) => (
            <GalleryItem
              key={index}
              image={image}
              index={index}
              onClick={() => setLightbox(image)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            className="max-w-full max-h-[85vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

function GalleryItem({
  image,
  index,
  onClick,
}: {
  image: string;
  index: number;
  onClick: () => void;
}) {
  const { ref, isInView } = useInView(0.05);
  const delayClass = `animation-delay-${(index % 3) * 100 + 100}`;

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-xl cursor-pointer aspect-square ${
        isInView ? `animate-scale-in ${delayClass}` : "opacity-0"
      }`}
      onClick={onClick}
    >
      <img
        src={image}
        alt={`Gallery ${index + 1}`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
        <span className="text-sm text-gold font-medium tracking-wide">View Full Size</span>
      </div>
    </div>
  );
}
