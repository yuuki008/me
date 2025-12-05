import { Post } from "./utils";
import { CustomMDX } from "./[slug]/mdx";

export function BlogList({ posts }: { posts: Post[] }) {
  return (
    <div className="divide-y max-w-lg mx-auto">
      {posts.map((post) => (
        <div className="py-16" key={post.slug}>
          <div className="text-xl tracking-wide font-bold line-clamp-1">{post.title}</div>
          <time className="text-gray-500 text-sm pt-2">{post.date}</time>

          <article className="prose mt-4">
            <CustomMDX source={post.content} slug={post.slug} />
          </article>
        </div>
      ))}
    </div>
  );
}
