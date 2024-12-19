import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { blogDB } from "@/db/schema";
import { z } from "zod";

export const insertBlogSchema = createInsertSchema(blogDB, {
  id: z.union([z.number(), z.literal("(New)")]), // Custom id validation
  title: (schema) => schema.min(1, "Title is required"), // Ensure 'title' exists in blogDB
  content: (schema) => schema.min(1, "Content is required"), // Ensure 'content' exists in blogDB
  topic: (schema) => schema.min(1, "Topic is required"), // Ensure 'topic' exists in blogDB
});

export const selectBlogSchema = createSelectSchema(blogDB);

export type insertBlogSchemaType = typeof insertBlogSchema._type;
export type selectBlogSchemaType = typeof selectBlogSchema._type;
