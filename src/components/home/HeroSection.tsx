"use client";

import Link from "next/link";
import React, { useState, useRef } from "react";
import { motion, useMotionValue, useMotionTemplate, useAnimationFrame } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";

const trustSignals = [
  "VAPT and red-team execution",
  "SOC 2, ISO 27001, PCI-DSS readiness",
  "Senior-led remediation support",
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  const speedX = 0.5;
  const speedY = 0.5;

  useAnimationFrame(() => {
    const currentX = gridOffsetX.get();
    const currentY = gridOffsetY.get();
    gridOffsetX.set((currentX + speedX) % 40);
    gridOffsetY.set((currentY + speedY) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative isolate flex min-h-[62vh] items-center overflow-hidden bg-slate-50 pt-16 pb-10 sm:min-h-[66vh] sm:pt-20 sm:pb-12 lg:min-h-[70vh] lg:pt-20 lg:pb-14"
    >
      <div className="absolute inset-0 z-0 opacity-[0.08]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>
      <motion.div
        className="absolute inset-0 z-0 opacity-50"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute right-[-20%] top-[-20%] w-[40%] h-[40%] rounded-full bg-cyan-500/40 blur-[120px]" />
        <div className="absolute right-[10%] top-[-10%] w-[20%] h-[20%] rounded-full bg-purple-500/30 blur-[100px]" />
        <div className="absolute left-[-10%] bottom-[-20%] w-[40%] h-[40%] rounded-full bg-blue-500/40 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-4xl flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-200/80 bg-white/70 px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm shadow-cyan-900/5 backdrop-blur-xl"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-100 text-brand-cyan">
              <ShieldCheck className="h-3.5 w-3.5" />
            </span>
            <span>Enterprise security assessments, delivered with precision</span>
          </motion.div>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
            Build trust before attackers test it.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Arrow CyberTech helps modern teams validate applications,
            harden infrastructure, and move through compliance with senior
            offensive security experts.
          </p>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full rounded-xl bg-linear-to-tr from-brand-cyan to-brand-purple px-7 text-white shadow-[0_18px_42px_rgba(34,211,238,0.28)] hover:bg-cyan-300"
              >
                Book Security Audit <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full rounded-xl border-slate-300 bg-white/70 px-7 text-slate-800 backdrop-blur-xl hover:border-brand-cyan hover:bg-white hover:text-brand-blue"
              >
                Explore Solutions
              </Button>
            </Link>
          </div>

          <div className="mt-10 flex max-w-3xl flex-col items-center justify-center gap-3 text-sm font-medium text-slate-700 sm:flex-row sm:flex-wrap">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-cyan" />
                <span>{signal}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const GridPattern = ({ offsetX, offsetY }: { offsetX: any; offsetY: any }) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id="grid-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-slate-700"
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
  );
};
