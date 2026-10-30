import { ArrowUpRight } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="mx-auto flex min-h-svh w-[min(1200px,calc(100%-64px))] flex-col justify-end bg-background pt-24 pb-7 text-foreground max-[760px]:w-[min(100%-48px,560px)] max-[760px]:pt-[72px]" id="contact">
      <div className="flex items-center justify-between gap-8 pb-[clamp(44px,8vh,80px)] max-[760px]:items-start max-[760px]:flex-col max-[760px]:gap-6">
        <h2 className="m-0 text-footer leading-[1.02] font-normal tracking-[-.025em] max-[760px]:text-footer-mobile">¿Tienes un reto<br/><em>interesante?</em></h2>
        <a className="group inline-flex items-center gap-3 rounded-lg border border-primary bg-primary py-2 pl-4 pr-1.5 text-body-sm font-semibold text-primary-foreground no-underline transition hover:-translate-y-px hover:border-primary-hover hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring max-[760px]:text-sm" href="https://www.linkedin.com/in/nicolas-wong-ramirez-928a7a210">
          Hablemos en LinkedIn <ArrowUpRight className="size-8 rounded-md bg-primary-foreground p-2 text-primary transition-transform group-hover:translate-x-px group-hover:-translate-y-px" size={16} aria-hidden="true" />
        </a>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-[18px] text-small text-secondary max-[760px]:gap-4">
        <a className="flex items-center gap-3 text-sm text-foreground no-underline" href="#home"><span className="grid size-8 place-items-center rounded-full bg-primary text-xs text-primary-foreground">NW</span><span>nicolaswong<span>.dev</span></span></a>
        <span className="max-[760px]:order-3 max-[760px]:w-full">Hecho con intención en Lima, Perú.</span>
        <div className="flex gap-[18px]"><a className="font-bold text-foreground hover:text-secondary" href="https://www.linkedin.com/in/nicolas-wong-ramirez-928a7a210" aria-label="LinkedIn"><span>in</span></a></div>
      </div>
    </footer>
  );
}
