import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { features } from "@/config/land";

import Container from "../global/components/container";
import SectionHeading from "../global/components/section-heading";

export default function Features() {
  return (
    <Container className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div>
        <SectionHeading
          heading="Built for Real Collaboration"
          description="Essential tools designed around how developers actually work together"
          badge="Platform Features"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-muted-foreground/10 rounded-none border bg-transparent shadow-sm backdrop-blur-2xl transition-shadow duration-200 hover:shadow-lg"
            >
              <CardHeader className="flex flex-col items-start gap-3 px-4 pb-2 sm:flex-row sm:items-center sm:px-6">
                <div className="flex h-6 w-6 items-center justify-center rounded-full text-lg sm:h-10 sm:w-10 sm:text-xl">
                  {feature.icon}
                </div>
                <div className="w-full">
                  <span className="bg-primary/10 text-primary mb-1 inline-block rounded px-2 py-1 text-[10px] font-semibold tracking-wider uppercase">
                    {feature.badge}
                  </span>
                  <h3 className="text-foreground text-base leading-tight font-bold sm:text-lg">
                    {feature.title}
                  </h3>
                </div>
              </CardHeader>

              <CardContent className="px-4 pb-6 sm:px-6">
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  {feature.description}
                </p>
                {feature.badgeContent && (
                  <div className="mb-4">
                    <span className="bg-muted text-muted-foreground inline-block rounded px-2 py-1 text-[11px]">
                      {feature.badgeContent}
                    </span>
                  </div>
                )}
                <div className="border-muted-foreground/10 w-full overflow-hidden rounded-lg border">
                  <Image
                    src={feature.img}
                    width={400}
                    height={400}
                    alt={feature.title}
                    className="h-36 w-full object-cover sm:h-44 md:h-80"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}
