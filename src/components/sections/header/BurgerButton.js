import React, { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BurgerButton = memo(({ isOpen, toggleMenu }) => {
  return (
    <motion.button
      className="[@media(min-width:960px)]:hidden z-50 w-10 h-10 flex items-center justify-center focus:outline-none"
      onClick={toggleMenu}
      aria-label="Toggle menu"
      whileHover={{ rotate: 10 }}
      whileTap={{ scale: 0.95 }}>
      <div className="relative w-6 h-6">
        <AnimatePresence>
          {!isOpen ? (
            <motion.div
              key="burger"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col justify-between h-full z-50">
              <motion.span
                className="h-[1.5px] w-[32px] bg-white block"
                layout
              />
              <motion.span
                className="h-[1.5px] w-6 bg-white block ml-[8px]"
                layout
              />
              <motion.span
                className="h-[1.5px] w-[32px] bg-white block"
                layout
              />
              <motion.span
                className="h-[1.5px] w-6 bg-white block ml-[8px]"
                layout
              />
            </motion.div>
          ) : (
            <motion.div
              key="x"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center z-50">
              <motion.span
                className="h-[1.5px] w-[32px] bg-white absolute transform rotate-45"
                layout
              />
              <motion.span
                className="h-[1.5px] w-[32px] bg-white absolute transform -rotate-45"
                layout
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
});

BurgerButton.displayName = "BurgerButton";

export default BurgerButton;
