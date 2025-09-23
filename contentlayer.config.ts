import { defineDocumentType, makeSource } from "contentlayer/source-files";

// Example Blog schema
export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string" },
  },
}));

// Source definition
export default makeSource({
  contentDirPath: "content", // this folder is already in your project
  documentTypes: [Blog],
});
