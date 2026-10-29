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
    <IDE ariaLabel="Ejemplo de código con Clean Architecture para celulares" className="clean-editor" mode="TypeScript" projectName="phone-platform">
      <div className="clean-editor-workspace">
        <nav className="clean-editor-files" aria-label="Estructura de archivos">
          <p className="clean-editor-section-label">EXPLORER</p>
          <p className="clean-editor-root"><ChevronDown size={12} /> SRC</p>
          <ul>
            {architectureFiles.map((file) => {
              const isFolder = file.kind === 'folder' || file.kind === 'folder-open';

              return (
                <li
                  className={`clean-editor-file${file.kind === 'active-file' ? ' is-active' : ''}`}
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

        <div className="clean-editor-main">
          <div className="clean-editor-tab">
            <FileCode2 size={14} />
            <span>get-phone-by-id.ts</span>
            <i aria-hidden="true" />
          </div>
          <div className="clean-editor-breadcrumb">src&nbsp; / &nbsp;application&nbsp; / &nbsp;use-cases&nbsp; / &nbsp;get-phone-by-id.ts</div>
          <pre className="clean-editor-code" aria-label="Caso de uso para consultar un celular"><code>
            <span className="code-line"><span className="code-number">1</span><span><b>import type</b> {'{'} <em>Phone</em> {'}'}</span></span>
            <span className="code-line"><span className="code-number">2</span><span>&nbsp;&nbsp;<b>from</b> <strong>&apos;@/domain/entities/phone&apos;</strong>;</span></span>
            <span className="code-line"><span className="code-number">3</span><span><b>import type</b> {'{'} <em>PhoneRepository</em> {'}'}</span></span>
            <span className="code-line"><span className="code-number">4</span><span>&nbsp;&nbsp;<b>from</b> <strong>&apos;@/domain/ports/phone-repository&apos;</strong>;</span></span>
            <span className="code-line"><span className="code-number">5</span><span /></span>
            <span className="code-line"><span className="code-number">6</span><span><b>type</b> <em>PhoneDetails</em> = <em>Pick</em>&lt;<em>Phone</em>,</span></span>
            <span className="code-line"><span className="code-number">7</span><span>&nbsp;&nbsp;<strong>&apos;id&apos;</strong> | <strong>&apos;brand&apos;</strong> | <strong>&apos;model&apos;</strong> | <strong>&apos;storageGb&apos;</strong></span></span>
            <span className="code-line"><span className="code-number">8</span><span>&gt; &amp; {'{'}</span></span>
            <span className="code-line"><span className="code-number">9</span><span>&nbsp;&nbsp;label: <strong>string</strong>;</span></span>
            <span className="code-line"><span className="code-number">10</span><span>{'}'};</span></span>
            <span className="code-line"><span className="code-number">11</span><span /></span>
            <span className="code-line"><span className="code-number">12</span><span><b>export async function</b> <em>getPhoneById</em>(</span></span>
            <span className="code-line"><span className="code-number">13</span><span>&nbsp;&nbsp;id: <strong>string</strong>,</span></span>
            <span className="code-line"><span className="code-number">14</span><span>&nbsp;&nbsp;phones: <em>PhoneRepository</em>,</span></span>
            <span className="code-line"><span className="code-number">15</span><span>): <em>Promise</em>&lt;<em>PhoneDetails</em> | <strong>null</strong>&gt; {'{'}</span></span>
            <span className="code-line"><span className="code-number">16</span><span>&nbsp;&nbsp;<b>const</b> phoneId = id.<em>trim</em>();</span></span>
            <span className="code-line"><span className="code-number">17</span><span>&nbsp;&nbsp;<b>if</b> (!phoneId) <b>return</b> <strong>null</strong>;</span></span>
            <span className="code-line"><span className="code-number">18</span><span /></span>
            <span className="code-line"><span className="code-number">19</span><span>&nbsp;&nbsp;<b>const</b> phone = <b>await</b> phones.<em>findById</em>(phoneId);</span></span>
            <span className="code-line"><span className="code-number">20</span><span>&nbsp;&nbsp;<b>if</b> (!phone || !phone.available) <b>return</b> <strong>null</strong>;</span></span>
            <span className="code-line"><span className="code-number">21</span><span /></span>
            <span className="code-line"><span className="code-number">22</span><span>&nbsp;&nbsp;<b>return</b> {'{'}</span></span>
            <span className="code-line"><span className="code-number">23</span><span>&nbsp;&nbsp;&nbsp;&nbsp;id: phone.id, brand: phone.brand,</span></span>
            <span className="code-line"><span className="code-number">24</span><span>&nbsp;&nbsp;&nbsp;&nbsp;model: phone.model, storageGb: phone.storageGb,</span></span>
            <span className="code-line"><span className="code-number">25</span><span>{'    label: `${phone.brand} ${phone.model}`,'}</span></span>
            <span className="code-line"><span className="code-number">26</span><span>&nbsp;&nbsp;{'}'};</span></span>
            <span className="code-line"><span className="code-number">27</span><span>{'}'}</span></span>
          </code></pre>
          <div className="clean-editor-status">
            <span><i /> Clean Architecture</span>
            <span>UTF-8&nbsp; · &nbsp;TypeScript</span>
          </div>
        </div>
      </div>
    </IDE>
  );
}
