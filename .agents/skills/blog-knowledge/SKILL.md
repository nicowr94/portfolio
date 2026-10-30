---
name: blog-knowledge
description: Investiga, explica y coescribe artículos para el blog técnico de este portafolio, manteniendo la voz del autor y respaldando cada afirmación factual con fuentes de Internet y su sección exacta.
---

# Blog técnico del portafolio

Usa esta skill al proponer, investigar, redactar, corregir o actualizar artículos del blog de este portafolio sobre conceptos, buenas prácticas, arquitectura o preguntas de ingeniería.

## Regla de oro

Responde solo con base en información comprobable en Internet. No presentes como hecho algo que no hayas verificado en una fuente. No inventes datos, citas, comportamientos, ejemplos presentados como reales ni referencias. Si no puedes verificar una respuesta, dilo literalmente: **«No lo sé»**. Para cada afirmación factual, proporciona la fuente y el nombre exacto de la sección que la respalda.

Esta regla también aplica a las respuestas de investigación antes de escribir el artículo. Busca en Internet durante la tarea; no uses solo conocimiento recordado. Prefiere fuentes primarias —documentación oficial, estándares, RFC, artículos de investigación o material de los autores— y recurre a fuentes secundarias fiables cuando ayuden a explicar o contrastar. Comprueba que cada enlace abre la fuente citada y que la sección contiene realmente el respaldo.

## Flujo de trabajo

1. **Aterriza la duda.** Identifica qué quiere entender el autor y qué parte le resulta confusa. Si falta una decisión que cambia sustancialmente el contenido, pregunta antes de redactar; si no, continúa con una suposición explícita y fácil de corregir.
2. **Investiga la pregunta concreta.** Divide el tema en afirmaciones comprobables. Verifica cada una en fuentes web actuales y apropiadas al tema. En temas donde las versiones importan, registra la versión o fecha consultada.
3. **Separa hechos y explicación.** Distingue lo que dice la fuente de la explicación en lenguaje cotidiano, los ejemplos hipotéticos y las opiniones del autor. No conviertas una analogía o recomendación en una propiedad universal del concepto.
4. **Coescribe en la voz del autor.** Ayuda al autor a explicar la idea con sus palabras. Cuando sea útil, pide su interpretación primero; conserva sus expresiones distintivas y corrige solo lo necesario para que sean claras y precisas. Si propones una explicación desde cero, preséntala como borrador para que el autor la adapte, no como algo que él ya dijo.
5. **Usa ejemplos sencillos.** Incluye ejemplos pequeños, cotidianos o deliberadamente burdos si aclaran la idea. Señálalos como simplificaciones o escenarios hipotéticos cuando corresponda. No atribuyas un ejemplo inventado a una empresa, persona, proyecto o fuente real.
6. **Comprueba el borrador.** Revisa que cada afirmación factual tenga respaldo, que las analogías no distorsionen el concepto y que las fuentes citadas respalden las frases cercanas. Si las fuentes discrepan, explica la diferencia y su contexto en vez de esconderla.
7. **Entrega la pieza con referencias precisas.** Mantén el artículo en español y en Markdown, siguiendo el estilo existente cuando encaje. Cuando guardes o actualices un artículo, explica brevemente qué cambió y señala sus fuentes. No publiques ni despliegues el sitio como parte de la redacción.

## Citas y exactitud

- Coloca una cita enlazada junto a la afirmación que respalda y agrega el nombre exacto de la sección, por ejemplo: `[Documentación oficial — “Retries”](https://...)`.
- Si la fuente es un PDF o libro sin anclas navegables, indica capítulo, sección y página cuando esté disponible. Si no puedes localizar una sección exacta que respalde la afirmación, busca otra fuente o reconoce que no lo sabes.
- Una lista general de enlaces al final no reemplaza las citas junto a las afirmaciones. La sección de fuentes puede repetirlas de forma ordenada si facilita la lectura.
- No uses snippets del buscador como evidencia; abre y revisa la fuente original.
- Atribuye a la fuente las definiciones, cifras, límites, mecanismos y recomendaciones. Marca como opinión cualquier valoración propia o del autor.
- Si la evidencia disponible no resuelve una pregunta, escribe «No lo sé» para esa parte y explica qué dato falta, sin rellenar el vacío con una conjetura.

## Forma del artículo

No fuerces una plantilla rígida. Como guía, un artículo puede incluir:

- una pregunta o situación que presenta la duda;
- una explicación corta y cotidiana, en palabras del autor;
- un ejemplo sencillo, aclarando si es hipotético o simplificado;
- cuándo sirve, sus límites o qué decisión ayuda a tomar, siempre respaldado si es factual;
- las fuentes enlazadas con el título de la sección exacta.

Conserva el formato Markdown que ya utiliza `features/blog/articles/`. Incluye código solo si ayuda a responder la duda, y respalda con documentación la semántica de APIs o herramientas mencionadas.
