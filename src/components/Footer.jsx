import React, { useState } from 'react';
import { Sparkles, Terminal, Heart, ArrowRight, CheckCircle2, Shield, Zap } from 'lucide-react';
import { playSound } from '../utils/sound';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    playSound('success');
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="w-full border-t border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-[#07080d] mt-24 text-slate-600 dark:text-slate-400 text-xs font-sans transition-colors duration-200">
      
      {/* Installation Guide Banner */}
      <div id="install-guide" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#121422] dark:to-[#0c0e18] border border-slate-200 dark:border-white/10 p-8 sm:p-12 relative overflow-hidden shadow-lg dark:shadow-2xl">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-mono mb-4">
              <Zap className="w-3.5 h-3.5 text-indigo-500" />
              <span>3-Step Quick Integration</span>
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 dark:text-white mb-4">
              Drop Modern Micro-Interactions Directly Into Your React Project.
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-6">
              No huge runtime NPM package bloat. Simply install the peer dependencies, copy the component code snippet, and customize Tailwind classes directly in your code.
            </p>

            <div className="space-y-3 font-mono text-xs max-w-xl">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-black/60 border border-slate-200 dark:border-white/10 flex items-center justify-between text-slate-800 dark:text-slate-200 shadow-xs">
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">$ npm install framer-motion lucide-react canvas-confetti</span>
                <button 
                  onClick={() => {
                    playSound('success');
                    navigator.clipboard.writeText('npm install framer-motion lucide-react canvas-confetti');
                  }}
                  className="px-2 py-1 rounded bg-slate-200 hover:bg-slate-300 dark:bg-white/10 dark:hover:bg-white/20 text-[10px] text-slate-800 dark:text-white font-bold transition-colors"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200 dark:border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-white dark:bg-[#0d0f18] rounded-[11px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
              <span className="font-heading font-bold text-base text-slate-900 dark:text-white">
                LUMINA<span className="text-indigo-600 dark:text-indigo-400">UI</span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
              Next-generation animated UI widgets and micro-interactions for modern web experiences. Designed to outshine standard component kits.
            </p>
          </div>

          {/* Col 2: Categories */}
          <div>
            <h4 className="font-heading font-semibold text-slate-900 dark:text-white mb-3 text-xs uppercase tracking-wider">
              Component Hub
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#components-section" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Magnetic Buttons</a></li>
              <li><a href="#components-section" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">3D Hologram Cards</a></li>
              <li><a href="#components-section" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Cyberpunk Text FX</a></li>
              <li><a href="#components-section" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Dynamic Island Badges</a></li>
              <li><a href="#components-section" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Quantum Spinners</a></li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="font-heading font-semibold text-slate-900 dark:text-white mb-3 text-xs uppercase tracking-wider">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="https://framer.com/motion" target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Framer Motion Docs</a></li>
              <li><a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Tailwind CSS v4</a></li>
              <li><a href="https://lucide.dev" target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Lucide React Icons</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Open Source Repo</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="font-heading font-semibold text-slate-900 dark:text-white mb-3 text-xs uppercase tracking-wider">
              Stay in the Loop
            </h4>
            <p className="text-slate-500 dark:text-slate-400 text-xs mb-3">
              Get notified whenever fresh animated widgets and micro-interactions drop.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="developer@acme.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white dark:bg-[#0d0f18] border border-slate-200 dark:border-white/10 rounded-xl px-3.5 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 shadow-xs"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Subscribed! Welcome</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe to Updates</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © 2026 Lumina UI Studio. Crafted with React for modern web creators.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              All Systems 100% Operational
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
};
