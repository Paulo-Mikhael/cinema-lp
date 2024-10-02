import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Button from "../Button";
import logoDrawImg from "../../app/assets/images/deadpool-logo-draw.png";
import logoMetalImg from "../../app/assets/images/deadpool-logo-metal.png";
import { LineCarousel } from "../LineCarousel";
import TagButtons from "../TagButtons";
import ActorNames from "../ActorNames";
import DeadpoolHero from "../DeadpoolHero";

export default function Hero() {
  const defaultStyle = "w-full px-7";

  return (
    <div className="relative h-[63rem]">
      <div
        className={`${defaultStyle} flex items-center justify-between absolute top-[160px]`}
      >
        <TagButtons />
      </div>
      <div
        className={`${defaultStyle} relative top-[260px] flex justify-between z-10 gap-52`}
      >
        <ActorNames />
      </div>
      <div
        className={`${defaultStyle} absolute top-[260px] flex justify-center z-10 gap-52`}
      >
        <DeadpoolHero />
      </div>
      <div className="w-full flex justify-center z-[1] overflow-hidden">
        <div className="bg-main-gray w-full h-[2px] absolute top-[230px]" />
        <div className="bg-main-gray w-full h-[2px] absolute top-[570px]" />
        <div className="bg-main-gray w-full h-[2px] absolute top-[230px] rotate-90" />
        <div className="bg-transparent border-[2px] border-main-gray w-[48rem] h-[48rem] absolute top-[100px] rounded-full" />
        <div className="bg-main-red w-[32rem] h-[32rem] absolute top-[280px] rounded-full" />
        <div className="absolute flex gap-2 top-[216px]">
          <div className="bg-main-white w-4 h-24" />
          <div className="bg-main-white w-4 h-24" />
          <div className="bg-main-white w-4 h-24" />
        </div>
        <LineCarousel.Left />
      </div>
      <article
        className={`${defaultStyle} absolute top-[800px] flex justify-between items-center`}
      >
        <span>
          <div className="flex gap-3 items-center">
            <Image
              className="rounded-full size-8"
              src={logoDrawImg}
              alt="Drawed deadpool logo"
            />
            <p className="tracking-theme">DEADPOOL</p>
            <p className="tracking-theme">STORY</p>
          </div>
          <h1 className="w-[330px] text-lg mt-3 ">
            PART A. Wolverine joins the "merc with a mouth" in the third
            installment of the Deadpool film franchise.
          </h1>
        </span>
        <span className="flex items-center gap-16">
          <Button variant="black-outlined" icon={ArrowUpRight}>
            <p className="font-impacted text-3xl p-1">BOOK NOW</p>
          </Button>
          <Image
            src={logoMetalImg}
            alt="rusty deadpool logo"
            className="size-32 rotate-[18deg]"
          />
        </span>
      </article>
    </div>
  );
}
