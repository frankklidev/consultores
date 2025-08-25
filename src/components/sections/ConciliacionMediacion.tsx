import { motion, useReducedMotion } from "framer-motion";
import mediador from "../../assets/mediador.jpg";

function AutoScrollText({
  speed = 24,
  children,
}: {
  speed?: number;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();

  const content = <div className="space-y-6 leading-relaxed">{children}</div>;

  return (
    <div
      className="relative h-[22rem] md:h-[28rem] overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-white p-6"
      aria-label="Texto informativo de conciliación y mediación con desplazamiento automático"
    >
      {reduce ? (
        <div className="h-full overflow-y-auto pr-2 text-neutral-600">{content}</div>
      ) : (
        <div className="relative h-full">
          <motion.div
            aria-hidden
            className="absolute inset-0 will-change-transform"
            animate={{ y: ["0%", "-50%"] }}
            transition={{ duration: speed, ease: "linear", repeat: Infinity }}
          >
            <div className="pr-2 text-neutral-600">
              {content}
              <div className="mt-6" />
              {content}
            </div>
          </motion.div>


          <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent" />
        </div>
      )}
    </div>
  );
}

export default function ConciliacionMediacion() {
  return (
    <section className="relative py-14 md:py-20 bg-white text-neutral-900">
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:px-6">

        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
            Conciliación y Mediación
          </h2>
          <p className="mt-3 text-neutral-600">
            Una alternativa ágil y confidencial para resolver conflictos con la
            intervención de un Notario Mediador-Conciliador, dentro del marco de la legalidad.
          </p>

          <div className="mt-6">
            <AutoScrollText speed={28}>
              <p className="text-lg md:text-xl">
                La mediación facilita la comunicación entre las partes para que lleguen a
                acuerdos que satisfagan sus necesidades reales; dichos acuerdos quedan
                asentados en un <span className="font-medium text-neutral-900">Convenio</span> con la
                misma fuerza legal que una sentencia.
              </p>
              <p className="text-lg md:text-xl">
                En la <span className="font-medium text-neutral-900">mediación</span>, el Notario funge
                como facilitador del diálogo; en la{" "}
                <span className="font-medium text-neutral-900">conciliación</span>, puede proponer
                soluciones cuando la comunicación sea ineficaz.
              </p>
              <p className="text-lg md:text-xl">
                El Notario Mediador-Conciliador no decide quién gana o pierde; identifica el
                origen del problema y conduce a una comunicación efectiva para lograr acuerdos
                satisfactorios.
              </p>
              <p className="text-lg md:text-xl">
                Con la certificación y autorización del Poder Judicial del Estado de México, y su
                experiencia jurídica, los Notarios Mediadores-Conciliadores llevan procesos
                eficaces dentro de la legalidad.
              </p>
              <ul className="text-lg md:text-xl list-disc pl-5">
                <li>Facilita el diálogo entre las partes</li>
                <li>Permite acuerdos con fuerza legal</li>
                <li>Evita procesos largos y costosos</li>
              </ul>
            </AutoScrollText>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="/conciliacion-mediacion"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white font-medium shadow-lg transition hover:bg-emerald-700"
            >
              Más información
            </a>
            <span className="text-sm text-neutral-500">Descubre el proceso completo</span>
          </div>
        </div>


        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative order-first md:order-none"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-neutral-200">
            <img
              src={mediador}
              alt="Notario mediador facilitando el diálogo"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}