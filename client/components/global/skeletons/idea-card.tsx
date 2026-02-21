"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function IdeaCardSkeleton() {
  return (
    <Card className="bg-background border-border w-full animate-pulse gap-1 overflow-hidden rounded-sm p-0 px-4 py-6">
      <CardHeader className="gap-2 p-0 py-2">
        <div className="flex items-center justify-between">
          <div className="bg-muted-foreground/10 h-4 w-36 rounded-lg" />
          <div className="bg-muted-foreground/10 h-4 w-16 rounded-md" />
        </div>

        <div className="mt-3 flex flex-col gap-1">
          <div className="bg-muted-foreground/10 h-5 w-3/4 rounded" />
          <div className="bg-muted-foreground/6 h-3 w-1/2 rounded" />
        </div>
      </CardHeader>

      <CardContent className="space-y-2 p-0 py-2">
        <div className="flex flex-wrap gap-2">
          <div className="bg-muted-foreground/8 h-6 w-20 rounded" />
          <div className="bg-muted-foreground/8 h-6 w-16 rounded" />
          <div className="bg-muted-foreground/8 h-6 w-24 rounded" />
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <div className="bg-muted-foreground/6 h-6 w-20 rounded" />
          <div className="bg-muted-foreground/6 h-6 w-16 rounded" />
        </div>
      </CardContent>

      <div className="border-border my-2 border-t" />

      <CardFooter className="flex flex-col space-y-4 p-0 py-2">
        <div className="flex w-full items-center justify-between gap-2">
          <div className="bg-muted-foreground/10 h-9 w-28 rounded" />
          <div className="bg-muted-foreground/10 h-9 w-36 rounded" />
        </div>
      </CardFooter>
    </Card>
  );
}
