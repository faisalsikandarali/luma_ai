import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Layers, Radio, ArrowRight, Zap, TrendingUp, 
  ShieldCheck, Star, Activity, Sparkles, BarChart3, Wifi, Lock 
} from 'lucide-react';
import { playSound } from '../../utils/sound';

// 1. Holographic 3D Tilt Card
export const HolographicTiltCard = () => {
  const ref = useRef(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, o: 0 });

  const move = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    setRot({ x: ((y - r.height / 2) / r.height) * -14, y: ((x - r.width / 2) / r.width) * 14 });
    setGlare({ x: (x / r.width) * 100, y: (y / r.height) * 100, o: 0.35 });
  };

  return (
    <div className="[perspective:1000px] py-2">
      <motion.div
        ref={ref}
        onMouseMove={move}
        onMouseLeave={() => { setRot({ x: 0, y: 0 }); setGlare({ x: 50, y: 50, o: 0 }); }}
        animate={{ rotateX: rot.x, rotateY: rot.y }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-72 p-5 rounded-2xl bg-gradient-to-b from-[#181a26] to-[#0e101a] border border-white/10 shadow-2xl cursor-pointer overflow-hidden"
      >
        <div
          className="pointer-events-none absolute -inset-px transition-opacity"
          style={{ background: `radial-gradient(circle 180px at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.o}), transparent)`, opacity: glare.o }}
        />
        <div style={{ transform: 'translateZ(25px)' }}>
          <div className="flex justify-between items-center mb-3">
            <span className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"><Cpu className="w-4 h-4" /></span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">HOLO-3D</span>
          </div>
          <h4 className="text-sm font-bold text-white mb-1">Quantum Core V4</h4>
          <p className="text-[11px] text-slate-400 leading-relaxed mb-3">Real-time dynamic cursor tilt with specular optical reflection.</p>
          <div className="pt-2 border-t border-white/10 flex justify-between text-[10px] font-mono text-slate-400">
            <span>TPS: 142k</span>
            <span className="text-emerald-400">ONLINE</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// 2. Spotlight Proximity Bento Card
export const SpotlightBentoCard = () => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [o, setO] = useState(0);

  const move = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseEnter={() => setO(1)}
      onMouseLeave={() => setO(0)}
      className="relative w-72 rounded-2xl border border-neutral-800 bg-neutral-950 p-5 overflow-hidden shadow-xl"
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{ opacity: o, background: `radial-gradient(350px circle at ${pos.x}px ${pos.y}px, rgba(99, 102, 241, 0.15), transparent 80%)` }}
      />
      <div className="relative z-10">
        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3">
          <Layers className="w-4 h-4" />
        </div>
        <h4 className="text-sm font-semibold text-white mb-1">Spotlight Proximity</h4>
        <p className="text-[11px] text-neutral-400 mb-3">Radial beam illuminates card borders dynamically on cursor proximity.</p>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-300">#ZeroLag</span>
      </div>
    </div>
  );
};

// 3. Glassmorphism Credit Card with 3D Flip
export const GlassmorphismCreditCard = () => {
  const [flip, setFlip] = useState(false);
  return (
    <div className="[perspective:1000px]">
      <motion.div
        onClick={() => { playSound('click'); setFlip(!flip); }}
        animate={{ rotateY: flip ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-64 h-40 rounded-2xl p-4 cursor-pointer relative shadow-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 select-none overflow-hidden"
      >
        <div className="h-full flex flex-col justify-between [backface-visibility:hidden]">
          <div className="flex justify-between items-start">
            <span className="w-7 h-5 rounded bg-amber-400 flex items-center justify-center shadow-inner" />
            <span className="font-bold text-xs tracking-widest text-indigo-300">LUMINA</span>
          </div>
          <div className="font-mono text-xs tracking-[0.2em] text-white">•••• 8824 5190 3341</div>
          <div className="flex justify-between text-[10px] font-mono text-white/70">
            <span>ALEXANDER VANE</span>
            <span>09/29</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// 4. Orbiting Glow Border Card
export const OrbitingGlowBorderCard = () => (
  <div className="relative w-72 p-[1.5px] rounded-2xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-indigo-500 animate-[spin_4s_linear_infinite]" />
    <div className="relative z-10 w-full rounded-[15px] bg-[#0c0e15] p-5 backdrop-blur-xl">
      <h4 className="text-sm font-bold text-white mb-1">Dual Orbit Beacon</h4>
      <p className="text-[11px] text-slate-400 leading-relaxed mb-3">Continuous luminescent stream along card edge perimeter.</p>
      <button onClick={() => playSound('click')} className="w-full py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[11px] text-slate-200 transition-colors">
        Inspect Details
      </button>
    </div>
  </div>
);

// 5. Interactive Metric Analytics Card
export const InteractiveAnalyticsCard = () => (
  <div className="w-72 p-5 rounded-2xl bg-[#0d0f18] border border-white/10 shadow-xl">
    <div className="flex justify-between items-center mb-2">
      <span className="text-[11px] font-mono text-slate-400">Monthly Revenue</span>
      <span className="flex items-center text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
        <TrendingUp className="w-3 h-3 mr-0.5" /> +24.8%
      </span>
    </div>
    <div className="text-xl font-heading font-black text-white mb-3">$148,290.00</div>
    <div className="h-12 flex items-end gap-1.5 pt-2">
      {[40, 65, 30, 85, 95, 75, 100].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="flex-1 bg-gradient-to-t from-indigo-600 to-cyan-400 rounded-t-sm hover:brightness-125 transition-all cursor-pointer"
        />
      ))}
    </div>
  </div>
);

// 6. Cyberpunk HUD Matrix Card
export const CyberpunkHUDCard = () => (
  <div className="w-72 p-5 rounded-xl bg-black border-2 border-emerald-500/40 relative shadow-[0_0_15px_rgba(16,185,129,0.15)] font-mono text-xs">
    <div className="flex justify-between text-emerald-400 mb-2 border-b border-emerald-500/20 pb-1 text-[10px]">
      <span>HUD::SYS_MONITOR</span>
      <span className="animate-pulse">● REC</span>
    </div>
    <div className="space-y-1 text-[11px] text-emerald-300">
      <div>CPU_LOAD: [||||||||....] 68%</div>
      <div>CORE_TEMP: 42.4°C [OPTIMAL]</div>
      <div>NET_ENCRYPTION: AES-GCM-256</div>
    </div>
  </div>
);

// 7. Floating Pricing Tier Card
export const FloatingPricingCard = () => (
  <div className="w-72 p-5 rounded-2xl bg-gradient-to-b from-indigo-950/40 to-slate-900 border border-indigo-500/30 shadow-2xl relative overflow-hidden group">
    <span className="absolute -top-10 -right-10 w-28 h-28 bg-indigo-500/20 blur-2xl rounded-full" />
    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">MOST POPULAR</span>
    <h4 className="text-base font-bold text-white mt-2 mb-1">Developer Pro</h4>
    <div className="text-2xl font-black text-white mb-3">$29<span className="text-xs text-slate-400 font-normal">/mo</span></div>
    <button onClick={() => playSound('pop')} className="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all">
      Start Free Trial
    </button>
  </div>
);

// 8. Frosted Noise Texture Card
export const FrostedNoiseCard = () => (
  <div className="w-72 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl">
    <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-3">
      <Activity className="w-4 h-4" />
    </div>
    <h4 className="text-sm font-semibold text-white mb-1">Ultra Smooth Blur</h4>
    <p className="text-[11px] text-slate-400">High-performance GPU backdrop filter with 24px gaussian radius.</p>
  </div>
);

// 9. Gradient Mesh Border Card
export const GradientMeshBorderCard = () => (
  <div className="p-[1px] rounded-2xl bg-gradient-to-tr from-rose-500 via-indigo-500 to-cyan-400 w-72">
    <div className="p-5 rounded-[15px] bg-[#0b0d14]">
      <h4 className="text-sm font-bold text-white mb-1">Mesh Conic Border</h4>
      <p className="text-[11px] text-slate-400">Tri-color gradient perimeter highlighting card contours.</p>
    </div>
  </div>
);

// 10. Aurora Ambient Glow Card
export const AuroraAmbientGlowCard = () => (
  <div className="relative w-72 group">
    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-500 to-indigo-500 opacity-30 blur-lg group-hover:opacity-70 transition duration-500" />
    <div className="relative p-5 rounded-2xl bg-[#090b12] border border-white/10 text-white">
      <h4 className="text-sm font-semibold mb-1">Aurora Ambience</h4>
      <p className="text-[11px] text-slate-400">Smooth radiant underglow blooming on mouse hover.</p>
    </div>
  </div>
);

// 11. Profile Avatar Shine Card
export const ProfileAvatarShineCard = () => (
  <div className="w-72 p-4 rounded-2xl bg-[#0e101a] border border-white/10 flex items-center gap-3">
    <div className="relative w-11 h-11 rounded-full p-[1.5px] bg-gradient-to-tr from-amber-400 to-pink-500">
      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-xs font-bold text-white">
        AV
      </div>
      <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0e101a]" />
    </div>
    <div>
      <div className="text-xs font-bold text-white">Alexander Vance</div>
      <div className="text-[10px] text-slate-400 font-mono">Lead Motion Designer</div>
    </div>
  </div>
);

// 12. Layered Depth Stack Card
export const LayeredDepthStackCard = () => (
  <div className="relative w-72 py-3 flex items-center justify-center">
    <div className="absolute w-60 h-28 rounded-xl bg-white/5 border border-white/5 -top-1" />
    <div className="relative w-68 p-4 rounded-xl bg-[#111320] border border-white/10 shadow-2xl">
      <span className="text-[10px] font-mono text-indigo-400">STACK_DEPTH_02</span>
      <h5 className="text-xs font-bold text-white mt-1">Multi-Layer Parallax Elevation</h5>
    </div>
  </div>
);

// 13. Magnetic Media Player Card
export const MagneticMediaPlayerCard = () => (
  <div className="w-72 p-4 rounded-2xl bg-[#0c0e18] border border-white/10 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-pink-500 flex items-center justify-center text-white">
        <Sparkles className="w-4 h-4" />
      </span>
      <div>
        <div className="text-xs font-bold text-white">Synthwave 2088</div>
        <div className="text-[10px] text-slate-400 font-mono">Kavinsky • Live</div>
      </div>
    </div>
    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
  </div>
);

// 14. Feature Metric Bento Pill
export const FeatureMetricBentoCard = () => (
  <div className="w-72 p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex justify-between items-center">
    <div>
      <div className="text-[10px] font-mono text-slate-500">API Response</div>
      <div className="text-base font-bold text-cyan-400 font-mono">12.4ms</div>
    </div>
    <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 font-mono border border-cyan-500/20">
      FAST
    </span>
  </div>
);

// 15. Neuomorphic Soft Dark Card
export const NeuomorphicDarkCard = () => (
  <div className="w-72 p-5 rounded-2xl bg-[#0e1017] shadow-[6px_6px_14px_#07080b,-6px_-6px_14px_#151823] border border-white/5">
    <h4 className="text-xs font-bold text-slate-200 mb-1">Soft Neuomorphic Surface</h4>
    <p className="text-[10px] text-slate-400">Subtle dual-tone shadow elevation without harsh borders.</p>
  </div>
);
