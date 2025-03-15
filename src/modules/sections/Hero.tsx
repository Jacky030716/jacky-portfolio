"use client";

import { motion } from "motion/react";
import ComputersCanvas from "../components/ComputerCanvas";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0 top-[60px] flex flex-row items-start gap-5">
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="size-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>
        <div>
          <h1 className="hero-main">
            Hi, I'm <span className="text-[#915eff]">Jacky</span>
          </h1>
          <p className="hero-sub">
            A Full Stack Developer based in{" "}
            <span className="font-semibold text-transparent malaysia-flag-gradient">
              Malaysia
            </span>
          </p>
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
