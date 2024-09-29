import { AlignRight, Projector, Search, User } from "lucide-react";
import Button from "../Button";

export default function Header() {
  return (
    <header className="min-w-full fixed flex items-center justify-between px-7 pt-6 z-50">
      <p className="text-[40px] flex gap-1 items-center font-impact">
        CINE
        <Projector className="text-main-red size-11" />
        NIGHTLY
      </p>
      <nav className="tracking-theme flex items-center">
        <p className="cursor-pointer">TOP CASTS</p>
        <span className="size-1 rounded-full bg-main-white mx-4" />
        <p className="cursor-pointer">PRODUCTION</p>
        <span className="size-1 rounded-full bg-main-white mx-4" />
        <p className="cursor-pointer">BOX OFFICE</p>
        <span className="size-1 rounded-full bg-main-white mx-4" />
        <p className="cursor-pointer">IMAX</p>
      </nav>
      <div className="flex items-center gap-3">
        <Button variant="black-outlined" icon={Search} />
        <Button variant="black-outlined" icon={User} />
        <Button variant="white-full" icon={AlignRight} />
      </div>
    </header>
  );
}
