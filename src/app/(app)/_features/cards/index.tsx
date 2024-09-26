import Image from "next/image";
import Link from "next/link";

import games from "@/data/pj.json";

export default function Cards() {
  const defaultImage = "/pj/crop/logo.png";

  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
      {games.map((game, index) => (
        <Link href={`/${game.slug}`} key={index}>
          <Image
            src={game.image || defaultImage}
            alt={game.title}
            width={200}
            height={200}
          />
        </Link>
      ))}
    </div>
  );
}
