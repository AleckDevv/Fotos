import React, { useEffect } from 'react';
import { Hero } from './sections/Hero';
import { Demo } from './sections/Demo';
import { HowItWorks } from './sections/HowItWorks';
import { Gallery } from './sections/Gallery';
import { Benefits } from './sections/Benefits';
import { Pricing } from './sections/Pricing';
import { Testimonials } from './sections/Testimonials';
import { EmotionalCall } from './sections/EmotionalCall';
import { Footer } from './sections/Footer';

function App() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;
      
      const href = target.getAttribute('href');
      if (href?.startsWith('#') && href !== '#') {
        e.preventDefault();
        try {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } catch {
          // Ignore invalid selectors silently
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-50 selection:bg-gold-500/30 selection:text-gold-200">
      {/* 
        Header/Nav could go here, but for a pure landing page, 
        often we let the Hero take the full initial view 
      */}
      
      <main className="flex-grow">
        <Hero />
        <Demo />
        <HowItWorks />
        <Gallery />
        <Benefits />
        <Pricing />
        <Testimonials />
        <EmotionalCall />
      </main>

      <Footer />
    </div>
  );
}

export default App;
