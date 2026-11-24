import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Sparkles, ArrowRight, Zap, Check, CreditCard, RefreshCw, 
  Send, Shield, Heart, Terminal, Play, Lock, Eye, Download 
} from 'lucide-react';
import { playSound } from '../../utils/sound';

// 1. Magnetic Liquid Button
export const MagneticLiquidBtn = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    setPos({
      x: (clientX - (left + width / 2)) * 0.35,
      y: (clientY - (top + height / 2)) * 0.35,
    });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      onClick={() => playSound('pop')}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 15 }}
      whileTap={{ scale: 0.94 }}
      className="relative group px-7 py-3 rounded-full overflow-hidden text-white shadow-xl shadow-indigo-500/20"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 transition-all duration-300 group-hover:scale-105" />
      <span className="absolute -inset-full bg-gradient-to-r from-transparent via-white/25 to-transparent rotate-45 translate-x-[-150%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
      <span className="relative z-10 flex items-center gap-2 text-xs font-semibold tracking-wide">
        <Sparkles className="w-4 h-4 text-cyan-300" />
        <span>Magnetic Liquid</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </motion.button>
  );
};

// 2. Shimmer Cyber Conic Border
export const ShimmerCyberBtn = () => (
  <button 
    onClick={() => playSound('laser')}
    className="relative inline-flex h-11 overflow-hidden rounded-xl p-[1.5px] active:scale-95 transition-transform"
  >
    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c084fc_0%,#312e81_50%,#c084fc_100%)]" />
    <span className="inline-flex h-full w-full items-center justify-center rounded-[10px] bg-[#0d0f17] px-6 py-1 text-xs font-medium text-white backdrop-blur-3xl gap-2 hover:bg-[#131622] transition-colors">
      <Zap className="w-3.5 h-3.5 text-purple-400" />
      <span>Cyber Shimmer</span>
      <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-purple-500/20 text-purple-300 font-mono">60FPS</span>
    </span>
  </button>
);

// 3. Confetti Cannon Button
export const ConfettiCannonBtn = () => {
  const trigger = (e) => {
    playSound('success');
    const rect = e.currentTarget.getBoundingClientRect();
    confetti({
      particleCount: 55,
      spread: 70,
      origin: { x: (rect.left + rect.width / 2) / window.innerWidth, y: (rect.top + rect.height / 2) / window.innerHeight },
      colors: ['#6366f1', '#ec4899', '#3b82f6', '#10b981', '#f59e0b'],
    });
  };
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={trigger}
      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-rose-500/25 flex items-center gap-2"
    >
      <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
      <span>Launch Confetti</span>
      <span className="bg-white/20 px-1.5 py-0.5 rounded text-[10px]">🎉</span>
    </motion.button>
  );
};

// 4. Morphing Payment State Button
export const MorphingStateBtn = () => {
  const [s, setS] = useState('idle');
  const handle = () => {
    if (s !== 'idle') return;
    playSound('click');
    setS('load');
    setTimeout(() => {
      playSound('success');
      setS('done');
      setTimeout(() => setS('idle'), 2200);
    }, 1100);
  };
  return (
    <motion.button
      layout
      onClick={handle}
      className={`h-10 px-5 rounded-xl font-medium text-xs flex items-center justify-center transition-colors ${
        s === 'done' ? 'bg-emerald-500 text-white' : s === 'load' ? 'bg-indigo-700 text-white/80' : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
      }`}
    >
      <AnimatePresence mode="wait">
        {s === 'idle' && (
          <motion.div key="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1.5">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Pay $49 License</span>
          </motion.div>
        )}
        {s === 'load' && (
          <motion.div key="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1.5">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span>Processing...</span>
          </motion.div>
        )}
        {s === 'done' && (
          <motion.div key="3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1.5 font-bold">
            <Check className="w-3.5 h-3.5 stroke-[3]" />
            <span>Paid Successfully</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

// 5. Neon Cyber Glow Button
export const NeonGlowBtn = () => (
  <button
    onClick={() => playSound('laser')}
    className="relative px-6 py-2.5 rounded-lg text-xs font-mono font-semibold text-cyan-300 border border-cyan-400/50 bg-cyan-950/30 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:bg-cyan-900/40 hover:text-cyan-200 transition-all active:scale-95"
  >
    <span className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
      <span>INITIALIZE_CYBER</span>
    </span>
  </button>
);

// 6. Frosted Glassmorphism Button
export const FrostedGlassBtn = () => (
  <button
    onClick={() => playSound('pop')}
    className="px-6 py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-xl text-xs font-medium text-white shadow-xl hover:border-white/30 transition-all flex items-center gap-2 active:scale-95"
  >
    <Shield className="w-3.5 h-3.5 text-indigo-300" />
    <span>Frosted Glass</span>
  </button>
);

// 7. Ripple Particle Pulse Button
export const RipplePulseBtn = () => {
  const [pulse, setPulse] = useState(false);
  const click = () => {
    playSound('pop');
    setPulse(true);
    setTimeout(() => setPulse(false), 500);
  };
  return (
    <div className="relative inline-flex">
      <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 opacity-40 blur-md group-hover:opacity-100 transition duration-300" />
      <button
        onClick={click}
        className="relative px-6 py-2.5 rounded-xl bg-[#090b14] border border-white/15 text-xs font-semibold text-white hover:text-indigo-200 flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
        <span>Quantum Ripple</span>
        {pulse && <span className="absolute inset-0 rounded-xl border-2 border-indigo-400 animate-ping pointer-events-none" />}
      </button>
    </div>
  );
};

// 8. Gradient Border Sweep Button
export const GradientSweepBtn = () => (
  <button
    onClick={() => playSound('click')}
    className="relative group p-[1px] rounded-xl overflow-hidden font-medium text-xs active:scale-95 transition-transform"
  >
    <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 transition-all duration-500 group-hover:rotate-180" />
    <span className="relative block px-6 py-2.5 rounded-[11px] bg-[#0c0e18] text-slate-100 group-hover:bg-[#101322] transition-colors">
      Gradient Sweep
    </span>
  </button>
);

// 9. Holographic Foil Button
export const HolographicFoilBtn = () => (
  <button
    onClick={() => playSound('laser')}
    className="relative px-6 py-2.5 rounded-xl font-heading font-bold text-xs text-black bg-gradient-to-r from-teal-200 via-rose-200 via-amber-200 to-purple-200 shadow-lg hover:shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95"
  >
    HOLOGRAPHIC FOIL
  </button>
);

// 10. Minimalist Magnetic Pill Button
export const MinimalPillBtn = () => (
  <button
    onClick={() => playSound('pop')}
    className="px-5 py-2 rounded-full bg-neutral-900 border border-neutral-700 hover:border-neutral-400 text-neutral-300 hover:text-white text-xs font-mono transition-all flex items-center gap-2 active:scale-95"
  >
    <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
    <span>minimal.pill()</span>
  </button>
);

// 11. Neu-Brutalist High Contrast Button
export const NeuBrutalistBtn = () => (
  <button
    onClick={() => playSound('click')}
    className="px-5 py-2.5 bg-yellow-400 text-black border-2 border-black font-heading font-black text-xs shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
  >
    BRUTALIST ACTION!
  </button>
);

// 12. Floating Elevation Button
export const FloatingElevationBtn = () => (
  <button
    onClick={() => playSound('click')}
    className="px-6 py-2.5 rounded-xl bg-gradient-to-b from-indigo-500 to-indigo-700 text-white text-xs font-semibold shadow-[0_8px_0_rgb(49,46,129)] active:shadow-none active:translate-y-2 transition-all flex items-center gap-1.5"
  >
    <Download className="w-3.5 h-3.5" />
    <span>3D Elevation Push</span>
  </button>
);

// 13. Retro Arcade 8-Bit Button
export const RetroArcadeBtn = () => (
  <button
    onClick={() => playSound('laser')}
    className="px-5 py-2.5 bg-fuchsia-600 border-2 border-fuchsia-300 text-white font-mono text-[11px] font-bold uppercase tracking-widest shadow-[0_0_10px_#d946ef] hover:bg-fuchsia-500 active:scale-95 transition-all flex items-center gap-2"
  >
    <span>★ INSERT COIN ★</span>
  </button>
);

// 14. Liquid Fluid Fill On Hover Button
export const LiquidFillBtn = () => (
  <button
    onClick={() => playSound('pop')}
    className="relative overflow-hidden px-6 py-2.5 rounded-xl border border-indigo-500/50 text-indigo-300 text-xs font-medium group active:scale-95"
  >
    <span className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
    <span className="relative z-10 group-hover:text-white transition-colors flex items-center gap-1.5">
      <Heart className="w-3.5 h-3.5 group-hover:fill-white" />
      <span>Liquid Fill Surge</span>
    </span>
  </button>
);
