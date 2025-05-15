import AllPostsGrid from "./components/AllPostsGrid";
import { client, sanityFetch } from "@/src/sanity/lib/client";
import { POSTS_QUERY, CATEGORIES_QUERY } from "@/src/sanity/lib/queries";
import { CATEGORIES_QUERYResult } from "@/src/sanity/types";

const posts = await sanityFetch({
    query: POSTS_QUERY,
    revalidate: 60,
  })
const categories = await client.fetch<CATEGORIES_QUERYResult>(CATEGORIES_QUERY);

export default function Home() {
  return (
    <div className="flex items-start justify-items-center min-h-screen px-8 pb-20 pt-32 gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <AllPostsGrid posts={posts} categories={categories} />
      </main>
    </div>
  );
}
