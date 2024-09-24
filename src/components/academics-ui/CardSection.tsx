import { useRef, useCallback, useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronLeft,
  MessageCircle,
  ThumbsUp,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface CardProps {
  title: string;
  difficulty: string;
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
  className?: string;
}

const DifficultyColors = {
  Beginner: "bg-green-600",
  Intermediate: "bg-yellow-600",
  Advanced: "bg-red-600",
  BCA: "bg-cyan-600"
};

const customShadows = {
  skyBlue: "hover:shadow-[0_0px_10px_rgba(56,189,248,1)] hover:border-sky-400",
  green: "hover:shadow-[0_0px_10px_rgba(134,239,172,1)] hover:border-green-300",
  yellow:
    "hover:shadow-[0_0px_10px_rgba(241,156,65,1)] hover:border-yellow-300",
  red: "hover:shadow-[0_0px_10px_rgba(248,114,114,1)] hover:border-red-300",
  purple:
    "hover:shadow-[0_0px_10px_rgba(216,180,254,1)] hover:border-purple-300",
};

const Cards: React.FC<CardProps> = ({
  title,
  difficulty,
  comments,
  likes,
  author,
  date,
  description,
  url,
  BackgroundIcon1,
  BackgroundIcon2,
  icon1Color,
  icon2Color,
  shadow,
  className,
}) => (
  <Link
    href={url}
    className={`group snap-center focus:outline-none sm:w-[330px] xl:w-[333px] ${className}`}
  >
    <Card
      className={`group/card rounded-3xl bg-card relative overflow-hidden transition-all duration-300 sm:min-w-[300px] xl:min-w-[333px] border my-2 ${
        customShadows[shadow as keyof typeof customShadows]
      }`}
    >
      <BackgroundIcon1 className={icon1Color} />
      <BackgroundIcon2 className={icon2Color} />

      <CardHeader className="space-y-1.5 p-6 relative flex flex-col items-start gap-1 py-5">
        <CardTitle className="font-semibold tracking-tight max-w-[75%] truncate text-2xl duration-300">
          {title}
        </CardTitle>
        <div className="flex items-center gap-5 text-center duration-300">
          <Badge
            variant="secondary"
            className={`${
              DifficultyColors[difficulty as keyof typeof DifficultyColors]
            } text-white`}
          >
            {difficulty}
          </Badge>
          {/* <div className="flex items-center gap-2 text-sm">
            <MessageCircle size={18} />
            {comments}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <ThumbsUp size={18} />
            {likes}
          </div> */}
        </div>
      </CardHeader>

      <CardContent className="relative flex flex-col justify-between gap-2 rounded-xl p-6 pb-0 duration-300">
        <div className="flex items-center gap-2">
          <div className="-ml-[0.33rem] flex h-auto w-fit items-center whitespace-nowrap rounded-full bg-transparent py-1 pl-[0.33rem] pr-2 text-xs font-bold text-neutral-700 duration-300 dark:text-neutral-200">
            {author}
          </div>
          <div className="text-muted-foreground whitespace-nowrap text-sm">
            {date}
          </div>
        </div>
        <div className="text-muted-foreground text-sm relative h-20 pb-4 leading-[1.425rem]">
          <div className="pointer-events-none absolute inset-0 h-full w-full shadow-[inset_0_-1.5rem_1rem_-0.5rem_hsl(var(--card))] duration-300 group-hover/card:shadow-[inset_0_-1.5rem_1rem_-0.5rem_hsl(var(--card))] group-focus:shadow-[inset_0_-1.5rem_1rem_-0.5rem_hsl(var(--card))]"></div>
          <p className="mb-4 overflow-hidden text-ellipsis">{description}</p>
        </div>
      </CardContent>
    </Card>
  </Link>
);

interface CardSectionProps {
  cardData: CardProps[];
}

export default function CardSection({ cardData }: CardSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(true);

  const updateShadows = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftShadow(scrollLeft > 0);
      setShowRightShadow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateShadows);
      window.addEventListener("resize", updateShadows);
      updateShadows();
      return () => {
        scrollContainer.removeEventListener("scroll", updateShadows);
        window.removeEventListener("resize", updateShadows);
      };
    }
  }, [updateShadows]);

  const scroll = useCallback((direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth;
      const targetScroll =
        direction === "left"
          ? Math.max(0, current.scrollLeft - scrollAmount)
          : Math.min(
              current.scrollWidth - current.clientWidth,
              current.scrollLeft + scrollAmount
            );

      current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <section
      className={`relative w-full pt-4 ${showLeftShadow ? "mx-0" : "mx-5"}`}
    >
      <div className="relative">
        <div
          className={`hidden 2xl:block absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
            showLeftShadow ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <div
          className={`absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
            showRightShadow ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <div
          ref={scrollContainerRef}
          className="flex w-full snap-x gap-4 overflow-x-auto scroll-smooth pb-10 hide-scrollbar pl-0 md:pl-40"
        >
          {cardData.map((card, index) => (
            <Cards
              key={index}
              {...card}
              className={`${index === cardData.length - 1 && "mr-40 md:mr-10"}`}
            />
          ))}
        </div>
      </div>
      <Button
        onClick={() => scroll("left")}
        className={`hidden md:block absolute left-2 top-1/2 bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-300 dark:border-neutral-700 backdrop-blur-sm -translate-y-1/2 mx-40 rounded-full p-2 md:left-4 lg:left-8 z-20 transition-opacity duration-300 ${
          showLeftShadow ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll carousel left"
        aria-hidden={!showLeftShadow}
      >
        <ChevronLeft className="h-4 w-4 text-neutral-700 dark:text-neutral-200" />
      </Button>
      <Button
        onClick={() => scroll("right")}
        className={`hidden md:block absolute right-2 top-1/2 bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-300 dark:border-neutral-700 backdrop-blur-sm -translate-y-1/2 mx-40 rounded-full p-2 md:right-4 lg:right-8 z-20 transition-opacity duration-300 ${
          showRightShadow ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll carousel right"
        aria-hidden={!showRightShadow}
      >
        <ChevronRight className="h-4 w-4 text-neutral-700 dark:text-neutral-200" />
      </Button>
    </section>
  );
}
