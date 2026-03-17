import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';
import { Heart, MessagesSquare } from 'lucide-react';

export const EmotionalCall = () => {
  return (
    <Section id="transform" className="py-24 md:py-40 relative border-y border-slate-800/50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581405105151-6d7168db6e56?q=80&w=2000&auto=format&fit=crop" 
          alt="Emotional background" 
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900/40 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-slate-700/50 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gold-500/20 rounded-full blur-[100px] pointer-events-none" />

          <Heart className="w-12 h-12 text-gold-400 mx-auto mb-8 animate-pulse" />
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Algumas memórias merecem ser <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-200">preservadas para sempre.</span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-10 text-balance max-w-2xl mx-auto">
            Não deixe que o tempo apague o rosto das pessoas que você ama. Dê o primeiro passo para resgatar a sua história.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-gold-500/20 text-lg" href="https://wa.me/5586994792915" target="_blank">
              Começar Restauração
            </Button>
            <Button size="lg" variant="outline" icon={MessagesSquare} className="w-full sm:w-auto text-lg bg-slate-950/50" href="https://wa.me/5586994792915" target="_blank">
              Falar com Atendimento
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-slate-500">
            Avaliamos sua foto sem compromisso antes de iniciar o trabalho.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};
