import Link from 'next/link';
import type { ReactNode } from 'react';
import { SocialNetworkProjectExplorer } from './SocialNetworkProjectExplorer/SocialNetworkProjectExplorer';

type MarkdownBlock =
  | { content: string; level: number; type: 'heading' }
  | { content: string; type: 'paragraph' }
  | { code: string; language: string; type: 'code' }
  | { items: string[]; type: 'list' }
  | { type: 'social-network-explorer' };

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

    if (line === ':::social-network-explorer') {
      blocks.push({ type: 'social-network-explorer' });
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
    while (
      index < lines.length
      && lines[index].trim()
      && !/^(#{1,3})\s|^```|^- |^:::social-network-explorer$/.test(lines[index].trim())
    ) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }
    blocks.push({ content: paragraphLines.join(' '), type: 'paragraph' });
  }

  return blocks;
}

function renderInline(markdown: string): ReactNode[] {
  const tokenPattern = /(\[[^\]]+\]\([^)]+\)|`[^`]+`|\*\*[^*]+\*\*)/g;

  return markdown.split(tokenPattern).map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code className="rounded border border-border bg-surface-strong px-[5px] py-0.5 font-mono text-small text-syntax-keyword" key={index}>{part.slice(1, -1)}</code>;
    }

    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong className="font-semibold text-foreground" key={index}>{part.slice(2, -2)}</strong>;
    }

    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const [, label, href] = link;
      return href.startsWith('/') ? (
        <Link className="text-ring underline decoration-border underline-offset-[3px] hover:text-foreground hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring" href={href} key={index}>{label}</Link>
      ) : (
        <a className="text-ring underline decoration-border underline-offset-[3px] hover:text-foreground hover:decoration-foreground focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring" href={href} key={index} rel="noreferrer" target="_blank">{label}</a>
      );
    }

    return part;
  });
}

function renderBlock(block: MarkdownBlock, index: number) {
  if (block.type === 'social-network-explorer') {
    return <SocialNetworkProjectExplorer key={index} />;
  }

  if (block.type === 'heading') {
    const Heading = `h${block.level}` as 'h1' | 'h2' | 'h3';
    const headingClasses = block.level === 1
      ? 'mb-4 mt-0 max-w-[20ch] text-article font-normal leading-[1.08] tracking-[-.03em] text-foreground max-[680px]:text-section-company-mobile'
      : block.level === 2
        ? 'mt-[38px] mb-3 text-title-xl font-medium leading-[1.2] tracking-[-.02em] text-foreground max-[680px]:text-title-md'
        : 'mt-[38px] mb-3 text-lg font-medium leading-[1.2] tracking-[-.02em] text-foreground';
    return <Heading className={headingClasses} key={index}>{renderInline(block.content)}</Heading>;
  }

  if (block.type === 'code') {
    return <pre className="my-[18px] mb-6 max-w-full overflow-auto rounded-lg border border-border bg-surface px-5 py-[18px] font-mono text-xs leading-[1.75] text-code [tab-size:2] max-[680px]:px-3.5 max-[680px]:text-meta" data-language={block.language} key={index}><code className="font-[inherit]">{block.code}</code></pre>;
  }

  if (block.type === 'list') {
    return <ul className="my-[14px] mb-[22px] grid list-disc gap-2 pl-[21px] marker:text-ring" key={index}>{block.items.map((item, itemIndex) => <li className="max-w-[70ch] text-body-sm leading-[1.8] text-secondary max-[680px]:text-sm" key={`${item}-${itemIndex}`}>{renderInline(item)}</li>)}</ul>;
  }

  return <p className="mb-[18px] mt-0 max-w-[70ch] text-body-sm leading-[1.8] text-secondary max-[680px]:text-sm [&_code]:rounded [&_code]:border [&_code]:border-border [&_code]:bg-surface-strong [&_code]:px-[5px] [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-small [&_code]:text-syntax-keyword" key={index}>{renderInline(block.content)}</p>;
}

export function MarkdownDocument({ markdown }: { markdown: string }) {
  return <div className="max-w-[74ch] text-secondary [&>h1+p]:text-body-lg [&>h1+p]:leading-[1.7] max-[680px]:[&>h1+p]:text-base">{parseMarkdown(markdown).map(renderBlock)}</div>;
}
