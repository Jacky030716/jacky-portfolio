"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navlinks } from "@/constants/navlinks";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 88;
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
      <nav
        className={`container-space w-full flex items-center z-40 bg-primary dark:bg-white transition-opacity duration-300 max-lg:fixed top-0 ${
          scrolled ? "lg:opacity-0" : "lg:opacity-100"
        }`}
      >
        <div className="w-full h-12 flex justify-between items-center">
          <NavbarContent />
        </div>
      </nav>

      <AnimatePresence>
        {scrolled && (
          <motion.nav
            className="w-full lg:flex hidden items-center justify-center mx-auto fixed top-4 left-1/2 z-50 bg-slate-900 dark:bg-gray-100 rounded-full py-4 px-8 shadow-sm shadow-slate-700 dark:shadow-slate-200 "
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
  const [isActive, setIsActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    setIsActive(id);
    setIsOpen(false); // Close mobile menu after click
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsActive("");
    setIsOpen(false); // Close mobile menu after click
  };

  return (
    <>
      <Link
        prefetch
        href="/"
        className="flex items-center gap-2"
        onClick={scrollToTop}
      >
        <span className="text-white dark:text-black text-lg font-bold cursor-pointer">
          Jacky
        </span>
      </Link>

      <ul className="list-none hidden lg:flex flex-row items-center gap-8">
        {navlinks.map((link) => (
          <li key={link.id}>
            <button
              className={`${
                isActive === link.id ? "text-white" : "text-secondary"
              } hover:text-white text-base font-medium cursor-pointer transition-colors duration-300`}
              onClick={() => handleLinkClick(link.id)}
            >
              {link.title}
            </button>
          </li>
        ))}

        <ThemeToggle />
      </ul>

      {/* Mobile Navigation - visible only on md and below */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="text-white p-2">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-slate-900 border-slate-800 text-white dark:text-black"
          >
            <SheetTitle />
            <SheetDescription />
            <div className="flex flex-col h-full w-full px-6">
              <div className="mt-10 flex flex-col space-y-6">
                {navlinks.map((link) => (
                  <button
                    key={link.id}
                    className={`${
                      isActive === link.id ? "text-white" : "text-secondary"
                    } hover:text-white text-lg font-medium cursor-pointer transition-colors duration-300 text-left`}
                    onClick={() => handleLinkClick(link.id)}
                  >
                    {link.title}
                  </button>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Navbar;
