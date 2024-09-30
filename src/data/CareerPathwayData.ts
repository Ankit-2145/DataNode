import {
  Code,
  Shield,
  Bitcoin,
  Server,
  Paintbrush,
  Smartphone,
  Settings,
  FileJson,
  FileType,
  Database,
  Coffee,
  Terminal,
  PackageOpen,
  Bug,
  Laptop,
} from "lucide-react";

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface RoadmapItem {
  name: string;
  icon: React.ElementType;
  link: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "roles",
    name: "Role-Based Roadmaps",
    description:
      "Explore comprehensive career paths tailored to specific roles in the tech industry. These roadmaps provide a structured guide to help you navigate your chosen career trajectory.",
  },
  {
    id: "skills",
    name: "Skill-Based Roadmaps",
    description:
      "Focus on mastering individual technologies and programming languages. These roadmaps offer detailed learning paths to help you become proficient in specific technical skills.",
  },
];

export const roadmaps: Record<string, RoadmapItem[]> = {
  roles: [
    {
      name: "Frontend Developer",
      icon: Code,
      link: "https://roadmap.sh/frontend?r=frontend-beginner",
      description:
        "Master the art of creating engaging user interfaces and interactive web applications.",
    },
    {
      name: "Fullstack Developer",
      icon: Laptop,
      link: "https://roadmap.sh/full-stack",
      description:
        "Become proficient in both frontend and backend technologies to build complete web solutions.",
    },
    {
      name: "Cyber Security",
      icon: Shield,
      link: "https://roadmap.sh/cyber-security",
      description:
        "Learn to protect digital assets and systems from cyber threats and vulnerabilities.",
    },
    {
      name: "Blockchain Developer",
      icon: Bitcoin,
      link: "https://roadmap.sh/blockchain",
      description:
        "Dive into the world of decentralized applications and cryptocurrency technologies.",
    },
    {
      name: "Backend Developer",
      icon: Server,
      link: "https://roadmap.sh/backend",
      description:
        "Explore server-side programming and database management to power robust applications.",
    },
    {
      name: "UX/UI Designer",
      icon: Paintbrush,
      link: "https://roadmap.sh/ux-design",
      description:
        "Craft intuitive and visually appealing user experiences for digital products.",
    },
    {
      name: "Android Developer",
      icon: Smartphone,
      link: "https://roadmap.sh/android",
      description:
        "Build native mobile applications for the Android operating system.",
    },
    {
      name: "DevOps",
      icon: Settings,
      link: "https://roadmap.sh/devops?r=devops-beginner",
      description:
        "Bridge the gap between development and operations to streamline software delivery.",
    },
  ],
  skills: [
    {
      name: "React",
      icon: Code,
      link: "https://roadmap.sh/react",
      description:
        "Learn to build efficient and scalable user interfaces with this popular JavaScript library.",
    },
    {
      name: "Python",
      icon: Code,
      link: "https://roadmap.sh/python",
      description:
        "Master this versatile language used in web development, data science, and artificial intelligence.",
    },
    {
      name: "Node.js",
      icon: FileJson,
      link: "https://roadmap.sh/nodejs",
      description:
        "Explore server-side JavaScript to build fast and scalable network applications.",
    },
    {
      name: "JavaScript",
      icon: Code,
      link: "https://roadmap.sh/javascript",
      description:
        "Dive deep into the core language powering modern web development.",
    },
    {
      name: "TypeScript",
      icon: FileType,
      link: "https://roadmap.sh/typescript",
      description:
        "Enhance your JavaScript skills with static typing and advanced features.",
    },
    {
      name: "MongoDB",
      icon: Database,
      link: "https://roadmap.sh/mongodb",
      description:
        "Learn to work with this popular NoSQL database for modern applications.",
    },
    {
      name: "Java",
      icon: Coffee,
      link: "https://roadmap.sh/java",
      description:
        "Discover the ins and outs of this widely-used, object-oriented programming language.",
    },
    {
      name: "Docker",
      icon: Code,
      link: "https://roadmap.sh/docker",
      description:
        "Master containerization to simplify application deployment and scaling.",
    },
  ],
};
