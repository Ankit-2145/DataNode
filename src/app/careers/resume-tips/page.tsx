import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ResumeInterviewTips() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Resume & Interview Tips
      </h1>
      <Tabs defaultValue="resume" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="resume">Resume Tips</TabsTrigger>
          <TabsTrigger value="interview">Interview Tips</TabsTrigger>
        </TabsList>
        <TabsContent value="resume" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Resume Writing Tips</CardTitle>
              <CardDescription>
                Key strategies for crafting an effective resume
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Clarity and Readability: Use clear headings, bullet points,
                  and concise sentences.
                </li>
                <li>
                  Relevance: Tailor your resume to the specific job you're
                  applying for.
                </li>
                <li>Conciseness: Keep your resume brief and to the point.</li>
                <li>
                  Customization: Customize your resume for each job application.
                </li>
                <li>
                  Accuracy and Honesty: Provide accurate and truthful
                  information.
                </li>
                <li>
                  Strong Opening: Grab attention with a compelling summary or
                  objective statement.
                </li>
                <li>
                  Quantifiable Achievements: Use numbers and metrics to
                  demonstrate your impact.
                </li>
                <li>
                  Active Language: Use strong action verbs to describe your
                  experiences.
                </li>
                <li>
                  Key Skills: Include a dedicated section to showcase your
                  relevant skills.
                </li>
                <li>
                  Consistency: Ensure consistency in formatting and style
                  throughout your resume.
                </li>
                <li>
                  Proofreading: Thoroughly proofread your resume for errors.
                </li>
                <li>
                  Professional Appearance: Use a clean and professional layout.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Resume Tools</CardTitle>
              <CardDescription>
                Websites that can help you create and optimize your resume
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Zety Resume Builder: User-friendly resume builder with
                  AI-driven features.
                </li>
                <li>
                  Resume.com: Comprehensive resume builder with AI assistance.
                </li>
                <li>
                  LiveCareer: AI-powered resume builder with professional
                  templates.
                </li>
                <li>
                  Resume Genius: Offers an AI-powered resume builder with
                  various templates.
                </li>
                <li>
                  Novoresume: Helps in creating visually appealing and
                  ATS-friendly resumes.
                </li>
                <li>
                  Resumelab: AI-powered tool to generate personalized resumes.
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="interview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Interview Preparation Tips</CardTitle>
              <CardDescription>
                Strategies to help you succeed in your job interviews
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Research the company thoroughly before the interview.</li>
                <li>
                  Practice common interview questions and prepare your answers.
                </li>
                <li>
                  Prepare relevant examples to demonstrate your skills and
                  experiences.
                </li>
                <li>
                  Dress appropriately for the company culture and position.
                </li>
                <li>
                  Arrive early to the interview location or set up your
                  technology for virtual interviews.
                </li>
                <li>
                  Bring copies of your resume and any other required documents.
                </li>
                <li>Maintain good eye contact and positive body language.</li>
                <li>
                  Listen carefully to questions and ask for clarification if
                  needed.
                </li>
                <li>
                  Prepare thoughtful questions to ask the interviewer about the
                  role and company.
                </li>
                <li>
                  Follow up with a thank-you note or email after the interview.
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
