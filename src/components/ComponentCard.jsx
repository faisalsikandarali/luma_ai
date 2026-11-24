import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Copy, Check, Code2, Eye, Maximize2, Heart, Sparkles, 
  Terminal, Smartphone, Monitor, Tablet, Package 
} from 'lucide-react';
import { playSound } from '../utils/sound';

export const ComponentCard = ({ 
  item, 
  isFavorite, 
  onToggleFavorite, 
  onInspect,
  viewMode = 'grid'
}) => {
  const [tab, setTab] = useState('preview'); // 'preview' | 'code' | 'deps'
  const [copied, setCopied] = useState(false);
  const [previewWidth, setPreviewWidth] = useState('full'); // 'full' | 'tablet' | 'mobile'
  const ComponentToRender = item.component;

  const handleCopyCode = (e) => {
    e.stopPropagation();
    playSound('success');
    navigator.clipboard.writeText(item.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyDeps = (e) => {
    e.stopPropagation();
    playSound('success');
    const cmd = item.dependencies.length > 0 ? `npm install ${item.dependencies.join(' ')}` : 'No additional dependencies required';
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getBadgeStyle = (badge) => {
    switch (badge) {
      case 'HOT':
        return 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/15 dark:text-rose-300 dark:border-rose-500/30';
      case 'NEW':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/30';
      case '3D':
        return 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-500/15 dark:text-cyan-300 dark:border-cyan-500/30';
      case 'TRENDING':
        return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/30';
      default:
        return 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-300 dark:border-indigo-500/30';
    }
  };

  return (
    <div className="group relative rounded-2xl bg-white dark:bg-[#0c0e16] border border-slate-200 dark:border-white/10 hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all duration-300 shadow-sm hover:shadow-lg dark:shadow-xl overflow-hidden flex flex-col justify-between">
      
      {/* Top Header Bar */}
      <div className="p-4 border-b border-slate-200 dark:border-white/5 flex items-center justify-between gap-2 bg-slate-50/70 dark:bg-[#090a10]">
        <div className="flex items-center gap-2.5 truncate">
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-bold ${getBadgeStyle(item.badge)}`}>
            {item.badge}
          </span>
          <h3 className="font-heading font-semibold text-sm text-slate-800 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
            {item.title}
          </h3>
        </div>

        {/* Header Right Actions */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Favorite Star Button */}
          <button
            onClick={() => {
              playSound('pop');
              onToggleFavorite(item.id);
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            title={isFavorite ? "Remove from Starred" : "Star component"}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>

          {/* Fullscreen Inspect Modal */}
          <button
            onClick={() => {
              playSound('click');
              onInspect(item);
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            title="Inspect in full modal"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mode Switch Tabs Bar */}
      <div className="px-4 py-2 border-b border-slate-200 dark:border-white/5 flex items-center justify-between text-xs bg-slate-50/40 dark:bg-[#090a10]/50">
        <div className="flex items-center gap-1">
          <button
            onClick={() => {
              playSound('click');
              setTab('preview');
            }}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-medium transition-colors ${
              tab === 'preview'
                ? 'bg-white text-slate-900 border border-slate-200 shadow-xs dark:border-transparent dark:bg-white/10 dark:text-white'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Preview</span>
          </button>

          <button
            onClick={() => {
              playSound('click');
              setTab('code');
            }}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-medium transition-colors ${
              tab === 'code'
                ? 'bg-white text-slate-900 border border-slate-200 shadow-xs dark:border-transparent dark:bg-white/10 dark:text-white'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Code</span>
          </button>

          <button
            onClick={() => {
              playSound('click');
              setTab('deps');
            }}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-medium transition-colors ${
              tab === 'deps'
                ? 'bg-white text-slate-900 border border-slate-200 shadow-xs dark:border-transparent dark:bg-white/10 dark:text-white'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Package className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Install</span>
          </button>
        </div>

        {/* Frame Width Switcher in Preview mode */}
        {tab === 'preview' ? (
          <div className="hidden sm:flex items-center gap-1 text-slate-400">
            <button
              onClick={() => setPreviewWidth('full')}
              className={`p-1 rounded ${previewWidth === 'full' ? 'text-indigo-600 dark:text-indigo-400 bg-slate-100 dark:bg-white/5' : 'hover:text-slate-700 dark:hover:text-white'}`}
              title="Full width"
            >
              <Monitor className="w-3 h-3" />
            </button>
            <button
              onClick={() => setPreviewWidth('tablet')}
              className={`p-1 rounded ${previewWidth === 'tablet' ? 'text-indigo-600 dark:text-indigo-400 bg-slate-100 dark:bg-white/5' : 'hover:text-slate-700 dark:hover:text-white'}`}
              title="Tablet (420px)"
            >
              <Tablet className="w-3 h-3" />
            </button>
            <button
              onClick={() => setPreviewWidth('mobile')}
              className={`p-1 rounded ${previewWidth === 'mobile' ? 'text-indigo-600 dark:text-indigo-400 bg-slate-100 dark:bg-white/5' : 'hover:text-slate-700 dark:hover:text-white'}`}
              title="Mobile (300px)"
            >
              <Smartphone className="w-3 h-3" />
            </button>
          </div>
        ) : (
          <button
            onClick={tab === 'deps' ? handleCopyDeps : handleCopyCode}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-medium transition-colors shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-200" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>{tab === 'deps' ? 'Copy npm' : 'Copy JSX'}</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Main Content Area */}
      <div className="relative min-h-[220px] flex items-center justify-center p-6 bg-grid-pattern bg-slate-50/50 dark:bg-transparent overflow-hidden">
        {tab === 'preview' && (
          <div 
            className={`w-full flex items-center justify-center transition-all duration-300 ${
              previewWidth === 'tablet' ? 'max-w-[420px] border-x border-dashed border-slate-300 dark:border-white/10 px-4' :
              previewWidth === 'mobile' ? 'max-w-[300px] border-x border-dashed border-slate-300 dark:border-white/10 px-2' : 'w-full'
            }`}
          >
            <ComponentToRender />
          </div>
        )}

        {tab === 'code' && (
          <div className="w-full h-[220px] overflow-auto rounded-xl bg-[#090a10] border border-slate-800 dark:border-white/5 p-3 text-left font-mono text-[11px] text-slate-300 scrollbar-thin">
            <pre className="text-indigo-300 leading-relaxed">
              <code>{item.code}</code>
            </pre>
          </div>
        )}

        {tab === 'deps' && (
          <div className="w-full h-[220px] flex flex-col justify-center items-center gap-3 p-4 text-center">
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-[#090a10] border border-slate-200 dark:border-white/10 w-full max-w-sm">
              <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase mb-1">Package Dependencies</div>
              <div className="font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold select-all">
                {item.dependencies.length > 0 ? `npm install ${item.dependencies.join(' ')}` : 'Zero External Packages Needed!'}
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">
              Supports Next.js, Vite React, Remix, and Gatsby. Drop into your project components folder.
            </p>
          </div>
        )}
      </div>

      {/* Card Footer: Description, Tags & Quick Copy */}
      <div className="p-4 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#090a10]/80">
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between gap-2">
          {/* Tags */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {item.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 dark:bg-white/5 dark:text-slate-300 dark:border-white/5">
                {tag}
              </span>
            ))}
          </div>

          {/* Quick Copy Button */}
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 hover:border-indigo-400 dark:hover:border-indigo-500/40 text-xs font-mono text-slate-700 dark:text-slate-200 transition-all active:scale-95 shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>
      </div>

    </div>
  );
};
