import Container from "../global/components/container";
import SectionHeading from "../global/components/section-heading";
import FirstCard from "./bento-cards/first";
import SecondCard from "./bento-cards/second";
import ThirdCard from "./bento-cards/third";

export default function WhatIs() {
  return (
    <Container className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <SectionHeading
        badge="Know Platform"
        heading="What is Draft ?"
        description="Community-driven platform for discovering, sharing, and collaborating on software project ideas"
      />
      <div className="grid grid-cols-1 md:grid-cols-3">
        <FirstCard />
        <SecondCard />
        <ThirdCard />
      </div>
    </Container>
  );
}
