"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import DanceAnimationSlot from "./DanceAnimationSlot";

export default function Hero() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const headlinePointerEvents = useTransform(headlineOpacity, (v) => (v < 0.05 ? "none" : "auto"));
  const chevronOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div id="fooldal" ref={wrapperRef} className="relative h-[145vh]">
      <section className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        {/* Swap-point: replace DanceAnimationSlot's inner markup with the
            21st.dev dance-couple animation, driven by the same scrollYProgress. */}
        <DanceAnimationSlot progress={scrollYProgress} />

        <motion.div
          style={{ y: headlineY, opacity: headlineOpacity, pointerEvents: headlinePointerEvents }}
          className="relative z-10 text-center px-6"
        >
          <p className="mb-5 text-xs md:text-sm tracking-[0.35em] uppercase text-accent">
            Dance Square Sportegyesület
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl leading-[1.05] max-w-4xl mx-auto">
            A tánc, ahogy még&nbsp;nem&nbsp;láttad
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Versenytánc, társastánc és esküvői táncoktatás Hatvanban — óvodástól a seniorokig, minden korosztálynak.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#kapcsolat"
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Foglalj próbaórát
            </a>
            <Link
              href="/tanfolyamok"
              className="rounded-full border border-border px-8 py-3.5 text-sm font-medium tracking-wide hover:border-accent hover:text-accent transition-colors"
            >
              Tanfolyamaink
            </Link>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: chevronOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 4v14m0 0l-6-6m6 6l6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </section>
    </div>
  );
}
