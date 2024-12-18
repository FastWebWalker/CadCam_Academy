import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./header/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
            </a>
          </div> */}
          <Logo />
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {["Home", "Features", "Pricing", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu">
            <div className="relative w-6 h-6">
              <motion.span
                className="absolute h-0.5 w-6 bg-gray-600 transform transition-all duration-300"
                style={{ top: "calc(50% - 2px)" }}
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  translateY: isMenuOpen ? 0 : -8,
                }}
              />
              <motion.span
                className="absolute h-0.5 w-6 bg-gray-600 transform transition-all duration-300"
                style={{ top: "calc(50% - 2px)" }}
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  translateY: isMenuOpen ? 0 : 8,
                }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden">
              <ul className="py-4 space-y-4">
                {["Home", "Features", "Pricing", "Contact"].map((item) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}>
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
