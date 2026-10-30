import type { Metadata } from 'next';
import { BlogLayout } from '../../features/blog';

export const metadata: Metadata = {
  title: 'Blog de ingeniería — Nicolas Wong',
  description: 'Conceptos y decisiones de software explicados con ejemplos pequeños.',
};

export default function BlogPage() {
  return <BlogLayout />;
}
