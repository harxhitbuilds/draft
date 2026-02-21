"use client";

import {
  IconBrain,
  IconBulb,
  IconDatabase,
  IconSearch,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function FirstCard() {
  return (
    <div className="space-y-8 px-4 py-8">
      <div
        className="flex min-h-44 w-full items-center justify-center rounded-t-xl border mask-b-from-6 backdrop-blur-2xl"
        style={{ perspective: 900 }}
      >
        <div className="flex gap-4">
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            style={{ transformOrigin: "50% 50%" }}
            className="border-accent bg-muted flex h-24 w-24 items-center justify-center rounded-xl border will-change-transform"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 text-black">
              <IconBulb size={20} />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <IconDatabase />
          <h2>Post & Manage Ideas</h2>
        </div>
        <p className="text-muted-foreground text-xs">
          Create, edit and delete your project ideas. Add a clear title,
          description, required roles and tech stack so others can discover and
          contribute.
        </p>
      </div>
    </div>
  );
}
