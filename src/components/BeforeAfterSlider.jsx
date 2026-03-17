import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GripVertical } from 'lucide-react';
import { cn } from '../utils/cn';

export const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage, 
  className 
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - containerRect.left) / containerRect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', handleMove);
    };
  }, [isDragging]);

  return (
    <div 
      className={cn("relative w-full aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden select-none", className)}
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="Foto Restaurada" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      
      {/* Before Image (Foreground, Clipped) */}
      <img 
        src={beforeImage} 
        alt="Foto Original" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      />

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize hover:bg-gold-400 transition-colors"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-transform text-slate-900 border border-slate-200">
          <GripVertical className="w-5 h-5 text-slate-500" />
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium tracking-wide text-white border border-white/10 pointer-events-none">
        Original
      </div>
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium tracking-wide text-white border border-white/10 pointer-events-none">
        Restaurada
      </div>
    </div>
  );
};
