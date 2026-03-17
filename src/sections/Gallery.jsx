import React from 'react';
import { Section, SectionHeader } from '../components/Section';
import { motion, useScroll, useTransform } from 'framer-motion';

import img1 from '../assets/pexels-asaadoro-19186568.jpg';
import img2 from '../assets/pexels-asaadoro-191865689.jpg';
import img3 from '../assets/pexels-emris-6073561.jpg';
import img4 from '../assets/pexels-gatsby-yang-857486579-19682551.jpg';
import img5 from '../assets/pexels-hannah-bickmore-105653438-12551623.jpg';
import img6 from '../assets/pexels-orange-visuals-2159990578-36537399.jpg';

export const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <Section id="gallery" className="bg-slate-950 border-t border-slate-800/50">
      <SectionHeader 
        title="Nossa Arte"
        subtitle="Explore algumas das memórias que tivemos o privilégio de trazer de volta à vida."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-800"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <img 
              src={img} 
              alt={`Exemplo de restauração ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-gold-400 bg-black/50 backdrop-blur-md rounded-full border border-gold-500/20">
                Restaurada
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-400 italic text-lg"
        >
          * Estas são simulações de demonstração visual. Os rostos e imagens acima podem ter sido gerados para fins ilustrativos.
        </motion.p>
      </div>
    </Section>
  );
};
