import { ArrowDownRight } from 'lucide-react';

export function HeroSection() {
  return <section className="hero shell" id="home"><div className="hero-copy"><div className="eyebrow"><span className="status-dot"/> DISPONIBLE · LIMA / REMOTO INTERNACIONAL</div><h1>Construyo software<br/><em>que mueve el negocio.</em></h1><p className="hero-lede">Soy Nicolás Wong, Senior Full Stack Developer. Diseño y desarrollo productos web con React, Node.js y TypeScript, desde la interfaz hasta los servicios que la hacen funcionar.</p><div className="hero-actions"><a className="button-primary" href="#work">Ver proyectos <ArrowDownRight size={16}/></a></div><div className="hero-foot"><span><span className="tiny-dot"/> Open to opportunities</span><span>Lima, Perú · UTC−5</span></div></div></section>;
}
