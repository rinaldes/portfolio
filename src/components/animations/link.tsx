"use client";
import { ChildType } from "@/types";
import { motion } from "framer-motion";

const MotionLink = ({ children, link }: ChildType & { link: string }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

export default MotionLink;
