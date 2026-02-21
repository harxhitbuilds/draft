"use client";

import IdeaCardSkeleton from "@/components/global/skeletons/idea-card";

export default function ProfileSkeleton() {
  return (
    <div className="mx-auto max-w-5xl space-y-12 p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
        <div className="flex items-center gap-6">
          <div className="animate-pulse">
            <div className="border-border bg-muted-foreground/8 h-28 w-28 rounded-2xl border-2" />
          </div>

          <div className="space-y-2">
            <div className="bg-muted-foreground/8 h-6 w-64 animate-pulse rounded" />
            <div className="bg-muted-foreground/6 h-4 w-40 animate-pulse rounded" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-muted-foreground/8 h-9 w-24 animate-pulse rounded" />
        </div>
      </div>

      <div className="border-border border-t" />

      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-3 md:col-span-1">
          <div className="bg-muted-foreground/8 h-5 w-32 animate-pulse rounded" />
          <div className="flex flex-wrap gap-2">
            <div className="bg-muted-foreground/6 h-8 w-20 animate-pulse rounded" />
            <div className="bg-muted-foreground/6 h-8 w-16 animate-pulse rounded" />
            <div className="bg-muted-foreground/6 h-8 w-24 animate-pulse rounded" />
            <div className="bg-muted-foreground/6 h-8 w-12 animate-pulse rounded" />
          </div>
        </div>

        <div className="space-y-3 md:col-span-2">
          <div className="bg-muted-foreground/8 h-5 w-28 animate-pulse rounded" />
          <div className="flex items-center gap-2">
            <div className="bg-muted-foreground/8 h-10 w-10 animate-pulse rounded" />
            <div className="bg-muted-foreground/8 h-10 w-10 animate-pulse rounded" />
            <div className="bg-muted-foreground/8 h-10 w-10 animate-pulse rounded" />
          </div>
          <div className="bg-muted-foreground/6 h-4 w-full animate-pulse rounded" />
        </div>
      </div>

      <div className="border-border border-t" />

      <div className="space-y-4 pb-10">
        <div className="bg-muted-foreground/8 h-7 w-72 animate-pulse rounded" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <IdeaCardSkeleton />
          <IdeaCardSkeleton />
          <IdeaCardSkeleton />
          <IdeaCardSkeleton />
        </div>
      </div>
    </div>
  );
}
