import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "../../assets";
import { menuItems } from "../../../constants";
import { useEffect } from "react";

interface MobileNavProps {
  opened: boolean;
  onClose: () => void;
  onSelected?: (item: string) => void;
}
export function MobileNav({ opened, onClose }: MobileNavProps) {
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
          className="w-full h-screen flex justify-center items-center bg-white fixed top-0 right-0 z-10 sm:hidden"
        >
          <CloseIcon onClick={onClose} className="absolute top-0 right-0 m-3" />
          <div className="flex flex-col gap-6 items-center">
            {menuItems.map((item, i) => {
              return (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => {
                    // onSelected(item);
                    onClose();
                  }}
                  initial={{ opacity: 0, translateX: 150 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ delay: (i + 1) * 0.1, type: "just" }}
                  className="text-4xl uppercase text-gray-800 font-ptsans p-4 hover:rounded-lg hover:bg-slate-950 hover:text-slate-50 select-none"
                >
                  {item}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
