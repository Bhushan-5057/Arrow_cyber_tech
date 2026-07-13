"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "cyber-glow";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-semibold rounded-lg overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantStyles = {
    primary:
      "bg-brand-blue hover:bg-blue-700 text-white shadow-[0_12px_24px_rgba(37,99,235,0.22)]",
    secondary:
      "bg-brand-purple hover:bg-purple-700 text-white shadow-[0_12px_24px_rgba(124,58,237,0.2)]",
    outline:
      "bg-transparent border border-slate-300 hover:border-brand-cyan text-slate-700 hover:text-brand-blue",
    "cyber-glow":
      "bg-white text-brand-blue border border-brand-blue/25 hover:border-brand-blue hover:text-brand-cyan shadow-[0_10px_24px_rgba(37,99,235,0.1)] hover:shadow-[0_14px_30px_rgba(8,145,178,0.16)]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {variant === "cyber-glow" && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-cyan/10 to-brand-purple/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
