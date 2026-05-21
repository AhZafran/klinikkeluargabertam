"use client";

import React from "react";
import { motion } from "motion/react";

type Testimonial = {
  text: string;
  name: string;
  role: string;
  initial: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, name, role, initial }, i) => (
              <div
                key={i}
                className="w-full max-w-xs rounded-3xl border border-border bg-white p-6 shadow-lg shadow-primary/10 sm:p-8"
              >
                <p className="text-sm leading-relaxed text-foreground/90">
                  &ldquo;{text}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {initial}
                  </span>
                  <div className="flex flex-col leading-tight">
                    <div className="text-sm font-semibold tracking-tight text-foreground">
                      {name}
                    </div>
                    <div className="text-xs tracking-tight text-muted-foreground">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
