// src/data/site.ts
// ─── Datos de contacto y configuración global del sitio ───────────────────────
// NOTA: Reemplaza los valores [PLACEHOLDER] con la información real antes de publicar.

export const site = {
  nombre:  "A&I Digital Studio",
  lema:    "Una visión, dos almas. Diseños con propósito.",
  pais:    "Panamá",

  // Contacto
  whatsapp:         "+507[NÚMERO]",        // ← reemplazar con número real
  whatsappMensaje:  "Hola, me gustaría cotizar un proyecto web con A&I Digital Studio.",
  correo:           "hola@aidigitalstudio.com", // ← reemplazar si es distinto
  instagram:        "@aidigitalstudio",         // ← reemplazar si es distinto
  instagramUrl:     "https://instagram.com/aidigitalstudio", // ← actualizar

  // URL base (sin trailing slash)
  url: "https://aidigitalstudio.com", // ← actualizar con dominio real
};

// URL de WhatsApp lista para usar en href
export const whatsappUrl = `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(site.whatsappMensaje)}`;

// Exportaciones nombradas para uso rápido en componentes
export const { correo, instagram, instagramUrl, nombre, lema } = site;

