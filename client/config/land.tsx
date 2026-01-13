import { ArrowRight, Lightbulb, Users, UserCircle } from "lucide-react";

export const heroConfig = {
  line1: "Enter with an Idea.",
  line2: "Leave with a Team That ",
  words: ["Build!", "Ship!", "Design!", "Develop!"],
  para: `Turn raw ideas into real products. Share your vision, find skilled collaborators,
and execute faster with a focused, builder-first platform.`,
  ctabtns: [
    {
      title: "Start Building",
      link: "/auth",
      type: "primary",
    },
    {
      title: "How It Works",
      link: "#",
      type: "secondary",
      icon: <ArrowRight />,
    },
  ],
  heroImage: {
    src: "/assets/hero-section-img.png",
    alt: "Collaborative team building ideas together",
  },
};

export const features = [
  {
    title: "Post Project Ideas",
    description:
      "Share your ideas with a clear description, tech stack, and vision so others can quickly understand what you're building.",
  },
  {
    title: "Explore Ideas Publicly",
    description:
      "Browse ideas posted by other developers and discover projects that match your interests.",
  },
  {
    title: "Creator Profiles",
    description:
      "View developer profiles with their skills, posted ideas, and social media links.",
  },
  {
    title: "Team Visibility",
    description:
      "See who is already working on an idea and what roles they are handling.",
  },
  {
    title: "Markdown-Powered Writing",
    description:
      "Write rich, structured ideas using Markdown with support for code blocks and formatting.",
  },
  {
    title: "Share Anywhere",
    description:
      "Every idea has a public link optimized for sharing on social platforms.",
  },
];

export const steps = [
  {
    number: 1,
    title: "Post your idea",
    description: "Share your project idea, vision, and what you want to build",
    icon: Lightbulb,
  },
  {
    number: 2,
    title: "Explore ideas",
    description:
      "Browse ideas posted by other creators and discover interesting projects",
    icon: Users,
  },
  {
    number: 3,
    title: "Connect with creators",
    description:
      "View profiles, check social media links, and connect outside the platform",
    icon: UserCircle,
  },
];

export const teamMembers = [
  { name: "Alex Chen", initials: "AC", color: "bg-blue-500" },
  { name: "Sarah Kim", initials: "SK", color: "bg-purple-500" },
  { name: "Marcus Johnson", initials: "MJ", color: "bg-green-500" },
];

export const techStack = ["React", "Node.js", "PostgreSQL", "Tailwind"];

export const idea = {
  title: "AI-Powered Recipe Generator",
  owner: {
    name: "Harshit Parmar",
    username : "harxhitbuilds"
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
};
