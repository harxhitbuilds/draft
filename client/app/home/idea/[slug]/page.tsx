"use client";
import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { useEffect } from "react";

// For the back button
import IdeaViewSkeleton from "@/components/global/skeletons/idea-view";
import IdeaContent from "@/components/home/view-idea/idea-content";
import IdeaHeader from "@/components/home/view-idea/idea-header";
import IdeaMeta from "@/components/home/view-idea/idea-meta";
import { useIdeaStore } from "@/store/idea.store";

export default function Idea() {
  const { fetchIdeaBySlug, currentIdea, fetching } = useIdeaStore();
  const { slug } = useParams();
  const router = useRouter();

  useEffect(() => {
    if (!slug) return;
    const slugStr = Array.isArray(slug) ? slug[0] : slug;
    fetchIdeaBySlug(slugStr);
  }, [fetchIdeaBySlug, slug]);

  if (fetching) return <IdeaViewSkeleton />;

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a]">
      <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto max-w-3xl px-6 py-12 duration-700">
        <button
          onClick={() => router.back()}
          className="group mb-10 flex items-center gap-2 text-xs font-medium text-zinc-500 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to feed
        </button>

        <IdeaHeader
          coverImage={currentIdea?.coverImage}
          title={currentIdea?.title}
          owner={currentIdea?.owner}
          createdAt={currentIdea?.createdAt}
        />

        <IdeaMeta
          technologies={currentIdea?.technologies}
          requirements={currentIdea?.requirements}
        />

        <IdeaContent description={currentIdea?.description} />
      </div>
    </div>
  );
}
