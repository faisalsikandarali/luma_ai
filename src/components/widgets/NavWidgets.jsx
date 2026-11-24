import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, ShieldCheck, Zap, Compass, Star, Home, Settings, 
  User, Bell, ChevronRight, Menu, X, ArrowLeft, ArrowRight 
} from 'lucide-react';
import { playSound } from '../../utils/sound';

// 1. MacOS Interactive Spring Dock
export const MacOSSpringDock = () => {
  const [h, setH] = useState(null);
  const icons = [Terminal, ShieldCheck, Zap, Compass, Star];
  return (
    <div className="flex items-end gap-2 px-3 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
      {icons.map((Icon, i) => {
        const isH = h === i;
        const scale = isH ? 1.4 : h !== null && Math.abs(h - i) === 1 ? 1.18 : 1;
        return (
          <motion.button
            key={i}
            onMouseEnter={() => { playSound('pop'); setH(i); }}
            onMouseLeave={() => setH(null)}
            animate={{ scale, y: isH ? -6 : 0 }}
            className="p-2 rounded-xl bg-[#141724] border border-white/10 text-indigo-400"
          >
            <Icon className="w-4 h-4" />
          </motion.button>
        );
      })}
    </div>
  );
};

// 2. Ambient Glow Tab Bar
export const AmbientGlowTabBar = () => {
  const [tab, setTab] = useState('Overview');
  return (
    <div className="flex p-1 rounded-xl bg-[#0c0e16] border border-white/10">
      {['Overview', 'Metrics', 'Security'].map((t) => {
        const act = tab === t;
        return (
          <button
            key={t}
            onClick={() => { playSound('click'); setTab(t); }}
            className="relative px-3 py-1 text-xs font-medium"
          >
            {act && (
              <motion.div
                layoutId="nav-act"
                className="absolute inset-0 bg-indigo-600 rounded-lg shadow-md shadow-indigo-600/40"
              />
            )}
            <span className={`relative z-10 ${act ? 'text-white' : 'text-slate-400'}`}>{t}</span>
          </button>
        );
      })}
    </div>
  );
};

// 3. Floating Pill Bottom Navbar
export const FloatingPillNav = () => (
  <div className="flex items-center gap-4 px-4 py-2 rounded-full bg-black/80 border border-white/15 backdrop-blur-md shadow-2xl text-slate-400">
    <Home className="w-4 h-4 text-white cursor-pointer hover:text-indigo-400" />
    <Compass className="w-4 h-4 cursor-pointer hover:text-indigo-400" />
    <Bell className="w-4 h-4 cursor-pointer hover:text-indigo-400" />
    <Settings className="w-4 h-4 cursor-pointer hover:text-indigo-400" />
  </div>
);

// 4. Glass Breadcrumb Strip
export const GlassBreadcrumb = () => (
  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-400 font-mono">
    <span>Home</span>
    <ChevronRight className="w-3 h-3 text-slate-600" />
    <span>Widgets</span>
    <ChevronRight className="w-3 h-3 text-slate-600" />
    <span className="text-indigo-400 font-semibold">Buttons</span>
  </div>
);

// 5. Morphing Hamburger Icon
export const MorphingHamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => { playSound('pop'); setOpen(!open); }}
      className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white"
    >
      {open ? <X className="w-4 h-4 text-rose-400" /> : <Menu className="w-4 h-4 text-cyan-400" />}
    </button>
  );
};

// 6. Step Timeline Progress
export const StepTimelineNav = () => (
  <div className="flex items-center gap-2">
    <span className="w-6 h-6 rounded-full bg-indigo-600 text-[10px] font-bold text-white flex items-center justify-center">1</span>
    <span className="w-6 h-0.5 bg-indigo-600" />
    <span className="w-6 h-6 rounded-full bg-white/10 text-[10px] text-slate-400 flex items-center justify-center">2</span>
    <span className="w-6 h-0.5 bg-white/10" />
    <span className="w-6 h-6 rounded-full bg-white/10 text-[10px] text-slate-400 flex items-center justify-center">3</span>
  </div>
);

// 7. Minimalist Pagination Bar
export const MinimalPagination = () => (
  <div className="flex items-center gap-1 text-xs font-mono">
    <button className="p-1 rounded bg-white/5 text-slate-400 hover:text-white"><ArrowLeft className="w-3 h-3" /></button>
    <span className="px-2 py-0.5 rounded bg-indigo-600 text-white font-bold">1</span>
    <span className="px-2 py-0.5 text-slate-400">2</span>
    <span className="px-2 py-0.5 text-slate-400">3</span>
    <button className="p-1 rounded bg-white/5 text-slate-400 hover:text-white"><ArrowRight className="w-3 h-3" /></button>
  </div>
);

// 8. Cyber Vertical Rail Indicator
export const CyberVerticalRail = () => (
  <div className="flex flex-col gap-2 p-1.5 rounded-xl bg-[#090b14] border border-white/10">
    <span className="w-2 h-6 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
    <span className="w-2 h-2 rounded-full bg-white/20" />
    <span className="w-2 h-2 rounded-full bg-white/20" />
  </div>
);

// 9. Floating Search Command Pill
export const FloatingSearchCommandPill = () => (
  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-slate-300 font-mono">
    <span>Quick Search</span>
    <kbd className="bg-black/50 px-1.5 py-0.2 rounded text-[10px] border border-white/10">⌘K</kbd>
  </div>
);

// 10. Sliding Underline Nav
export const SlidingUnderlineNav = () => (
  <div className="flex gap-4 text-xs font-medium text-slate-400 border-b border-white/10 pb-2">
    <span className="text-indigo-400 font-bold border-b-2 border-indigo-500 pb-2 -mb-2">Components</span>
    <span className="hover:text-white cursor-pointer">Templates</span>
    <span className="hover:text-white cursor-pointer">Pricing</span>
  </div>
);

// 11. Profile Avatar Header Dropdown
export const AvatarHeaderNav = () => (
  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 cursor-pointer">
    <span className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-[9px] text-white font-bold flex items-center justify-center">FX</span>
    <span className="text-xs text-white font-medium">faisal.dev</span>
  </div>
);

// 12. Micro Icon Bar
export const MicroIconBar = () => (
  <div className="flex gap-2 p-1 bg-neutral-900 rounded-lg border border-neutral-800">
    <span className="p-1 text-slate-400 hover:text-white cursor-pointer"><Terminal className="w-3.5 h-3.5" /></span>
    <span className="p-1 text-slate-400 hover:text-white cursor-pointer"><Zap className="w-3.5 h-3.5" /></span>
    <span className="p-1 text-slate-400 hover:text-white cursor-pointer"><Settings className="w-3.5 h-3.5" /></span>
  </div>
);
