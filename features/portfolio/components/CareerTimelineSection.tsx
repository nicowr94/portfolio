import { experience } from '../data/experience';

export function CareerTimelineSection() {
  return (
    <section className="flex min-h-svh snap-start snap-always items-center bg-background py-[clamp(40px,6vh,72px)] text-foreground max-[760px]:items-start max-[760px]:py-[76px] max-[760px]:pb-16" id="about" aria-labelledby="career-overview-heading">
      <div className="mx-auto w-[min(1200px,calc(100%-64px))] max-[760px]:w-[min(100%-48px,560px)]">
        <h2 className="m-0 max-w-[24ch] text-section-career font-normal leading-[1.04] tracking-[-.03em] max-[760px]:max-w-[13ch] max-[760px]:text-section-career-mobile" id="career-overview-heading">Mi trayectoria profesional.</h2>

        <ol className="mt-[clamp(32px,5vh,52px)] mb-0 grid list-none p-0 max-[760px]:mt-9">
          {[...experience].reverse().map((item, index) => {
            const isCurrent = index === 0;
            const branchColorClass = item.id === 'about-pichincha'
              ? '[--branch-color:var(--color-company-pichincha)]'
              : item.id === 'about-pragma'
                ? '[--branch-color:var(--color-company-pragma)]'
                : '[--branch-color:var(--color-company-outbuild)]';

            return (
              <li className={`grid min-h-[104px] grid-cols-[52px_minmax(0,1fr)] ${branchColorClass} max-[760px]:min-h-[116px] max-[760px]:grid-cols-[42px_minmax(0,1fr)]`} key={item.id}>
                <div className="h-full min-w-0" aria-hidden="true">
                  <svg className="block size-full overflow-visible max-[760px]:w-[42px]" viewBox="0 0 52 100" preserveAspectRatio="none">
                    <path className="fill-none stroke-border stroke-[1.4] [vector-effect:non-scaling-stroke]" d="M12 0 V100" />
                    <path className="fill-none stroke-[var(--branch-color)] stroke-[1.8] [vector-effect:non-scaling-stroke]" d={isCurrent ? 'M40 0 H52' : 'M12 0 H52'} />
                    <path
                      className={`fill-none stroke-[var(--branch-color)] [vector-effect:non-scaling-stroke] ${isCurrent ? 'stroke-[2.2]' : 'stroke-[1.8]'}`}
                      d={isCurrent ? 'M12 100 C12 88 40 92 40 76 V0' : 'M12 100 C12 88 40 92 40 76 V24 C40 8 12 12 12 0'}
                    />
                    <circle className="fill-background stroke-secondary stroke-[1.5] [vector-effect:non-scaling-stroke]" cx="12" cy="100" r="3" />
                    {!isCurrent && <circle className="fill-[var(--branch-color)] stroke-[var(--branch-color)] stroke-[1.5] [vector-effect:non-scaling-stroke]" cx="12" cy="0" r="3" />}
                    {isCurrent && <circle className="fill-[var(--branch-color)] stroke-[var(--branch-color)] stroke-[1.5] [vector-effect:non-scaling-stroke]" cx="40" cy="0" r="3" />}
                  </svg>
                </div>
                <div className="relative min-w-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--branch-color)_8%,transparent),transparent_88%)] pt-[9px] pr-3 pb-5 before:absolute before:top-0 before:right-0 before:left-0 before:h-px before:bg-[var(--branch-color)]">
                  <div className="mb-[5px] flex justify-start gap-4 font-mono text-meta leading-[1.3] text-subtle max-[760px]:text-caption">
                    <span className="text-[var(--branch-color)]">develop</span>
                    <span className={isCurrent ? 'text-[var(--branch-color)]' : ''}>{isCurrent ? 'rama activa' : 'merge'}</span>
                  </div>
                  <a className="inline-block text-xl leading-[1.25] font-medium text-foreground no-underline hover:text-ring focus-visible:text-ring max-[760px]:text-lg" href={`#${item.id}`}>{item.company}</a>
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs leading-[1.5] text-secondary max-[760px]:text-meta">
                    <span>{item.role}</span>
                    <span>{item.dates}</span>
                  </div>
                  <p className="mt-[7px] mb-0 max-w-[68ch] text-small leading-[1.5] text-foreground max-[760px]:text-xs">
                    {item.summary}{' '}
                    {item.id === 'about-pichincha' && <a className="underline underline-offset-4 hover:text-ring" href="https://www.microsoft.com/es/customers/story/1802128589068650241-pichincha-office-365-e3-banking-and-capital-markets-es-peru" target="_blank" rel="noreferrer">Ver caso en Microsoft</a>}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="mt-3 ml-[5px] font-mono text-xs leading-[1.2] text-subtle max-[760px]:mt-7" aria-hidden="true">main</div>
      </div>
    </section>
  );
}
