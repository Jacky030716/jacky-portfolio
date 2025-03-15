import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

interface TimelineItemProps {
  title: string;
  date: string;
  description: string;
  position: "left" | "right";
  icon: StaticImageData;
}

export const TimelineItem = ({
  title,
  date,
  description,
  position = "right",
  icon,
}: TimelineItemProps) => {
  const isLeft = position === "left";

  return (
    <motion.div
      className="relative flex items-center justify-between w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Content Box */}
      <div
        className={`flex flex-col ${
          isLeft
            ? "md:mr-auto md:items-end md:pr-8"
            : "md:ml-auto md:items-start md:pl-8"
        } w-full md:w-1/2`}
      >
        <motion.div
          className={`relative flex flex-col gap-3 bg-tertiary min-w-[35vw] rounded-lg p-6 ${
            isLeft ? "mr-12" : "ml-6"
          }`}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-base font-semibold text-blue-300">{date}</span>
          <h3 className="text-2xl text-white font-bold mt-1">{title}</h3>
          <p className="text-slate-300">{description}</p>

          <div
            className={`size-6 absolute top-1/2 transform -translate-y-1/2 bg-tertiary rotate-45 ${
              isLeft ? "-right-3" : "-left-3"
            }`}
          />
        </motion.div>
      </div>

      {/* Icon */}
      <motion.div
        className="absolute left-0 md:left-1/2 size-12 rounded-full bg-slate-300 text-white flex items-center justify-center transform -translate-x-1/2 z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
      >
        <Image src={icon} alt="icon" width={32} height={32} />
      </motion.div>
    </motion.div>
  );
};
