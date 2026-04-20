import { conveyorImages } from "@/constants/images";
import { primaryImages } from "@/constants/images";

export const Header = () => {
  const desktopPrimaryImageClasses = "hidden md:block h-[110px] w-[110px] rounded-full object-cover flex-shrink-0",
    mobilePrimaryImageClasses = "h-[90px] w-[90px] rounded-full object-cover flex-shrink-0",
    conveyorImageClasses = "h-[100px] w-[100px] mr-[30px] rounded-lg object-cover aspect-square flex-shrink-0";

  // Animation duration: 26 images × 3 seconds per image = 78 seconds
  const animationDuration = `${conveyorImages.length / 1}s`;

  return (
    <div className="w-full rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4">
      {/* Mobile: stacked layout */}
      <div className="flex md:hidden w-full justify-between items-center">
        <img
          src={primaryImages.logo.src}
          alt={primaryImages.logo.alt}
          className={mobilePrimaryImageClasses}
        />
        <img
          src={primaryImages.nasir.src}
          alt={primaryImages.nasir.alt}
          className={mobilePrimaryImageClasses}
        />
      </div>

      {/* Desktop: Logo (left) */}
      <img
        src={primaryImages.logo.src}
        alt={primaryImages.logo.alt}
        className={desktopPrimaryImageClasses}
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
        className={desktopPrimaryImageClasses}
      />
    </div>
  );
};
