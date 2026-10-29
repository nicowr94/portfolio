'use client';

import type { ReactNode } from 'react';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

type NavbarProps = {
  children?: ReactNode;
  currentPage: 'portfolio' | 'blog';
};

export function Navbar({ children, currentPage }: NavbarProps) {
  const isBlog = currentPage === 'blog';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <header className={`topbar shell${isBlog ? ' blog-topbar' : ''}`}>
      <Link className="brand" href={isBlog ? '/' : '#home'}>
        <span className="brand-mark">NW</span>
        <span>nicolaswong<span className="brand-muted">.dev</span></span>
      </Link>
      <button
        aria-controls="primary-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? 'Cerrar navegación' : 'Abrir navegación'}
        className="nav-toggle"
        onClick={() => setIsMenuOpen((open) => !open)}
        ref={menuButtonRef}
        type="button"
      >
        {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>
      <nav
        aria-label="Navegación principal"
        className={`primary-navigation${isMenuOpen ? ' is-open' : ''}`}
        id="primary-navigation"
        onClick={() => setIsMenuOpen(false)}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setIsMenuOpen(false);
            menuButtonRef.current?.focus();
          }
        }}
      >
        {children}
        {isBlog ? <Link href="/">Portafolio</Link> : <Link href="/blog">Blog</Link>}
      </nav>
    </header>
  );
}
