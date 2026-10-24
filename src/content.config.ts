import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Elements: one entry per project (brief section 3).
 * The home page periodic table is built from this collection.
 */
const elements = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/elements' }),
  schema: z.object({
    symbol: z.string().max(4),
    name: z.string(),
    number: z.number().int().positive(),
    mass: z.string(), // kept as a string so trailing digits survive ("118.71")
    metal: z.enum(['copper', 'tin', 'bronze', 'verdigris']),
    surface: z.string(), // the one-line Surface stratum, shown on hover
    href: z.string().optional(),
    order: z.number().int(), // position in the table
    rev: z.string().length(1),
    updated: z.coerce.date(),
  }),
});

export const collections = { elements };
