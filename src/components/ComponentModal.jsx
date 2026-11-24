import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Copy, Check, Sparkles, Terminal, Code2, Eye, 
  ExternalLink, Layers, Monitor, Tablet, Smartphone, Download 
} from 'lucide-react';
import { playSound } from '../utils/sound';

export const ComponentModal = ({ item, onClose }) => {
  if (!item) return null;
  const [activeTab, setActiveTab] = useState('react'); // 'react' | 'tailwind' | 'npm'
  const [copied, setCopied] = useState(false);
  const [canvasBg, setCanvasBg] = useState('grid'); // 'grid' | 'dots' | 'plain'
  const ComponentToRender = item.component;

  const handleCopy = (text) => {
    playSound('success');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const npmCommand = item.dependencies.length > 0 
    ? `npm install ${item.dependencies.join(' ')}` 
    : '# No external packages required';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop blur */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="relative w-full max-w-5xl rounded-3xl bg-white dark:bg-[#0b0d15] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Modal Header */}
          <div className="p-5 border-b border-slate-200 dark:border-white/10 flex items-center justify-between bg-slate-50 dark:bg-[#08090e]">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-500/30">
                {item.badge}
              </span>
              <div>
                <h2 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                  {item.title}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Interactive Widget Playground & Production Code Exporter
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopy(item.code)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-all shadow-md shadow-indigo-600/30 active:scale-95"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-200" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Component Code'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-800 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body: Split into Interactive Preview & Code Viewer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden min-h-[460px]">
            
            {/* Left Column: Live Interactive Canvas (6 cols) */}
            <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/10 flex flex-col bg-slate-50/60 dark:bg-[#08090d]">
              {/* Canvas Controls Bar */}
              <div className="p-3 border-b border-slate-200 dark:border-white/5 flex items-center justify-between bg-white dark:bg-[#08090e]/60 text-xs">
                <span className="text-slate-600 dark:text-slate-400 font-mono text-[11px] flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" /> Live Interactive Canvas
                </span>

                {/* Canvas Background switch */}
                <div className="flex items-center gap-1 bg-slate-100 dark:bg-white/5 p-0.5 rounded-lg text-slate-600 dark:text-slate-400 text-[10px] font-mono">
                  <button 
                    onClick={() => setCanvasBg('grid')} 
                    className={`px-2 py-0.5 rounded ${canvasBg === 'grid' ? 'bg-indigo-600 text-white font-bold' : ''}`}
                  >
                    Grid
                  </button>
                  <button 
                    onClick={() => setCanvasBg('dots')} 
                    className={`px-2 py-0.5 rounded ${canvasBg === 'dots' ? 'bg-indigo-600 text-white font-bold' : ''}`}
                  >
                    Dots
                  </button>
                  <button 
                    onClick={() => setCanvasBg('plain')} 
                    className={`px-2 py-0.5 rounded ${canvasBg === 'plain' ? 'bg-indigo-600 text-white font-bold' : ''}`}
                  >
                    Plain
                  </button>
                </div>
              </div>

              {/* Interactive Canvas */}
              <div className={`flex-1 flex items-center justify-center p-8 overflow-hidden ${
                canvasBg === 'grid' ? 'bg-grid-pattern' : 
                canvasBg === 'dots' ? 'bg-dot-pattern' : 'bg-white dark:bg-[#08090d]'
              }`}>
                <ComponentToRender />
              </div>

              {/* Specs & Dependencies Footer */}
              <div className="p-4 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#08090e]/40 text-xs text-slate-600 dark:text-slate-400 font-mono space-y-2">
                <div className="flex items-center justify-between">
                  <span>Category:</span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{item.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Required Packages:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{item.dependencies.join(', ') || 'None'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Architecture:</span>
                  <span className="text-slate-800 dark:text-slate-300">Client-Side Component ('use client')</span>
                </div>
              </div>
            </div>

            {/* Right Column: Code & Installation (6 cols) */}
            <div className="lg:col-span-6 flex flex-col bg-[#07080c]">
              {/* Code Tabs */}
              <div className="p-2 border-b border-white/10 flex items-center justify-between bg-[#08090e]">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('react')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                      activeTab === 'react' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    React (TSX / JSX)
                  </button>
                  <button
                    onClick={() => setActiveTab('npm')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                      activeTab === 'npm' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    NPM Install
                  </button>
                </div>

                <button
                  onClick={() => handleCopy(activeTab === 'npm' ? npmCommand : item.code)}
                  className="flex items-center gap-1 text-slate-400 hover:text-indigo-300 text-xs font-mono px-2 py-1 rounded bg-white/5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Code Display Area */}
              <div className="flex-1 p-4 overflow-auto text-xs font-mono text-slate-300 leading-relaxed max-h-[380px] scrollbar-thin">
                {activeTab === 'react' && (
                  <pre className="text-indigo-300">
                    <code>{item.code}</code>
                  </pre>
                )}

                {activeTab === 'npm' && (
                  <div className="space-y-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-[#0d0f18] border border-white/10 text-emerald-400">
                      <code>{npmCommand}</code>
                    </div>
                    <div className="text-slate-400 text-xs space-y-2">
                      <p className="font-semibold text-white">How to integrate:</p>
                      <ol className="list-decimal list-inside space-y-1.5 leading-relaxed">
                        <li>Install the dependencies in your project terminal.</li>
                        <li>Create a new file in your components directory (e.g. <code className="text-indigo-300 font-mono">components/ui/{item.id}.jsx</code>).</li>
                        <li>Paste the copied component code.</li>
                        <li>Import and enjoy 60FPS fluid animations!</li>
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
