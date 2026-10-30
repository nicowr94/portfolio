import { ChevronDown, FileCode2, Folder, FolderOpen } from 'lucide-react';
import { IDE } from '../../../components/IDE/IDE';

const architectureFiles = [
  { name: 'domain', depth: 0, kind: 'folder' },
  { name: 'entities', depth: 1, kind: 'folder' },
  { name: 'phone.ts', depth: 2, kind: 'file' },
  { name: 'ports', depth: 1, kind: 'folder' },
  { name: 'phone-repository.ts', depth: 2, kind: 'file' },
  { name: 'application', depth: 0, kind: 'folder-open' },
  { name: 'use-cases', depth: 1, kind: 'folder' },
  { name: 'get-phone-by-id.ts', depth: 2, kind: 'active-file' },
  { name: 'infrastructure', depth: 0, kind: 'folder' },
  { name: 'http', depth: 1, kind: 'folder' },
  { name: 'http-phone-repository.ts', depth: 2, kind: 'file' },
  { name: 'presentation', depth: 0, kind: 'folder' },
  { name: 'phone-details.tsx', depth: 1, kind: 'file' },
] as const;

export function CleanArchitectureEditor() {
  return (
    <IDE ariaLabel="Ejemplo de código con Clean Architecture para celulares" mode="TypeScript" projectName="phone-platform">
      <div className="grid h-[356px] grid-cols-[minmax(172px,35%)_minmax(0,1fr)] max-[760px]:h-[320px] max-[760px]:grid-cols-[118px_minmax(0,1fr)] max-[390px]:grid-cols-[100px_minmax(0,1fr)]">
        <nav className="overflow-hidden border-r border-border-muted bg-surface py-3.5 text-tertiary max-[760px]:pt-[10px]" aria-label="Estructura de archivos">
          <p className="mx-3 mb-2.5 text-overline tracking-[.1em] text-subtle">EXPLORER</p>
          <p className="my-0 flex items-center gap-1 px-2.5 py-1 text-caption font-semibold tracking-[.02em] text-foreground"><ChevronDown size={12} /> SRC</p>
          <ul className="mt-[5px] mb-0 list-none p-0">
            {architectureFiles.map((file) => {
              const isFolder = file.kind === 'folder' || file.kind === 'folder-open';

              return (
                <li
                  className={`flex h-5 items-center gap-[7px] overflow-hidden pr-2 text-ellipsis whitespace-nowrap [&_svg]:size-[13px] [&_svg]:flex-none [&_svg]:text-subtle max-[760px]:h-[19px] max-[760px]:gap-[5px] max-[760px]:[&_svg]:size-3 max-[390px]:text-micro ${file.kind === 'active-file' ? 'bg-surface-strong text-foreground [&_svg]:text-ring' : ''}`}
                  key={file.name}
                  style={{ paddingLeft: `${12 + file.depth * 14}px` }}
                >
                  {file.kind === 'folder-open' ? <FolderOpen size={14} /> : isFolder ? <Folder size={14} /> : <FileCode2 size={14} />}
                  <span>{file.name}</span>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex h-full min-h-0 min-w-0 flex-col overflow-hidden">
          <div className="flex h-[38px] items-center gap-2 border-b border-border-muted bg-surface-strong px-3.5 text-meta text-foreground max-[760px]:h-[34px] max-[760px]:px-2.5 max-[760px]:text-caption">
            <FileCode2 className="text-ring" size={14} />
            <span>get-phone-by-id.ts</span>
            <i className="ml-auto size-1.5 rounded-full bg-subtle" aria-hidden="true" />
          </div>
          <div className="overflow-hidden px-3.5 pt-[9px] pb-0 text-ellipsis whitespace-nowrap text-caption text-subtle max-[760px]:px-2.5 max-[760px]:text-micro">src&nbsp; / &nbsp;application&nbsp; / &nbsp;use-cases&nbsp; / &nbsp;get-phone-by-id.ts</div>
          <pre className="my-2 mb-4 min-h-0 min-w-0 flex-1 overflow-auto font-mono text-meta leading-[1.55] text-code max-[760px]:text-overline max-[390px]:text-micro" aria-label="Caso de uso para consultar un celular"><code className="block min-w-max [&>span]:grid [&>span]:grid-cols-[36px_minmax(0,1fr)] [&>span]:pr-3.5 [&>span]:whitespace-pre [&>span>span:first-child]:select-none [&>span>span:first-child]:pr-3 [&>span>span:first-child]:text-right [&>span>span:first-child]:text-subtle max-[760px]:[&>span]:grid-cols-[26px_minmax(0,1fr)] max-[760px]:[&>span>span:first-child]:pr-2 [&_b]:font-medium [&_b]:text-syntax-keyword [&_em]:font-normal [&_em]:text-syntax-type [&_strong]:font-normal [&_strong]:text-syntax-string">
            <span><span>1</span><span><b>import type</b> {'{'} <em>Phone</em> {'}'}</span></span>
            <span><span>2</span><span>&nbsp;&nbsp;<b>from</b> <strong>&apos;@/domain/entities/phone&apos;</strong>;</span></span>
            <span><span>3</span><span><b>import type</b> {'{'} <em>PhoneRepository</em> {'}'}</span></span>
            <span><span>4</span><span>&nbsp;&nbsp;<b>from</b> <strong>&apos;@/domain/ports/phone-repository&apos;</strong>;</span></span>
            <span><span>5</span><span /></span>
            <span><span>6</span><span><b>type</b> <em>PhoneDetails</em> = <em>Pick</em>&lt;<em>Phone</em>,</span></span>
            <span><span>7</span><span>&nbsp;&nbsp;<strong>&apos;id&apos;</strong> | <strong>&apos;brand&apos;</strong> | <strong>&apos;model&apos;</strong> | <strong>&apos;storageGb&apos;</strong></span></span>
            <span><span>8</span><span>&gt; &amp; {'{'}</span></span>
            <span><span>9</span><span>&nbsp;&nbsp;label: <strong>string</strong>;</span></span>
            <span><span>10</span><span>{'}'};</span></span>
            <span><span>11</span><span /></span>
            <span><span>12</span><span><b>export async function</b> <em>getPhoneById</em>(</span></span>
            <span><span>13</span><span>&nbsp;&nbsp;id: <strong>string</strong>,</span></span>
            <span><span>14</span><span>&nbsp;&nbsp;phones: <em>PhoneRepository</em>,</span></span>
            <span><span>15</span><span>): <em>Promise</em>&lt;<em>PhoneDetails</em> | <strong>null</strong>&gt; {'{'}</span></span>
            <span><span>16</span><span>&nbsp;&nbsp;<b>const</b> phoneId = id.<em>trim</em>();</span></span>
            <span><span>17</span><span>&nbsp;&nbsp;<b>if</b> (!phoneId) <b>return</b> <strong>null</strong>;</span></span>
            <span><span>18</span><span /></span>
            <span><span>19</span><span>&nbsp;&nbsp;<b>const</b> phone = <b>await</b> phones.<em>findById</em>(phoneId);</span></span>
            <span><span>20</span><span>&nbsp;&nbsp;<b>if</b> (!phone || !phone.available) <b>return</b> <strong>null</strong>;</span></span>
            <span><span>21</span><span /></span>
            <span><span>22</span><span>&nbsp;&nbsp;<b>return</b> {'{'}</span></span>
            <span><span>23</span><span>&nbsp;&nbsp;&nbsp;&nbsp;id: phone.id, brand: phone.brand,</span></span>
            <span><span>24</span><span>&nbsp;&nbsp;&nbsp;&nbsp;model: phone.model, storageGb: phone.storageGb,</span></span>
            <span><span>25</span><span>{'    label: `${phone.brand} ${phone.model}`,'}</span></span>
            <span><span>26</span><span>&nbsp;&nbsp;{'}'};</span></span>
            <span><span>27</span><span>{'}'}</span></span>
          </code></pre>
          <div className="mt-auto flex justify-between gap-3 border-t border-border-muted bg-surface-strong px-3 py-[7px] text-overline text-tertiary max-[760px]:px-[9px] max-[760px]:text-micro">
            <span className="flex items-center gap-1.5 text-secondary"><i className="size-1.5 rounded-full bg-positive" /> Clean Architecture</span>
            <span>UTF-8&nbsp; · &nbsp;TypeScript</span>
          </div>
        </div>
      </div>
    </IDE>
  );
}
