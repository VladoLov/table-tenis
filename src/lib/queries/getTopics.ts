import { db } from "@/db"; // Database setup
import { blogDB } from "@/db/schema"; // Schema
import { eq } from "drizzle-orm";

export async function getTournament() {
  try {
    const trainingOptions = await db
      .select()
      .from(blogDB)
      .where(eq(blogDB.topic, "Takmičenje")); // Adjust topic as needed

    return trainingOptions;
  } catch (error) {
    console.error("Error fetching trainings:", error);
    throw new Error("Failed to fetch training options");
  }
}

export async function getEqupiment() {
  try {
    const trainingOptions = await db
      .select()
      .from(blogDB)
      .where(eq(blogDB.topic, "Oprema")); // Adjust topic as needed

    return trainingOptions;
  } catch (error) {
    console.error("Error fetching trainings:", error);
    throw new Error("Failed to fetch training options");
  }
}
export async function getOther() {
  try {
    const trainingOptions = await db
      .select()
      .from(blogDB)
      .where(eq(blogDB.topic, "Ostalo")); // Adjust topic as needed

    return trainingOptions;
  } catch (error) {
    console.error("Error fetching trainings:", error);
    throw new Error("Failed to fetch training options");
  }
}
export async function getNews() {
  try {
    const trainingOptions = await db
      .select()
      .from(blogDB)
      .where(eq(blogDB.topic, "Novosti")); // Adjust topic as needed

    return trainingOptions;
  } catch (error) {
    console.error("Error fetching trainings:", error);
    throw new Error("Failed to fetch training options");
  }
}
