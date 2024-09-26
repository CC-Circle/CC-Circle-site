import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="flex w-1/4 items-center justify-around py-5 text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/others">Others</Link>
      </div>
    </>
  );
}
