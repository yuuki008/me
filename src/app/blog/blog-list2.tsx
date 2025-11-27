import Link from "next/link";
import { Post } from "./utils";

export function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-6 py-10 max-w-xl mx-auto">
      {posts.map((post) => (
        <Link className="block" key={post.slug} href={`/blog/${post.slug}`}>
          <div className="text-xl font-semibold">{post.title}</div>
          <div className="text-secondary-foreground text-sm">{post.date}</div>
        </Link>
      ))}
    </div>
  );
}
