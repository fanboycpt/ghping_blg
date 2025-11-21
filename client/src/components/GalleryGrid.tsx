import { useState } from "react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-testid="gallery-grid">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-md border-2 border-border scan-hover neon-glow-hover cursor-pointer group"
            onClick={() => setSelectedImage(image)}
            data-testid={`gallery-image-${image.id}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover chromatic-hover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="font-mono text-[10px] text-chart-1 line-clamp-2">
                  {image.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-background/98 backdrop-blur-sm z-50 flex items-center justify-center p-4 scanlines"
          onClick={() => setSelectedImage(null)}
          data-testid="gallery-lightbox"
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain border-2 border-chart-1 neon-glow rounded-md"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur p-4 border-t-2 border-chart-2">
              <p className="font-mono text-xs text-foreground">{selectedImage.caption}</p>
            </div>
            <button
              className="absolute top-4 right-4 bg-card/95 backdrop-blur px-4 py-2 rounded-md border border-chart-1 font-heading text-xs text-chart-1 hover-elevate active-elevate-2"
              onClick={() => setSelectedImage(null)}
              data-testid="button-close-lightbox"
            >
              [ESC]
            </button>
          </div>
        </div>
      )}
    </>
  );
}
