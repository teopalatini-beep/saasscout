import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			toolLogo: z.optional(image()),
			category: z.enum(['review', 'comparison', 'listicle', 'tutorial', 'guide']).default('review'),
			tags: z.array(z.string()).default([]),
			rating: z.number().min(1).max(10).optional(),
			verdict: z.enum(['recommended', 'conditional', 'not-recommended']).optional(),
		}),
});

export const collections = { blog };
