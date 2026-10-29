import Link from 'next/link';
import { ChevronDown, FileText, FolderOpen } from 'lucide-react';
import { IDE } from '../../../components/IDE/IDE';
import { Navbar } from '../../../components/Navbar';
import type { LoadedBlogArticle } from '../data/articles';
import { blogMenu } from '../data/menu';
import { MarkdownDocument } from './MarkdownDocument';

export function BlogIDE({ article }: { article: LoadedBlogArticle }) {
  return (
    <>
      <Navbar currentPage="blog" />
      <main className="blog-page">
        <section className="blog-workspace shell" aria-label="Notas de ingeniería">
          <IDE
            ariaLabel="IDE de notas de ingeniería"
            className="blog-ide"
            mode="MARKDOWN"
            projectName="engineering-notes"
          >
            <div className="blog-ide-body">
              <aside className="blog-explorer" aria-label="Temas y preguntas">
                <div className="blog-explorer-heading">
                  <span>EXPLORER</span>
                  <span>NOTAS</span>
                </div>
                <p className="blog-explorer-root"><ChevronDown size={13} /> KNOWLEDGE-BASE</p>
                <ul className="blog-topic-tree">
                  {blogMenu.map((folder) => (
                    <li className="blog-topic-folder" key={folder.name}>
                      <div className="blog-folder-name">
                        <ChevronDown size={13} />
                        <FolderOpen size={14} />
                        <span>{folder.name}</span>
                      </div>
                      <ul>
                        {folder.files.map((file) => {
                          const isActive = file.status === 'published' && file.slug === article.slug;

                          return (
                            <li className={`blog-topic-file${isActive ? ' is-active' : ''}`} key={file.fileName}>
                              {file.status === 'published' ? (
                                <Link href={`/blog/${file.slug}`} aria-current={isActive ? 'page' : undefined}>
                                  <FileText size={14} />
                                  <span>{file.fileName}</span>
                                </Link>
                              ) : (
                                <span className="blog-topic-draft" aria-disabled="true">
                                  <FileText size={14} />
                                  <span>{file.fileName}</span>
                                </span>
                              )}
                              {file.status === 'draft' && <span className="blog-file-status">BORRADOR</span>}
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  ))}
                </ul>
                <p className="blog-explorer-note">Ideas en desarrollo</p>
              </aside>

              <article className="blog-document">
                <div className="blog-file-tab"><FileText size={14} /><span>{article.fileName}</span><i aria-hidden="true" /></div>
                <div className="blog-breadcrumb">knowledge-base&nbsp; / &nbsp;{article.category.toLowerCase()}&nbsp; / &nbsp;{article.fileName}</div>
                <div className="blog-article-scroll">
                  <div className="blog-article-meta"><span>{article.category}</span><span>{article.readTime}</span></div>
                  <MarkdownDocument markdown={article.markdown} />
                </div>
              </article>
            </div>
            <div className="blog-statusbar"><span><i /> Markdown</span><span>Español&nbsp; · &nbsp;UTF-8</span></div>
          </IDE>
        </section>
      </main>
    </>
  );
}
