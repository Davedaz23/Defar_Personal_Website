import { getBlogPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getBlogPosts(); // ✅ Fetch posts server-side

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Blog Posts</h1>
      {posts.map((post) => (
        <article key={post.slug} className="mt-4 p-4 border rounded-lg">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p className="text-gray-500">{post.date}</p>
          <a href={`/blog/${post.slug}`} className="text-blue-500 underline">
            Read More
          </a>
        </article>
      ))}
    </div>
  );
}
