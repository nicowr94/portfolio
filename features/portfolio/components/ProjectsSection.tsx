const impactCases = [
  {
    title: 'Exportables para Oracle Primavera P6',
    description: 'Desarrollé los formatos XML y XER para integrar los cronogramas de Outbuild con Primavera P6.',
    result: 'Nuevos clientes en EE. UU.',
  },
  {
    title: 'Exportación PDF más estable',
    description: 'Mejoré continuamente su estabilidad y confiabilidad para los usuarios.',
    result: 'Más estabilidad',
  },
  {
    title: 'Schedule Change Log',
    description: 'Los usuarios pueden consultar y comparar los cambios de cada cronograma.',
    result: 'Trazabilidad',
  },
  {
    title: 'Baseline estable y más rápido',
    description: 'Corregí fallos en proyectos grandes y optimicé el cálculo.',
    result: '~10 min → 6 s',
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

      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute top-[7px] bottom-[15px] left-[7px] w-px bg-border"
        />
        <ol aria-label="Casos de éxito en orden de impacto" className="m-0 grid list-none p-0">
          {impactCases.map(({ title, description, result }, index) => (
            <li
              className="relative grid grid-cols-[16px_minmax(0,1fr)_190px] items-start gap-x-4 pb-5 last:pb-0 max-[760px]:grid-cols-[16px_minmax(0,1fr)] max-[760px]:gap-x-3 max-[760px]:pb-3.5"
              key={title}
            >
              <span
                aria-hidden="true"
                className={`relative z-10 mt-[3px] size-[15px] rounded-full border border-company-outbuild bg-background ${index === 0 ? 'bg-company-outbuild' : ''}`}
              />
              <div className="max-w-[62ch]">
                <h3 className="m-0 text-base leading-[1.35] font-medium text-foreground max-[760px]:text-sm">
                  {title}
                </h3>
                <p className="mt-1 mb-0 text-small leading-[1.5] text-secondary max-[760px]:text-caption">
                  {description}
                </p>
              </div>
              <p className="m-0 pt-px text-right text-small leading-[1.45] font-medium text-company-outbuild max-[760px]:col-start-2 max-[760px]:pt-1 max-[760px]:text-left max-[760px]:text-caption">
                {result}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
