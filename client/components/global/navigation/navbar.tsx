"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { navConfig } from "@/config/navbar";

import Logo from "../assets/logo";

export default function Navbar() {
  const { data: session, status } = useSession();
  return (
    <div className="border-border sticky top-0 z-20 border-b shadow-lg backdrop-blur-2xl">
      <nav className="sticky top-0 mx-auto flex h-18 max-w-400 items-center justify-between px-6 md:px-16">
        <div className="flex items-center justify-center gap-16">
          <Logo />

          <div className="hidden items-center gap-12 text-xs md:flex">
            {navConfig.links.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-shadow-md"
              >
                {item.title}
                {item?.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex min-h-8 min-w-24 items-center justify-center gap-4 rounded-xs bg-white text-black shadow-inner shadow-zinc-700">
          {status === "loading" ? (
            <Spinner />
          ) : status === "unauthenticated" ? (
            <Link href="/auth">
              <Button className="cursor-pointer bg-transparent hover:bg-transparent">
                Get Started
              </Button>
            </Link>
          ) : (
            <Link href="/home">
              <Button className="cursor-pointer bg-transparent hover:bg-transparent">
                Home
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
