import React from 'react';
import { Section, SectionHeader } from '../components/Section';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';
import { Check, Gift } from 'lucide-react';

export const Pricing = () => {
  const whatsappNumber = "5586994792915";

  const plans = [
    {
      name: "Pacote Básico",
      photos: "1 foto",
      price: "R$ 7,50",
      gift: "+ 1 foto de brinde!",
      message: "Olá, tenho interesse no pacote básico de 1 foto (R$ 7,50)!",
      popular: false
    },
    {
      name: "Pacote Família",
      photos: "3 fotos",
      price: "R$ 10,00",
      gift: "+ 1 foto de brinde!",
      message: "Olá, tenho interesse no pacote de 3 fotos (R$ 10,00)!",
      popular: true
    },
    {
      name: "Pacote Memórias",
      photos: "5 fotos",
      price: "R$ 20,00",
      gift: "+ 1 foto de brinde!",
      message: "Olá, tenho interesse no pacote completo de 5 fotos (R$ 20,00)!",
      popular: false
    }
  ];

  return (
    <Section id="pricing" className="bg-slate-900/50 border-t border-slate-800/50">
      <SectionHeader 
        title="Planos e Preços"
        subtitle="Escolha o pacote ideal para resgatar suas memórias com a melhor qualidade e preço."
      />

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className={`relative p-8 rounded-3xl border flex flex-col ${
              plan.popular 
                ? "bg-slate-900 border-gold-500/50 shadow-[0_0_30px_rgba(245,158,11,0.1)] scale-105 z-10" 
                : "bg-slate-900 border-slate-800 hover:border-slate-700 mt-4 md:mt-0"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-gold-400 to-amber-500 text-slate-950 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                Mais Escolhido
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-xl font-medium text-white mb-2">{plan.name}</h3>
              <div className="text-3xl font-serif font-bold text-white mb-2">
                {plan.photos}
              </div>
              <div className="text-gold-400 font-semibold text-xl">
                {plan.price}
              </div>
            </div>

            <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl p-4 mb-8 text-center flex items-center justify-center gap-2 text-gold-200">
              <Gift className="w-5 h-5" />
              <span className="font-medium text-sm">{plan.gift}</span>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-slate-300">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm">Restauração de Arquivos Danificados</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm">Correção de Cores em Alta Definição</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm">Entrega Digital Rápida</span>
              </li>
            </ul>

            <Button 
              size="lg" 
              variant={plan.popular ? "primary" : "outline"}
              className="w-full"
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(plan.message)}`}
              target="_blank"
            >
              Escolher este pacote
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
