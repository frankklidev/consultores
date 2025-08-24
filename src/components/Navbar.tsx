import { useEffect, useRef, useState } from 'react';
import {
  Menu,
  X,
  Phone,
  FileText,
  ExternalLink,
  Mail,
  MessageSquare,
  BookOpen,
  ClipboardList,
  DollarSign,
  Briefcase,
  MapPin,
  Users,
  HelpCircle,
  Landmark,
  Globe2,
  FileSignature,
  Scale,
  Globe,
  Edit,
  CalendarDays,
  Scroll,
  Layers,
  Home,
  Slash,
  Vote,
  Building2,
  GraduationCap,
  Archive,
  Megaphone,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import UbicaNotariaFlyout from './UbicaNotariaFlyout';

const links = [
  { key: 'servicios', label: 'Nosotros', href: '#nosotros' },
  { key: 'casos', label: 'Te apoyamos', href: '#te-apoyamos' },
  { key: 'academico', label: 'Académico', href: '#academico' },
  { key: 'comunicacion', label: 'Comunicación Social', href: '#comunicacion' },
  { key: 'ubica', label: 'Ubica tu notaría', href: '#ubica' },
];

const MODAL_ACTIONS: Record<
  string,
  {
    label: string;
    icon: any;
    href?: string;
    onClick?: () => void;
    external?: boolean;
    description?: string;
  }[]
> = {
  servicios: [
    { label: '¿Quiénes somos?', icon: Briefcase, href: '/quienes-somos' },
    {
      label: '¿Qué es / Qué hace un notario?',
      icon: ClipboardList,
      href: '/que-es-notario',
    },
    {
      label: 'Ubica tu notaría más cercana',
      icon: MapPin,
      href: '/ubica-notaria',
    },
    { label: 'Consejo', icon: Users, href: '/consejo' },
    { label: 'Datos de contacto', icon: Phone, href: '/contacto' },
    { label: 'Preguntas frecuentes', icon: HelpCircle, href: '/faq' },
    {
      label: 'Evolución del notariado',
      icon: BookOpen,
      href: '/evolucion-notariado',
    },
    { label: 'Normativa', icon: FileText, href: '/normativa' },
    {
      label: 'El notariado en la Ciudad de México',
      icon: Landmark,
      href: '/notariado-cdmx',
    },
    {
      label: 'Los notariados de tipo latino',
      icon: Globe,
      href: '/notariado-latino',
    },
    {
      label: 'De la actuación notarial',
      icon: Edit,
      href: '/actuacion-notarial',
    },
    {
      label: 'De los instrumentos públicos notariales',
      icon: FileSignature,
      href: '/instrumentos-notariales',
    },
    {
      label: 'De los efectos y valor jurídico de los instrumentos',
      icon: Scale,
      href: '/efectos-instrumentos',
    },
    {
      label: 'El notariado internacional',
      icon: Globe2,
      href: '/notariado-internacional',
    },
  ],
  casos: [
    {
      label: 'Consultoría Jurídica Gratuita',
      icon: FileText,
      href: '/consultoria-juridica',
    },
    {
      label: 'Jornada Notarial',
      icon: CalendarDays,
      href: '/jornada-notarial',
    },
    {
      label: 'Escrituración en programas sociales',
      icon: FileSignature,
      href: '/escrituracion-programas',
    },
    {
      label: 'Septiembre Mes del Testamento',
      icon: BookOpen,
      href: '/mes-testamento',
    },
    {
      label: 'Testamento y herencia',
      icon: Scroll,
      href: '/testamento-herencia',
    },
    {
      label: 'Programa de sucesiones',
      icon: Layers,
      href: '/programa-sucesiones',
    },
    {
      label: 'Qué hacer cuando quiera comprar mi casa',
      icon: Home,
      href: '/comprar-casa',
    },
    {
      label: 'Cancelación de hipoteca',
      icon: Slash,
      href: '/cancelacion-hipoteca',
    },
    {
      label: 'Documento de Voluntad Anticipada',
      icon: FileText,
      href: '/voluntad-anticipada',
    },
    {
      label: 'Participación en materia electoral',
      icon: Vote,
      href: '/materia-electoral',
    },
    { label: 'Pequeña y mediana empresa', icon: Building2, href: '/pymes' },
    {
      label: 'Instituciones de Asistencia Privada',
      icon: Landmark,
      href: '/asistencia-privada',
    },
    {
      label: 'Organizaciones de la Sociedad Civil',
      icon: Users,
      href: '/sociedad-civil',
    },
    {
      label: 'Costos notariales',
      icon: DollarSign,
      href: '/costos-notariales',
    },
    { label: 'Arancel', icon: Scale, href: '/arancel' },
  ],
  academico: [
    {
      label: 'Instituto de Investigaciones Jurídicas del Notariado',
      icon: BookOpen,
      href: '/instituto-investigaciones',
    },
    {
      label: 'Carrera Notarial',
      icon: GraduationCap,
      href: '/carrera-notarial',
    },
    { label: 'Bolsa de trabajo', icon: Briefcase, href: '/bolsa-trabajo' },
  ],
  comunicacion: [
    { label: 'Hemeroteca', icon: BookOpen, href: '/hemeroteca' },
    { label: 'Memoria histórica', icon: Archive, href: '/memoria-historica' },
    {
      label: 'Comunicados de prensa',
      icon: Megaphone,
      href: '/comunicados-prensa',
    },
  ],
  contacto: [
    {
      label: 'WhatsApp ahora',
      icon: MessageSquare,
      href: 'https://wa.me/5355555555',
      external: true,
    },
    {
      label: 'Escríbenos por email',
      icon: Mail,
      href: 'mailto:hola@tuconsultoria.com',
    },
    {
      label: 'Agenda en Calendly',
      icon: ExternalLink,
      href: 'https://cal.com/tu-consultoria/llamada',
      external: true,
    },
    { label: 'Formulario de contacto', icon: FileText, href: '/contacto' },
  ],
};

function classNames(...s: (string | false | null | undefined)[]) {
  return s.filter(Boolean).join(' ');
}

function ActionItem({
  icon: Icon,
  label,
  href,
  external,
  description,
  onClick,
}: any) {
  const content = (
    <div className='flex items-start gap-3 rounded-xl border border-slate-200 p-3 bg-white hover:bg-slate-50 transition'>
      <div className='mt-0.5 rounded-lg p-2 bg-slate-100'>
        <Icon className='h-4 w-4 text-slate-700' aria-hidden />
      </div>
      <div className='flex-1'>
        <div className='text-sm font-semibold text-slate-900'>{label}</div>
        {description && (
          <div className='text-xs text-slate-600'>{description}</div>
        )}
      </div>
      {external && (
        <ExternalLink className='h-4 w-4 text-slate-400' aria-hidden />
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        className='block'
      >
        {content}
      </a>
    );
  }
  return (
    <button type='button' onClick={onClick} className='w-full text-left'>
      {content}
    </button>
  );
}

function useHoverIntent(delayIn = 80, delayOut = 150) {
  const inRef = useRef<number | null>(null);
  const outRef = useRef<number | null>(null);

  const onEnter = (fn: () => void) => {
    if (outRef.current) {
      window.clearTimeout(outRef.current);
      outRef.current = null;
    }
    inRef.current = window.setTimeout(fn, delayIn);
  };
  const onLeave = (fn: () => void) => {
    if (inRef.current) {
      window.clearTimeout(inRef.current);
      inRef.current = null;
    }
    outRef.current = window.setTimeout(fn, delayOut);
  };

  useEffect(
    () => () => {
      if (inRef.current) window.clearTimeout(inRef.current);
      if (outRef.current) window.clearTimeout(outRef.current);
    },
    []
  );

  return { onEnter, onLeave };
}

function Flyout({
  open,
  children,
  center = false,
  bare = false,
}: {
  open: boolean;
  children: React.ReactNode;
  center?: boolean;
  bare?: boolean;
}) {
  const positionClass = center ? 'left-1/2 -translate-x-1/2' : 'left-0';
  const widthClass = center ? 'w-[min(92vw,780px)]' : 'w-[min(88vw,640px)]';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -4, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -4, scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          className={`absolute ${positionClass} top-full mt-2 ${widthClass}`}
          style={{ zIndex: 70 }}
        >
          {bare ? (
            <div className='pointer-events-auto'>{children}</div>
          ) : (
            <div className='rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl text-slate-900'>
              <div className='grid gap-2 sm:grid-cols-2'>{children}</div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [hoverKey, setHoverKey] = useState<string | null>(null);
  const { onEnter, onLeave } = useHoverIntent(70, 120);

  return (
    <header
      className='fixed inset-x-0 top-0 z-50 bg-blue-900 text-white shadow-md'
      role='banner'
    >
      <nav className='mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6'>
        <a
          href='#home'
          className='group inline-flex items-center gap-2'
          aria-label='Inicio'
        >
          <span className='relative inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              className='h-5 w-5'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              aria-hidden
            >
              <path d='M9 3h9a2 2 0 0 1 2 2v13a3 3 0 0 1-3 3H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z' />
              <path d='M9 7h6' />
              <path d='M9 11h6' />
            </svg>
          </span>
          <div className='leading-tight'>
            <span className='block text-sm font-semibold tracking-tight text-white'>
              Colegio de Notarios
            </span>
            <span className='block text-[11px] text-slate-200'>
              Ciudad de México
            </span>
          </div>
        </a>

        <ul className='hidden items-center gap-2 md:flex'>
          {links.map((l) => {
            const actions = MODAL_ACTIONS[l.key] || [];
            const isOpen = hoverKey === l.key;
            return (
              <li
                key={l.key}
                className='relative'
                onMouseEnter={() => onEnter(() => setHoverKey(l.key))}
                onMouseLeave={() =>
                  onLeave(() => setHoverKey((k) => (k === l.key ? null : k)))
                }
              >
                <button
                  type='button'
                  className={classNames(
                    'rounded-xl px-3 py-2 text-sm font-medium transition',
                    isOpen
                      ? 'bg-blue-800 text-white'
                      : 'text-white hover:bg-blue-800 hover:text-white'
                  )}
                  aria-haspopup='menu'
                  aria-expanded={isOpen}
                >
                  {l.label}
                </button>
                <Flyout
                  open={isOpen}
                  bare={l.key === 'ubica'}
                  center={l.key === 'ubica'}
                >
                  {l.key === 'ubica' ? (
                    <div className='text-slate-900'>
                      <UbicaNotariaFlyout
                        onSearch={(f) => {
                          const qs = new URLSearchParams(f as any).toString();
                          window.location.href = `/directorio?${qs}`;
                        }}
                        onClear={() => console.log('limpiar filtros')}
                        mapHref='/mapa-notarias'
                      />
                    </div>
                  ) : (
                    actions.map((a, idx) => <ActionItem key={idx} {...a} />)
                  )}
                </Flyout>
              </li>
            );
          })}
        </ul>

        <div className='flex items-center gap-2'>
          <a
            href='#'
            className='hidden items-center gap-2 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:opacity-90 active:opacity-100 md:inline-flex'
          >
            <Phone className='h-4 w-4' /> Agenda una llamada
          </a>
          <button
            type='button'
            className='inline-flex items-center justify-center rounded-xl p-2 transition hover:bg-blue-800 md:hidden'
            onClick={() => setOpenMobile((v) => !v)}
            aria-controls='mobile-menu'
            aria-expanded={openMobile}
            aria-label='Abrir menú'
          >
            {openMobile ? (
              <X className='h-5 w-5' />
            ) : (
              <Menu className='h-5 w-5' />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
