import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/app/blog/utils";

type Params = {
  tag: string;
};

export default async function BlogPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { tag } = await params;
  const posts = await getAllPosts(tag);

  return (
    <div className="p-8">
      <div className="flex flex-col sm:flex-row flex-wrap gap-4">
        {posts.map((post) => (
          <Link
            className="block w-[350px]"
            key={post.slug}
            href={`/blog/${post.slug}`}
          >
            <article className="border p-2 rounded-xl overflow-hidden space-y-2 hover:bg-secondary/50 transition-colors">
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
                  <h2 className="text-xl font-bold hover:text-primary tracking-wide">
                    {post.title}
                  </h2>
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
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
