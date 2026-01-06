import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
          Ready to collaborate?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join thousands of developers building the next generation of software.
        </p>
        <Link href="/auth">
          <Button size="lg" className="px-8">
            Get Started Now
          </Button>
        </Link>
      </div>
    </section>
  );
}
