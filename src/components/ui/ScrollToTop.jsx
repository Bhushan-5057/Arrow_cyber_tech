"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
const animationVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 0.2,
            ease: "easeOut",
        },
    },
};
export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);
    const ticking = useRef(false);
    const handleScroll = useCallback(() => {
        if (ticking.current)
            return;
        ticking.current = true;
        window.requestAnimationFrame(() => {
            setVisible(window.scrollY > 400);
            ticking.current = false;
        });
    }, []);
    useEffect(() => {
        if (typeof window === "undefined")
            return;
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);
    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    return (<AnimatePresence>
      {visible ? (<motion.button type="button" aria-label="Scroll to top" onClick={scrollToTop} initial="hidden" animate="visible" exit="exit" variants={animationVariants} className="fixed bottom-5 right-5 z-50 inline-flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#0F1E3D] text-white shadow-[0_12px_30px_rgba(15,30,61,0.25)] transition-transform duration-[250ms] ease-out focus:outline-none focus:ring-4 focus:ring-blue-400/40 focus:ring-offset-2 focus:ring-offset-white hover:-translate-y-1 hover:scale-[1.06] hover:bg-[#172d5d] active:scale-[0.96] sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8">
          <ArrowUp className="h-5 w-5"/>
        </motion.button>) : null}
    </AnimatePresence>);
}
