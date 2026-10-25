import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Nicolás Wong — Senior Full Stack Developer', description: 'Portafolio de Nicolás Wong, Senior Full Stack Developer especializado en React, Node.js, TypeScript y NestJS.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body>{children}</body></html>; }
