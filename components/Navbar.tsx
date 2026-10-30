'use client';

import type { ReactNode } from 'react';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';

type NavbarProps = {
  children?: ReactNode;
  currentPage: 'portfolio' | 'blog';
};

export function Navbar({ children, currentPage }: NavbarProps) {
  const isBlog = currentPage === 'blog';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const headerClasses = 'absolute left-1/2 top-0 z-50 grid min-h-[84px] w-[min(1200px,calc(100%-64px))] -translate-x-1/2 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-6 after:absolute after:left-1/2 after:top-full after:w-screen after:-translate-x-1/2 after:border-b after:border-border-muted after:content-[\'\'] max-[840px]:left-6 max-[840px]:w-[calc(100%-48px)] max-[840px]:translate-x-0 max-[840px]:flex max-[840px]:min-h-[68px] max-[840px]:gap-3';
  const navigationClasses = `absolute right-0 top-[calc(100%-2px)] z-10 hidden flex-col items-stretch gap-1 rounded-xl border border-border bg-surface p-2 shadow-xl min-[841px]:relative min-[841px]:inset-auto min-[841px]:z-auto min-[841px]:flex min-[841px]:flex-row min-[841px]:items-center min-[841px]:justify-self-center min-[841px]:gap-0.5 min-[841px]:rounded-full min-[841px]:border-border min-[841px]:p-[3px] [&_a]:rounded-full [&_a]:px-[15px] [&_a]:py-[9px] [&_a]:text-small [&_a]:text-secondary [&_a]:no-underline [&_a]:transition-colors [&_a:hover]:bg-surface-strong [&_a:hover]:text-foreground [&_a[aria-current=page]]:bg-surface-strong [&_a[aria-current=page]]:text-ring [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-3 [&_a:focus-visible]:outline-ring max-[840px]:[&_a]:min-h-11 max-[840px]:[&_a]:rounded-lg max-[840px]:[&_a]:px-3 max-[840px]:[&_a]:py-2.5 max-[840px]:[&_a]:text-sm ${isMenuOpen ? 'max-[840px]:flex' : ''}`;

  return (
    <header className={headerClasses}>
      <Link className="flex items-center gap-3 justify-self-start text-base font-normal text-foreground no-underline" href={isBlog ? '/' : '#home'}>
        <span className="grid size-8 place-items-center rounded-full bg-primary text-xs tracking-normal text-primary-foreground">NW</span>
        <span>nicolaswong<span className="text-inherit">.dev</span></span>
      </Link>
      <button
        aria-controls="primary-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? 'Cerrar navegación' : 'Abrir navegación'}
        className="ml-auto hidden size-[42px] flex-none cursor-pointer place-items-center rounded-lg border border-border bg-background text-foreground hover:border-subtle hover:bg-surface-strong focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring max-[840px]:grid"
        onClick={() => setIsMenuOpen((open) => !open)}
        ref={menuButtonRef}
        type="button"
      >
        {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>
      <nav
        aria-label="Navegación principal"
        className={navigationClasses}
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
      {!isBlog ? (
        <Link className="group ml-auto inline-flex items-center gap-[15px] justify-self-end rounded-lg border border-primary bg-primary py-[5px] pr-1.5 pl-4 text-small font-semibold text-primary-foreground no-underline transition hover:-translate-y-px hover:border-primary-hover hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring max-[390px]:gap-2 max-[390px]:pl-[11px] max-[390px]:text-xs" href="#contact">
          Hablemos <ArrowUpRight className="box-content size-[18px] rounded-[5px] bg-primary-foreground p-[7px] text-primary transition-transform group-hover:translate-x-px group-hover:-translate-y-px max-[390px]:size-4" size={15} aria-hidden="true" />
        </Link>
      ) : null}
    </header>
  );
}
