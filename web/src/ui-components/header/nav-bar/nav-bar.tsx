import { menuItems } from "../../../constants";

export function NavBar() {
  return (
    <div className="hidden flex-row gap-6 items-center sm:flex">
      {menuItems.map((item, i) => {
        return (
          <a
            href={`#${item}`}
            className="select-none uppercase font-inter cursor-pointer px-3 py-1 border-[#fff] text-white rounded-xl text-xs hover:bg-white hover:text-black transition-all"
            key={i}
          >
            {item}
          </a>
        );
      })}
    </div>
  );
}
