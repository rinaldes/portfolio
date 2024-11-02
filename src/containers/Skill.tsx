import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    icon?: LucideIcon;
  }[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Node.js" },
      { name: "RESTful APIs" },
    ],
  },
  {
    title: "Database",
    skills: [{ name: "PostgreSQL" }, { name: "MySQL" }, { name: "MongoDB" }],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "VS Code" },
      { name: "IntelliJ IDEA" },
      { name: "Postman" },
    ],
  },
];

const Skill = () => (
  <section className="py-12 px-4 sm:px-8 md:px-16">
    <h2 className="text-2xl font-bold mb-8">Skills & Tools</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillsData.map((category) => (
        <Card
          key={category.title}
          className="p-6 bg-neutral-800 border-neutral-700"
        >
          <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span
                key={skill.name}
                className="px-3 py-1 bg-neutral-700 rounded-full text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </section>
);

export default Skill;
