import { type SchemaTypeDefinition } from "sanity";
import settings from "./settings";
import post from "./post";
import category from "./category";
import contactPage from "./contactPage";
import blockContent from "./blockContent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [settings, post, category, blockContent, contactPage],
};
