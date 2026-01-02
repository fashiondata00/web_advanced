
import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Cpu } from 'lucide-react';
import { getFashionAdvice } from '../services/geminiService';
import { StylistResponse } from '../types';

const AIStylist: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StylistResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    const response = await getFashionAdvice(input);
    setResult(response);
    setLoading(false);
  };

  return (
    <section className="bg-zinc-950 py-32 px-6 border-y border-zinc-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <Cpu size={400} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-neon/30 text-neon rounded-full mb-6 mono text-xs uppercase tracking-widest">
            <Sparkles size={14} /> Neural Stylist Integration
          </div>
          <h2 className="text-5xl font-bold uppercase mb-6 tracking-tighter">AI-Driven <br/> Style Curation</h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto uppercase">
            Input your environment or objective. Our neural engine will calibrate the optimal tactical loadout for your profile.
          </p>
        </div>

        <div className="bg-black border border-zinc-800 p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="mb-10">
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: HEAVY RAIN IN NEON-TOKYO DOWNTOWN..."
                className="flex-1 bg-zinc-900 border border-zinc-800 px-6 py-4 text-white mono focus:outline-none focus:border-neon transition-colors uppercase text-sm"
              />
              <button 
                type="submit"
                disabled={loading}
                className="bg-neon text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-white transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin" /> : <><Send size={18} /> Analyze</>}
              </button>
            </div>
          </form>

          {result && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-800 pt-8">
                <div>
                  <h4 className="mono text-neon text-xs uppercase mb-4 tracking-widest">Recommendation</h4>
                  <p className="text-white text-xl leading-relaxed font-medium uppercase">{result.advice}</p>
                </div>
                <div>
                  <h4 className="mono text-zinc-500 text-xs uppercase mb-4 tracking-widest">Technical Payload</h4>
                  <p className="text-zinc-400 mono text-sm mb-6">{result.techSpecs}</p>
                  <div className="flex flex-wrap gap-2">
                    {result.recommendedItems.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 border border-zinc-700 text-zinc-300 text-[10px] mono uppercase">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIStylist;
