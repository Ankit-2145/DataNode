"use client";

import React from "react";
import MastersPrograms from "@/components/carrers-ui/MasterProgram";

export default function Masters() {
  return (
    <main className="overflow-hidden">
      <div className="w-full dark:bg-black dark:bg-dot-white/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl leading-normal mt-28 pb-2 text-transparent bg-clip-text bg-custom-gradient tracking-tight text-center font-semibold">
            Master&apos;s Programs
          </h1>
          <p className="text-base text-center max-w-sm md:max-w-xl tracking-wider leading-8 mt-2.5 mb-10 text-muted-foreground">
            A master&apos;s degree enhances specialization and career
            opportunities in computer science.
          </p>
        </div>
        <div className="w-full mx-auto p-6 text-white rounded-lg shadow-lg">
          <MastersPrograms />
        </div>
      </div>
    </main>
  );
}
