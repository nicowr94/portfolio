import technologies from '../data/technologies.json';
import { publicAssetPath } from '../utils/publicAssetPath';

const technologyGroups = [
  { name: 'Frontend', detail: 'Interfaces y experiencia de producto', items: ['React', 'TypeScript', 'Next.js', 'Angular', 'Tailwind CSS', 'shadcn/ui', 'Storybook'] },
  { name: 'Backend', detail: 'Servicios, datos y persistencia', items: ['Node.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis', 'Sequelize', 'Prisma', 'Python'] },
  { name: 'Herramientas e IA', detail: 'Calidad, despliegue y nuevas herramientas', items: ['GitHub', 'Playwright', 'Docker', 'Electron', 'Railway', 'Codex', 'Claude Code', 'RAG', 'MinerU', 'LangChain'] },
];
const marqueeAnimationClasses = [
  'animate-[tech-marquee-left_34s_linear_infinite]',
  'animate-[tech-marquee-right_40s_linear_infinite]',
  'animate-[tech-marquee-left_36s_linear_infinite]',
] as const;

export function TechStackSection() {
  return <section className="snap-start snap-always mx-auto w-[min(1200px,calc(100%-64px))] py-[clamp(72px,9vh,100px)] max-[760px]:w-[min(100%-48px,560px)] max-[760px]:py-[72px]" id="stack" aria-labelledby="stack-heading">
    <div className="mb-8 max-[760px]:mb-6">
      <h2 className="m-0 text-section-tech leading-[1.02] font-normal tracking-[-.035em] text-foreground max-[760px]:max-w-[13ch] max-[760px]:text-section-tech-mobile max-[760px]:leading-[1.04]" id="stack-heading">Tecnologías<br/><em className="text-secondary">que uso</em></h2>
    </div>
    <div className="grid" aria-label="Tecnologías que uso">
      {technologyGroups.map((group, groupIndex) => {
        const items = group.items.map(name => technologies.find(technology => technology.name === name)).filter((item): item is (typeof technologies)[number] => Boolean(item));
        const animationClass = marqueeAnimationClasses[groupIndex];
        return <section className="grid grid-cols-[210px_minmax(0,1fr)] items-center gap-6 border-t border-border py-3.5 last:border-b max-[760px]:flex max-[760px]:flex-col max-[760px]:items-stretch max-[760px]:gap-3 max-[760px]:py-[18px]" key={group.name} aria-label={group.name}>
          <div className="grid gap-[5px] max-[760px]:order-2 max-[760px]:gap-0.5 max-[760px]:px-0.5"><strong className="text-base font-normal text-foreground max-[760px]:text-small">{group.name}</strong><span className="text-xs text-secondary max-[760px]:text-meta">{group.detail}</span></div>
          <div className="min-w-0 [mask-image:linear-gradient(to_right,transparent,var(--color-background)_4%,var(--color-background)_96%,transparent)] max-[760px]:order-1">
            <div className="overflow-hidden">
              <div className={`flex w-max gap-2.5 ${animationClass} motion-reduce:transform-none motion-reduce:animate-none`}>
              {[...items, ...items].map((item, index) => {
                const hasBadge = ['GitHub', 'shadcn/ui', 'Prisma', 'Railway'].includes(item.name);
                return <a className={`flex min-h-[76px] w-auto min-w-28 flex-none items-center gap-2 rounded-xl border border-border px-3.5 py-2.5 text-xs text-foreground no-underline transition-transform hover:-translate-y-0.5 hover:bg-transparent max-[760px]:min-h-[70px] max-[760px]:min-w-[102px] max-[760px]:px-[11px] max-[760px]:py-[9px] max-[760px]:text-meta ${index >= items.length ? 'motion-reduce:hidden' : ''}`} key={`${item.name}-${index}`} href={item.url} target="_blank" rel="noreferrer" aria-hidden={index >= items.length} tabIndex={index >= items.length ? -1 : undefined}>
              <div className={`grid size-7 flex-none place-items-center ${hasBadge ? 'rounded-full border border-border bg-surface-strong' : ''} ${item.mark ? 'rounded-[7px] bg-surface-strong text-caption' : ''}`}>{item.logo ? <img className={`size-[26px] object-contain ${hasBadge ? 'size-3.5 brightness-0 invert' : ''} ${item.name === 'Codex' ? 'rounded-[16%]' : ''}`} src={publicAssetPath(item.logo)} alt="" loading="lazy"/> : <span className="grid size-6 place-items-center tracking-[-.04em]" aria-hidden="true">{item.mark}</span>}</div><span>{item.name}</span>
            </a>;
              })}
              </div>
            </div>
          </div>
        </section>;
      })}
    </div>
    <div className="mt-6 border-t border-border pt-5">
      <h3 className="mt-0 mb-[22px] text-meta font-medium tracking-[.06em] text-secondary">IA EN EL WORKFLOW</h3>
      <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
        <li className="rounded-md border border-border bg-surface-raised px-2.5 py-1.5 text-xs leading-[1.4] text-secondary">Claude Code</li>
        <li className="rounded-md border border-border bg-surface-raised px-2.5 py-1.5 text-xs leading-[1.4] text-secondary">Prompt Engineering</li>
        <li className="rounded-md border border-border bg-surface-raised px-2.5 py-1.5 text-xs leading-[1.4] text-secondary">Multi-agent workflows</li>
        <li className="rounded-md border border-border bg-surface-raised px-2.5 py-1.5 text-xs leading-[1.4] text-secondary">Codex</li>
      </ul>
    </div>
  </section>;
}
