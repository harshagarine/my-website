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
      "Scrapy",
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
            className="hover:cursor-pointer block mb-8 group"
          >
            <Card className="lg:p-6 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent bg-transparent lg:backdrop-blur-sm lg:group-hover:bg-slate-200/40 dark:lg:group-hover:bg-white/5 lg:group-hover:backdrop-blur-md lg:group-hover:border-slate-300 dark:lg:group-hover:border-white/10 lg:group-hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:lg:group-hover:shadow-[0_8px_32px_0_rgba(100,100,255,0.05)] transition-colors duration-150">
              <CardContent className="flex flex-col p-0 w-full lg:w-full">
                <p className="text-slate-800 dark:text-slate-200 font-semibold group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                  {research.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-slate-600 dark:text-muted-foreground group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">
                  {research.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {research.skills.map((skill, index) => (
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
