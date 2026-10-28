import { ChevronDown, FileText, FolderOpen } from 'lucide-react';
import { SiteHeader } from './SiteHeader';

const noteFolders = [
  {
    name: 'Arquitectura',
    files: [
      { name: 'clean-architecture.md', active: true },
      { name: 'arquitectura-hexagonal.md', active: false },
    ],
  },
  {
    name: 'Conceptos',
    files: [{ name: 'idempotencia.md', active: false }],
  },
  {
    name: 'Casos',
    files: [{ name: 'muchos-usuarios.md', active: false }],
  },
  {
    name: 'Preguntas',
    files: [
      { name: 'evitar-condiciones-de-carrera.md', active: false },
      { name: 'cuando-usar-colas.md', active: false },
    ],
  },
] as const;

export function BlogWorkspace() {
  return (
    <>
      <SiteHeader currentPage="blog" />
      <main className="blog-page">
        <section className="blog-workspace shell" aria-label="Notas de ingeniería">
          <div className="blog-ide-titlebar">
            <div className="clean-editor-window-dots" aria-hidden="true"><span /><span /><span /></div>
            <span className="blog-ide-project">engineering-notes</span>
            <span className="blog-ide-mode">MARKDOWN</span>
          </div>

          <div className="blog-ide-body">
            <aside className="blog-explorer" aria-label="Temas y preguntas">
              <div className="blog-explorer-heading">
                <span>EXPLORER</span>
                <span>NOTAS</span>
              </div>
              <p className="blog-explorer-root"><ChevronDown size={13} /> KNOWLEDGE-BASE</p>
              <ul className="blog-topic-tree">
                {noteFolders.map((folder) => (
                  <li className="blog-topic-folder" key={folder.name}>
                    <div className="blog-folder-name"><ChevronDown size={13} /><FolderOpen size={14} /><span>{folder.name}</span></div>
                    <ul>
                      {folder.files.map((file) => (
                        <li className={`blog-topic-file${file.active ? ' is-active' : ''}`} key={file.name} aria-current={file.active ? 'page' : undefined}>
                          <FileText size={14} />
                          <span>{file.name}</span>
                          {!file.active && <span className="blog-file-status">BORRADOR</span>}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <p className="blog-explorer-note">Ideas en desarrollo</p>
            </aside>

            <article className="blog-document">
              <div className="blog-file-tab"><FileText size={14} /><span>clean-architecture.md</span><i aria-hidden="true" /></div>
              <div className="blog-breadcrumb">knowledge-base&nbsp; / &nbsp;arquitectura&nbsp; / &nbsp;clean-architecture.md</div>
              <div className="blog-article-scroll">
                <div className="blog-article">
                  <div className="blog-article-meta"><span>ARQUITECTURA DE SOFTWARE</span><span>LECTURA · 6 MIN</span></div>
                  <h1>Clean Architecture, en la práctica</h1>
                  <p className="blog-article-lede">Una forma de proteger las reglas importantes del producto para que no dependan de un framework, una base de datos o una interfaz.</p>

                  <section className="blog-article-section">
                    <h2>La pregunta que ayuda a decidir</h2>
                    <p>Si mañana cambiamos React, NestJS o MongoDB, ¿las reglas del producto tendrían que cambiar también? Clean Architecture propone mantenerlas en el centro y hacer que los detalles técnicos dependan de ellas.</p>
                  </section>

                  <section className="blog-article-section">
                    <h2>Las dependencias apuntan hacia el dominio</h2>
                    <p>La aplicación conoce sus reglas y los puertos que necesita. Los adaptadores conectan esos puertos con herramientas concretas. El flujo de datos puede salir; la dirección de las dependencias del código apunta hacia dentro.</p>
                    <div className="blog-layer-map" aria-label="Capas desde los frameworks hacia el dominio">
                      <div><span>01</span><strong>Frameworks y herramientas</strong><small>React · NestJS · MongoDB</small></div>
                      <div><span>02</span><strong>Adaptadores</strong><small>HTTP · persistencia · presenters</small></div>
                      <div><span>03</span><strong>Aplicación</strong><small>Casos de uso y coordinación</small></div>
                      <div><span>04</span><strong>Dominio</strong><small>Entidades y reglas del producto</small></div>
                    </div>
                    <p className="blog-layer-caption">El código exterior puede conocer el interior; el dominio no necesita importar detalles externos.</p>
                  </section>

                  <section className="blog-article-section">
                    <h2>Un caso de uso con una función</h2>
                    <p>Por ejemplo, consultar un celular puede depender de un puerto de repositorio. La infraestructura implementa ese contrato; la función de aplicación no necesita saber si los datos vienen de MongoDB, una API o una prueba.</p>
                    <pre className="blog-code"><code>{`import type { Phone } from '../domain/entities/phone';

type PhoneRepository = {
  findById(id: string): Promise<Phone | null>;
};

export function getPhoneById(phones: PhoneRepository) {
  return async (id: string) => {
    const normalizedId = id.trim();
    if (!normalizedId) return null;

    return phones.findById(normalizedId);
  };
}`}</code></pre>
                  </section>

                  <section className="blog-article-section">
                    <h2>Cuándo aporta valor</h2>
                    <p>Es útil cuando las reglas del producto cambian con frecuencia, hay varias integraciones o probar los casos de uso resulta difícil. No exige crear una capa para cada archivo: la estructura debe ayudar a aislar decisiones, no añadir ceremonias.</p>
                  </section>

                  <div className="blog-article-footer"><span>PRÓXIMA NOTA</span><span>Arquitectura hexagonal</span></div>
                </div>
              </div>
              <div className="blog-statusbar"><span><i /> Markdown</span><span>Español&nbsp; · &nbsp;UTF-8</span></div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
