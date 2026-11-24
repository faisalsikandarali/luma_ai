import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Play, Pause, Flame, GitBranch, ShieldCheck, Check, Radio, Lock } from 'lucide-react';
import { playSound } from '../../utils/sound';

// 1. Dynamic Island Interactive Pill
export const DynamicIslandPill = () => {
  const [exp, setExp] = useState(false);
  const [play, setPlay] = useState(false);
  return (
    <motion.div
      layout
      onClick={() => { playSound('pop'); setExp(!exp); }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={`bg-black border border-white/15 cursor-pointer shadow-2xl text-white overflow-hidden ${
        exp ? 'w-64 rounded-3xl p-3' : 'w-40 rounded-full py-1.5 px-3'
      }`}
    >
      {!exp ? (
        <div className="flex items-center justify-between text-xs">
          <span className="font-mono text-[10px] text-neutral-300">Live Audio</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      ) : (
        <div className="space-y-2">
          <div className="text-xs font-semibold flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>Synthwave FM</span>
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); playSound('click'); setPlay(!play); }}
            className="w-full py-1 rounded-lg bg-white text-black text-[10px] font-bold"
          >
            {play ? 'PAUSE' : 'PLAY'}
          </button>
        </div>
      )}
    </motion.div>
  );
};

// 2. Radar Sonar Live Beacon
export const RadarBeaconBadge = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
    </span>
    <span>SYS_HEALTH 99.9%</span>
  </div>
);

// 3. Cosmic Stardust Particle Pill
export const CosmicStardustPill = () => (
  <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-slate-900/40 border border-purple-500/30 text-xs text-purple-200 flex items-center gap-1.5 shadow-md">
    <Sparkles className="w-3 h-3 text-yellow-300 fill-yellow-300" />
    <span>Cosmic Sparkle</span>
  </div>
);

// 4. Git Branch Verified Tag
export const GitBranchTag = () => (
  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
    <GitBranch className="w-3 h-3 text-indigo-400" />
    <span>main: <span className="text-emerald-400 font-semibold">v3.2.0</span></span>
  </div>
);

// 5. Shield Security Verified Badge
export const ShieldVerifiedBadge = () => (
  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs text-indigo-300">
    <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
    <span className="font-semibold">SOC2 Certified</span>
  </div>
);

// 6. Live Wave Audio Pulse Pill
export const LiveAudioWavePill = () => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
    <span className="font-mono text-[11px]">RECORDING 48kHz</span>
  </div>
);

// 7. Laser Conic Perimeter Pill
export const LaserPerimeterPill = () => (
  <div className="relative p-[1px] rounded-full overflow-hidden inline-block">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-500 animate-[spin_3s_linear_infinite]" />
    <div className="relative px-3 py-0.5 rounded-full bg-[#0c0e18] text-[10px] font-mono text-cyan-300">
      LASER_BEAM
    </div>
  </div>
);

// 8. Crypto Price Ticker Pill
export const CryptoPricePill = () => (
  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#0e101a] border border-white/10 text-xs font-mono text-slate-200">
    <span className="text-amber-400 font-bold">ETH</span>
    <span>$3,842.20</span>
    <span className="text-emerald-400 text-[10px]">+5.4%</span>
  </div>
);

// 9. Minimalist Pill Badge
export const MinimalistPillBadge = () => (
  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 text-[11px] font-mono">
    v1.0-alpha
  </span>
);

// 10. Glowing Hazard Warning Badge
export const GlowingHazardBadge = () => (
  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/40 text-amber-300 text-[11px] font-mono font-bold">
    <span>⚠️ EXPERIMENTAL</span>
  </div>
);

// 11. Multi-Avatar Online Presence Pill
export const AvatarPresencePill = () => (
  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-300">
    <div className="flex -space-x-1.5">
      <span className="w-4 h-4 rounded-full bg-indigo-500 border border-black text-[8px] flex items-center justify-center text-white font-bold">A</span>
      <span className="w-4 h-4 rounded-full bg-pink-500 border border-black text-[8px] flex items-center justify-center text-white font-bold">B</span>
      <span className="w-4 h-4 rounded-full bg-cyan-500 border border-black text-[8px] flex items-center justify-center text-white font-bold">C</span>
    </div>
    <span className="font-mono text-[10px] text-slate-400">+14 Online</span>
  </div>
);

// 12. Success Status Pill
export const SuccessStatusPill = () => (
  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
    <Check className="w-3 h-3 text-emerald-400" />
    <span>Build Passing</span>
  </div>
);
