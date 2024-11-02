import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Project = () => (
  <section
    className="min-h-screen w-full py-20 px-4 sm:px-8 md:px-16 "
    id="projects"
  >
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="h-full flex flex-col bg-neutral-800 border-neutral-700"
          >
            <CardHeader className="p-0">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={400}
                height={200}
                className="object-cover w-full h-48 rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="flex-1 p-6">
              <CardTitle className="mb-2">{project.title}</CardTitle>
              <CardDescription className="mb-4">
                {project.description}
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 gap-4">
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubLogoIcon className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button size="sm" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Project;
