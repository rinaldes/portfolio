import { SkillNode } from "@/types/skills";

export const skillsData: SkillNode = {
  id: "root",
  name: "Skills",
  children: [
    {
      id: "frontend",
      name: "Frontend",
      description: "Building beautiful and responsive user interfaces",
      color: "rgb(234, 88, 12)", // Orange
      children: [
        {
          id: "react",
          name: "React JS",
          description: "Building modern web applications with React and its ecosystem",
          children: [
            {
              id: "next",
              name: "Next.js",
              description: "Server-side rendering, static site generation, and API routes with Next.js",
            },
          ],
        },
        {
          id: "tailwind",
          name: "Tailwind CSS",
          description: "Rapid UI development with utility-first CSS framework",
        },
        {
          id: "typescript",
          name: "TypeScript",
          description: "Type-safe JavaScript development for scalable applications",
        },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      description: "Server-side application development and architecture",
      color: "rgb(22, 163, 74)", // Green
      children: [
        {
          id: "java",
          name: "Java",
          description: "Enterprise-level backend development with Java",
          children: [
            {
              id: "spring",
              name: "Spring Boot",
              description: "Building microservices and web applications with Spring Boot",
            },
          ],
        },
        {
          id: "database",
          name: "Database",
          description: "Database design, optimization, and management",
          children: [
            {
              id: "postgresql",
              name: "PostgreSQL",
              description: "Advanced database management with PostgreSQL",
            },
          ],
        },
      ],
    },
    {
      id: "tools",
      name: "Tools",
      description: "Development tools and DevOps technologies",
      color: "rgb(147, 51, 234)", // Purple
      children: [
        {
          id: "docker",
          name: "Docker",
          description: "Containerization, orchestration, and deployment automation",
        },
        {
          id: "git",
          name: "Git",
          description: "Version control and collaborative development workflows",
        },
        {
          id: "storybook",
          name: "Storybook",
          description: "Component development, testing, and documentation",
        },
        {
          id: "husky",
          name: "Husky",
          description: "Automated Git hooks for code quality and consistency",
        },
      ],
    },
  ],
};
