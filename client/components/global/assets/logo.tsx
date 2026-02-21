"use client";
import { easeInOut, motion } from "motion/react";
import Image from "next/image";

import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: easeInOut }}
      className={cn("flex items-center justify-center gap-2", className)}
    >
      <div className="flex items-center justify-center rounded-xs bg-yellow-300 p-1">
        <Image
          src="/assets/logo.png"
          alt="Draft"
          height={20}
          width={20}
          className="invert"
        />
      </div>
      <h1 className="text-xl font-bold">Draft</h1>
    </motion.div>
  );
}
