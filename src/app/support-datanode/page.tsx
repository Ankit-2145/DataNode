import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MagicButton from "@/components/ui/MagicButton";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function SupportPage() {
  return (
    <div className="w-full dark:bg-black dark:bg-dot-white/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl leading-normal mt-28 text-transparent bg-clip-text bg-custom-gradient tracking-tight text-center font-semibold">
            Support DataNode
          </h1>
          <p className="text-base text-center max-w-sm md:max-w-xl tracking-wider leading-8 mt-2.5 mb-10 text-muted-foreground">
            Help Us Grow: Empower Education, Make a Difference
          </p>
        </div>

        <section className="mb-12 text-base text-muted-foreground">
          <p className="mb-4">
            DataNode is built by a passionate team at Pinnacle Smart Solutions
            to provide free, high-quality educational resources for students
            like you. With your support, we can continue to expand our offerings
            and improve the platform to meet the academic needs of learners
            worldwide.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Add more courses and resources.</li>
            <li>
              Maintain the platform and ensure it remains free for everyone.
            </li>
            <li>
              Improve the user experience by adding new features and tools.
            </li>
            <li>Keep our content up-to-date and relevant.</li>
          </ul>
        </section>

        <section className="mb-12 text-base text-muted-foreground">
          <h2 className="text-4xl text-center font-semibold mb-8 text-transparent bg-clip-text bg-custom-gradient">
            How You Can Support Us
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Make a Contribution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  You can contribute to DataNode in several ways:
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>One-Time Contributions</li>
                  <li>Recurring Contributions</li>
                </ul>
                <div className="flex justify-center items-center">
                  <Link href="/">
                    <MagicButton
                      title="Contribute Now"
                      icon={<FaArrowRight />}
                      position="right"
                    />
                  </Link>
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Spread the Word</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  If you're unable to contribute financially, you can still
                  help! Share DataNode with your friends, classmates, or on
                  social media. Every mention helps us reach more students.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Contribute Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Are you an expert in a subject or have useful notes, articles,
                  or exam resources? Share your knowledge with our community by
                  contributing content. Together, we can build an even richer
                  educational platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl text-center font-semibold mb-8 text-transparent bg-clip-text bg-custom-gradient">
            How we Use Contributions
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Content Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Developing comprehensive notes, exam materials, and industry
                  updates.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>New Features</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Building interactive tools, adding more courses, and enhancing
                  the learning experience.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Platform Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Keeping the website fast, secure, and free for everyone.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl text-center font-semibold mb-8 text-transparent bg-clip-text bg-custom-gradient">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full text-muted-foreground"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What's the difference between contributing and donating?
              </AccordionTrigger>
              <AccordionContent>
                Contributions to DataNode support the platform's development and
                educational goals, but they are not considered donations since
                Pinnacle Smart Solutions is a for-profit entity. Your
                contributions help keep DataNode free and improve its resources.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Are contributions refundable?</AccordionTrigger>
              <AccordionContent>
                Contributions are non-refundable, as they go directly toward
                maintaining and improving the platform.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How will I know my contribution is being used effectively?
              </AccordionTrigger>
              <AccordionContent>
                We are committed to transparency. Check our [Progress
                Updates/Blog] to see how contributions are being used to improve
                the platform.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="text-center">
          <h2 className="text-4xl text-center font-semibold mb-8 text-transparent bg-clip-text bg-custom-gradient">
            Thank You for Your Support!
          </h2>
          <p className="mb-6 text-muted-foreground">
            Your support helps DataNode continue to thrive as a free educational
            resource. We appreciate your contribution and your belief in our
            mission to make education more accessible for everyone.
          </p>
        </section>
      </div>
    </div>
  );
}
