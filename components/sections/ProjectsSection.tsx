import { ArrowUpRight } from 'lucide-react';

const projects = [
  { number: '01', title: 'Schedule baseline optimization', category: 'PERFORMANCE · OUTBUILD', description: 'Reworked baseline calculations, parallelized database queries and removed a Gantt processing bottleneck.', result: '10 min → 6 sec', tags: ['Node.js', 'TypeScript', 'PostgreSQL'], tone: 'violet' },
  { number: '02', title: 'Oracle Primavera P6 export', category: 'INTEGRATIONS · OUTBUILD', description: 'Built P6 XML export to connect construction schedules with a key tool required by U.S. contractors.', result: 'New market enabled', tags: ['Node.js', 'XML', 'P6'], tone: 'green' },
  { number: '03', title: 'Schedule change history', category: 'DATA · OUTBUILD', description: 'Implemented activity change traceability using before-and-after snapshots and hash-based comparisons.', result: 'Auditable changes', tags: ['MongoDB', 'TypeScript', 'Hashing'], tone: 'neutral' },
];

export function ProjectsSection() {
  return <section className="section shell" id="work"><div className="section-heading"><div><div className="eyebrow">01 / TRABAJO SELECCIONADO</div><h2>Problemas reales.<br/><em>Mejor ingeniería.</em></h2></div><p>Retos de producto donde el trabajo técnico tuvo impacto en usuarios, operaciones y negocio.</p></div><div className="project-grid">{projects.map(project => <article className={`project-card ${project.tone}`} key={project.number}><div className="card-top"><span className="project-number">/{project.number}</span><ArrowUpRight size={17}/></div><div className="project-content"><div className="project-category">{project.category}</div><h3>{project.title}</h3><p>{project.description}</p><div className="project-result"><span>IMPACTO</span><strong>{project.result}</strong></div><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>;
}
