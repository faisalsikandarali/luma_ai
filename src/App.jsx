import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { ComponentCard } from './components/ComponentCard';
import { ComponentModal } from './components/ComponentModal';
import { SearchModal } from './components/SearchModal';
import { Pagination } from './components/Pagination';
import { Footer } from './components/Footer';
import { COMPONENTS_DATA, CATEGORIES } from './data/componentsData';
import { setSoundEnabled, playSound } from './utils/sound';
import { Sparkles, Heart, Frown, Layers, Compass } from 'lucide-react';

export default function App() {
  // Theme state: defaults to 'light' as requested by user ("by defult light ho or user click kar ke dark kar la")
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('lumina_theme');
      return saved === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (theme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
      body.style.backgroundColor = '#08090d';
      body.style.color = '#f1f5f9';
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      body.style.backgroundColor = '#f8fafc';
      body.style.color = '#0f172a';
    }
    try {
      localStorage.setItem('lumina_theme', theme);
    } catch {
      // storage unavailable
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [inspectedItem, setInspectedItem] = useState(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Pagination State (Prevents page from becoming messy!)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  // Favorites state persisted in localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('lumina_favs');
      return saved ? JSON.parse(saved) : ['btn-magnetic-liquid', 'card-holo-tilt', 'badge-dynamic-island'];
    } catch {
      return ['btn-magnetic-liquid', 'card-holo-tilt', 'badge-dynamic-island'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('lumina_favs', JSON.stringify(favorites));
    } catch {
      // storage unavailable
    }
  }, [favorites]);

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery, activeTag, showFavoritesOnly]);

  // Keyboard shortcut listener for Command+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Dynamic category counts
  const categoriesWithCounts = useMemo(() => {
    return CATEGORIES.map((cat) => {
      if (cat.id === 'all') {
        return { ...cat, count: COMPONENTS_DATA.length };
      }
      const count = COMPONENTS_DATA.filter((item) => item.category === cat.id).length;
      return { ...cat, count };
    });
  }, []);

  // Filtered components list
  const filteredComponents = useMemo(() => {
    return COMPONENTS_DATA.filter((item) => {
      // Favorites filter
      if (showFavoritesOnly && !favorites.includes(item.id)) {
        return false;
      }

      // Category filter
      if (!showFavoritesOnly && activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      // Tag filter
      if (activeTag !== 'All') {
        const hasTag = item.tags.some((t) => t.toLowerCase() === activeTag.toLowerCase());
        if (!hasTag) return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesTag = item.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesCategory && !matchesDesc && !matchesTag) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, searchQuery, activeTag, showFavoritesOnly, favorites]);

  // Paginated slice
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedComponents = useMemo(() => {
    return filteredComponents.slice(startIndex, endIndex);
  }, [filteredComponents, startIndex, endIndex]);

  const totalPages = Math.ceil(filteredComponents.length / itemsPerPage) || 1;

  const scrollToComponents = () => {
    const el = document.getElementById('components-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Current active category label
  const currentCategoryObj = CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-[#08090d] text-slate-100' : 'bg-[#f8fafc] text-slate-900'} flex flex-col font-sans selection:bg-indigo-500/20 selection:text-indigo-800 dark:selection:bg-indigo-500/30 dark:selection:text-indigo-200 transition-colors duration-200`}>
      
      {/* Top Navbar with Theme Switcher */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        soundEnabled={soundOn}
        onToggleSound={toggleSound}
        favoriteCount={favorites.length}
        onShowFavorites={() => {
          setShowFavoritesOnly((prev) => !prev);
          if (!showFavoritesOnly) scrollToComponents();
        }}
        showFavoritesOnly={showFavoritesOnly}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Hero Showcase */}
      <Hero
        onExplore={scrollToComponents}
        totalComponents={COMPONENTS_DATA.length}
      />

      {/* Main Catalog Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        
        {/* Category, Tag & Search Filters */}
        <CategoryFilter
          categories={categoriesWithCounts}
          activeCategory={activeCategory}
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            setShowFavoritesOnly(false);
          }}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeTag={activeTag}
          onSelectTag={setActiveTag}
          viewMode={viewMode}
          onToggleViewMode={setViewMode}
          showFavoritesOnly={showFavoritesOnly}
          onToggleFavoritesOnly={() => setShowFavoritesOnly((prev) => !prev)}
          totalCount={COMPONENTS_DATA.length}
          filteredCount={filteredComponents.length}
        />

        {/* Category Breadcrumb & Cleanliness Header */}
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200 dark:border-white/5 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <span className="text-slate-900 dark:text-white font-semibold">{currentCategoryObj.label}</span>
            <span className="text-slate-400 dark:text-slate-500">•</span>
            <span className="text-slate-600 dark:text-slate-400">Page {currentPage} of {totalPages}</span>
          </div>

          {activeCategory !== 'all' && (
            <button
              onClick={() => {
                playSound('click');
                setActiveCategory('all');
              }}
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-semibold transition-colors"
            >
              ← View All 100 Widgets
            </button>
          )}
        </div>

        {/* Widgets Grid / List display */}
        {filteredComponents.length === 0 ? (
          <div className="py-20 text-center rounded-3xl bg-white dark:bg-[#0c0e16] border border-slate-200 dark:border-white/5 p-8 my-8 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mx-auto mb-4 text-slate-400">
              <Frown className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-slate-900 dark:text-white mb-2">
              No UI widgets found
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs max-w-sm mx-auto mb-6">
              Try adjusting your search criteria, clearing the tag filter, or browsing all categories.
            </p>
            <button
              onClick={() => {
                playSound('click');
                setActiveCategory('all');
                setSearchQuery('');
                setActiveTag('All');
                setShowFavoritesOnly(false);
              }}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <>
            <div
              className={`grid gap-6 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-1'
              }`}
            >
              {paginatedComponents.map((item) => (
                <ComponentCard
                  key={item.id}
                  item={item}
                  isFavorite={favorites.includes(item.id)}
                  onToggleFavorite={toggleFavorite}
                  onInspect={(widget) => setInspectedItem(widget)}
                  viewMode={viewMode}
                />
              ))}
            </div>

            {/* Clean Pagination Bar */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              itemsPerPage={itemsPerPage}
              onItemsPerPageChange={(val) => {
                setItemsPerPage(val);
                setCurrentPage(1);
              }}
              totalItems={filteredComponents.length}
              startIndex={startIndex}
              endIndex={endIndex}
            />
          </>
        )}

      </main>

      {/* Fullscreen Inspector Modal */}
      {inspectedItem && (
        <ComponentModal
          item={inspectedItem}
          onClose={() => setInspectedItem(null)}
        />
      )}

      {/* Command Palette Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        items={COMPONENTS_DATA}
        onSelectItem={(item) => {
          setInspectedItem(item);
        }}
      />

      {/* Footer */}
      <Footer />

    </div>
  );
}
