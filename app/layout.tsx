import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dulshan Ranathunga | Software Engineering Intern & Full-Stack Developer",
  description:
    "Portfolio of Dulshan Ranathunga, 3rd-year IT undergraduate at SLIIT specializing in Full-Stack Web Development, React, Next.js, Java, and Spring Boot.",
  keywords: [
    "Dulshan Ranathunga",
    "Software Engineering Intern",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Spring Boot",
    "Java",
    "SLIIT",
    "Portfolio",
  ],
  authors: [{ name: "Dulshan Ranathunga" }],
  openGraph: {
    title: "Dulshan Ranathunga | Software Engineering Intern",
    description:
      "3rd-year IT undergraduate at SLIIT specializing in full-stack web development using React, Next.js, Java, and Spring Boot.",
    type: "website",
    url: "https://dulshanranathunga.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
