"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  BriefcaseIcon,
  CodeIcon,
  FolderIcon,
  MailIcon,
  House,
  User,
} from "lucide-react";
import { ThemeToggle } from "../ui/theme-toggle";

const navItems = [
  { icon: House, href: "/duma#home", label: "Home" },
  { icon: User, href: "/duma#about", label: "About" },
  { icon: FolderIcon, href: "/duma#projects", label: "Projects" },
  { icon: CodeIcon, href: "/duma#skills", label: "Skills" },
  { icon: BriefcaseIcon, href: "/duma#experience", label: "Experience" },
  { icon: MailIcon, href: "/duma#contact", label: "Contact" },
];

const NavigationItems = ({
  activeSection,
}: {
  activeSection: string | null;
}) => {
  return navItems.map((item) => {
    const Icon = item.icon;
    const isActive = activeSection === item.href;

    return (
      <li key={item.href}>
        <a
          href={item.href}
          className={cn(
            "flex items-center transition-all relative group p-2 hover:text-foreground",
            isActive ? "text-foreground scale-110" : "text-muted-foreground"
          )}
          onClick={(e) => {
            e.preventDefault();
            const targetId = item.href.split("#")[1];
            document.querySelector(`#${targetId}`)?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <Icon className="w-5 h-5 shrink-0" />
          {isActive && (
            <motion.div
              layoutId="activeSection"
              className="absolute inset-0 bg-primary/10 rounded-full -z-10"
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
          <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2 py-1 rounded-md bg-background border text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {item.label}
          </span>
        </a>
      </li>
    );
  });
};

export const SideNav = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`/duma#${entry.target.id}`);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      threshold: [0.1],
      rootMargin: "-20% 0px",
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      className="fixed left-6 z-50 top-[28%]"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="flex flex-col items-center gap-6 bg-background/80 backdrop-blur-sm p-4 rounded-full border">
        <NavigationItems activeSection={activeSection} />
        <ThemeToggle />
      </ul>
    </motion.nav>
  );
};
