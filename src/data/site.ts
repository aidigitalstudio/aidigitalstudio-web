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
  whatsappNota:    "Solo WhatsApp",
  whatsappMensaje: "Hola, me gustaría cotizar un proyecto de página web o presencia digital con A&I Digital Studio.",

  correo:       "aidigitalstudio.pa@gmail.com",
  instagram:    "@aidigitalstudio.pa",
  instagramUrl: "https://www.instagram.com/aidigitalstudio.pa/",

  // URL base del sitio (sin trailing slash) — actualizar con dominio real
  url: "https://aidigitalstudio-web.pages.dev",

  proyectos: [
    { nombre: "VETECHI", estado: "En desarrollo", situacion: "Clínica veterinaria que necesitaba una presencia digital clara y profesional.", solucion: "Sitio web con información médica, perfil de mascotas y contacto directo con el equipo por WhatsApp.", resultado: "Presencia digital profesional, diseño adaptable a móvil y flujo de contacto directo listo para publicación con dominio propio.", imagen: "/images/proyectos/vetechi-pantalla.png", url: "https://vetechi-landing.pages.dev/es/", tipo: "veterinaria" },
    { nombre: "PMF Tours", estado: "Demostrativo", situacion: "Propuesta demostrativa para una agencia de turismo en Panamá.", solucion: "Vitrina visual de destinos y flujo pensado para facilitar consultas y reservas por WhatsApp.", resultado: "Sitio demostrativo con identidad visual clara, presentación de destinos y flujo de consulta directo a WhatsApp, listo para adaptarse al cliente final.", imagen: "/images/proyectos/pmftours-pantalla.png", url: "https://pmftours.github.io/pmftours/", tipo: "turismo" },
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
  whatsappNota,
} = site;
