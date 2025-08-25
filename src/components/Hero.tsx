import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Slide = {
  id: string | number;
  image: string;
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string; external?: boolean };
};

const DEFAULT_INTERVAL = 6000;

export default function Hero({
  slides,
  autoPlay = true,
  interval = DEFAULT_INTERVAL,
  className = '',
  heightClass = 'h-[70vh] md:h-[78vh]',
}: {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
  heightClass?: string;
}) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<number | null>(null);

  const goTo = (i: number) => {
    if (!slides.length) return;
    setActive((i + slides.length) % slides.length);
  };
  const next = () => goTo(active + 1);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    timerRef.current = window.setTimeout(() => {
      next();
    }, interval);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [active, autoPlay, interval, slides.length]);

  if (!slides?.length) return null;
  const current = slides[active];

  return (
    <section
      className={[
        'relative w-full isolate overflow-hidden',
        heightClass,
        className,
      ].join(' ')}
      aria-roledescription='carrusel'
      aria-label='Destacados'
    >
      <div className='absolute inset-0 z-0'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.4, scale: 1.01 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='absolute inset-0'
            style={{
              backgroundImage: `url(${current.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden
          />
        </AnimatePresence>
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10' />
      </div>

      <div className='relative z-10 mx-auto flex h-full w-full max-w-7xl px-4 md:px-6'>
        <div className='flex w-full flex-col items-center justify-center gap-4 text-center md:gap-6'>
          <h1 className='text-3xl font-bold leading-tight text-white drop-shadow md:text-5xl'>
            {current.title}
          </h1>
          {current.subtitle && (
            <p className='max-w-2xl text-base text-slate-100/90 md:text-lg'>
              {current.subtitle}
            </p>
          )}

          {current.cta && (
            <div className='mt-1'>
              <a
                href={current.cta.href}
                target={current.cta.external ? '_blank' : undefined}
                rel={current.cta.external ? 'noopener noreferrer' : undefined}
                className='
                  inline-flex items-center gap-2 rounded-2xl
                  bg-gradient-to-r from-emerald-600 to-teal-600
                  px-5 py-2.5 text-sm font-semibold text-white
                  shadow-lg ring-1 ring-white/10 transition
                  hover:opacity-95
                '
              >
                {current.cta.label}
              </a>
            </div>
          )}
        </div>
      </div>

      <span className='sr-only' aria-live='polite'>
        Slide {active + 1} de {slides.length}
      </span>
    </section>
  );
}
