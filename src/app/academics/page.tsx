"use client";

import React from "react";
import CardSection from "@/components/academics-ui/CardSection";
import { ChevronRight } from "lucide-react";

export default function about() {
  return (
    <>
      <main className="overflow-hidden">
        <div className="flex flex-col items-center">
          <h4 className="text-6xl leading-normal mt-28 text-transparent bg-clip-text bg-custom-gradient tracking-tight text-center font-semibold">
            Academics
          </h4>
          <p className="text-base text-center max-w-sm md:max-w-xl tracking-wider leading-8 mt-2.5 mb-10 text-gray-500">
            Welcome to your academic hub! Access syllabus notes, past papers,
            and study guides to help you excel in your exams.
          </p>
        </div>

        {/* <div className="container flex items-center justify-between gap-3 px-4 pt-5">
          <div>
            <h2 className="relative text-3xl font-bold text-center tracking-tight bg-clip-text text-transparent select-none bg-gradient-to-r from-sky-500 to-sky-500 dark:from-sky-500 dark:to-sky-200 pl-0 md:pl-40">
              <div className="absolute -left-8 -z-10 h-12 w-32 rounded-full blur-3xl dark:bg-sky-300 bg-sky-600/50"></div>
              Great for Beginners
            </h2>
          </div>
          <div>
            <button className="inline-flex justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ring-offset-background h-10 px-4 group items-center whitespace-nowrap rounded-full py-2 pl-4 pr-3 backdrop-blur-sm bg-sky-500/10 text-sky-700 hover:text-sky-700 dark:text-sky-300 dark:bg-sky-300/10 hover:bg-sky-500/20 dark:hover:bg-sky-300/20">
              view more
              <ChevronRight className="ml-2 h-4 w-4 stroke-[3] duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div> */}
        <CardSection />
      </main>
    </>
  );
}
