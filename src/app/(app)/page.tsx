import Cards from "@/app/(app)/_features/cards";
import MotionWrapper from "@/components/MotionWrapper";

export default function Page() {
  return (
    <div className="py-10">
      <MotionWrapper>
        <Cards />
      </MotionWrapper>
    </div>
  );
}
