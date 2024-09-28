import Button from "../Button";
import deadpoolImg from "../../app/assets/images/deadpool.png";
import Image from "next/image";

export default function Hero() {
  const defaultStyle = "w-full px-7";

  return (
    <div className="relative">
      <div
        className={`${defaultStyle} flex items-center justify-between absolute top-[160px]`}
      >
        <div className="w-full flex gap-3">
          <Button variant="black-outlined">ACTION</Button>
          <Button variant="black-outlined">COMEDY</Button>
          <Button variant="black-outlined">SCI-FI</Button>
        </div>
        <p className="font-impact text-nowrap">RELEASE IMAX 3, 2024</p>
      </div>
      <div
        className={`${defaultStyle} absolute top-[260px] flex justify-between z-10 gap-52`}
      >
        <div className="flex flex-grow justify-between">
          <p className="font-impact text-3xl">RYAN REYNOLDS</p>
          <p className="font-impact text-3xl">KARAN SONI</p>
        </div>
        <div className="flex flex-grow justify-between">
          <p className="font-impact text-3xl">EMMA CORRIN</p>
          <p className="font-impact text-3xl">HUGH JACKMAN</p>
        </div>
      </div>
      <div
        className={`${defaultStyle} absolute top-[260px] flex justify-center z-10 gap-52`}
      >
        <p className="font-impact text-[300px]">DEADPOOL</p>
        <Image
          className="absolute top-20"
          src={deadpoolImg}
          alt="deadpool image"
        />
      </div>
      <div className="w-full flex justify-center z-[1]">
        <div className="bg-main-gray w-full h-[2px] absolute top-[230px]" />
        <div className="bg-main-gray w-full h-[2px] absolute top-[570px]" />
        <div className="bg-main-gray w-full h-[2px] absolute top-[230px] rotate-90" />
        <div className="bg-transparent border-[2px] border-main-gray w-[48rem] h-[48rem] absolute top-[100px] rounded-full" />
        <div className="bg-main-red w-[32rem] h-[32rem] absolute top-[280px] rounded-full" />
      </div>
    </div>
  );
}
