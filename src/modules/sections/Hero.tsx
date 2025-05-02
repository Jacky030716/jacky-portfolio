"use client";

import { motion } from "motion/react";
import ComputersCanvas from "../components/ComputerCanvas";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0 top-[60px] flex flex-row items-start gap-5">
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="size-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <h1 className="hero-main">
            Hi, I'm <span className="text-[#915eff]">Jacky</span>
          </h1>
          <p className="hero-sub">
            A Full Stack Developer based in{" "}
            <span className="font-semibold text-transparent malaysia-flag-gradient">
              Malaysia
            </span>
          </p>
          <Link
            href="https://drive.google.com/uc?export=download&id=1ful8S12tjWjfFontXSEDqyim7ULOVCsy"
            rel="noopener noreferrer"
            className="z-50"
          >
            <motion.button
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.5,
                bounce: 0.5,
              }}
              className="border-[1.5px] max-lg:text-sm transition-colors duration-200 dark:border-black border-white dark:text-black text-white py-3 px-6 mt-12 rounded-full cursor-pointer flex items-center gap-2 group"
            >
              <FaFilePdf className="size-4 group-active:rotate-360 duration-1000 transition-transform" />
              My Resume{" "}
            </motion.button>
          </Link>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute sm:bottom-0 bottom-32 w-full flex justify-center items-center">
        <Link href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
