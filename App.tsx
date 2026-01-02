
import React from 'react';
import Navbar from './components/Navbar';
import SplineHero from './components/SplineHero';
import ProductSection from './components/ProductSection';
import AIStylist from './components/AIStylist';
import { Github, Twitter, Instagram, ArrowUpRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-neon selection:text-black">
      <Navbar />
      <main>
        <SplineHero />
        
        {/* Scrolling Banner */}
        <div className="bg-neon text-black py-4 overflow-hidden border-y-2 border-black whitespace-nowrap">
          <div className="inline-block animate-scroll text-2xl font-black uppercase tracking-tighter">
            &nbsp; HIGH-PERFORMANCE WEAR // NEURAL SYNC ACTIVE // CARBON-INFUSED FABRIC // LIMITED ARCHIVE DROPPING SOON //&nbsp;
            &nbsp; HIGH-PERFORMANCE WEAR // NEURAL SYNC ACTIVE // CARBON-INFUSED FABRIC // LIMITED ARCHIVE DROPPING SOON //&nbsp;
          </div>
        </div>

        <ProductSection />

        <AIStylist />

        {/* Brand Philosophy Section */}
        <section className="py-40 px-6 bg-white text-black">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/tech4/1000/1000" 
                alt="Tech aesthetics" 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute top-0 right-0 bg-black text-white p-8 translate-x-12 -translate-y-12 hidden xl:block">
                <h3 className="text-4xl font-bold uppercase tracking-tighter mb-4">Brutalist <br/> Logic.</h3>
                <p className="mono text-xs max-w-[200px]">Design is a function of survival in the digital landscape.</p>
              </div>
            </div>
            <div>
              <span className="mono text-sm uppercase tracking-[0.4em] mb-8 block font-bold text-zinc-500 underline decoration-neon underline-offset-8">The Core Protocol</span>
              <h2 className="text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-12">
                BEYOND <br/> HUMAN <br/> <span className="text-zinc-300">LIMITS.</span>
              </h2>
              <p className="text-xl leading-relaxed max-w-xl mb-12 font-medium uppercase text-zinc-800">
                Neo-Cyber is not just clothing. It is a biological upgrade. 
                Our garments are engineered using proprietary fiber-welding techniques 
                and kinetic-response patterns that adapt to your body's thermal output.
              </p>
              <button className="flex items-center gap-4 text-2xl font-bold uppercase group">
                Explore the Tech-Lab 
                <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <ArrowUpRight />
                </div>
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black py-24 px-6 border-t border-zinc-900">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
            <div className="max-w-md">
              <h2 className="text-8xl font-black uppercase tracking-tighter mb-8 leading-none">NEO-CYBER</h2>
              <p className="mono text-zinc-500 text-sm uppercase leading-loose">
                Established 2025. Tokyo / Seoul / London / New York. 
                Pioneering the future of technical apparel through 
                generative design and neural-interfaced manufacturing.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-24 uppercase font-bold tracking-widest text-sm">
              <div className="flex flex-col gap-6">
                <span className="text-zinc-600 mono text-xs">Navigation</span>
                <a href="#" className="hover:text-neon">Collection</a>
                <a href="#" className="hover:text-neon">Archvies</a>
                <a href="#" className="hover:text-neon">Lookbook</a>
              </div>
              <div className="flex flex-col gap-6">
                <span className="text-zinc-600 mono text-xs">Information</span>
                <a href="#" className="hover:text-neon">Shipping</a>
                <a href="#" className="hover:text-neon">Repairs</a>
                <a href="#" className="hover:text-neon">Sustainability</a>
              </div>
              <div className="flex flex-col gap-6">
                <span className="text-zinc-600 mono text-xs">Social</span>
                <a href="#" className="flex items-center gap-2 hover:text-neon"><Twitter size={14}/> X.com</a>
                <a href="#" className="flex items-center gap-2 hover:text-neon"><Instagram size={14}/> Instagram</a>
                <a href="#" className="flex items-center gap-2 hover:text-neon"><Github size={14}/> GitHub</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-900 mono text-[10px] text-zinc-700 tracking-[0.3em] uppercase">
            <div>© 2025 NEO-CYBER CORPORATION // ALL RIGHTS RESERVED</div>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#">Privacy Protocol</a>
              <a href="#">Security Nodes</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: inline-block;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
