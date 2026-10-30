'use client';

import type { ReactNode } from 'react';
import { isExampleFolder, type ExampleFile, type ExampleFolder } from '../../data/socialNetworkExample';
import { useSocialNetworkProjectExplorer } from './useSocialNetworkProjectExplorer';

function ProjectTree({
  folder,
  onSelect,
  parentPath = '',
  selectedPath,
}: {
  folder: ExampleFolder;
  onSelect: (path: string) => void;
  parentPath?: string;
  selectedPath: string;
}) {
  const currentPath = parentPath ? `${parentPath}/${folder.name}` : folder.name;

  return (
    <details className="min-w-0" open>
      <summary className="cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis px-[5px] py-1 text-foreground marker:text-ring focus-visible:outline-2 focus-visible:outline-offset-px focus-visible:outline-ring">{folder.name}</summary>
      <div className="ml-2.5 border-l border-border pl-2">
        {folder.children.map((child) => {
          if (isExampleFolder(child)) {
            return (
              <ProjectTree
                folder={child}
                key={`${currentPath}/${child.name}`}
                onSelect={onSelect}
                parentPath={currentPath}
                selectedPath={selectedPath}
              />
            );
          }

          return (
            <ProjectFileButton
              file={child}
              key={`${currentPath}/${child.name}`}
              onSelect={onSelect}
              path={`${currentPath}/${child.name}`}
              selected={selectedPath === `${currentPath}/${child.name}`}
            />
          );
        })}
      </div>
    </details>
  );
}

function ProjectFileButton({
  file,
  onSelect,
  path,
  selected,
}: {
  file: ExampleFile;
  onSelect: (path: string) => void;
  path: string;
  selected: boolean;
}) {
  if (file.contents === null) {
    return (
      <span aria-disabled="true" className="block w-full overflow-hidden rounded px-1.5 py-1 text-left text-ellipsis whitespace-nowrap text-tertiary">
        {file.name}
      </span>
    );
  }

  return (
    <button
      aria-pressed={selected}
      className={`block w-full cursor-pointer overflow-hidden rounded border-0 bg-transparent px-1.5 py-1 text-left text-ellipsis whitespace-nowrap text-secondary hover:bg-surface-strong hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-px focus-visible:outline-ring ${selected ? 'bg-surface-raised text-ring' : ''}`}
      onClick={() => onSelect(path)}
      type="button"
    >
      {file.name}
    </button>
  );
}

function ProjectFileTree({
  folder,
  onSelect,
  selectedPath,
}: {
  folder: ExampleFolder;
  onSelect: (path: string) => void;
  selectedPath: string;
}) {
  return <ProjectTree folder={folder} onSelect={onSelect} selectedPath={selectedPath} />;
}

function FileContents({ children }: { children: ReactNode }) {
  return <pre className="m-0 min-h-[220px] overflow-auto whitespace-pre px-4 py-4 font-mono text-meta leading-[1.75] text-code [tab-size:2] max-[680px]:text-caption"><code>{children}</code></pre>;
}

export function SocialNetworkProjectExplorer() {
  const { selectedFile, selectedPath, setSelectedPath, tree } = useSocialNetworkProjectExplorer();

  return (
    <section aria-label="Explorador del proyecto de red social" className="my-7 mb-[34px] max-w-full overflow-hidden rounded-lg border border-border bg-surface font-mono text-xs leading-[1.55] text-code">
      <div className="flex min-h-10 items-center gap-3 border-b border-border bg-surface-strong px-[13px] text-meta text-code">
        <div aria-hidden="true" className="flex gap-[5px]"><span className="size-2 rounded-full bg-negative" /><span className="size-2 rounded-full bg-warning" /><span className="size-2 rounded-full bg-positive" /></div>
        <span>red-social · ejemplo simplificado</span>
        <span className="ml-auto text-caption text-subtle max-[680px]:text-overline">React · Express · Node.js</span>
      </div>
      <div className="grid min-h-[270px] grid-cols-[minmax(180px,230px)_minmax(0,1fr)] max-[680px]:grid-cols-1">
        <nav aria-label="Archivos del proyecto" className="overflow-auto border-r border-border p-3.5 max-[680px]:max-h-[220px] max-[680px]:border-r-0 max-[680px]:border-b">
          <h3 className="mt-0 mb-2.5 px-[7px] text-overline font-medium leading-[1.5] tracking-[.09em] text-subtle">EXPLORADOR</h3>
          <ProjectFileTree folder={tree} onSelect={setSelectedPath} selectedPath={selectedPath} />
        </nav>
        <div className="min-w-0 overflow-auto">
          <div className="overflow-hidden border-b border-border px-[15px] py-[11px] text-ellipsis whitespace-nowrap text-ring" title={selectedPath}>{selectedPath}</div>
          {selectedFile?.contents ? <FileContents>{selectedFile.contents}</FileContents> : null}
        </div>
      </div>
      <p className="m-0 border-t border-border px-[13px] py-2.5 font-sans text-meta leading-[1.6] text-subtle">
        Proyecto didáctico: selecciona un archivo. Los fragmentos se simplificaron para mostrar el problema.
      </p>
    </section>
  );
}
