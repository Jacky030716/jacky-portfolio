import { motion } from "motion/react";

export const TechNode = ({
  icon: Icon,
  color,
  size = 32,
}: {
  icon: any;
  color: string;
  size?: number;
}) => {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="bg-zinc-800 dark:bg-white rounded-2xl p-4 shadow-md hover:shadow-xl"
      whileHover={{ scale: 1.15, rotate: 3 }}
      variants={itemVariants}
    >
      <Icon size={size} color={color} />
    </motion.div>
  );
};
