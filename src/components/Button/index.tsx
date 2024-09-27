import clsx from "clsx";
import { ElementType, ReactNode } from "react";

interface ButtonProps { 
  icon?: ElementType, 
  children?: ReactNode,
  variant?: "white-full" | "white-outlined" | "black-full" | "black-outlined"
}

export default function Button({ icon: Icon, children, variant = "white-full" }: ButtonProps) {
  return (
    <button className={clsx(
      "cursor-pointer rounded-full",
      {
        "bg-main-white p-2": variant === "white-full",
        "bg-main-black p-2 border border-main-white": variant === "black-outlined",
      }
    )}>
      {children}
      {Icon && (
        <Icon className={clsx(
          {
            "text-main-black size-6": variant === "white-full",
            "text-main-white size-5": variant === "black-outlined"
          }
        )} />
      )}
    </button>
  );
}