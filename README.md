# More — Desarrollo web y sistemas

Portafolio profesional preparado para desplegarse en Railway. Incluye todos los
textos, proyectos, animaciones, enlaces de WhatsApp y adaptación para escritorio,
notebook, tablet y celular.

## Probar en la computadora

Necesitás Node.js 20 o una versión superior.

```bash
npm install
npm run dev
```

Después abrí `http://localhost:3000`.

## Subir a GitHub

1. Extraé el archivo ZIP.
2. Creá un repositorio nuevo en GitHub.
3. Subí todos los archivos de esta carpeta, sin subir `node_modules` ni `.next`.
4. Confirmá los cambios en la rama principal.

## Publicar en Railway

1. Creá un proyecto nuevo en Railway.
2. Elegí **Deploy from GitHub repo**.
3. Seleccioná el repositorio de este portafolio.
4. Railway detectará la configuración incluida, instalará las dependencias,
   ejecutará `npm run build` y luego `npm run start`.
5. En **Settings > Networking**, elegí **Generate Domain** para obtener la URL.

No hace falta agregar variables de entorno para esta versión.

## Publicar en Render como sitio estático

1. Creá un **Static Site** desde este repositorio.
2. Usá `npm ci && STATIC_EXPORT=true npm run build` como comando de compilación.
3. Usá `out` como directorio de publicación.
4. Conectá la rama `main` para que cada cambio se publique automáticamente.

La variable `STATIC_EXPORT` solo se activa durante la compilación de Render, por
lo que la configuración existente de Railway continúa funcionando.

## Diseño adaptable

La página incluye cortes responsivos para pantallas de hasta 980 px y 680 px,
además de tamaños fluidos. El contenido se reorganiza en tablet y celular, el
menú se simplifica y el botón de WhatsApp permanece accesible.
