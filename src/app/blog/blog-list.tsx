import Link from "next/link";
import { Post } from "./utils";

export function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="space-y-8 py-10 max-w-xl mx-auto">
      {posts.map((post) => (
        <Link className="block" key={post.slug} href={`/blog/${post.slug}`}>
          <div className="text-xl tracking-wide font-semibold">{post.title}</div>
        </Link>
      ))}
    </div>
  );
}
