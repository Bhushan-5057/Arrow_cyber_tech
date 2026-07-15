"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const LOADER_FADE_DURATION = 0.6;
const POST_VIDEO_DELAY = 300;
export default function WebsiteLoader({ children }) {
    const [loaderMode, setLoaderMode] = useState("spinner");
    const [isLoaderVisible, setIsLoaderVisible] = useState(true);
    const [isPageVisible, setIsPageVisible] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);
    const hideTimerRef = useRef(undefined);
    const revealTimerRef = useRef(undefined);
    const motionQueryRef = useRef(null);
    const breakpointQueryRef = useRef(null);
    useEffect(() => {
        const query = window.matchMedia("(prefers-reduced-motion: reduce)");
        const updatePreference = () => {
            const prefersReduced = query.matches;
            setReduceMotion(prefersReduced);
            if (prefersReduced) {
                setIsLoaderVisible(false);
                setIsPageVisible(true);
            }
        };
        updatePreference();
        motionQueryRef.current = query;
        if (typeof query.addEventListener === "function") {
            query.addEventListener("change", updatePreference);
        }
        else {
            query.addListener(updatePreference);
        }
        return () => {
            if (!motionQueryRef.current)
                return;
            if (typeof motionQueryRef.current.removeEventListener === "function") {
                motionQueryRef.current.removeEventListener("change", updatePreference);
            }
            else {
                motionQueryRef.current.removeListener(updatePreference);
            }
        };
    }, []);
    useEffect(() => {
        const query = window.matchMedia("(min-width: 1024px)");
        const updateMode = () => {
            setLoaderMode(query.matches ? "video" : "spinner");
        };
        updateMode();
        breakpointQueryRef.current = query;
        if (typeof query.addEventListener === "function") {
            query.addEventListener("change", updateMode);
        }
        else {
            query.addListener(updateMode);
        }
        return () => {
            if (!breakpointQueryRef.current)
                return;
            if (typeof breakpointQueryRef.current.removeEventListener === "function") {
                breakpointQueryRef.current.removeEventListener("change", updateMode);
            }
            else {
                breakpointQueryRef.current.removeListener(updateMode);
            }
        };
    }, []);
    useEffect(() => {
        if (!isLoaderVisible)
            return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isLoaderVisible]);
    useEffect(() => {
        if (reduceMotion)
            return;
        if (loaderMode !== "spinner")
            return;
        hideTimerRef.current = window.setTimeout(() => {
            setIsLoaderVisible(false);
            revealTimerRef.current = window.setTimeout(() => setIsPageVisible(true), LOADER_FADE_DURATION * 1000);
        }, 900);
        return () => {
            if (hideTimerRef.current) {
                window.clearTimeout(hideTimerRef.current);
            }
        };
    }, [loaderMode, reduceMotion]);
    useEffect(() => {
        return () => {
            if (hideTimerRef.current) {
                window.clearTimeout(hideTimerRef.current);
            }
            if (revealTimerRef.current) {
                window.clearTimeout(revealTimerRef.current);
            }
        };
    }, []);
    const handleVideoEnd = () => {
        if (reduceMotion) {
            return;
        }
        hideTimerRef.current = window.setTimeout(() => {
            setIsLoaderVisible(false);
            revealTimerRef.current = window.setTimeout(() => setIsPageVisible(true), LOADER_FADE_DURATION * 1000);
        }, POST_VIDEO_DELAY);
    };
    const spinner = (<div className="fixed inset-0 z-[99999] flex h-full w-full items-center justify-center bg-white">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-slate-200 bg-white shadow-none">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-transparent border-t-[rgba(15,23,42,0.9)] border-r-[rgba(59,130,246,0.9)]"/>
            </div>
        </div>);
    const videoLoader = (<div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-white">
            {loaderMode === "video" && (<video src="/assets/loader.mp4" className="absolute inset-0 h-full w-full object-cover" style={{
                objectPosition: "center center",
                transform: "translate(-50%, -50%)",
                top: "50%",
                left: "50%",
                minHeight: "100%",
                minWidth: "100%",
            }} autoPlay muted playsInline preload="auto" onEnded={handleVideoEnd} tabIndex={-1} aria-hidden="true"/>)}
        </div>);
    return (<>
            <AnimatePresence mode="wait">
                {isLoaderVisible && !reduceMotion && (<motion.div key="website-loader" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: LOADER_FADE_DURATION, ease: "easeInOut" }}>
                        {loaderMode === "video" ? videoLoader : spinner}
                    </motion.div>)}
            </AnimatePresence>

            <motion.div initial={false} animate={{ opacity: isPageVisible ? 1 : 0 }} transition={{ duration: reduceMotion ? 0 : 0.8, ease: "easeInOut" }} className={`flex min-h-screen min-w-0 flex-col ${isPageVisible ? "" : "pointer-events-none"}`} aria-hidden={isPageVisible ? undefined : true}>
                {children}
            </motion.div>
        </>);
}
