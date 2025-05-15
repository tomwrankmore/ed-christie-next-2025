import AllPostsGrid from "./components/AllPostsGrid";
import { client, sanityFetch } from "@/src/sanity/lib/client";
import { POSTS_QUERY, CATEGORIES_QUERY } from "@/src/sanity/lib/queries";
import { CATEGORIES_QUERYResult } from "@/src/sanity/types";

export default async function Home() {
  const posts = await sanityFetch({
    query: POSTS_QUERY,
  });
  const categories =
    await client.fetch<CATEGORIES_QUERYResult>(CATEGORIES_QUERY);
  return (
    <div className="flex items-start justify-items-center min-h-screen px-8 pb-20 pt-32 gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <AllPostsGrid posts={posts} categories={categories} />
      </main>
    </div>
  );
}
