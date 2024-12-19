import { getAllBlogs } from "@/lib/queries/getAllBlogs";
import Link from "next/link";

export default async function BlogListPage() {
  const blogs = await getAllBlogs();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">All Blogs</h1>
      {blogs.length > 0 ? (
        <ul className="space-y-4">
          {blogs.map((blog) => (
            <li key={blog.id} className="border p-4 rounded-md">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600">{blog.summary}</p>
              <Link
                href={`/blogs/${blog.id}`}
                className="text-blue-600 hover:underline"
              >
                Read More
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
}
