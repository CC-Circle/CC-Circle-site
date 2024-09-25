import Title from "./_features/title";
import Topic from "./_features/topic";
export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="py-10">
      <Title slug={params.slug} />
      <Topic slug={params.slug} />
    </div>
  );
}
