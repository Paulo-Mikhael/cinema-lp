import Image from "next/image";
import deadpoolEyesImg from "../../app/assets/images/deadpool-eyes.png";

export const LineCarousel = {
  Left: LineCarouselLeft,
  Right: LineCarouselRight,
};

function LineCarouselLeft() {
  const elements = Array.from({ length: 20 }); // Cria um array com 20 posições

  return (
    <div className="bg-main-gray/80 w-full h-14 absolute top-[680px] -rotate-6 overflow-hidden flex gap-[40%]">
      <div className="animate-slide h-full flex gap-6 items-center w-full">
        {elements.map((_, index) => (
          <Image
            key={index}
            src={deadpoolEyesImg}
            alt="deadpool eyes"
            className="size-10"
          />
        ))}
      </div>
      <div className="animate-slide h-full flex gap-6 items-center w-full">
        {elements.map((_, index) => (
          <Image
            key={index}
            src={deadpoolEyesImg}
            alt="deadpool eyes"
            className="size-10"
          />
        ))}
      </div>
    </div>
  );
}
function LineCarouselRight() {
  const elements = Array.from({ length: 20 }); // Cria um array com 20 posições

  return (
    <div className="bg-main-red w-full h-14 absolute -rotate-6 overflow-hidden flex gap-[40%] z-10">
      <div className="animate-slide h-full flex gap-6 items-center w-full">
        {elements.map((_, index) => (
          <Image
            key={index}
            src={deadpoolEyesImg}
            alt="deadpool eyes"
            className="size-10"
          />
        ))}
      </div>
      <div className="animate-slide h-full flex gap-6 items-center w-full">
        {elements.map((_, index) => (
          <Image
            key={index}
            src={deadpoolEyesImg}
            alt="deadpool eyes"
            className="size-10"
          />
        ))}
      </div>
    </div>
  );
}
