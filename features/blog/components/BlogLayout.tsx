import Link from 'next/link';
import { Navbar } from '../../../components/Navbar';
import type { LoadedBlogArticle } from '../data/articles';
import { blogMenu } from '../data/menu';
import { MarkdownDocument } from './MarkdownDocument';

function BlogTopics({ article }: { article?: LoadedBlogArticle }) {
  return (
    <nav className="max-[680px]:grid max-[680px]:grid-cols-2 max-[680px]:gap-x-[18px] max-[680px]:pt-1 [&_section]:max-[680px]:mt-[18px] [&_a]:max-[680px]:px-[3px] [&_a]:max-[680px]:py-1.5 [&_span]:max-[680px]:px-[3px] [&_span]:max-[680px]:py-1.5" aria-label="Artículos por tema">
      {blogMenu.map((folder) => (
        <section className="mt-6" key={folder.name}>
          <h2 className="mt-0 mb-2 text-xs font-medium text-foreground">{folder.name}</h2>
          <ul className="m-0 grid list-none gap-[3px] p-0">
            {folder.files.map((file) => {
              const isActive = file.status === 'published' && file.slug === article?.slug;

              return (
                <li key={file.fileName}>
                  {file.status === 'published' ? (
                    <Link
                      aria-current={isActive ? 'page' : undefined}
                      className={`block rounded-[5px] px-[9px] py-[7px] text-xs leading-[1.45] text-secondary no-underline transition-colors hover:bg-surface-strong hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${isActive ? 'bg-surface-strong text-ring' : ''}`}
                      href={`/blog/${file.slug}`}
                    >
                      {file.title}
                    </Link>
                  ) : (
                    <span className="block rounded-[5px] px-[9px] py-[7px] text-xs leading-[1.45] text-tertiary">
                      {file.title}<small className="mt-0.5 block text-caption text-subtle">En preparación</small>
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </nav>
  );
}

export function BlogLayout({ article }: { article?: LoadedBlogArticle }) {
  return (
    <>
      <Navbar currentPage="blog" />
      <main className="min-h-svh bg-background px-8 pt-[116px] pb-[88px] text-foreground max-[850px]:px-[26px] max-[680px]:px-[22px] max-[680px]:pt-[94px] max-[680px]:pb-16">
        <div className="mx-auto grid w-full max-w-[1180px] grid-cols-[220px_minmax(0,1fr)] items-start gap-[clamp(48px,8vw,112px)] max-[850px]:grid-cols-[190px_minmax(0,1fr)] max-[850px]:gap-9 max-[680px]:block">
          <aside className="sticky top-[104px] max-h-[calc(100svh-124px)] overflow-y-auto py-5 pb-7 [scrollbar-color:var(--color-border)_var(--color-background)] max-[680px]:hidden" aria-label="Navegación del blog">
            <Link className="inline-block text-body-sm font-medium tracking-[-.01em] text-foreground no-underline hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring" href="/blog">Notas de ingeniería</Link>
            <BlogTopics article={article} />
          </aside>

          <div className="min-w-0 max-w-[800px]">
            <details className="mb-7 hidden border-b border-border-muted pb-3.5 max-[680px]:block">
              <summary className="w-max cursor-pointer text-small text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">Explorar temas</summary>
              <BlogTopics article={article} />
            </details>
            {article ? (
              <article className="min-w-0">
                <div className="mt-3.5 mb-5 flex justify-between gap-3 text-caption tracking-[.08em] text-tertiary max-[680px]:text-overline">
                  <span>{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <MarkdownDocument markdown={article.markdown} />
              </article>
            ) : (
              <section className="min-w-0" aria-labelledby="blog-title">
                <h1 className="mt-3 mb-[18px] max-w-[14ch] text-blog font-normal leading-[1.03] tracking-[-.03em] text-foreground max-[680px]:text-blog-mobile" id="blog-title">Notas de ingeniería</h1>
                <p className="m-0 max-w-[54ch] text-lg leading-[1.65] text-secondary max-[680px]:text-base">
                  Conceptos y decisiones de software, explicados con ejemplos pequeños.
                </p>
                <p className="mt-6 mb-[50px] max-w-[70ch] border-t border-border-muted pt-[18px] text-small leading-[1.7] text-subtle max-[680px]:mb-[38px]">
                  Para comparar distintas arquitecturas, voy a seguir el mismo proyecto ficticio: una red social donde una persona puede publicar una entrada.
                </p>
                {blogMenu.map((folder) => {
                  const published = folder.files.filter((file) => file.status === 'published');
                  if (!published.length) return null;

                  return (
                    <section className="mt-9 border-t border-border-muted pt-[18px]" key={folder.name}>
                      <h2 className="mt-0 mb-2 text-meta font-medium tracking-[.08em] text-subtle uppercase">{folder.name}</h2>
                      <ul className="m-0 list-none p-0">
                        {published.map((entry) => (
                          <li className="[&+li]:border-t [&+li]:border-border-muted" key={entry.slug}>
                            <Link className="relative grid gap-[5px] py-4 pr-11 text-foreground no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring" href={`/blog/${entry.slug}`}>
                              <span className="text-title-sm tracking-[-.015em] max-[390px]:text-body-lg">{entry.title}</span>
                              <small className="max-w-[68ch] text-small leading-[1.6] text-subtle">{entry.description}</small>
                              <span className="text-overline tracking-[.08em] text-tertiary">{entry.readTime}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </section>
                  );
                })}
              </section>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
