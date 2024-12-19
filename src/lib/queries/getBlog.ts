import { db } from "@/db";

import { blogDB } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getBlog(id: number) {
  const blogId = await db.select().from(blogDB).where(eq(blogDB.id, id));

  // this will be array, so we add [0] to return the first object
  return blogId[0];
}
