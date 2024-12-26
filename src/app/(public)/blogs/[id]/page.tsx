import { getBlog } from "@/lib/queries/getBlog";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import BlogContent from "@/components/BlogContent";

type BlogPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blogId = parseInt(id);

  if (isNaN(blogId)) return { title: "Blog Not Found" };

  const blog = await getBlog(blogId);

  if (!blog) {
    return { title: "Blog Not Found" };
  }

  return {
    title: blog.title,
    description: blog.summary || "Read our blog post.",
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = await params;
  const blogId = parseInt(id);

  // Validate the ID
  if (isNaN(blogId)) {
    notFound(); // Display a 404 if ID is invalid
  }

  const blog = await getBlog(blogId);

  // Handle blog not found
  if (!blog) {
    notFound(); // Show 404 page if blog does not exist
  }

  return (
    <div className="max-w-screen-xl mx-auto my-12 px-10">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      {blog.coverImageUrl ? (
        <Image
          src={blog.coverImageUrl}
          alt={blog.title}
          width={800}
          height={600}
          className="w-full h-auto rounded-md mb-4"
        />
      ) : null}
      <p className="text-gray-600 px-10">{blog.summary}</p>
      <BlogContent content={blog.content} />
      <p className="mt-4 text-sm text-gray-400">
        Published on:{" "}
        {new Date(blog.createdAt || Date.now()).toLocaleDateString()}
      </p>
    </div>
  );
}
