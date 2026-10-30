# Clean Architecture con una red social

Una forma de separar las reglas de publicar una entrada de los detalles de la interfaz React, HTTP, la base de datos y las notificaciones.

## La idea en una frase

La regla que manda es sencilla: el código de las reglas del negocio no debe depender de los detalles de afuera, como el framework web o la base de datos. En Clean Architecture, las dependencias del código apuntan hacia las reglas centrales, no al revés. [Robert C. Martin, sección “The Dependency Rule”](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html#the-dependency-rule).

**¿Se aplica solo al backend? No.** La interfaz también aparece como una parte exterior de Clean Architecture: los controladores, presentadores y vistas adaptan la UI para comunicarse con los casos de uso. La idea puede aplicarse en el frontend para separar componentes React de los flujos propios de la interfaz y de sus llamadas HTTP. No significa que cada pantalla necesite cuatro capas ni que haya que duplicar en React las reglas que el backend debe hacer cumplir. [Robert C. Martin, secciones “Interface Adapters” y “Use Cases”](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html#interface-adapters); [Microsoft Learn, sección “Clean architecture”](https://learn.microsoft.com/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures#clean-architecture).

Imaginemos la misma red social ficticia del artículo anterior: una aplicación monolítica hecha con React en el frontend y Express sobre Node.js en el backend. El servidor Express entrega la interfaz compilada y atiende la API; para este ejemplo ambas partes se construyen y despliegan como una sola aplicación. El ejemplo es inventado para comparar formas de organizar el mismo proyecto. [Microsoft Learn, sección “Monolithic applications and containers”](https://learn.microsoft.com/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures#monolithic-applications-and-containers).

## Una estructura posible

Clean Architecture no exige que los proyectos tengan exactamente cuatro carpetas. Martin describe los círculos como esquemáticos: pueden ser más o menos, mientras se mantenga la regla de dependencias hacia adentro. [Robert C. Martin, sección “Only Four Circles?”](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html#only-four-circles).

Esta es una manera posible de reflejar esas responsabilidades en carpetas. Los nombres son una decisión del proyecto, no una estructura oficial:

```text
red-social/
└── src/
    ├── client/                         ← React, se compila a archivos estáticos
    │   └── src/
    │       ├── presentation/posts/PostForm.tsx
    │       ├── application/posts/SubmitPost.ts
    │       └── adapters/http/HttpPostsGateway.ts
    └── server/                         ← Express corre en Node.js
        └── src/
            ├── domain/posts/Post.ts
            ├── application/posts/
            │   ├── PublishPost.ts
            │   └── ports/
            │       ├── PostRepository.ts
            │       └── FollowerNotifier.ts
            ├── adapters/http/PublishPostController.ts
            ├── adapters/persistence/SqlPostRepository.ts
            ├── infrastructure/database.ts
            ├── infrastructure/notifications.ts
            └── server.ts               ← conecta API y archivos de React
```

- `client/presentation`: muestra la pantalla y recoge la interacción.
- `client/application`: coordina el flujo de interfaz para enviar una publicación.
- `client/adapters/http`: convierte ese flujo en una petición a la API.
- `server/domain` y `server/application`: mantienen las reglas del negocio y el caso de uso que las aplica.
- `server/adapters` e `infrastructure`: convierten HTTP y SQL hacia los contratos internos y conectan las herramientas concretas.

Es una posible organización para estudiar el ejemplo, no una estructura obligatoria. Una pantalla sencilla puede llamar directamente a un adaptador si separar un caso de uso de frontend no aporta claridad. La parte importante es que los componentes React no tengan que cargar con reglas, transporte HTTP y persistencia a la vez, y que el caso de uso del servidor no conozca React ni Express. La documentación de Clean Architecture coloca MVC dentro de adaptadores y mantiene los casos de uso aislados de la UI. [Robert C. Martin, secciones “Interface Adapters” y “Use Cases”](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html#interface-adapters).

Es una traducción práctica de las áreas descritas por Clean Architecture —entidades, casos de uso, adaptadores y frameworks—. No son las únicas etiquetas posibles. Martin también señala que las capas pueden mapearse a funciones, archivos, paquetes o namespaces según el lenguaje y el tamaño del programa. [Robert C. Martin, secciones “The Clean Architecture” y “Only Four Circles?”](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html#only-four-circles); [Martin Fowler, “Presentation Domain Data Layering”](https://martinfowler.com/bliki/PresentationDomainDataLayering.html#presentation-domain-data-layering).

## El caso de uso no sabe de SQL

En el backend, el caso de uso recibe contratos; no importa el controlador Express ni el cliente de base de datos:

```typescript
type PostRepository = {
  save(post: { authorId: string; text: string }): Promise<void>;
};

type FollowerNotifier = {
  notifyAboutNewPost(authorId: string, text: string): Promise<void>;
};

export function publishPost(
  posts: PostRepository,
  notifier: FollowerNotifier,
) {
  return async (authorId: string, rawText: string) => {
    const text = rawText.trim();
    if (!text) throw new Error('La publicación no puede estar vacía');

    await posts.save({ authorId, text });
    await notifier.notifyAboutNewPost(authorId, text);
  };
}
```

La regla de “no publicar texto vacío” es parte del ejemplo ficticio. `PostRepository` y `FollowerNotifier` son contratos definidos hacia el interior; un adaptador externo implementa cada uno con la base de datos o el servicio de notificaciones que el proyecto elija. La regla de dependencias hacia adentro y el uso de interfaces para cruzar límites se describen en [“The Dependency Rule” y “Crossing boundaries”](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html#crossing-boundaries).

En React, se puede separar el formulario del modo de enviar la publicación. Este caso de uso del frontend solo coordina la interacción con el backend; la validación de negocio que debe proteger los datos sigue en el backend. La validación del navegador puede dar feedback rápido, pero OWASP recomienda validar también en el servidor porque las comprobaciones del cliente se pueden omitir. [OWASP, sección “Common Pitfalls”](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html#common-pitfalls).

```typescript
type PostsGateway = {
  publish(text: string): Promise<void>;
};

export function submitPost(posts: PostsGateway) {
  return async (rawText: string) => {
    await posts.publish(rawText.trim());
  };
}
```

El componente React presenta el formulario y llama a `submitPost`; `HttpPostsGateway` implementa `PostsGateway` usando `fetch`. Esta separación es una decisión didáctica para el ejemplo. La documentación de Martin describe desacoplar la UI de las reglas de negocio pasando estructuras sencillas entre ambas. [Robert C. Martin, sección “Not Rocket Science”](https://blog.cleancoder.com/uncle-bob/2011/11/22/Clean-Architecture.html#not-rocket-science).

## Cómo se conectan las piezas

El controlador Express recibe la petición HTTP y llama al caso de uso. El repositorio SQL implementa el contrato que el caso de uso necesita. En el frontend, el formulario llama al flujo de interfaz y el adaptador HTTP llama a la API. Así, el caso de uso del backend no necesita conocer SQL ni Express, y el formulario no necesita construir la petición HTTP por sí mismo. La dirección de ejecución y la dirección de dependencias no tienen que ser la misma. [Robert C. Martin, secciones “Interface Adapters” y “Crossing boundaries”](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html#crossing-boundaries).

```text
Dependencias del código:
PublishPost ─────→ PostRepository ←──── SqlPostRepository
                  (contrato interior)

Ejecución de la petición:
React: Formulario → SubmitPost → HttpPostsGateway → API Express
Backend: API Express → controlador → PublishPost → SqlPostRepository → base de datos
```

La carpeta ayuda a encontrar cada pieza, pero el nombre de la carpeta por sí solo no hace cumplir la regla. Hay que cuidar también qué importa cada archivo: la regla se refiere a dependencias del código, no a nombres de directorios. [Robert C. Martin, sección “The Dependency Rule”](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html#the-dependency-rule).

## ¿Cuándo ayuda separar así?

La organización por módulos puede reducir cuánto código necesitamos entender para un cambio pequeño, aunque decidir buenos límites no siempre es fácil. [Martin Fowler, “The Importance of Modularity”, en “Refactoring Module Dependencies”](https://martinfowler.com/articles/refactoring-dependencies.html#the-importance-of-modularity).

No hay que crear una carpeta por cada función. Si la estructura añade más pasos que claridad, no está ayudando. El mismo ejemplo de red social aparecerá en los próximos artículos para comparar Clean Architecture con arquitectura hexagonal, por eventos y Clean Architecture organizada por feature.

[Volver al ejemplo sin límites claros](/blog/red-social-sin-arquitectura).

## Fuentes

- [Robert C. Martin — “The Dependency Rule”](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html#the-dependency-rule)
- [Robert C. Martin — “Use Cases”](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html#use-cases)
- [Robert C. Martin — “Interface Adapters”](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html#interface-adapters)
- [Robert C. Martin — “Only Four Circles?”](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html#only-four-circles)
- [Robert C. Martin — “Crossing boundaries”](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html#crossing-boundaries)
- [Robert C. Martin — “Not Rocket Science”](https://blog.cleancoder.com/uncle-bob/2011/11/22/Clean-Architecture.html#not-rocket-science)
- [Microsoft Learn — “Clean architecture”](https://learn.microsoft.com/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures#clean-architecture)
- [Microsoft Learn — “Monolithic applications and containers”](https://learn.microsoft.com/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures#monolithic-applications-and-containers)
- [OWASP — “Common Pitfalls”](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html#common-pitfalls)
- [Martin Fowler — “Presentation Domain Data Layering”](https://martinfowler.com/bliki/PresentationDomainDataLayering.html#presentation-domain-data-layering)
- [Martin Fowler — “The Importance of Modularity”](https://martinfowler.com/articles/refactoring-dependencies.html#the-importance-of-modularity)
