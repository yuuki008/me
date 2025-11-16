import { notFound } from "next/navigation";
import { CustomMDX } from "./mdx";
import { getPostBySlug } from "../utils";

export default async function Blog({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="max-w-xl mx-auto px-4 py-8">
      <h1 className="font-bold text-5xl text-center tracking-tighter">
        {post.title}
      </h1>
      <time className="text-secondary-foreground flex justify-center text-neutral-500 dark:text-neutral-400 mb-8 mt-2">
        {post.date}
      </time>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
