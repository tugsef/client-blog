import InsightRoll from "@/components/About/InsightRoll";


const insights = [
  "Software Developer",
    "5+ Projects Completed",
    "3+ Years of Freelancing",
    "500+ Subscribers",
    "Authored In-Depth Course on Educative",
    "Java",
    "Nextjs",
    "Nestjs",
    "Docker",
    "Node",
    "CSS",
    "HTML",
    "Typescript",
    "JavaScript",
    "SpringBoot",
    "GIT",
    "OOP",
    "TailwindCSS",
    "Kubernates",
    "React",
    "Angular"
  ];

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <main className="w-full flex flex-col items-center justify-between ">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}