"use client";

import { Play } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PlayButtons() {
  const container = useRef<HTMLSpanElement | null>(null);
  const sphere1 = useRef<HTMLDivElement | null>(null);
  const sphere2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.to(sphere1.current, {
      width: "128px",
      height: "128px",
      opacity: 1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 600px",
        end: "top 400px",
      },
    });
    gsap.to(sphere2.current, {
      width: "128px",
      height: "128px",
      opacity: 1,
      scrollTrigger: {
        trigger: container.current,
        start: "top 600px",
        end: "top 400px",
      },
    });
  }, []);

  return (
    <article ref={container} className="w-full flex justify-between">
      <div
        ref={sphere1}
        className="size-10 rounded-full cursor-pointer bg-main-red flex flex-col items-center justify-center opacity-0"
      >
        <Play className="size-5" />
      </div>
      <div
        ref={sphere2}
        className="size-10 rounded-full cursor-pointer bg-main-white flex flex-col items-center justify-center opacity-0"
      >
        <Play className="size-5 text-main-red" />
      </div>
    </article>
  );
}
