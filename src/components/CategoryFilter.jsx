import React from 'react';
import { 
  Sparkles, Zap, Layers, Terminal, ShieldCheck, Sliders, 
  RotateCw, Compass, Bell, Heart, Grid, List, Search, X, UserCheck 
} from 'lucide-react';
import { playSound } from '../utils/sound';

export const CategoryFilter = ({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  activeTag,
  onSelectTag,
  viewMode,
  onToggleViewMode,
  showFavoritesOnly,
  onToggleFavoritesOnly,
  totalCount,
  filteredCount
}) => {
  const tags = [
    'All',
    'Framer Motion',
    'Tailwind CSS',
    '3D Perspective',
    'Interactive',
    'Cyberpunk',
    'Spring Physics'
  ];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-4 h-4" />;
      case 'Zap': return <Zap className="w-4 h-4" />;
      case 'Layers': return <Layers className="w-4 h-4" />;
      case 'Terminal': return <Terminal className="w-4 h-4" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4" />;
      case 'Sliders': return <Sliders className="w-4 h-4" />;
      case 'RotateCw': return <RotateCw className="w-4 h-4" />;
      case 'Compass': return <Compass className="w-4 h-4" />;
      case 'Bell': return <Bell className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div id="components-section" className="space-y-4 mb-8">
      {/* Category Tabs Scrollbar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id && !showFavoritesOnly;
          return (
            <button
              key={cat.id}
              onClick={() => {
                playSound('click');
                onSelectCategory(cat.id);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all select-none shadow-xs ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-white hover:bg-slate-100/80 text-slate-700 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-300 border border-slate-200/90 dark:border-white/5'
              }`}
            >
              <span className={isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}>
                {getIcon(cat.icon)}
              </span>
              <span>{cat.label}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full font-bold ${
                isActive ? 'bg-white/25 text-white' : 'bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300'
              }`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Secondary Controls Bar: Search, Tags & View toggles */}
      <div className="p-3 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 backdrop-blur-md shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search widgets by name, tag, or technology..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-slate-50 dark:bg-[#0d0f17] border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-8 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
          />
          {searchQuery && (
            <button 
              onClick={() => {
                playSound('pop');
                onSearchChange('');
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Sub-tag filters */}
        <div className="hidden lg:flex items-center gap-1.5 overflow-x-auto">
          {tags.map((tag) => {
            const isTagActive = activeTag === tag;
            return (
              <button
                key={tag}
                onClick={() => {
                  playSound('pop');
                  onSelectTag(tag);
                }}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors ${
                  isTagActive
                    ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-500/40 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-white/5'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Right side controls: Favorites toggle & Grid/List view */}
        <div className="flex items-center gap-2 justify-end">
          <button
            onClick={() => {
              playSound('click');
              onToggleFavoritesOnly();
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono border transition-all ${
              showFavoritesOnly 
                ? 'bg-rose-500/15 border-rose-500/40 text-rose-600 dark:text-rose-300 font-semibold' 
                : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${showFavoritesOnly ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span>Starred Only</span>
          </button>

          <div className="flex items-center bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-0.5">
            <button
              onClick={() => {
                playSound('click');
                onToggleViewMode('grid');
              }}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
              }`}
              title="Grid View"
            >
              <Grid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                playSound('click');
                onToggleViewMode('list');
              }}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
              }`}
              title="List View"
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Counter summary */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1 font-mono">
        <div>
          Showing <span className="text-slate-900 dark:text-white font-semibold">{filteredCount}</span> of {totalCount} widgets
          {showFavoritesOnly && <span className="text-rose-600 dark:text-rose-400 ml-2">(Filtered by Favorites)</span>}
          {searchQuery && <span className="text-indigo-600 dark:text-indigo-400 ml-2">matching "{searchQuery}"</span>}
        </div>
      </div>
    </div>
  );
};
