import { Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Footer from './components/Footer';
import { eventos, slides } from './mockSlides/slides';
import imagen from './assets/imagen3.webp';

// Splash
import SplashNotary from './components/splash/SplashNotary';
import StatsStrip from './components/sections/StatsStrip';
import ColegioInfo from './components/sections/ColegioInfo';
import ConciliacionMediacion from './components/sections/ConciliacionMediacion';
import GallerySection from './components/sections/GallerySection';

export default function App() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = show ? 'hidden' : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [show]);

  return (
    <>
      <SplashNotary
        show={show}
        onFinish={() => setShow(false)}
        brand='Colegio de Notarios'
        bgImage={imagen}
        overlayOpacity={0.5}
      />

      <div
        aria-hidden={show}
        className={`transition-all duration-500 ${
          show
            ? 'blur-lg saturate-75 scale-[0.995]'
            : 'blur-0 saturate-100 scale-100'
        }`}
      >
        <Suspense fallback={null}>
          <Navbar />

          <Hero slides={slides} autoPlay interval={6000} />

          <StatsStrip enabled={!show} />

          <ColegioInfo />

          <ConciliacionMediacion />

          <GallerySection />

          <Events items={eventos} className='py-12 md:py-16' />

          <Footer />
        </Suspense>
      </div>
    </>
  );
}
