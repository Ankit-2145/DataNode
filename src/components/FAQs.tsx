"use client";

import { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is DataNode, and who is it for?",
    answer:
      "DataNode is a comprehensive online learning platform designed for students and learners who want to excel in their academic pursuits. It offers a wide range of courses, study materials, and community resources to help you succeed in your studies, whether you’re pursuing a BCA or other academic programs.",
  },
  {
    question: "How can I sign up for a course on DataNode?",
    answer:
      "Hold tight, adventurer! Our course signup feature is currently under magical construction. In just a few days, you’ll be able to enroll with a click and start your learning journey. Stay tuned—the adventure is almost here!",
  },
  {
    question: "How can I contribute or suggest content for DataNode?",
    answer:
      "We welcome contributions and suggestions from our community! If you have content to share or ideas for new courses, you can submit them through our “Github” page or contact our team directly. We value your input in making DataNode better for everyone.",
  },
  {
    question: "What if I have questions or need support while using DataNode?",
    answer:
      "If you have any questions or need support, you can reach out to our support team via the “Contact Us” page. Additionally, you can participate in our community forums where fellow learners and instructors are available to assist you.",
  },
  {
    question: "How often is new content added to DataNode?",
    answer:
      "We regularly update DataNode with new courses, study materials, and resources to ensure our content remains current and relevant. Keep an eye on our “New Arrivals” section to stay updated on the latest additions.",
  },
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = memo<AccordionItemProps>(
  ({ question, answer, isOpen, onClick }) => {
    return (
      <div className="border-b border-gray-200 last:border-b-0">
        <button
          className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none"
          onClick={onClick}
          aria-expanded={isOpen}
        >
          <span className="text-muted-foreground font-medium text-base">{question}</span>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 text-muted-foreground ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-6 py-4 mx-3 text-muted-foreground text-base rounded-md">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

export default function FAQs() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = useCallback((index: number) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index));
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12">
      <h4 className="text-4xl lg:leading-tight mt-5 max-w-5xl text-white mx-auto text-center tracking-tight font-semibold">
        Frequently{" "}
        <span className="text-transparent bg-clip-text bg-custom-gradient">
          Asked
        </span>{" "}
        Questions
      </h4>
      <p className="text-base max-w-2xl mx-auto font-medium text-center py-2 px-3 text-muted-foreground">
        Find answers to common questions and get the information you need to
        make the most of our platform.
      </p>
      <div className="my-14 rounded-lg shadow-md overflow-hidden">
        <AnimatePresence initial={false}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openItem === index}
                onClick={() => toggleItem(index)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
