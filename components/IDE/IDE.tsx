import type { ReactNode } from 'react';

type IDEProps = {
  ariaLabel: string;
  children: ReactNode;
  className: string;
  mode: string;
  projectName: string;
};

export function IDE({ ariaLabel, children, className, mode, projectName }: IDEProps) {
  return (
    <div className={`ide-window ${className}`} role="group" aria-label={ariaLabel}>
      <header className="ide-titlebar">
        <div className="ide-window-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="ide-project">{projectName}</span>
        <span className="ide-mode">{mode}</span>
      </header>
      {children}
    </div>
  );
}
