import { Logo } from "../assets";
import { Button } from "../button";
import { NavBar } from "./nav-bar";
import { WelcomeMessage } from "./welcome-message";

export function Header() {
  return (
    <>
      <img
        className="w-full h-[60%] object-cover absolute -z-20"
        src="https://www.ro.kayak.com/rimg/dimg/81/ee/e112fbd1-city-27633-1656c96ae00.jpg?width=1366&height=768&xhint=1395&yhint=650&crop=true"
      />
      <div className="w-full h-[60%] absolute -z-10 bg-black opacity-[0.35]" />
      <div className="flex flex-col items-center absolute w-full top-[26%] gap-5">
        <WelcomeMessage
          subtitle="Maximizing occupancy and profitability for over 50 years."
          title="Managing properties. And
expectations."
        />
        <Button theme="light">learn more</Button>
      </div>

      <div className="flex flex-row justify-between w-full p-6">
        <Logo className="cursor-pointer" />
        <NavBar />
      </div>
    </>
  );
}
