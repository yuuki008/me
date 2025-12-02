"use server";

import path from "path";
import fs from "fs";
import matter from "gray-matter";

const directory = path.join(process.cwd(), "public/posts");

export interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
}

// MDXファイルからPostオブジェクトを作成する共通関数
function createPostFromMDX(slug: string, filePath: string): Post {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    tags: data.tags,
    content,
  };
}

export async function getAllPosts(tag?: string): Promise<Post[]> {
  const slugs = fs.readdirSync(directory);
  const posts: Post[] = [];

  for (const slug of slugs) {
    const slugPath = path.join(directory, slug);
    const stat = fs.statSync(slugPath);

    const filePath = stat.isDirectory()
      ? path.join(slugPath, "index.mdx")
      : slugPath;

    const post = createPostFromMDX(slug, filePath);
    if (tag && !post.tags.includes(tag)) continue;

    posts.push(post);
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}
