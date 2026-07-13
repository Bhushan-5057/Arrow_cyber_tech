"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps extends React.ComponentPropsWithoutRef<typeof motion.div> {
  children: ReactNode;
  className?: string;
  glowColor?: "cyan" | "purple" | "blue" | "none";
  hoverEffect?: boolean;
}

export default function Card({
  children,
  className,
  glowColor = "cyan",
  hoverEffect = true,
  ...props
}: CardProps) {
  const glowStyles = {
    cyan: "hover:border-brand-cyan/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]",
    purple: "hover:border-brand-purple/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]",
    blue: "hover:border-brand-blue/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
    none: "",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
      className={clsx(
        "glass-panel rounded-xl p-6 transition-all duration-300 relative overflow-hidden group",
        hoverEffect && "hover:-translate-y-1",
        hoverEffect && glowColor !== "none" && glowStyles[glowColor],
        className
      )}
    >
      {hoverEffect && glowColor !== "none" && (
        <span
          className={clsx(
            "absolute top-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-gradient-to-r",
            glowColor === "cyan" && "from-brand-cyan to-transparent",
            glowColor === "purple" && "from-brand-purple to-transparent",
            glowColor === "blue" && "from-brand-blue to-transparent"
          )}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
