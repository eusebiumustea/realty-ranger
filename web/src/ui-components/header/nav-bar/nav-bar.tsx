import { useNavigate } from "react-router-dom";
import { menuItems } from "../../../constants";

export function NavBar() {
  const nav = useNavigate();
  return (
    <div className="hidden flex-row gap-6 items-center sm:flex">
      {menuItems.map((item, i) => {
        const focused = location.pathname === item;
        return (
          <button
            onClick={() => nav(item)}
            className={`select-none uppercase font-inter cursor-pointer px-3 py-1 border-[#fff] rounded-xl text-xs ${
              focused && "bg-white"
            } ${
              focused ? "text-black" : "text-white"
            } hover:bg-white hover:text-black transition-all`}
            key={i}
          >
            {item.slice(1) || "Home"}
          </button>
        );
      })}
    </div>
  );
}
