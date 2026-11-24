import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { playSound } from '../utils/sound';

export const Hero = ({ onExplore, totalComponents }) => {
  return (
    <div className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Ambient Aurora Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-cyan-400/15 dark:from-indigo-600/20 dark:via-purple-600/15 dark:to-cyan-500/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-blue-500/10 dark:bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto text-center">
        {/* Top Announcement Pill */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 dark:bg-gradient-to-r dark:from-indigo-500/15 dark:via-purple-500/15 dark:to-cyan-500/15 border border-indigo-500/20 dark:border-indigo-500/30 text-xs font-medium text-indigo-800 dark:text-indigo-200 mb-6 backdrop-blur-md shadow-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-ping" />
          <span className="font-semibold text-indigo-900 dark:text-white">Live Platform:</span>
          <span>{totalComponents} Animated UI Widgets & Micro-Interactions</span>
          <ArrowRight className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
        </motion.div>

        {/* Big Bold Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]"
        >
          Animated UI Widgets That{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 dark:from-indigo-400 dark:via-violet-300 dark:to-cyan-400 bg-clip-text text-transparent">
            Click, Bounce & Glow.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300/90 leading-relaxed mb-8"
        >
          An elite open-source collection of interactive React components built with{' '}
          <strong className="text-slate-900 dark:text-white font-semibold">Framer Motion</strong> and{' '}
          <strong className="text-slate-900 dark:text-white font-semibold">Tailwind CSS</strong>. Crafted with 
          tactile feedback, spring physics, and instant copy-paste code.
        </motion.p>

        {/* Hero Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => {
              playSound('click');
              onExplore();
            }}
            className="px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all flex items-center gap-2 group active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
            <span>Explore All 100 Widgets</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#install-guide"
            onClick={() => playSound('click')}
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 font-medium text-sm transition-all shadow-sm flex items-center gap-2"
          >
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Quick Start Guide</span>
          </a>
        </motion.div>

        {/* Feature Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto text-left text-xs font-mono">
          <div className="p-3 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 shadow-xs flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
            <span>Copy-Paste TSX / JSX</span>
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 shadow-xs flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0" />
            <span>60 FPS Spring Physics</span>
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 shadow-xs flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
            <span>Zero Complex Config</span>
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 shadow-xs flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
            <span>Light & Dark Modes</span>
          </div>
        </div>
      </div>
    </div>
  );
};
