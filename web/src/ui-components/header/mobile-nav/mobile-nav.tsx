import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { menuItems } from "../../../constants";
import { CloseIcon, Logo } from "../../assets";

interface MobileNavProps {
  opened: boolean;
  onClose: () => void;
  onSelected?: (item: string) => void;
}
export function MobileNav({ opened, onClose }: MobileNavProps) {
  const nav = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (opened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [opened]);
  return (
    <AnimatePresence>
      {opened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-screen flex justify-center items-center bg-white fixed top-0 right-0 z-20 sm:hidden"
        >
          <Logo theme="dark" svg={{ className: "top-0 absolute left-0 m-3" }} />
          <CloseIcon onClick={onClose} className="absolute top-0 right-0 m-3" />
          <div className="flex flex-col gap-6 items-center">
            {menuItems.map((item, i) => {
              const focused = location.pathname === item;
              return (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    nav(item);
                    onClose();
                  }}
                  initial={{ opacity: 0, translateX: 150 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ delay: (i + 1) * 0.1, type: "just" }}
                  className={`text-4xl uppercase ${
                    focused ? "text-slate-50" : "text-gray-800"
                  } font-ptsans p-4 rounded-lg hover:rounded-lg ${
                    focused && "bg-slate-950"
                  } hover:bg-slate-950 hover:text-slate-50 select-none`}
                >
                  {item.slice(1) || "Home"}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
