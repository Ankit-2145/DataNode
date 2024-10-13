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
        <p className="text-base text-center max-w-sm md:max-w-xl tracking-wider leading-8 mt-2.5 mb-10 text-muted-foreground">
          Access syllabus notes, past papers, study guides and more to help you
          excel in your exams.
        </p>
      </div>
      {academicsSections.map((section: SectionData, index: number) => (
        <React.Fragment key={section.title}>
          <CardsHeading
            title={section.title}
            url={`/academics/${encodeURIComponent(
              section.title.toLowerCase().replace(/ /g, "-")
            )}`}
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

// interface CardData {
//   title: string;
//   difficulty: "Beginner" | "Intermediate" | "Advanced" | "BCA" | "ComingSoon";
//   comments: number;
//   likes: number;
//   author: string;
//   date: string;
//   description: string;
//   url: string;
//   BackgroundIcon1: LucideIcon;
//   BackgroundIcon2: LucideIcon;
//   icon1Color: string;
//   icon2Color: string;
//   shadow: string;
// }

// interface SectionData {
//   title: string;
//   otherClasses: string;
//   buttonClasses: string;
//   cardData: CardData[];
//   id?: string;
// }

// const academicsSections: SectionData[] = [
//   {
//     title: "Courses Guide",
//     otherClasses: "dark:bg-sky-300 dark:from-sky-500 dark:to-sky-200",
//     buttonClasses:
//       "bg-sky-500/10 text-sky-700 hover:text-sky-700 dark:text-sky-300 dark:bg-sky-300/10 hover:bg-sky-500/20 dark:hover:bg-sky-300/20",

//     cardData: [
//       {
//         title: "BCA",
//         difficulty: "Beginner",
//         comments: 50,
//         likes: 100,
//         author: "DataNode",
//         date: "2 days ago",
//         description:
//           "Get started with the basics of Bachelor of Computer Applications.",
//         url: "/BCA/getting-started",
//         BackgroundIcon1: Circle,
//         BackgroundIcon2: Circle,
//         icon1Color:
//           "absolute -right-4 -top-8 h-24 w-24 origin-top-right stroke-[0.5] duration-300 group-hover/card:scale-90 text-white/10 dark:group-hover/card:text-sky-400",
//         icon2Color:
//           "absolute -right-4 -top-8 h-32 w-32 origin-top-right stroke-[0.4] duration-500 group-hover/card:scale-90 text-white/10 dark:group-hover/card:text-sky-400",
//         shadow: "skyBlue",
//       },
//       // Add more course cards here...
//     ],
//   },
//   {
//     title: "Unlock Your Learning Path",
//     otherClasses: "dark:bg-green-300 dark:from-green-300 dark:to-green-100",
//     buttonClasses:
//       "bg-green-500/10 text-green-700 hover:text-green-700 dark:text-green-300 dark:bg-green-300/10 hover:bg-green-500/20 dark:hover:bg-green-300/20",
//     cardData: [
//       {
//         title: "C Programming",
//         difficulty: "Beginner",
//         comments: 40,
//         likes: 90,
//         author: "DataNode",
//         date: "3 days ago",
//         description:
//           "Unlock the foundation of programming with C. Learn how to write efficient code, master control structures, work with arrays, pointers, and functions, and gain a solid grasp of algorithms and problem-solving techniques. This subject sets the stage for your journey into software development, offering hands-on experience with real-world applications.",
//         url: "/c-programming",
//         BackgroundIcon1: Award,
//         BackgroundIcon2: Award,
//         icon1Color:
//           "dark:group-hover/card:text-green-300 absolute -right-5 -top-10 h-24 w-24 origin-top-right stroke-[0.66] duration-300 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10",
//         icon2Color:
//           "dark:group-hover/card:text-green-300 absolute -right-6 -top-12 h-36 w-36 rotate-12 stroke-[0.44] duration-500 group-hover/card:-translate-y-2 group-hover/card:translate-x-3 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10",
//         shadow: "green",
//       },
//       {
//         title: "OOPs with C++",
//         difficulty: "ComingSoon",
//         comments: 35,
//         likes: 85,
//         author: "DataNode",
//         date: "5 days ago",
//         description:
//           "Dive into the world of Object-Oriented Programming with C++. Discover the principles of encapsulation, inheritance, polymorphism, and abstraction, all while developing robust and scalable applications. Master the art of designing reusable code and gain a deeper understanding of complex data structures and algorithms through C++.",
//         url: "academics/notes/semester-two",
//         BackgroundIcon1: Award,
//         BackgroundIcon2: Award,
//         icon1Color:
//           "dark:group-hover/card:text-green-300 absolute -right-5 -top-10 h-24 w-24 origin-top-right stroke-[0.66] duration-300 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10",
//         icon2Color:
//           "dark:group-hover/card:text-green-300 absolute -right-6 -top-12 h-36 w-36 rotate-12 stroke-[0.44] duration-500 group-hover/card:-translate-y-2 group-hover/card:translate-x-3 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10",
//         shadow: "green",
//       },
//       {
//         title: "Computer System Architecture",
//         difficulty: "ComingSoon",
//         comments: 28,
//         likes: 75,
//         author: "DataNode",
//         date: "1 week ago",
//         description:
//           "Explore the inner workings of computers with Computer System Architecture. Understand how hardware components interact, learn about memory hierarchy, CPU operations, instruction cycles, and digital logic. This subject provides essential knowledge of how modern computing systems are designed and operated.",
//         url: "academics/notes/semester-three",
//         BackgroundIcon1: Award,
//         BackgroundIcon2: Award,
//         icon1Color:
//           "dark:group-hover/card:text-green-300 absolute -right-5 -top-10 h-24 w-24 origin-top-right stroke-[0.66] duration-300 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10",
//         icon2Color:
//           "dark:group-hover/card:text-green-300 absolute -right-6 -top-12 h-36 w-36 rotate-12 stroke-[0.44] duration-500 group-hover/card:-translate-y-2 group-hover/card:translate-x-3 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10",
//         shadow: "green",
//       },
//       {
//         title: "Operating System",
//         difficulty: "ComingSoon",
//         comments: 50,
//         likes: 120,
//         author: "DataNode",
//         date: "2 weeks ago",
//         description:
//           "Uncover the core of computer systems with Operating Systems. From process management to memory allocation, this subject dives into the critical functions that allow hardware and software to work in harmony. Gain a deeper understanding of multitasking, file systems, and security as you explore the backbone of modern computing.",
//         url: "academics/notes/semester-four",
//         BackgroundIcon1: Award,
//         BackgroundIcon2: Award,
//         icon1Color:
//           "dark:group-hover/card:text-green-300 absolute -right-5 -top-10 h-24 w-24 origin-top-right stroke-[0.66] duration-300 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10",
//         icon2Color:
//           "dark:group-hover/card:text-green-300 absolute -right-6 -top-12 h-36 w-36 rotate-12 stroke-[0.44] duration-500 group-hover/card:-translate-y-2 group-hover/card:translate-x-3 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10",
//         shadow: "green",
//       },
//       {
//         title: "Asp.Net Technologies",
//         difficulty: "ComingSoon",
//         comments: 60,
//         likes: 130,
//         author: "DataNode",
//         date: "3 weeks ago",
//         description:
//           "Step into the world of dynamic web development with ASP.NET. Learn how to build interactive, scalable, and secure web applications using the .NET framework. This course will guide you through server-side programming, MVC architecture, and integration with databases, equipping you with the tools to create cutting-edge web solutions.",
//         url: "academics/notes/semester-five",
//         BackgroundIcon1: Award,
//         BackgroundIcon2: Award,
//         icon1Color:
//           "dark:group-hover/card:text-green-300 absolute -right-5 -top-10 h-24 w-24 origin-top-right stroke-[0.66] duration-300 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10",
//         icon2Color:
//           "dark:group-hover/card:text-green-300 absolute -right-6 -top-12 h-36 w-36 rotate-12 stroke-[0.44] duration-500 group-hover/card:-translate-y-2 group-hover/card:translate-x-3 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10",
//         shadow: "green",
//       },
//       {
//         title: "Management Information System",
//         difficulty: "ComingSoon",
//         comments: 75,
//         likes: 145,
//         author: "DataNode",
//         date: "1 month ago",
//         description:
//           "Explore the strategic role of technology in business with Management Information Systems. Learn how organizations leverage data-driven systems to enhance decision-making, streamline operations, and gain a competitive edge. This subject bridges the gap between IT and management, highlighting the importance of technology in the business landscape.",
//         url: "academics/notes/semester-six",
//         BackgroundIcon1: Award,
//         BackgroundIcon2: Award,
//         icon1Color:
//           "dark:group-hover/card:text-green-300 absolute -right-5 -top-10 h-24 w-24 origin-top-right stroke-[0.66] duration-300 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10",
//         icon2Color:
//           "dark:group-hover/card:text-green-300 absolute -right-6 -top-12 h-36 w-36 rotate-12 stroke-[0.44] duration-500 group-hover/card:-translate-y-2 group-hover/card:translate-x-3 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10",
//         shadow: "green",
//       },
//       {
//         title: "E Commerce",
//         difficulty: "ComingSoon",
//         comments: 75,
//         likes: 145,
//         author: "DataNode",
//         date: "1 month ago",
//         description:
//           "Discover the digital marketplace with E-Commerce. From online storefronts to payment gateways, this subject explores the technology and strategies behind successful electronic business transactions. Learn how to design, launch, and optimize e-commerce platforms, while understanding the legal, ethical, and logistical challenges of online trade.",
//         url: "academics/notes/semester-six",
//         BackgroundIcon1: Award,
//         BackgroundIcon2: Award,
//         icon1Color:
//           "dark:group-hover/card:text-green-300 absolute -right-5 -top-10 h-24 w-24 origin-top-right stroke-[0.66] duration-300 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10",
//         icon2Color:
//           "dark:group-hover/card:text-green-300 absolute -right-6 -top-12 h-36 w-36 rotate-12 stroke-[0.44] duration-500 group-hover/card:-translate-y-2 group-hover/card:translate-x-3 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10",
//         shadow: "green",
//       },
//     ],
//   },
//   {
//     title: "Previous Year Question Papers",
//     otherClasses: "dark:bg-yellow-300 dark:from-yellow-300 dark:to-yellow-100",
//     buttonClasses:
//       "bg-yellow-500/10 text-yellow-700 hover:text-yellow-700 dark:text-yellow-300 dark:bg-yellow-300/10 hover:bg-yellow-500/20 dark:hover:bg-yellow-300/20",
//     cardData: [
//       {
//         title: "Semester 1 Papers",
//         difficulty: "BCA",
//         comments: 0,
//         likes: 0,
//         author: "DataNode",
//         date: "1 month ago",
//         description: "Collection of all BCA 2021, 2022 final exam papers",
//         url: "academics/papers/semester1-finals-bca",
//         BackgroundIcon1: StickyNote,
//         BackgroundIcon2: StickyNote,
//         icon1Color:
//           "dark:group-hover/card:text-yellow-300 absolute -right-5 -top-5 h-16 w-16 rotate-0 stroke-[0.75] duration-500 group-hover/card:-translate-x-10 group-hover/card:translate-y-10 group-hover/card:rotate-[90deg] dark:text-white/10",
//         icon2Color:
//           "dark:group-hover/card:text-yellow-400 absolute -right-14 -top-16 h-36 w-36 rotate-12 stroke-[0.4] duration-300 group-hover/card:translate-x-3 group-hover/card:rotate-[30deg] group-hover/card:scale-50 group-hover/card:stroke-[0.66] dark:text-white/10",
//         shadow: "yellow",
//       },
//       {
//         title: "Semester 2 Papers",
//         difficulty: "ComingSoon",
//         comments: 0,
//         likes: 0,
//         author: "DataNode",
//         date: "1 month ago",
//         description: "Collection of all BCA 2021, 2022 final exam papers",
//         url: "academics/papers/semester2-finals-bca",
//         BackgroundIcon1: StickyNote,
//         BackgroundIcon2: StickyNote,
//         icon1Color:
//           "dark:group-hover/card:text-yellow-300 absolute -right-5 -top-5 h-16 w-16 rotate-0 stroke-[0.75] duration-500 group-hover/card:-translate-x-10 group-hover/card:translate-y-10 group-hover/card:rotate-[90deg] dark:text-white/10",
//         icon2Color:
//           "dark:group-hover/card:text-yellow-400 absolute -right-14 -top-16 h-36 w-36 rotate-12 stroke-[0.4] duration-300 group-hover/card:translate-x-3 group-hover/card:rotate-[30deg] group-hover/card:scale-50 group-hover/card:stroke-[0.66] dark:text-white/10",
//         shadow: "yellow",
//       },
//       {
//         title: "Semester 3 Papers",
//         difficulty: "BCA",
//         comments: 0,
//         likes: 0,
//         author: "DataNode",
//         date: "2 months ago",
//         description: "Collection of all BCA 2021, 2022 final exam papers",
//         url: "academics/papers/semester3-finals-bca",
//         BackgroundIcon1: StickyNote,
//         BackgroundIcon2: StickyNote,
//         icon1Color:
//           "dark:group-hover/card:text-yellow-300 absolute -right-5 -top-5 h-16 w-16 rotate-0 stroke-[0.75] duration-500 group-hover/card:-translate-x-10 group-hover/card:translate-y-10 group-hover/card:rotate-[90deg] dark:text-white/10",
//         icon2Color:
//           "dark:group-hover/card:text-yellow-400 absolute -right-14 -top-16 h-36 w-36 rotate-12 stroke-[0.4] duration-300 group-hover/card:translate-x-3 group-hover/card:rotate-[30deg] group-hover/card:scale-50 group-hover/card:stroke-[0.66] dark:text-white/10",
//         shadow: "yellow",
//       },
//       {
//         title: "Semester 4 Papers",
//         difficulty: "ComingSoon",
//         comments: 0,
//         likes: 0,
//         author: "DataNode",
//         date: "2 months ago",
//         description: "Collection of all BCA 2021, 2022 final exam papers",
//         url: "academics/papers/semester4-finals-bca",
//         BackgroundIcon1: StickyNote,
//         BackgroundIcon2: StickyNote,
//         icon1Color:
//           "dark:group-hover/card:text-yellow-300 absolute -right-5 -top-5 h-16 w-16 rotate-0 stroke-[0.75] duration-500 group-hover/card:-translate-x-10 group-hover/card:translate-y-10 group-hover/card:rotate-[90deg] dark:text-white/10",
//         icon2Color:
//           "dark:group-hover/card:text-yellow-400 absolute -right-14 -top-16 h-36 w-36 rotate-12 stroke-[0.4] duration-300 group-hover/card:translate-x-3 group-hover/card:rotate-[30deg] group-hover/card:scale-50 group-hover/card:stroke-[0.66] dark:text-white/10",
//         shadow: "yellow",
//       },
//       {
//         title: "Semester 5 Papers",
//         difficulty: "BCA",
//         comments: 0,
//         likes: 0,
//         author: "DataNode",
//         date: "2 months ago",
//         description: "Collection of all BCA 2021, 2022 final exam papers",
//         url: "academics/papers/semester5-finals-bca",
//         BackgroundIcon1: StickyNote,
//         BackgroundIcon2: StickyNote,
//         icon1Color:
//           "dark:group-hover/card:text-yellow-300 absolute -right-5 -top-5 h-16 w-16 rotate-0 stroke-[0.75] duration-500 group-hover/card:-translate-x-10 group-hover/card:translate-y-10 group-hover/card:rotate-[90deg] dark:text-white/10",
//         icon2Color:
//           "dark:group-hover/card:text-yellow-400 absolute -right-14 -top-16 h-36 w-36 rotate-12 stroke-[0.4] duration-300 group-hover/card:translate-x-3 group-hover/card:rotate-[30deg] group-hover/card:scale-50 group-hover/card:stroke-[0.66] dark:text-white/10",
//         shadow: "yellow",
//       },
//       {
//         title: "Semester 6 Papers",
//         difficulty: "ComingSoon",
//         comments: 0,
//         likes: 0,
//         author: "DataNode",
//         date: "2 months ago",
//         description: "Collection of all BCA 2021, 2022 final exam papers",
//         url: "academics/papers/semester6-finals-bca",
//         BackgroundIcon1: StickyNote,
//         BackgroundIcon2: StickyNote,
//         icon1Color:
//           "dark:group-hover/card:text-yellow-300 absolute -right-5 -top-5 h-16 w-16 rotate-0 stroke-[0.75] duration-500 group-hover/card:-translate-x-10 group-hover/card:translate-y-10 group-hover/card:rotate-[90deg] dark:text-white/10",
//         icon2Color:
//           "dark:group-hover/card:text-yellow-400 absolute -right-14 -top-16 h-36 w-36 rotate-12 stroke-[0.4] duration-300 group-hover/card:translate-x-3 group-hover/card:rotate-[30deg] group-hover/card:scale-50 group-hover/card:stroke-[0.66] dark:text-white/10",
//         shadow: "yellow",
//       },
//     ],
//   },
//   {
//     title: "Articles",
//     otherClasses: "dark:bg-red-300 dark:from-red-300 dark:to-red-100",
//     buttonClasses:
//       "bg-red-500/10 text-red-700 hover:text-red-700 dark:text-red-300 dark:bg-red-300/10 hover:bg-red-500/20 dark:hover:bg-red-300/20",
//     cardData: [
//       {
//         title: "2022 Final Exam Papers",
//         difficulty: "Advanced",
//         comments: 60,
//         likes: 120,
//         author: "ExamPro",
//         date: "1 month ago",
//         description: "Collection of all 2022 final exam papers",
//         url: "/papers/2022-finals",
//         BackgroundIcon1: Plus,
//         BackgroundIcon2: Plus,
//         icon1Color:
//           "dark:group-hover/card:text-[#f87272] absolute -right-4 -top-8 h-24 w-24 stroke-[0.5] duration-300 group-hover/card:scale-0 dark:text-white/10",
//         icon2Color:
//           "dark:group-hover/card:text-[#f87272] absolute -right-4 -top-8 h-32 w-32 stroke-[0.5] duration-500 group-hover/card:-translate-y-5 group-hover/card:translate-x-9 group-hover/card:-rotate-90 group-hover/card:scale-75 dark:text-white/10",
//         shadow: "red",
//       },
//       {
//         title: "2022 Final Exam Papers",
//         difficulty: "Advanced",
//         comments: 60,
//         likes: 120,
//         author: "ExamPro",
//         date: "1 month ago",
//         description: "Collection of all 2022 final exam papers",
//         url: "/papers/2022-finals",
//         BackgroundIcon1: Plus,
//         BackgroundIcon2: Plus,
//         icon1Color:
//           "dark:group-hover/card:text-[#f87272] absolute -right-4 -top-8 h-24 w-24 stroke-[0.5] duration-300 group-hover/card:scale-0 dark:text-white/10",
//         icon2Color:
//           "dark:group-hover/card:text-[#f87272] absolute -right-4 -top-8 h-32 w-32 stroke-[0.5] duration-500 group-hover/card:-translate-y-5 group-hover/card:translate-x-9 group-hover/card:-rotate-90 group-hover/card:scale-75 dark:text-white/10",
//         shadow: "red",
//       },
//       {
//         title: "2022 Final Exam Papers",
//         difficulty: "Advanced",
//         comments: 60,
//         likes: 120,
//         author: "ExamPro",
//         date: "1 month ago",
//         description: "Collection of all 2022 final exam papers",
//         url: "/papers/2022-finals",
//         BackgroundIcon1: Plus,
//         BackgroundIcon2: Plus,
//         icon1Color:
//           "dark:group-hover/card:text-[#f87272] absolute -right-4 -top-8 h-24 w-24 stroke-[0.5] duration-300 group-hover/card:scale-0 dark:text-white/10",
//         icon2Color:
//           "dark:group-hover/card:text-[#f87272] absolute -right-4 -top-8 h-32 w-32 stroke-[0.5] duration-500 group-hover/card:-translate-y-5 group-hover/card:translate-x-9 group-hover/card:-rotate-90 group-hover/card:scale-75 dark:text-white/10",
//         shadow: "red",
//       },
//       {
//         title: "2022 Final Exam Papers",
//         difficulty: "Advanced",
//         comments: 60,
//         likes: 120,
//         author: "ExamPro",
//         date: "1 month ago",
//         description: "Collection of all 2022 final exam papers",
//         url: "/papers/2022-finals",
//         BackgroundIcon1: Plus,
//         BackgroundIcon2: Plus,
//         icon1Color:
//           "dark:group-hover/card:text-[#f87272] absolute -right-4 -top-8 h-24 w-24 stroke-[0.5] duration-300 group-hover/card:scale-0 dark:text-white/10",
//         icon2Color:
//           "dark:group-hover/card:text-[#f87272] absolute -right-4 -top-8 h-32 w-32 stroke-[0.5] duration-500 group-hover/card:-translate-y-5 group-hover/card:translate-x-9 group-hover/card:-rotate-90 group-hover/card:scale-75 dark:text-white/10",
//         shadow: "red",
//       },
//       {
//         title: "2022 Final Exam Papers",
//         difficulty: "Advanced",
//         comments: 60,
//         likes: 120,
//         author: "ExamPro",
//         date: "1 month ago",
//         description: "Collection of all 2022 final exam papers",
//         url: "/papers/2022-finals",
//         BackgroundIcon1: Plus,
//         BackgroundIcon2: Plus,
//         icon1Color:
//           "dark:group-hover/card:text-[#f87272] absolute -right-4 -top-8 h-24 w-24 stroke-[0.5] duration-300 group-hover/card:scale-0 dark:text-white/10",
//         icon2Color:
//           "dark:group-hover/card:text-[#f87272] absolute -right-4 -top-8 h-32 w-32 stroke-[0.5] duration-500 group-hover/card:-translate-y-5 group-hover/card:translate-x-9 group-hover/card:-rotate-90 group-hover/card:scale-75 dark:text-white/10",
//         shadow: "red",
//       },
//       // Add more exam preparation guide cards here...
//     ],
//   },
//   {
//     title: "Exam Preparation Guides",
//     otherClasses: "dark:bg-purple-300 dark:from-purple-400 dark:to-purple-100",
//     buttonClasses:
//       "bg-purple-500/10 text-purple-700 hover:text-purple-700 dark:text-purple-300 dark:bg-purple-300/10 hover:bg-purple-500/20 dark:hover:bg-purple-300/20",
//     cardData: [
//       {
//         title: "Effective Study Techniques",
//         difficulty: "BCA",
//         comments: 55,
//         likes: 110,
//         author: "StudyMaster",
//         date: "1 week ago",
//         description: "Learn powerful study techniques for exam success",
//         url: "/guides/study-techniques",
//         BackgroundIcon1: Sparkle,
//         BackgroundIcon2: Sparkle,
//         icon1Color:
//           "dark:group-hover/card:text-[#d8b4fe] absolute -right-4 -top-10 h-24 w-24 stroke-[0.5] duration-500 group-hover/card:-translate-x-4 group-hover/card:translate-y-10 group-hover/card:-rotate-[125deg] dark:text-white/10",
//         icon2Color:
//           "dark:group-hover/card:text-[#d8b4fe] absolute -right-14 -top-24 h-48 w-48 origin-top-right -rotate-3 stroke-[0.33] duration-300 group-hover/card:scale-50 dark:text-white/10",
//         shadow: "purple",
//       },
//       {
//         title: "Effective Study Techniques",
//         difficulty: "BCA",
//         comments: 55,
//         likes: 110,
//         author: "StudyMaster",
//         date: "1 week ago",
//         description: "Learn powerful study techniques for exam success",
//         url: "/guides/study-techniques",
//         BackgroundIcon1: Sparkle,
//         BackgroundIcon2: Sparkle,
//         icon1Color:
//           "dark:group-hover/card:text-[#d8b4fe] absolute -right-4 -top-10 h-24 w-24 stroke-[0.5] duration-500 group-hover/card:-translate-x-4 group-hover/card:translate-y-10 group-hover/card:-rotate-[125deg] dark:text-white/10",
//         icon2Color:
//           "dark:group-hover/card:text-[#d8b4fe] absolute -right-14 -top-24 h-48 w-48 origin-top-right -rotate-3 stroke-[0.33] duration-300 group-hover/card:scale-50 dark:text-white/10",
//         shadow: "purple",
//       },
//       // Add more exam preparation guide cards here...
//     ],
//   },
// ];
