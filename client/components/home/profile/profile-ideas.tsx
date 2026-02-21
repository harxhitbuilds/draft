"use client";
import IdeaCard from "@/components/global/cards/idea-card";
import EmptyState from "@/components/global/components/empty-state";

export default function ProfileIdeas({ name, ideas }: any) {
  return (
    <div className="space-y-8 pt-6">
      <div className="flex items-center gap-4">
        <h2 className="text-xs font-bold tracking-[0.3em] text-white uppercase">
          Repository of Ideas
        </h2>
        <div className="h-[1px] flex-1 bg-white/5" />
        <span className="font-mono text-[10px] text-zinc-600">
          {ideas?.length ?? 0} ITEMS
        </span>
      </div>

      {!ideas || ideas.length === 0 ? (
        <div className="rounded-xl border border-dashed border-white/5 py-20">
          <EmptyState
            title="Quiet here..."
            description={`${name} hasn't published any drafts yet.`}
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {ideas.map((item: any, idx: number) => (
            <IdeaCard key={item._id ?? idx} idea={item} />
          ))}
        </div>
      )}
    </div>
  );
}
