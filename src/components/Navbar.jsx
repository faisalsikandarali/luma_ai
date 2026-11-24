import React from 'react';
import { Sparkles, Volume2, VolumeX, Heart, Search, Sun, Moon, Zap } from 'lucide-react';
import { playSound } from '../utils/sound';

export const Navbar = ({ 
  theme = 'light',
  onToggleTheme,
  soundEnabled, 
  onToggleSound, 
  favoriteCount, 
  onShowFavorites, 
  showFavoritesOnly,
  onOpenSearch 
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-[#08090d]/80 backdrop-blur-xl transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div 
            onClick={() => {
              playSound('pop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 cursor-pointer group select-none"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-500 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/15 group-hover:shadow-indigo-500/30 transition-shadow">
              <div className="w-full h-full bg-slate-50 dark:bg-[#0d0f18] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                  LUMINA<span className="text-indigo-600 dark:text-indigo-400">UI</span>
                </span>
                <span className="hidden sm:inline-flex text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 font-semibold">
                  v2.4
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Search Bar Trigger */}
        <div className="hidden md:flex items-center max-w-sm w-full mx-6">
          <button 
            onClick={() => {
              playSound('click');
              onOpenSearch();
            }}
            className="w-full flex items-center justify-between px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/70 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400 transition-all hover:border-indigo-500/40 group shadow-sm"
          >
            <span className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
              <span>Search 400 widgets (Buttons, 3D, Cards, Text)...</span>
            </span>
            <kbd className="font-mono text-[10px] bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded border border-slate-200 dark:border-white/10 shadow-xs">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Mobile search trigger */}
          <button
            onClick={() => {
              playSound('click');
              onOpenSearch();
            }}
            className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
            title="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* LIGHT / DARK MODE TOGGLE (Requested by user) */}
          <button
            onClick={() => {
              playSound('pop');
              onToggleTheme();
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all ${
              theme === 'light'
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-700 shadow-sm'
                : 'bg-indigo-500/15 border-indigo-500/30 text-indigo-300 shadow-sm'
            }`}
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
          >
            {theme === 'light' ? (
              <>
                <Sun className="w-4 h-4 text-amber-500 animate-spin-slow" />
                <span className="hidden sm:inline font-semibold">LIGHT</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-indigo-400" />
                <span className="hidden sm:inline font-semibold">DARK</span>
              </>
            )}
          </button>

          {/* Sound FX Toggle (Clicky sounds!) */}
          <button
            onClick={() => {
              playSound('pop');
              onToggleSound();
            }}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-mono transition-all ${
              soundEnabled 
                ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-700 dark:text-indigo-300 shadow-sm' 
                : 'bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400'
            }`}
            title="Toggle Tactile Clicky Sound Feedback"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 animate-pulse" />
                <span className="hidden sm:inline">SFX ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline">SFX OFF</span>
              </>
            )}
          </button>

          {/* Favorites Filter Button */}
          <button
            onClick={() => {
              playSound('click');
              onShowFavorites();
            }}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-mono transition-all ${
              showFavoritesOnly 
                ? 'bg-rose-500/15 border-rose-500/40 text-rose-600 dark:text-rose-300 shadow-sm' 
                : 'bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400'
            }`}
            title="Show saved components"
          >
            <Heart className={`w-3.5 h-3.5 ${favoriteCount > 0 ? 'text-rose-500 fill-rose-500/40' : 'text-slate-400'}`} />
            <span className="font-semibold">{favoriteCount}</span>
          </button>

          {/* GitHub Star Link */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            onClick={() => playSound('click')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-slate-200 transition-colors shadow-xs"
          >
            <svg className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <span className="hidden sm:inline">GitHub</span>
            <span className="text-[10px] font-mono bg-white dark:bg-white/10 px-1.5 py-0.2 rounded text-indigo-700 dark:text-indigo-300 font-bold">★ 14.8k</span>
          </a>
        </div>
      </div>
    </header>
  );
};
