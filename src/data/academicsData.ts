import { Circle, LucideIcon, Square, Triangle } from "lucide-react";

export interface CardData {
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  comments: number;
  likes: number;
  author: string;
  date: string;
  description: string;
  url: string;
  BackgroundIcon1: LucideIcon;
  BackgroundIcon2: LucideIcon;
  icon1Color: string;
  icon2Color: string;
  shadow: string;
}

export interface SectionData {
  title: string;
  otherClasses: string;
  buttonClasses: string;
  cardData: CardData[];
}

export const academicsSections: SectionData[] = [
  {
    title: "Courses we offer",
    otherClasses: "dark:bg-sky-300 dark:from-sky-500 dark:to-sky-200",
    buttonClasses:
      "bg-sky-500/10 text-sky-700 hover:text-sky-700 dark:text-sky-300 dark:bg-sky-300/10 hover:bg-sky-500/20 dark:hover:bg-sky-300/20",

    cardData: [
      {
        title: "Introduction to BCA",
        difficulty: "Beginner",
        comments: 50,
        likes: 100,
        author: "DataNode",
        date: "2 days ago",
        description: "Get started with the basics of BCA",
        url: "/courses/intro-to-bca",
        BackgroundIcon1: Circle,
        BackgroundIcon2: Circle,
        icon1Color:
          "absolute -right-4 -top-8 h-24 w-24 origin-top-right stroke-[0.5] duration-300 group-hover/card:scale-90 text-white/10 dark:group-hover/card:text-sky-400",
        icon2Color:
          "absolute -right-4 -top-8 h-32 w-32 origin-top-right stroke-[0.4] duration-500 group-hover/card:scale-90 text-white/10 dark:group-hover/card:text-sky-400",
        shadow:
          "dark:hover:shadow-[0_0_10px_rgba(56,189,248)] dark:hover:border-sky-400",
      },
      {
        title: "Advanced Data Structures",
        difficulty: "Advanced",
        comments: 30,
        likes: 80,
        author: "CodeMaster",
        date: "1 week ago",
        description: "Dive deep into complex data structures",
        url: "/courses/advanced-data-structures",
        BackgroundIcon1: Circle,
        BackgroundIcon2: Circle,
        icon1Color:
          "absolute -right-4 -top-8 h-24 w-24 origin-top-right stroke-[0.5] duration-300 group-hover/card:scale-90 text-white/10 dark:group-hover/card:text-sky-400",
        icon2Color:
          "absolute -right-4 -top-8 h-32 w-32 origin-top-right stroke-[0.4] duration-500 group-hover/card:scale-90 text-white/10 dark:group-hover/card:text-sky-400",
        shadow:
          "dark:hover:shadow-[0_0_10px_rgba(56,189,248)] dark:hover:border-sky-400",
      },
      {
        title: "Advanced Data Structures",
        difficulty: "Advanced",
        comments: 30,
        likes: 80,
        author: "CodeMaster",
        date: "1 week ago",
        description: "Dive deep into complex data structures",
        url: "/courses/advanced-data-structures",
        BackgroundIcon1: Circle,
        BackgroundIcon2: Circle,
        icon1Color:
          "absolute -right-4 -top-8 h-24 w-24 origin-top-right stroke-[0.5] duration-300 group-hover/card:scale-90 text-white/10 dark:group-hover/card:text-sky-400",
        icon2Color:
          "absolute -right-4 -top-8 h-32 w-32 origin-top-right stroke-[0.4] duration-500 group-hover/card:scale-90 text-white/10 dark:group-hover/card:text-sky-400",
        shadow:
          "dark:hover:shadow-[0_0_10px_rgba(56,189,248)] dark:hover:border-sky-400",
      },
      {
        title: "Advanced Data Structures",
        difficulty: "Advanced",
        comments: 30,
        likes: 80,
        author: "CodeMaster",
        date: "1 week ago",
        description: "Dive deep into complex data structures",
        url: "/courses/advanced-data-structures",
        BackgroundIcon1: Circle,
        BackgroundIcon2: Circle,
        icon1Color:
          "absolute -right-4 -top-8 h-24 w-24 origin-top-right stroke-[0.5] duration-300 group-hover/card:scale-90 text-white/10 dark:group-hover/card:text-sky-400",
        icon2Color:
          "absolute -right-4 -top-8 h-32 w-32 origin-top-right stroke-[0.4] duration-500 group-hover/card:scale-90 text-white/10 dark:group-hover/card:text-sky-400",
        shadow:
          "dark:hover:shadow-[0_0_10px_rgba(56,189,248)] dark:hover:border-sky-400",
      },
      {
        title: "Advanced Data Structures",
        difficulty: "Advanced",
        comments: 30,
        likes: 80,
        author: "CodeMaster",
        date: "1 week ago",
        description: "Dive deep into complex data structures",
        url: "/courses/advanced-data-structures",
        BackgroundIcon1: Circle,
        BackgroundIcon2: Circle,
        icon1Color:
          "absolute -right-4 -top-8 h-24 w-24 origin-top-right stroke-[0.5] duration-300 group-hover/card:scale-90 text-white/10 dark:group-hover/card:text-sky-400",
        icon2Color:
          "absolute -right-4 -top-8 h-32 w-32 origin-top-right stroke-[0.4] duration-500 group-hover/card:scale-90 text-white/10 dark:group-hover/card:text-sky-400",
        shadow:
          "dark:hover:shadow-[0_0_10px_rgba(56,189,248)] dark:hover:border-sky-400",
      },
      {
        title: "Advanced Data Structures",
        difficulty: "Advanced",
        comments: 30,
        likes: 80,
        author: "CodeMaster",
        date: "1 week ago",
        description: "Dive deep into complex data structures",
        url: "/courses/advanced-data-structures",
        BackgroundIcon1: Circle,
        BackgroundIcon2: Circle,
        icon1Color:
          "absolute -right-4 -top-8 h-24 w-24 origin-top-right stroke-[0.5] duration-300 group-hover/card:scale-90 text-white/10 dark:group-hover/card:text-sky-400",
        icon2Color:
          "absolute -right-4 -top-8 h-32 w-32 origin-top-right stroke-[0.4] duration-500 group-hover/card:scale-90 text-white/10 dark:group-hover/card:text-sky-400",
        shadow:
          "dark:hover:shadow-[0_0_10px_rgba(56,189,248)] dark:hover:border-sky-400",
      },
      // Add more course cards here...
    ],
  },
  {
    title: "Syllabus Notes by Semester",
    otherClasses: "dark:bg-green-300 dark:from-green-300 dark:to-green-100",
    buttonClasses:
      "bg-green-500/10 text-green-700 hover:text-green-700 dark:text-green-300 dark:bg-green-300/10 hover:bg-green-500/20 dark:hover:bg-green-300/20",
    cardData: [
      {
        title: "Semester 1 Notes",
        difficulty: "Beginner",
        comments: 40,
        likes: 90,
        author: "StudyGuru",
        date: "3 days ago",
        description: "Comprehensive notes for Semester 1 subjects",
        url: "/notes/semester-1",
        BackgroundIcon1: Square,
        BackgroundIcon2: Square,
        icon1Color:
          "dark:group-hover/card:text-green-300 absolute -right-5 -top-10 h-24 w-24 origin-top-right stroke-[0.66] duration-300 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10",
        icon2Color:
          "dark:group-hover/card:text-green-300 absolute -right-6 -top-12 h-36 w-36 rotate-12 stroke-[0.44] duration-500 group-hover/card:-translate-y-2 group-hover/card:translate-x-3 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10",
        shadow:
          "dark:hover:shadow-[0_0_10px_rgba(134, 239, 172)] dark:hover:border-green-300",
      },
      {
        title: "Semester 2 Notes",
        difficulty: "Intermediate",
        comments: 35,
        likes: 85,
        author: "NotesMaster",
        date: "5 days ago",
        description: "Detailed notes covering Semester 2 topics",
        url: "/notes/semester-2",
        BackgroundIcon1: Square,
        BackgroundIcon2: Square,
        icon1Color:
          "dark:group-hover/card:text-green-300 absolute -right-5 -top-10 h-24 w-24 origin-top-right stroke-[0.66] duration-300 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10",
        icon2Color:
          "dark:group-hover/card:text-green-300 absolute -right-6 -top-12 h-36 w-36 rotate-12 stroke-[0.44] duration-500 group-hover/card:-translate-y-2 group-hover/card:translate-x-3 group-hover/card:rotate-6 group-hover/card:scale-90 dark:text-white/10",
        shadow:
          "dark:hover:shadow-[0_0_10px_rgba(134, 239, 172)] dark:hover:border-green-300",
      },
      // Add more syllabus note cards here...
    ],
  },
  {
    title: "Previous Year Question Papers",
    otherClasses: "dark:bg-yellow-300 dark:from-yellow-300 dark:to-yellow-100",
    buttonClasses:
      "bg-yellow-500/10 text-yellow-700 hover:text-yellow-700 dark:text-yellow-300 dark:bg-yellow-300/10 hover:bg-yellow-500/20 dark:hover:bg-yellow-300/20",
    cardData: [
      {
        title: "2022 Final Exam Papers",
        difficulty: "Advanced",
        comments: 60,
        likes: 120,
        author: "ExamPro",
        date: "1 month ago",
        description: "Collection of all 2022 final exam papers",
        url: "/papers/2022-finals",
        BackgroundIcon1: Triangle,
        BackgroundIcon2: Triangle,
        icon1Color:
          "dark:group-hover/card:text-yellow-300 absolute -right-5 -top-5 h-16 w-16 rotate-0 stroke-[0.75] duration-500 group-hover/card:-translate-x-10 group-hover/card:translate-y-10 group-hover/card:rotate-[90deg] dark:text-white/10",
        icon2Color:
          "dark:group-hover/card:text-yellow-400 absolute -right-14 -top-16 h-36 w-36 rotate-12 stroke-[0.4] duration-300 group-hover/card:translate-x-3 group-hover/card:rotate-[30deg] group-hover/card:scale-50 group-hover/card:stroke-[0.66] dark:text-white/10",
        shadow:
          "dark:hover:shadow-[0_0_10px_rgba(134, 239, 172)] dark:hover:border-yellow-300",
      },
      {
        title: "2021 Mid-term Papers",
        difficulty: "Intermediate",
        comments: 45,
        likes: 95,
        author: "PaperArchive",
        date: "2 months ago",
        description: "Mid-term question papers from 2021",
        url: "/papers/2021-midterms",
        BackgroundIcon1: Triangle,
        BackgroundIcon2: Triangle,
        icon1Color:
          "dark:group-hover/card:text-yellow-300 absolute -right-5 -top-5 h-16 w-16 rotate-0 stroke-[0.75] duration-500 group-hover/card:-translate-x-10 group-hover/card:translate-y-10 group-hover/card:rotate-[90deg] dark:text-white/10",
        icon2Color:
          "dark:group-hover/card:text-yellow-400 absolute -right-14 -top-16 h-36 w-36 rotate-12 stroke-[0.4] duration-300 group-hover/card:translate-x-3 group-hover/card:rotate-[30deg] group-hover/card:scale-50 group-hover/card:stroke-[0.66] dark:text-white/10",
        shadow:
          "dark:hover:shadow-[0_0_10px_rgba(134, 239, 172)] dark:hover:border-yellow-300",
      },
      // Add more question paper cards here...
    ],
  },
  // {
  //   title: "Articles",
  //   otherClasses: "dark:bg-red-300 dark:from-red-300 dark:to-red-100",
  //   buttonClasses:
  //     "bg-red-500/10 text-red-700 hover:text-red-700 dark:text-red-300 dark:bg-red-300/10 hover:bg-red-500/20 dark:hover:bg-red-300/20",
  //   cardData: [
  //     {
  //       title: "Study Techniques",
  //       difficulty: "Beginner",
  //       comments: 55,
  //       likes: 110,
  //       author: "StudyMaster",
  //       date: "1 week ago",
  //       description: "Learn powerful study techniques for exam success",
  //       url: "/guides/study-techniques",
  //     },
  //     {
  //       title: "Strategies",
  //       difficulty: "Intermediate",
  //       comments: 40,
  //       likes: 85,
  //       author: "RevisionPro",
  //       date: "3 days ago",
  //       description: "Quick and effective last-minute revision tips",
  //       url: "/guides/last-minute-revision",
  //     },
  //     // Add more exam preparation guide cards here...
  //   ],
  // },
  // {
  //   title: "Exam Preparation Guides",
  //   otherClasses: "dark:bg-purple-300 dark:from-purple-300 dark:to-purple-100",
  //   buttonClasses:
  //     "bg-purple-500/10 text-purple-700 hover:text-purple-700 dark:text-purple-300 dark:bg-purple-300/10 hover:bg-purple-500/20 dark:hover:bg-purple-300/20",
  //   cardData: [
  //     {
  //       title: "Effective Study Techniques",
  //       difficulty: "Beginner",
  //       comments: 55,
  //       likes: 110,
  //       author: "StudyMaster",
  //       date: "1 week ago",
  //       description: "Learn powerful study techniques for exam success",
  //       url: "/guides/study-techniques",
  //     },
  //     {
  //       title: "Last-Minute Revision Strategies",
  //       difficulty: "Intermediate",
  //       comments: 40,
  //       likes: 85,
  //       author: "RevisionPro",
  //       date: "3 days ago",
  //       description: "Quick and effective last-minute revision tips",
  //       url: "/guides/last-minute-revision",
  //     },
  //     // Add more exam preparation guide cards here...
  //   ],
  // },
];
