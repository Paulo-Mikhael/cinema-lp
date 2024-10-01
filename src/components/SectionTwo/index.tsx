import logoDrawImg from "../../app/assets/images/deadpool-logo-draw.png";
import logoMetalImg from "../../app/assets/images/deadpool-logo-metal.png";
import userImg1 from "../../app/assets/images/perfil/user-1.png";
import userImg2 from "../../app/assets/images/perfil/user-2.png";
import userImg4 from "../../app/assets/images/perfil/user-4.png";
import filmImg from "../../app/assets/images/film.png";
import Image from "next/image";
import RedArrow from "../RedArrow";
import BlackArrow from "../BlackArrow";

export default function SectionTwo() {
  return (
    <section className="w-full h-[2000px] pt-10 relative bg-main-white text-main-black">
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
            <p className="tracking-theme">REALEASE</p>
            <p className="tracking-theme">DATE</p>
          </div>
          <h1 className="w-[566px] text-lg mt-3 ">
            PART B. Deadpool 3 is scheduled to be realeased on United States on
            May 3, 2024. It was previously scheduled for September 6 of that
            year, and then November 6. It was be part of Phase Five of the MCU.
          </h1>
        </span>
      </span>
      <span className="w-full flex justify-center mt-10">
        <div className="w-full flex flex-col items-center gap-5">
          <p className="font-impact text-center text-[50px] w-[800px]">
            DEADPOOL III: RELEASE DATE, CAST, AND EVERTHING ABOUT THE FILM!
          </p>
          <div className="w-full flex justify-between px-10 items-start">
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
          </div>
        </div>
      </span>
    </section>
  );
}
