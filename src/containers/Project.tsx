import { projects } from "@/data";
import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";

const Project = () => (
  <Section id="projects">
    <h2 className="text-4xl font-bold mb-12">Projects</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </Section>
);

export default Project;
