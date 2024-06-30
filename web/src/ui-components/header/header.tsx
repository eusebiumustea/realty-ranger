import { useState } from "react";
import { Logo, MenuIcon } from "../assets";
import { PrimaryButton } from "../button";
import { MobileNav } from "./mobile-nav";
import { NavBar } from "./nav-bar";
import { WelcomeMessage } from "./welcome-message";
import { FilterSection } from "./filter-section";

export function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <MobileNav opened={mobileMenu} onClose={() => setMobileMenu(false)} />
      <img
        className="w-full h-screen object-cover absolute -z-20 select-none"
        src="https://www.ro.kayak.com/rimg/dimg/81/ee/e112fbd1-city-27633-1656c96ae00.jpg?width=1366&height=768&xhint=1395&yhint=650&crop=true"
      />
      <div
        id="home"
        className="w-full h-screen absolute -z-10 bg-black opacity-[0.35] select-none"
      />
      <div className="flex flex-col items-center w-full h-screen gap-5 md:gap-20 justify-center p-4">
        <div className="flex flex-row justify-between w-full p-2 sm:p-6 absolute top-0">
          <Logo className="cursor-pointer" />
          <NavBar />
          <MenuIcon onClick={() => setMobileMenu(true)} className="sm:hidden" />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-14">
          <WelcomeMessage
            subtitle="Maximizing occupancy and profitability for over 50 years."
            title="Managing properties. And
expectations."
          />
          <PrimaryButton theme="light">learn more</PrimaryButton>
        </div>
        <FilterSection />
      </div>
    </>
  );
}
