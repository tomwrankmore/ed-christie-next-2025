import AllPostsGrid from "../components/AllPostsGrid";

import { client } from "@/src/sanity/lib/client";
import { POSTS_QUERY, CATEGORIES_QUERY } from "@/src/sanity/lib/queries";
import { POSTS_QUERYResult, CATEGORIES_QUERYResult } from "@/src/sanity/types";

const posts = await client.fetch<POSTS_QUERYResult>(POSTS_QUERY);
const categories = await client.fetch<CATEGORIES_QUERYResult>(CATEGORIES_QUERY);

const AllPosts = () => {
  return (
    <div>
      <AllPostsGrid posts={posts} categories={categories} />
    </div>
  );
};

export default AllPosts;
