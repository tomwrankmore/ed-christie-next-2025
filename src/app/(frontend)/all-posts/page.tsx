import { client } from "@/src/sanity/lib/client";
import { POSTS_QUERY } from "@/src/sanity/lib/queries";
import { POSTS_QUERYResult } from "@/src/sanity/types";
const posts = await client.fetch<POSTS_QUERYResult>(POSTS_QUERY);

const AllPosts = () => {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <a href={`/posts/${post?.slug?.current}`}>{post?.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllPosts;
