"use client";
import { ChildType } from "@/types";
import { motion } from "framer-motion";

const Motion = ({ children }: ChildType) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20"
  >
    {children}
  </motion.div>
);

export default Motion;
