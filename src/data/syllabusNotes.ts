import { Code, Computer, FileSliders, MonitorCog, ShoppingBag, SquareCode } from "lucide-react";

export const semesterData = {
  one: [
    {
      id: 1,
      url: "/computer-fundamentals",
      name: "Computer Fundamentals",
      icon: Computer,
      description:
        "Introduction to the foundational concepts of computers, covering hardware, software, data representation, and operating systems, alongside an overview of various programming paradigms and languages.",
      difficulty: "Intermediate",
    },
    {
      id: 2,
      url: "/c-programming",
      name: "C Programming",
      icon: Code,
      description:
        "Learn the core concepts of structured programming, problem-solving techniques, and the C language's syntax, focusing on writing efficient programs.",
      difficulty: "Intermediate",
    },
  ],
  two: [
    {
      id: 1,
      url: "/computer-fundamentals",
      name: "Computer Fundamentals",
      icon: Computer,
      description:
        "Introduction to the foundational concepts of computers, covering hardware, software, data representation, and operating systems, alongside an overview of various programming paradigms and languages.",
      difficulty: "Intermediate",
    },
    {
      id: 2,
      url: "/c-programming",
      name: "C Programming",
      icon: Code,
      description:
        "Learn the core concepts of structured programming, problem-solving techniques, and the C language's syntax, focusing on writing efficient programs.",
      difficulty: "Intermediate",
    },
  ],
  three: [
    {
      id: 1,
      url: "/computer-organization",
      name: "Computer Organization",
      icon: Computer,
      description:
        "Introduction to the foundational concepts of computers, covering hardware, software, data representation, and operating systems, alongside an overview of various programming paradigms and languages.",
      difficulty: "Intermediate",
    },
    {
      id: 2,
      url: "/oop-with-cpp",
      name: "OOP with C++",
      icon: Code,
      description:
        "Learn the core concepts of structured programming, problem-solving techniques, and the C language's syntax, focusing on writing efficient programs.",
      difficulty: "Intermediate",
    },
  ],
  four: [
    {
      id: 1,
      url: "/computer-fundamentals",
      name: "Computer Fundamentals",
      icon: Computer,
      description:
        "Introduction to the foundational concepts of computers, covering hardware, software, data representation, and operating systems, alongside an overview of various programming paradigms and languages.",
      difficulty: "Intermediate",
    },
    {
      id: 2,
      url: "/c-programming",
      name: "C Programming",
      icon: Code,
      description:
        "Learn the core concepts of structured programming, problem-solving techniques, and the C language's syntax, focusing on writing efficient programs.",
      difficulty: "Intermediate",
    },
  ],
  five: [
    {
      id: 1,
      url: "/operating-system",
      name: "Operating System",
      icon: MonitorCog,
      description:
        "Introduction to the foundational concepts of computers, covering hardware, software, data representation, and operating systems, alongside an overview of various programming paradigms and languages.",
      difficulty: "Intermediate",
    },
    {
      id: 2,
      url: "/aspnet-technologies",
      name: "Asp.Net Technologies",
      icon: SquareCode,
      description:
        "Learn the core concepts of structured programming, problem-solving techniques, and the C language's syntax, focusing on writing efficient programs.",
      difficulty: "Intermediate",
    },
    {
      id: 3,
      url: "/management-information-system",
      name: "Management Information System",
      icon: FileSliders,
      description:
        "Learn the core concepts of structured programming, problem-solving techniques, and the C language's syntax, focusing on writing efficient programs.",
      difficulty: "Intermediate",
    },
    {
      id: 4,
      url: "/e-commerce",
      name: "E Commerce",
      icon: ShoppingBag,
      description:
        "Learn the core concepts of structured programming, problem-solving techniques, and the C language's syntax, focusing on writing efficient programs.",
      difficulty: "Intermediate",
    },
  ],
  six: [
    {
      id: 1,
      url: "/computer-fundamentals",
      name: "Computer Fundamentals",
      icon: Computer,
      description:
        "Introduction to the foundational concepts of computers, covering hardware, software, data representation, and operating systems, alongside an overview of various programming paradigms and languages.",
      difficulty: "Intermediate",
    },
    {
      id: 2,
      url: "/c-programming",
      name: "C Programming",
      icon: Code,
      description:
        "Learn the core concepts of structured programming, problem-solving techniques, and the C language's syntax, focusing on writing efficient programs.",
      difficulty: "Intermediate",
    },
  ],
};

export type SemesterKey = keyof typeof semesterData;
