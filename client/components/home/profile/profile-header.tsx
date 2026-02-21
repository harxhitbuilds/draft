"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays } from "lucide-react";

export default function ProfileHeader({ name, profile, createdAt }: any) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-end gap-6 pb-8 border-b border-white/5">
      <Avatar className="h-32 w-32 rounded-2xl border-4 border-[#0f0f0f] bg-[#0f0f0f] shadow-2xl shadow-white/5">
        {profile ? (
          <AvatarImage src={profile} className="object-cover" />
        ) : (
          <AvatarFallback className="bg-zinc-800 text-2xl">
            {(name ?? "U").charAt(0).toUpperCase()}
          </AvatarFallback>
        )}
      </Avatar>

      <div className="space-y-2 mb-2">
        <h1 className="text-4xl font-black tracking-tighter text-white uppercase italic">
          {name}
          <span className="text-blue-500">.</span>
        </h1>
        <div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
          <CalendarDays className="h-3 w-3" />
          <span>Member since {createdAt ? new Date(createdAt).getFullYear() : "—"}</span>
        </div>
      </div>
    </div>
  );
}