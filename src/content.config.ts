import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Web app', 'AI project']),
    tags: z.array(z.string()),
    year: z.number(),
    order: z.number().default(99),
    status: z
      .enum(['In progress', 'Live', 'Source available', 'Archived'])
      .default('In progress'),
    visual: z.enum(['web', 'ai', 'code']).default('web'),
    repository: z.url().optional(),
    demo: z.url().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
