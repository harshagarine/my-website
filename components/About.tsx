"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        <div className="w-full flex lg:items-center lg:justify-center mb-6">
          <Avatar className="w-60 lg:w-72 h-auto border-2 border-teal-600/20 dark:border-teal-500/30 shadow-[0_0_20px_rgba(13,148,136,0.1)] dark:shadow-[0_0_30px_rgba(45,212,191,0.15)] bg-slate-100/50 dark:bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-teal-500/40 dark:hover:border-teal-400/50 hover:shadow-[0_0_30px_rgba(13,148,136,0.2)] dark:hover:shadow-[0_0_40px_rgba(45,212,191,0.3)]">
            <AvatarImage src="./avatar.webp" />
            <AvatarFallback className="w-72 h-72 lg:w-60 lg:h-60 rounded-full border-1 border-teal-600/30 dark:border-teal-500/30 text-teal-700 dark:text-teal-300 bg-slate-100 dark:bg-slate-900">
              HG
            </AvatarFallback>
          </Avatar>

        </div>
        <div className="flex flex-col gap-4 text-justify text-muted-foreground lg:px-6">
          <p>
            I’m a backend and infrastructure engineer with a specialty in cloud modernization, focused on building scalable, efficient, and robust architecture. I enjoy working at the intersection of data and distributed systems, where complex legacy applications meet modern, high-performance microservices.
          </p>
          <p>
            Currently, I&#39;m a Software Engineer at Proofpoint, where I work on the core engineering team to modernize massive backend integration layers and spam classifier engines. In this role, I orchestrate infrastructure migrations to the cloud and build automated provisioning tools to ensure our systems remain highly available and secure.
          </p>
          <p>
            Previously, I’ve built high-velocity data pipelines and modernized monolithic architectures at Deloitte. I also moved to the heart of Silicon Valley to earn my Master&#39;s degree at San Jose State University, diving deep into Generative AI. These experiences, along with my passion for building autonomous multi-agent systems, have shaped how I think about architecting solutions that are both technically sound and highly impactful.
          </p>
          <p>
            Outside of work, you can usually find me hiking trails around the Bay Area, tinkering with the latest open-source LLMs, or unapologetically rewatching my favorite sci-fi movies.
          </p>
        </div>
      </div>
    </section>
  );
}
