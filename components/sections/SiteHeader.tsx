type SiteHeaderProps = {
  currentPage?: 'portfolio' | 'blog';
};

export function SiteHeader({ currentPage = 'portfolio' }: SiteHeaderProps) {
  const isBlog = currentPage === 'blog';

  return (
    <header className={`topbar shell${isBlog ? ' blog-topbar' : ''}`}>
      <a className="brand" href={isBlog ? '/' : '#home'}>
        <span className="brand-mark">NW</span>
        <span>nicolaswong<span className="brand-muted">.dev</span></span>
      </a>
      <nav aria-label="Navegación principal">
        {isBlog ? (
          <>
            <a href="/">Portafolio</a>
            <a href="/blog" aria-current="page">Blog</a>
          </>
        ) : (
          <>
            <a href="#work">Proyectos</a>
            <a href="#about">Experiencia</a>
            <a href="#stack">Stack</a>
            <a href="/blog">Blog</a>
          </>
        )}
      </nav>
    </header>
  );
}
