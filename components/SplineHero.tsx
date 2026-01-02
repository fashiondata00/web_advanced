
import React from 'react';

const SplineHero: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col lg:flex-row items-center">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-20"></div>
      <div className="scanline"></div>

      {/* Hero Content */}
      <div className="relative z-20 w-full lg:w-1/2 px-8 lg:px-20 pt-32 lg:pt-0 flex flex-col justify-center">
        <h2 className="mono text-neon text-sm mb-4 tracking-[0.3em] uppercase">Phase 04 // Humanoid Integration</h2>
        <h1 className="text-7xl lg:text-[12rem] font-bold leading-none tracking-tighter uppercase mb-8">
          TECH<br/>ARMOR
        </h1>
        <p className="max-w-md text-zinc-400 text-lg mb-12 uppercase tracking-wide leading-relaxed">
          The convergence of biological elegance and synthetic durability. 
          Crafted for the high-frequency lifestyle of the new era.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-10 py-5 bg-neon text-black font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1">
            Browse Gear
          </button>
          <button className="px-10 py-5 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Core Archive
          </button>
        </div>
      </div>

      {/* Spline Container */}
      <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full cursor-grab active:cursor-grabbing">
        <iframe 
          src="https://my.spline.design/r4xbot-DGRVWqcDnSoz6g0xaz1f6USJ/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          className="pointer-events-auto"
        ></iframe>
        
        {/* Floating Technical Specs */}
        <div className="absolute bottom-10 right-10 p-6 border border-zinc-800 bg-black/80 backdrop-blur-md hidden xl:block">
          <div className="flex flex-col gap-2 mono text-[10px] text-zinc-500">
            <div className="flex justify-between gap-12">
              <span>MODEL:</span>
              <span className="text-white">R4X-BOT UNIT</span>
            </div>
            <div className="flex justify-between gap-12">
              <span>FIRMWARE:</span>
              <span className="text-neon">v2.5.0 STABLE</span>
            </div>
            <div className="flex justify-between gap-12">
              <span>ARMOR CLASS:</span>
              <span className="text-white">CARBON COMPOSITE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplineHero;
