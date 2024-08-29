"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Feedbacks() {
  return (
    <>
      <div className="h-[32rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
        <h4 className="text-3xl mb-14 lg:text-4xl lg:leading-tight max-w-5xl text-transparent bg-clip-text bg-custom-gradient mx-auto text-center tracking-tight font-semibold">
          Happy Shoutouts
        </h4>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
}

const testimonials = [
  {
    quote:
      "Thankyou so much...this website its very helpful to me...all study material, pdf, and youtube lectures are very important....again thanks",
    name: "Kartik",
    title: "Student",
  },
  {
    quote:
      "A very useful and innovative website that can help many students in different ways. A good source of useful information and resource sharing. kudos to student developers. Well done. keep it up.",
    name: "Piyush Sewal",
    title: "Assistant Professor",
  },
  {
    quote:
      "Thankyou so much...this website its very helpful to me...all study material, pdf, and youtube lectures are very important....again thanks",
    name: "Kartik",
    title: "Student",
  },
  {
    quote:
      "A very useful and innovative website that can help many students in different ways. A good source of useful information and resource sharing. kudos to student developers. Well done. keep it up.",
    name: "Piyush Sewal",
    title: "Assistant Professor",
  },
  {
    quote:
      "Thankyou so much...this website its very helpful to me...all study material, pdf, and youtube lectures are very important....again thanks",
    name: "Kartik",
    title: "Student",
  },
  {
    quote:
      "A very useful and innovative website that can help many students in different ways. A good source of useful information and resource sharing. kudos to student developers. Well done. keep it up.",
    name: "Piyush Sewal",
    title: "Assistant Professor",
  },

];
