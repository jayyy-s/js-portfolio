import type { Project } from "./types";
import { technology } from "./types";
import FakeArtist from "../assets/images/logos/FakeArtist.png";
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
];
