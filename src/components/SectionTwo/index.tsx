import logoDrawImg from "../../app/assets/images/deadpool-logo-draw.png";
import logoMetalImg from "../../app/assets/images/deadpool-logo-metal.png";
import deadpoolImg from "../../app/assets/images/deadpool-final.png";
import mapImg from "../../app/assets/images/map.png";
import userImg1 from "../../app/assets/images/perfil/user-1.png";
import userImg2 from "../../app/assets/images/perfil/user-2.png";
import userImg4 from "../../app/assets/images/perfil/user-4.png";
import filmImg from "../../app/assets/images/film.png";
import Image from "next/image";
import RedArrow from "../RedArrow";
import BlackArrow from "../BlackArrow";
import Triangle from "../Triangle";
import { ArrowRight } from "lucide-react";

export default function SectionTwo() {
  return (
    <section className="w-full h-[1150px] flex flex-col items-center pt-10 relative bg-main-white text-main-black">
      <span className="w-full h-64 flex items-center justify-center relative">
        <p className="font-impacted text-[7rem]">DIRECTED</p>
        <p className="text-[5rem] mx-10 mt-20">BY</p>
        <p className="font-impacted text-[7rem] mt-32">SHAWN LEVY</p>
        <p className="absolute tracking-theme bottom-0 left-10">
          GALLERY 07:32
        </p>
        <span className="absolute top-0 right-10">
          <div className="flex gap-3 items-center">
            <Image
              className="rounded-full size-8"
              src={logoDrawImg}
              alt="Drawed deadpool logo"
            />
            <p className="tracking-theme">REALEASE DATE</p>
          </div>
          <h1 className="w-[566px] text-lg mt-3 ">
            PART B. Deadpool 3 is scheduled to be realeased on United States on
            May 3, 2024. It was previously scheduled for September 6 of that
            year, and then November 6. It was be part of Phase Five of the MCU.
          </h1>
        </span>
      </span>
      <span className="w-full flex justify-center mt-10 relative">
        <div className="w-full px-10 flex flex-col items-center gap-5">
          <p className="font-impact text-center text-[50px] w-[800px]">
            DEADPOOL III: RELEASE DATE, CAST, AND EVERTHING ABOUT THE FILM!
          </p>
          <div className="w-full flex justify-between items-start">
            <div className="flex gap-2">
              <Image
                src={userImg1}
                alt="perfil photo of a user"
                className="size-10 rounded-full"
              />
              <Image
                src={userImg2}
                alt="perfil photo of a user"
                className="size-10 rounded-full"
              />
              <div className="size-10 bg-main-red rounded-full" />
              <Image
                src={userImg4}
                alt="perfil photo of a user"
                className="size-10 rounded-full"
              />
            </div>
            <div className="w-[300px] flex flex-col items-center gap-3">
              <BlackArrow />
              <RedArrow />
            </div>
            <Image
              className="w-[120px] rotate-[30deg]"
              src={logoMetalImg}
              alt="Deadpool logo"
            />
          </div>
          <span className="w-full flex justify-between">
            <span>
              <div className="flex gap-3 items-center">
                <Image
                  className="rounded-full size-8"
                  src={logoDrawImg}
                  alt="Drawed deadpool logo"
                />
                <p className="tracking-theme">X-MAN</p>
              </div>
              <h1 className="max-w-[300px] flex-grow text-lg mt-3 ">
                PART C. Deadpool, AKA Wade Wilson, AKA the Merc with a Mouth,
                first made his debut in the much-maligned X-Man Origins:
                Wolverine
              </h1>
            </span>
            <div className="w-[380px] p-3 pt-10 relative flex flex-col items-center bg-gradient-to-b from-main-gray to-main-black text-main-white rounded-2xl">
              <Image
                src={filmImg}
                alt="film"
                className="size-12 absolute -top-5"
              />
              <div className="flex flex-col items-center">
                <p className="tracking-theme text-xl">FILM</p>
                <p className="font-impact text-3xl">DEADPOOL III</p>
              </div>
              <div className="w-full mt-7 flex gap-1 flex-wrap justify-between">
                <Image
                  className="w-[170px] h-[170px] rounded-[3rem] flex-grow cursor-pointer"
                  src={mapImg}
                  alt="Cinema's location"
                />
                <div className="w-[170px] h-[170px] rounded-[3rem] flex-grow bg-main-gray flex flex-col gap-1 items-center justify-center text-center">
                  <Triangle />
                  <p className="tracking-theme">CINEMA°</p>
                  <p className="font-impact text-2xl">EL CAPTAIN THEATRE</p>
                </div>
                <div className="w-[170px] h-[90px] rounded-[3rem] flex-grow bg-main-gray flex flex-col items-center justify-center text-center">
                  <p className="tracking-theme">DATE</p>
                  <p className="font-impact text-2xl">MAY 29</p>
                </div>
                <div className="w-[170px] h-[90px] rounded-[3rem] flex-grow bg-main-gray flex flex-col items-center justify-center text-center">
                  <p className="tracking-theme">TIME</p>
                  <p className="font-impact text-2xl">9:30 min</p>
                </div>
              </div>
              <button
                type="button"
                className="w-full bg-main-red py-4 px-6 flex justify-between mt-2 rounded-full"
              >
                BOOK NOW
                <ArrowRight />
              </button>
            </div>
            <span>
              <div className="flex gap-3 items-center">
                <Image
                  className="rounded-full size-8"
                  src={logoDrawImg}
                  alt="Drawed deadpool logo"
                />
                <p className="tracking-theme">PREMIERING</p>
              </div>
              <h1 className="max-w-[300px] flex-grow text-lg mt-3 ">
                PART D. The film was initially announced for September 6, 2024,
                but it later changed, being pushed back to November 8, 2024.
              </h1>
            </span>
          </span>
        </div>
      </span>
      <div className="relative bottom-0 size-56">
        <Image
          className="absolute bottom-0 left-56"
          src={deadpoolImg}
          alt="Deadpool making a heart with him hands"
        />
      </div>
    </section>
  );
}
