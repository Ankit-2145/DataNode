"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
  ChevronRight,
} from "lucide-react"

interface Category {
  id: string
  name: string
}

interface RoadmapItem {
  name: string
  icon: React.ElementType
  link: string
}

const categories: Category[] = [
  { id: "roles", name: "Role-Based Roadmaps" },
  { id: "skills", name: "Skill-Based Roadmaps" },
  { id: "tools", name: "Essential Tools" },
]

const roadmaps: Record<string, RoadmapItem[]> = {
  roles: [
    { name: "Frontend Developer", icon: Code, link: "https://roadmap.sh/frontend?r=frontend-beginner" },
    { name: "Fullstack Developer", icon: Laptop, link: "https://roadmap.sh/full-stack" },
    { name: "Cyber Security", icon: Shield, link: "https://roadmap.sh/cyber-security" },
    { name: "Blockchain Developer", icon: Bitcoin, link: "https://roadmap.sh/blockchain" },
    { name: "Backend Developer", icon: Server, link: "https://roadmap.sh/backend" },
    { name: "UX/UI Designer", icon: Paintbrush, link: "https://roadmap.sh/ux-design" },
    { name: "Android Developer", icon: Smartphone, link: "https://roadmap.sh/android" },
    { name: "DevOps", icon: Settings, link: "https://roadmap.sh/devops?r=devops-beginner" },
  ],
  skills: [
    { name: "React", icon: Code, link: "https://roadmap.sh/react" },
    { name: "Python", icon: Code, link: "https://roadmap.sh/python" },
    { name: "Node.js", icon: FileJson, link: "https://roadmap.sh/nodejs" },
    { name: "JavaScript", icon: Code, link: "https://roadmap.sh/javascript" },
    { name: "TypeScript", icon: FileType, link: "https://roadmap.sh/typescript" },
    { name: "MongoDB", icon: Database, link: "https://roadmap.sh/mongodb" },
    { name: "Java", icon: Coffee, link: "https://roadmap.sh/java" },
    { name: "Docker", icon: Code, link: "https://roadmap.sh/docker" },
  ],
  tools: [
    { name: "UI/UX Tools", icon: Code, link: "/tool/uiux" },
    { name: "Code Editor", icon: Code, link: "/tool/code-editor" },
    { name: "Version Control System", icon: Code, link: "/tool/vcs" },
    { name: "Command Line Interface", icon: Terminal, link: "/tool/cli" },
    { name: "Package Managers", icon: PackageOpen, link: "/tool/package-managers" },
    { name: "Debugging Tools", icon: Bug, link: "/tool/debugging" },
    { name: "Integrated Development Environment (IDE)", icon: Laptop, link: "/tool/ide" },
  ],
}

export default function CareerGuidance() {
  const [activeCategory, setActiveCategory] = useState<string>("roles")

  return (
    <div className="container mx-auto py-6 px-4 space-y-6">      
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            variant={activeCategory === category.id ? "default" : "outline"}
            className="text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2"
          >
            {category.name}
          </Button>
        ))}
      </div>

      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
      >
        {roadmaps[activeCategory].map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Link href={item.link} target="blank" passHref>
              <Card className="group transition-all transform hover:-translate-y-1 cursor-pointer overflow-hidden h-full dark:bg-card hover:shadow-[0_0px_10px_rgba(56,189,248,1)] hover:border-sky-400 duration-300">
                <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center h-full">
                  <div className="rounded-full bg-primary/10 p-2 sm:p-3 mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors duration-300 group-hover:shadow-[0_0px_10px_rgba(56,189,248,1)] hover:border-sky-400">
                    {<item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300 dark:text-gray-300 dark:group-hover:text-white" />}
                  </div>
                  <h3 className="font-semibold text-center text-base sm:text-lg mb-2 group-hover:text-primary transition-colors duration-300 dark:text-gray-200 dark:group-hover:text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-center text-muted-foreground mb-3 sm:mb-4 dark:text-gray-400">
                    Explore the path to becoming a {item.name.toLowerCase()}
                  </p>
                  <div className="mt-auto flex items-center text-primary group-hover:text-primary-foreground transition-colors duration-300 dark:text-gray-300 dark:group-hover:text-white">
                    <span className="text-xs sm:text-sm font-medium">Learn More</span>
                    <ChevronRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}