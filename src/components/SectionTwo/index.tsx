import logoDrawImg from "../../app/assets/images/deadpool-logo-draw.png";
import Image from "next/image";

export default function SectionTwo() {
  return (
    <section className="w-full h-screen pt-10 relative bg-main-white text-main-black">
      <span className="w-full h-64 flex items-center justify-center relative">
        <p className="font-impact text-[7rem]">DIRECTED</p>
        <p className="text-[5rem] mx-10 mt-20">BY</p>
        <p className="font-impact text-[7rem] mt-32">SHAWN LEVY</p>
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
    </section>
  );
}
