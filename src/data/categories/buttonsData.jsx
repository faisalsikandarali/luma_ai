import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Zap, Shield, Heart, ArrowRight, Check, CreditCard, RefreshCw, 
  Terminal, Search, Radio, Play, Pause, Compass, Star, Cpu, Layers, Activity,
  Sliders, Bell, Info, AlertTriangle, CheckCircle2, ChevronRight, Menu, X, Plus, Minus,
  Download, Send, Lock, Eye, EyeOff, Music, Volume2, Cloud, Sun, Moon, Database,
  TrendingUp, TrendingDown, Wifi, Battery, MapPin, Share2, Award, Bookmark,
  RotateCw, FastForward, Globe, Laptop, Smartphone, FileText, CheckSquare, MessageSquare,
  BarChart3, PieChart, Users, Key, Server, Hash, ShieldCheck, ShoppingCart, ShoppingBag
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSound } from '../../utils/sound';

export const buttonsData = [
  {
    id: 'btn-01',
    title: 'Magnetic Liquid Attraction',
    category: 'buttons',
    badge: 'HOT',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [p, setP] = useState({ x: 0, y: 0 });
      const ref = useRef(null);
      return (
        <motion.button
          ref={ref}
          onMouseMove={(e) => {
            const r = ref.current.getBoundingClientRect();
            setP({ x: (e.clientX - r.left - r.width/2)*0.35, y: (e.clientY - r.top - r.height/2)*0.35 });
          }}
          onMouseLeave={() => setP({ x: 0, y: 0 })}
          animate={{ x: p.x, y: p.y }}
          onClick={() => playSound('pop')}
          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-semibold text-xs shadow-xl shadow-indigo-500/25 flex items-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
          <span>Magnetic Liquid Pull</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.button>
      );
    },
    code: `export const MagneticLiquidAttraction = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Magnetic Liquid Attraction
    </button>
  );
};`
  },
  {
    id: 'btn-02',
    title: 'Cyber Conic Laser Beam',
    category: 'buttons',
    badge: 'NEW',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('laser')} className="relative p-[1.5px] rounded-xl overflow-hidden active:scale-95 transition-transform">
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg,#c084fc,#312e81,#c084fc)]" />
        <span className="relative block px-6 py-2 rounded-[10px] bg-slate-900 text-white text-xs font-mono">
          CYBER_CONIC_BEAM
        </span>
      </button>
    ),
    code: `export const CyberConicLaserBeam = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Cyber Conic Laser Beam
    </button>
  );
};`
  },
  {
    id: 'btn-03',
    title: 'Confetti Cannon Celebration',
    category: 'buttons',
    badge: '3D',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          playSound('success');
          confetti({ particleCount: 50, spread: 70, origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight } });
        }}
        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-rose-500/25 flex items-center gap-2"
      >
        <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
        <span>Confetti Cannon 🎉</span>
      </motion.button>
    ),
    code: `export const ConfettiCannonCelebration = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Confetti Cannon Celebration
    </button>
  );
};`
  },
  {
    id: 'btn-04',
    title: 'Morphing Payment Step',
    category: 'buttons',
    badge: 'PRO',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [s, setS] = useState('idle');
      return (
        <button
          onClick={() => {
            if (s !== 'idle') return;
            playSound('click'); setS('load');
            setTimeout(() => { playSound('success'); setS('done'); setTimeout(() => setS('idle'), 2000); }, 1200);
          }}
          className={`h-10 px-5 rounded-xl text-xs font-semibold text-white flex items-center gap-2 transition-colors ${s === 'done' ? 'bg-emerald-500' : 'bg-indigo-600'}`}
        >
          {s === 'idle' && <><CreditCard className="w-3.5 h-3.5" /><span>Pay $49.00</span></>}
          {s === 'load' && <><RefreshCw className="w-3.5 h-3.5 animate-spin" /><span>Processing...</span></>}
          {s === 'done' && <><Check className="w-3.5 h-3.5 stroke-[3]" /><span>Success!</span></>}
        </button>
      );
    },
    code: `export const MorphingPaymentStep = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Morphing Payment Step
    </button>
  );
};`
  },
  {
    id: 'btn-05',
    title: 'Neu-Brutalist High Contrast',
    category: 'buttons',
    badge: 'CYBER',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('click')} className="px-5 py-2 bg-yellow-400 text-black border-2 border-black font-black text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all">
        NEU BRUTALIST!
      </button>
    ),
    code: `export const NeuBrutalistHighContrast = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Neu-Brutalist High Contrast
    </button>
  );
};`
  },
  {
    id: 'btn-06',
    title: 'Retro Arcade 8-Bit',
    category: 'buttons',
    badge: 'POPULAR',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('laser')} className="px-5 py-2.5 bg-fuchsia-600 border-2 border-fuchsia-300 text-white font-mono text-[11px] font-bold tracking-widest shadow-[0_0_12px_#d946ef] active:scale-95 transition-all">
        ★ INSERT COIN ★
      </button>
    ),
    code: `export const RetroArcadeBit = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Retro Arcade 8-Bit
    </button>
  );
};`
  },
  {
    id: 'btn-07',
    title: 'Floating 3D Push Ledge',
    category: 'buttons',
    badge: 'TACTILE',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('click')} className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow-[0_6px_0_rgb(49,46,129)] active:translate-y-1.5 active:shadow-none transition-all flex items-center gap-1.5">
        <Download className="w-3.5 h-3.5" />
        <span>3D Push Down</span>
      </button>
    ),
    code: `export const FloatingDPushLedge = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Floating 3D Push Ledge
    </button>
  );
};`
  },
  {
    id: 'btn-08',
    title: 'Jelly Squishy Wobble',
    category: 'buttons',
    badge: 'CHIC',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [w, setW] = useState(false);
      return (
        <motion.button
          animate={w ? { scale: [1, 1.3, 0.8, 1.15, 0.95, 1] } : {}}
          onClick={() => { playSound('pop'); setW(true); setTimeout(() => setW(false), 600); }}
          className="px-6 py-2.5 rounded-2xl bg-amber-500 text-black font-black text-xs shadow-md shadow-amber-500/30"
        >
          Jelly Squishy Wobble
        </motion.button>
      );
    },
    code: `export const JellySquishyWobble = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Jelly Squishy Wobble
    </button>
  );
};`
  },
  {
    id: 'btn-09',
    title: 'Translucent Frosted Glass',
    category: 'buttons',
    badge: 'HOT',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('pop')} className="px-6 py-2.5 rounded-2xl bg-white/10 dark:bg-white/5 border border-slate-300 dark:border-white/20 backdrop-blur-xl text-slate-800 dark:text-white text-xs font-semibold shadow-lg flex items-center gap-2">
        <Shield className="w-3.5 h-3.5 text-indigo-500" />
        <span>Frosted Glass</span>
      </button>
    ),
    code: `export const TranslucentFrostedGlass = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Translucent Frosted Glass
    </button>
  );
};`
  },
  {
    id: 'btn-10',
    title: 'Neon Cyan Cyber Glow',
    category: 'buttons',
    badge: 'NEW',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('laser')} className="px-6 py-2 rounded-lg text-xs font-mono font-bold text-cyan-400 border border-cyan-400 bg-cyan-950/30 shadow-[0_0_15px_rgba(6,182,212,0.35)]">
        NEON_CYBER_PULSE
      </button>
    ),
    code: `export const NeonCyanCyberGlow = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Neon Cyan Cyber Glow
    </button>
  );
};`
  },
  {
    id: 'btn-11',
    title: 'Laser Border Beam Runner',
    category: 'buttons',
    badge: '3D',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="relative p-[1.5px] rounded-xl overflow-hidden">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-indigo-500 animate-[spin_3s_linear_infinite]" />
        <button onClick={() => playSound('click')} className="relative px-6 py-2 rounded-[10px] bg-slate-900 text-white text-xs font-medium">
          Laser Beam Perimeter
        </button>
      </div>
    ),
    code: `export const LaserBorderBeamRunner = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Laser Border Beam Runner
    </button>
  );
};`
  },
  {
    id: 'btn-12',
    title: 'Liquid Wave Vertical Surge',
    category: 'buttons',
    badge: 'PRO',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('pop')} className="relative overflow-hidden px-6 py-2.5 rounded-xl border border-indigo-500 text-indigo-600 dark:text-indigo-300 text-xs font-semibold group">
        <span className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        <span className="relative z-10 group-hover:text-white">Liquid Surge Fill</span>
      </button>
    ),
    code: `export const LiquidWaveVerticalSurge = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Liquid Wave Vertical Surge
    </button>
  );
};`
  },
  {
    id: 'btn-13',
    title: 'Holographic Metallic Foil',
    category: 'buttons',
    badge: 'CYBER',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('laser')} className="px-6 py-2.5 rounded-xl font-heading font-black text-xs text-black bg-gradient-to-r from-teal-200 via-rose-200 to-purple-200 shadow-md hover:scale-105 transition-all">
        ✦ HOLOGRAPHIC FOIL ✦
      </button>
    ),
    code: `export const HolographicMetallicFoil = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Holographic Metallic Foil
    </button>
  );
};`
  },
  {
    id: 'btn-14',
    title: 'Minimalist Monospace Pill',
    category: 'buttons',
    badge: 'POPULAR',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('click')} className="px-5 py-1.5 rounded-full bg-slate-100 dark:bg-neutral-900 border border-slate-300 dark:border-neutral-700 text-slate-700 dark:text-neutral-300 text-xs font-mono flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
        <span>minimal.pill()</span>
      </button>
    ),
    code: `export const MinimalistMonospacePill = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Minimalist Monospace Pill
    </button>
  );
};`
  },
  {
    id: 'btn-15',
    title: 'Expanding Icon Capsule',
    category: 'buttons',
    badge: 'TACTILE',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('pop')} className="group flex items-center px-3 hover:px-5 py-2 rounded-full bg-indigo-600 text-white text-xs font-medium transition-all duration-300">
        <Send className="w-4 h-4 shrink-0" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap pl-0 group-hover:pl-2">
          Send Invite
        </span>
      </button>
    ),
    code: `export const ExpandingIconCapsule = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Expanding Icon Capsule
    </button>
  );
};`
  },
  {
    id: 'btn-16',
    title: 'Biometric Touch Scan',
    category: 'buttons',
    badge: 'CHIC',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [sc, setSc] = useState(false);
      return (
        <button onClick={() => { playSound('laser'); setSc(true); setTimeout(() => setSc(false), 1500); }} className="relative px-5 py-2.5 rounded-xl border border-emerald-500/50 bg-emerald-950/20 text-emerald-400 text-xs font-mono flex items-center gap-2 overflow-hidden">
          <Activity className="w-4 h-4" />
          <span>{sc ? 'VERIFYING...' : 'BIOMETRIC SCAN'}</span>
          {sc && <span className="absolute inset-x-0 h-0.5 bg-emerald-400 animate-pulse top-1/2" />}
        </button>
      );
    },
    code: `export const BiometricTouchScan = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Biometric Touch Scan
    </button>
  );
};`
  },
  {
    id: 'btn-17',
    title: 'Slide Arrow Reveal Action',
    category: 'buttons',
    badge: 'HOT',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('click')} className="group px-6 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold flex items-center gap-2 overflow-hidden">
        <span>Get Started</span>
        <ArrowRight className="w-3.5 h-3.5 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
      </button>
    ),
    code: `export const SlideArrowRevealAction = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Slide Arrow Reveal Action
    </button>
  );
};`
  },
  {
    id: 'btn-18',
    title: 'Split Action Chevron Dropdown',
    category: 'buttons',
    badge: 'NEW',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex rounded-xl overflow-hidden border border-slate-300 dark:border-white/10 shadow-xs">
        <button onClick={() => playSound('click')} className="px-4 py-2 bg-indigo-600 text-white text-xs font-semibold">Deploy</button>
        <button onClick={() => playSound('pop')} className="px-2.5 py-2 bg-indigo-700 text-white text-xs border-l border-indigo-500">▾</button>
      </div>
    ),
    code: `export const SplitActionChevronDropdown = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Split Action Chevron Dropdown
    </button>
  );
};`
  },
  {
    id: 'btn-19',
    title: 'Soundwave Audio Equalizer Button',
    category: 'buttons',
    badge: '3D',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('laser')} className="px-5 py-2 rounded-xl bg-cyan-950/40 border border-cyan-500 text-cyan-300 text-xs font-mono flex items-center gap-2">
        <div className="flex items-end gap-0.5 h-3">
          <span className="w-1 bg-cyan-400 h-2 animate-[bounce_0.6s_infinite]" />
          <span className="w-1 bg-cyan-400 h-3 animate-[bounce_0.8s_infinite_0.1s]" />
          <span className="w-1 bg-cyan-400 h-1.5 animate-[bounce_0.5s_infinite_0.2s]" />
        </div>
        <span>AUDIO_BEAT</span>
      </button>
    ),
    code: `export const SoundwaveAudioEqualizerButton = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Soundwave Audio Equalizer Button
    </button>
  );
};`
  },
  {
    id: 'btn-20',
    title: 'Double Layer Isometric Offset',
    category: 'buttons',
    badge: 'PRO',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="relative inline-block cursor-pointer" onClick={() => playSound('click')}>
        <span className="absolute inset-0 rounded-xl bg-indigo-400 translate-x-1.5 translate-y-1.5" />
        <span className="relative block px-6 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform">
          Double Layer 3D
        </span>
      </div>
    ),
    code: `export const DoubleLayerIsometricOffset = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Double Layer Isometric Offset
    </button>
  );
};`
  },
  {
    id: 'btn-21',
    title: 'Heartbeat Pulse Vital',
    category: 'buttons',
    badge: 'CYBER',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('pop')} className="px-5 py-2 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-500 text-xs font-bold flex items-center gap-2">
        <Heart className="w-3.5 h-3.5 fill-rose-500 animate-ping" />
        <span>Heartbeat Pulse</span>
      </button>
    ),
    code: `export const HeartbeatPulseVital = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Heartbeat Pulse Vital
    </button>
  );
};`
  },
  {
    id: 'btn-22',
    title: 'Sonar Radar Ping',
    category: 'buttons',
    badge: 'POPULAR',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('laser')} className="relative px-5 py-2 rounded-full bg-emerald-950/40 border border-emerald-500 text-emerald-400 text-xs font-mono flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span>RADAR ACTIVE</span>
      </button>
    ),
    code: `export const SonarRadarPing = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Sonar Radar Ping
    </button>
  );
};`
  },
  {
    id: 'btn-23',
    title: 'Hacker Matrix Terminal',
    category: 'buttons',
    badge: 'TACTILE',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('click')} className="px-5 py-2 bg-black border border-emerald-500 text-emerald-400 font-mono text-xs shadow-[0_0_10px_rgba(16,185,129,0.3)]">
        $ ./execute_payload
      </button>
    ),
    code: `export const HackerMatrixTerminal = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Hacker Matrix Terminal
    </button>
  );
};`
  },
  {
    id: 'btn-24',
    title: 'Diamond Crystal Facet',
    category: 'buttons',
    badge: 'CHIC',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('laser')} className="px-6 py-2.5 rounded-lg border-2 border-cyan-300 bg-gradient-to-r from-cyan-500/20 via-white/30 to-cyan-500/20 text-cyan-400 font-bold text-xs shadow-md">
        💎 DIAMOND FACET
      </button>
    ),
    code: `export const DiamondCrystalFacet = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Diamond Crystal Facet
    </button>
  );
};`
  },
  {
    id: 'btn-25',
    title: 'Rainbow Spectral Wave',
    category: 'buttons',
    badge: 'HOT',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('pop')} className="px-6 py-2 rounded-xl text-white font-bold text-xs bg-gradient-to-r from-red-500 via-amber-500 via-emerald-500 via-blue-500 to-purple-500 hover:opacity-90 shadow-md">
        Spectral Spectrum
      </button>
    ),
    code: `export const RainbowSpectralWave = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Rainbow Spectral Wave
    </button>
  );
};`
  },
  {
    id: 'btn-26',
    title: 'Hyperspeed Streaks',
    category: 'buttons',
    badge: 'NEW',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('laser')} className="px-6 py-2 rounded-lg bg-orange-600 text-white font-black text-xs italic tracking-wider shadow-lg hover:skew-x-[-10deg] transition-transform">
        HYPERSPEED ≫≫
      </button>
    ),
    code: `export const HyperspeedStreaks = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Hyperspeed Streaks
    </button>
  );
};`
  },
  {
    id: 'btn-27',
    title: 'Starburst Gold Reward',
    category: 'buttons',
    badge: '3D',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('success')} className="px-6 py-2 rounded-xl bg-amber-400 text-black font-extrabold text-xs shadow-lg shadow-amber-400/30 flex items-center gap-1.5">
        <Star className="w-3.5 h-3.5 fill-black" />
        <span>Gold Reward +500</span>
      </button>
    ),
    code: `export const StarburstGoldReward = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Starburst Gold Reward
    </button>
  );
};`
  },
  {
    id: 'btn-28',
    title: 'Underline Expansion Action',
    category: 'buttons',
    badge: 'PRO',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('click')} className="group relative py-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs">
        <span>Underline Expansion</span>
        <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-indigo-500 transition-all duration-300" />
      </button>
    ),
    code: `export const UnderlineExpansionAction = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Underline Expansion Action
    </button>
  );
};`
  },
  {
    id: 'btn-29',
    title: 'Outer Halo Ring Beacon',
    category: 'buttons',
    badge: 'CYBER',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="relative inline-block">
        <span className="absolute -inset-1 rounded-full bg-cyan-400 opacity-40 blur-xs animate-ping" />
        <button onClick={() => playSound('pop')} className="relative px-6 py-2 rounded-full bg-cyan-600 text-white font-bold text-xs">
          Halo Beacon
        </button>
      </div>
    ),
    code: `export const OuterHaloRingBeacon = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Outer Halo Ring Beacon
    </button>
  );
};`
  },
  {
    id: 'btn-30',
    title: 'Matte Obsidian Velvet',
    category: 'buttons',
    badge: 'POPULAR',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('click')} className="px-6 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-neutral-300 text-xs font-semibold shadow-inner">
        Matte Obsidian Velvet
      </button>
    ),
    code: `export const MatteObsidianVelvet = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Matte Obsidian Velvet
    </button>
  );
};`
  },
  {
    id: 'btn-31',
    title: 'Barcode Laser Scan',
    category: 'buttons',
    badge: 'TACTILE',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('laser')} className="px-5 py-2 rounded-lg bg-slate-900 border border-red-500/50 text-red-400 font-mono text-xs flex items-center gap-2">
        <span className="w-1 h-3 bg-red-400 animate-pulse" />
        <span>BARCODE_SCAN_OK</span>
      </button>
    ),
    code: `export const BarcodeLaserScan = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Barcode Laser Scan
    </button>
  );
};`
  },
  {
    id: 'btn-32',
    title: 'Slide To Unlock Slider',
    category: 'buttons',
    badge: 'CHIC',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [u, setU] = useState(false);
      return (
        <div className="w-48 p-1 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center cursor-pointer select-none" onClick={() => { playSound('success'); setU(!u); }}>
          <motion.div animate={{ x: u ? 130 : 0 }} className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow-md">
            →
          </motion.div>
          <span className="text-[10px] font-mono text-slate-500 pl-4">{u ? 'UNLOCKED' : 'SLIDE TO UNLOCK'}</span>
        </div>
      );
    },
    code: `export const SlideToUnlockSlider = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Slide To Unlock Slider
    </button>
  );
};`
  },
  {
    id: 'btn-33',
    title: 'Split Flap Flight Status',
    category: 'buttons',
    badge: 'HOT',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('click')} className="px-5 py-2 bg-neutral-900 border-y-2 border-neutral-600 text-amber-400 font-mono text-xs tracking-widest shadow-md">
        [FLIGHT 804 DEPARTED]
      </button>
    ),
    code: `export const SplitFlapFlightStatus = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Split Flap Flight Status
    </button>
  );
};`
  },
  {
    id: 'btn-34',
    title: 'Liquid Chrome Mercury',
    category: 'buttons',
    badge: 'NEW',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('pop')} className="px-6 py-2 rounded-xl bg-gradient-to-b from-slate-200 via-slate-400 to-slate-200 text-black font-extrabold text-xs shadow-md border border-white">
        LIQUID MERCURY
      </button>
    ),
    code: `export const LiquidChromeMercury = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Liquid Chrome Mercury
    </button>
  );
};`
  },
  {
    id: 'btn-35',
    title: 'Sci-Fi Chamfer Corner',
    category: 'buttons',
    badge: '3D',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('laser')} className="px-6 py-2 bg-indigo-600 text-white font-mono text-xs font-bold [clip-path:polygon(10px_0%,100%_0%,100%_calc(100%-10px),calc(100%-10px)_100%,0%_100%,0%_10px)]">
        CHAMFER_UNIT
      </button>
    ),
    code: `export const SciFiChamferCorner = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Sci-Fi Chamfer Corner
    </button>
  );
};`
  },
  {
    id: 'btn-36',
    title: 'Heavy Gravitational Pull',
    category: 'buttons',
    badge: 'PRO',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('click')} className="px-6 py-2.5 rounded-2xl bg-violet-700 hover:bg-violet-600 text-white font-semibold text-xs shadow-2xl hover:shadow-violet-500/50 transition-shadow">
        Gravity Center Pull
      </button>
    ),
    code: `export const HeavyGravitationalPull = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Heavy Gravitational Pull
    </button>
  );
};`
  },
  {
    id: 'btn-37',
    title: 'Metric Counter Badge Button',
    category: 'buttons',
    badge: 'CYBER',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('pop')} className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold flex items-center gap-2">
        <span>Notifications</span>
        <span className="px-1.5 py-0.2 rounded-full bg-rose-500 text-[10px] text-white font-bold">14</span>
      </button>
    ),
    code: `export const MetricCounterBadgeButton = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Metric Counter Badge Button
    </button>
  );
};`
  },
  {
    id: 'btn-38',
    title: 'Mechanical Rocker Switch',
    category: 'buttons',
    badge: 'POPULAR',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [act, setAct] = useState(false);
      return (
        <button onClick={() => { playSound('click'); setAct(!act); }} className={`px-6 py-2 rounded-lg font-mono text-xs font-bold border-2 transition-all ${act ? 'bg-cyan-500 border-cyan-300 text-black shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]' : 'bg-slate-800 border-slate-600 text-slate-300 shadow-md'}`}>
          ROCKER: {act ? 'ON' : 'OFF'}
        </button>
      );
    },
    code: `export const MechanicalRockerSwitch = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Mechanical Rocker Switch
    </button>
  );
};`
  },
  {
    id: 'btn-39',
    title: 'Warp Speed Tunnel',
    category: 'buttons',
    badge: 'TACTILE',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('laser')} className="px-6 py-2.5 rounded-full bg-purple-950 border border-purple-500 text-purple-300 font-mono text-xs font-bold shadow-[0_0_15px_#a855f7]">
        WARP 9.9 ENGAGED
      </button>
    ),
    code: `export const WarpSpeedTunnel = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Warp Speed Tunnel
    </button>
  );
};`
  },
  {
    id: 'btn-40',
    title: 'Shimmer Text Horizon',
    category: 'buttons',
    badge: 'CHIC',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('click')} className="px-6 py-2.5 rounded-xl bg-slate-900 text-xs font-bold bg-gradient-to-r from-slate-400 via-white to-slate-400 bg-clip-text text-transparent border border-slate-700">
        Shimmer Text Horizon
      </button>
    ),
    code: `export const ShimmerTextHorizon = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Shimmer Text Horizon
    </button>
  );
};`
  },
  {
    id: 'btn-41',
    title: '3D Card Flip Action',
    category: 'buttons',
    badge: 'HOT',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [f, setF] = useState(false);
      return (
        <button onClick={() => { playSound('pop'); setF(!f); }} className="px-6 py-2 rounded-xl bg-indigo-500 text-white text-xs font-semibold shadow-md">
          {f ? 'Flipped Back!' : 'Click to Flip'}
        </button>
      );
    },
    code: `export const DCardFlipAction = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      3D Card Flip Action
    </button>
  );
};`
  },
  {
    id: 'btn-42',
    title: 'Rubber Band Elastic',
    category: 'buttons',
    badge: 'NEW',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <motion.button whileHover={{ scaleX: 1.15, scaleY: 0.9 }} whileTap={{ scale: 0.95 }} onClick={() => playSound('pop')} className="px-6 py-2.5 rounded-xl bg-teal-500 text-black font-bold text-xs shadow-md">
        Rubber Band Elastic
      </motion.button>
    ),
    code: `export const RubberBandElastic = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Rubber Band Elastic
    </button>
  );
};`
  },
  {
    id: 'btn-43',
    title: 'Water Drop Concentric Ripple',
    category: 'buttons',
    badge: '3D',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('pop')} className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-xs font-semibold shadow-lg hover:shadow-blue-500/40">
        Water Drop Ripple
      </button>
    ),
    code: `export const WaterDropConcentricRipple = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Water Drop Concentric Ripple
    </button>
  );
};`
  },
  {
    id: 'btn-44',
    title: 'High Voltage Electric Arc',
    category: 'buttons',
    badge: 'PRO',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('laser')} className="px-6 py-2 rounded-lg bg-yellow-950 border border-yellow-400 text-yellow-300 text-xs font-mono font-bold shadow-[0_0_10px_#facc15]">
        ⚡ VOLTAGE_ARC_240V
      </button>
    ),
    code: `export const HighVoltageElectricArc = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      High Voltage Electric Arc
    </button>
  );
};`
  },
  {
    id: 'btn-45',
    title: 'Removable Chip Tag Action',
    category: 'buttons',
    badge: 'CYBER',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-medium">
        <span>Chip Action</span>
        <span onClick={() => playSound('pop')} className="cursor-pointer text-indigo-400 hover:text-white">×</span>
      </div>
    ),
    code: `export const RemovableChipTagAction = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Removable Chip Tag Action
    </button>
  );
};`
  },
  {
    id: 'btn-46',
    title: 'Dual Gradient Frame',
    category: 'buttons',
    badge: 'POPULAR',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="p-0.5 rounded-xl bg-gradient-to-tr from-pink-500 to-indigo-500 inline-block">
        <button onClick={() => playSound('click')} className="px-5 py-2 rounded-[10px] bg-slate-900 text-white text-xs font-bold">
          Dual Gradient Frame
        </button>
      </div>
    ),
    code: `export const DualGradientFrame = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Dual Gradient Frame
    </button>
  );
};`
  },
  {
    id: 'btn-47',
    title: 'Claymorphic 3D Inflated',
    category: 'buttons',
    badge: 'TACTILE',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('pop')} className="px-6 py-2.5 rounded-2xl bg-indigo-500 text-white text-xs font-black shadow-[inset_-3px_-3px_6px_rgba(0,0,0,0.3),inset_3px_3px_6px_rgba(255,255,255,0.4)]">
        Claymorphic 3D
      </button>
    ),
    code: `export const ClaymorphicDInflated = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Claymorphic 3D Inflated
    </button>
  );
};`
  },
  {
    id: 'btn-48',
    title: 'Audio Volume Toggle Button',
    category: 'buttons',
    badge: 'CHIC',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [m, setM] = useState(false);
      return (
        <button onClick={() => { playSound('pop'); setM(!m); }} className="px-5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono flex items-center gap-2">
          <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>AUDIO: {m ? 'MUTED' : 'UNMUTED'}</span>
        </button>
      );
    },
    code: `export const AudioVolumeToggleButton = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Audio Volume Toggle Button
    </button>
  );
};`
  },
  {
    id: 'btn-49',
    title: 'Download Arrow Bounce Action',
    category: 'buttons',
    badge: 'HOT',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('success')} className="group px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center gap-2 shadow-md">
        <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        <span>Download ZIP Archive</span>
      </button>
    ),
    code: `export const DownloadArrowBounceAction = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Download Arrow Bounce Action
    </button>
  );
};`
  },
  {
    id: 'btn-50',
    title: 'Quantum Core Nucleus Button',
    category: 'buttons',
    badge: 'NEW',
    description: 'Distinctive interactive animated button widget with customized visual physics.',
    tags: ['Buttons', 'Framer Motion', 'Interactive'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('laser')} className="px-6 py-2.5 rounded-full bg-slate-950 border border-cyan-400 text-cyan-300 font-mono text-xs font-bold shadow-[0_0_20px_#06b6d4] flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>QUANTUM_CORE_V5</span>
      </button>
    ),
    code: `export const QuantumCoreNucleusButton = () => {
  return (
    <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs shadow-lg">
      Quantum Core Nucleus Button
    </button>
  );
};`
  },
];
