import { BackButton } from "@/components/BackButton";
import { getBlog } from "@/lib/queries/getBlog";
import BlogForm from "./BlogForm";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { blogId } = await searchParams;
  if (!blogId) return { title: "New Blog" };

  return { title: `Edit Blog #${blogId}` };
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  console.log(searchParams);
  try {
    const { blogId } = await searchParams;
    // edit cusomer form
    if (blogId) {
      const blog = await getBlog(parseInt(blogId));

      if (!blog) {
        return (
          <>
            <h2 className="text-2xl mb-2">Blog ID #{blogId} not found</h2>
            <BackButton title="Go Back" variant="default" />
          </>
        );
      }
      console.log(blog);
      console.log(blogId);

      // put blog form component
      return <BlogForm blog={blog} />;
    } else {
      // new blog id component
      return <BlogForm />;
    }
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
  }
}
