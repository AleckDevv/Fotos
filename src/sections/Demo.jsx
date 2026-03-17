import React from 'react';
import { Section, SectionHeader } from '../components/Section';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon, Sparkles } from 'lucide-react';

export const Demo = () => {
  return (
    <Section id="demo" className="bg-slate-900/50 border-y border-slate-800/50">
      <SectionHeader 
        title="O Poder da Restauração Digital"
        subtitle="Veja com seus próprios olhos como nossa tecnologia e expertise artística são capazes de transformar memórias quase perdidas em imagens perfeitas."
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-1 rounded-3xl bg-gradient-to-br from-gold-500/20 via-slate-800 to-slate-900 shadow-2xl">
            {/* Using placeholder images that look like old/new photos */}
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1541981678122-ce51f0c3fd34?q=80&w=1471&auto=format&fit=crop&blur=10&sepia=100"
              afterImage="https://images.unsplash.com/photo-1541981678122-ce51f0c3fd34?q=80&w=1471&auto=format&fit=crop"
              className="rounded-3xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-semibold text-white">
              Recuperamos cada detalhe
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Fotografias antigas sofrem com a ação do tempo, rasgos, manchas e perda de cor. Nossa equipe utiliza técnicas avançadas para reconstruir pixels perdidos e trazer de volta a vibração original da sua memória.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: Camera, title: "Correção de Cores", desc: "Ajuste preciso de brilho, contraste e saturação." },
              { icon: Sparkles, title: "Remoção de Danos", desc: "Eliminamos arranhões, manchas e rasgos." },
              { icon: ImageIcon, title: "Upscaling em Alta Definição", desc: "Aumentamos a resolução sem perder qualidade." },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-700/50"
              >
                <div className="p-3 rounded-lg bg-gold-500/10 text-gold-400">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">{feature.title}</h4>
                  <p className="text-slate-400">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
