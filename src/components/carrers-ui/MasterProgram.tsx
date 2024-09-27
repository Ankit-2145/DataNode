import { useState, ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, Briefcase, Globe } from "lucide-react";

interface Institution {
  type: string;
  description?: string;
  list: string[];
  requirements?: string[];
}

interface Program {
  id: string;
  name: string;
  fullName: string;
  icon: ReactNode;
  description: string;
  institutions: Institution[];
}

const programs: Program[] = [
  {
    id: "mca",
    name: "MCA",
    fullName: "Master of Computer Applications",
    icon: <BookOpen className="w-6 h-6" />,
    description:
      "MCA is a postgraduate program that combines in-depth theoretical knowledge with practical application in computer science. It equips students with advanced skills in areas such as programming, software development, database management, and networking, preparing them for a wide range of IT and managerial roles.",
    institutions: [
      {
        type: "NIT (National Institute of Technology)",
        description:
          "NIT conducts an entrance exam for getting a seat in NIT called NIMCET (National Institute of Technology Master of Computer Applications Common Entrance Test).",
        list: [
          "NIT Trichy - Tamil Nadu",
          "NIT Warangal - Telangana",
          "NIT Surathkal - Karnataka",
          "NIT Allahabad - Uttar Pradesh",
          "NIT Agartala - Tripura",
          "NIT Bhopal - Madhya Pradesh",
          "NIT Durgapur - West Bengal",
          "NIT Calicut - Kerala",
          "NIT Raipur - Chhattisgarh",
          "NIT Kurukshetra - Haryana",
          "NIT Jamshedpur - Jharkhand",
          "Central University of Hyderabad",
        ],
      },
      {
        type: "CUET PG - Central University Entrance Test Post Graduate",
        description:
          "It is an examination conducted for admission into various postgraduate programs offered by central universities. Universities offering MCA on the basis of CUET PG:",
        list: [
          "DU - Delhi University",
          "JNU - Jawaharlal Nehru University",
          "BHU - Banaras Hindu University",
          "Pondicherry University",
        ],
      },
      {
        type: "Universities offering MCA by their own entrance exam",
        list: [
          "Jamia Millia Islamia - Jamia Millia Islamia Entrance Exam MCA (JMI MCA)",
          "Indraprasth University - Indraprasth University Common Entrance Test (IPU CET)",
          "Pune University (Pune) - Maharashtra Masters of Computer Applications Common Entrance Test (MAH MCA CET)",
          "Punjab University - Punjab University Common Entrance Test (PU CET)",
        ],
      },
      {
        type: "Private Universities",
        list: [
          "VIT (Vellore Institute of Technology) - Vellore Institute of Technology Masters Entrance Examination (VIT MEE)",
          "LPU (Lovely Professional University) - Lovely Professional University National Entrance and Scholarship Test (LPU NEST)",
          "BIT (Birla Institute of Technology) Mersa - BIT MCA",
        ],
      },
    ],
  },
  {
    id: "mba",
    name: "MBA",
    fullName: "Master of Business Administration",
    icon: <Briefcase className="w-6 h-6" />,
    description:
      "MBA is a prestigious degree that equips individuals with the skills and knowledge to excel in business and management. It offers a broad understanding of various business disciplines, leadership development, and strategic thinking. An MBA can enhance career opportunities, leading to managerial roles and entrepreneurial ventures.",
    institutions: [
      {
        type: "IIM (Indian Institute of Management)",
        description:
          "IIM conducts CAT (Common Admission Test) and GMAT (Graduate Management Admission Test) is conducted by Graduate Management Admission Council for enrollment in IIM.",
        list: ["IIM Ahmedabad (Gujarat)", "IIM Bangalore (Bengaluru)"],
      },
      {
        type: "Private Universities",
        description:
          "Some of the Private Universities offering MBA are as follows:",
        list: [
          "Symbiasis Institute of Business Management (Pune) - Symbiasis National Aptitude Test (SNAP)",
          "Lovely Professional University (LPU) - LPUNEST /CAT / MAT / XAT / CMAT / NMAT",
          "Amity University - LPUNEST /CAT / MAT / XAT / CMAT / NMAT /GMAT",
        ],
      },
    ],
  },
  {
    id: "ms",
    name: "MS",
    fullName: "Master of Science",
    icon: <Globe className="w-6 h-6" />,
    description:
      "MS degree provides specialized knowledge and advanced training in a specific field of study. It offers in-depth exploration of subjects like engineering, computer science, biology, or psychology. An MS degree enhances career prospects, enabling graduates to pursue research, academic, or specialized industry roles.",
    institutions: [
      {
        type: "Victoria University of Wellington (New Zealand)",
        description: "Exams Accepted: TOEFL, PTE, AND IELTS.",
        list: [
          "MIM (Master of Information System)",
          "Master of Data Science",
          "Master of Software Development",
          "Master of Computer Science",
        ],
        requirements: [
          "Four years undergraduate degree needed",
          "IELTS: 6.0 bands, with a minimum of 5.5 in each component",
          "TOEFL IBT: 80 or above",
          "PTE: 50 with a minimum score of 42 in each component",
          "EAP: Minimum final scores of 4,4,4,3",
          "C1 Advanced: 169 with no score less than 162",
        ],
      },
      {
        type: "Stanford University",
        description:
          "Exams Accepted: IELTS, TOEFL, DUOLINGO (English Language Test), GRE, GMAT (Standardized Test Score)",
        list: ["MS in Education Data Science", "MS in Computer Science"],
        requirements: ["Four years undergraduate degree needed"],
      },
      {
        type: "Harvard University",
        description:
          "Exams Accepted: TOEFL, IELTS, DUOLINGO, PTE (English Language Test), GMAT, GRE (Standardized Test Score)",
        list: [
          "Masters of Science in Data Science",
          "Masters of Science in Computational Science and Engineering",
        ],
        requirements: [
          "Four years undergraduate degree needed",
          "Bachelor's degree in relevant field",
          "Completed application form",
          "Statement of purpose",
          "Three letters of recommendation",
          "Academic transcripts",
          "CV or resume",
          "TOEFL / IELTS score report",
        ],
      },
      {
        type: "Northwestern University",
        description: "Exams Accepted: IELTS, TOEFL",
        list: [
          "MS in Computer Science",
          "MS in Information System",
          "MS in Artificial Intelligence",
        ],
        requirements: [
          "Accepts 3 years undergraduate degree",
          "Bachelor degree in relevant discipline with a minimum GPA of 3.0 on a scale of 4.0 from a recognized institution",
          "GMAT or GRE (depending upon program)",
          "English proficiency: Either of IELTS or TOEFL",
          "University transcripts (original and English-translated)",
          "Statement of Purpose for MS courses",
          "Letters of Recommendation (2-3 references depending upon program)",
          "Student CV/Academic resume",
          "Proof of work experience (wherever applicable)",
          "English proficiency test score",
          "Standardized exam scores",
        ],
      },
    ],
  },
];

export default function MastersPrograms() {
  const [activeTab, setActiveTab] = useState<string>("mca");

  return (
    <div className="container mx-auto py-8 px-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          {programs.map((program) => (
            <TabsTrigger
              key={program.id}
              value={program.id}
              className="text-sm sm:text-base flex items-center justify-center gap-2"
            >
              {program.icon}
              <span className="hidden sm:inline">{program.name}</span>
              <span className="sm:hidden">{program.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {programs.map((program) => (
          <TabsContent key={program.id} value={program.id}>
            <div className="transition-all duration-300 ease-in-out">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    {program.icon}
                    <span>
                      {program.fullName} ({program.name})
                    </span>
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[60vh] pr-4">
                    <Accordion type="single" collapsible className="w-full">
                      {program.institutions.map((institution, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger>{institution.type}</AccordionTrigger>
                          <AccordionContent>
                            {institution.description && (
                              <p className="mb-4">{institution.description}</p>
                            )}
                            <ul className="list-disc pl-6 mb-4">
                              {institution.list.map((item, i) => (
                                <li key={i} className="mb-2">
                                  {item}
                                </li>
                              ))}
                            </ul>
                            {institution.requirements && (
                              <>
                                <h4 className="font-semibold mb-2">
                                  Requirements:
                                </h4>
                                <ul className="list-disc pl-6">
                                  {institution.requirements.map((req, i) => (
                                    <li key={i} className="mb-2">
                                      {req}
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}