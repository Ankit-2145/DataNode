"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ComingSoon() {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText =
    "cd datanode\ncd app\nlayout.jsx package.json README.md\nnpm run dev\n\n> Initializing...\n> Loading dependencies...\n> Starting development server...\n> Adding caffeine...\n\nError: Project not ready yet!\nComing Soon...";

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 50);

    const cursorEffect = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingEffect);
      clearInterval(cursorEffect);
    };
  }, []);

  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-gray-800 text-green-400 font-mono">
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <span className="bg-red-500 w-3 h-3 rounded-full mr-2" />
            <span className="bg-yellow-500 w-3 h-3 rounded-full mr-2" />
            <span className="bg-green-500 w-3 h-3 rounded-full mr-2" />
            Terminal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="whitespace-pre-wrap">
            <code>
              {text}
              {showCursor && <span className="animate-pulse">▊</span>}
            </code>
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}
