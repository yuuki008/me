import { notFound } from "next/navigation";
import { CustomMDX } from "./mdx";
import { getPostBySlug } from "../utils";

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="max-w-xl mx-auto px-4 py-8">
      <h1 className="font-bold text-3xl text-center tracking-wider">
        {post.title}
      </h1>
      <time className="text-secondary-foreground flex justify-center text-neutral-500 dark:text-neutral-400 mt-2">
        {post.date}
      </time>
      <div className="flex justify-end mb-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-secondary-foreground text-xs bg-secondary px-2 py-1 rounded-full"
          >
            # {tag}
          </span>
        ))}
      </div>
      <article className="prose">
        <CustomMDX source={post.content} slug={post.slug} />
      </article>
    </section>
  );
}
