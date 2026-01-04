import { navConfig } from "@/config/navbar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/theme/mode-toggle";

export default function Navbar() {
  return (
    <nav className="h-24 flex items-center justify-between px-24 z-10 relative">
      <div className="flex items-center justify-center gap-16">
        <div className="flex items-center gap-2">
          <Image
            src={navConfig.logo.src}
            alt={navConfig.logo.src}
            height={20}
            width={20}
            className="dark:invert"
          />
          <h1 className="pb-1 font-semibold text-lg">{navConfig.product}</h1>
        </div>

        <div className="text-xs flex items-center gap-12">
          {navConfig.links.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="flex items-center gap-2"
            >
              {item.title}
              {item?.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ModeToggle />
        {navConfig.buttons.map((item, index) => (
          <Link key={index} href={item.link}>
            <Button>{item.title}</Button>
          </Link>
        ))}
      </div>
    </nav>
  );
}
