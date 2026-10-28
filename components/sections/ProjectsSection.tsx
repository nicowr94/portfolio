import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'Cálculo de baselines',
    category: 'RENDIMIENTO · OUTBUILD',
    description: 'Reorganicé los cálculos, paralelicé consultas a la base de datos y eliminé un cuello de botella en el procesamiento de Gantt.',
    result: 'De ~10 minutos a 6 segundos',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    number: '02',
    title: 'Exportación para Oracle Primavera P6',
    category: 'INTEGRACIONES · OUTBUILD',
    description: 'Creé una exportación P6 XML para conectar los cronogramas de construcción con una herramienta clave para contratistas en EE. UU.',
    result: 'Compatibilidad con P6',
    tags: ['Node.js', 'XML', 'Primavera P6'],
  },
  {
    number: '03',
    title: 'Historial de cambios en cronogramas',
    category: 'DATOS · OUTBUILD',
    description: 'Implementé trazabilidad de actividades mediante snapshots antes y después, junto con comparaciones basadas en hashes.',
    result: 'Cambios auditables',
    tags: ['MongoDB', 'TypeScript', 'Hashing'],
  },
];

export function ProjectsSection() {
  const [featured, ...selected] = projects;

  return <section className="section shell work-section" id="work" aria-labelledby="work-heading">
    <div className="section-heading work-heading">
      <h2 id="work-heading">Ingeniería que se nota<br/><em>en el producto.</em></h2>
      <p>Casos de Outbuild donde rendimiento, integraciones y trazabilidad resuelven problemas concretos de operación.</p>
    </div>

    <article className="featured-project" aria-labelledby="featured-project-title">
      <div className="featured-project-copy">
        <div className="project-category">{featured.category}</div>
        <h3 id="featured-project-title">{featured.title}</h3>
        <p>{featured.description}</p>
        <div className="tag-row">{featured.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <a className="case-link" href="#about-outbuild">Ver experiencia en Outbuild <ArrowDownRight size={16} aria-hidden="true"/></a>
      </div>
      <figure className="baseline-chart" aria-label="El cálculo pasó de aproximadamente diez minutos a seis segundos">
        <div className="baseline-chart-head"><span>TIEMPO DE CÁLCULO</span><span>ANTES / DESPUÉS</span></div>
        <div className="baseline-measure">
          <span>Antes</span>
          <div className="baseline-track" aria-hidden="true"><i className="baseline-before"/></div>
          <strong>~10 min</strong>
        </div>
        <div className="baseline-measure">
          <span>Ahora</span>
          <div className="baseline-track" aria-hidden="true"><i className="baseline-after"/></div>
          <strong>6 s</strong>
        </div>
        <figcaption><strong>99%</strong><span>menos tiempo en el cálculo</span></figcaption>
      </figure>
    </article>

    <div className="selected-projects" aria-label="Otros proyectos seleccionados">
      {selected.map(project => <article className="selected-project" key={project.number}>
        <span className="selected-project-number">{project.number}</span>
        <div className="selected-project-copy">
          <div className="project-category">{project.category}</div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        </div>
        <div className="selected-project-result"><span>APORTE</span><strong>{project.result}</strong><ArrowUpRight size={18} aria-hidden="true"/></div>
      </article>)}
    </div>
  </section>;
}
