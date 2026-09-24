import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

// Placeholder tables — expand these once the "artists" mode logic is built.
// (savedLists will eventually hold what a user typed into the "artists" mode
// per category, e.g. { category: "music", items: ["Sia, Ado"] }.)

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const savedLists = sqliteTable("saved_lists", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id").notNull().references(() => users.id),
  category: text("category").notNull(), // "videos" | "music" | "films" | "books"
  targetLanguage: text("target_language").notNull(),
  items: text("items", { mode: "json" }).$type<string[]>().notNull(),
});