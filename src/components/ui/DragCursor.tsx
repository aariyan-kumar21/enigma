import { useEffect, useState, type RefObject } from "react";
import { motion } from "framer-motion";

export interface DragCursorProps {
  label?: string;
  targetRef?: RefObject<HTMLElement | null>;
}

export function DragCursor({ label = "HOLD & DRAG" }: DragCursorProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full bg-[var(--blue-500)] text-white text-[10px] font-mono font-bold tracking-widest uppercase shadow-2xl"
      style={{
        width: 80,
        height: 80,
        x: mousePosition.x - 40,
        y: mousePosition.y - 40,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {label}
    </motion.div>
  );
}
