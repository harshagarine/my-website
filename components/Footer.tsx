"use client";

export default function Footer() {
  return (
    <section>
      <div className="flex flex-col gap-4 lg:px-6 mt-16">
        <p className="text-sm text-start text-muted-foreground">
          Based on{" "}
          <a className="text-foreground" href="https://github.com/0xAlexander" target="_blank">
          Alexander&#39;s 
          </a>{" "}
          and{" "}
          <a className="text-foreground" href="https://brittanychiang.com" target="_blank">
          Brittany Chiang&#39;s
          </a>{" "}
          design. Coded in{" "}
          <a className="text-foreground" href="https://code.visualstudio.com/" target="_blank">
            Visual Studio Code.
          </a>{" "}
          Built with{" "}
          <a className="text-foreground" href="https://nextjs.org/" target="_blank">
            Next.js
          </a>
          ,{" "}
          <a className="text-foreground" href="https://tailwindcss.com/" target="_blank">
            Tailwind CSS
          </a>{" "}
          and{" "}
          <a className="text-foreground" href="https://ui.shadcn.com/" target="_blank">
            Shadcn/ui
          </a>
          , deployed with{" "}
          <a className="text-foreground" href="https://github.com/" target="_blank">
            Github Pages
          </a>
          .
        </p>
      </div>
    </section>
  );
}
