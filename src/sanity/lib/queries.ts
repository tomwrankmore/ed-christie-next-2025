import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`*[_type == "post"]|order(orderRank){
  _id,
  title,
  slug,
  mainImage,
  categories[]->{
    _id,
    title,
    description,
  },
}`);

export const SINGLE_POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  mainImage,
  vimeoVid,
  youTubeVid,
  staticImage,
  body,
  categories[]->{
    _id,
    title
  },
}`);

export const CATEGORIES_QUERY = defineQuery(`*[_type == "category"]{
  _id,
  title,
}`);

export const SETTINGS_QUERY = defineQuery(`*[_type == "settings"][0]{
  title, 
  description,
  keywords,
  navigationLogo
}`);

export const CONTACT_QUERY = defineQuery(`*[_type == "contactPage"][0]{
  title, 
  body
}`);
