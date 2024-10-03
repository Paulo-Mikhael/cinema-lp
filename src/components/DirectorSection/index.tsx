"use client";

import Image from "next/image";
import logoDrawImg from "../../app/assets/images/deadpool-logo-draw.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function DirectorSection() {
  const directorContainer = useRef<HTMLDivElement | null>(null);
  const gallery = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(directorContainer.current, {
      translateX: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: directorContainer.current,
        start: "top 400px",
      },
    });
    gsap.to(gallery.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: gallery.current,
        start: "top 500px",
      },
    });
  }, []);
  return (
    <span className="w-full h-64 flex items-center justify-center relative">
      <div
        ref={directorContainer}
        className="w-full flex items-center justify-center translate-x-96 opacity-0"
      >
        <p className="font-impacted text-[7rem]">DIRECTED</p>
        <p className="text-[5rem] mx-10 mt-20">BY</p>
        <p className="font-impacted text-[7rem] mt-32">SHAWN LEVY</p>
      </div>
      <p
        ref={gallery}
        className="absolute tracking-theme bottom-0 left-10 opacity-0"
      >
        GALLERY 07:32
      </p>
      <span className="absolute top-0 right-10">
        <div className="flex gap-3 items-center">
          <Image
            className="rounded-full size-8"
            src={logoDrawImg}
            alt="Drawed deadpool logo"
          />
          <p className="tracking-theme">REALEASE DATE</p>
        </div>
        <h1 className="w-[566px] text-lg mt-3">
          PART B. Deadpool 3 is scheduled to be realeased on United States on
          May 3, 2024. It was previously scheduled for September 6 of that year,
          and then November 6. It was be part of Phase Five of the MCU.
        </h1>
      </span>
    </span>
  );
}
