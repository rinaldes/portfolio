import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.',
    imageUrl: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    githubUrl: 'https://github.com/example/ecommerce',
    liveUrl: 'https://example.com'
  },
  {
    id: '2',
    title: 'AI Chat Application',
    description: 'Real-time chat application with AI integration using OpenAI API.',
    imageUrl: '/projects/chat.jpg',
    tags: ['React', 'Node.js', 'OpenAI'],
    githubUrl: 'https://github.com/example/ai-chat'
  },
  // Add more projects as needed
];