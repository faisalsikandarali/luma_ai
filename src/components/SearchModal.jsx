import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Sparkles, CornerDownLeft } from 'lucide-react';
import { playSound } from '../utils/sound';

export const SearchModal = ({ isOpen, onClose, items, onSelectItem }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const filtered = items.filter((item) => {
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        playSound('click');
        onSelectItem(filtered[selectedIndex]);
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
      />

      {/* Palette Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        onKeyDown={handleKeyDown}
        className="relative w-full max-w-xl rounded-2xl bg-white dark:bg-[#0d0f18] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden z-10"
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search widgets, categories, or keywords..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-slate-400 hover:text-slate-700 dark:hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block font-mono text-[10px] bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200 dark:border-white/10">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-white/5 scrollbar-thin">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-xs font-mono">
              No components found matching "<span className="text-slate-900 dark:text-white font-bold">{query}</span>"
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    playSound('click');
                    onSelectItem(item);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-xl cursor-pointer flex items-center justify-between gap-3 transition-colors ${
                    isSelected 
                      ? 'bg-indigo-50 border border-indigo-200 text-indigo-950 dark:bg-indigo-600/20 dark:border-indigo-500/30 dark:text-white' 
                      : 'hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="w-7 h-7 rounded-lg bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                      <Sparkles className="w-3.5 h-3.5" />
                    </span>
                    <div className="truncate">
                      <div className="text-xs font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                        <span>{item.title}</span>
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-100 dark:bg-white/10 text-indigo-700 dark:text-indigo-300 border border-slate-200 dark:border-transparent font-bold">
                          {item.badge}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                        {item.description}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono text-slate-500 capitalize bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded border border-slate-200 dark:border-transparent">
                      {item.category}
                    </span>
                    <CornerDownLeft className={`w-3.5 h-3.5 ${isSelected ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`} />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Quick Footer Navigation Hint */}
        <div className="p-2.5 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#090a10] text-[11px] font-mono text-slate-500 flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-indigo-600 dark:text-indigo-400 font-bold">{filtered.length} Results</span>
        </div>
      </motion.div>
    </div>
  );
};
