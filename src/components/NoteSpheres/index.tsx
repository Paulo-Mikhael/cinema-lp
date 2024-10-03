"use client";

import { Quote } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function NoteSpheres() {
  const trailer = useRef<HTMLDivElement | null>(null);
  const imax = useRef<HTMLDivElement | null>(null);
  const date = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(trailer.current, {
      translateY: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: trailer.current,
        start: "top 900px",
        end: "bottom 400px",
        scrub: true,
      },
    });
    gsap.to(imax.current, {
      translateY: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: imax.current,
        start: "top 800px",
        end: "bottom 400px",
        scrub: true,
      },
    });
    gsap.to(date.current, {
      translateY: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: date.current,
        start: "top 700px",
        end: "bottom 400px",
        scrub: true,
      },
    });
  }, []);

  return (
    <span className="font-impacted flex gap-5">
      <div
        ref={trailer}
        className="size-32 rounded-full text-main-black bg-main-white flex flex-col items-center justify-center translate-y-32 opacity-0"
      >
        <p className="text-2xl">TRAILER</p>
        <p className="text-4xl flex justify-center">
          1:47 <Quote className="size-5" />
        </p>
      </div>
      <div
        ref={imax}
        className="size-32 rounded-full bg-main-red flex flex-col items-center justify-center translate-y-32 opacity-0"
      >
        <p className="text-2xl">IMAX</p>
        <p className="text-4xl">6</p>
      </div>
      <div
        ref={date}
        className="size-32 rounded-full bg-main-gray flex flex-col items-center justify-center translate-y-32 opacity-0"
      >
        <p className="text-2xl">MAY</p>
        <p className="text-4xl">3</p>
      </div>
    </span>
  );
}
