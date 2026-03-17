import React from 'react';
import { Section, SectionHeader } from '../components/Section';
import { motion } from 'framer-motion';
import { UploadCloud, Paintbrush, Heart } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      icon: UploadCloud,
      title: "Envie sua Foto",
      description: "Faça o upload da foto danificada, antiga ou em baixa resolução de forma segura em nossa plataforma.",
      delay: 0.2
    },
    {
      icon: Paintbrush,
      title: "Nós Restauramos",
      description: "Nossos especialistas utilizam inteligência artificial e edição manual meticulosa para recuperar sua imagem.",
      delay: 0.4
    },
    {
      icon: Heart,
      title: "Memória Salva",
      description: "Receba sua foto em alta resolução, pronta para ser impressa, emoldurada ou compartilhada com quem você ama.",
      delay: 0.6
    }
  ];

  return (
    <Section id="how-it-works" className="relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

      <SectionHeader 
        title="Simples, rápido e emocionante"
        subtitle="Em apenas 3 passos sua memória será eternizada com qualidade impecável."
      />

      <div className="grid md:grid-cols-3 gap-8 relative mt-20">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0" />

        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: step.delay }}
            className="relative z-10 flex flex-col items-center text-center group"
          >
            <div className="w-24 h-24 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center mb-8 shadow-xl group-hover:border-gold-500/50 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all duration-300">
              <div className="absolute top-0 right-0 w-8 h-8 bg-gold-500 text-slate-900 rounded-full flex items-center justify-center font-bold text-sm translate-x-1/4 -translate-y-1/4 shadow-lg">
                {idx + 1}
              </div>
              <step.icon className="w-10 h-10 text-gold-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            
            <h3 className="text-2xl font-serif font-medium text-white mb-4">
              {step.title}
            </h3>
            
            <p className="text-slate-400 leading-relaxed max-w-xs mx-auto">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
