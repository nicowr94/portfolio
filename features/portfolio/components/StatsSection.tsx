const stackGroups = [
  { area: 'Frontend', tools: 'React · TypeScript' },
  { area: 'Backend', tools: 'Node.js · Sequelize · PostgreSQL' },
  { area: 'Arquitectura', tools: 'Clean Architecture' },
];

export function StatsSection() {
  return (
    <section className="snap-start snap-always flex min-h-svh items-center bg-background px-8 py-[clamp(72px,10vh,112px)] max-[760px]:py-16 max-[760px]:px-6" aria-labelledby="impact-heading">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-[minmax(0,1.15fr)_minmax(300px,.85fr)] items-center gap-[clamp(48px,8vw,112px)] max-[760px]:max-w-[560px] max-[760px]:grid-cols-1 max-[760px]:gap-[34px]">
        <div className="max-w-[660px]">
          <h2 className="m-0 text-section-stats font-normal leading-[1.08] tracking-[-.025em] text-foreground max-[760px]:text-section-stats-mobile [&_span]:block" id="impact-heading">
            <span>Nicolas Wong</span>
            <span className="text-tertiary">Diseño y desarrollo</span>
          </h2>
          <p className="mt-[22px] mb-0 max-w-[66ch] text-body-sm leading-[1.8] text-secondary max-[760px]:mt-4 max-[760px]:text-sm max-[760px]:leading-[1.7]">
            Soy ingeniero de sistemas por la Universidad Nacional de Ingeniería (UNI) y desarrollador full stack con más de 6 años de experiencia. He trabajado en banca, consultoría y Outbuild, una startup estadounidense que levantó US$11 millones en una ronda Serie A. Mi perfil combina desarrollo de producto, arquitectura de software e ingeniería de IA para construir soluciones de punta a punta.
          </p>
        </div>

        <div aria-labelledby="profile-stack-heading">
          <h3 className="mt-0 mb-[14px] text-xs font-normal tracking-[.08em] text-subtle uppercase max-[760px]:mb-2.5" id="profile-stack-heading">Stack y arquitectura</h3>
          <dl className="m-0 border-t border-border">
            {stackGroups.map(({ area, tools }) => (
              <div className="grid min-h-[72px] grid-cols-[minmax(100px,.7fr)_minmax(0,1fr)] items-center gap-[18px] border-b border-border max-[760px]:min-h-[58px] max-[760px]:grid-cols-[minmax(95px,.55fr)_minmax(0,1fr)] max-[760px]:gap-3" key={area}>
                <dt className="text-small text-subtle">{area}</dt>
                <dd className="m-0 text-base leading-[1.5] text-foreground max-[760px]:text-sm">{tools}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
