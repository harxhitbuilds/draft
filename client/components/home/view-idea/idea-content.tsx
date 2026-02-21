"use client";
import Markdown from "@/components/global/components/markdown";

export default function IdeaContent({
  description,
}: {
  description?: string | null;
}) {
  return (
    <div className="prose prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-p:text-zinc-400 prose-p:leading-relaxed prose-strong:text-white prose-pre:bg-[#0f0f0f] prose-pre:border prose-pre:border-white/5 max-w-none border-t border-white/5 pt-10">
      <Markdown content={description} />
    </div>
  );
}
