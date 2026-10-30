import { ArrowUpRight } from 'lucide-react';
import { CleanArchitectureEditor } from './CleanArchitectureEditor';

export function HeroSection() {
  return (
    <section className="snap-start snap-always relative isolate flex h-svh min-h-svh items-center overflow-hidden bg-background bg-[radial-gradient(circle,var(--color-texture-dot)_.8px,transparent_.95px)] bg-[size:22px_22px] pt-[120px] pb-20 max-[760px]:h-auto max-[760px]:min-h-svh max-[760px]:pt-[110px] max-[760px]:pb-[34px]" id="home">
      <div className="mx-auto grid w-[min(1200px,calc(100%-64px))] grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] items-center gap-[clamp(32px,4vw,56px)] max-[760px]:w-[min(100%-48px,560px)] max-[760px]:grid-cols-1 max-[760px]:gap-7">
        <div className="w-auto max-w-[620px] text-left max-[760px]:w-full">
          <div className="mt-6 flex items-center gap-[9px] text-xs text-secondary max-[760px]:text-caption">
            <span className="inline-block size-[7px] rounded-full bg-primary" /> DISPONIBLE · LIMA / REMOTO INTERNACIONAL
          </div>
          <h1 className="my-0 mb-[26px] max-w-none text-hero font-medium leading-[1.02] tracking-[-.04em] text-foreground max-[760px]:text-hero-mobile [&_span]:block [&_span]:whitespace-nowrap">
            <span>Nicolas Wong</span>
            <span className="text-tertiary">FullStack Developer</span>
            <span className="text-tertiary">Senior</span>
          </h1>
          <p className="m-0 max-w-[46ch] text-lg leading-[1.65] text-secondary max-[760px]:max-w-[38ch] max-[760px]:text-body-sm">
            Convierto problemas complejos en productos digitales claros, conectando frontend, backend e integraciones.
          </p>
          <a
            className="group mt-[22px] inline-flex items-center gap-[18px] rounded-lg border border-primary bg-primary py-1.5 pr-[7px] pl-5 text-body-sm font-semibold text-primary-foreground no-underline transition hover:-translate-y-px hover:border-primary-hover hover:bg-primary-hover hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring"
            href="https://www.linkedin.com/in/nicolas-wong-ramirez-928a7a210/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Ver perfil de LinkedIn</span>
            <span className="grid size-10 place-items-center rounded-md border border-primary-foreground bg-primary-foreground text-primary transition-transform group-hover:translate-x-px group-hover:-translate-y-px" aria-hidden="true"><ArrowUpRight size={18} /></span>
          </a>
        </div>
        <CleanArchitectureEditor />
      </div>
    </section>
  );
}
