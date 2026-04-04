import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "matthyk's blog",
  EMAIL: "hello@keckl.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_TALKS_ON_HOMEPAGE: 3,
  AUTHOR: "Matthias Keckl"
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const CV: Metadata = {
  TITLE: "CV",
  DESCRIPTION: "My professional experience and core skills.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const TALKS: Metadata = {
  TITLE: "Talks",
  DESCRIPTION: "Talks and presentations I have given.",
};

export const IMPRESSUM: Metadata = {
  TITLE: "Impressum",
  DESCRIPTION: "Legal notice with provider information for this website.",
};

export const PRIVACY_POLICY: Metadata = {
  TITLE: "Datenschutzerklaerung",
  DESCRIPTION: "Informationen darueber, wie personenbezogene Daten auf dieser Website verarbeitet werden.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/matthyk"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/matthias-keckl",
  }
];
