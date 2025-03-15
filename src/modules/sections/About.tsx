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
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <Image src={icon} alt="title" className="size-20 object-cover" />
          <h3 className="text-white text-xl font-semibold text-center">
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
          className="mt-4 text-secondary text-lg leading-[30px]"
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
        className="w-full mt-20 grid lg:grid-cols-4 grid-cols-2 justify-between sm:gap-10 gap-6"
        initial="hidden"
        animate="show"
        variants={staggerContainer(0.1, 0.5)}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>

      <Link
        href="https://drive.google.com/uc?export=download&id=1vk1w0nnnEh-g5daZ1ph1sILKvko3vIH3"
        rel="noopener noreferrer"
        className="mx-auto"
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
          className="border-[1.5px] transition-colors duration-200 text-white py-3 px-6 mt-12 rounded-full cursor-pointer flex items-center gap-2 group"
        >
          <FaFilePdf className="size-4 group-active:rotate-360 duration-1000 transition-transform" />
          Download Resume{" "}
        </motion.button>
      </Link>
    </section>
  );
};

export default About;
