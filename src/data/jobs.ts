import type { Job } from "./types";
import { skill, technology } from "./types";
import OneCommunity from "../assets/images/logos/OneCommunity.webp";
import BeFrugal from "../assets/images/logos/BeFrugal.png";
import XSET from "../assets/images/logos/XSET.png";
import Alia from "../assets/images/logos/Alia.webp";

export const jobs: Job[] = [
  {
    company: "One Community Global",
    logo: OneCommunity,
    dateStart: "May 2024",
    dateEnd: "September 2024",
    techStack: [
      technology.html,
      technology.css,
      technology.javascript,
      technology.react,
      technology.node,
      technology.express,
      technology.mongodb,
      technology.jest,
    ],
    description:
      "Fullstack engineering, bugfixing, and unit testing for nonprofit organization",
    companyLink: "https://www.onecommunityglobal.org/",
    projectLinks: [],
    title: "Fullstack Software Engineer",
  },
  {
    company: "BeFrugal",
    logo: BeFrugal,
    dateStart: "February 2023",
    dateEnd: "October 2023",
    techStack: [technology.javascript, technology.css, technology.html],
    description:
      "Web extensions - widget and new tab - built for cash back, coupons, and deals",
    companyLink: "https://www.befrugal.com/",
    projectLinks: [
      "https://chrome.google.com/webstore/detail/befrugal-rewards/dmgghlknphpmkpejiogmpgllncfdpffm",
      "https://chromewebstore.google.com/detail/befrugal-automatic-coupon/logldmlncddmdfcjaaljjjkajcnacigc?hl=en-US",
    ],
    title: "Frontend Software Engineer",
  },
  {
    company: "XSET",
    logo: XSET,
    dateStart: "June 2022",
    dateEnd: "September 2022",
    techStack: [
      technology.php,
      technology.html,
      technology.css,
      technology.mysql,
    ],
    description: "Innovative web applications for small content creators",
    companyLink: "https://www.xset.com/",
    projectLinks: [],
    title: "Fullstack Software Engineer",
  },
  {
    company: "Generate Product Development - Alia",
    logo: Alia,
    dateStart: "July 2022",
    dateEnd: "December 2022",
    techStack: [technology.trello],
    skills: [skill.management, skill.leadership],
    description:
      "Led a team of engineers and designers to build the MVP of Alia - a Shopify popup that aids in customer conversion by rewarding customers for engaging in company content",
    companyLink: "https://www.alialearn.com/",
    projectLinks: [],
    title: "Project Manager",
  },
];
