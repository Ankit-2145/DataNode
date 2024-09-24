import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
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

const roadmaps = {
  roles: [
    { name: "Frontend Developer", icon: Code },
    { name: "Fullstack Developer", icon: Laptop },
    { name: "Cyber Security", icon: Shield },
    { name: "Blockchain Developer", icon: Bitcoin },
    { name: "Backend Developer", icon: Server },
    { name: "UX/UI Designer", icon: Paintbrush },
    { name: "Android Developer", icon: Smartphone },
    { name: "DevOps", icon: Settings },
  ],
  skills: [
    { name: "React", icon: Code },
    { name: "Python", icon: Code },
    { name: "Node.js", icon: FileJson },
    { name: "JavaScript", icon: Code },
    { name: "TypeScript", icon: FileType },
    { name: "MongoDB", icon: Database },
    { name: "Java", icon: Coffee },
    { name: "Docker", icon: Code },
  ],
  tools: [
    { name: "UI/UX Tools", icon: Code },
    { name: "Code Editor", icon: Code },
    { name: "Version Control System", icon: Code },
    { name: "Command Line Interface", icon: Terminal },
    { name: "Package Managers", icon: PackageOpen },
    { name: "Debugging Tools", icon: Bug },
    { name: "Integrated Development Environment (IDE)", icon: Laptop },
  ],
};

export default function CareerGuidance() {
  const [activeTab, setActiveTab] = useState("roles");

  return (
    <div className="container mx-auto py-6 sm:py-12 px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">
        Career Guidance
      </h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="roles" className="text-xs sm:text-sm">
            Role-Based Roadmaps
          </TabsTrigger>
          <TabsTrigger value="skills" className="text-xs sm:text-sm">
            Skill-Based Roadmaps
          </TabsTrigger>
          <TabsTrigger value="tools" className="text-xs sm:text-sm">
            Essential Tools
          </TabsTrigger>
        </TabsList>
        {Object.entries(roadmaps).map(([category, items]) => (
          <TabsContent key={category} value={category}>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl md:text-2xl">
                  {category === "roles"
                    ? "Role-Based Roadmaps"
                    : category === "skills"
                    ? "Skill-Based Roadmaps"
                    : "Essential Tools"}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  {category === "roles"
                    ? "Explore career paths based on different tech roles."
                    : category === "skills"
                    ? "Discover the skills you need to succeed in tech."
                    : "Learn about the tools used by professional developers."}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] sm:h-[400px] w-full pr-4">
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {items.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                          <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6">
                            <div className="rounded-full bg-primary/10 p-2 sm:p-3 mb-2 sm:mb-4">
                              {item.icon && (
                                <item.icon className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                              )}
                            </div>
                            <h3 className="font-semibold text-center text-sm sm:text-base">
                              {item.name}
                            </h3>
                            <Badge
                              variant="secondary"
                              className="mt-2 text-xs sm:text-sm"
                            >
                              Learn More
                            </Badge>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
