
import React from 'react';
import { Menu, X, Globe, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-6 flex justify-between items-center transition-all duration-300">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-neon rounded-full animate-pulse"></div>
        <span className="text-2xl font-bold tracking-tighter uppercase text-white">NEO-CYBER</span>
      </div>

      <div className="hidden md:flex gap-12 text-sm font-medium tracking-widest uppercase items-center">
        <a href="#" className="hover:text-neon transition-colors">Collection</a>
        <a href="#" className="hover:text-neon transition-colors">Archive</a>
        <a href="#" className="hover:text-neon transition-colors">Tech-Lab</a>
        <a href="#" className="hover:text-neon transition-colors">A.I. Stylist</a>
      </div>

      <div className="flex items-center gap-6">
        <Globe size={20} className="cursor-pointer hover:text-neon transition-colors" />
        <ShoppingBag size={20} className="cursor-pointer hover:text-neon transition-colors" />
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <a href="#" className="text-4xl font-bold uppercase hover:text-neon">Collection</a>
        <a href="#" className="text-4xl font-bold uppercase hover:text-neon">Archive</a>
        <a href="#" className="text-4xl font-bold uppercase hover:text-neon">Tech-Lab</a>
        <button onClick={() => setIsOpen(false)} className="mt-8 px-8 py-4 border border-neon text-neon uppercase tracking-widest">Close</button>
      </div>
    </nav>
  );
};

export default Navbar;
