"use client";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const switch_theme = () => {
    switch (theme) {
      case "dark":
        setTheme("light");
        break;
      case "light":
        setTheme("dark");
        break;
      case "system":
        setTheme(systemTheme === "dark" ? "dark" : "light");
    }
  };
  return (
    <Button onClick={switch_theme}>
      <SunIcon className="hidden dark:flex h-4 w-4" />
      <MoonIcon className="flex dark:hidden h-4 w-4 " />
    </Button>
  );
}
