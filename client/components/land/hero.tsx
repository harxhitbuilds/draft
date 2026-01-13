import Container from "../global/components/container";
import Background from "./background";
import { heroConfig } from "@/config/land";
import { Button } from "../ui/button";
import { FlipWords } from "../ui/flip-words";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <Container className="flex flex-col gap-8 z-20 relative ">
      <Background />

      <div className="w-full flex flex-col gap-8 items-center z-10 mt-28">
        <div className="sm:max-w-4xl md:max-w-5xl flex flex-col gap-2">
          <h1 className="text-center tracking-tight font-fugaz leading-tight">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {heroConfig.line1}
            </span>

            <span className="mt-2 flex flex-wrap justify-center items-center gap-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {heroConfig.line2}
              <span className="italic">
                <FlipWords
                  words={heroConfig.words}
                  duration={1000}
                  className="px-2 py-1 rounded-lg border border-dashed border-border bg-background text-[#94dbff]"
                />
              </span>
            </span>
          </h1>
        </div>

        <p className="max-w-sm md:max-w-lg mx-auto text-center text-sm sm:text-sm text-muted-foreground leading-relaxed">
          {heroConfig.para}
        </p>
      </div>

      <div className=" flex items-center justify-center gap-4 z-10">
        {heroConfig.ctabtns.map((item, index) => (
          <Link href={item.link} key={index}>
            <Button
              className={`rounded-xs cursor-pointer ${
                item.type === "primary"
                  ? "bg-black dark:bg-white text-white dark:text-black"
                  : "bg-transparent hover:bg-zinc-200 dark:hover:bg-zinc-900 text-black dark:text-white"
              }`}
            >
              {item.title}
              {item.icon}
            </Button>
          </Link>
        ))}
      </div>

      <div className="w-full flex items-center justify-center mt-8 px-6 ">
        <Image
          src={heroConfig.heroImage.src}
          alt={heroConfig.heroImage.alt}
          width={1200}
          height={500}
          className="rounded-lg z-20 border-4 border-border"
        />
      </div>
    </Container>
  );
}
