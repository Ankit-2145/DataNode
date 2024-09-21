"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { semesterOne } from "@/data/syllabusNotes";
import Link from "next/link";
import { Search } from "lucide-react";

export default function SubjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSubjects = semesterOne.filter(
    (subject) =>
      subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subject.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full dark:bg-black dark:bg-dot-white/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      <div className="w-full max-w-7xl mx-auto p-6 text-white rounded-lg shadow-lg my-28 relative z-10">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl md:text-6xl leading-normal text-transparent bg-clip-text bg-custom-gradient tracking-tight text-center font-semibold">
            Semester 1 Notes
          </h1>
          <p className="text-base text-center max-w-sm md:max-w-xl tracking-wider leading-8 mt-2.5 mb-10 text-gray-500">
            Explore concise, easy-to-understand notes for all core subjects,
            designed to help you master the basics and excel in your exams.
          </p>
        </div>

        <main className="flex-grow container mx-auto py-8 px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Available Subjects</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                className="pl-10 pr-4"
                placeholder="Search subjects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSubjects.map((subject, index) => (
              <Card
                key={index}
                className="hover:shadow-[0_0px_10px_rgba(56,189,248,1)] hover:border-sky-400 duration-300"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {React.createElement(subject.icon, {
                      className: "w-6 h-6",
                    })}
                    {subject.name}
                  </CardTitle>
                  <CardDescription>{subject.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">{subject.difficulty}</Badge>
                    <Link href={subject.url}>
                      <Button variant="outline">Learn More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredSubjects.length === 0 && (
            <div className="text-center text-muted-foreground mt-8">
              No subjects found matching your search.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
