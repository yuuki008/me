"use server";

import path from "path";
import fs from "fs";
import matter from "gray-matter";

const directory = path.join(process.cwd(), "public/posts");

export interface Post {
  slug: string;
  title: string;
  thumbnail?: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
}

// サムネイル画像のパスを処理する共通関数
function processThumbnailPath(thumbnailPath: string, slug: string): string {
  if (
    !thumbnailPath ||
    thumbnailPath.startsWith("http") ||
    thumbnailPath.startsWith("/")
  ) {
    return thumbnailPath;
  }
  // 相対パスの場合、投稿フォルダ内の画像として処理
  return `/posts/${slug}/${thumbnailPath.replace("./", "")}`;
}

// MDXファイルからPostオブジェクトを作成する共通関数
function createPostFromMDX(slug: string, filePath: string): Post {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    thumbnail: processThumbnailPath(data.thumbnail, slug),
    date: data.date,
    tags: data.tags,
    description: data.description,
    content,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const items = fs.readdirSync(directory);
  const posts: Post[] = [];

  for (const item of items) {
    const itemPath = path.join(directory, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      // ディレクトリ内のindex.mdxファイルを処理
      const indexPath = path.join(itemPath, "index.mdx");
      if (fs.existsSync(indexPath)) {
        posts.push(createPostFromMDX(item, indexPath));
      }
    } else if (stat.isFile() && item.endsWith(".mdx")) {
      // 単体のMDXファイルを処理
      const slug = item.replace(/\.mdx$/, "");
      posts.push(createPostFromMDX(slug, itemPath));
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
}
