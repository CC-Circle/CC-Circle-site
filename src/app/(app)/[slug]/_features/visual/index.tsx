import Image from "next/image";

import games from "@/data/pj.json";

export default function Visual({ slug }: { slug: string }) {
  const game = games.find((game) => game.slug === slug);
  const defaultImage = "/pj/crop/logo.png";

  return (
    <div className="flex items-center justify-center">
      <Image
        src={game ? game.image : defaultImage}
        alt={game ? game.slug : "0"}
        width={900}
        height={900}
      />
    </div>
  );
}
