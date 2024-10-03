"use client";

import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function ActorQuote() {
  const container = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(container.current, {
      filter: "blur(0px)",
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "top 400px",
        end: "bottom 400px",
      },
    });
  }, []);

  return (
    <span ref={container} className="flex gap-5 blur-sm">
      <div className="w-1 h-20 bg-main-red rounded-sm" />
      <p className="font-impacted text-xl w-56 flex flex-col gap-3 relative">
        HUGH JACKMAN SAID HE REALLY WAS DONE PLAYING THE CHARACTER OF LOGAN/
        WOLVERINE AFTER 2017'S 'LOGAN'.
        <ArrowUpRight className="size-8 transition-all text-main-red hover:text-main-white cursor-pointer absolute -bottom-1 right-5" />
      </p>
    </span>
  );
}
