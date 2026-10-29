import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { getPublishedBlogEntries, type PublishedBlogEntry } from './menu';

export type LoadedBlogArticle = PublishedBlogEntry & { markdown: string };

export async function loadBlogArticle(slug: string): Promise<LoadedBlogArticle | null> {
  const entry = getPublishedBlogEntries().find((item) => item.slug === slug);

  if (!entry) return null;

  const articlePath = join(process.cwd(), 'features', 'blog', 'articles', entry.markdownFile);
  const markdown = await readFile(articlePath, 'utf8');

  return { ...entry, markdown };
}
