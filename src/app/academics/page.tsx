"use client";

// React and Next.js imports
import React from "react";

// Internal imports
import { academicsSections, SectionData } from "@/data/academicsData";
import CardsHeading from "@/components/academics-ui/CardsHeading";
import CardSection from "@/components/academics-ui/CardSection";


export default function Academics() {
  return (
    <main className="overflow-hidden">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl leading-normal mt-28 text-transparent bg-clip-text bg-custom-gradient tracking-tight text-center font-semibold">
          Academics
        </h1>
        <p className="text-base text-center max-w-sm md:max-w-xl tracking-wider leading-8 mt-2.5 mb-10 text-gray-500">
          Access syllabus notes, past papers, study guides and more to help you
          excel in your exams.
        </p>
      </div>
      {academicsSections.map((section: SectionData, index: number) => (
        <React.Fragment key={section.title}>
          <CardsHeading
            title={section.title}
            url={`/academics/${encodeURIComponent(section.title.toLowerCase().replace(/ /g, '-'))}`}
            text="view more"
            otherClasses={section.otherClasses}
            buttonClasses={section.buttonClasses}
          />
          <CardSection
            key={`${section.title}-${index}`}
            cardData={section.cardData}
          />
        </React.Fragment>
      ))}
    </main>
  );
}

