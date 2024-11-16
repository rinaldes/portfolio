import { motion } from "framer-motion";
import { TreeConnectionProps } from "@/types/skills";

export const TreeConnection = ({
  startX,
  startY,
  endX,
  endY,
  animated = true,
  color,
  isHighlighted,
}: TreeConnectionProps) => {
  // Calculate the path
  const midX = (startX + endX) / 2;
  const path = `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;

  const baseColor = color || "hsl(var(--primary))";
  const baseOpacity = isHighlighted ? "0.8" : "0.35";

  return (
    <motion.path
      d={path}
      stroke={baseColor}
      strokeOpacity={baseOpacity}
      strokeWidth={isHighlighted ? 3 : 2}
      fill="none"
      initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
      animate={{ pathLength: 1 }}
      transition={{ 
        duration: 0.5, 
        ease: "easeInOut",
      }}
      className="transition-all duration-300"
    />
  );
};
