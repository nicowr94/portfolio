const stackGroups = [
  { area: 'Frontend', tools: 'React · TypeScript' },
  { area: 'Backend', tools: 'Node.js · Sequelize · PostgreSQL' },
  { area: 'Arquitectura', tools: 'Clean Architecture' },
];

export function StatsSection() {
  return (
    <section className="signal-band" aria-labelledby="impact-heading">
      <div className="profile-layout">
        <div className="profile-intro">
          <p className="profile-kicker">Senior Full Stack Developer</p>
          <h2 id="impact-heading">Experiencia de producto, de punta a punta.</h2>
          <p className="profile-summary">
            Más de 6 años de experiencia, incluidos más de 4 en Outbuild, plataforma para el mercado estadounidense que levantó US$11 millones en Serie A. He sido responsable de módulos críticos, diseño de soluciones, microservicios e integración de APIs REST. También optimicé procesos de ~10 minutos a 6 segundos y aplico IA al desarrollo.
          </p>
        </div>

        <div className="profile-stack" aria-labelledby="profile-stack-heading">
          <h3 id="profile-stack-heading">Stack y arquitectura</h3>
          <dl>
            {stackGroups.map(({ area, tools }) => (
              <div className="profile-stack-row" key={area}>
                <dt>{area}</dt>
                <dd>{tools}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
