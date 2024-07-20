import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Logo, MenuIcon } from "../assets";
import { MobileNav } from "./mobile-nav";
import { NavBar } from "./nav-bar";

export function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const nav = useNavigate();
  return (
    <>
      <MobileNav opened={mobileMenu} onClose={() => setMobileMenu(false)} />
      <div className="flex flex-row justify-between w-full fixed z-10 top-0 left-0 p-2">
        <div
          className={`w-screen h-full absolute top-0 left-0 -z-10 bg-black opacity-[0.35] select-none`}
        />
        <Logo svg={{ className: "cursor-pointer", onClick: () => nav("/") }} />
        <NavBar />
        <MenuIcon onClick={() => setMobileMenu(true)} className="sm:hidden" />
      </div>
      <Outlet />
    </>
  );
}
