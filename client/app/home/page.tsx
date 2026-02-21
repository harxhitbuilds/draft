"use client";
import { useEffect, useRef } from "react";

import IdeaCard from "@/components/global/cards/idea-card";
import EmptyState from "@/components/global/components/empty-state";
import HomePageSkeleton from "@/components/global/skeletons/home-page";
import Header from "@/components/home/header-input";
import { Spinner } from "@/components/ui/spinner";
import { useIdeaStore } from "@/store/idea.store";

const input = {
  placeholder: "Search ideas by title . . . ",
};

export default function Home() {
  const { fetchIdeas, ideas, fetching, hasMore } = useIdeaStore();

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const fetchingRef = useRef(fetching);
  const hasMoreRef = useRef(hasMore);
  const initialLoadedRef = useRef(false);

  useEffect(() => {
    fetchingRef.current = fetching;
  }, [fetching]);

  useEffect(() => {
    hasMoreRef.current = hasMore;
  }, [hasMore]);

  useEffect(() => {
    if (!initialLoadedRef.current && ideas.length === 0) {
      initialLoadedRef.current = true;
      fetchIdeas();
    }
  }, [fetchIdeas, ideas.length]);

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (fetchingRef.current) return;
        if (!hasMoreRef.current) return;

        fetchIdeas();
      },

      { threshold: 0.1, root: null, rootMargin: "100px" },
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [fetchIdeas]);

  return (
    <div className="">
      <Header heading="Top Ideas" input={input} />

      {ideas.length === 0 && hasMore ? (
        <HomePageSkeleton />
      ) : (
        <div className="relative grid w-full grid-cols-1 gap-4 px-6 md:grid-cols-3">
          {ideas.length === 0 ? (
            <EmptyState
              title="No Ideas Found"
              description="Try a different search term."
            />
          ) : (
            ideas.map((item, index) => <IdeaCard key={index} idea={item} />)
          )}
        </div>
      )}

      <div className="p-12 text-center">
        {fetching && ideas.length > 0 ? (
          <div className="flex items-center justify-center space-x-2">
            <Spinner />
            <span>Fetching more ideas...</span>
          </div>
        ) : null}
      </div>

      <div ref={loaderRef} className="h-10" />
    </div>
  );
}
