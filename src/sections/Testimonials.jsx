import React from 'react';
import { Section, SectionHeader } from '../components/Section';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Presenteou os pais",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      text: "Eu chorei quando vi o resultado. Era a única foto que minha mãe tinha da infância dela, e estava quase toda destruída. Agora parece que foi tirada ontem. É magia pura."
    },
    {
      name: "Carlos Roberto",
      role: "Preservação familiar",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
      text: "O nível de detalhe que conseguiram recuperar do rosto do meu avô me deixou sem palavras. Mandei revelar em um quadro enorme para a sala."
    },
    {
      name: "Ana Beatriz",
      role: "Para convite de casamento",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
      text: "Usamos as fotos antigas dos nossos avós para a decoração do nosso casamento. A restauração deixou as imagens tão nítidas que pareciam de um ensaio profissional moderno."
    }
  ];

  return (
    <Section id="testimonials" className="bg-slate-900/30">
      <SectionHeader 
        title="Histórias de Emoção"
        subtitle="O que nossos clientes sentiram ao receber suas memórias restauradas."
      />

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="p-8 rounded-3xl bg-slate-900 border border-slate-800 relative"
          >
            <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-800" />
            
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
              ))}
            </div>

            <p className="text-slate-300 leading-relaxed mb-8 italic relative z-10">
              "{testimonial.text}"
            </p>

            <div className="flex items-center gap-4 mt-auto">
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-slate-800"
                loading="lazy"
              />
              <div>
                <h4 className="font-medium text-white">{testimonial.name}</h4>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
