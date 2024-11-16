import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export const Section = ({
  id,
  children,
  className,
  containerClassName,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "max-w-screen px-4 sm:px-20 md:pl-40 md:pr-32 min-h-screen flex items-center",
        className
      )}
    >
      <div className={cn("py-20", containerClassName)}>{children}</div>
    </section>
  );
};
