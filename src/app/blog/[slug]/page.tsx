import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-sm text-gray-600">
        ← 一覧へ戻る
      </Link>

      <h1 className="text-4xl font-bold mt-4 mb-1 tracking-wide">
        {post.title}
      </h1>
      <time className="text-gray-600 text-sm">{post.date}</time>
      <div className="flex flex-wrap gap-2 mt-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-gray-600 text-xs bg-gray-100 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="prose prose-lg mt-6">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
