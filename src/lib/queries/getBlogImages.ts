import { db } from "@/db";
import { blogDB } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function getLatestBlogImages() {
  const blogs = await db
    .select({
      id: blogDB.id,
      src: blogDB.coverImageUrl,
      alt: blogDB.title,
    })
    .from(blogDB)
    .orderBy(desc(blogDB.createdAt))
    .limit(12);

  return blogs;
}
