/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import games from "@/data/pj.json";

export default function Page({ slug }: { slug: string }) {
  const game = games.find((game) => game.slug === slug);

  if (!game) {
    return <div>Not found</div>;
  }

  return (
    <>
      {game.topic && (
        <div className="flex">
          {game.topic.map((topic, index) => (
            <div key={index} className="mx-1 border">
              {topic}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
