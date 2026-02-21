import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { footerConfig } from "@/config/footer";

import Logo from "../assets/logo";

export default function Footer() {
  return (
    <footer className="w-full border-t py-10 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6">
        <Logo />
        <div className="via-border my-4 h-px w-full bg-linear-to-r from-transparent to-transparent" />
        <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
          <Badge className="text-foreground border-border flex items-center border bg-transparent">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-600" />
            {footerConfig.status}
          </Badge>
          <div className="flex items-center gap-4">
            {footerConfig.socialLinks.map((link, index) => (
              <Link key={index} href={link.href} target="_blank">
                <link.icon />
              </Link>
            ))}
          </div>
        </div>

        <TextHoverEffect text="Draft" />
      </div>
    </footer>
  );
}
