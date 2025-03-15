"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { textVariant } from "@/constants/variants";
import { Canvas } from "@react-three/fiber";
import { TechStackScene } from "../components/TechStackScene";
import CanvasLoader from "@/components/CanvasLoader";

const Tech = () => {
  const groupRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const isInView = useInView(groupRef, { once: true, amount: 0.4 });

  useEffect(() => {
    if (isInView) {
      setExpanded(true);
    }

    return () => {
      setExpanded(false);
    };
  }, [isInView]);

  return (
    <section className="w-full mt-5 h-screen flex flex-col" id="tech">
      <motion.div
        variants={textVariant(0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <p className="section-sub">What I'm Expertise With</p>
        <h2 className="section-main">Tech Stacks</h2>
      </motion.div>

      <div className="flex-1 w-full mt-8" ref={groupRef}>
        <Canvas camera={{ position: [0, 0, 19], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <pointLight position={[0, -2, 0]} intensity={2.5} />
          <Suspense fallback={<CanvasLoader />}>
            <TechStackScene expanded={expanded} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Tech;
