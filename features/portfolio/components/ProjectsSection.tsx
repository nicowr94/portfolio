import { ArrowRight } from 'lucide-react';

const supportingProjects = [
  {
    title: 'PDF más estable',
    description: 'Mejora continua del exportable.',
  },
  {
    title: 'Cambios trazables',
    description: 'Schedule Change Log para usuarios.',
  },
  {
    title: 'Baseline corregido',
    description: 'Fallos resueltos · ~10 min a 6 s.',
  },
];

export function ProjectsSection() {
  return (
    <section
      className="snap-start snap-always mx-auto flex min-h-svh w-[min(1200px,calc(100%-64px))] flex-col justify-center py-[clamp(28px,5vh,48px)] max-[760px]:w-[min(100%-48px,560px)] max-[760px]:py-[clamp(16px,3vh,24px)]"
      id="work"
      aria-labelledby="work-heading"
    >
      <h2
        className="m-0 mb-[26px] text-[clamp(1.625rem,4vw,3rem)] font-normal leading-[1.1] tracking-[-.025em] text-foreground max-[760px]:mb-3.5"
        id="work-heading"
      >
        Impacto en Outbuild
      </h2>

      <div className="grid grid-cols-[.92fr_1.08fr] gap-6 max-[760px]:grid-cols-1 max-[760px]:gap-3">
        <div className="flex min-h-[250px] flex-col justify-between bg-primary p-[clamp(22px,3vw,32px)] text-primary-foreground max-[760px]:min-h-[164px] max-[760px]:p-5">
          <div className="text-xs tracking-[.08em] uppercase max-[760px]:text-meta">P6 XML · P6 XER</div>
          <div>
            <div className="text-[clamp(3.75rem,9vw,7rem)] leading-[.9] font-medium tracking-[-.07em] max-[760px]:text-[4.625rem]">
              EE. UU.
            </div>
            <div className="mt-2 text-xl leading-[1.3] max-[760px]:text-lg">Nuevos clientes</div>
          </div>
        </div>

        <div className="flex flex-col justify-center border-l border-border pl-8 max-[760px]:border-t max-[760px]:border-l-0 max-[760px]:pt-4 max-[760px]:pl-0">
          <h3 className="mt-0 mb-2.5 text-xl leading-[1.25] font-medium text-foreground max-[760px]:text-lg">
            Una integración que abrió mercado
          </h3>
          <p className="m-0 max-w-[54ch] text-small leading-[1.5] text-secondary">
            Desarrollé exportables para llevar cronogramas de Outbuild a Oracle Primavera P6.
          </p>
          <figure
            className="mt-5 mb-0"
            aria-label="Los exportables conectan Outbuild con Oracle Primavera P6"
          >
            <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1.4fr)] items-center gap-3 border-b border-border pb-3">
              <div>
                <div className="text-caption tracking-[.1em] text-subtle">ORIGEN</div>
                <span className="text-sm leading-[1.3] text-foreground">Outbuild</span>
              </div>
              <ArrowRight className="text-primary" size={18} aria-hidden="true" />
              <div>
                <div className="text-caption tracking-[.1em] text-subtle">DESTINO</div>
                <span className="text-sm leading-[1.3] text-foreground">Oracle Primavera P6</span>
              </div>
            </div>
            <figcaption className="mt-3 text-caption leading-[1.6] tracking-[.08em] text-secondary">
              CAPACIDAD CLAVE PARA CONSEGUIR CLIENTES EN EE. UU.
            </figcaption>
          </figure>
        </div>
      </div>

      <div
        className="mt-7 grid grid-cols-3 gap-x-7 max-[760px]:mt-4 max-[760px]:grid-cols-1 max-[760px]:gap-y-2.5"
        aria-label="Otros casos de éxito en Outbuild"
      >
        {supportingProjects.map(({ title, description }) => (
          <article className="border-t border-border pt-3.5 max-[760px]:pt-2.5" key={title}>
            <h3 className="mt-0 mb-1.5 text-base leading-[1.35] font-medium text-foreground max-[760px]:mb-1 max-[760px]:text-sm">
              {title}
            </h3>
            <p className="m-0 text-small leading-[1.5] text-secondary">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
