"use client";

import { frameworks, programmingLanguages, tools } from "@/constants/tech";
import { motion } from "framer-motion";
import { TechNode } from "../components/TechNode";

const Tech = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  return (
    <section className="w-full mt-5 flex flex-col" id="tech">
      <motion.div
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={{
          hidden: { opacity: 0, y: -50 },
          show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <p className="section-sub">What I'm Expertise With</p>
        <h2 className="section-main">Tech Stacks</h2>
      </motion.div>

      <div className="flex-1 w-full flex flex-col gap-12 mt-10 text-white">
        {/* Programming Languages */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-2xl font-semibold mx-auto text-gray-300 dark:text-gray-800">
            Programming Languages
          </h3>
          <motion.div
            className="flex gap-6 mt-5 flex-wrap justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {programmingLanguages.map((lang, index) => (
              <TechNode key={index} icon={lang.icon} color={lang.color} />
            ))}
          </motion.div>
        </div>

        {/* Frameworks */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-2xl font-semibold mx-auto text-gray-300 dark:text-gray-800">
            Frameworks
          </h3>
          <motion.div
            className="flex gap-6 mt-5 flex-wrap justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {frameworks.map((framework, index) => (
              <TechNode
                key={index}
                icon={framework.icon}
                color={framework.color}
              />
            ))}
          </motion.div>
        </div>

        {/* Tools */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-2xl font-semibold mx-auto text-gray-300 dark:text-gray-800">
            Databases & Tools
          </h3>
          <motion.div
            className="flex gap-6 mt-5 flex-wrap justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {tools.map((tool, index) => (
              <TechNode key={index} icon={tool.icon} color={tool.color} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
