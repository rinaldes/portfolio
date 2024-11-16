import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: StaticImageData;
  link?: string;
  github?: string;
  tags: string[];
}

export const projectsData: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "A modern portfolio website built with Next.js 14, Tailwind CSS, and shadcn/ui.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    github: "https://github.com/yourusername/portfolio",
    link: "https://yourportfolio.com",
  },
  // Add your other projects here
];
