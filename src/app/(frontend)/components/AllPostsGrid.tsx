"use client";
import Masonry from "react-masonry-css";
import Image from "next/image";
import { builder } from "@/src/sanity/lib/image";
import { POSTS_QUERYResult, CATEGORIES_QUERYResult } from "@/src/sanity/types";
import Link from "next/link";
import { useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

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

  // const handleCatergoryClick = (category: string) => {
  //   const filteredPosts = posts.filter((post) => {
  //     return post.categories?.some((cat) => cat.title === category);
  //   });
  //   setCurrentPosts(filteredPosts);
  // };

  // const handleAllPostsClick = () => {
  //   setCurrentPosts(posts);
  // };

  const container = useRef<HTMLDivElement>(null);

  const animateFilter = (newPosts: typeof posts) => {
    const items = gsap.utils.toArray(".masonry-post-item") as HTMLElement[];

    // Step 1: Animate OUT
    gsap.to(items, {
      opacity: 0,
      scale: 0.75,
      stagger: 0.01,
      duration: 0.1,
      ease: "power1.in",
      onComplete: () => {
        // Step 2: Change the posts (React state)
        setCurrentPosts(newPosts);

        // Step 3: Wait for DOM update, then animate IN
        requestAnimationFrame(() => {
          const newItems = gsap.utils.toArray(
            ".masonry-post-item"
          ) as HTMLElement[];
          gsap.fromTo(
            newItems,
            { opacity: 0, scale: 0.75 },
            {
              opacity: 1,
              scale: 1,
              stagger: 0.01,
              duration: 0.2,
              ease: "power2.out",
            }
          );
        });
      },
    });
  };

  const handleCatergoryClick = (category: string) => {
    const filteredPosts = posts.filter((post) => {
      return post.categories?.some((cat) => cat.title === category);
    });
    animateFilter(filteredPosts);
  };

  const handleAllPostsClick = () => {
    animateFilter(posts);
  };

  return (
    <div ref={container}>
      <ul className="flex justify-center gap-4 mb-8">
        <li
          className="categoryItem text-center hover:cursor-pointer"
          onClick={handleAllPostsClick}
        >
          All
        </li>
        <li className="categoryItem text-center hover:cursor-pointer">
          <Link href={`/all-posts/showreel`}>
            Showreel
          </Link>
        </li>
        {categories
          ?.filter((category) => category.title !== "Showreel")
          .map((category, idx: number) => {
            return (
              <li
                key={idx}
                className="categoryItem text-center hover:cursor-pointer"
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
              <Link
                href={`/all-posts/${item?.slug?.current}`}
                key={idx}
                className="masonry-post-item"
              >
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
