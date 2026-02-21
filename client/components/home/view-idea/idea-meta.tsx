"use client";
import { Badge } from "@/components/ui/badge";

export default function IdeaMeta({ technologies, requirements }: any) {
  return (
    <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2">
      <div className="space-y-3">
        <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-600 uppercase">
          Project Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies?.map((tech: any, i: number) => (
            <Badge
              key={i}
              className="rounded-sm border-white/10 bg-white/5 px-3 font-normal text-zinc-300"
            >
              {tech.name}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-[10px] font-bold tracking-[0.2em] text-zinc-600 uppercase">
          Collaborators Needed
        </p>
        <div className="flex flex-wrap gap-2">
          {requirements?.map((req: string, i: number) => (
            <Badge
              key={i}
              className="rounded-sm border-blue-500/20 bg-blue-500/5 px-3 font-normal text-blue-400"
            >
              {req}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
