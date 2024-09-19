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
  threejs: "Three.js",
  trello: "Trello",
} as const;

type Technology = (typeof technology)[keyof typeof technology];

const skill = {
  management: "Management",
  leadership: "Leadership",
  teaching: "Teaching",
} as const;

type Skill = (typeof skill)[keyof typeof skill];

type Project = {
  name: string;
  date: string;
  description: string;
  techStack: Technology[];
  link: string;
  repoLinks: string[];
  thumbnail: string;
  pictures: string[];
};

type Job = {
  company: string;
  logo: string;
  dateStart: string;
  dateEnd: string;
  techStack: Technology[];
  skills?: Skill[];
  description: string;
  companyLink: string;
  projectLinks: string[];
  title: string;
};

export { technology, skill };
export type { Technology, Skill, Project, Job };
