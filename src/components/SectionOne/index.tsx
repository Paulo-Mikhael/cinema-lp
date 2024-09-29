import { LineCarousel } from "../LineCarousel";
import logoDrawImg from "../../app/assets/images/deadpool-logo-draw.png";
import marvelLogoImg from "../../app/assets/images/marvel-logo.png";
import Image from "next/image";
import {
  ArrowUpRight,
  Mail,
  Minus,
  Monitor,
  Play,
  Quote,
  Star,
} from "lucide-react";
import Button from "../Button";

export default function SectionOne() {
  return (
    <section className="relative">
      <div className="overflow-hidden relative z-10 pt-20">
        <LineCarousel.Right />
        <div className="w-[110%] h-48 bg-main-gray -rotate-6" />
      </div>
      <div className="w-full px-7 pt-28 h-screen bg-gradient-to-b from-main-gray to-main-black absolute top-52 z-20 flex flex-col justify-between">
        <article className="flex justify-between items-center">
          <span>
            <p className="tracking-theme flex items-center gap-3">
              <Image
                className="rounded-full size-8"
                src={logoDrawImg}
                alt="Drawed deadpool logo"
              />
              PRODUCTION
            </p>
            <Image
              className="w-[220px] mt-4"
              src={marvelLogoImg}
              alt="Marvel logo"
            />
          </span>
          <span className="font-impacted flex gap-5">
            <div className="size-32 rounded-full text-main-black bg-main-white flex flex-col items-center justify-center">
              <p className="text-2xl">TRAILER</p>
              <p className="text-4xl flex justify-center">
                1:47 <Quote className="size-5" />
              </p>
            </div>
            <div className="size-32 rounded-full bg-main-red flex flex-col items-center justify-center">
              <p className="text-2xl">IMAX</p>
              <p className="text-4xl">6</p>
            </div>
            <div className="size-32 rounded-full bg-main-gray flex flex-col items-center justify-center">
              <p className="text-2xl">MAY</p>
              <p className="text-4xl">3</p>
            </div>
          </span>
          <span className="flex gap-5">
            <div className="w-1 h-20 bg-main-red rounded-sm" />
            <p className="font-impacted text-xl w-56 flex flex-col gap-3 relative">
              HUGH JACKMAN SAID HE REALLY WAS DONE PLAYING THE CHARACTER OF
              LOGAN/ WOLVERINE AFTER 2017'S 'LOGAN'.
              <ArrowUpRight className="size-8 text-main-red cursor-pointer absolute -bottom-1 right-5" />
            </p>
          </span>
        </article>
        <article className="flex justify-between">
          <span>
            <Button variant="black-outlined">
              <p className="font-impact py-2 text-xl">02</p>
            </Button>
            <div className="flex gap-1 mt-4">
              <Star className="size-6 text-main-red" />
              <Star className="size-6 text-main-red" />
              <Star className="size-6 text-main-red" />
              <Star className="size-6 text-main-red" />
              <Star className="size-6" />
            </div>
          </span>
          <span className="flex gap-2 items-center">
            <div className="rounded-full bg-gray-500 cursor-pointer p-2">
              <Mail className="size-5" />
            </div>
            <div className="rounded-full bg-gray-500 cursor-pointer p-2">
              <Minus className="size-5 rotate-90" />
            </div>
            <div className="rounded-full bg-gray-500 cursor-pointer p-2">
              <Monitor className="size-5" />
            </div>
          </span>
        </article>
        <article className="flex justify-between">
          <div className="size-32 rounded-full bg-main-red flex flex-col items-center justify-center">
            <Play className="size-5" />
          </div>
          <div className="size-32 rounded-full bg-main-white flex flex-col items-center justify-center">
            <Play className="size-5 text-main-red" />
          </div>
        </article>
      </div>
    </section>
  );
}
