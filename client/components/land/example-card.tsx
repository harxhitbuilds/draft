import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";

import { idea } from "@/config/land";
import { ITechnology } from "@/types";

import { Eye, User2 } from "lucide-react";

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
    <div className="w-full flex flex-col items-center justify-center gap-4 py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="text-center space-y-2">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
          Ready to collaborate?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join thousands of developers building the next generation of software.
        </p>
      </div>
      <Card className="w-full max-w-md overflow-hidden gap-1 p-0 px-4 py-6 rounded-sm bg-background border-border">
        <CardHeader className="gap-2 p-0 py-2 ">
          <div className="flex items-center justify-between">
            {idea?.lookingForCollaboratos ? (
              <Badge className="bg-muted-foreground/10 text-foreground border border-foreground/20 text-[10px]">
                <div className="h-1 w-1 rounded-full animate-pulse bg-green-500" />
                Looking for collaborators
              </Badge>
            ) : (
              ""
            )}
            <Badge className="bg-muted-foreground/10 text-foreground border border-foreground/20 text-[10px]">
              {idea?.status}
            </Badge>
          </div>
          <div className="flex flex-col gap-1">
            <CardTitle className="text-lg">{idea?.title}</CardTitle>
            <CardDescription className="text-xs">
              Posted by <span className="font-medium">{idea?.owner?.name}</span>
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-2  p-0 py-2">
          <div>
            <div className="flex flex-wrap gap-2">
              {idea?.requirements.map((req, index: number) => (
                <Badge
                  key={index}
                  className={`rounded-sm ${getRandomBadgeStyle()}`}
                >
                  {req}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {idea?.technologies.map((tech: ITechnology, index: number) => (
              <Badge
                key={index}
                className="rounded-xs bg-muted-foreground/20 text-foreground text-xs"
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </CardContent>

        <Separator className="" />

        <CardFooter className="flex flex-col p-0  py-2 space-y-4">
          <div className="w-full flex items-center justify-between gap-2">
            <Button
              variant="outline"
              size="sm"
              className="rounded-sm cursor-pointer"
            >
              <Eye />
              View
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-sm cursor-pointer"
            >
              <User2 />
              Owner's Profile
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
