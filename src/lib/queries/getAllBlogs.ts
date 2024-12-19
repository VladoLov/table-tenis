// lib/queries/getAllBlogs.ts
// Replace with your actual table schema

import { db } from "@/db";
import { blogDB } from "@/db/schema";

export async function getAllBlogs() {
  return db.select().from(blogDB).orderBy(blogDB.createdAt, "desc"); // Adjust sorting as needed
}
