"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { fadeIn, staggerContainer, textVariant } from "@/constants/variants";
import Image, { StaticImageData } from "next/image";
import { services } from "@/constants";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";

type ServiceCardProps = {
  title: string;
  icon: StaticImageData;
  index: number;
};

const ServiceCard = ({ title, icon, index }: ServiceCardProps) => {
  return (
    <Tilt className="flex-1 w-full">
      <motion.div
        variants={fadeIn({
          direction: "right",
          type: "spring",
          delay: 0.5 * index,
          duration: 0.75,
        })}
        className="w-full green-pink-gradient dark:border-slate-800 p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary dark:bg-slate-200 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <Image src={icon} alt="title" className="size-20 object-cover" />
          <h3 className="text-white dark:text-black text-xl font-semibold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <section id="about" className="flex flex-col w-full mt-5">
      <div>
        <motion.div
          variants={textVariant(0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <p className="section-sub">Introduction</p>
          <h2 className="section-main">Overview</h2>
        </motion.div>
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeIn({
            direction: "down",
            type: "spring",
            delay: 0.5,
            duration: 2.5,
          })}
          className="mt-4 text-secondary md:text-lg text-base sm:text-sm leading-[30px]"
        >
          I am a dedicated full-stack developer with extensive experience in
          creating modern web applications. My expertise lies in leveraging
          technologies to build responsive, user-friendly, and high-performance
          solutions. I am deeply passionate about crafting seamless digital
          experiences and continuously strive to enhance my skills by staying
          informed about the latest advancements in web development. My
          commitment to learning and growth ensures that I remain adaptable and
          capable of delivering innovative solutions to meet evolving industry
          demands.
        </motion.p>
      </div>

      <motion.div
        className="w-full mt-20 grid lg:grid-cols-4 sm:grid-cols-2 justify-center sm:gap-10 gap-6"
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.1, 0.5)}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </section>
  );
};

export default About;
