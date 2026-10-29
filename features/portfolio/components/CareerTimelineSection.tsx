import { experience } from '../data/experience';

export function CareerTimelineSection() {
  return (
    <section className="career-overview" id="about" aria-labelledby="career-overview-heading">
      <div className="shell career-overview-shell">
        <h2 id="career-overview-heading">Mi trayectoria profesional.</h2>

        <ol className="career-branch-list">
          {[...experience].reverse().map((item, index) => {
            const isCurrent = index === 0;
            const branchClass = item.id === 'about-pichincha'
              ? 'is-pichincha'
              : item.id === 'about-pragma' ? 'is-pragma' : 'is-outbuild';

            return (
              <li className={`career-branch-entry ${branchClass}${isCurrent ? ' is-current' : ''}`} key={item.id}>
                <div className="career-branch-graph" aria-hidden="true">
                  <svg viewBox="0 0 52 100" preserveAspectRatio="none">
                    <path className="career-main-line" d="M12 0 V100" />
                    <path className="career-commit-line" d={isCurrent ? 'M40 0 H52' : 'M12 0 H52'} />
                    <path
                      className="career-develop-line"
                      d={isCurrent ? 'M12 100 C12 88 40 92 40 76 V0' : 'M12 100 C12 88 40 92 40 76 V24 C40 8 12 12 12 0'}
                    />
                    {!isCurrent && <circle className="career-main-node" cx="12" cy="100" r="3" />}
                    {!isCurrent && <circle className="career-merge-node" cx="12" cy="0" r="3" />}
                    {isCurrent && <circle className="career-main-node" cx="12" cy="100" r="3" />}
                    {isCurrent && <circle className="career-current-node" cx="40" cy="0" r="3" />}
                  </svg>
                </div>
                <div className="career-branch-content">
                  <div className="career-branch-labels">
                    <span>develop</span>
                    <span>{isCurrent ? 'rama activa' : 'merge'}</span>
                  </div>
                  <a className="career-branch-company" href={`#${item.id}`}>{item.company}</a>
                  <div className="career-branch-meta">
                    <span>{item.role}</span>
                    <span>{item.dates}</span>
                  </div>
                  <p>{item.summary}</p>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="career-main-label" aria-hidden="true">main</div>
      </div>
    </section>
  );
}
