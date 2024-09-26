import MotionWrapper from "@/components/MotionWrapper";

import Description from "./_features/description";
import Title from "./_features/title";
import Topic from "./_features/topic";
import Visual from "./_features/visual";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="py-10">
      <MotionWrapper>
        <Title slug={params.slug} />
        <Topic slug={params.slug} />
        <Description slug={params.slug} />
        <Visual slug={params.slug} />
      </MotionWrapper>
    </div>
  );
}
