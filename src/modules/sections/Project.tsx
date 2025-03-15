"use client";

import { myProjects } from "@/constants";
import { motion } from "motion/react";
import { Suspense, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "@/components/CanvasLoader";
import DemoComputer from "@/components/DemoComputer";
import { textVariant } from "@/constants/variants";
import { BsArrowLeft, BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

const projectCount = myProjects.length;

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const currentProject = myProjects[selectedProject];

  const handleNavigation = (direction: string) => {
    setSelectedProject((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="w-full mt-5" id="projects">
      <motion.div
        variants={textVariant(0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <p className="section-sub">What I've Created So Far</p>
        <h2 className="section-main">Projects</h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col h-fit gap-5 relative sm:p-10 sm:py-10 py-6 px-5 rounded-xl shadow-md shadow-slate-700">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="Spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <Image
              src={currentProject.logo}
              alt="logo"
              className="size-10 shadow-sm"
              width={40}
              height={40}
            />
          </div>

          <div className="flex flex-col gap-5 text-white my-5">
            <motion.p className="text-white text-2xl font-semibold ">
              {currentProject.title}
            </motion.p>
            <p className="sm:text-base text-sm text-slate-400">
              {currentProject.desc}
            </p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, i) => (
                <div key={i}>
                  <tag.icon
                    className="sm:size-10 size-6 text-white"
                    style={{
                      fill: tag.fill,
                    }}
                  />
                </div>
              ))}
            </div>

            <Link
              prefetch
              className="z-10 flex items-center gap-2 cursor-pointer text-slate-400 group"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p className="group-hover:text-white transition-colors duration-150">
                Check Live Site
              </p>
              <BsArrowUpRight className="" />
            </Link>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button
              className="text-white hover:scale-120 transition-transform duration-300 cursor-pointer border rounded-full flex items-center justify-center sm:p-2.5 p-1.5"
              onClick={() => handleNavigation("previous")}
            >
              <BsArrowLeft />
            </button>
            <button
              className="text-white hover:scale-120 transition-transform duration-300 cursor-pointer border rounded-full flex items-center justify-center sm:p-2.5 p-1.5"
              onClick={() => handleNavigation("next")}
            >
              <BsArrowRight />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={2.5} />
            <directionalLight position={[2, 10, 5]} intensity={2} />
            <directionalLight position={[0, -1, 5]} intensity={4} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group
                  scale={1.5}
                  position={[-0.2, -2, 0]}
                  rotation={[0.1, -0.1, 0]}
                >
                  <DemoComputer
                    texture={currentProject.texture}
                    scale={[1.15, 1.15, 1.05]}
                  />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Project;
