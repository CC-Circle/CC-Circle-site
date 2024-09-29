/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <CCC />
      </Link>
      <SNSIcons />
    </div>
  );

  function CCC() {
    return <div className="text-5xl font-bold md:text-7xl">CCC</div>;
  }

  function SNSIcons() {
    return (
      <div>
        <Link href="https://github.com/CC-Circle">
          <FontAwesomeIcon className="size-3 px-2 md:size-8" icon={faGithub} />
        </Link>
        <Link href="https://x.com/CCC_AIT">
          <FontAwesomeIcon className="size-3 md:size-8" icon={faXTwitter} />
        </Link>
      </div>
    );
  }
}
