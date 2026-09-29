import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export interface RevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  width?: "fit-content" | "100%";
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  width = "100%",
  ...rest
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const getOffset = () => {
    if (shouldReduceMotion || direction === "none") return { x: 0, y: 0 };
    switch (direction) {
      case "up":
        return { x: 0, y: 30 };
      case "down":
        return { x: 0, y: -30 };
      case "left":
        return { x: 30, y: 0 };
      case "right":
        return { x: -30, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: shouldReduceMotion ? 0.1 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      style={{ width }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
