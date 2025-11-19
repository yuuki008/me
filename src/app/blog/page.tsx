import { getAllPosts } from "@/app/blog/utils";
import { BlogList } from "./blog-list";

type Params = {
  tag: string;
};

export default async function BlogPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { tag } = await params;
  const posts = await getAllPosts(tag);

  return (
    <div className="sm:p-8 p-4">
      <BlogList posts={posts} />
    </div>
  );
}
