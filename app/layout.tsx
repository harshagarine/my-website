import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.linkedin.com/in/harshagarine/"),
  alternates: {
    canonical: "https://www.linkedin.com/in/harshagarine/",
  },
  title: "Harsha Garine",
  description:
    "Harsha Garine is a Software Engineer, Data Science and AI nerd.",
  keywords:
    "Harsha Garine, Front-end Engineer, Software Engineer, Web Development, Angular, Quality Assurance, Software Engineering, AI, machine learning, Artificial Engineering, Generative AI, deep learning",
  openGraph: {
    locale: "en_US",
    siteName: "Harsha Garine",
    type: "website",
    title: "Harsha Garine",
    description:
      "Harsha Garine is a Software Engineer, Data Science and AI nerd.",
    url: "https://www.linkedin.com/in/harshagarine/",
    images: [
      {
        url: "./og-large-meik.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsha Garine",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
