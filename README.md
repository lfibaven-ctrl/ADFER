# AdFer Marketing — Landing page

Landing editorial y responsiva para AdFer Marketing, creada con Next.js, React, TypeScript, Tailwind CSS, Framer Motion y Lucide.

## Instalación

1. Instala Node.js 22 y pnpm.
2. Ejecuta `pnpm install`.
3. Copia `.env.example` como `.env.local` y completa la URL pública.
4. Inicia el proyecto con `pnpm dev`.

El contenido comercial editable vive en `data/site-content.ts`: precios, paquetes, servicios, preguntas frecuentes, contactos y caso de éxito.

## Netlify

El repositorio incluye `netlify.toml`. Conecta el repositorio en Netlify; el comando `pnpm build` genera la versión estática en `out`, que es la carpeta que Netlify publica. Configura allí `NEXT_PUBLIC_SITE_URL` y, cuando estén disponibles, los identificadores de GA4, GTM y Meta Pixel.

La configuración utiliza Node 24 —la versión predeterminada actual de Netlify— junto con pnpm 11.9.0. Esto evita el fallo de firmas del Corepack antiguo incluido en Node 22.13.0 y conserva la verificación de integridad.

No subas el ZIP del código directamente al área de despliegue manual: Netlify necesita compilarlo primero. Para despliegue manual, ejecuta `pnpm build` y sube únicamente la carpeta `out`.

## Formulario

La interfaz incluye validación nativa, honeypot, bloqueo de doble envío y estados accesibles. Antes de publicar, conecta el envío a Netlify Forms, una función serverless o el CRM elegido.
