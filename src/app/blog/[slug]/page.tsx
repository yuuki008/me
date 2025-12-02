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
    <section className="max-w-xl mx-auto px-4 py-10">
      <h1 className="font-bold text-3xl text-center tracking-wider">
        {post.title}
      </h1>
      <article className="prose mt-8">
        <CustomMDX source={post.content} slug={post.slug} />
      </article>
    </section>
  );
}
