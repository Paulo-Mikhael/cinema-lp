"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import deadpoolImg from "../../app/assets/images/deadpool.png";
import Image from "next/image";

export default function DeadpoolHero() {
  const text = useRef<HTMLParagraphElement | null>(null);
  const img = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    gsap.to(text.current, {
      opacity: 1,
      translateX: 0,
    });
    gsap.to(img.current, {
      opacity: 1,
      top: "96px",
    });
  }, []);

  return (
    <>
      <p
        ref={text}
        className="font-impacted text-[300px] opacity-0 translate-x-96"
      >
        DEADPOOL
      </p>
      <Image
        className="absolute top-96 w-[500px] opacity-0"
        src={deadpoolImg}
        alt="deadpool image"
        ref={img}
      />
    </>
  );
}
