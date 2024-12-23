import { db } from "@/db";
import { blogDB } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function getAllBlogs() {
  return db.select().from(blogDB).orderBy(desc(blogDB.createdAt));
}
