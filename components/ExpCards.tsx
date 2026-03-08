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
    timeline: "Feb 2026 – Present",
    currentPosition: "Software Engineer",
    place: "Proofpoint",
    previousPositions: [],
    description:
      "Modernized a legacy C++ and Python backend integration layer of email spam classifier engine using SWIG, Puppet and CMake. Supporting infrastructure migration from AWS to Azure and automating EKS clusters, VPC, ALB, and IAM provisioning with Terraform.",
    skills: ["C++", "Python", "AWS", "Azure", "Terraform", "EKS", "Puppet", "SWIG"],
  },
  {
    timeline: "Jun 2025 – Feb 2026",
    currentPosition: "Software Engineer Intern",
    place: "Proofpoint",
    previousPositions: [],
    description:
      "Architected test infrastructure using k6 to evaluate performance of a legacy C++ spam classifier. Built an inference pipeline for privacy-preserving synthetic email data generation using LLMs on AWS GPUs (10x cost optimization). Engineered Go-based backend tooling for automated performance testing.",
    skills: ["GoLang", "C++", "LLMs", "AWS GPUs", "k6", "Performance Testing"],
  },
  {
    timeline: "Aug 2022 – Aug 2023",
    currentPosition: "Software Engineer",
    place: "Deloitte",
    previousPositions: [],
    description:
      "Co-Developed an ETL platform leveraging AWS and Alteryx, reducing query latency by 40%. Rebuilt the IncentiveHub SaaS platform using Python, Django, and Azure Durable Functions and modernized a legacy monolithic API to FastAPI microservices on AWS EKS.",
    skills: ["Python", "AWS", "FastAPI", "Docker", "Kafka", "Airflow", "Azure"],
  },
  {
    timeline: "Jan 2021 – Jul 2021",
    currentPosition: "Software Engineer Intern",
    place: "Deloitte",
    previousPositions: [],
    description:
      "Implemented a CI/CD pipeline for TensorFlow models (TF Serving, GKE), reducing deployment time. Orchestrated security compliance checks across 200+ GCP environments using Python and GCP Security Command Center.",
    skills: ["Python", "TensorFlow", "GKE", "GCP", "CI/CD", "Security"],
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
            className="group lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent bg-transparent lg:backdrop-blur-sm lg:hover:bg-slate-200/40 dark:lg:hover:bg-white/5 lg:hover:backdrop-blur-md lg:hover:border-slate-300 dark:lg:hover:border-white/10 lg:hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:lg:hover:shadow-[0_8px_32px_0_rgba(100,100,255,0.05)] transition-colors duration-150"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap pt-1">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-slate-800 dark:text-slate-200 font-semibold group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, i) => (
                <p key={i} className="text-slate-600 dark:text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-slate-600 dark:text-muted-foreground group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, i) => (
                  <Badge key={i} className="bg-teal-100/50 text-teal-800 hover:bg-teal-200/50 dark:bg-teal-400/10 dark:text-teal-300 dark:hover:bg-teal-400/20 backdrop-blur-md border border-teal-200 dark:border-teal-400/20">{skill}</Badge>
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
