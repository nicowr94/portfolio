import type { ReactNode } from 'react';

type IDEProps = {
  ariaLabel: string;
  children: ReactNode;
  mode: string;
  projectName: string;
};

export function IDE({ ariaLabel, children, mode, projectName }: IDEProps) {
  return (
    <div className="w-[min(100%,720px)] justify-self-end overflow-hidden rounded-xl border border-border bg-surface-raised font-mono text-xs leading-[1.5] text-foreground shadow-2xl max-[760px]:w-full max-[760px]:text-caption" role="group" aria-label={ariaLabel}>
      <header className="flex h-[42px] flex-none items-center gap-3.5 border-b border-border-muted bg-surface-strong px-3.5 font-mono text-meta leading-[1.4] text-subtle">
        <div className="flex gap-[5px]" aria-hidden="true">
          <span className="size-2 rounded-full bg-negative" />
          <span className="size-2 rounded-full bg-warning" />
          <span className="size-2 rounded-full bg-positive" />
        </div>
        <span className="text-foreground">{projectName}</span>
        <span className="ml-auto text-subtle">{mode}</span>
      </header>
      {children}
    </div>
  );
}
