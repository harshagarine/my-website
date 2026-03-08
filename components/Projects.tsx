"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "/guardian.png",
    title: "Generative AI Guardian",
    description:
      "Developed an enterprise LLM management platform using Python (FastAPI) and microservices architecture to centralize cost control, security enforcement, and usage monitoring across 6+ LLM providers. Implemented guardrails with ML-based prompt injection detection, PII filtering, and content moderation.",
    skills: ["Python", "FastAPI", "MongoDB", "React", "TypeScript", "LLMs"],
    link: "https://github.com/harshagarine", // Placeholder, update if needed
  },
  {
    imagePath: "/nutrigenie.png",
    title: "Agentic Diet Planner",
    description:
      "Built an AI-powered multi-agent diet planner to generate and adapt personalized 7-day meal plans. Designed 3 collaborating AI agents for meal planning, user feedback tracking, and ingredient sourcing through online marketplaces. Integrated contextual memory and vector databases.",
    skills: ["Langgraph", "LangChain", "ChromaDB", "LlamaIndex", "Python", "Claude", "GraphQL"],
    link: "https://github.com/harshagarine/NutriGenie",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            target="_blank"
            href={project.link}
            rel="noopener noreferrer"
            className="hover:cursor-pointer block mb-8 group"
          >
            <Card className="lg:p-6 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent bg-transparent lg:backdrop-blur-sm lg:group-hover:bg-slate-200/40 dark:lg:group-hover:bg-white/5 lg:group-hover:backdrop-blur-md lg:group-hover:border-slate-300 dark:lg:group-hover:border-white/10 lg:group-hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:lg:group-hover:shadow-[0_8px_32px_0_rgba(100,100,255,0.05)] transition-colors duration-150">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0 lg:pr-5">
                <div className="relative w-full aspect-video lg:mt-2">
                  <Image
                    src={project.imagePath}
                    alt={`Cover for ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover border border-slate-300 dark:border-slate-700 rounded-[0.5rem] group-hover:border-teal-400/50 dark:group-hover:border-teal-500/50 shadow-lg group-hover:shadow-[0_0_20px_rgba(13,148,136,0.15)] dark:group-hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] transition-all duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-slate-800 dark:text-slate-200 font-semibold group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-slate-600 dark:text-muted-foreground group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index} className="bg-teal-100/50 text-teal-800 hover:bg-teal-200/50 dark:bg-teal-400/10 dark:text-teal-300 dark:hover:bg-teal-400/20 backdrop-blur-md border border-teal-200 dark:border-teal-400/20">{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
