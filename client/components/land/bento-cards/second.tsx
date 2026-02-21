"use client";

import { IconSearch } from "@tabler/icons-react";
import { motion } from "motion/react";

import { useEffect, useState } from "react";

const BAR_COUNT = 5;

function randInt(min = 30, max = 95) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function SecondCard() {
  const [heights, setHeights] = useState<number[]>(() =>
    Array.from({ length: BAR_COUNT }, () => randInt()),
  );

  useEffect(() => {
    const id = setInterval(
      () => {
        setHeights((prev) => prev.map(() => randInt()));
      },
      700 + Math.floor(Math.random() * 1000),
    );

    return () => clearInterval(id);
  }, []);

  return (
    <div className="space-y-8 px-4 py-8">
      <div className="flex min-h-44 w-full items-center justify-center rounded-t-xl border mask-b-from-6 backdrop-blur-2xl">
        <div
          className="flex h-28 w-44 items-end justify-center gap-2"
          aria-hidden
        >
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            style={{ transformOrigin: "50% 50%" }}
            className="border-accent bg-muted flex h-24 w-24 items-center justify-center rounded-xl border will-change-transform"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 text-black">
              <IconSearch size={20} />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <IconSearch />
          <h2>Browse & Discover</h2>
        </div>
        <p className="text-muted-foreground text-xs">
          Explore ideas posted by the community. Filter by technology or role,
          read details, and bookmark ideas you want to follow or join.
        </p>
      </div>
    </div>
  );
}
