/* eslint-disable @typescript-eslint/require-await */
import React from "react";

import MotionWrapper from "@/components/MotionWrapper";

import games from "@/data/pj.json";

import Description from "./_features/description";
import Title from "./_features/title";
import Topic from "./_features/topic";
import Visual from "./_features/visual";

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <div className="py-10">
      <MotionWrapper>
        <Title slug={slug} />
        <Topic slug={slug} />
        <Description slug={slug} />
        <Visual slug={slug} />
      </MotionWrapper>
    </div>
  );
}
