# Clean Architecture, en la práctica

Una forma de proteger las reglas importantes del producto para que no dependan de un framework, una base de datos o una interfaz.

## La pregunta que ayuda a decidir

Si mañana cambiamos React, NestJS o MongoDB, ¿las reglas del producto tendrían que cambiar también? Clean Architecture propone mantenerlas en el centro y hacer que los detalles técnicos dependan de ellas.

## Las dependencias apuntan hacia el dominio

La aplicación conoce sus reglas y los puertos que necesita. Los adaptadores conectan esos puertos con herramientas concretas. El flujo de datos puede salir; la dirección de las dependencias del código apunta hacia dentro.

- **Frameworks y herramientas:** React · NestJS · MongoDB
- **Adaptadores:** HTTP · persistencia · presenters
- **Aplicación:** casos de uso y coordinación
- **Dominio:** entidades y reglas del producto

El código exterior puede conocer el interior; el dominio no necesita importar detalles externos.

## Un caso de uso con una función

Por ejemplo, consultar un celular puede depender de un puerto de repositorio. La infraestructura implementa ese contrato; la función de aplicación no necesita saber si los datos vienen de MongoDB, una API o una prueba.

```typescript
type PhoneRepository = {
  findById(id: string): Promise<Phone | null>;
};

export function getPhoneById(phones: PhoneRepository) {
  return async (id: string) => {
    const normalizedId = id.trim();
    if (!normalizedId) return null;

    return phones.findById(normalizedId);
  };
}
```

## Cuándo aporta valor

Es útil cuando las reglas del producto cambian con frecuencia, hay varias integraciones o probar los casos de uso resulta difícil. No exige crear una capa para cada archivo: la estructura debe ayudar a aislar decisiones, no añadir ceremonias.
