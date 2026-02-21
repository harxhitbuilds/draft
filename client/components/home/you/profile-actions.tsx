"use client";
import { Loader2, Settings2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ProfileActions({
  isDialogOpen,
  setIsDialogOpen,
  register,
  handleSubmit,
  errors,
  isSubmitting,
  onProfileUpdate,
}: any) {
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-7 cursor-pointer rounded-sm border border-white/10 px-2 text-[10px] tracking-tighter text-zinc-500 uppercase hover:bg-white/5 hover:text-white"
        >
          <Settings2 className="mr-1.5 h-3 w-3" /> Edit Socials
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm border-white/10 bg-[#0f0f0f] text-white">
        <DialogHeader className="space-y-1">
          <DialogTitle className="text-xl font-bold tracking-tighter italic">
            Update Parameters
          </DialogTitle>
          <DialogDescription className="font-mono text-xs text-zinc-500">
            Configure connection endpoints.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onProfileUpdate)}
          className="space-y-5 py-4"
        >
          {["github", "linkedIn", "x"].map((field) => (
            <div key={field} className="space-y-1.5">
              <Label
                htmlFor={field}
                className="text-[10px] font-bold tracking-widest text-zinc-600 uppercase"
              >
                {field}_URL
              </Label>
              <Input
                id={field}
                className="h-10 rounded-md border-white/10 bg-white/5 text-sm text-zinc-300 focus:border-white/30 focus:ring-0"
                placeholder={`https://${field}.com/...`}
                {...register(field)}
              />
            </div>
          ))}
          <DialogFooter>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-white font-bold text-black hover:bg-zinc-200"
            >
              {isSubmitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Save Configuration"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
