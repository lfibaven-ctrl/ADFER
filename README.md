# AdFer Marketing — sitio estático + Supabase

Este proyecto no utiliza Node, npm, pnpm, React ni procesos de compilación. Contiene HTML, CSS y JavaScript listos para publicarse.

## Conectar Supabase

1. Crea un proyecto en Supabase.
2. Abre **SQL Editor**, pega el contenido de `supabase.sql` y ejecútalo.
3. Ve a **Project Settings → API**.
4. Copia **Project URL** y **anon public key**.
5. Pégalos en `config.js`. La clave anon es pública por diseño; nunca pegues `service_role`.
6. Prueba el formulario y revisa los registros en **Table Editor → prospectos**.

## Publicar sin Node

### Vercel Drop

Arrastra la carpeta completa en `https://vercel.com/drop`. No configures comandos de instalación ni compilación.

### Netlify Drop

Arrastra la carpeta completa en `https://app.netlify.com/drop`. El archivo `index.html` debe quedar en la raíz.

## Seguridad

La tabla usa Row Level Security: los visitantes anónimos solo pueden insertar prospectos. No pueden consultar, modificar ni borrar registros.
