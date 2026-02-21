import { Eye, User2 } from "lucide-react";
import { Verified } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { demoIdeas } from "@/config/land";
import { ITechnology } from "@/types";

import Container from "../global/components/container";
import SectionHeading from "../global/components/section-heading";
import { Separator } from "../ui/separator";

const BADGE_COLORS = [
  "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  "bg-purple-500/10 text-purple-400 border border-purple-500/20",
  "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
  "bg-orange-500/10 text-orange-400 border border-orange-500/20",
  "bg-pink-500/10 text-pink-400 border border-pink-500/20",
];

export default function ExampleIdea() {
  const getRandomBadgeStyle = () =>
    BADGE_COLORS[Math.floor(Math.random() * BADGE_COLORS.length)];
  return (
    <Container className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div>
        <SectionHeading
          badge="Take a Look"
          heading="Example Ideas to Try"
          description="Browse curated example ideas to see how Alloy works."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {demoIdeas.map((idea, index) => (
            <Card
              key={index}
              className="group w-full max-w-md gap-1 overflow-hidden rounded-md border-white/10 bg-[#0f0f0f] p-0 px-5 py-4 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5"
            >
              <CardHeader className="gap-3 p-0 pb-4">
                <div className="flex items-center justify-between">
                  {idea?.lookingForCollaboratos ? (
                    <Badge
                      variant="outline"
                      className="border-green-500/30 bg-green-500/5 px-2 py-0 text-[10px] font-normal text-green-500"
                    >
                      <span className="mr-1.5 flex h-1.5 w-1.5 items-center">
                        <span className="absolute inline-flex h-1.5 w-1.5 animate-ping rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
                      </span>
                      Looking for collaborators
                    </Badge>
                  ) : (
                    <div />
                  )}
                  <Badge className="rounded-none border-none bg-white/5 font-mono text-[10px] tracking-wider text-zinc-400 uppercase">
                    {idea?.status}
                  </Badge>
                </div>
                <div className="flex flex-col gap-1.5">
                  <CardTitle className="text-xl font-semibold tracking-tight text-white">
                    {idea?.title}
                  </CardTitle>
                  <CardDescription className="text-xs text-zinc-500">
                    Posted by{" "}
                    <span className="cursor-pointer font-medium text-zinc-300 transition-colors hover:text-white">
                      {idea?.owner?.name}
                    </span>
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-5 p-0 pb-4">
                <div>
                  <p className="mb-2 text-[10px] font-bold tracking-widest text-zinc-600 uppercase">
                    Requirements
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {idea?.requirements.map((req, index: number) => (
                      <Badge
                        key={index}
                        className={`rounded-sm border px-2 py-0 text-[11px] font-normal ${getRandomBadgeStyle()}`}
                      >
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-[10px] font-bold tracking-widest text-zinc-600 uppercase">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {idea?.technologies.map(
                      (tech: ITechnology, index: number) => (
                        <Badge
                          key={index}
                          className="rounded-sm border border-white/5 bg-white/5 text-[11px] font-normal text-zinc-400"
                        >
                          {tech.name}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>
              </CardContent>

              <Separator className="bg-white/5" />

              <CardFooter className="flex flex-col space-y-4 p-0 pt-4">
                <div className="flex w-full items-center justify-between gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-9 flex-1 cursor-pointer rounded-md border-white/10 text-xs font-medium text-zinc-300 transition-all hover:bg-white hover:text-black"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-9 flex-1 cursor-pointer rounded-md border-white/10 bg-transparent text-xs font-medium text-zinc-300 hover:border-white/30"
                  >
                    <Verified className="mr-2 h-4 w-4 text-blue-500" />
                    Owner
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}
