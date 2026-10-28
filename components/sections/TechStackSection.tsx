import technologies from './data/technologies.json';

const technologyGroups = [
  { name: 'Frontend', detail: 'Interfaces y experiencia de producto', items: ['React', 'TypeScript', 'Next.js', 'Angular', 'Tailwind CSS', 'shadcn/ui', 'Storybook'] },
  { name: 'Backend', detail: 'Servicios, datos y persistencia', items: ['Node.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis', 'Sequelize', 'Prisma', 'Python'] },
  { name: 'Herramientas e IA', detail: 'Calidad, despliegue y nuevas herramientas', items: ['GitHub', 'Playwright', 'Docker', 'Electron', 'Railway', 'Codex', 'Claude Code', 'RAG', 'MinerU', 'LangChain'] },
];

export function TechStackSection() {
  return <section className="section shell stack-section" id="stack" aria-labelledby="stack-heading">
    <div className="section-heading stack-heading">
      <h2 id="stack-heading">Un stack para construir<br/><em>de punta a punta.</em></h2>
      <p>Desde la interfaz y las APIs hasta los datos, el despliegue y nuevas herramientas de trabajo.</p>
    </div>
    <div className="tech-groups" aria-label="Tecnologías que uso">
      {technologyGroups.map((group, groupIndex) => {
        const items = group.items.map(name => technologies.find(technology => technology.name === name)).filter((item): item is (typeof technologies)[number] => Boolean(item));
        return <section className="tech-group" key={group.name} aria-label={group.name}>
          <div className="tech-group-label"><strong>{group.name}</strong><span>{group.detail}</span></div>
          <div className={`tech-marquee tech-marquee-group group-${groupIndex + 1}`}>
            <div className="tech-marquee-row"><div className="tech-marquee-track">{[...items, ...items].map((item, index) => <a className={`tech-item${item.name === 'GitHub' ? ' github-tech-item' : ''}`} key={`${item.name}-${index}`} href={item.url} target="_blank" rel="noreferrer" aria-hidden={index >= items.length} tabIndex={index >= items.length ? -1 : undefined}>
              <div className="tech-icon">{item.logo ? <img src={item.logo} alt="" loading="lazy"/> : <span className="tech-lettermark" aria-hidden="true">{item.mark}</span>}</div><span>{item.name}</span>
            </a>)}</div></div>
          </div>
        </section>;
      })}
    </div>
    <div className="stack-bottom"><span>IA EN EL WORKFLOW</span><span>Claude Code · Prompt Engineering · Multi-agent workflows</span></div>
  </section>;
}
