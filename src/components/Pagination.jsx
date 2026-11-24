import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { playSound } from '../utils/sound';

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
  totalItems,
  startIndex,
  endIndex
}) => {
  if (totalPages <= 1 && totalItems <= 12) return null;

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 3) {
        end = 4;
      } else if (currentPage >= totalPages - 2) {
        start = totalPages - 3;
      }

      if (start > 2) pages.push('...');
      for (let i = start; i <= end; i++) pages.push(i);
      if (end < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  const handlePageClick = (page) => {
    if (page === '...' || page === currentPage) return;
    playSound('click');
    onPageChange(page);
    // Smooth scroll to component grid
    const el = document.getElementById('components-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-8 px-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 dark:border-white/5 mt-8 text-xs font-mono">
      {/* Left items summary */}
      <div className="text-slate-600 dark:text-slate-400">
        Showing <span className="text-slate-900 dark:text-white font-bold">{startIndex + 1}</span> - <span className="text-slate-900 dark:text-white font-bold">{Math.min(endIndex, totalItems)}</span> of <span className="text-indigo-600 dark:text-indigo-400 font-bold">{totalItems}</span> widgets
      </div>

      {/* Center pagination numbers */}
      <div className="flex items-center gap-1.5">
        {/* First Page */}
        <button
          onClick={() => handlePageClick(1)}
          disabled={currentPage === 1}
          className="p-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-xs"
          title="First Page"
        >
          <ChevronsLeft className="w-3.5 h-3.5" />
        </button>

        {/* Previous */}
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-xs"
          title="Previous Page"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        {/* Page numbers */}
        {getPageNumbers().map((num, idx) => (
          num === '...' ? (
            <span key={`ellipsis-${idx}`} className="px-2 py-1 text-slate-400 dark:text-slate-600">...</span>
          ) : (
            <button
              key={num}
              onClick={() => handlePageClick(num)}
              className={`w-8 h-8 rounded-lg font-bold transition-all shadow-xs ${
                currentPage === num
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-white hover:bg-slate-100 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300'
              }`}
            >
              {num}
            </button>
          )
        ))}

        {/* Next */}
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-xs"
          title="Next Page"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        {/* Last Page */}
        <button
          onClick={() => handlePageClick(totalPages)}
          disabled={currentPage === totalPages}
          className="p-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-xs"
          title="Last Page"
        >
          <ChevronsRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Right: Items Per Page selector */}
      <div className="flex items-center gap-2">
        <span className="text-slate-500">Per Page:</span>
        <select
          value={itemsPerPage}
          onChange={(e) => {
            playSound('pop');
            onItemsPerPageChange(Number(e.target.value));
          }}
          className="bg-white dark:bg-[#0e101a] border border-slate-200 dark:border-white/10 rounded-lg px-2 py-1 text-slate-800 dark:text-slate-200 text-xs focus:outline-none focus:border-indigo-500 shadow-xs"
        >
          <option value={12}>12</option>
          <option value={24}>24</option>
          <option value={50}>50 (Full Category)</option>
          <option value={100}>100</option>
          <option value={450}>All (450)</option>
        </select>
      </div>
    </div>
  );
};
