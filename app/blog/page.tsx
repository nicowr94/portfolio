import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogIDE } from '../../features/blog';
import { loadBlogArticle } from '../../features/blog/server';

export const metadata: Metadata = {
  title: 'Blog de ingeniería — Nicolas Wong',
  description: 'Notas de ingeniería sobre arquitectura, idempotencia y concurrencia.',
};

export default async function BlogPage() {
  const article = await loadBlogArticle('clean-architecture');

  if (!article) notFound();

  return <BlogIDE article={article} />;
}
