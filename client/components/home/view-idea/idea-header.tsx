"use client";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function timeAgo(date?: string | number | Date | null) {
  if (!date) return null;
  const d = new Date(date);
  if (isNaN(d.getTime())) return null;
  return `Posted ${formatDistanceToNow(d, { addSuffix: true })}`;
}

export default function IdeaHeader({
  coverImage,
  title,
  owner,
  createdAt,
}: any) {
  return (
    <div className="space-y-8">
      <div className="relative h-[300px] w-full overflow-hidden rounded-xl border border-white/5">
        {coverImage ? (
          <>
            <Image
              src={coverImage}
              alt={title ?? "idea"}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-zinc-900 text-zinc-700 italic">
            No cover image
          </div>
        )}
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter text-white md:text-5xl">
          {title}
        </h1>

        <div className="flex items-center justify-between border-y border-white/5 py-2">
          <Link
            href={`/home/profile/${owner?.username}`}
            className="group flex items-center gap-3"
          >
            <Avatar className="h-9 w-9 border border-white/10">
              <AvatarImage src={owner?.profile} />
              <AvatarFallback className="bg-zinc-800 text-xs">
                {(owner?.name ?? "U").charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-zinc-200 transition-colors group-hover:text-white">
                {owner?.name}
              </p>
              <p className="text-[10px] tracking-widest text-zinc-500 uppercase">
                @{owner?.username}
              </p>
            </div>
          </Link>
          <p className="font-mono text-xs text-zinc-500">
            {timeAgo(createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
}
