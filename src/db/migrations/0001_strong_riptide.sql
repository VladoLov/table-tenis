ALTER TABLE "blogs" ADD COLUMN "start_at" varchar(50);--> statement-breakpoint
ALTER TABLE "blogs" DROP COLUMN "is_published";--> statement-breakpoint
ALTER TABLE "blogs" DROP COLUMN "published_at";