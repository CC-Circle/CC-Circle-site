/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center justify-center py-10 md:py-20">
      <Logo num={400} />
    </div>
  );

  function Logo({ num: num }: Readonly<{ num: number }>) {
    return <Image src="/logo.svg" alt="logo" width={num} height={num} />;
  }
}
