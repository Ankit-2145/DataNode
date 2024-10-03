"use client";

import { notFound } from "next/navigation";
import { academicsSections, SectionData } from "@/data/academicsData";
import CardsHeading from "@/components/academics-ui/CardsHeading";
import CardSection from "@/components/academics-ui/CardSection";

export default function SectionPage({
  params,
}: {
  params: { section: string };
}) {
  const sectionTitle = decodeURIComponent(params.section).replace(/-/g, " ");
  const section = academicsSections.find(
    (s: SectionData) => s.title.toLowerCase() === sectionTitle.toLowerCase()
  );

  if (!section) {
    notFound();
  }

  return (
    <main className="overflow-hidden">
      <div className="w-full dark:bg-black dark:bg-dot-white/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl leading-normal mt-28 pb-2 text-transparent bg-clip-text bg-custom-gradient tracking-tight text-center font-semibold">
            {section.title}
          </h1>
        </div>
        <div>
          <CardSection cardData={section.cardData} />
        </div>
      </div>
    </main>
  );
}
