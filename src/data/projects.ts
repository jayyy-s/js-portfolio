import type { Project } from "./types";
import { technology } from "./types";
import FakeArtist from "../assets/images/logos/FakeArtist.png";
import BearPorfolio from "../assets/images/logos/BearPortfolio.png";
import fakeArtistVoting from "../assets/images/fake_artist_voting_screen.png";
import fakeArtistWinner from "../assets/images/fake_artist_winner_screen.png";

export const projects: Project[] = [
  {
    name: "A Fake Artist",
    date: "2024",
    description: "Social deduction drawing game built for the web",
    techStack: [
      technology.react,
      technology.html,
      technology.typescript,
      technology.tailwind,
      technology.redis,
      technology.node,
      technology.express,
      technology.vercel,
    ],
    link: "https://a-fake-artist.vercel.app/",
    repoLinks: [
      "https://github.com/jayyy-s/fake-artist-frontend",
      "https://github.com/jayyy-s/fake-artist-backend",
    ],
    thumbnail: FakeArtist,
    pictures: [fakeArtistVoting, fakeArtistWinner],
  },
  {
    name: "Jay's Portfolio",
    date: "2024",
    description: "Personal website designed and developed by me",
    techStack: [
      technology.react,
      technology.html,
      technology.typescript,
      technology.tailwind,
      technology.threejs,
    ],
    link: "https://jayyy-s.github.io/js-portfolio/",
    repoLinks: ["https://github.com/jayyy-s/js-portfolio"],
    thumbnail: BearPorfolio,
    pictures: [fakeArtistVoting, fakeArtistWinner],
  },
];
