import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import img0 from '../../assets/gallery.webp';
import img1 from '../../assets/gallery1.webp';
import img2 from '../../assets/gallery3.webp';
import img3 from '../../assets/gallery4.jpg';

type Pic = { src: string; alt: string; caption?: string };

const IMAGES: Pic[] = [
  { src: img0, alt: 'Equipo del colegio', caption: 'Nuestro equipo' },
  { src: img1, alt: 'Sala de atención', caption: 'Sala de atención' },
  { src: img2, alt: 'Proceso de firma', caption: 'Acto de firma' },
  { src: img3, alt: 'Archivo y protocolos', caption: 'Archivo y protocolos' },
];

export default function GallerySection() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowRight') setIdx((v) => (v + 1) % IMAGES.length);
      if (e.key === 'ArrowLeft')
        setIdx((v) => (v - 1 + IMAGES.length) % IMAGES.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <section className='py-14 md:py-20 bg-white text-neutral-900'>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        <div className='flex flex-col gap-2 md:flex-row md:items-end md:justify-between'>
          <div>
            <h3 className='text-2xl md:text-3xl font-semibold tracking-tight'>
              Nuestro Equipo
            </h3>
            <p className='mt-2 text-sm text-neutral-500'>
              Un vistazo a nuestros Integrantes.
            </p>
          </div>
          <a
            href='#contacto'
            className='inline-flex items-center gap-2 text-sm font-medium text-emerald-700 hover:underline'
          >
            Visítanos
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              className='opacity-80'
            >
              <path
                d='M7 17L17 7M17 7H9M17 7v8'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.6'
              />
            </svg>
          </a>
        </div>

        <div className='mt-6 grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-5'>
          {IMAGES.map((pic, i) => (
            <motion.button
              key={i}
              type='button'
              onClick={() => {
                setIdx(i);
                setOpen(true);
              }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className='group relative aspect-[4/3] overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600'
              aria-label={`Abrir ${pic.alt}`}
            >
              <img
                src={pic.src}
                alt={pic.alt}
                loading='lazy'
                className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]'
                onError={(e) =>
                  ((e.currentTarget as HTMLImageElement).style.visibility =
                    'hidden')
                }
              />

              <div className='pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                <div className='m-2 rounded-xl bg-white/90 px-3 py-2 text-sm font-medium text-neutral-800 shadow-lg ring-1 ring-black/5 backdrop-blur'>
                  {pic.caption ?? pic.alt}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className='fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            onClick={() => setOpen(false)}
          >
            <div className='absolute inset-0 mx-auto flex max-w-6xl items-center justify-center px-4'>
              <motion.div
                role='dialog'
                aria-modal='true'
                aria-label={IMAGES[idx].alt}
                className='relative mx-auto w-full'
                initial={{ scale: 0.98, y: 10, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.98, y: 10, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={IMAGES[idx].src}
                  alt={IMAGES[idx].alt}
                  className='mx-auto max-h-[78vh] w-auto rounded-2xl shadow-2xl ring-1 ring-white/10'
                />
                <div className='mx-auto mt-3 max-w-[80ch] text-center text-sm text-white/90'>
                  {IMAGES[idx].caption ?? IMAGES[idx].alt}
                </div>

                <div className='pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 md:px-4'>
                  <button
                    aria-label='Anterior'
                    className='pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/25'
                    onClick={() =>
                      setIdx((v) => (v - 1 + IMAGES.length) % IMAGES.length)
                    }
                  >
                    ‹
                  </button>
                  <button
                    aria-label='Siguiente'
                    className='pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/25'
                    onClick={() => setIdx((v) => (v + 1) % IMAGES.length)}
                  >
                    ›
                  </button>
                </div>

                <button
                  aria-label='Cerrar'
                  className='absolute -right-2 -top-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-neutral-900 ring-1 ring-black/10 shadow-md transition hover:opacity-90'
                  onClick={() => setOpen(false)}
                >
                  ×
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
