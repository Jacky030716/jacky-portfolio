import { motion } from "framer-motion";

export const TechNode = ({
  icon: Icon,
  color,
  size = 32,
}: {
  icon: any;
  color: string;
  size?: number;
}) => {
  return (
    <motion.div
      className="bg-white dark:bg-white rounded-2xl p-4 shadow-md hover:shadow-xl"
      whileHover={{ scale: 1.15, rotate: 3 }}
      variants={{
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        show: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      }}
    >
      <Icon size={size} color={color} />
    </motion.div>
  );
};
