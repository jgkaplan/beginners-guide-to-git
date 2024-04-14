import { defineCollection, z } from "astro:content";

const puzzle = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    difficulty: z.string(),
    tags: z.array(z.string()),
    previous: z.array(z.string()).optional(),
  }),
});

export const collections = { puzzle };
