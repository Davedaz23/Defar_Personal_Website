import Link from "next/link";
import fs from "fs";
import path from "path";

interface BlogPost {
  slug: string;
  title: string;
}

export default function Blog() {
  const posts: BlogPost[] = fs
    .readdirSync(path.join(process.cwd(), "app/blog"))
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(".mdx", ""),
      title: file.replace(/-/g, " "), // Convert slug format to readable title
    }));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <ul className="mt-4">
        {posts.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`} className="text-blue-500">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
