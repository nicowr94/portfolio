export type PublishedBlogEntry = {
  category: string;
  description: string;
  fileName: string;
  markdownFile: string;
  readTime: string;
  slug: string;
  status: 'published';
  title: string;
};

export type DraftBlogEntry = {
  fileName: string;
  status: 'draft';
  title: string;
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
        description: 'Una red social monolítica con React y Express muestra qué problemas aparecen cuando las responsabilidades quedan mezcladas.',
        fileName: 'red-social-sin-arquitectura.md',
        markdownFile: 'red-social-sin-arquitectura.md',
        readTime: 'LECTURA · 6 MIN',
        slug: 'red-social-sin-arquitectura',
        status: 'published',
        title: 'Una red social sin límites claros',
      },
      {
        category: 'ARQUITECTURA DE SOFTWARE',
        description: 'Separa el flujo del frontend React y las reglas del backend Express usando una estructura posible de Clean Architecture.',
        fileName: 'clean-architecture.md',
        markdownFile: 'clean-architecture.md',
        readTime: 'LECTURA · 7 MIN',
        slug: 'clean-architecture',
        status: 'published',
        title: 'Clean Architecture con una red social',
      },
      { fileName: 'arquitectura-hexagonal.md', status: 'draft', title: 'Arquitectura hexagonal' },
      { fileName: 'arquitectura-por-eventos.md', status: 'draft', title: 'Arquitectura por eventos' },
      { fileName: 'clean-architecture-feature.md', status: 'draft', title: 'Clean Architecture + Feature' },
    ],
  },
  {
    name: 'Conceptos',
    files: [{ fileName: 'idempotencia.md', status: 'draft', title: 'Idempotencia' }],
  },
  {
    name: 'Casos',
    files: [{ fileName: 'muchos-usuarios.md', status: 'draft', title: 'Una aplicación con muchos usuarios' }],
  },
  {
    name: 'Preguntas',
    files: [
      { fileName: 'evitar-condiciones-de-carrera.md', status: 'draft', title: '¿Cómo evitar condiciones de carrera?' },
      { fileName: 'cuando-usar-colas.md', status: 'draft', title: '¿Cuándo usar colas?' },
    ],
  },
];

export function getPublishedBlogEntries() {
  return blogMenu.flatMap((folder) => folder.files)
    .filter((entry): entry is PublishedBlogEntry => entry.status === 'published');
}
