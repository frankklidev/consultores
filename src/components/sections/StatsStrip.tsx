
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Scale, FileText, ShieldCheck, Handshake } from "lucide-react";

function AnimatedNumber({
  value,
  duration = 2,
  enabled = true,
}: {
  value: string;
  duration?: number;
  enabled?: boolean;
}) {
  const numeric = parseFloat(value.replace(/[^\d.]/g, "")) || 0;
  const suffix = value.replace(/[0-9.]/g, "");
  const hasDecimal = /\d+\.\d+/.test(value);

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const count = useMotionValue(0);
  const text = useTransform(count, (latest) =>
    hasDecimal ? latest.toFixed(1) : Math.round(latest).toString()
  );

  useEffect(() => {
    if (!enabled) {
      count.set(0);
      return;
    }
    if (!inView) return;
    const controls = animate(count, numeric, { duration, ease: "easeOut" });
    return controls.stop;
  }, [enabled, inView, numeric, duration, count]);

  return (
    <span className="tabular-nums">
      <motion.span ref={ref}>{text}</motion.span>
      {suffix}
    </span>
  );
}

type Stat = { k: string; v: string; icon: React.ComponentType<{ className?: string }> };

export default function StatsStrip({ enabled = true }: { enabled?: boolean }) {
  const stats: Stat[] = [
    { k: "Años de servicio", v: "25+", icon: Scale },
    { k: "Actos notariales/año", v: "3.5K", icon: FileText },
    { k: "Índice de satisfacción", v: "98%", icon: ShieldCheck },
    { k: "Casos mediados", v: "800+", icon: Handshake },
  ];

  return (
    <section className="py-10 md:py-12 bg-white text-neutral-900">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">

          <ul className="grid grid-cols-2 divide-y divide-neutral-200 md:grid-cols-4 md:divide-y-0 md:divide-x">
            {stats.map(({ k, v, icon: Icon }, i) => (
              <li key={k} className="p-6">
                <motion.div
                  className="flex flex-col items-center gap-2 text-center"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
    
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/60">
                    <Icon className="h-4 w-4" />
                  </span>


                  <motion.div
                    whileHover={{ y: -1 }}
                    className="text-2xl md:text-3xl font-semibold"
                  >
                    <AnimatedNumber value={v} enabled={enabled} />
                  </motion.div>


                  <div className="text-sm text-neutral-500">{k}</div>


                  <span className="mt-1 block h-[2px] w-8 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 opacity-70" />
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}