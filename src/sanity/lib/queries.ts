import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`*[_type == "post"]{
  _id,
  title,
  slug
}`);

export const SINGLE_POST_QUERY =
  defineQuery(`*[_type == "post" && slug == $slug][0]{
  _id,
  title,
  slug
}`);
