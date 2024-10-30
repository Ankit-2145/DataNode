"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function Features() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full p-5 lg:p-0">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-4xl leading-normal mt-5 text-white tracking-tight font-semibold">
            Comprehensive Syllabus Notes
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Detailed notes covering the entire syllabus, organized by subject
            and semester, to help students with their studies.
          </p>
        </div>
        <Image
          src="/syllabus-guide.png"
          width={500}
          height={500}
          alt="syllabus guide image"
          className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-4xl leading-normal mt-5 text-white tracking-tight font-semibold">
          Previous Year Question Papers
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Access to a repository of previous year question papers, allowing
          students to practice and prepare for exams effectively.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-4xl leading-normal mt-5 text-white tracking-tight font-semibold">
            Exam Questions & Revision Guides
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Find important exam-asked questions and quick revision guides to boost
            your last-minute preparation.
          </p>
        </div>
        <Image
          src="/pyqs.png"
          width={500}
          height={500}
          alt="pyqs image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[10%] -bottom-5 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
