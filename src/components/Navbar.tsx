"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navlinks } from "@/constants/navlinks";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 48;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <>
      {/* Fixed navbar that's always present (for SEO) but visually hidden when scrolled */}
      <nav
        className={`container-space w-full flex items-center z-40 bg-primary transition-opacity duration-300 ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="w-full h-12 flex justify-between items-center">
          <NavbarContent />
        </div>
      </nav>

      <AnimatePresence>
        {scrolled && (
          <motion.nav
            className="w-full flex items-center justify-center mx-auto fixed top-4 left-1/2 z-50 bg-slate-900 rounded-full py-4 px-8 shadow-sm shadow-slate-700"
            initial={{ y: -50, x: "-50%", width: "100%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", width: "50%", opacity: 1 }}
            exit={{ y: -50, x: "-50%", opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 30,
              duration: 0.2,
            }}
          >
            <div className="w-full flex justify-between items-center">
              <NavbarContent />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

const NavbarContent = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Link
        prefetch
        href="/"
        className="flex items-center gap-2"
        onClick={scrollToTop}
      >
        <span className="text-white text-lg font-bold cursor-pointer">
          Jacky
        </span>
      </Link>

      <ul className="list-none hidden sm:flex flex-row gap-8">
        {navlinks.map((link) => (
          <li key={link.id}>
            <Link
              prefetch
              className={`text-secondary hover:text-white text-base font-medium cursor-pointer transition-colors duration-300`}
              href={`#${link.id}`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
