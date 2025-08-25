import { useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";

type Props = {
  show: boolean;
  onFinish: () => void;
  brand?: string;
  bgImage?: string;
  overlayOpacity?: number;
};

export default function SplashNotary({
  show,
  onFinish,
  brand = "Notaría",
  bgImage,
  overlayOpacity = 0.35,
}: Props) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(onFinish, reduce ? 800 : 2600);
    return () => clearTimeout(t);
  }, [show, onFinish, reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
        >

          <motion.div
            className="relative w-[min(86vw,520px)] h-[min(70vh,380px)] rounded-xl shadow-2xl overflow-hidden border border-neutral-200/60 dark:border-white/10"
            initial={{ y: 10, scale: 0.98, opacity: 0 }}
            animate={{
              y: 0,
              scale: 1,
              opacity: 1,
              transition: { duration: 0.4 },
            }}
          >

            {bgImage && (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
              />
            )}
     
            <div
              className="absolute inset-0"
              style={{ background: `rgba(0,0,0,${overlayOpacity})` }}
            />

            <div className="relative w-full h-full p-6">
        
              <div className="absolute top-5 left-6 right-6 flex items-center justify-between text-white">
                <div className="tracking-wide font-medium">{brand}</div>
                <motion.svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  className="opacity-70"
                  initial={{ rotate: -10, scale: 0.8 }}
                  animate={{
                    rotate: 0,
                    scale: 1,
                    transition: { duration: 0.4 },
                  }}
                >
                  <path
                    d="M12 3v3m-6 4h12m-9 0L4 16a3 3 0 0 0 6 0m8-6-3 5a3 3 0 0 0 6 0M12 6l-3 5m3-5 3 5M12 3c0-1.1-.9-2-2-2h4c-1.1 0-2 .9-2 2Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </div>

     
              <motion.svg
                viewBox="0 0 600 220"
                className="absolute inset-0 m-auto w-[88%] h-[58%] top-[22%]"
                initial={reduce ? { opacity: 1 } : { opacity: 0 }}
                animate={
                  reduce ? {} : { opacity: 1, transition: { delay: 0.1 } }
                }
              >
                <motion.path
                  d="M20 150 C 90 120, 130 200, 200 150
                     C 260 110, 300 160, 360 140
                     C 420 120, 470 180, 540 150"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: reduce ? 0.2 : 1.2,
                    ease: "easeInOut",
                  }}
                />
                <motion.path
                  d="M440 155 q10 -10 18 0 q8 10 18 0"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: reduce ? 0.2 : 0.9,
                    ease: "easeInOut",
                    delay: reduce ? 0 : 0.5,
                  }}
                />
              </motion.svg>

         
              <motion.div
                className="absolute bottom-8 right-8"
                initial={
                  reduce
                    ? { scale: 1, opacity: 1 }
                    : { y: -20, scale: 0.7, opacity: 0 }
                }
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: reduce ? 0 : 1.2,
                    type: "spring",
                    stiffness: 260,
                    damping: 16,
                  },
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur-md bg-black/40" />
                  <div className="relative w-16 h-16 rounded-full bg-rose-600/90 border border-rose-900/30 shadow-lg flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24">
                      <path
                        d="M12 3v3M6 10h12M9 10 4 18a3 3 0 1 0 6 0m10-8-5 8a3 3 0 1 0 6 0M12 6l-3 4.8M12 6l3 4.8"
                        fill="none"
                        stroke="white"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>

     
              <div className="absolute bottom-4 left-6 right-6 text-[11px] text-neutral-200">
                Preparando documentos…
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}