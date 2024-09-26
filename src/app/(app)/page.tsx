import MotionWrapper from "@/components/MotionWrapper";

import Cards from "@/app/(app)/_features/cards";

export default function Page() {
  return (
    <div className="py-10">
      <MotionWrapper>
        <Cards />
      </MotionWrapper>
    </div>
  );
}
