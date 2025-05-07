/* eslint-disable @typescript-eslint/no-explicit-any */
import type { StructureResolver } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const structure: StructureResolver = (S: any, context: any) =>
  S.list()
    .title("Ed Christie Content")
    .items([
      S.listItem().title("Settings").id("settings").child(
        // Instead of rendering a list of documents, we render a single
        // document, specifying the `documentId` manually to ensure
        // that we're editing the single instance of the document
        S.document().schemaType("settings").documentId("settings")
      ),
      orderableDocumentListDeskItem({
        type: "post",
        title: "Projects",
        S,
        context,
      }),

      S.documentTypeListItem("category").title("Categories"),
      S.listItem()
        .title("Contact")
        .id("contact")
        .child(
          S.document().schemaType("contactPage").documentId("contactPage")
        ),
    ]);
