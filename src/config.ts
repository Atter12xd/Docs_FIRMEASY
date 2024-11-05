export const SITE = {
  title: "Docs Firmeasy",
  description: "Astro theme to build your design system fast.",
  defaultLanguage: "en_US",
  twitter: "@jordienr",
  github: "jordienr",
  linkedin: "linkedinUsername",
};

export const OPEN_GRAPH = {
  image: {
    src: "",
    alt: "",
  },
  twitter: "",
};

export const SIDEBAR = [
  { text: "Core", header: true },
  { text: "Informacion General", link: "/core/introduction" },
  { text: "Carpeta Digital", link: "/core/colors" },
  { text: "Archivo digital", link: "/core/typography" },
  { text: "Descargar Archivo digital", link: "/core/shadows" },

  { text: "Components", header: true },
  { text: "Archivo digital Enlace", link: "/components/buttons" },
  { text: "Archivo Digital Consulta", link: "/components/input" },
  { text: "Crear Enlace Digital A Firmador", link: "/components/status-pill" },
  { text: "Table", link: "/components/table" },

  { text: "Patterns", header: true },
  { text: "Introduction", link: "/patterns/introduction" },
];
