import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  // 1. Tell Astro where the files are
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  
  // 2. Define the exact fields every project MUST have
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().url().optional(), // "optional" means the build won't fail if this is missing
    tags: z.array(z.string()),
  }),
});

export const collections = { projects };