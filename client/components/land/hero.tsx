import { easeInOut, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { heroConfig } from "@/config/land";

import Container from "../global/components/container";
import { Button } from "../ui/button";
import { FlipWords } from "../ui/flip-words";

export default function Hero() {
  return (
    <Container className="relative z-20 flex flex-col gap-8 pt-24 pb-16 md:pt-28 md:pb-12">
      <div className="z-10 flex w-full flex-col items-center gap-6">
        <div className="flex flex-col gap-3 sm:max-w-3xl md:max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: easeInOut }}
            className="font-fugaz text-center leading-tight tracking-tight"
          >
            <span className="block text-2xl lg:text-6xl">
              {heroConfig.line1}
            </span>
            <span className="mt-3 flex flex-wrap items-center justify-center gap-2 text-3xl lg:text-5xl">
              {heroConfig.line2}
              <span className="italic">
                <FlipWords
                  words={heroConfig.words}
                  duration={1000}
                  className="border-border rounded-none border border-dashed bg-blue-600 px-2 py-1"
                />
              </span>
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: easeInOut }}
          className="text-muted-foreground mx-auto mt-2 max-w-xl px-8 text-center text-xs leading-relaxed italic sm:text-sm"
        >
          {heroConfig.para}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: easeInOut }}
        className="z-10 mt-2 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-4"
      >
        {heroConfig.ctabtns.map((item, index) => (
          <Link href={item.link} key={index}>
            <Button
              variant={item.type}
              className="cursor-pointer rounded-xs px-6 py-2 text-sm"
            >
              {item.title}
              {item.icon}
            </Button>
          </Link>
        ))}
      </motion.div>

      <div className="flex w-full items-center justify-center px-6 md:mt-10">
        <Image
          src={heroConfig.heroImage.src}
          alt={heroConfig.heroImage.alt}
          width={1000}
          height={800}
          className="border-border z-20 rounded-lg border mask-b-from-3.5 shadow-lg"
        />
      </div>
    </Container>
  );
}
