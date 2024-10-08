import clsx from "clsx";
import type { ElementType, MutableRefObject, ReactNode } from "react";

interface ButtonProps {
  icon?: ElementType;
  children?: ReactNode;
  variant?: "white-full" | "white-outlined" | "black-full" | "black-outlined";
  big?: boolean;
  className?: string;
  reference?: MutableRefObject<HTMLButtonElement | null>;
}

export default function Button({
  icon: Icon,
  children,
  variant = "white-full",
  className,
  reference,
}: ButtonProps) {
  return (
    <button
      ref={reference}
      type="button"
      className={clsx(
        `${className} cursor-pointer rounded-full flex gap-1 items-center`,
        {
          "bg-main-white": variant === "white-full",
          "bg-transparent border border-main-white":
            variant === "black-outlined",
          "p-2": !children,
          "px-4 py-1": children,
        }
      )}
    >
      {children}
      {Icon && (
        <Icon
          className={clsx({
            "text-main-black size-6": variant === "white-full",
            "text-main-white size-5": variant === "black-outlined",
          })}
        />
      )}
    </button>
  );
}
