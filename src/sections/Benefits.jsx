import React from 'react';
import { Section, SectionHeader } from '../components/Section';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Award, ImagePlus, UserCheck, Zap } from 'lucide-react';

export const Benefits = () => {
  const benefits = [
    {
      icon: ImagePlus,
      title: "Resolução 4K",
      description: "Recuperamos a nitidez e o tamanho original, ideal para impressões em grandes formatos."
    },
    {
      icon: Award,
      title: "Qualidade Premium",
      description: "Equipe de artistas digitais especializados garantem um acabamento natural e perfeito."
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Sua foto restaurada digitalmente pronta em até 48 horas úteis."
    },
    {
      icon: ShieldCheck,
      title: "Privacidade Garantida",
      description: "Seus arquivos são tratados com total sigilo e deletados de nossos servidores após a entrega."
    },
    {
      icon: UserCheck,
      title: "100% de Satisfação",
      description: "Ajustes ilimitados até que você esteja completamente satisfeito com o resultado."
    },
    {
      icon: Zap,
      title: "IA + Toque Humano",
      description: "Combinamos o poder da inteligência artificial com a sensibilidade de artistas de restauração."
    }
  ];

  return (
    <Section id="benefits">
      <SectionHeader 
        title="Por que escolher nosso serviço?"
        subtitle="Unimos tecnologia de ponta e cuidado artesanal para oferecer o melhor resultado possível para suas fotos."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-gold-500/30 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 text-gold-400 group-hover:bg-gold-500/10 group-hover:scale-110 transition-all duration-300">
              <benefit.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium text-white mb-3 group-hover:text-gold-400 transition-colors">
              {benefit.title}
            </h3>
            <p className="text-slate-400 leading-relaxed">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
