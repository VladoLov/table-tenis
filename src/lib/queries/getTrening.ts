import { db } from "@/db"; // Database setup
import { blogDB } from "@/db/schema"; // Schema
import { eq } from "drizzle-orm";

export default async function getTrening() {
  try {
    const trainingOptions = await db
      .select()
      .from(blogDB)
      .where(eq(blogDB.topic, "Trening")); // Adjust topic as needed

    return trainingOptions;
  } catch (error) {
    console.error("Error fetching trainings:", error);
    throw new Error("Failed to fetch training options");
  }
}
