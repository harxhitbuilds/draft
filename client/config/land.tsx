import { ArrowRight, Lightbulb, Package, Users, Zap } from "lucide-react";
export const heroConfig = {
  line1: "Enter with an Idea.",
  line2: "Leave with a Team That ",
  words: ["Build!", "Ship!", "Design!", "Develop!"],
  para: `Turn raw ideas into real products. Share your vision, find skilled collaborators,
and execute faster with a focused, builder-first platform.`,
  badge: "From idea to execution all in one place",
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
    src: "/assets/hero-img.webp",
    alt: "Collaborative team building ideas together",
  },
};

export const features = [
  {
    title: "Share Project Ideas",
    description:
      "Post ideas with a clear description, tech stack, and requirements so others can quickly understand and join.",
  },
  {
    title: "Build Teams Publicly",
    description:
      "Show current team members, open roles, and project status in one place.",
  },
  {
    title: "Structured Join Requests",
    description:
      "Request to join a project with intent. No random DMs or spam.",
  },
  {
    title: "Developer Profiles",
    description:
      "Profiles focus on skills, ideas posted, and collaborations — nothing unnecessary.",
  },
  {
    title: "Markdown Support",
    description:
      "Write detailed ideas using Markdown with support for code blocks and formatting.",
  },
  {
    title: "Easy Sharing",
    description:
      "Every idea has a public link optimized for sharing on X and other platforms.",
  },
];

export const steps = [
  {
    number: 1,
    title: "Post your idea",
    description: "Share your project concept and what you want to build",
    icon: Lightbulb,
  },
  {
    number: 2,
    title: "Add tech stack and roles",
    description: "Define the technologies and positions you need filled",
    icon: Package,
  },
  {
    number: 3,
    title: "Developers send join requests",
    description: "Interested developers apply to join your project team",
    icon: Users,
  },
  {
    number: 4,
    title: "Build together",
    description: "Collaborate with your team to bring your idea to life",
    icon: Zap,
  },
];

export const teamMembers = [
  { name: "Alex Chen", initials: "AC", color: "bg-blue-500" },
  { name: "Sarah Kim", initials: "SK", color: "bg-purple-500" },
  { name: "Marcus Johnson", initials: "MJ", color: "bg-green-500" },
];

export const techStack = ["React", "Node.js", "PostgreSQL", "Tailwind"];
