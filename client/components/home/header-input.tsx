"use client";
import { useRef, useState } from "react";

import { useIdeaStore } from "@/store/idea.store";

import { Input } from "../ui/input";

export default function HeaderInput({
  heading,
  input,
}: {
  heading: string;
  input: { placeholder: string };
}) {
  const { searchIdeas } = useIdeaStore();
  const [query, setQuery] = useState("");

  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      searchIdeas(val);
    }, 500);
  };

  return (
    <div className="flex w-full flex-col space-y-6 px-6 py-6 md:flex md:flex-row md:items-center md:justify-between md:space-y-0">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white italic">
          {heading}
          <span className="ml-1 text-blue-500">.</span>
        </h1>
        <p className="mt-1 text-xs font-medium text-zinc-500">
          Discover and collaborate on the next big thing.
        </p>
      </div>
      <div>
        <Input
          placeholder={input.placeholder}
          value={query}
          onChange={handleSearch}
          className={
            "border-border dark:placeholder:text-muted-foreground/40 h-12 min-w-80 rounded-none border bg-transparent px-3 py-2 text-white placeholder:text-white focus:ring-2 focus:ring-red-800 focus:outline-none dark:bg-transparent dark:text-white"
          }
        />
      </div>
    </div>
  );
}
