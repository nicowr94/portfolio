'use client';

import { useState, type ReactNode } from 'react';

type MarkdownBlock =
  | { content: string; level: number; type: 'heading' }
  | { content: string; type: 'paragraph' }
  | { code: string; language: string; type: 'code' }
  | { items: string[]; type: 'list' };

function parseMarkdown(markdown: string): MarkdownBlock[] {
  const lines = markdown.split(/\r?\n/);
  const blocks: MarkdownBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    const heading = /^(#{1,3})\s+(.+)$/.exec(line);
    if (heading) {
      blocks.push({ content: heading[2], level: heading[1].length, type: 'heading' });
      index += 1;
      continue;
    }

    if (line.startsWith('```')) {
      const language = line.slice(3).trim() || 'text';
      const codeLines: string[] = [];
      index += 1;

      while (index < lines.length && !lines[index].trim().startsWith('```')) {
        codeLines.push(lines[index]);
        index += 1;
      }

      blocks.push({ code: codeLines.join('\n'), language, type: 'code' });
      index += 1;
      continue;
    }

    if (line.startsWith('- ')) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith('- ')) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }
      blocks.push({ items, type: 'list' });
      continue;
    }

    const paragraphLines = [line];
    index += 1;
    while (index < lines.length && lines[index].trim() && !/^(#{1,3})\s|^```|^- /.test(lines[index].trim())) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }
    blocks.push({ content: paragraphLines.join(' '), type: 'paragraph' });
  }

  return blocks;
}

function renderInline(markdown: string): ReactNode[] {
  return markdown.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }

    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

function renderPreviewBlock(block: MarkdownBlock, index: number) {
  if (block.type === 'heading') {
    const Heading = `h${block.level}` as 'h1' | 'h2' | 'h3';
    return <Heading key={index}>{renderInline(block.content)}</Heading>;
  }

  if (block.type === 'code') {
    return <pre className="blog-code" key={index} data-language={block.language}><code>{block.code}</code></pre>;
  }

  if (block.type === 'list') {
    return <ul key={index}>{block.items.map((item) => <li key={item}>{renderInline(item)}</li>)}</ul>;
  }

  return <p key={index}>{renderInline(block.content)}</p>;
}

function renderMarkdownLine(line: string): ReactNode {
  const heading = /^(\s{0,3})(#{1,6})(\s+)(.*)$/.exec(line);
  if (heading) {
    return <><span className="md-heading-marker">{heading[1]}{heading[2]}</span>{heading[3]}<span className="md-heading-text">{renderInlineSource(heading[4])}</span></>;
  }

  const list = /^(\s*)([-*+] |\d+\. )(.*)$/.exec(line);
  if (list) {
    return <>{list[1]}<span className="md-list-marker">{list[2]}</span>{renderInlineSource(list[3])}</>;
  }

  const quote = /^(\s*&gt;|\s*>)(.*)$/.exec(line);
  if (quote) {
    return <><span className="md-quote-marker">{quote[1]}</span>{renderInlineSource(quote[2])}</>;
  }

  return renderInlineSource(line) || '\u00a0';
}

function renderInlineSource(text: string): ReactNode[] {
  const tokenPattern = /(\*\*[^*]+\*\*|__[^_]+__|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

  return text.split(tokenPattern).map((part, index) => {
    if (part.startsWith('**') || part.startsWith('__')) {
      const marker = part.slice(0, 2);
      return <span className="md-strong-token" key={index}><span className="md-inline-marker">{marker}</span>{part.slice(2, -2)}<span className="md-inline-marker">{marker}</span></span>;
    }

    if (part.startsWith('`') && part.endsWith('`')) {
      return <span className="md-inline-code" key={index}>{part}</span>;
    }

    if (part.startsWith('[')) {
      const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
      if (link) {
        return <span className="md-link-token" key={index}><span className="md-inline-marker">[</span>{link[1]}<span className="md-inline-marker">](</span><span className="md-link-url">{link[2]}</span><span className="md-inline-marker">)</span></span>;
      }
    }

    return <span key={index}>{part}</span>;
  });
}

function renderCodeLine(line: string): ReactNode[] {
  const tokenPattern = /(\b(?:type|export|function|const|return|if|async|await|import|from|new|null|true|false)\b|(?:'[^']*'|"[^"]*"|`[^`]*`)|\/\/.*$|\b\d+\b)/g;

  return line.split(tokenPattern).map((part, index) => {
    if (/^(type|export|function|const|return|if|async|await|import|from|new)$/.test(part)) {
      return <span className="md-code-keyword" key={index}>{part}</span>;
    }

    if (/^(null|true|false)$/.test(part)) {
      return <span className="md-code-literal" key={index}>{part}</span>;
    }

    if (/^(?:'[^']*'|"[^"]*"|`[^`]*`)$/.test(part)) {
      return <span className="md-code-string" key={index}>{part}</span>;
    }

    if (part.startsWith('//')) {
      return <span className="md-code-comment" key={index}>{part}</span>;
    }

    if (/^\d+$/.test(part)) {
      return <span className="md-code-number" key={index}>{part}</span>;
    }

    return <span key={index}>{part}</span>;
  });
}

function MarkdownSource({ markdown }: { markdown: string }) {
  const lines = markdown.split(/\r?\n/);
  let insideCodeBlock = false;

  return (
    <pre className="markdown-source" aria-label="Archivo Markdown con sintaxis resaltada">
      <code>
        {lines.map((line, index) => {
          const isFence = /^\s*```/.test(line);
          const codeContent = insideCodeBlock && !isFence;
          const fenceLanguage = isFence ? line.replace(/^\s*```/, '').trim() : '';
          const content = isFence
            ? <><span className="md-fence">```</span>{fenceLanguage && <span className="md-code-language">{fenceLanguage}</span>}</>
            : codeContent
              ? renderCodeLine(line)
              : renderMarkdownLine(line);

          if (isFence) insideCodeBlock = !insideCodeBlock;

          return (
            <span className={`markdown-source-line${codeContent ? ' is-code' : ''}${isFence ? ' is-fence' : ''}`} key={index}>
              <span className="markdown-line-number" aria-hidden="true">{index + 1}</span>
              <span className="markdown-line-content">{content || '\u00a0'}</span>
            </span>
          );
        })}
      </code>
    </pre>
  );
}

export function MarkdownDocument({ markdown }: { markdown: string }) {
  const [view, setView] = useState<'source' | 'preview'>('source');

  return (
    <div className="markdown-document">
      <div className="markdown-view-switch" role="group" aria-label="Vista del artículo">
        <button aria-pressed={view === 'source'} onClick={() => setView('source')} type="button">Markdown</button>
        <button aria-pressed={view === 'preview'} onClick={() => setView('preview')} type="button">Vista previa</button>
      </div>
      {view === 'source'
        ? <MarkdownSource markdown={markdown} />
        : <div className="blog-article">{parseMarkdown(markdown).map(renderPreviewBlock)}</div>}
    </div>
  );
}
