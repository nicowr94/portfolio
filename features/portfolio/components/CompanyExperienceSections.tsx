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

export function OutbuildExperienceSection() {
  return (
    <section className="flex min-h-svh snap-start snap-always items-center bg-background py-[clamp(64px,9vh,104px)] text-foreground max-[760px]:items-start max-[760px]:py-[76px] max-[760px]:pb-16" id={outbuild.id} aria-labelledby="career-outbuild-heading">
      <div className="mx-auto grid w-[min(1200px,calc(100%-64px))] grid-cols-[minmax(310px,.78fr)_minmax(0,1.22fr)] items-center gap-[clamp(36px,6vw,84px)] max-[760px]:w-[min(100%-48px,560px)] max-[760px]:grid-cols-1 max-[760px]:gap-[30px]">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5 text-xs text-secondary">
            <Image className="h-[30px] w-auto max-w-[108px] object-contain object-left" src={publicAssetPath(outbuild.logo)} alt="" width={outbuild.logoWidth} height={outbuild.logoHeight} />
            <span>{outbuild.description}</span>
            <span className="text-xs text-secondary">{outbuild.dates}</span>
          </div>
          <h2 className="mt-[18px] mb-7 text-company font-normal leading-[.98] tracking-[-.04em] text-foreground max-[760px]:mt-4 max-[760px]:mb-[22px] max-[760px]:text-company-mobile" id="career-outbuild-heading">Outbuild</h2>
          <ExperienceDetails item={outbuild} />
        </div>

        <figure className="m-0 min-w-0">
          <Image
            className="block h-auto w-full border border-border bg-background shadow-[0_28px_70px_var(--color-shadow)]"
            src={publicAssetPath('/outbuild-schedule.png')}
            alt="Vista de Schedule en Outbuild con actividades de obra y su cronograma Gantt."
            width={1920}
            height={1080}
            sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 600px"
          />
          <figcaption className="mt-3.5 text-meta tracking-[.04em] text-subtle max-[760px]:text-caption">Schedule · planificación de proyectos de construcción</figcaption>
        </figure>
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
