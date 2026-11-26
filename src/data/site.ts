// src/data/site.ts
// ─── Datos de contacto y configuración global del sitio ───────────────────────

export const site = {
  nombre:  "A&I Digital Studio",
  lema:    "Una visión, dos almas. Diseños con propósito.",
  pais:    "Panamá",

  // ─── Contacto ───────────────────────────────────────────────────────────────
  // WhatsApp: contacto ÚNICAMENTE por WhatsApp (no llamadas)
  whatsapp:        "50767331951",
  whatsappNumero:  "+507 6733-1951",         // versión legible para mostrar en pantalla
  whatsappMensaje: "Hola, me gustaría cotizar un proyecto web con A&I Digital Studio.",

  correo:       "aidigitalstudio.pa@gmail.com",
  instagram:    "@aidigitalstudio.pa",
  instagramUrl: "https://www.instagram.com/aidigitalstudio.pa/",

  // URL base del sitio (sin trailing slash) — actualizar con dominio real
  url: "https://aidigitalstudio.com",

  proyectos: [
    { nombre: "VETECHI", estado: "En desarrollo", descripcion: "Plataforma web para clínica veterinaria con agenda de citas, perfil de mascotas y comunicación con el equipo médico.", url: "https://vetechi-landing.pages.dev/es/", tipo: "veterinaria" },
    { nombre: "PMF Tours", estado: "Demostrativo", descripcion: "Sitio web para agencia de turismo en Panamá, pensado para mostrar destinos y facilitar reservas.", url: "https://pmftours.github.io/pmftours/", tipo: "turismo" },
  ],
};

// URL de WhatsApp lista para usar en href (pre-encoded)
export const whatsappUrl =
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMensaje)}`;

// Exportaciones nombradas para uso rápido en componentes
export const {
  correo,
  instagram,
  instagramUrl,
  nombre,
  lema,
  whatsappNumero,
} = site;
