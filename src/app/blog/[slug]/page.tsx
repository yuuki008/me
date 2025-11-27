import { notFound } from "next/navigation";
import { CustomMDX } from "./mdx";
import { getPostBySlug } from "../utils";
import Image from "next/image";

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
      {post.thumbnail && (
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={1000}
          height={1000}
          className="max-h-96 w-auto mx-auto object-cover mt-6"
        />
      )}

      <article className="prose mt-8">
        <CustomMDX source={post.content} slug={post.slug} />
      </article>
    </section>
  );
}
