import { SINGLE_POST_QUERY } from "@/src/sanity/lib/queries";
import { sanityFetch } from "@/src/sanity/lib/live";

const PostPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
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
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <iframe
          src={`https://player.vimeo.com/video/${sanityPostData.vimeoVid}?autoplay=0&title=0&byline=0&portrait=0`}
          style={{
            width: "100%",
            height: "100%",
            // maxWidth: slide.width,
            // maxHeight: slide.height,
            border: "none",
          }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default PostPage;
