import { getAllBlogs } from "@/lib/queries/getAllBlogs";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 3600; // Revalidate this page every hour

async function getBlogsAndTopics() {
  try {
    const allBlogs = await getAllBlogs();
    const topics = [...new Set(allBlogs.map((blog) => blog.topic))];
    const blogsByTopic = topics.reduce((acc, topic) => {
      acc[topic] = allBlogs.filter(
        (blog) => blog.topic.toLowerCase() === topic.toLowerCase()
      );
      return acc;
    }, {} as Record<string, typeof allBlogs>);
    return { topics, blogsByTopic, allBlogs };
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return { topics: [], blogsByTopic: {}, allBlogs: [] };
  }
}

export default async function BlogListPage() {
  const { topics, blogsByTopic, allBlogs } = await getBlogsAndTopics();
  /*   const blogs = await getAllBlogs();

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
  ); */

  //const topics = await getTopics();

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Blog Topics</h1>
        {topics.length === 0 ? (
          <p className="text-center text-gray-600">No topics found.</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics
              .slice()
              .sort((a, b) => a.localeCompare(b))
              .map((topic) => (
                <li
                  key={topic}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <Link href={`#${topic.toLowerCase()}`} className="block p-6">
                    <h2 className="text-xl font-semibold mb-2">{topic}</h2>
                    <p className="text-gray-600">
                      Explore articles about {topic}
                    </p>
                  </Link>
                </li>
              ))}
          </ul>
        )}
      </div>

      {topics.map((topic, index) => {
        const topicBlogs = blogsByTopic[topic];
        if (topicBlogs.length === 0) return null;

        return (
          <div
            key={topic}
            id={topic.toLowerCase()}
            className={`container mx-auto px-4 py-8 border-t-slate-900 ${
              index % 2 === 0 ? "bg-slate-50" : "bg-gray-200"
            }`}
          >
            <div className="border-b-3 py-4 after:border-b-3 after:border-red-700">
              <h1 className="text-5xl font-bold mb-12 text-center">{topic}</h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <article className="mb-12">
                    <Link
                      href={`/blogs/${topicBlogs[0].id}`}
                      className="bg-black text-white px-6 py-2 w-full  hover:bg-gray-800 transition-colors inline-block"
                    >
                      <Image
                        src={
                          topicBlogs[0].coverImageUrl ||
                          "/placeholder.svg?height=600&width=800"
                        }
                        alt={topicBlogs[0].title}
                        width={800}
                        height={600}
                        className="w-full h-96 object-top rounded-lg shadow-lg mb-4"
                      />
                      <h2 className="text-3xl font-bold mb-2">
                        {topicBlogs[0].title}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {topicBlogs[0].summary}
                      </p>
                    </Link>
                  </article>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {topicBlogs.slice(1, 3).map((blog) => (
                      <article
                        key={blog.id}
                        className="hover:scale-105 duration-300"
                      >
                        <Link
                          href={`/blogs/${blog.id}`}
                          className="text-blue-500 "
                        >
                          <Image
                            src={
                              blog.coverImageUrl ||
                              "/placeholder.svg?height=300&width=400"
                            }
                            alt={blog.title}
                            width={300}
                            height={200}
                            className="w-full h-48  object-top rounded-lg shadow-md mb-4"
                          />
                          <h3 className="text-xl font-semibold mb-2 ">
                            {blog.title}
                          </h3>
                          <p className="text-gray-600 mb-4">{blog.summary}</p>
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6 pb-2 border-b">
                    More {topic} Articles
                  </h2>
                  {topicBlogs.slice(3).map((blog) => (
                    <article
                      key={blog.id}
                      className="mb-6 hover:scale-[1.02] duration-300 shadow-sm hover:shadow-md border-b"
                    >
                      <Link href={`/blogs/${blog.id}`}>
                        <div className="flex flex-row gap-2">
                          <div>
                            <Image
                              src={
                                blog.coverImageUrl ||
                                "/placeholder.svg?height=300&width=400"
                              }
                              alt={blog.title}
                              width={100}
                              height={100}
                              className="rounded-sm "
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              {blog.title}
                            </h3>
                            <p className="text-gray-600 mb-2">{blog.summary}</p>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
