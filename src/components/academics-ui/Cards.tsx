import React from "react";
import { MessageCircle, ThumbsUp, Circle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface ChallengeCardProps {
  title: string;
  difficulty: string;
  comments: number;
  likes: number;
  author: string;
  date: string;
  description: string;
}

export default function Cards({
  title,
  difficulty,
  comments,
  likes,
  author,
  date,
  description,
}: ChallengeCardProps) {
  return (
    <>
      <Link
        href="/"
        className="group snap-center focus:outline-none sm:w-[330px] xl:w-[333px]"
      >
        <Card className="group/card rounded-3xl hover:bg-card-hovered relative overflow-hidden duration-300 sm:min-w-[300px] xl:min-w-[333px] hover:shadow-beginner focus:shadow-[#86cae9] dark:hover:shadow-[#86cae9] dark:focus:shadow-[#86cae9] dark:hover:border-[#86cae9] hover:shadow-[#86cae9] dark:focus:border-difficulty-beginner-dark focus:border-difficulty-beginner">
          <Circle className="group-hover/card:text-difficulty-beginner dark:group-hover/card:text-difficulty-beginner-dark absolute -right-4 -top-8 h-24 w-24 origin-top-right stroke-[0.5] text-black/10 duration-300 group-hover/card:scale-90 dark:text-white/10" />
          <Circle className="group-hover/card:text-difficulty-beginner dark:group-hover/card:text-difficulty-beginner-dark absolute -right-4 -top-8 h-32 w-32 origin-top-right stroke-[0.4] text-black/10 duration-500 group-hover/card:scale-90 dark:text-white/10" />

          <CardHeader className="space-y-1.5 p-6 relative flex flex-col items-start gap-1 py-5">
            <CardTitle className="font-semibold tracking-tight max-w-[75%] truncate text-2xl duration-300">
              {title}
            </CardTitle>
            <div className="flex items-center gap-5 text-center duration-300">
              <Badge
                variant="secondary"
                className="bg-sky-600 text-white dark:bg-difficulty-beginner-dark"
              >
                {difficulty}
              </Badge>
              <div className="flex items-center gap-2 text-sm">
                <MessageCircle size={18} />
                {comments}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <ThumbsUp size={18} />
                {likes}
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative flex flex-col justify-between gap-2 rounded-xl p-6 pb-0 duration-300">
            <div className="flex items-center gap-2">
              <div className="-ml-[0.33rem] flex h-auto w-fit items-center whitespace-nowrap rounded-full bg-transparent py-1 pl-[0.33rem] pr-2 text-xs font-bold text-neutral-700 duration-300 hover:bg-black/10 dark:text-white dark:hover:bg-white/20">
                {author}
              </div>
              <div className="text-muted-foreground whitespace-nowrap text-sm">
                {date}
              </div>
            </div>
            <div className="text-muted-foreground text-sm relative h-20 pb-4 leading-[1.425rem]">
              <div className="pointer-events-none absolute inset-0 h-full w-full shadow-[inset_0_-1.5rem_1rem_-0.5rem_hsl(var(--card))] duration-300 group-hover/card:shadow-[inset_0_-1.5rem_1rem_-0.5rem_hsl(var(--card-hovered))] group-focus:shadow-[inset_0_-1.5rem_1rem_-0.5rem_hsl(var(--card-hovered))]"></div>
              <p className="mb-4 overflow-hidden text-ellipsis">
                {description}
              </p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </>
  );
}
