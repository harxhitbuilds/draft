export default function IdeaViewSkeleton() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-4xl space-y-6 px-4 py-6">
        <div className="bg-muted-foreground/8 relative h-64 w-full animate-pulse overflow-hidden rounded-md" />

        <div className="flex items-center justify-between">
          <div className="flex items-start gap-3">
            <div className="bg-muted-foreground/8 h-10 w-10 animate-pulse rounded-full" />

            <div className="space-y-2 leading-tight">
              <div className="bg-muted-foreground/8 h-4 w-40 animate-pulse rounded" />
              <div className="bg-muted-foreground/6 h-3 w-24 animate-pulse rounded" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-muted-foreground/8 h-9 w-24 animate-pulse rounded" />
          </div>
        </div>

        <div className="border-border space-y-6 border-t pt-4">
          <div>
            <p className="bg-muted-foreground/8 mb-2 h-4 w-28 animate-pulse rounded" />
            <div className="flex flex-wrap gap-2">
              <div className="bg-muted-foreground/6 h-6 w-16 animate-pulse rounded" />
              <div className="bg-muted-foreground/6 h-6 w-20 animate-pulse rounded" />
              <div className="bg-muted-foreground/6 h-6 w-12 animate-pulse rounded" />
            </div>
          </div>

          <div>
            <p className="bg-muted-foreground/8 mb-2 h-4 w-32 animate-pulse rounded" />
            <div className="flex items-center gap-3">
              <div className="bg-muted-foreground/8 h-8 w-8 animate-pulse rounded-full" />
              <div className="bg-muted-foreground/8 h-8 w-8 animate-pulse rounded-full" />
              <div className="bg-muted-foreground/8 h-8 w-8 animate-pulse rounded-full" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-muted-foreground/6 h-4 w-full animate-pulse rounded" />
            <div className="bg-muted-foreground/6 h-4 w-full animate-pulse rounded" />
            <div className="bg-muted-foreground/6 h-4 w-5/6 animate-pulse rounded" />
            <div className="bg-muted-foreground/6 h-4 w-4/6 animate-pulse rounded" />
            <div className="bg-muted-foreground/6 h-4 w-3/6 animate-pulse rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
