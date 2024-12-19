import { pgTable, serial, varchar, timestamp, text } from "drizzle-orm/pg-core";

/* export const blogDB = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).unique().notNull(),
  summary: varchar("summary", { length: 500 }),
  content: text("content").notNull(),
  coverImageUrl: varchar("cover_image_url", { length: 500 }),
  topic: varchar("topic", { length: 50 }).notNull(),
  city: varchar("city", { length: 50 }),
  arena: varchar("arena", { length: 100 }),
  isPublished: boolean("is_published").default(false),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
}); */
export const blogDB = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).unique().notNull(),
  summary: varchar("summary", { length: 500 }),
  content: text("content").notNull(),
  coverImageUrl: varchar("cover_image_url", { length: 500 }),
  topic: varchar("topic", { length: 50 }).notNull(),
  city: varchar("city", { length: 50 }),
  location: varchar("arena", { length: 100 }),
  startAt: varchar("start_at", { length: 50 }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
