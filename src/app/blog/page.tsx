import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border p-2 rounded-xl max-h-[500px] overflow-hidden space-y-2"
          >
            <div className="flex-1 p-2">
              <div className="mb-2">
                <time className="text-gray-600 text-sm">{post.date}</time>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-bold hover:text-blue-600 tracking-wide">
                    {post.title}
                  </h2>
                </Link>
              </div>
              <MDXRemote source={post.content} />
            </div>

            <Button variant="secondary" className="w-full">
              <Link href={`/blog/${post.slug}`}>詳細を見る</Link>
            </Button>
          </article>
        ))}
      </div>
    </div>
  );
}
