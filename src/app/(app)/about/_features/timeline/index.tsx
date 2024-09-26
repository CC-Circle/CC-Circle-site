import { TimelineLayout } from "@/components/timeline/timeline-layout";
import { timelineData } from "../timeline/data";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4 p-4 py-10 md:px-24">
      <div className="w-fit">
        <TimelineLayout items={timelineData} />
      </div>
    </div>
  );
}
