# A&I Digital Studio — Sitio web

Sitio web de A&I Digital Studio: estudio de desarrollo web y presencia digital para pequeños negocios en Panamá.

> **URL de producción:** Cloudflare Pages → `https://aidigitalstudio-web.pages.dev`
> (actualizar cuando se configure dominio propio)

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | [Astro](https://astro.build) v7 (SSG estático) |
| Estilos | Tailwind CSS v4 (`@tailwindcss/vite`) + clases semánticas en `global.css` |
| Tipografías | Montserrat Variable · Open Sans Variable (`@fontsource-variable`) |
| Sitemap | `@astrojs/sitemap` |
| Despliegue | Cloudflare Pages (build automático desde `main`) |

---

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Vista previa del build
npm run preview
```

---

## Qué archivos editar

### Cambiar datos de contacto o proyectos

**`src/data/site.ts`** es la fuente única de verdad para:
- Número de WhatsApp y URL de contacto
- Correo electrónico
- Instagram
- URL base del sitio
- Información de cada proyecto (nombre, estado, situación, solución, resultado, imagen, URL)

> Nunca escribas datos de contacto o URLs de proyecto directamente en los componentes.

### Cambiar el contenido de un proyecto

Edita el array `proyectos` en `src/data/site.ts`. Cada objeto acepta:

```ts
{
  nombre: string,       // Nombre del proyecto
  estado: string,       // "En desarrollo" | "Demostrativo" | "Publicado"
  situacion: string,    // Contexto del cliente
  solucion: string,     // Qué se hizo
  resultado: string,    // Resultado real obtenido
  imagen: string,       // Ruta desde /public, ej: "/images/proyectos/nombre.png"
  url: string,          // URL del proyecto publicado
  tipo: string,         // Clave visual: "veterinaria" | "turismo" | etc.
}
```

Las imágenes deben colocarse en `public/images/proyectos/`.

### Cambiar secciones del sitio

Cada sección es un componente en `src/components/`:

| Sección | Archivo |
|---|---|
| Header fijo | `Header.astro` |
| Hero | `Hero.astro` |
| El estudio | `Nosotras.astro` |
| Servicios | `Servicios.astro` |
| Proceso | `Proceso.astro` |
| Proyectos | `Proyectos.astro` |
| ¿Por qué A&I? | `PorQueAI.astro` |
| FAQ + Contacto | `Contacto.astro` |
| Pie de página | `Footer.astro` |
| Botón WhatsApp flotante | `BotonWhatsApp.astro` |

### Cambiar colores o tipografías

Edita los tokens en `src/styles/global.css` dentro del bloque `@theme { }`.
Paleta oficial: Turquesa `#43BAD0` · Naranja `#EC5D16` · Gris carbón `#2C3E50` · Blanco `#FFFFFF`.

---

## Despliegue en Cloudflare Pages

El sitio se despliega automáticamente en cada push a `main`.

Configuración del proyecto en Cloudflare Pages:
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node version:** 18 o superior

Los headers de seguridad se aplican mediante `public/_headers` (leído automáticamente por Cloudflare Pages).

---

## Política de privacidad

El borrador está en `src/pages/politica-de-privacidad.astro`.
Revísalo antes de publicar; está marcado con un badge "Borrador".

---

## Notas de desarrollo

- **No instalar nuevas librerías** sin actualizar este README.
- **No usar clases Tailwind arbitrarias** — solo las clases semánticas definidas en `global.css`.
- **Naranja solo en botones de acción** (`btn-naranja`).
- Todos los `target="_blank"` llevan `rel="noopener noreferrer"`.
- Las imágenes usan `loading="lazy"` y `decoding="async"` con `width`/`height` declarados.
