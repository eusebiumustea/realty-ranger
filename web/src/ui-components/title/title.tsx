import { PropsWithChildren } from "react";
interface TitleProps {
  className?: string;
  color?: string;
}
export function Title({
  children,
  className,
  color = "#3E3E3E",
}: PropsWithChildren<TitleProps>) {
  return (
    <h1
      className={
        `uppercase font-inter text-[30px] 2sm:text-[39px] font-light text-[${color}] ` +
        className
      }
    >
      {children}
    </h1>
  );
}
