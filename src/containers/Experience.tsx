"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";

const experiences = [
  {
    title: "Front End Developer",
    company: "PT Abadi Berkarya Indonesia",
    location: "Bandung, Indonesia",
    period: "September 2020 - May 2021",
    description:
      "Developed interactive web applications using Next.js, focusing on responsive design, user interface optimization, and seamless functionality. Also worked on Unity 3D projects using C#, building immersive user experiences with real-time 3D elements. This role strengthened my skills in frontend development, 3D graphics, and cross-functional teamwork.",
    skills: ["Next.js", "Unity 3D", "C#", "Responsive Design", "UI/UX"],
    type: "Full-time",
  },
  {
    title: "Front End Developer",
    company: "Hipe Indonesia",
    location: "Bandung, Indonesia",
    period: "June 2020 - August 2020",
    description:
      "Specialized in building and optimizing web applications with Next.js and AntD, focusing on component-driven development, responsive design, and enhancing user interactions. Contributed to improving performance and maintainability by implementing best practices in frontend architecture and user interface design.",
    skills: [
      "Next.js",
      "AntD",
      "Component-Driven Development",
      "UI/UX",
      "Performance Optimization",
    ],
    type: "Full-time",
  },
  {
    title: "Front End Developer",
    company: "PT Sima Soareka",
    location: "Bandung, Indonesia",
    period: "May 2015 - June 2017",
    description:
      "Developed and maintained full-stack applications with Ruby on Rails or Java, handling both backend logic and frontend interfaces. Worked on database design, RESTful API development, and integrated third-party services, delivering robust and scalable solutions.",
    skills: [
      "Ruby on Rails",
      "Java",
      "RESTful API",
      "Database Design",
      "Full Stack Development",
    ],
    type: "Full-time",
  },
];

const Experience = () => {
  return (
    <Section id="experience">
      <style jsx global>{`
        @keyframes slow-ping {
          75%,
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        .animate-slow-ping {
          animation: slow-ping 1.4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl font-bold">Experience</h2>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 h-full w-px bg-gradient-to-b from-border/50 via-border to-transparent -translate-x-1/2" />

        {/* Experience items */}
        <div className="space-y-0 md:space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "group relative grid grid-cols-1 md:grid-cols-2 gap-6",
                "md:my-32 first:md:mt-0 last:md:mb-0",
                index % 2 === 1 ? "" : "md:text-right"
              )}
              style={{
                marginTop: index === 0 ? "" : index === 1 ? "-144px" : "-48px",
              }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-[4rem] z-10">
                <div className="w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/25 transition-all duration-300 group-hover:scale-[1.5]" />
                <div className="absolute inset-0 w-4 h-4 bg-primary/50 rounded-full animate-slow-ping transition-all duration-300 group-hover:scale-[1.5]" />
              </div>

              {/* Content */}
              <div
                className={cn(
                  "col-span-1 relative",
                  index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                )}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={cn(
                    "flex flex-col gap-2 rounded-lg p-6 transition-all duration-300 hover:bg-accent/50 hover:shadow-lg",
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center gap-3",
                      index % 2 === 1 ? "" : "md:justify-end"
                    )}
                  >
                    <Badge
                      variant="outline"
                      className="transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      {exp.type}
                    </Badge>
                  </div>

                  <div
                    className={cn(
                      "flex flex-col gap-2",
                      index % 2 === 1 ? "" : "md:items-end"
                    )}
                  >
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      <p className="text-muted-foreground font-medium">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.location}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {exp.period}
                      </p>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>

                  <div
                    className={cn(
                      "flex flex-wrap gap-2",
                      index % 2 === 1 ? "" : "md:justify-end"
                    )}
                  >
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
