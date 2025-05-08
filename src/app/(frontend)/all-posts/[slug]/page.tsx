import { SINGLE_POST_QUERY } from "@/src/sanity/lib/queries";
import { sanityFetch } from "@/src/sanity/lib/live";
import VimeoPlayer from "../../components/VimeoPlayer";
import Image from "next/image";
import { builder } from "@/src/sanity/lib/image";
// import { TiArrowBack } from "react-icons/ti";
// import Link from "next/link";
import { AnimatedButton } from "../../components/AnimatedButton";
import { PortableText } from "next-sanity";

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
    <div className="flex items-center justify-start flex-col min-h-screen pt-[93.5px] relative">
      <AnimatedButton
        href="/"
        className="absolute bottom-8 right-0 rounded-l-2xl"
      >
        Back to all posts
      </AnimatedButton>
      <div className="p-4 font-black uppercase mb-4 w-full text-center text-3xl bg-[#f2f2f2] text-black">
        {sanityPostData.title}
      </div>
      
      <div className="mb-4 relative w-full">
        {sanityPostData.vimeoVid ? (
          <VimeoPlayer vimeoId={sanityPostData.vimeoVid} />
        ) : (
          <Image
            src={
              sanityPostData.mainImage
                ? builder
                    .image(sanityPostData.mainImage.asset!)
                    .width(800)
                    .quality(75)
                    .url()
                : "https://placehold.co/800x600"
            }
            alt="Content Gallery Image - add alt text"
            width={800}
            height={600}
          />
        )}
      </div>

      {sanityPostData.body && (
        <p>
          <PortableText value={sanityPostData.body} />
        </p>
      )}
    </div>
  );
};

export default PostPage;
