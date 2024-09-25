import games from "@/data/pj.json";

export default function Description({ slug }: { slug: string }) {
  const game = games.find((game) => game.slug === slug);

  return (
    <div className="py-5">
      <h1 className="text-base">{game ? game.description : "Not found"}</h1>
    </div>
  );
}
