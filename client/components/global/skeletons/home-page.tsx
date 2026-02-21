"use client";

import IdeaCardSkeleton from "./idea-card";

export default function HomePageSkeleton() {
  return (
    <div className="bg-background min-h-screen w-full">
      <section className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <IdeaCardSkeleton />
          <IdeaCardSkeleton />
          <IdeaCardSkeleton />
          <IdeaCardSkeleton />
          <IdeaCardSkeleton />
          <IdeaCardSkeleton />
        </div>
      </section>
    </div>
  );
}
