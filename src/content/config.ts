import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional()
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional()
  }),
});

const talks = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    event: z.string().optional(),
    draft: z.boolean().optional(),
    eventURL: z.string().optional(),
    slidesURL: z.string().optional(),
    videoURL: z.string().optional(),
  }),
});

const research = defineCollection({
  type: "content",
  schema: z.object({
    type: z.string(),
    key: z.string(),
    title: z.string(),
    author: z.string(),
    year: z.coerce.number().int().nonnegative(),
    month: z.string().optional(),
    journal: z.string().optional(),
    booktitle: z.string().optional(),
    publisher: z.string().optional(),
    volume: z.string().optional(),
    number: z.string().optional(),
    pages: z.string().optional(),
    doi: z.string().optional(),
    url: z.string().optional(),
    abstract: z.string().optional(),
    note: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, work, projects, talks, research };
