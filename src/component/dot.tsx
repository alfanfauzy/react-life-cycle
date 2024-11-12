import React from "react";
import { motion } from "framer-motion";

type DotProps = {
  count: number;
  text: string;
};

const Dot = (props: DotProps) => {
  const { count, text } = props;
  return (
    <motion.div
      key={count} // This will change on rerender, re-triggering the animation
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 0, 1] }} // Blinking effect
      transition={{
        duration: 1.5, // Increase duration for a smoother effect
        ease: "easeInOut", // Smooth easing function
      }}
      className="flex gap-1 items-center text-xs"
    >
      <div className="flex gap-1 w-2 h-2 rounded-full bg-red-500" />
      {text}
    </motion.div>
  );
};

export default Dot;
