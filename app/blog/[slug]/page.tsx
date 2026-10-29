import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogIDE } from '../../../features/blog';
import { getPublishedBlogEntries, loadBlogArticle } from '../../../features/blog/server';

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedBlogEntries().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await loadBlogArticle(slug);

  return article
    ? { title: `${article.fileName.replace('.md', '')} — Nicolas Wong`, description: article.category }
    : {};
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = await loadBlogArticle(slug);

  if (!article) notFound();

  return <BlogIDE article={article} />;
}
