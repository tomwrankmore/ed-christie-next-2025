import AllPostsGrid from "./components/AllPostsGrid";
import { client } from "@/src/sanity/lib/client";
import { POSTS_QUERY, CATEGORIES_QUERY } from "@/src/sanity/lib/queries";
import { POSTS_QUERYResult, CATEGORIES_QUERYResult } from "@/src/sanity/types";

const posts = await client.fetch<POSTS_QUERYResult>(POSTS_QUERY);
const categories = await client.fetch<CATEGORIES_QUERYResult>(CATEGORIES_QUERY);
console.log("categories", categories);
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* <h1>Ed Christie</h1> */}

        <AllPostsGrid posts={posts} categories={categories} />
      </main>
    </div>
  );
}
