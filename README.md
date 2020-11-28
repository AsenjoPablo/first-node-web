# Ejemplo básico de NodeJS

## ¿Qué es?
Para poder practicar el back-end mediante NodeJS, he creado una página web **muy básica** que contiene una estructura back-end para hacer el routeo de los elementos.

## ¿Cómo lo has montado?
Para la generación de contenidos he aprovechado para practicar con EJS, en lugar de React.

## src/index.js
Aquí está el iniciador del servidor mediante Express y el setup de los módulos y configuraciones.
He empleado un renderizado directo a EJS.
El puerto de inicio será el :3000 una vez se encienda el servidor.

## Routes
En la carpeta Routes encontramos un index.js con los enlaces a las secciones root y contact.

## Views
En la carpeta de vistas están los 'partials', componentes reutilizados como el nav o el footer. También están las dos secciones principales, contact e index en formato HTML.

**No hay una sección about, porque es un enlace directo a root, no apreciable porque hay poco contenido.**

## Otros
He añadido un poco de Bootstrap para hacer los estilos rápidos y sin demasiada complicación. También utilicé Animate.styles para modificar la entrada de elementos.


