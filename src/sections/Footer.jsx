import React from 'react';
import { Instagram, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-white mb-4">
              RestaurArt<span className="text-gold-500">.</span>
            </h3>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Especialistas em restauração digital de fotografias e preservação de memórias familiares por meio da arte e tecnologia.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: MessageCircle, href: "#", label: "WhatsApp" },
                { icon: Mail, href: "#", label: "Email" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-500/50 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-4">Navegação</h4>
            <ul className="space-y-3">
              {['Como Funciona', 'Galeria', 'Benefícios', 'Depoimentos'].map((item, idx) => (
                <li key={idx}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-gold-400 transition-colors flex items-center gap-1 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-gold-400" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-4">Contato Direto</h4>
            <div className="space-y-4">
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-green-500/50 hover:bg-slate-900 transition-colors group">
                <div className="p-2 rounded-lg bg-green-500/10 text-green-500 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Atendimento WhatsApp</p>
                  <p className="text-white font-medium group-hover:text-green-400 transition-colors">(11) 99999-9999</p>
                </div>
              </a>
              <a href="mailto:contato@restaurart.com" className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-gold-500/50 hover:bg-slate-900 transition-colors group">
                <div className="p-2 rounded-lg bg-gold-500/10 text-gold-500 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email Comercial</p>
                  <p className="text-white font-medium group-hover:text-gold-400 transition-colors break-all text-sm">contato@restaurart.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {currentYear} RestaurArt. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300">Termos de Uso</a>
            <a href="#" className="hover:text-slate-300">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
