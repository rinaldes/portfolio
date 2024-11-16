"use client";
import { motion } from "framer-motion";
import { ButtonProps, Button as ShadButton } from "@/components/ui/button";
import Link from "next/link";
import { ChildType } from "@/types";

type Props = {
  href: string;
  label: string;
  target?: string;
};

const Button = ({
  children,
  href,
  label,
  target = "_self",
  ...props
}: Props & ChildType & ButtonProps) => (
  <motion.div key={label} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
    <ShadButton variant="ghost" asChild {...props}>
      <Link
        href={href}
        target={target}
        rel="noopener noreferrer"
        aria-label={label}
      >
        {children}
      </Link>
    </ShadButton>
  </motion.div>
);

export default Button;
