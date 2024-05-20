import { PropsWithChildren } from "react";

interface ButtonProps {
  onClick?: () => void;
  theme?: "light" | "dark";
}
export function Button({
  children,
  onClick,
  theme = "dark",
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={`px-5 py-4 border ${
        theme === "light" ? "border-white" : "border-[#0C4653]"
      } ${
        theme === "light" ? "text-white" : "text-[#0C4653]"
      } uppercase font-inter text-xs ${
        theme === "light" ? "hover:text-[#0C4653]" : "hover:text-white"
      } ${
        theme === "light" ? "hover:bg-white" : "hover:bg-[#0C4653]"
      } transition-all rounded-sm`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
