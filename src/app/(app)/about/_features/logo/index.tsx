/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex items-center justify-center py-20">
      <Logo num={400} />
    </div>
  );

  function Logo({ num: num }: Readonly<{ num: number }>) {
    return <Image src="/logo.svg" alt="logo" width={num} height={num} />;
  }
}
