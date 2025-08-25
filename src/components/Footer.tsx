import * as React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ExternalLink,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  ChevronRight,
  Scale,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-200">

      <div className="pointer-events-none absolute -top-6 left-0 right-0 h-6 bg-gradient-to-b from-blue-500/20 to-transparent blur-2xl" />

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-center"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg ring-1 ring-white/10">

              <Scale className="h-5 w-5" aria-hidden />
            </span>
            <div className="leading-tight">
              <div className="text-base font-semibold text-white">
                Colegio de Notarios — Estado de México
              </div>
              <div className="text-xs text-slate-400">
                Seguridad jurídica, cercanía y servicio.
              </div>
            </div>
          </div>

          <a
            href="/mapa-notarias"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-lg ring-1 ring-white/10 transition hover:opacity-95"
          >
            <MapPin className="h-4 w-4" />
            Ubica tu notaría
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>


        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <h4 className="text-sm font-semibold text-white">Nosotros</h4>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Promovemos la función notarial con excelencia, ética y cercanía,
              ofreciendo orientación a la ciudadanía y fortaleciendo la certeza
              jurídica en el Estado de México.
            </p>

            <ul className="mt-4 space-y-2 text-sm">
              <FooterLink href="/quienes-somos">¿Quiénes somos?</FooterLink>
              <FooterLink href="/consejo">Consejo</FooterLink>
              <FooterLink href="/normativa">Normativa</FooterLink>
              <FooterLink href="/contacto">Datos de contacto</FooterLink>
            </ul>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-white">Te apoyamos</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <FooterLink href="/consultoria-juridica">
                Consultoría jurídica gratuita
              </FooterLink>
              <FooterLink href="/mes-testamento">
                Septiembre: Mes del Testamento
              </FooterLink>
              <FooterLink href="/voluntad-anticipada">
                Voluntad anticipada
              </FooterLink>
              <FooterLink href="/costos-notariales">
                Costos notariales
              </FooterLink>
              <FooterLink href="/arancel">Arancel</FooterLink>
            </ul>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <h4 className="text-sm font-semibold text-white">Recursos</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <FooterLink href="/instituto-investigaciones">
                Instituto de Investigaciones Jurídicas
              </FooterLink>
              <FooterLink href="/carrera-notarial">
                Carrera Notarial
              </FooterLink>
              <FooterLink href="/bolsa-trabajo">Bolsa de trabajo</FooterLink>
              <FooterLink href="/hemeroteca">Hemeroteca</FooterLink>
              <FooterLink href="/comunicados-prensa">
                Comunicados de prensa
              </FooterLink>
            </ul>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-white">Contacto</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-slate-400" />
                <span>
                  Av. Ejemplo 123, Col. Centro, Alcaldía X, C.P. 00000, CDMX
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-400" />
                <a href="tel:+525555555555" className="hover:underline">
                  +52 55 5555 5555
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-400" />
                <a
                  href="mailto:contacto@colegiodenotarios.cdmx"
                  className="hover:underline"
                >
                  contacto@colegiodenotarios.cdmx
                </a>
              </li>
            </ul>

            <div className="mt-4 flex items-center gap-3">
              <Social href="https://facebook.com">
                <Facebook className="h-4 w-4" />
              </Social>
              <Social href="https://twitter.com">
                <Twitter className="h-4 w-4" />
              </Social>
              <Social href="https://instagram.com">
                <Instagram className="h-4 w-4" />
              </Social>
              <Social href="https://youtube.com">
                <Youtube className="h-4 w-4" />
              </Social>
            </div>


            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 rounded-xl border border-white/10 bg-white/5 p-2 ring-1 ring-white/5"
            >
              <label className="sr-only">Correo</label>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Tu correo"
                  className="w-full rounded-lg bg-transparent px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-indigo-500"
                >
                  Suscribirme
                  <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />


        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Colegio de Notarios del Estado
            México. Todos los derechos reservados.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400">
            <BottomLink href="/privacidad">Aviso de privacidad</BottomLink>
            <BottomLink href="/terminos">Términos y condiciones</BottomLink>
            <BottomLink href="/accesibilidad">Accesibilidad</BottomLink>
          </ul>
        </div>
      </div>
    </footer>
  );
}



function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="group inline-flex items-center gap-1.5 text-slate-300 transition hover:text-white"
      >
        <ChevronRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
        {children}
      </a>
    </li>
  );
}

function BottomLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a href={href} className="transition hover:text-slate-200">
        {children}
      </a>
    </li>
  );
}

function Social({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-200 ring-1 ring-white/10 transition hover:bg-white/10"
      aria-label="Red social"
    >
      {children}
    </a>
  );
}