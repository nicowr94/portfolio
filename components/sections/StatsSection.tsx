import { Terminal } from 'lucide-react';

export function StatsSection() {
  return <section className="signal-band"><div className="shell signal-grid"><div><strong>6<span>+</span></strong><small>AÑOS CONSTRUYENDO</small></div><div><strong>4<span>+</span></strong><small>AÑOS EN OUTBUILD</small></div><div><strong>99<span>%</span></strong><small>MENOS TIEMPO EN BASELINES</small></div><div className="signal-note"><Terminal size={16}/><span>Producto en producción<br/>Startups · Equipos globales</span></div></div></section>;
}
