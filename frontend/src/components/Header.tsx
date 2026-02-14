export const Header = () => {
  // Duplicate images for seamless loop
  const conveyorImages = [
    "/imgs/A1.jpg",
    "/imgs/A2.jpg",
    "/imgs/A3.jpg",
    "/imgs/A1.jpg",
    "/imgs/A2.jpg",
    "/imgs/A3.jpg",
    "/imgs/A1.jpg",
    "/imgs/A2.jpg",
    "/imgs/A3.jpg",
    "/imgs/A1.jpg",
    "/imgs/A2.jpg",
    "/imgs/A3.jpg",
  ];

  return (
    <div className="w-full bg-gray-900 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4">
      {/* Mobile: stacked layout */}
      <div className="flex md:hidden w-full justify-between items-center">
        <img
          src="/imgs/Logo.jpg"
          alt="Logo"
          className="h-[90px] w-[90px] rounded-full object-cover flex-shrink-0"
        />
        <img
          src="/imgs/Nasir_Khan.jpg"
          alt="Nasir Khan"
          className="h-[90px] w-[90px] rounded-full object-cover flex-shrink-0"
        />
      </div>

      {/* Desktop: Logo (left) */}
      <img
        src="/imgs/Logo.jpg"
        alt="Logo"
        className="hidden md:block h-[110px] w-[110px] rounded-full object-cover flex-shrink-0"
      />

      {/* Conveyor Belt */}
      <div className="w-full overflow-hidden h-[110px] flex items-center flex-grow md:mx-10">
        <div className="slider-track flex w-max animate-scroll-left hover:pause">
          {conveyorImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Certificate ${index + 1}`}
              className="h-[100px] w-[180px] mr-[30px] rounded-lg object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Desktop: Nasir Image (right) */}
      <img
        src="/imgs/Nasir_Khan.jpg"
        alt="Nasir Khan"
        className="hidden md:block h-[110px] w-[110px] rounded-full object-cover flex-shrink-0"
      />
    </div>
  );
};
