import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

export const Section = ({ 
  children, 
  className, 
  id,
  containerClass,
  ...props 
}) => {
  return (
    <section 
      id={id} 
      className={cn("py-20 md:py-32 relative overflow-hidden", className)}
      {...props}
    >
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", containerClass)}>
        {children}
      </div>
    </section>
  );
};

export const SectionHeader = ({ title, subtitle, align = 'center', className }) => {
  const aligns = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto"
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn("max-w-3xl mb-16", aligns[align], className)}
    >
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-50 mb-6 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
