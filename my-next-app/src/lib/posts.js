import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDir = path.join(process.cwd(), "src/posts");

export const getAllPosts = () => {
  const fileNames = fs.readdirSync(postDir);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md")) 
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, ""); // get the slug from the filename
      const fullPath = path.join(postDir, fileName); // Get the full path TO the file
      const fileContents = fs.readFileSync(fullPath, "utf8"); // Read file content
      const { data } = matter(fileContents); // Parse the  "frontmatter"

      // Return slug and frontmatter data
      return {
        slug,
        ...data,
      };
    });

  // Sort posts by date (descending) - assumes 'date' exists and is valid
  const sortedPosts = allPostsData.sort((a, b) => {
    // Provide default dates far in the past if undefined to avoid crashing Date constructor
    // Note: Accessing potentially undefined 'date' property directly in JS is fine,
    // the check handles it.
    const dateA = a.date ? new Date(a.date) : new Date(0);
    const dateB = b.date ? new Date(b.date) : new Date(0);
    return dateB.getTime() - dateA.getTime();
  });

  return sortedPosts;
};


export function getPostData(slug) {
  const fullPath = path.join(postDir, `${slug}.md`); // Construct full path
  const fileContents = fs.readFileSync(fullPath, "utf8"); // Read file
  const { data, content } = matter(fileContents); // Parse frontmatter and content

  // Return slug, frontmatter, and main content
  return {
    slug,
    ...data,
    content,
  };
}

/**
 * Reads all markdown filenames and returns them as slugs
 * in the format expected by Next.js getStaticPaths.
 * Will crash if the directory is missing/unreadable.
 */
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postDir);

  const paths = fileNames
    .filter((fileName) => fileName.endsWith(".md")) // Only include .md files
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ""), // Extract slug
        },
      };
    });

  return paths;
}
