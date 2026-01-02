
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Exoskeleton Parka',
    category: 'Outerwear',
    price: '$2,450',
    image: 'https://picsum.photos/seed/tech1/800/1000',
    specs: ['3-Layer Gore-Tex', 'Carbon Infusion', 'Reactive Thermal'],
    techDescription: 'Full environmental shielding with integrated articulation support.'
  },
  {
    id: '2',
    name: 'Neural Cargo',
    category: 'Trousers',
    price: '$890',
    image: 'https://picsum.photos/seed/tech2/800/1000',
    specs: ['Dyneema Ripstop', 'Magnetic Utility', 'Modular Pockets'],
    techDescription: 'Ultra-durable tactical geometry with rapid-access deployment systems.'
  },
  {
    id: '3',
    name: 'Ocular Visor v.2',
    category: 'Accessories',
    price: '$1,200',
    image: 'https://picsum.photos/seed/tech3/800/1000',
    specs: ['AR-HUD Integration', 'Smart Tint', 'Bio-Sync'],
    techDescription: 'Next-gen situational awareness with biometric data feedback.'
  }
];

const ProductSection: React.FC = () => {
  return (
    <section className="bg-black py-32 px-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-end mb-24 border-b border-zinc-800 pb-12">
          <div>
            <span className="mono text-neon uppercase tracking-widest text-sm mb-4 block">Archive 2025 // Collection</span>
            <h2 className="text-6xl font-bold uppercase tracking-tighter">New Iterations</h2>
          </div>
          <button className="mono text-sm uppercase tracking-widest hover:text-neon transition-colors flex items-center gap-2">
            View All Series <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-[4/5] overflow-hidden bg-zinc-900 mb-6 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur p-3 border border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="mono text-xs font-bold text-neon">{product.price}</span>
                </div>
                
                {/* Tech Hover Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black via-black/80 to-transparent">
                   <div className="flex flex-wrap gap-2 mb-4">
                     {product.specs.map(spec => (
                       <span key={spec} className="px-2 py-1 bg-neon text-black text-[10px] mono font-bold">{spec}</span>
                     ))}
                   </div>
                   <p className="text-sm text-zinc-300 mb-4">{product.techDescription}</p>
                   <button className="w-full py-3 bg-white text-black font-bold uppercase text-xs tracking-widest">Acquire Unit</button>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold uppercase mb-1 tracking-tight">{product.name}</h3>
                  <span className="mono text-xs text-zinc-500 uppercase">{product.category}</span>
                </div>
                <div className="mono text-sm text-zinc-400">
                  {product.id.padStart(3, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
