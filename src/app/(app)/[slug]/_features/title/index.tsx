import games from "@/data/pj.json";

export default function Title({ slug }: { slug: string }) {
  const game = games.find((game) => game.slug === slug);

  return (
    <h1 className="text-2xl font-bold">{game ? game.title : "Not found"}</h1>
  );
}
