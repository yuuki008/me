"use server";

import path from "path";
import fs from "fs";
import matter from "gray-matter";

const directory = path.join(process.cwd(), "src", "app", "blog", "posts");

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
}

export async function getAllPosts(): Promise<Post[]> {
  const items = fs.readdirSync(directory);
  const posts: Post[] = [];

  for (const item of items) {
    const itemPath = path.join(directory, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      const indexPath = path.join(itemPath, "index.mdx");
      if (fs.existsSync(indexPath)) {
        const fileContents = fs.readFileSync(indexPath, "utf8");
        const { data, content } = matter(fileContents);

        posts.push({
          slug: item, // ディレクトリ名をslugとして使用
          title: data.title,
          date: data.date,
          tags: data.tags,
          description: data.description,
          content,
        });
      }
    } else if (stat.isFile() && item.endsWith(".mdx")) {
      const slug = item.replace(/\.mdx$/, "");
      const fileContents = fs.readFileSync(itemPath, "utf8");
      const { data, content } = matter(fileContents);

      posts.push({
        slug,
        title: data.title,
        date: data.date,
        tags: data.tags,
        description: data.description,
        content,
      });
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}
