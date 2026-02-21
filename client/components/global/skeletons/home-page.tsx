"use client";

import IdeaCardSkeleton from "./idea-card";

export default function HomePageSkeleton() {
  return (
    <div className="bg-background min-h-screen w-full">
      <section className="mx-auto">
        <div className="relative grid w-full grid-cols-1 gap-4 px-6 md:grid-cols-3">
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
