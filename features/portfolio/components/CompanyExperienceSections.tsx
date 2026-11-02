import Image from 'next/image';
import { experience } from '../data/experience';
import { publicAssetPath } from '../utils/publicAssetPath';

function ExperienceDetails({ item }: { item: (typeof experience)[number] }) {
  return (
    <div className="min-w-0">
      <h3 className="mt-0 mb-3 text-lg leading-[1.35] font-medium text-foreground max-[760px]:text-body-lg">{item.role}</h3>
      <p className="mt-0 mb-[18px] text-body-sm leading-[1.6] text-secondary max-[760px]:text-sm">
        {item.summary}{' '}
        {item.id === 'about-pichincha' && <a className="text-foreground underline underline-offset-4 hover:text-ring" href="https://www.microsoft.com/es/customers/story/1802128589068650241-pichincha-office-365-e3-banking-and-capital-markets-es-peru" target="_blank" rel="noreferrer">Ver caso de éxito en Microsoft</a>}
      </p>
      <p className="mt-0 mb-2 text-caption font-medium tracking-[.08em] text-subtle uppercase">Aportes</p>
      <ul className="m-0 grid list-none gap-2.5 p-0 text-sm leading-[1.6] text-foreground max-[760px]:gap-[9px] max-[760px]:text-small">
        {item.highlights.map((highlight) => <li className="relative pl-4 before:absolute before:top-[.72em] before:left-0 before:h-px before:w-[5px] before:bg-ring" key={highlight}>{highlight}</li>)}
      </ul>
      <p className="mt-[18px] mb-0 text-xs leading-[1.5] text-secondary max-[760px]:mt-3.5 max-[760px]:text-meta">{item.skills}</p>
    </div>
  );
}

function PreviousExperience({ item }: { item: (typeof experience)[number] }) {
  return (
    <article className="grid min-w-0 content-start gap-7 scroll-mt-6 border-t border-border pt-[22px] max-[760px]:gap-[18px] max-[760px]:pt-[18px]" id={item.id} aria-labelledby={`${item.id}-heading`}>
      <div className="grid content-start justify-items-start gap-2.5">
        <span className="text-xs text-secondary">{item.dates}</span>
        <div className="flex min-h-[34px] items-center gap-3.5">
          <Image className="block h-7 w-auto max-w-[76px] object-contain object-left" src={publicAssetPath(item.logo)} alt="" width={item.logoWidth} height={item.logoHeight} />
          <h3 className="m-0 text-2xl leading-[1.2] font-medium tracking-[-.015em] text-foreground max-[760px]:text-title-md" id={`${item.id}-heading`}>{item.company}</h3>
        </div>
        <p className="m-0 text-sm leading-[1.6] text-secondary max-[760px]:text-sm">{item.description}</p>
      </div>
      <ExperienceDetails item={item} />
    </article>
  );
}

const outbuild = experience[2];

const outbuildAchievements = [
  {
    title: 'Oracle Primavera P6: exportaciones XML y XER',
    description: 'Habilité a Outbuild a competir por contratos de EE. UU. que exigen Oracle Primavera P6.',
  },
  {
    title: 'Integraciones bidireccionales',
    description: 'Integré Trimble, Autodesk y Procore para consultar y actualizar submittals y drawings en ambos sentidos.',
  },
  {
    title: 'Schedule Changelog en MongoDB',
    description: 'Registré el estado anterior y posterior de cada cambio para dar trazabilidad.',
  },
  {
    title: 'PDF de Schedule y Lookahead',
    description: 'Fui responsable de exportaciones clave para mantener contratos. El equipo de Producto, el CTO y el CEO reconocieron mi trabajo.',
  },
  {
    title: 'Baselines de ~10 min a 6 s',
    description: 'Reduje el cálculo un 99 % con consultas paralelas, lotes y mejoras al motor Gantt; resolví timeouts de Cloudflare.',
  },
  {
    title: 'Schedule, módulo central',
    description: 'Formé parte del equipo responsable del módulo central de Outbuild.',
  },
  {
    title: 'Multicompany',
    description: 'Desarrollé Multicompany para que un usuario pertenezca a varias compañías desde una sola cuenta, sin crear cuentas separadas.',
  },
  {
    title: 'IA aplicada al desarrollo',
    description: 'Diseñé soluciones con el líder técnico y Product Owner en refinamientos; usé Claude Code, skills, reglas, hooks y agentes múltiples para planificar, desarrollar y revisar código.',
  },
];

export function OutbuildExperienceSection() {
  return (
    <section className="flex min-h-svh snap-start snap-always items-center bg-background py-[clamp(42px,6vh,64px)] text-foreground max-[760px]:items-start max-[760px]:py-14 max-[760px]:pb-12" id={outbuild.id} aria-labelledby="outbuild-heading">
      <div className="mx-auto w-[min(1200px,calc(100%-64px))] max-[760px]:w-[min(100%-48px,560px)]">
        <div className="grid grid-cols-[minmax(280px,.72fr)_minmax(0,1.28fr)] items-end gap-[clamp(28px,5vw,64px)] max-[760px]:grid-cols-1 max-[760px]:gap-6">
          <header className="min-w-0">
            <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2.5 text-xs text-secondary max-[760px]:mb-3">
              <Image className="h-8 w-auto max-w-[90px] object-contain object-left" src={publicAssetPath(outbuild.logo)} alt="" width={outbuild.logoWidth} height={outbuild.logoHeight} />
              <span>{outbuild.description}</span>
              <span>{outbuild.dates}</span>
            </div>
            <h2 className="m-0 max-w-[12ch] text-[clamp(2.6rem,5.2vw,4.5rem)] font-normal leading-[.98] tracking-[-.035em] text-foreground max-[760px]:max-w-none max-[760px]:text-[clamp(2.5rem,11vw,3.5rem)]" id="outbuild-heading">
              Impacto en Outbuild
            </h2>
            <p className="mb-0 mt-4 text-body-lg font-medium text-secondary max-[760px]:mt-2 max-[760px]:text-base">
              {outbuild.role}
            </p>
          </header>

          <figure className="m-0 min-w-0">
            <Image
              className="block h-auto max-h-[56svh] w-full border border-border bg-background object-contain shadow-[0_28px_70px_var(--color-shadow)] max-[760px]:max-h-[42svh]"
              src={publicAssetPath('/outbuild-schedule.png')}
              alt="Vista de Schedule en Outbuild con actividades de obra y su cronograma Gantt."
              width={1920}
              height={1080}
              sizes="(max-width: 760px) 100vw, (max-width: 1200px) 58vw, 700px"
            />
            <figcaption className="mt-2.5 text-meta tracking-[.04em] text-subtle max-[760px]:text-caption">Schedule · planificación de proyectos de construcción</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function OutbuildSuccessCasesSection() {
  return (
    <section className="flex min-h-svh snap-start snap-always items-center bg-background py-[clamp(42px,6vh,64px)] text-foreground max-[760px]:items-start max-[760px]:py-14 max-[760px]:pb-12" id="work" aria-labelledby="outbuild-cases-heading">
      <div className="mx-auto w-[min(1200px,calc(100%-64px))] max-[760px]:w-[min(100%-48px,560px)]">
        <h2 className="m-0 mb-7 max-w-[20ch] text-[clamp(2.25rem,4.5vw,3.75rem)] font-normal leading-[1.02] tracking-[-.03em] text-foreground max-[760px]:mb-6 max-[760px]:text-[clamp(2rem,9vw,3rem)]" id="outbuild-cases-heading">
          Casos de éxito en Outbuild
        </h2>

        <ol aria-label="Casos de éxito en Outbuild, ordenados por impacto" className="m-0 grid list-none grid-cols-4 gap-x-5 gap-y-5 p-0 max-[900px]:grid-cols-2 max-[760px]:gap-x-4 max-[760px]:gap-y-4 max-[540px]:grid-cols-1 max-[540px]:gap-y-3">
          {outbuildAchievements.map(({ title, description }, index) => {
            const featured = index === 0;
            return (
              <li className={featured ? 'min-w-0 bg-primary p-4 text-primary-foreground max-[540px]:p-3' : 'min-w-0 border-t border-border pt-3'} key={title} value={index + 1}>
                <span className={featured ? 'text-caption tracking-[.1em] text-primary-foreground/75' : 'text-caption tracking-[.1em] text-ring'}>{String(index + 1).padStart(2, '0')}</span>
                <h3 className={`mb-1.5 mt-2 text-base font-medium leading-[1.3] max-[760px]:text-small ${featured ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {title}
                </h3>
                <p className={`mb-0 mt-0 text-small leading-[1.5] max-[760px]:text-meta ${featured ? 'text-primary-foreground/85' : 'text-secondary'}`}>
                  {description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function PreviousExperienceSections() {
  return (
    <section className="flex min-h-svh snap-start snap-always items-center bg-background py-[clamp(64px,9vh,104px)] text-foreground max-[760px]:items-start max-[760px]:py-[76px] max-[760px]:pb-16" aria-labelledby="career-previous-heading">
      <div className="mx-auto w-[min(1200px,calc(100%-64px))] max-[760px]:w-[min(100%-48px,560px)]">
        <h2 className="m-0 mb-[clamp(38px,6vh,64px)] max-w-[24ch] text-section-company font-normal leading-[1.04] tracking-[-.03em] max-[760px]:mb-[34px] max-[760px]:max-w-[14ch] max-[760px]:text-section-company-mobile" id="career-previous-heading">Banca y consultoría tecnológica.</h2>
        <div className="grid grid-cols-2 gap-[clamp(28px,5vw,72px)] max-[760px]:grid-cols-1 max-[760px]:gap-[30px]">
          {experience.slice(0, 2).map((item) => <PreviousExperience item={item} key={item.id} />)}
        </div>
      </div>
    </section>
  );
}
