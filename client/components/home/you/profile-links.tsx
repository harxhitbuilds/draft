"use client";
import { Plus } from "lucide-react";
import Link from "next/link";

import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

import { Button } from "@/components/ui/button";

import ProfileActions from "./profile-actions";

export default function ProfileSkillsSocials({
  socialLinks,
  actionProps,
}: any) {
  const hasSocialLinks =
    socialLinks && Object.values(socialLinks).some((v: any) => !!v);

  return (
    <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/5 px-1 py-6">
      <div className="flex flex-col gap-2">
        <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-600 uppercase">
          Network Endpoints
        </p>
        <div className="flex items-center gap-6">
          {hasSocialLinks ? (
            <div className="flex items-center gap-6">
              {socialLinks?.github && (
                <a href={socialLinks.github} target="_blank" rel="noreferrer">
                  <BsGithub className="h-4 w-4 text-zinc-400 transition-colors hover:text-white" />
                </a>
              )}
              {socialLinks?.linkedIn && (
                <a href={socialLinks.linkedIn} target="_blank" rel="noreferrer">
                  <BsLinkedin className="h-4 w-4 text-zinc-400 transition-colors hover:text-white" />
                </a>
              )}
              {socialLinks?.x && (
                <a href={socialLinks.x} target="_blank" rel="noreferrer">
                  <BsTwitterX className="h-4 w-4 text-zinc-400 transition-colors hover:text-white" />
                </a>
              )}
            </div>
          ) : (
            <span className="text-xs text-zinc-700 italic">
              No connections set
            </span>
          )}
          <ProfileActions {...actionProps} />
        </div>
      </div>

      <div className="flex w-full flex-col gap-2 md:w-auto md:items-end">
        <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-600 uppercase">
          Submissions
        </p>
        <Link href="/home/post">
          <Button
            size="sm"
            className="h-9 cursor-pointer rounded-md bg-white px-6 text-xs font-bold text-black hover:bg-zinc-200"
          >
            <Plus className="mr-2 h-4 w-4 stroke-[3px]" />
            New Idea
          </Button>
        </Link>
      </div>
    </div>
  );
}
