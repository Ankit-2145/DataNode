"use client";

import { useState, useMemo } from "react";
import { CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { pyqsSem12021, pyqsSem12022, PYQ } from "@/data/papers";

export default function SemesterOneFinalsBCA() {
  const [activeYear, setActiveYear] = useState("2022");

  // const renderPapers = useMemo(
  //   () => (papers: PYQ[]) =>
  //     (
  //       <div className="space-y-4">
  //         {papers.map((pyq) => (
  //           <div
  //             key={pyq.id}
  //             className="flex items-center gap-4 p-4 bg-[#0A0A0A] rounded-lg"
  //           >
  //             <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
  //             <div className="flex-grow">
  //               <h2 className="text-base font-semibold">{pyq.title}</h2>
  //             </div>
  //             <div className="flex items-center gap-2 flex-shrink-0">
  //               <Button variant="link" size="sm" asChild>
  //                 <a href={pyq.downloadUrl} download>
  //                   <Download className="w-4 h-4 mr-2" />
  //                   Download
  //                 </a>
  //               </Button>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     ),
  //   []
  // );

  const renderPapers = (papers: PYQ[]) => (
    <div className="space-y-4">
      {papers.map((pyq) => (
        <div
          key={pyq.id}
          className="flex items-center gap-4 p-4 bg-[#0A0A0A] rounded-lg"
        >
          <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
          <div className="flex-grow">
            <h2 className="text-base font-semibold">{pyq.title}</h2>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button variant="link" size="sm" asChild>
              <a href={pyq.downloadUrl} download>
                <Download className="w-4 h-4 mr-2" />
                Download
              </a>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );


  return (
    <div className="w-full dark:bg-black dark:bg-dot-white/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
      <div className="w-full max-w-4xl mx-auto p-6 text-white rounded-lg shadow-lg my-28 relative z-10">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl md:text-6xl leading-normal text-transparent bg-clip-text bg-custom-gradient tracking-tight text-center font-semibold">
            Semester 1 Papers
          </h1>
          <p className="text-base text-center max-w-sm md:max-w-xl tracking-wider leading-8 mt-2.5 mb-10 text-gray-500">
            A curated set of questions papers from past exams to help you
            prepare effectively.
          </p>
        </div>

        <Tabs defaultValue="2022" onValueChange={setActiveYear}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="2022">2022 Papers</TabsTrigger>
            <TabsTrigger value="2021">2021 Papers</TabsTrigger>
          </TabsList>
          <TabsContent value="2022">{renderPapers(pyqsSem12022)}</TabsContent>
          <TabsContent value="2021">{renderPapers(pyqsSem12021)}</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
