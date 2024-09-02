"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Feedbacks() {
  return (
    <>
      <div className="h-[32rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center">
      <h4 className="text-3xl lg:text-5xl lg:leading-tight mt-5 max-w-5xl text-white mx-auto text-center tracking-tight font-semibold">
            Happy{" "}
            <span className="text-transparent bg-clip-text bg-custom-gradient">
              shoutouts
            </span>
          </h4>
        <p className="text-sm lg:text-lg max-w-2xl mx-auto font-medium text-center py-2 px-3 text-gray-700">
          Hear from our satisfied users and see how DataNode has made a
          difference in their educational journey.
        </p>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className="my-10"
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
