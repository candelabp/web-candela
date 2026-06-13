export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "skills", label: "Habilidades" },
] as const;

export const SECTION_IDS = ["home", "about", "projects", "skills", "contact"] as const;

export type SectionId = (typeof SECTION_IDS)[number];
