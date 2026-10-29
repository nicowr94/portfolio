export type PublishedBlogEntry = {
  category: string;
  fileName: string;
  markdownFile: string;
  readTime: string;
  slug: string;
  status: 'published';
};

export type DraftBlogEntry = {
  fileName: string;
  status: 'draft';
};

export type BlogMenuEntry = PublishedBlogEntry | DraftBlogEntry;

export type BlogMenuFolder = {
  name: string;
  files: BlogMenuEntry[];
};

export const blogMenu: BlogMenuFolder[] = [
  {
    name: 'Arquitectura',
    files: [
      {
        category: 'ARQUITECTURA DE SOFTWARE',
        fileName: 'clean-architecture.md',
        markdownFile: 'clean-architecture.md',
        readTime: 'LECTURA · 6 MIN',
        slug: 'clean-architecture',
        status: 'published',
      },
      { fileName: 'arquitectura-hexagonal.md', status: 'draft' },
    ],
  },
  {
    name: 'Conceptos',
    files: [{ fileName: 'idempotencia.md', status: 'draft' }],
  },
  {
    name: 'Casos',
    files: [{ fileName: 'muchos-usuarios.md', status: 'draft' }],
  },
  {
    name: 'Preguntas',
    files: [
      { fileName: 'evitar-condiciones-de-carrera.md', status: 'draft' },
      { fileName: 'cuando-usar-colas.md', status: 'draft' },
    ],
  },
];

export function getPublishedBlogEntries() {
  return blogMenu.flatMap((folder) => folder.files)
    .filter((entry): entry is PublishedBlogEntry => entry.status === 'published');
}
