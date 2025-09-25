// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  // your MDX are under content/blog/...
  filePathPattern: `blog/**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: false },
    // <-- Add this to match your MDX front-matter
    tags: { type: "list", of: { type: "string" }, required: false },
  },
  computedFields: {
    // e.g. "clarity-currency"
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx?$/, ""),
    },
    // e.g. "/blog/clarity-currency"
    url: {
      type: "string",
      resolve: (doc) =>
        `/blog/${doc._raw.flattenedPath.replace(/^blog\//, "")}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
});
