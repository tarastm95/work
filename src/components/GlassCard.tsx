
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className, 
  hover = true,
  gradient = false 
}) => {
  return (
    <div className={cn(
      "backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl",
      "shadow-xl shadow-black/10",
      gradient && "bg-gradient-to-br from-white/10 to-white/5",
      hover && "hover:bg-white/15 hover:border-white/30 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1",
      "transition-all duration-300",
      className
    )}>
      {children}
    </div>
  );
};

export default GlassCard;
