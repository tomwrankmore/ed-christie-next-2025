import AllPostsGrid from "./components/AllPostsGrid";
import { sanityFetch } from "@/src/sanity/lib/live";
import { POSTS_QUERY, CATEGORIES_QUERY } from "@/src/sanity/lib/queries";

export default async function Home() {
  const { data: posts } = await sanityFetch({
    query: POSTS_QUERY,
  });
  const { data: categories } = await sanityFetch({ query: CATEGORIES_QUERY });
  return (
    <div className="flex items-start justify-items-center min-h-screen px-8 pb-20 pt-32 gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <AllPostsGrid posts={posts} categories={categories} />
      </main>
    </div>
  );
}
