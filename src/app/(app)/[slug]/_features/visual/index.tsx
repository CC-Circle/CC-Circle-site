import Image from "next/image";

import games from "@/data/pj.json";

export default function Visual({ slug }: { slug: string }) {
  const game = games.find((game) => game.slug === slug);

  return (
    <div className="flex items-center justify-center">
      <Image
        src={game ? game.image : "Not found"}
        alt={game ? game.slug : "Image not found"}
        width={900}
        height={900}
      />
    </div>
  );
}
