"use client";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

import { Button } from "@/components/ui/button";

export default function ProfileSidebar({ socialLinks }: any) {
  const hasSocialLinks =
    socialLinks && Object.values(socialLinks).some((v) => !!v);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 px-1 py-4">
      <div className="flex flex-col gap-1">
        <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-600 uppercase">
          Network
        </p>
        <div className="flex items-center gap-6">
          {hasSocialLinks ? (
            <>
              {socialLinks?.github && (
                <a href={socialLinks.github} target="_blank" rel="noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 border border-white/5 text-zinc-400 hover:bg-white/5 hover:text-white"
                  >
                    <BsGithub className="h-4 w-4" />
                  </Button>
                </a>
              )}
              {socialLinks?.linkedIn && (
                <a href={socialLinks.linkedIn} target="_blank" rel="noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 border border-white/5 text-zinc-400 hover:bg-white/5 hover:text-white"
                  >
                    <BsLinkedin className="h-4 w-4" />
                  </Button>
                </a>
              )}
              {socialLinks?.x && (
                <a href={socialLinks.x} target="_blank" rel="noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 border border-white/5 text-zinc-400 hover:bg-white/5 hover:text-white"
                  >
                    <BsTwitterX className="h-4 w-4" />
                  </Button>
                </a>
              )}
            </>
          ) : (
            <span className="text-xs text-zinc-700 italic">
              No socials linked
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
