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

export const projects: Project[] = [
  {
    id: "project-launcher",
    title: "Project Launcher",
    description: "The Ulauncher Extension simplifies project management by enabling users to quickly locate their local projects and open them directly in their preferred code editor. This tool streamlines workflows, saving time and enhancing productivity for developers.",
    tags: ["Python", "Ulauncher", "Extension", "Developer Tools"],
    github: "https://github.com/rinaldes/Project-Launcher"
  },
  {
    id: "grocery-store",
    title: "Grocery Online Store",
    description: "The Grocery Online Store project addresses the challenge store owners face in managing their inventory and sales while providing customers with a seamless shopping experience. The platform empowers store owners with tools to efficiently manage their inventory, track orders, and update store details, while offering customers an intuitive interface for shopping.",
    tags: ["Next.js", "Java", "Spring Boot", "Full Stack", "E-commerce"],
    github: "https://github.com/orgs/DTI-Purwadhika/repositories"
  },
  {
    id: "event-ticket",
    title: "Event Ticket Management",
    description: "The Event Ticket Management system streamlines the ticketing process by allowing organizers to easily create and sell tickets for their events, while users can seamlessly browse, select, and purchase tickets. This platform provides an efficient and user-friendly solution for managing events and enhancing the attendee experience.",
    tags: ["Next.js", "React", "TypeScript", "Event Management"],
    github: "https://github.com/rinaldes/eventhop-fe"
  },
  {
    id: "serenity-sound",
    title: "Serenity Sound",
    description: "This is the company profile page for Serenity Sound, a company that specializes in audio products and services. Serenity Sound is dedicated to providing high-quality sound solutions that enhance the listening experience for users across various platforms.",
    tags: ["Next.js", "React", "Company Profile", "Web Development"],
    github: "https://github.com/rinaldes/Serenity-Sound"
  },
  {
    id: "kumpulan-dg",
    title: "KumpulanDG",
    description: "A gallery share platform where users can showcase their art by uploading it, engage with others by commenting on their works, and express appreciation through likes.",
    tags: ["React.js", "Gallery", "Social Platform", "Web Development"],
    github: "https://github.com/rinaldes/kumpulanDG"
  },
  {
    id: "portal-dekave",
    title: "Portal DeKaVe Launchpage",
    description: "This is the company profile page for Portal DeKaVe, a visual communication community, where users can share their knowledge with each other in the community.",
    tags: ["Ruby on Rails", "Community Platform", "Web Development"],
    github: "https://github.com/rinaldes/portal_dekave_launchpage"
  }
];
