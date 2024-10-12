"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { categories, roadmaps } from "@/data/CareerPathwayData";
import { ChevronRight } from "lucide-react";

export default function CareerGuidance() {
  const [activeCategory, setActiveCategory] = useState<string>("roles");

  return (
    <div className="container mx-auto py-8 px-4 space-y-8">
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            variant={activeCategory === category.id ? "default" : "outline"}
            className="text-sm px-4 py-2"
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
        className="space-y-6"
      >
        <p className="text-base text-muted-foreground text-center max-w-3xl mx-auto">
          {categories.find((cat) => cat.id === activeCategory)?.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {roadmaps[activeCategory].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={item.link} target="_blank" rel="noopener noreferrer">
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-primary/10">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="rounded-full bg-primary/10 p-3 mb-4 w-12 h-12 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">
                      {item.description}
                    </p>
                    <div className="mt-auto flex items-center text-primary group-hover:text-primary-foreground transition-colors duration-300 group-hover:text-white">
                      <span className="text-sm font-medium">Learn More</span>
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
