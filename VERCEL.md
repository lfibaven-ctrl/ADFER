# Publicar AdFer Marketing en Vercel

## Opción recomendada: GitHub

1. Descomprime el proyecto y sube su contenido a la raíz de un repositorio de GitHub.
2. En Vercel selecciona **Add New → Project**.
3. Conecta GitHub e importa el repositorio.
4. Confirma que el framework detectado sea **Next.js**.
5. Conserva la configuración del proyecto; `vercel.json` ya define instalación, compilación y salida.
6. Agrega `NEXT_PUBLIC_SITE_URL` con el dominio definitivo si ya lo tienes.
7. Selecciona **Deploy**.

Cada cambio posterior enviado a la rama principal generará una nueva publicación automáticamente.

## Opción sin GitHub: Vercel Drop

1. Abre `https://vercel.com/drop` e inicia sesión.
2. Arrastra el ZIP completo del proyecto.
3. Elige el nombre del proyecto y selecciona **Deploy**.
4. Cuando termine, abre la URL asignada por Vercel.

No selecciones manualmente `.next` como carpeta pública. La salida estática correcta es `out` y ya está declarada en `vercel.json`.
