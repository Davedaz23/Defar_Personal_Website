import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getBlogPosts() {
  const blogDir = path.join(process.cwd(), "content/blog"); // Store MDX files here
  const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".mdx"));

  return files.map((file) => {
    const filePath = path.join(blogDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return { slug: file.replace(".mdx", ""), ...data };
  });
}
