"use client";

import { motion } from "motion/react";
import { textVariant } from "@/constants/variants";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { experiences } from "@/constants/experiences";
import { TimelineItem } from "../components/TimelineItem";

const Experience = () => {
  return (
    <section id="experience" className="w-full min-h-screen mt-5 flex flex-col">
      <motion.div
        variants={textVariant(0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <p className="section-sub">My Working Experiences Before</p>
        <h2 className="section-main">Experiences</h2>
      </motion.div>

      <div className="flex-1 w-full flex flex-col gap-5 mt-12">
        <ExperienceTimeline>
          {experiences.map((experience, i) => (
            <TimelineItem
              date={experience.date}
              title={experience.title}
              description={experience.description}
              position={i % 2 === 0 ? "left" : "right"}
              icon={experience.icon}
              key={i}
            />
          ))}
        </ExperienceTimeline>
      </div>
    </section>
  );
};

export default Experience;
