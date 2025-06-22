
import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-full blur-xl animate-float" />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-neon-pink/20 to-neon-yellow/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/6 w-16 h-16 bg-gradient-to-br from-neon-green/20 to-neon-blue/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/6 right-1/3 w-20 h-20 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      
      {/* Floating icons */}
      <div className="absolute top-1/3 right-1/6 text-neon-blue/30 animate-float" style={{ animationDelay: '3s' }}>
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
        </svg>
      </div>
      
      <div className="absolute bottom-1/3 left-1/3 text-neon-green/30 animate-float" style={{ animationDelay: '5s' }}>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  );
};

export default FloatingElements;
