import Logo from "@/app/(app)/about/_features/logo";
import Timeline from "@/app/(app)/about/_features/timeline";
import Info from "@/app/(app)/about/_features/info";
import MotionWrapper from "@/components/MotionWrapper";

export default function About() {
  return (
    <MotionWrapper>
      <Logo />
      <div className="flex justify-center py-24">
        愛知工業大学八草キャンパスを拠点として活動している公認サークルです。
        コンテンツや作品をつくることを目的をとして、それぞれが持ち寄ったアイデアや技術、知識などを活用し新しいものを生み出していきます。
      </div>
      <Timeline />
      <Info />
    </MotionWrapper>
  );
}
