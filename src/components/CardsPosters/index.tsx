"use client";
import Image from "next/image";
import cardImg1 from "../../app/assets/images/card-img-1.png";
import cardImg2 from "../../app/assets/images/card-img-2.png";
import cardImg3 from "../../app/assets/images/card-img-3.png";
import cardImg4 from "../../app/assets/images/card-img-4.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CardsPosters() {
  const container = useRef<HTMLDivElement | null>(null);
  const card1 = useRef<HTMLImageElement | null>(null);
  const card2 = useRef<HTMLImageElement | null>(null);
  const card3 = useRef<HTMLImageElement | null>(null);
  const card4 = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    gsap.to(card1.current, {
      rotate: "10deg",
      scrollTrigger: {
        trigger: container.current,
        start: "top 500px",
        end: "bottom 600px",
      },
    });
    gsap.to(card2.current, {
      rotate: "20deg",
      scrollTrigger: {
        trigger: container.current,
        start: "top 500px",
        end: "bottom 600px",
      },
    });
    gsap.to(card3.current, {
      rotate: "30deg",
      scrollTrigger: {
        trigger: container.current,
        start: "top 500px",
        end: "bottom 600px",
      },
    });
    gsap.to(card4.current, {
      rotate: "40deg",
      scrollTrigger: {
        trigger: container.current,
        start: "top 500px",
        end: "bottom 600px",
      },
    });
  }, []);

  return (
    <div
      ref={container}
      className="size-[200px] absolute bottom-0 flex justify-center items-center"
    >
      <Image
        ref={card1}
        src={cardImg1}
        alt="deadpool belt"
        className="w-full rounded-xl absolute z-40"
      />
      <Image
        ref={card2}
        src={cardImg2}
        alt="deadpool and wolverine hands making a heart z-30"
        className="w-full rounded-xl absolute"
      />
      <Image
        ref={card3}
        src={cardImg3}
        alt="wolverine poster"
        className="w-full rounded-xl absolute z-20"
      />
      <Image
        ref={card4}
        src={cardImg4}
        alt="deadpool aiming a gun"
        className="w-full rounded-xl absolute z-10"
      />
    </div>
  );
}
