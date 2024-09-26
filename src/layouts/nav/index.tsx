import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="flex py-5 text-xl">
        <Link className="pl-4" href="/">
          Home
        </Link>
        <Link className="px-4" href="/about">
          About
        </Link>
        <Link href="/others">Others</Link>
      </div>
    </>
  );
}
