export const experience = [
  {
    id: 'about-pichincha', company: 'Banco Pichincha', logo: '/pichincha-logo.png', logoWidth: 120, logoHeight: 120,
    description: 'Servicios financieros · Perú', role: 'Analista de Soluciones Digitales', dates: 'Nov 2019 — Oct 2021',
    summary: 'Creé CREDIAPP como piloto de crédito.',
    highlights: [
      'Diseñé automatización RPA para Cash Financiero con Python y PyAutoGUI.',
      'Desarrollé pilotos de crédito y creé CREDIAPP con stack MERN; fue reconocido como caso de éxito con Microsoft.',
    ],
    skills: 'Python · PyAutoGUI · MongoDB · React · Node.js',
  },
  {
    id: 'about-pragma', company: 'Pragma', logo: '/pragma-logo.png', logoWidth: 180, logoHeight: 95,
    description: 'Consultoría tecnológica · Colombia', role: 'Frontend Developer', dates: 'Nov 2021 — Mar 2022',
    summary: 'Migré la intranet de Comfama para apoyar la experiencia interna de sus equipos.',
    highlights: [
      'Migré la intranet con React y Gatsby, e integré su contenido mediante Contentful y GraphQL.',
      'Trabajé con TypeScript y Azure dentro de un equipo de producto.',
    ],
    skills: 'React · Gatsby · Contentful · GraphQL · TypeScript · Azure',
  },
  {
    id: 'about-outbuild', company: 'Outbuild', logo: '/outbuild-logo.png', logoWidth: 200, logoHeight: 200,
    description: 'Tecnología para la construcción · EE. UU.', role: 'Senior Full Stack Developer', dates: 'Mar 2022 — Presente',
    summary: 'Optimicé el flujo de baseline, creé el Schedule Change Log y desarrollé exportables P6 XML y XER.',
    highlights: [
      'Optimicé el flujo de baseline: el cálculo pasó de ~10 minutos a 6 segundos y eliminó timeouts en proyectos grandes.',
      'Creé el Schedule Change Log para registrar y dar trazabilidad a los cambios en Schedule.',
      'Desarrollé exportables P6 XML y XER, además de exportaciones PDF críticas para nuevos contratos y compatibilidad con Oracle Primavera P6.',
      'Mantengo servicios y APIs REST del producto.',
    ],
    skills: 'React · TypeScript · Node.js · NestJS · MongoDB · BullMQ',
  },
] as const;
