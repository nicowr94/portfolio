import { CleanArchitectureEditor } from './CleanArchitectureEditor';

export function HeroSection() {
  return (
    <section className="hero hero-portfolio" id="home">
      <div className="hero-portfolio-layout shell">
        <div className="hero-copy">
          <h1>Nicolas Wong</h1>
          <p className="hero-lede">
            Me entusiasma tomar problemas complejos y convertirlos en experiencias digitales que se sienten simples.
          </p>
          <div className="eyebrow hero-availability">
            <span className="status-dot" /> DISPONIBLE · LIMA / REMOTO INTERNACIONAL
          </div>
          <a
            className="hero-linkedin"
            href="https://www.linkedin.com/in/nicolas-wong-ramirez-928a7a210/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="hero-linkedin-mark" aria-hidden="true">in</span>
            Ver perfil de LinkedIn
          </a>
        </div>
        <CleanArchitectureEditor />
      </div>
    </section>
  );
}
