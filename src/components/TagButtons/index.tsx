"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Button from "../Button";

export default function TagButtons() {
  const button1 = useRef<HTMLButtonElement | null>(null);
  const button2 = useRef<HTMLButtonElement | null>(null);
  const button3 = useRef<HTMLButtonElement | null>(null);
  const text = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    gsap.to(button1.current, {
      opacity: 1,
    });
    gsap.to(button2.current, {
      opacity: 1,
    });
    gsap.to(button3.current, {
      opacity: 1,
    });
    gsap.to(text.current, {
      opacity: 1,
    });
  }, []);
  return (
    <>
      <div className="w-full flex gap-3">
        <Button
          reference={button1}
          variant="black-outlined"
          className="opacity-0"
        >
          ACTION
        </Button>
        <Button
          reference={button2}
          variant="black-outlined"
          className="opacity-0"
        >
          COMEDY
        </Button>
        <Button
          reference={button3}
          variant="black-outlined"
          className="opacity-0"
        >
          SCI-FI
        </Button>
      </div>
      <p ref={text} className="font-impact text-nowrap opacity-0">
        RELEASE IMAX 3, 2024
      </p>
    </>
  );
}
