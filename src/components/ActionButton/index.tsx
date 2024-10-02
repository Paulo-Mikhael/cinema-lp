"use client";

import { ArrowUpRight } from "lucide-react";
import Button from "../Button";
import Image from "next/image";
import logoMetalImg from "../../app/assets/images/deadpool-logo-metal.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function ActionButton() {
  const container = useRef<HTMLSpanElement | null>(null);
  const img = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(img.current, {
      rotate: "28deg",
      scrollTrigger: {
        trigger: img.current,
        start: "top 600px",
        scrub: true,
      },
    });
  }, []);

  return (
    <span className="flex items-center gap-16">
      <Button variant="black-outlined" icon={ArrowUpRight}>
        <p className="font-impacted text-3xl p-1">BOOK NOW</p>
      </Button>
      <Image
        ref={img}
        src={logoMetalImg}
        alt="rusty deadpool logo"
        className="size-32"
      />
    </span>
  );
}
