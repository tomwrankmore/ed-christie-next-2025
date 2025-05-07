"use client";
import Masonry from "react-masonry-css";
import Image from "next/image";
import { builder } from "@/src/sanity/lib/image";
import { POSTS_QUERYResult, CATEGORIES_QUERYResult } from "@/src/sanity/types";
import Link from "next/link";
import { useState } from "react";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const AllPostsGrid = ({
  posts,
  categories,
}: {
  posts: POSTS_QUERYResult;
  categories: CATEGORIES_QUERYResult;
}) => {
  const [currentPosts, setCurrentPosts] = useState([...posts]);
  const handleCatergoryClick = (category: string) => {
    const filteredPosts = posts.filter((post) => {
      return post.categories?.some((cat) => cat.title === category);
    });
    setCurrentPosts(filteredPosts);
  };
  const handleAllPostsClick = () => {
    setCurrentPosts(posts);
  };
  return (
    <div>
      {/* <h2 className="text-3xl font-bold text-center mb-8">All Posts</h2> */}
      <ul className="flex justify-center gap-4 mb-8">
        <li
          className="text-center hover:cursor-pointer"
          onClick={handleAllPostsClick}
        >
          All
        </li>
        {categories?.map((category, idx: number) => {
          return (
            <li
              key={idx}
              className="text-center hover:cursor-pointer"
              onClick={() =>
                category.title && handleCatergoryClick(category.title)
              }
            >
              {category.title}
            </li>
          );
        })}
      </ul>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {currentPosts?.map((item, idx: number) => {
          return (
            item.mainImage?.asset && (
              <Link href={`/all-posts/${item?.slug?.current}`} key={idx}>
                <Image
                  key={idx}
                  src={builder
                    .image(item.mainImage.asset!)
                    .width(800)
                    .quality(75)
                    .url()}
                  alt="Content Gallery Image - add alt text"
                  className="masonry-image-item cursor-pointer"
                  width={800}
                  height={600}
                  unoptimized
                  // onClick={() => {
                  //   setIndex(idx);
                  //   setIsVimeo(!!item.vimeoLinkNumber ? true : false);
                  //   setOpen(true);
                  // }}
                />
              </Link>
            )
          );
        })}
      </Masonry>
    </div>
  );
};

export default AllPostsGrid;
