import Image from 'next/image';
import { experience } from '../data/experience';

function ExperienceDetails({ item }: { item: (typeof experience)[number] }) {
  return (
    <div className="career-detail">
      <h3>{item.role}</h3>
      <p className="career-summary">{item.summary}</p>
      <p className="career-contribution-label">Aportes</p>
      <ul>
        {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
      </ul>
      <p className="career-skills">{item.skills}</p>
    </div>
  );
}

function PreviousExperience({ item }: { item: (typeof experience)[number] }) {
  return (
    <article className="career-previous-entry" id={item.id} aria-labelledby={`${item.id}-heading`}>
      <div className="career-previous-meta">
        <span className="career-dates">{item.dates}</span>
        <div className="career-company-line">
          <Image className="career-logo" src={item.logo} alt="" width={item.logoWidth} height={item.logoHeight} />
          <h3 id={`${item.id}-heading`}>{item.company}</h3>
        </div>
        <p>{item.description}</p>
      </div>
      <ExperienceDetails item={item} />
    </article>
  );
}

const outbuild = experience[2];

export function CompanyExperienceSections() {
  return <>
    <section className="career-previous-block" aria-labelledby="career-previous-heading">
      <div className="shell career-previous-shell">
        <h2 id="career-previous-heading">Banca y consultoría tecnológica.</h2>
        <div className="career-previous-list">
          {experience.slice(0, 2).map((item) => <PreviousExperience item={item} key={item.id} />)}
        </div>
      </div>
    </section>

    <section className="career-outbuild-block" id={outbuild.id} aria-labelledby="career-outbuild-heading">
      <div className="shell career-outbuild-shell">
        <div className="career-outbuild-copy">
          <div className="career-outbuild-meta">
            <Image src={outbuild.logo} alt="" width={outbuild.logoWidth} height={outbuild.logoHeight} />
            <span>{outbuild.description}</span>
            <span className="career-dates">{outbuild.dates}</span>
          </div>
          <h2 id="career-outbuild-heading">Outbuild</h2>
          <ExperienceDetails item={outbuild} />
        </div>

        <figure className="career-product-figure">
          <Image
            src="/outbuild-schedule.png"
            alt="Vista de Schedule en Outbuild con actividades de obra y su cronograma Gantt."
            width={1920}
            height={1080}
            sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 600px"
          />
          <figcaption>Schedule · planificación de proyectos de construcción</figcaption>
        </figure>
      </div>
    </section>
  </>;
}
