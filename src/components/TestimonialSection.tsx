import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'framer-motion';

interface RevealWordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  prefersReducedMotion: boolean | null;
}

const RevealWord: React.FC<RevealWordProps> = ({
  word,
  progress,
  range,
  prefersReducedMotion,
}) => {
  const color = useTransform(
    progress,
    range,
    prefersReducedMotion ? ['hsl(0 0% 100%)', 'hsl(0 0% 100%)'] : ['hsl(0 0% 30%)', 'hsl(0 0% 100%)']
  );
  const opacity = useTransform(
    progress,
    range,
    prefersReducedMotion ? [1, 1] : [0.3, 1]
  );

  return (
    <motion.span
      style={{ color, opacity }}
      className="mr-[0.3em] inline-block transition-colors duration-75 select-none"
    >
      {word}
    </motion.span>
  );
};

export const TestimonialSection: React.FC = () => {
  const quoteRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Scroll interpolation targeted between 80% entrance and 50% center
  const { scrollYProgress } = useScroll({
    target: quoteRef,
    offset: ['start 80%', 'center 50%'],
  });

  const statement =
    'ACS transformed our legacy accounting infrastructure into a compliant, audit-ready ERP architecture. Their teams understand federal rigor not just in theory, but in rigorous practice.';

  const words = statement.split(' ');
  const total = words.length;

  // Spring scale and illumination fade for the CEO avatar upon quote completion
  const authorOpacity = useTransform(
    scrollYProgress,
    [0.82, 1],
    prefersReducedMotion ? [1, 1] : [0, 1]
  );
  const authorScale = useTransform(
    scrollYProgress,
    [0.82, 1],
    prefersReducedMotion ? [1, 1] : [0.94, 1]
  );
  const authorY = useTransform(
    scrollYProgress,
    [0.82, 1],
    prefersReducedMotion ? [0, 0] : [12, 0]
  );

  return (
    <section
      ref={quoteRef}
      id="clients"
      className="min-h-screen flex flex-col justify-center py-28 md:py-36 px-8 md:px-28 relative z-20 bg-black"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-start gap-8 w-full">
        {/* Quote Icon */}
        <div className="flex items-center gap-3">
          <img
            src="/quote-symbol.png"
            alt="Quote mark"
            className="w-12 h-9 object-contain opacity-70 filter invert"
          />
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold font-mono">
            Executive Endorsement &bull; Federal Systems Transformation
          </span>
        </div>

        {/* Scroll-Driven Word Reveal Typography */}
        <div className="text-3xl md:text-5xl font-medium leading-[1.25] flex flex-wrap tracking-tight">
          {words.map((word, i) => {
            const start = i / total;
            const end = (i + 1) / total;
            return (
              <RevealWord
                key={i}
                word={word}
                progress={scrollYProgress}
                range={[start, end]}
                prefersReducedMotion={prefersReducedMotion}
              />
            );
          })}
          <span className="text-muted-foreground ml-1 font-serif text-4xl md:text-6xl inline-block select-none">
            ”
          </span>
        </div>

        {/* Author Info Row with Spring Scale and Fade */}
        <motion.div
          style={{ opacity: authorOpacity, scale: authorScale, y: authorY }}
          className="flex items-center gap-4 mt-4 pt-6 border-t border-white/10 w-full max-w-xl"
        >
          <img
            src="/testimonial-avatar.png"
            alt="Anthony T. Stevenson"
            className="w-14 h-14 rounded-full border-2 border-white/20 object-cover shadow-lg"
          />
          <div>
            <div className="text-base font-semibold leading-snug text-foreground">
              Anthony T. Stevenson
            </div>
            <div className="text-sm font-normal text-muted-foreground">
              President &amp; CEO, Accounting &amp; Computer Solutions, Inc.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
