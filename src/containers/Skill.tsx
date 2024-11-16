import { SkillTree } from "@/components/skills/skill-tree";
import { skillsData } from "@/data/skills";
import { Section } from "@/components/ui/section";

const Skill = () => (
  <Section id="skills">
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Skills & Expertise
        </h2>
        <p className="text-muted-foreground max-w-[600px]">
          An interactive visualization of my technical skills and expertise.
          Hover over each node to learn more about my experience and proficiency
          in different areas.
        </p>
      </div>

      <div className="relative">
        <SkillTree data={skillsData} />
      </div>
    </div>
  </Section>
);

export default Skill;
