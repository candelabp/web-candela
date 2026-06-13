import { Project, SkillCategory, Testimonial } from "./types";
import beautyConnectImage from "../assets/beauty-connect.png";
import elBuenSaborImage from "../assets/elbuensabor.png";
import geoAlertImage from "../assets/geoalert.png";
export const PROJECTS: Project[] = [
{ id: "beauty-connect", title: "BeautyConnect - Plataforma de turnos para centros de estética", category: "Proyecto Full Stack", year: 2025, image: beautyConnectImage, metric: { value: "+6", label: "MÓDULOS" }, description: "Desarrollo de una plataforma web para conectar clientes con centros de estética, permitiendo gestionar turnos, servicios, profesionales, reseñas y perfiles de usuario.", details: { challenge: "Los centros de estética necesitan una forma más simple y organizada de mostrar sus servicios, administrar turnos y mejorar la comunicación con sus clientes desde una plataforma digital.", solution: "Se desarrolló una aplicación full stack con una interfaz moderna y responsive, integrando funcionalidades como autenticación de usuarios, gestión de servicios, profesionales, centros de estética, turnos y reseñas.", impact: "El proyecto permite centralizar la gestión de reservas y mejorar la experiencia tanto de los clientes como de los prestadores, ofreciendo un flujo más claro, accesible y ordenado.", techExplanation: "El frontend fue desarrollado con React, TypeScript, Vite y Tailwind CSS. El backend se construyó con Spring Boot, utilizando una base de datos MySQL e integraciones como Firebase para autenticación." }, tags: ["React", "TypeScript", "Spring Boot", "MySQL", "Tailwind CSS", "Firebase"] },
{ id: "el-buen-sabor", title: "El Buen Sabor - Sistema de gestión para restaurante", category: "Proyecto Full Stack", year: 2025, image: elBuenSaborImage, metric: { value: "+8", label: "FUNCIONES" }, description: "Desarrollo de una plataforma web para la gestión integral de un restaurante, permitiendo administrar productos, promociones, pedidos, usuarios, domicilios y operaciones relacionadas con la venta online.", details: { challenge: "Un restaurante necesita centralizar la gestión de sus productos, pedidos y usuarios en una plataforma clara, ordenada y accesible para clientes, empleados y administradores.", solution: "Se desarrolló una interfaz moderna en React con navegación entre secciones, manejo de estado global, formularios validados, carrito de compras, paneles por rol e integración con una API backend para operaciones CRUD y gestión de pedidos.", impact: "El sistema mejora la organización del flujo de ventas y administración del restaurante, facilitando la experiencia de compra para clientes y simplificando la gestión interna para el equipo.", techExplanation: "El frontend fue desarrollado con React, React Router DOM, Axios, Redux Toolkit, Material UI, Formik y Yup. Además, el proyecto contempla integración con Mercado Pago Checkout Pro, autenticación con Auth0, WebSockets y Docker." }, tags: ["React", "Redux Toolkit", "Axios", "Material UI", "Formik", "Yup", "Mercado Pago"] },

{
  id: "geo-alert",
  title: "GeoAlert - App móvil de alertas por ubicación",
  category: "Mobile App",
  year: 2025,
  image: geoAlertImage,
  metric: {
    value: "GPS",
    label: "REAL TIME"
  },
  description: "Desarrollo de una aplicación móvil pensada para usuarios de transporte público, que permite configurar alertas sonoras basadas en la ubicación geográfica en tiempo real.",
  details: {
    challenge: "Muchas personas que viajan en transporte público necesitan una forma simple de recibir un aviso antes de llegar a su destino, especialmente en recorridos largos o poco familiares.",
    solution: "Se desarrolló una app mobile con Expo y React Native, incorporando funcionalidades de ubicación, mapa, geofencing, gestión de alertas, onboarding de permisos y una estructura modular organizada por features.",
    impact: "La aplicación mejora la experiencia de viaje al permitir que el usuario configure alertas por ubicación y reciba avisos sonoros de forma práctica, reduciendo el riesgo de pasarse de parada.",
    techExplanation: "El proyecto fue desarrollado con Expo, React Native y TypeScript. Se utilizó NativeWind para estilos, Zustand para manejo de estado global, React Navigation para la navegación y componentes nativos del sistema operativo para mantener una experiencia cercana a cada plataforma."
  },
  tags: ["Expo", "React Native", "TypeScript", "NativeWind", "Zustand", "React Navigation"]
}


];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    icon: "brush",
    description: "Visualización intuitiva y modular.",
    skills: ["React", "TypeScript", "Tailwind CSS",  "Responsive UI / Mobile First"]
  },
  {
    id: "backend",
    name: "Backend",
    icon: "database",
    description: "APIs estructuradas, diseño de bases de datos sólidas y servicios robustos.",
    skills: ["Node.js", "Python", "PostgreSQL / MongoDB / Redis", "Java / Spring Boot", "WebSockets / Realtime", "Diseño de Arquitectura Limpia"]
  },
  {
    id: "cloudops",
    name: "Cloud & Ops",
    icon: "cloud",
    description: "Infraestructuras seguras que escalan, despliegue continuo y alta disponibilidad.",
    skills: ["AWS (S3, EC2, CloudFront, Lambda)", "Docker / Kubernetes", "CI/CD (GitHub Actions / GitLab)", "Serverless Architectures", "Monitoreo & Logs", "Optimización de Rendimiento"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Carlos Mendoza",
    role: "Director de Tecnología, DevStudio",
    content: "Ana combina una estructura lógica impecable con una enorme sensibilidad estética. Encontrarle soluciones elegantes a problemas complejos de datos es su mayor superpoder.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: "testimonial-2",
    name: "Elena Rostova",
    role: "Fundadora, EcoConsciente",
    content: "Nuestra aplicación móvil requería combinar mapas complejos y un alto dinamismo social. Ana lideró el desarrollo no solo entregando antes del tiempo acordado, sino proponiendo mejoras clave de UX.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: "testimonial-3",
    name: "Marcus Dupont",
    role: "Senior Project Manager, FinAnalytica",
    content: "La optimización del sistema financiero que hizo Ana fue espectacular. Desatar cuellos de botella que otros no entendían en cuestión de días demostró sus grandes habilidades diagnósticas.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];
