import Image from "next/image";
import Link from "next/link";

import games from "@/data/pj.json";

export default function Cards() {
  const defaultImage = "/pj/crop/logo.png";

  return (
    <div className="grid grid-cols-2 gap-36 md:grid-cols-3">
      {games.map((game, index) => (
        <div className="flex items-center justify-center">
          <Link href={`/${game.slug}`} key={index}>
            <Image
              src={game.crop || defaultImage}
              alt={game.title}
              width={600}
              height={600}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
