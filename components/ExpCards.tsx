"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "Aug 2022 — Aug 2023",
    currentPosition: "Software Engineer",
    place: "Deloitte",
    previousPositions: [""],
    description:
      "I've designed and developed data workflows on Alteryx to streamline ETL processes for data summarization, cleansing, and comparison. Additionally, I created a data-transformation module integrating Alteryx workflows with the MyGI Deloitte portal using Angular, .NET, and SQL Server. Presented the Document Summarizer Platform (POC) with Named Entity Recognition (NER), Optical Character Recognition (OCR), and text classification, significantly optimizing the processing of over 1,000 tax R&D documents and reducing processing time.",
    skills: [
      "Alteryx",
      "ETL Processes",
      "Angular",
      ".NET",
      "SQL Server",
      "Azure Cloud",
      "NER",
      "OCR",
      "Data Summarization",
      "Data Cleansing",
    ],
  },
  {
    timeline: "Jan 2022 — Jul 2022",
    currentPosition: "Machine Learning Intern",
    place: "Sabudh Foundation",
    previousPositions: [""],
    description:
      "I developed a multifaceted approach incorporating three deep learning algorithms, including Generative Adversarial Networks (Real ESR-GAN), to improve the perceptual quality of Single Image Super-Resolution by 40%. Additionally, I created a MERN stack web application hosted on Heroku, allowing users to upload, preview, and compare images with a seamless UX/UI for enhancing image resolution.",
    skills: [
      "Generative Adversarial Networks",
      "Deep learning",
      "ReactJS",
      "NodeJS",
      "MongoDB",
      "Heroku",
      "UX/UI",
    ],
  },
  {
    timeline: "Dec 2021 - July 2022",
    currentPosition: "Research Assistant",
    place: "BML Munjal University",
    previousPositions: [""],
    description:
      "Analyzed bibliographic data of retracted research papers using web crawling and scraping techniques with Python (Beautiful Soup, Scrapy). I processed and cleaned data, created visualizations, and presented insights in a  paper.",
    skills: [
      "Python",
      "Beautiful Soup",
      "Excel VBA",
      "Scrapy",,
      "Web Crawling & Scraping",
      "Data Visualization",
      "Exploratory Data Analysis",
    ],
  }
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-xs text-slate-400 whitespace-nowrap pt-1">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-primary font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-foreground group"
          href="https://drive.google.com/drive/folders/1CnPAiJsTeOEh7VN9y8TvK_EUpVPweic6?usp=sharing"
          target="_blank"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            View Full Resume (In a new tab)
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
