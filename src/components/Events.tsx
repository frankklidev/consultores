import * as React from "react";
import { motion, useInView } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";

export type EventItem = {
  id: string | number;
  title: string;
  excerpt: string;
  date: string;     
  image: string;    
  href: string;     
  tag?: string;     
};

export default function Events({
  items,
  title = "Eventos y Noticias",
  subtitle = "Últimos",
  className = "",
}: {
  items: EventItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px -10% 0px", once: true });

  return (
    <section className={["relative", className].join(" ")}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 text-sm tracking-widest text-indigo-600">
            <span className="h-px w-6 bg-indigo-200" />
            {subtitle.toUpperCase()}
            <span className="h-px w-6 bg-indigo-200" />
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            {title}
          </h2>
        </div>

        <motion.div
          ref={ref}
          className="
            grid grid-cols-1 gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            [--snap:var(--snap,_unset)]
            lg:[--snap:_unset]
          "

          style={{
           
          }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {items.map((ev) => (
            <Card key={ev.id} item={ev} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}


function Card({ item }: { item: EventItem }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.98 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
      }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
    >

      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-indigo-200/70 transition-all" />

     
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />

        <div className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-[120%] group-hover:opacity-100" />


        <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
          <CalendarDays className="h-3.5 w-3.5 text-indigo-600" />
          <span>{formatDate(item.date)}</span>
        </div>


        {item.tag && (
          <div className="absolute right-3 top-3 rounded-full bg-indigo-600/90 px-3 py-1 text-xs font-semibold text-white">
            {item.tag}
          </div>
        )}
      </div>


      <div className="p-5">
        <h3 className="text-lg font-extrabold leading-snug text-slate-900">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-slate-600">
          {item.excerpt}
        </p>

        <div className="mt-4">
          <a
            href={item.href}
            className="
              inline-flex items-center gap-2 rounded-xl
              border border-slate-200 bg-white px-3.5 py-2
              text-sm font-semibold text-slate-800 transition
              hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700
            "
          >
            Leer más
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}


function formatDate(input: string) {

  if (/\d/.test(input) && /de/i.test(input)) return input;

  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return input;
  const fmt = new Intl.DateTimeFormat("es-MX", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return fmt.format(d);
}