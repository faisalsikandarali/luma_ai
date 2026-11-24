import React from 'react';
import { motion } from 'framer-motion';

// 1. Quantum Orbit Loader
export const QuantumOrbitLoader = () => (
  <div className="relative w-14 h-14 flex items-center justify-center">
    <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-[spin_1.5s_linear_infinite]" />
    <div className="absolute inset-1.5 rounded-full border-2 border-cyan-400/20 border-r-cyan-400 animate-[spin_2s_linear_infinite_reverse]" />
    <div className="absolute inset-3 rounded-full border-2 border-fuchsia-500/20 border-b-fuchsia-500 animate-[spin_1s_linear_infinite]" />
    <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#6366f1] animate-ping" />
  </div>
);

// 2. Hyperspace Concentric Warp Tunnel
export const HyperspaceWarpLoader = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    {[1, 2, 3].map((i) => (
      <motion.div
        key={i}
        animate={{ scale: [0.2, 1.3], opacity: [1, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, delay: (i - 1) * 0.5, ease: 'easeOut' }}
        className="absolute inset-0 rounded-xl border border-indigo-400/60 shadow-[0_0_10px_rgba(99,102,241,0.3)]"
      />
    ))}
    <span className="font-mono text-[8px] text-indigo-300 font-bold z-10">WARP</span>
  </div>
);

// 3. Pulsing Sonic Wave Ring
export const PulsingSonicRing = () => (
  <div className="relative w-12 h-12 flex items-center justify-center">
    <span className="w-full h-full rounded-full bg-cyan-500/30 animate-ping absolute" />
    <span className="w-8 h-8 rounded-full bg-cyan-500/50 absolute" />
    <span className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
  </div>
);

// 4. Bouncing Three Dot Wave
export const BouncingDotsWave = () => (
  <div className="flex gap-1.5 items-center">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        className="w-2.5 h-2.5 rounded-full bg-indigo-500"
      />
    ))}
  </div>
);

// 5. Cyber Matrix Progress Bar
export const CyberProgressBar = () => (
  <div className="w-48 space-y-1">
    <div className="flex justify-between text-[10px] font-mono text-cyan-400">
      <span>SYNCING_DATA</span>
      <span>78%</span>
    </div>
    <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden border border-white/10">
      <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full w-[78%] animate-pulse" />
    </div>
  </div>
);

// 6. Rotating Hexagon Prism
export const RotatingHexagonPrism = () => (
  <div className="w-10 h-10 border-2 border-fuchsia-500 border-dashed rounded-lg animate-[spin_3s_linear_infinite]" />
);

// 7. Gradient Line Runner
export const GradientLineRunner = () => (
  <div className="w-48 h-1 bg-neutral-800 rounded-full overflow-hidden relative">
    <div className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-[translateX_1.5s_infinite]" />
  </div>
);

// 8. Minimalist Spinner
export const MinimalSpinner = () => (
  <div className="w-8 h-8 rounded-full border-2 border-slate-700 border-t-white animate-spin" />
);

// 9. Skeleton Pulse Card
export const SkeletonPulseCard = () => (
  <div className="w-48 p-3 rounded-xl bg-white/5 border border-white/5 space-y-2 animate-pulse">
    <div className="h-3 bg-white/10 rounded w-3/4" />
    <div className="h-2 bg-white/10 rounded w-full" />
    <div className="h-2 bg-white/10 rounded w-1/2" />
  </div>
);

// 10. Morphing Square Orbit
export const MorphingSquareOrbit = () => (
  <motion.div
    animate={{ rotate: 360, borderRadius: ["20%", "50%", "20%"] }}
    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    className="w-10 h-10 border-2 border-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.3)]"
  />
);

// 11. Dual Conic Laser Loader
export const DualConicLoader = () => (
  <div className="w-12 h-12 rounded-full p-[2px] bg-[conic-gradient(from_0deg,#6366f1,#06b6d4,#6366f1)] animate-[spin_1.2s_linear_infinite]">
    <div className="w-full h-full rounded-full bg-[#08090d]" />
  </div>
);

// 12. Digital Clock Pulse
export const DigitalClockPulse = () => (
  <div className="font-mono text-xs text-indigo-400 font-bold tracking-widest flex items-center gap-1">
    <span>LOADING</span>
    <span className="animate-ping">...</span>
  </div>
);
