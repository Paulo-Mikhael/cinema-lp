import { LineCarousel } from "../LineCarousel";
import logoDrawImg from "../../app/assets/images/deadpool-logo-draw.png";
import marvelLogoImg from "../../app/assets/images/marvel-logo.png";
import Image from "next/image";
import { Mail, Minus, Monitor, Play, Star } from "lucide-react";
import Button from "../Button";
import ActorQuote from "../ActorQuote";
import NoteSpheres from "../NoteSpheres";
import CardsPosters from "../CardsPosters";
import PlayButtons from "../PlayButtons";

export default function SectionOne() {
  return (
    <section className="relative h-[150vh] border-b-4 border-main-red">
      <div className="overflow-hidden relative z-10 pt-20">
        <LineCarousel.Right />
        <div className="w-[110%] h-48 bg-main-gray -rotate-6 2xl:-rotate-3" />
      </div>
      <div className="w-full h-screen px-7 pt-28 bg-gradient-to-b from-main-gray from-[10%] to-main-black absolute top-52 flex flex-col justify-between items-center">
        <article className="w-full flex justify-between items-center">
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
          <NoteSpheres />
          <ActorQuote />
        </article>
        <article className="w-full flex justify-between">
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
        <PlayButtons />
        <CardsPosters />
      </div>
    </section>
  );
}
