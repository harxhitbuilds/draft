import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface IData {
  heading: string;
  badge: string;
  description: string;
  className?: string;
}

export default function SectionHeading({
  heading,
  badge,
  description,
  className,
}: IData) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "mb-8 flex flex-col items-center gap-4 sm:mb-10",
        className,
      )}
    >
      <Badge className="text-foreground rounded-none bg-blue-600">
        {badge}
      </Badge>
      <h2 className="text-foreground text-center text-3xl sm:text-4xl">
        {heading}
      </h2>
      <p className="text-muted-foreground mx-auto max-w-2xl text-center text-sm sm:text-base">
        {description}
      </p>
    </motion.div>
  );
}
