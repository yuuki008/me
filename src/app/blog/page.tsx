import Link from "next/link";
import { getAllPosts } from "@/app/blog/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "@/components/ui/button";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border p-2 rounded-xl max-h-[500px] overflow-hidden space-y-2"
          >
            <div className="flex-1 p-2">
              <div className="mb-4">
                <time className="text-gray-600 text-sm">{post.date}</time>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-bold hover:text-blue-600 tracking-wide">
                    {post.title}
                  </h2>
                </Link>
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-gray-600 text-xs bg-gray-100 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
