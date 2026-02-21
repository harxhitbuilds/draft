"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Added to show current page

import { topbarConfig } from "@/config/topbar";

import { Separator } from "../ui/separator";
import { SidebarTrigger } from "../ui/sidebar";

export default function Topbar() {
  const pathname = usePathname();

  // Simple logic to format the breadcrumb (e.g., /home/idea -> Idea)
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentPage = pathSegments[pathSegments.length - 1] || "Home";

  return (
    <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-white/5 bg-[#0a0a0a]/70 px-4 backdrop-blur-md transition-all">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-zinc-400 transition-colors hover:bg-white/5 hover:text-white" />

        <Separator orientation="vertical" className="h-4 bg-white/10" />

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase">
            Draft
          </span>
          <span className="text-zinc-700">/</span>
          <span className="text-[10px] font-bold tracking-widest text-zinc-300 capitalize uppercase">
            {currentPage.replace("-", " ")}
          </span>
        </div>
      </div>

      <div className="mr-4 flex items-center gap-6">
        {topbarConfig.socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            className="transform text-zinc-500 transition-all duration-300 hover:scale-110 hover:text-white"
            aria-label={`Visit our ${link.href}`}
          >
            <link.icon size={18} strokeWidth={1.5} />
          </Link>
        ))}
      </div>
    </header>
  );
}
