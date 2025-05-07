import { SINGLE_POST_QUERY } from "@/src/sanity/lib/queries";
import { sanityFetch } from "@/src/sanity/lib/live";
import VimeoPlayer from "../../components/VimeoPlayer";

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  // Fetch post data from Sanity
  const { data: sanityPostData } = await sanityFetch({
    query: SINGLE_POST_QUERY,
    params: { slug },
  });
  if (!sanityPostData) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex items-center justify-start flex-col min-h-screen px-4 pt-[93.5px]">
      <h1 className="text-2xl font-bold mx-auto">{sanityPostData.title}</h1>
      {sanityPostData.vimeoVid && (
        <VimeoPlayer vimeoId={sanityPostData.vimeoVid} />
      )}
    </div>
  );
};

export default PostPage;
