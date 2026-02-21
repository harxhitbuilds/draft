"use client";

import {
  AlertTriangle,
  CheckCircle2,
  Info,
  Loader2,
  XCircle,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      position="bottom-right"
      duration={3500}
      className="toaster group"
      icons={{
        success: <CheckCircle2 className="h-4 w-4 text-white" />,
        info: <Info className="h-4 w-4 text-blue-500" />,
        warning: <AlertTriangle className="h-4 w-4 text-yellow-500" />,
        error: <XCircle className="h-4 w-4 text-red-500" />,
        loading: <Loader2 className="h-4 w-4 animate-spin text-zinc-500" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            "group toast rounded-md border border-white/10 bg-[#0a0a0a] text-white shadow-2xl shadow-black/50 p-4",
          title: "text-[13px] font-bold tracking-tight italic",
          description: "text-[11px] font-mono text-zinc-500 tracking-tight",
          actionButton:
            "bg-white text-black hover:bg-zinc-200 font-bold rounded-sm text-[10px] px-3",
          cancelButton:
            "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 rounded-sm text-[10px] px-3",
        },
      }}
      style={
        {
          "--border-radius": "4px",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
