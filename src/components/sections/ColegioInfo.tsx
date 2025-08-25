import { motion } from "framer-motion";
import firma from "../../assets/firma.webp";

export default function ColegioInfo() {
  return (
    <section className="relative py-14 md:py-20 bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                El Colegio de Notarios
              </h2>

              <span className="mt-2 block h-[3px] w-20 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600" />
            </div>

            <p className="mt-5 leading-relaxed text-neutral-600">
              Representamos la excelencia notarial con un enfoque humano y técnico.
              Nuestra misión es brindar seguridad jurídica, transparencia y cercanía
              en cada trámite, protegiendo los intereses de las familias y las empresas.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 text-sm sm:grid-cols-3">
              <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                <p className="text-neutral-500">Misión</p>
                <p className="mt-1 font-medium">Seguridad jurídica accesible.</p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                <p className="text-neutral-500">Visión</p>
                <p className="mt-1 font-medium">Excelencia y confianza.</p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                <p className="text-neutral-500">Valores</p>
                <p className="mt-1 font-medium">Ética, claridad y servicio.</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/quienes-somos"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white font-medium shadow-sm ring-1 ring-emerald-700/30 transition hover:bg-emerald-700"
              >
                Conócenos
              </a>
              <a
                href="/normativa"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-5 py-3 font-medium text-neutral-700 shadow-sm transition hover:bg-neutral-50"
              >
                Normativa
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl">
              <img
                src={firma}
                alt="Acta notarial y firma"
                className="h-full w-full object-cover"
                loading="lazy"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3">
                <div className="inline-flex rounded-lg bg-white/90 px-3 py-1.5 text-xs font-medium text-neutral-700 shadow ring-1 ring-neutral-200 backdrop-blur">
                  Protocolos y formalización
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}