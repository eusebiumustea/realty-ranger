import { PropsWithChildren, ReactNode } from "react";

interface PrimaryButtonProps {
  onClick?: () => void;
  theme?: "light" | "dark";
  additionalStyle?: string;
}
interface SecoundaryButtonProps {
  onClick?: () => void;
  icon?: ReactNode;
  text: string;
  additionalStyle?: string;
}

export function PrimaryButton({
  children,
  onClick,
  theme = "dark",
  additionalStyle,
}: PropsWithChildren<PrimaryButtonProps>) {
  return (
    <button
      className={`px-5 py-3 border ${
        theme === "light" ? "border-white" : "border-[#0C4653]"
      } ${
        theme === "light" ? "text-white" : "text-[#0C4653]"
      } uppercase font-inter text-xs ${
        theme === "light" ? "hover:text-[#0C4653]" : "hover:text-white"
      } ${
        theme === "light" ? "hover:bg-white" : "hover:bg-[#0C4653]"
      } transition-all rounded-sm select-none shadow-lg ${additionalStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export function FilledButton({
  children,
  onClick,
  additionalStyle,
}: PropsWithChildren<PrimaryButtonProps>) {
  return (
    <button
      className={`px-5 py-2 font-inter uppercase text-sm font-medium border bg-[#0C4653] text-[#fff] transition-all rounded-sm select-none hover:shadow-2xl ${additionalStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export function SecoundaryButton({
  icon,
  text,
  onClick,
  additionalStyle,
}: SecoundaryButtonProps) {
  return (
    <button
      className={
        "flex flex-row items-center justify-center py-3 px-7 bg-[#FF970F] gap-4 rounded-sm select-none hover:bg-[#ff970fd8] transition-all" +
        additionalStyle
      }
      onClick={onClick}
    >
      {icon}
      <h1 className="font-inter text-white text-sm font-medium">{text}</h1>
    </button>
  );
}
