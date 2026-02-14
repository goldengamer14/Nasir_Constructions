import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/utils/cn";
import type { CarouselImage } from "@/types";

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlayInterval?: number;
}

export const ImageCarousel = ({ images, autoPlayInterval = 3000 }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const showPreviousImage = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(showNextImage, autoPlayInterval);
    return () => clearInterval(interval);
  }, [showNextImage, autoPlayInterval]);

  return (
    <div className="relative mx-auto my-4 max-w-md">
      {/* Wrapper */}
      <div
        className="home-imgs-wrapper relative overflow-hidden rounded-xl border-8 border-brand-primary bg-gradient-to-br from-brand-secondary to-brand-dark shadow-lg"
        style={{ aspectRatio: "3/4" }}
        onMouseEnter={(e) => {
          const interval = (e.currentTarget as any).dataset.interval;
          if (interval) clearInterval(parseInt(interval));
        }}
        onMouseLeave={(e) => {
          const newInterval = setInterval(showNextImage, autoPlayInterval);
          (e.currentTarget as any).dataset.interval = newInterval.toString();
        }}
      >
        {/* Track */}
        <div
          className="home-imgs-track flex h-full transition-transform duration-[600ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={cn(
                "home-img h-full flex-shrink-0 object-contain transition-opacity duration-600",
                currentIndex === index ? "opacity-100" : "opacity-0"
              )}
              style={{ width: `${100 / images.length}%` }}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="carousel-controls pointer-events-none absolute left-0 top-1/2 flex w-full -translate-y-1/2 justify-between px-2.5">
          <button
            onClick={showPreviousImage}
            className="nav-btn pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-brand-primary shadow-md transition-all hover:scale-110 hover:bg-white hover:text-brand-secondary"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={showNextImage}
            className="nav-btn pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-brand-primary shadow-md transition-all hover:scale-110 hover:bg-white hover:text-brand-secondary"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="carousel-indicators absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "carousel-indicator h-3 w-3 cursor-pointer rounded-full border-2 border-transparent transition-all hover:scale-110 hover:bg-white/80",
                currentIndex === index
                  ? "scale-125 border-brand-primary bg-white"
                  : "bg-white/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
