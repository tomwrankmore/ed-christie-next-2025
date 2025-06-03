import AllPostsGrid from "../components/AllPostsGrid";
import { sanityFetch } from "@/src/sanity/lib/live";
import { POSTS_QUERY, CATEGORIES_QUERY } from "@/src/sanity/lib/queries";

const AllPosts = async () => {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });
  const { data: categories } = await sanityFetch({ query: CATEGORIES_QUERY });
  return (
    <div>
      <AllPostsGrid posts={posts} categories={categories} />
    </div>
  );
};

export default AllPosts;
