const technology = {
  react: "React",
  typescript: "TypeScript",
  javascript: "JavaScript",
  node: "Node.js",
  mysql: "MySQL",
  redis: "Redis",
  php: "PHP",
  tailwind: "TailwindCSS",
  express: "Express",
  html: "HTML5",
  css: "CSS3",
  vercel: "Vercel",
  mongodb: "MongoDB",
  jest: "Jest",
} as const;

type Technology = (typeof technology)[keyof typeof technology];

type Project = {
  name: string;
  date: string;
  description: string;
  techStack: Technology[];
  link: string;
  repoLinks: string[];
  pictures: string[];
};

type Job = {
  company: string;
  logo: string;
  dateStart: string;
  dateEnd: string;
  techStack: Technology[];
  description: string;
  companyLink: string;
  projectLinks: string[];
  title: string;
};

export { technology };
export type { Technology, Project, Job };
