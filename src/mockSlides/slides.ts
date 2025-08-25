import type { EventItem } from "../components/Events";
import hero1 from "../assets/imagen.webp";
import hero3 from "../assets/imagen1.webp";
import hero4 from "../assets/imagen2.webp";

export const slides = [
  {
    id: 1,
    image: hero1,
    title: "Tu seguridad jurídica es nuestra prioridad",
    subtitle: "Asesoría notarial con confianza y experiencia.",
    cta: { label: "Conoce más", href: "/servicios" },
    align: "left" as const,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1521790361543-f645cf042ec4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    title: "Testamentos y herencias",
    subtitle: "Protege el futuro de tu familia con certeza legal.",
    cta: { label: "Agenda tu cita", href: "/testamentos" },
    align: "center" as const,
  },
  {
    id: 3,
    image: hero3,
    title: "Constitución de sociedades",
    subtitle: "Formaliza tu empresa con respaldo notarial.",
    cta: { label: "Inicia ahora", href: "/empresas" },
    align: "right" as const,
  },
]; 
export const eventos: EventItem[] = [
    {
      id: 1,
      title: "Constitución de hipoteca y su cancelación",
      excerpt:
        "El lunes 22 de abril se llevó a cabo la séptima Sesión Académica en el Consejo de Notarios...",
      date: "2024-04-22",
      image: hero4,
      href: "/eventos/constitucion-hipoteca",
      tag: "Sesión Académica",
    },
    {
      id: 2,
      title: "Poder otorgado en el extranjero",
      excerpt:
        "En la Sesión Académica del 8 de abril, el Lic. Miguel Ángel González compartió...",
      date: "2024-04-08",
      image:
       hero4,
      href: "/eventos/poder-extranjero",
      tag: "Evento",
    },
    {
      id: 3,
      title: "Evolución de los servicios del registro público",
      excerpt:
        "El Lic. Mario Alberto López habló sobre la modernización del registro público...",
      date: "2024-03-25",
      image:
        hero4,
      href: "/eventos/registro-publico",
      tag: "Noticia",
    },
  ];