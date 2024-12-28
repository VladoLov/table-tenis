import { db } from "@/db";
import { blogDB } from "@/db/schema";
import { ilike, or } from "drizzle-orm";

export async function getBlogSearchResults(searchText: string) {
  const results = await db
    .select()
    .from(blogDB)
    .where(
      or(
        ilike(blogDB.title, `%${searchText}%`),
        ilike(blogDB.summary, `%${searchText}%`),
        ilike(blogDB.city, `%${searchText}%`),
        ilike(blogDB.location, `%${searchText}%`),
        ilike(blogDB.topic, `%${searchText}%`)
      )
    );
  return results;
}
