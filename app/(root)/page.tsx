import SearchForm from "@/components/SearchForm";
import Card from "@/components/Card";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Nguyen Phan" },
      description: "This is a description",
      image:
        "https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=1200",
      category: "Pets",
      title: "Tuxedo Cat",
    },
  ];
  return (
    <>
      <section className="yellow_container">
        <h1 className="heading">Share your Ideas</h1>

        <p className="sub-heading !max-w-3xl">
          Vote on Pitches, and Collaborate with others to bring your ideas to
          life.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "No search query"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: CardType, index: number) => (
              <Card key={post._id ?? index} post={post} />
            ))
          ) : (
            <li key="no-results">
              <p className="no-results">No posts found</p>
            </li>
          )}
        </ul>
      </section>
    </>
  );
}
