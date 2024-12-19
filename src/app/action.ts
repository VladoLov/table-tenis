// app/actions.ts
"use server";
import { insertBlogSchemaType } from "@/zod-schemas/blog";
import { neon } from "@neondatabase/serverless";
import { db } from "@/db";
import { blogDB } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getData() {
  const sql = neon(process.env.DATABASE_URL!);
  const data = await sql`...`;
  return data;
}

export async function saveBlog(data: insertBlogSchemaType) {
  try {
    const { id, ...blogData } = data;

    if (id && id !== 0) {
      // Update existing blog
      await db.update(blogDB).set(blogData).where(eq(blogDB.id, id));
    } else {
      // Insert new blog
      await db.insert(blogDB).values(blogData);
    }

    return { success: true, message: "Blog saved successfully!" };
  } catch (error) {
    console.error("Error saving blog:", error);
    return { success: false, message: "Failed to save the blog." };
  }
}
