"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type TypeProps = {
  size: "h1" | "h2" | "h3" | "p";
  children: ReactNode;
  className?: string;
};

const variants = {
  h1: {
    className: "text-5xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50",
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  h2: {
    className: "text-2xl sm:text-3xl lg:text-4xl text-muted-foreground",
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.1 }
  },
  h3: {
    className: "text-xl font-semibold transition-colors group-hover:text-primary",
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.2 }
  },
  p: {
    className: "text-lg text-muted-foreground max-w-2xl",
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.2 }
  }
};

const Type = ({ size, children, className }: TypeProps) => {
  const Component = motion[size];
  const variantStyle = variants[size];

  return (
    <Component
      className={`${variantStyle.className} ${className || ''}`}
      initial={variantStyle.initial}
      animate={variantStyle.animate}
      transition={variantStyle.transition}
    >
      {children}
    </Component>
  );
};

export default Type;
