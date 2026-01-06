import Link from "next/link";
import { footerLinks } from "@/config/footer";

export default function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
        {footerLinks.map((section) => (
          <div key={section.title} className="space-y-3">
            <p className="font-medium">{section.title}</p>
            <ul className="space-y-2 text-muted-foreground">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-xs text-muted-foreground">
        Built for developers who want to collaborate, not compete.
      </div>
    </footer>
  );
}
