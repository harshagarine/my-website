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

const jobResearchs = [
  {
    title: "Gender Imbalance in Retracted Publications is More Favorable Toward Women Authors",
    description:
      "Analyzed bibliographic data of retracted research papers using web crawling and scraping techniques with Python (Beautiful Soup, Scrapy). I processed and cleaned data, created visualizations, and presented insights in a paper.",
    skills: [
      "Python",
      "Beautiful Soup",
      "Excel VBA",
      "Scrapy",,
      "Web Crawling & Scraping",
      "Data Visualization",
      "Exploratory Data Analysis",
    ],
    link: "https://arxiv.org/abs/2305.09307",
  },
  {
    title: "Simulation of Bloch Sphere for a Single Qubit",
    description:
      "Developed a javascript-based web tool to simulate a single qubit under various quantum gates and published the chapter in the book \"Technology Road Mapping for Quantum Computing and Engineering.\" ",
    skills: [
      "JavaScript",
      "HTML",
      "CSS",
      "Github Pages",
    ],
    link: "https://www.igi-global.com/chapter/simulation-of-bloch-sphere-for-a-single-qubit/300520",
  },
  {
    title: "Automatic Classification of Diabetics and Hypertension Fundus Camera Retinal Images using Deep Learning.",
    description:
      "Implemented Convolutional Neural Network (CNN) and Transfer Learning with VGG-16 architectures to classify retinal images of diabetic and hypertensive patients with 96% accuracy. SIGMAA-2023 conference by Springer.\" ",
    skills: [
      "JavaScript",
      "HTML",
      "CSS",
    ],
    link: "https://drive.google.com/file/d/1Kjy79XXPxdDUBbHVO7t4qMWLAnEIKx73/view",
  },
];

export default function Research() {
  return (
    <section id="research" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobResearchs.map((research, index) => (
          <a
            key={index}
            target="_blank"
            href={research.link}
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">      
              <CardContent className="flex flex-col p-0 w-full lg:w-full">
                <p className="text-primary font-bold">
                  {research.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {research.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {research.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
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
