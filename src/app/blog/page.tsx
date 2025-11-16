import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/app/blog/utils";
import { Button } from "@/components/ui/button";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border p-2 rounded-xl overflow-hidden space-y-2"
          >
            {post.thumbnail && (
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  width={1000}
                  height={1000}
                  src={post.thumbnail}
                  alt={post.title}
                  className="object-cover max-h-96 w-full"
                />
              </div>
            )}
            <div className="flex-1 p-2">
              <div className="mb-4">
                <time className="text-secondary-foreground text-sm">
                  {post.date}
                </time>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-bold hover:text-primary tracking-wide">
                    {post.title}
                  </h2>
                </Link>
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-secondary-foreground text-xs bg-secondary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 line-clamp-3">
                {post.description}
              </p>
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
