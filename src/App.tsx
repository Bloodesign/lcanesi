import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (loading) return;
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans overflow-x-hidden">
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {!loading && (
        <main className="animate-fade-up pb-20 md:pb-0">
          <Header />
          <div className="relative z-10">
            <Hero />
            <Benefits />
            <Pricing />
            <FinalCTA />
            <Footer />
          </div>
        </main>
      )}

      {/* Sticky CTA — mobile uniquement */}
      {!loading && (
        <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-3 shadow-lg">
          <a
            href="#qualification"
            className="block w-full text-center bg-[#1B3A6B] text-white font-semibold py-3 px-6 rounded-full text-sm btn-3d"
          >
            Soumettre ma candidature →
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
