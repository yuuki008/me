"use client";

import Link from "next/link";
import { Post } from "./utils";
import Image from "next/image";
import Masonry from "react-masonry-css";

const breakpointColumns = {
  default: 3,
  1024: 2,
  640: 1,
};

export function BlogList({ posts }: { posts: Post[] }) {
  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="flex gap-4"
      columnClassName="space-y-4"
    >
      {posts.map((post) => (
        <Link className="block" key={post.slug} href={`/blog/${post.slug}`}>
          <article className="border p-2 rounded-xl overflow-hidden space-y-2 hover:bg-secondary/50 transition-colors">
            {post.thumbnail && (
              <div className="relative overflow-hidden rounded-lg break-inside-avoid">
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
    </Masonry>
  );
}
