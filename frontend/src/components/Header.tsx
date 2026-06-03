import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { conveyorImages, primaryImages } from "@/constants/images";

interface OverlayImage {
  src: string;
  alt: string;
}

export const Header = () => {
  const [overlayImage, setOverlayImage] = useState<OverlayImage | null>(null);

  const desktopPrimaryImageClasses = "hidden md:block h-[110px] w-[110px] rounded-full object-cover flex-shrink-0",
    mobilePrimaryImageClasses = "h-[90px] w-[90px] rounded-full object-cover flex-shrink-0",
    conveyorImageClasses = "h-[100px] w-[100px] mr-[30px] rounded-lg object-cover aspect-square flex-shrink-0";

  const animationDuration = `${conveyorImages.length / 1}s`;

  const openOverlay = (img: OverlayImage) => setOverlayImage(img);
  const closeOverlay = () => setOverlayImage(null);

  // Lock body scroll and listen for Escape key while overlay is open
  useEffect(() => {
    if (!overlayImage) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeOverlay();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [overlayImage]);

  return (
    <>
      <div className="w-full rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4">
        {/* Mobile: stacked layout */}
        <div className="flex md:hidden w-full justify-between items-center">
          <img
            src={primaryImages.logo.src}
            alt={primaryImages.logo.alt}
            className={`${mobilePrimaryImageClasses} cursor-pointer hover:ring-2 hover:ring-primary transition-all duration-200`}
            onClick={() => openOverlay(primaryImages.logo)}
          />
          <img
            src={primaryImages.nasir.src}
            alt={primaryImages.nasir.alt}
            className={`${mobilePrimaryImageClasses} cursor-pointer hover:ring-2 hover:ring-primary transition-all duration-200`}
            onClick={() => openOverlay(primaryImages.nasir)}
          />
        </div>

        {/* Desktop: Logo (left) */}
        <img
          src={primaryImages.logo.src}
          alt={primaryImages.logo.alt}
          className={`${desktopPrimaryImageClasses} cursor-pointer hover:ring-2 hover:ring-primary transition-all duration-200`}
          onClick={() => openOverlay(primaryImages.logo)}
        />

        {/* Conveyor Belt */}
        <div className="w-full overflow-hidden h-[110px] flex items-center flex-grow md:mx-10">
          <div
            className="slider-track flex w-max"
            style={{
              animation: `scroll-left ${animationDuration} linear infinite`,
              animationDelay: "1s",
            }}
          >
            {conveyorImages.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className={conveyorImageClasses}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Nasir Image (right) */}
        <img
          src={primaryImages.nasir.src}
          alt={primaryImages.nasir.alt}
          className={`${desktopPrimaryImageClasses} cursor-pointer hover:ring-2 hover:ring-primary transition-all duration-200`}
          onClick={() => openOverlay(primaryImages.nasir)}
        />
      </div>

      {/* Overlay */}
      {overlayImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
          onClick={closeOverlay}
        >
          {/* Close button */}
          <button
            type="button"
            aria-label="Close image"
            onClick={closeOverlay}
            className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-card border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-lg"
          >
            <X size={18} />
          </button>

          {/* Image — stop propagation so clicking it doesn't close the overlay */}
          <img
            src={overlayImage.src}
            alt={overlayImage.alt}
            className="max-h-[80vh] max-w-[80vw] rounded-[var(--radius)] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};