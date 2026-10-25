import { ArrowUpRight } from 'lucide-react';

export function SiteHeader() {
  return <header className="topbar shell"><a className="brand" href="#home"><span className="brand-mark">NW</span><span>nicolaswong<span className="brand-muted">.dev</span></span></a><nav aria-label="Main navigation"><a href="#work">Proyectos</a><a href="#about">Experiencia</a><a href="#stack">Stack</a></nav><a className="nav-contact" href="#contact">Hablemos <ArrowUpRight size={14}/></a></header>;
}
