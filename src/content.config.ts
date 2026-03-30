import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/posts',
	}),
	schema: z.object({
		// 面试文章标题
		title: z.string(),
		// 建议使用 YYYY-MM-DD，方便列表按时间排序
		date: z.string(),
		// 列表页的摘要（可选）
		description: z.string().optional(),
		// 可选标签，后续也可以用来做分类/过滤
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { posts };

