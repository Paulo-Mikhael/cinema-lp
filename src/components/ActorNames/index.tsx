"use client";

import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function ActorNames() {
  const ryan = useRef<HTMLParagraphElement | null>(null);
  const karan = useRef<HTMLParagraphElement | null>(null);
  const emma = useRef<HTMLParagraphElement | null>(null);
  const hugh = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    gsap.to(ryan.current, {
      opacity: 1,
      translateX: 0,
      skewX: 0,
      duration: 1,
    });
    gsap.to(karan.current, {
      opacity: 1,
      translateX: 0,
      skewX: 0,
      duration: 1,
    });
    gsap.to(emma.current, {
      opacity: 1,
      translateX: 0,
      skewX: 0,
      duration: 1,
    });
    gsap.to(hugh.current, {
      opacity: 1,
      translateX: 0,
      skewX: 0,
      duration: 1,
    });
  }, []);

  return (
    <>
      <div className="flex flex-grow justify-between relative">
        <p
          ref={ryan}
          className="font-impact text-3xl opacity-0 translate-x-96 skew-x-[100deg]"
        >
          RYAN REYNOLDS
        </p>
        <p
          ref={karan}
          className="font-impact text-3xl opacity-0 translate-x-96 skew-x-[100deg]"
        >
          KARAN SONI
        </p>
      </div>
      <div className="flex flex-grow justify-between">
        <p
          ref={emma}
          className="font-impact text-3xl opacity-0 translate-x-96 skew-x-[100deg]"
        >
          EMMA CORRIN
        </p>
        <p
          ref={hugh}
          className="font-impact text-3xl opacity-0 translate-x-96 skew-x-[100deg]"
        >
          HUGH JACKMAN
        </p>
      </div>
    </>
  );
}
