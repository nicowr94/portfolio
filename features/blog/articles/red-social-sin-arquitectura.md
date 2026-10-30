# Ejemplo ficticio: una red social sin límites claros

Un proyecto nuevo empieza rápido. Luego crece y cambiar una pantalla o un endpoint obliga a entender reglas, base de datos, notificaciones y respuesta HTTP mezcladas en el mismo sitio.

## El proyecto ficticio

Imaginemos una red social nueva hecha con React en la web y Express sobre Node.js en el servidor. El backend sirve también los archivos compilados de React; para este ejemplo tratamos todo como una sola aplicación monolítica. La organización en un solo despliegue no obliga a mezclar responsabilidades dentro del código: una aplicación monolítica también puede tener módulos y límites internos. [Microsoft Learn, sección “Monolithic applications and containers”](https://learn.microsoft.com/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures#monolithic-applications-and-containers); [Martin Fowler, “Microservices”, párrafo sobre monolitos](https://martinfowler.com/articles/microservices.html).

Por ahora, alguien puede escribir una publicación, guardarla y avisar a sus seguidores. El proyecto va creciendo sin acordar límites claros. Abre las carpetas y archivos para ver una versión simplificada:

El proyecto se divide en dos partes: `client` contiene el formulario y `server` recibe la petición, guarda la publicación y avisa a sus seguidores. Abre `PostForm.jsx` y `posts.js` para seguir el mismo flujo en ambos lados.

:::social-network-explorer

En React, la interfaz se construye con componentes; Express permite asociar rutas HTTP con funciones que atienden las peticiones, y Node.js ejecuta el servidor JavaScript. [React, sección “Components: UI building blocks”](https://react.dev/learn/your-first-component#components-ui-building-blocks); [Express, sección “Routing”](https://expressjs.com/en/guide/routing/); [Node.js, sección “Introduction to Node.js”](https://nodejs.org/learn/getting-started/introduction-to-nodejs).

## ¿Qué se vuelve costoso?

En esta versión, el formulario sabe de la petición HTTP y el endpoint concentra detalles web, reglas del producto, persistencia y notificaciones. Algunos problemas posibles:

- **Cambiar una regla** exige navegar por código que también se ocupa de HTTP y SQL.
- **Cambiar la base de datos** toca el endpoint que contiene el comportamiento del producto.
- **Agregar otra forma de publicar**, como una aplicación móvil, puede llevar a repetir reglas si estas viven pegadas a la ruta.
- **Probar la regla** puede exigir preparar detalles de web y persistencia aunque la pregunta sea solo “¿se acepta este texto?”.
- **Cambiar el formulario** puede mezclar presentación, estado y llamadas HTTP dentro del mismo componente.

Son riesgos del ejemplo, no consecuencias automáticas de React, Express, Node.js o de usar un monolito. Martin Fowler explica que una buena modularidad reduce el código que hay que entender para un cambio pequeño, mientras que con poca modularidad el cambio puede extenderse por varias partes. [Martin Fowler, sección “The Importance of Modularity”](https://martinfowler.com/articles/refactoring-dependencies.html#the-importance-of-modularity). También describe cómo separar presentación, reglas de negocio y acceso a datos permite pensar en cada responsabilidad por separado. [Martin Fowler, sección “Presentation Domain Data Layering”](https://martinfowler.com/bliki/PresentationDomainDataLayering.html#presentation-domain-data-layering).

## El problema no es avanzar rápido

Para una primera versión, poner varias cosas juntas puede parecer el camino más corto. La dificultad aparece cuando el equipo sigue agregando funciones sin decidir qué partes pueden cambiar por separado. Entonces una modificación pequeña empieza a exigir entender más código del necesario. [Martin Fowler, sección “The Importance of Modularity”](https://martinfowler.com/articles/refactoring-dependencies.html#the-importance-of-modularity).

La salida no es crear una carpeta por cada función. Es reconocer qué responsabilidades están mezcladas y poner límites que ayuden a cambiarlas con menos sorpresas.

## El mismo proyecto, otras formas de organizarlo

En el siguiente artículo reorganizamos esta misma operación —publicar una entrada en la red social— usando Clean Architecture, tanto para entender dónde queda la interfaz como para seguir la regla de dependencias del backend. Después podremos comparar el mismo ejemplo con arquitectura hexagonal, por eventos y Clean Architecture + Feature. Cada estructura será una opción para estudiar; no una receta universal.

[Sigue: Clean Architecture con una red social](/blog/clean-architecture).

## Fuentes

- [Microsoft Learn — “Monolithic applications and containers”](https://learn.microsoft.com/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures#monolithic-applications-and-containers)
- [Martin Fowler — “Microservices”](https://martinfowler.com/articles/microservices.html)
- [React — “Components: UI building blocks”](https://react.dev/learn/your-first-component#components-ui-building-blocks)
- [Express — “Routing”](https://expressjs.com/en/guide/routing/)
- [Node.js — “Introduction to Node.js”](https://nodejs.org/learn/getting-started/introduction-to-nodejs)
- [Martin Fowler — “The Importance of Modularity”](https://martinfowler.com/articles/refactoring-dependencies.html#the-importance-of-modularity)
- [Martin Fowler — “Presentation Domain Data Layering”](https://martinfowler.com/bliki/PresentationDomainDataLayering.html#presentation-domain-data-layering)
