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
          <Avatar className="w-60 lg:w-72 h-auto border-2 border-primary bg-secondary">
            <AvatarImage src="./avatar.png" />
            <AvatarFallback className="w-72 h-72 lg:w-60 lg:h-60 rounded-full border-1 border-primary">
              HG
            </AvatarFallback>
          </Avatar>
          
        </div>
        <p className="text-justify text-muted-foreground lg:px-6">
        Hey there! I’m Harsha, a software engineering graduate student at SJSU. Previously, at Deloitte, I worked on
revolutionary NLP technologies, creating a significant impact with our document summarization tool. I’m an
engineer and explorer at heart, which led me to pursue a graduate degree in Silicon Valley far from home.
Driven by a passion for innovation and creating an impact, I’m seeking full-time employment in the Gen AI
space.

        </p>
      </div>
    </section>
  );
}
