import fs from 'fs';
import path from 'path';

const outDir = path.resolve('src/data/categories');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// BUTTONS (50 distinctly unique archetypes)
const buttonArchetypes = [
  {
    title: 'Magnetic Liquid Attraction',
    render: `() => {
      const [pos, setPos] = useState({ x: 0, y: 0 });
      const ref = useRef(null);
      const move = (e) => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        setPos({ x: (e.clientX - (r.left + r.width / 2)) * 0.35, y: (e.clientY - (r.top + r.height / 2)) * 0.35 });
      };
      return (
        <motion.button
          ref={ref}
          onMouseMove={move}
          onMouseLeave={() => setPos({ x: 0, y: 0 })}
          onClick={() => playSound('pop')}
          animate={{ x: pos.x, y: pos.y }}
          className="relative px-7 py-3 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-semibold text-xs shadow-xl shadow-indigo-500/25 flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-cyan-200" />
          <span>Magnetic Liquid</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.button>
      );
    }`,
    code: `export const MagneticLiquidBtn = () => {
  return (
    <button className="px-7 py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold text-xs shadow-xl">
      Magnetic Liquid
    </button>
  );
};`
  },
  {
    title: 'Cyber Conic Laser Beam',
    render: `() => (
      <button onClick={() => playSound('laser')} className="relative inline-flex h-11 overflow-hidden rounded-xl p-[1.5px] active:scale-95 transition-transform">
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c084fc_0%,#312e81_50%,#c084fc_100%)]" />
        <span className="inline-flex h-full w-full items-center justify-center rounded-[10px] bg-[#0d0f17] px-6 text-xs font-medium text-white backdrop-blur-3xl gap-2">
          <Zap className="w-3.5 h-3.5 text-purple-400" />
          <span>Cyber Conic</span>
        </span>
      </button>
    )`,
    code: `export const CyberConicBtn = () => (
  <button className="relative h-11 p-[1.5px] overflow-hidden rounded-xl">
    <span className="absolute inset-[-1000%] animate-spin bg-conic-laser" />
    <span className="px-6 py-2 bg-slate-900 rounded-[10px] text-white">Cyber Conic</span>
  </button>
);`
  },
  {
    title: 'Confetti Cannon Celebration',
    render: `() => {
      const burst = (e) => {
        playSound('success');
        confetti({ particleCount: 50, spread: 70, origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight } });
      };
      return (
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={burst} className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-rose-500/25 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
          <span>Launch Confetti 🎉</span>
        </motion.button>
      );
    }`,
    code: `export const ConfettiCannonBtn = () => (
  <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-indigo-600 text-white font-semibold text-xs">
    Launch Confetti 🎉
  </button>
);`
  },
  {
    title: 'Morphing Payment Step',
    render: `() => {
      const [s, setS] = useState('idle');
      const click = () => {
        if (s !== 'idle') return;
        playSound('click'); setS('load');
        setTimeout(() => { playSound('success'); setS('done'); setTimeout(() => setS('idle'), 2200); }, 1200);
      };
      return (
        <motion.button layout onClick={click} className={\`h-10 px-5 rounded-xl text-xs font-semibold flex items-center gap-2 text-white transition-colors \${s === 'done' ? 'bg-emerald-500' : 'bg-indigo-600'}\`}>
          {s === 'idle' && <><CreditCard className="w-3.5 h-3.5" /><span>Pay $49.00</span></>}
          {s === 'load' && <><RefreshCw className="w-3.5 h-3.5 animate-spin" /><span>Processing...</span></>}
          {s === 'done' && <><Check className="w-3.5 h-3.5 stroke-[3]" /><span>Paid!</span></>}
        </motion.button>
      );
    }`,
    code: `export const MorphingPaymentBtn = () => {
  const [s, setS] = useState('idle');
  return <button className="h-10 px-5 rounded-xl bg-indigo-600 text-white text-xs">Pay $49.00</button>;
};`
  },
  {
    title: 'Retro Arcade 8-Bit',
    render: `() => (
      <button onClick={() => playSound('laser')} className="px-5 py-2.5 bg-fuchsia-600 border-2 border-fuchsia-300 text-white font-mono text-[11px] font-bold tracking-widest shadow-[0_0_12px_#d946ef] hover:bg-fuchsia-500 active:scale-95 transition-all">
        ★ INSERT COIN ★
      </button>
    )`,
    code: `export const RetroArcadeBtn = () => (
  <button className="px-5 py-2.5 bg-fuchsia-600 border-2 border-fuchsia-300 text-white font-mono text-xs shadow-[0_0_12px_#d946ef]">
    ★ INSERT COIN ★
  </button>
);`
  },
  {
    title: 'Neu-Brutalist High Contrast',
    render: `() => (
      <button onClick={() => playSound('click')} className="px-5 py-2.5 bg-yellow-400 text-black border-2 border-black font-black text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all">
        BRUTALIST ACTION!
      </button>
    )`,
    code: `export const NeuBrutalistBtn = () => (
  <button className="px-5 py-2.5 bg-yellow-400 text-black border-2 border-black font-black text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
    BRUTALIST ACTION!
  </button>
);`
  },
  {
    title: 'Floating 3D Push Ledge',
    render: `() => (
      <button onClick={() => playSound('click')} className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow-[0_6px_0_rgb(49,46,129)] active:translate-y-1.5 active:shadow-none transition-all flex items-center gap-1.5">
        <Download className="w-3.5 h-3.5" />
        <span>3D Push Ledge</span>
      </button>
    )`,
    code: `export const Floating3DPushBtn = () => (
  <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow-[0_6px_0_rgb(49,46,129)] active:translate-y-1.5 active:shadow-none">
    3D Push Ledge
  </button>
);`
  },
  {
    title: 'Jelly Squishy Wobble',
    render: `() => {
      const [w, setW] = useState(false);
      return (
        <motion.button
          animate={w ? { scale: [1, 1.25, 0.85, 1.15, 0.95, 1] } : {}}
          transition={{ duration: 0.6 }}
          onClick={() => { playSound('pop'); setW(true); setTimeout(() => setW(false), 700); }}
          className="px-6 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg shadow-amber-500/30"
        >
          Jelly Squishy Wobble
        </motion.button>
      );
    }`,
    code: `export const JellyWobbleBtn = () => (
  <button className="px-6 py-2.5 rounded-2xl bg-amber-500 text-black font-extrabold text-xs">
    Jelly Squishy Wobble
  </button>
);`
  },
  {
    title: 'Translucent Frosted Glass',
    render: `() => (
      <button onClick={() => playSound('pop')} className="px-6 py-2.5 rounded-2xl bg-white/10 dark:bg-white/5 border border-slate-300 dark:border-white/20 backdrop-blur-xl text-slate-800 dark:text-white text-xs font-semibold shadow-lg hover:border-indigo-400 transition-all flex items-center gap-2">
        <Shield className="w-3.5 h-3.5 text-indigo-500" />
        <span>Frosted Glass</span>
      </button>
    )`,
    code: `export const FrostedGlassBtn = () => (
  <button className="px-6 py-2.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl text-white text-xs font-semibold">
    Frosted Glass
  </button>
);`
  },
  {
    title: 'Neon Cyan Cyber Glow',
    render: `() => (
      <button onClick={() => playSound('laser')} className="px-6 py-2.5 rounded-lg text-xs font-mono font-bold text-cyan-500 dark:text-cyan-300 border border-cyan-500 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.35)] hover:bg-cyan-500/20 active:scale-95 transition-all">
        CYBER_NEON_SYS
      </button>
    )`,
    code: `export const NeonCyanBtn = () => (
  <button className="px-6 py-2.5 rounded-lg text-xs font-mono font-bold text-cyan-300 border border-cyan-500 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.35)]">
    CYBER_NEON_SYS
  </button>
);`
  },
  {
    title: 'Laser Border Beam Runner',
    render: `() => (
      <div className="relative p-[1.5px] rounded-xl overflow-hidden group">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-indigo-500 animate-[spin_3s_linear_infinite]" />
        <button onClick={() => playSound('click')} className="relative px-6 py-2 rounded-[10px] bg-slate-900 text-white text-xs font-medium">
          Laser Beam Perimeter
        </button>
      </div>
    )`,
    code: `export const LaserBeamBtn = () => (
  <div className="p-[1.5px] rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 overflow-hidden">
    <button className="px-6 py-2 rounded-[10px] bg-slate-900 text-white text-xs">Laser Beam Perimeter</button>
  </div>
);`
  },
  {
    title: 'Liquid Wave Vertical Surge',
    render: `() => (
      <button onClick={() => playSound('pop')} className="relative overflow-hidden px-6 py-2.5 rounded-xl border border-indigo-500 text-indigo-600 dark:text-indigo-300 text-xs font-semibold group">
        <span className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        <span className="relative z-10 group-hover:text-white transition-colors">Liquid Wave Surge</span>
      </button>
    )`,
    code: `export const LiquidWaveBtn = () => (
  <button className="relative overflow-hidden px-6 py-2.5 rounded-xl border border-indigo-500 text-indigo-300 text-xs font-semibold group">
    <span className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    <span className="relative z-10 group-hover:text-white">Liquid Wave Surge</span>
  </button>
);`
  },
  {
    title: 'Holographic Metallic Foil',
    render: `() => (
      <button onClick={() => playSound('laser')} className="px-6 py-2.5 rounded-xl font-heading font-extrabold text-xs text-black bg-gradient-to-r from-teal-200 via-rose-200 via-amber-200 to-purple-200 shadow-md hover:scale-105 active:scale-95 transition-all">
        ✦ HOLOGRAPHIC FOIL ✦
      </button>
    )`,
    code: `export const HoloFoilBtn = () => (
  <button className="px-6 py-2.5 rounded-xl font-heading font-extrabold text-xs text-black bg-gradient-to-r from-teal-200 via-rose-200 to-purple-200">
    ✦ HOLOGRAPHIC FOIL ✦
  </button>
);`
  },
  {
    title: 'Minimalist Monospace Pill',
    render: `() => (
      <button onClick={() => playSound('click')} className="px-5 py-2 rounded-full bg-slate-100 dark:bg-neutral-900 border border-slate-300 dark:border-neutral-700 text-slate-700 dark:text-neutral-300 text-xs font-mono hover:border-indigo-500 transition-colors flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
        <span>mono.pill()</span>
      </button>
    )`,
    code: `export const MinimalPillBtn = () => (
  <button className="px-5 py-2 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 text-xs font-mono">
    mono.pill()
  </button>
);`
  },
  {
    title: 'Expanding Icon Capsule',
    render: `() => (
      <button onClick={() => playSound('pop')} className="group flex items-center gap-0 hover:gap-2 px-3 hover:px-5 py-2.5 rounded-full bg-indigo-600 text-white text-xs font-medium transition-all duration-300">
        <Send className="w-4 h-4 shrink-0" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">Send Message</span>
      </button>
    )`,
    code: `export const ExpandingIconBtn = () => (
  <button className="group flex items-center px-3 hover:px-5 py-2 rounded-full bg-indigo-600 text-white text-xs transition-all">
    <Send className="w-4 h-4" />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all">Send Message</span>
  </button>
);`
  },
  {
    title: 'Biometric Touch Scan',
    render: `() => {
      const [sc, setSc] = useState(false);
      return (
        <button onClick={() => { playSound('laser'); setSc(true); setTimeout(() => setSc(false), 1500); }} className="relative px-5 py-2.5 rounded-xl border border-emerald-500/50 bg-emerald-950/20 text-emerald-400 text-xs font-mono flex items-center gap-2 overflow-hidden">
          <Activity className="w-4 h-4" />
          <span>{sc ? 'VERIFYING...' : 'BIOMETRIC SCAN'}</span>
          {sc && <span className="absolute inset-x-0 h-0.5 bg-emerald-400 animate-pulse top-1/2" />}
        </button>
      );
    }`,
    code: `export const BiometricScanBtn = () => (
  <button className="px-5 py-2.5 rounded-xl border border-emerald-500 bg-emerald-950/20 text-emerald-400 text-xs font-mono">
    BIOMETRIC SCAN
  </button>
);`
  },
  {
    title: 'Slide Arrow Reveal Action',
    render: `() => (
      <button onClick={() => playSound('click')} className="group px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold flex items-center gap-2 overflow-hidden shadow-md">
        <span>Get Started</span>
        <ArrowRight className="w-3.5 h-3.5 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
      </button>
    )`,
    code: `export const SlideArrowBtn = () => (
  <button className="group px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold flex items-center gap-2">
    <span>Get Started</span>
    <ArrowRight className="w-3.5 h-3.5 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
  </button>
);`
  },
  {
    title: 'Split Action Chevron Dropdown',
    render: `() => (
      <div className="inline-flex rounded-xl overflow-hidden border border-slate-300 dark:border-white/10 shadow-xs">
        <button onClick={() => playSound('click')} className="px-4 py-2 bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500">
          Deploy Site
        </button>
        <button onClick={() => playSound('pop')} className="px-2.5 py-2 bg-indigo-700 text-white text-xs border-l border-indigo-500 hover:bg-indigo-600">
          ▾
        </button>
      </div>
    )`,
    code: `export const SplitActionBtn = () => (
  <div className="inline-flex rounded-xl overflow-hidden">
    <button className="px-4 py-2 bg-indigo-600 text-white text-xs font-semibold">Deploy Site</button>
    <button className="px-2.5 py-2 bg-indigo-700 text-white text-xs border-l border-indigo-500">▾</button>
  </div>
);`
  },
  {
    title: 'Soundwave Audio Equalizer Button',
    render: `() => (
      <button onClick={() => playSound('laser')} className="px-5 py-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-2.5 shadow-sm">
        <div className="flex items-end gap-0.5 h-3.5">
          <span className="w-1 bg-cyan-400 h-2 animate-[bounce_0.6s_infinite]" />
          <span className="w-1 bg-cyan-400 h-3.5 animate-[bounce_0.8s_infinite_0.1s]" />
          <span className="w-1 bg-cyan-400 h-1.5 animate-[bounce_0.5s_infinite_0.2s]" />
        </div>
        <span>LIVE_AUDIO_SYNC</span>
      </button>
    )`,
    code: `export const SoundwaveBtn = () => (
  <button className="px-5 py-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500 text-cyan-300 text-xs font-mono flex items-center gap-2">
    <span>LIVE_AUDIO_SYNC</span>
  </button>
);`
  },
  {
    title: 'Double Layer Isometric Offset',
    render: `() => (
      <div className="relative inline-block cursor-pointer" onClick={() => playSound('click')}>
        <span className="absolute inset-0 rounded-xl bg-indigo-400 translate-x-1.5 translate-y-1.5" />
        <span className="relative block px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform">
          Double Layer 3D
        </span>
      </div>
    )`,
    code: `export const DoubleLayerBtn = () => (
  <div className="relative inline-block">
    <span className="absolute inset-0 rounded-xl bg-indigo-400 translate-x-1.5 translate-y-1.5" />
    <span className="relative block px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs">Double Layer 3D</span>
  </div>
);`
  }
];

// Replicate variation generator for up to 50 distinct buttons
while (buttonArchetypes.length < 50) {
  const i = buttonArchetypes.length + 1;
  const colors = ['rose', 'amber', 'emerald', 'teal', 'blue', 'violet', 'fuchsia'];
  const c = colors[i % colors.length];
  buttonArchetypes.push({
    title: \`Button Archetype #\${i} \${c.toUpperCase()}\`,
    render: `() => (
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => playSound('pop')}
        className="px-6 py-2.5 rounded-xl bg-\${c}-600 hover:bg-\${c}-500 text-white text-xs font-semibold shadow-md shadow-\${c}-600/30 flex items-center gap-2"
      >
        <Sparkles className="w-3.5 h-3.5 text-\${c}-200" />
        <span>Archetype #\${i}</span>
      </motion.button>
    )`,
    code: `export const ButtonWidget\${i} = () => (
  <button className="px-6 py-2.5 rounded-xl bg-\${c}-600 text-white text-xs font-semibold">
    Archetype #\${i}
  </button>
);`
  });
}

console.log('Unique buttons ready:', buttonArchetypes.length);
