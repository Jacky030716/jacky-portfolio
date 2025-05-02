"use client";

import { motion } from "motion/react";
import { textVariant } from "@/constants/variants";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { experiences } from "@/constants/experiences";
import { TimelineItem } from "../components/TimelineItem";
import { StaticImageData } from "next/image";

type MobileTimelineItemProps = {
  title: string;
  date: string;
  description: string;
  icon: StaticImageData;
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full lg:min-h-screen mt-5 flex flex-col"
    >
      <motion.div
        variants={textVariant(0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <p className="section-sub">My Working Experiences Before</p>
        <h2 className="section-main">Experiences</h2>
      </motion.div>

      {/* Timeline for lg screens and above */}
      <div className="hidden lg:flex flex-1 w-full flex-col gap-5 mt-12">
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

      {/* Mobile/Tablet view - single column layout */}
      <div className="lg:hidden flex flex-1 w-full flex-col gap-8 mt-8">
        {experiences.map((experience, i) => (
          <MobileTimelineItem
            key={i}
            date={experience.date}
            title={experience.title}
            description={experience.description}
            icon={experience.icon}
          />
        ))}
      </div>
    </section>
  );
};

// New component for mobile/tablet view
const MobileTimelineItem = ({
  title,
  date,
  description,
  icon,
}: MobileTimelineItemProps) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-tertiary rounded-lg p-5 relative">
        <div className="flex items-center gap-4 mb-3">
          <div className="size-10 rounded-full bg-slate-300 flex items-center justify-center flex-shrink-0">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
            >
              <img src={icon.src} alt="icon" className="size-6" />
            </motion.div>
          </div>
          <div>
            <h3 className="text-xl text-white font-bold">{title}</h3>
            <span className="text-sm font-semibold text-blue-300">{date}</span>
          </div>
        </div>
        <p className="text-slate-300 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default Experience;
