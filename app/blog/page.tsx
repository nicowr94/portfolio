import type { Metadata } from 'next';
import { BlogWorkspace } from '../../components/sections/BlogWorkspace';

export const metadata: Metadata = {
  title: 'Blog de ingeniería — Nicolas Wong',
  description: 'Notas de ingeniería sobre arquitectura, idempotencia y concurrencia.',
};

export default function BlogPage() {
  return <BlogWorkspace />;
}
