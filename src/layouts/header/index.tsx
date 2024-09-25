import Image from "next/image";
export default function Header() {
  return (
    <div>
      <Image src="/logo.svg" alt="logo" width={200} height={200} />
    </div>
  );
}
