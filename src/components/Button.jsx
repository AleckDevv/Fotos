import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const variants = {
  primary: "bg-gold-500 text-slate-950 hover:bg-gold-400 border border-transparent shadow-[0_0_15px_rgba(245,158,11,0.3)]",
  secondary: "bg-transparent text-gold-500 border border-gold-500/50 hover:bg-gold-500/10",
  outline: "bg-transparent text-slate-200 border border-slate-700 hover:border-slate-500 hover:bg-slate-800",
  ghost: "bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/50",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg font-medium",
};

export const Button = React.forwardRef(({
  children,
  className,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  href,
  target,
  whileHover = { scale: 1.02 },
  whileTap = { scale: 0.98 },
  ...props
}, ref) => {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      href={href}
      target={target}
      whileHover={whileHover}
      whileTap={whileTap}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:ring-offset-2 focus:ring-offset-slate-950",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </Component>
  );
});

Button.displayName = 'Button';
