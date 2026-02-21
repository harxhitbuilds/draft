import {
  ArrowRight,
  Lightbulb,
  TwitterIcon,
  UserCircle,
  Users,
} from "lucide-react";

export const heroConfig = {
  line1: "Discover Ideas. Meet Builders.",
  line2: "A Platform to ",
  words: ["Read!", "Connect!", "Explore!", "Grow!"],
  para: `Draft is a minimalist, zero-friction hub where creators drop raw ideas and assemble the exact talent they need to execute them.`,
  ctabtns: [
    {
      title: "Start Exploring Ideas",
      link: "/home",
      type: "default",
      _blank: false,
      icon: <ArrowRight />,
    },
    {
      title: "Follow on Twitter",
      link: "https://x.com/harxhitbuilds",
      type: "outline",
      icon: <TwitterIcon />,
      _blank: true,
    },
  ],
  heroImage: {
    src: "/assets/dashboard.png",
    alt: "Collaborative team building ideas together",
  },
};

export const features = [
  {
    badge: "Trending Ideas",
    title: "Explore Innovative Ideas",
    description:
      "Browse a curated feed of project ideas from developers around the world. Find inspiration and discover opportunities to collaborate.",
    img: "/assets/landing/dashboard.png",
    icon: <Lightbulb />,
    badgeContent: "See what's popular and new in the community.",
  },
  {
    badge: "Share & Inspire",
    title: "Share Your Vision",
    description:
      "Post your own ideas with detailed descriptions, technology stacks, and requirements. Attract collaborators and bring your vision to life.",
    img: "/assets/landing/read-idea.png",
    icon: <Users />,
    badgeContent: "Showcase your creativity and inspire others.",
  },
  {
    badge: "Connect Profiles",
    title: "Connect Through Profiles",
    description:
      "Visit creator profiles to see their skills, posted ideas, and social media links. Reach out and start building together.",
    img: "/assets/landing/profile.png",
    icon: <UserCircle />,
    badgeContent: "Find and connect with builders easily.",
  },
  {
    badge: "Grow Network",
    title: "Build Your Network",
    description:
      "Grow your developer network by connecting with like-minded builders. Collaborate, learn, and achieve more as a team.",
    img: "/assets/landing/post-idea.png",
    icon: <Users />,
    badgeContent: "Expand your circle and collaborate on projects.",
  },
];

export const demoIdeas = [
  {
    title: "AI-Powered Recipe Generator",
    owner: {
      name: "Harshit Parmar",
      username: "harxhitbuilds",
    },
    description:
      "A mobile app that generates unique recipes based on ingredients you have at home, reducing food waste.",
    technologies: [
      { name: "React Native" },
      { name: "Python" },
      { name: "TensorFlow" },
    ],
    status: "open",
    slug: "ai-recipe-generator",
    lookingForCollaboratos: true,
    requirements: ["Frontend Developer", "Backend Developer", "UI/UX Designer"],
  },
  {
    title: "Collaborative Storytelling Platform",
    owner: {
      name: "Aarav Singh",
      username: "aaravwrites",
    },
    description:
      "A web platform where users can start a story and others can add to it, creating a branching narrative.",
    technologies: [
      { name: "Next.js" },
      { name: "GraphQL" },
      { name: "WebSockets" },
    ],
    status: "in-progress",
    slug: "collaborative-storytelling",
    lookingForCollaboratos: true,
    requirements: ["Full-Stack Developer", "Product Designer"],
  },
];

export const faqConfig = {};
