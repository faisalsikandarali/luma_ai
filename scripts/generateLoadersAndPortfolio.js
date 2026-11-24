import fs from 'fs';
import path from 'path';

const loadersPath = path.resolve('src/data/categories/loadersData.jsx');
const portfolioPath = path.resolve('src/data/categories/portfolioData.jsx');

const importsHeader = `import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Zap, Shield, Heart, ArrowRight, Check, CreditCard, RefreshCw, 
  Terminal, Search, Radio, Play, Pause, Compass, Star, Cpu, Layers, Activity,
  Sliders, Bell, Info, AlertTriangle, CheckCircle2, ChevronRight, Menu, X, Plus, Minus,
  Download, Send, Lock, Eye, EyeOff, Music, Volume2, Cloud, Sun, Moon, Database,
  TrendingUp, TrendingDown, Wifi, Battery, MapPin, Share2, Award, Bookmark,
  RotateCw, FastForward, Globe, Laptop, Smartphone, FileText, CheckSquare, MessageSquare,
  BarChart3, PieChart, Users, Key, Server, Hash, ShieldCheck, ShoppingCart, ShoppingBag,
  Clock, GitBranch, Copy, ExternalLink, Box, QrCode, Maximize2, Tag, Flame, CheckCircle,
  ThumbsUp, VolumeX, Mic, Calendar, DollarSign, Percent, Paperclip, SlidersHorizontal,
  Briefcase, Code, GraduationCap, Mail, UserCheck, TerminalSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSound } from '../../utils/sound';
`;

// =========================================================================
// 1. 50 UNIQUE LOADERS & SPINNERS
// =========================================================================
const loaderItems = [
  {
    title: 'Quantum Orbit Gyroscopic Loader',
    badge: 'QUANTUM',
    tags: ['Quantum', 'Orbit', 'Spinner'],
    component: `() => (
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        <div className="absolute inset-1 rounded-full border-2 border-cyan-400/20 border-b-cyan-400 animate-[spin_1.5s_linear_infinite_reverse]" />
        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
      </div>
    )`
  },
  {
    title: 'Hyperspace Warp Tunnel',
    badge: 'WARP',
    tags: ['Warp', 'Tunnel', 'SciFi'],
    component: `() => (
      <div className="relative w-14 h-14 flex items-center justify-center">
        <motion.div animate={{ scale: [0.3, 1.2], opacity: [1, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }} className="absolute inset-0 rounded-xl border-2 border-indigo-400" />
        <motion.div animate={{ scale: [0.3, 1.2], opacity: [1, 0] }} transition={{ duration: 1.2, delay: 0.4, repeat: Infinity, ease: 'easeOut' }} className="absolute inset-0 rounded-xl border-2 border-cyan-400" />
        <span className="font-mono text-[9px] text-indigo-400 font-bold">WARP</span>
      </div>
    )`
  },
  {
    title: 'Pulsing Sonic Wave Ring',
    badge: 'SONIC',
    tags: ['Sonic', 'Pulse', 'Wave'],
    component: `() => (
      <div className="relative w-12 h-12 flex items-center justify-center">
        <span className="w-full h-full rounded-full bg-cyan-400/30 animate-ping absolute" />
        <span className="w-8 h-8 rounded-full bg-cyan-400/50 absolute" />
        <span className="w-3.5 h-3.5 rounded-full bg-cyan-500 z-10" />
      </div>
    )`
  },
  {
    title: 'Bouncing Three Dot Wave',
    badge: 'DOTS',
    tags: ['Dots', 'Bounce', 'Wave'],
    component: `() => (
      <div className="flex gap-2 items-center">
        <motion.span animate={{ y: [-6, 6, -6] }} transition={{ duration: 0.6, repeat: Infinity }} className="w-3 h-3 rounded-full bg-indigo-600" />
        <motion.span animate={{ y: [-6, 6, -6] }} transition={{ duration: 0.6, delay: 0.2, repeat: Infinity }} className="w-3 h-3 rounded-full bg-purple-500" />
        <motion.span animate={{ y: [-6, 6, -6] }} transition={{ duration: 0.6, delay: 0.4, repeat: Infinity }} className="w-3 h-3 rounded-full bg-pink-500" />
      </div>
    )`
  },
  {
    title: 'Cyber Matrix Progress Segment Bar',
    badge: 'MATRIX',
    tags: ['Progress', 'Bar', 'Cyber'],
    component: `() => (
      <div className="w-48 space-y-1.5">
        <div className="flex justify-between text-[10px] font-mono text-cyan-500 font-bold">
          <span>BUFFERING</span><span>84%</span>
        </div>
        <div className="h-2 bg-slate-200 dark:bg-neutral-800 rounded-full overflow-hidden p-0.5 flex gap-1">
          <div className="h-full bg-cyan-500 rounded-l-full w-[84%]" />
        </div>
      </div>
    )`
  },
  {
    title: 'Rotating Hexagon Prism',
    badge: 'HEX',
    tags: ['Hexagon', 'Prism', 'Geometry'],
    component: `() => (
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="w-10 h-10 border-2 border-fuchsia-500 border-dashed rounded-xl" />
    )`
  },
  {
    title: 'Infinite Möbius Ribbon Loop',
    badge: 'INFINITY',
    tags: ['Infinity', 'Ribbon', 'Math'],
    component: `() => (
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} className="text-indigo-600 dark:text-indigo-400 font-black text-3xl">
        ∞</motion.div>
    )`
  },
  {
    title: 'Liquid Mercury Fluid Droplet',
    badge: 'MERCURY',
    tags: ['Mercury', 'Liquid', 'Fluid'],
    component: `() => (
      <motion.div animate={{ borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '50% 50% 20% 80% / 25% 80% 20% 75%', '30% 70% 70% 30% / 30% 30% 70% 70%'], rotate: 360 }} transition={{ duration: 4, repeat: Infinity }} className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-cyan-400 shadow-md" />
    )`
  },
  {
    title: 'Radar Sweeper Beam Scanner',
    badge: 'RADAR',
    tags: ['Radar', 'Scanner', 'Beam'],
    component: `() => (
      <div className="relative w-12 h-12 rounded-full border border-emerald-500/30 overflow-hidden flex items-center justify-center">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="absolute w-full h-full bg-gradient-to-tr from-emerald-500/40 to-transparent rounded-full" />
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 z-10" />
      </div>
    )`
  },
  {
    title: 'Clockwise Speedometer Ticker',
    badge: 'TICKER',
    tags: ['Ticker', 'Clock', 'Dial'],
    component: `() => (
      <div className="relative w-11 h-11 rounded-full border-2 border-slate-300 dark:border-white/10 flex items-center justify-center">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-0.5 h-4 bg-indigo-600 rounded-full origin-bottom -translate-y-2" />
        <div className="w-2 h-2 rounded-full bg-indigo-600" />
      </div>
    )`
  },
  {
    title: 'Hourglass Sand Granule Flip',
    badge: 'HOURGLASS',
    tags: ['Hourglass', 'Time', 'Flip'],
    component: `() => (
      <motion.div animate={{ rotate: [0, 180, 180, 360] }} transition={{ duration: 2, repeat: Infinity }} className="text-xl">
        ⏳
      </motion.div>
    )`
  },
  {
    title: 'Neon Cyberpunk Dual Glow Ring',
    badge: 'NEON',
    tags: ['Neon', 'Glow', 'Ring'],
    component: `() => (
      <div className="relative w-11 h-11 flex items-center justify-center">
        <div className="w-full h-full rounded-full border-2 border-fuchsia-500 border-t-cyan-400 animate-spin shadow-[0_0_12px_rgba(217,70,239,0.5)]" />
      </div>
    )`
  },
  {
    title: 'DNA Double Helix Twist',
    badge: 'DNA',
    tags: ['DNA', 'Helix', 'Biology'],
    component: `() => (
      <div className="flex gap-1.5 items-center">
        {[0, 1, 2, 3].map((i) => (
          <motion.div key={i} animate={{ y: [-8, 8, -8] }} transition={{ duration: 0.8, delay: i * 0.15, repeat: Infinity }} className="w-2 h-2 rounded-full bg-indigo-500" />
        ))}
      </div>
    )`
  },
  {
    title: 'Newton Pendulum Clacker',
    badge: 'NEWTON',
    tags: ['Newton', 'Pendulum', 'Physics'],
    component: `() => (
      <div className="flex gap-1 items-center">
        <motion.div animate={{ rotate: [0, -35, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-2.5 h-2.5 rounded-full bg-slate-700 dark:bg-white origin-top" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-700 dark:bg-white" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-700 dark:bg-white" />
        <motion.div animate={{ rotate: [0, 35, 0] }} transition={{ duration: 0.8, delay: 0.4, repeat: Infinity }} className="w-2.5 h-2.5 rounded-full bg-slate-700 dark:bg-white origin-top" />
      </div>
    )`
  },
  {
    title: 'Pac-Man Chomper Dot Eater',
    badge: 'PACMAN',
    tags: ['Pacman', 'Retro', 'Arcade'],
    component: `() => (
      <div className="flex items-center gap-2">
        <span className="text-xl animate-pulse">🟡</span>
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
      </div>
    )`
  },
  {
    title: 'Glowing Particle Vortex Swarm',
    badge: 'VORTEX',
    tags: ['Vortex', 'Particle', 'Swarm'],
    component: `() => (
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} className="w-10 h-10 border-2 border-indigo-500 border-dotted rounded-full flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-cyan-400" />
      </motion.div>
    )`
  },
  {
    title: 'Equalizer Audio Dancing Frequency',
    badge: 'AUDIO',
    tags: ['Audio', 'Frequency', 'Bars'],
    component: `() => (
      <div className="flex gap-1 items-end h-8">
        {[40, 80, 50, 95, 30].map((h, i) => (
          <motion.span key={i} animate={{ height: [\`\${h * 0.3}%\`, \`\${h}%\`, \`\${h * 0.4}%\`] }} transition={{ duration: 0.5 + i * 0.1, repeat: Infinity, repeatType: 'reverse' }} className="w-1.5 bg-indigo-600 rounded-full" />
        ))}
      </div>
    )`
  },
  {
    title: 'Rubik Cube 3D Rotating Blocks',
    badge: 'RUBIK',
    tags: ['Rubik', 'Cube', '3D'],
    component: `() => (
      <motion.div animate={{ rotate: [0, 90, 180, 270, 360] }} transition={{ duration: 2, repeat: Infinity }} className="grid grid-cols-2 gap-1 w-7 h-7">
        <div className="bg-indigo-500 rounded-xs" /><div className="bg-cyan-400 rounded-xs" />
        <div className="bg-rose-500 rounded-xs" /><div className="bg-amber-400 rounded-xs" />
      </motion.div>
    )`
  },
  {
    title: 'Retro Floppy Disk Writer LED',
    badge: 'FLOPPY',
    tags: ['Floppy', 'Disk', 'Retro'],
    component: `() => (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 text-white font-mono text-xs">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
        <span>WRITING DISK...</span>
      </div>
    )`
  },
  {
    title: 'Terminal Hex Code Ingestion Stream',
    badge: 'HEX',
    tags: ['Terminal', 'Hex', 'Stream'],
    component: `() => (
      <div className="font-mono text-[10px] text-emerald-400 bg-black/80 px-2 py-1 rounded">
        0x7F...SYNCING
      </div>
    )`
  },
  {
    title: 'Orbiting Solar Planetary Satellite',
    badge: 'PLANET',
    tags: ['Planet', 'Solar', 'Orbit'],
    component: `() => (
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-amber-400 shadow-md" />
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 flex items-start justify-center">
          <div className="w-2 h-2 rounded-full bg-cyan-400" />
        </motion.div>
      </div>
    )`
  },
  {
    title: 'Calm Ripple Expanding Water Drop',
    badge: 'RIPPLE',
    tags: ['Ripple', 'Water', 'Calm'],
    component: `() => (
      <div className="relative w-10 h-10 flex items-center justify-center">
        <span className="w-full h-full rounded-full border border-sky-400 animate-ping absolute" />
        <span className="w-3 h-3 rounded-full bg-sky-500" />
      </div>
    )`
  },
  {
    title: 'Interlocked Rotating Gears Duo',
    badge: 'GEARS',
    tags: ['Gears', 'Cog', 'Engine'],
    component: `() => (
      <div className="flex items-center gap-1">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
          <RotateCw className="w-5 h-5 text-indigo-500" />
        </motion.div>
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
          <RotateCw className="w-4 h-4 text-cyan-400" />
        </motion.div>
      </div>
    )`
  },
  {
    title: 'Battery Fast Pulse Charging Bolt',
    badge: 'BATTERY',
    tags: ['Battery', 'Charge', 'Bolt'],
    component: `() => (
      <div className="flex items-center gap-1.5 font-mono text-xs text-emerald-500 font-bold">
        <Zap className="w-4 h-4 fill-emerald-500 animate-bounce" />
        <span>CHARGING</span>
      </div>
    )`
  },
  {
    title: 'Inertial Fidget Spinner Tri-Blade',
    badge: 'SPINNER',
    tags: ['Fidget', 'Spinner', 'Inertial'],
    component: `() => (
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} className="w-8 h-8 rounded-full border-4 border-indigo-600 border-t-transparent" />
    )`
  },
  {
    title: 'Laser Scanning Barcode Reader',
    badge: 'SCANNER',
    tags: ['Laser', 'Barcode', 'Scan'],
    component: `() => (
      <div className="relative w-28 h-6 bg-slate-900 rounded flex items-center justify-center overflow-hidden font-mono text-[9px] text-slate-400">
        <span>||| || ||| ||</span>
        <motion.div animate={{ x: [-50, 50, -50] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-y-0 w-1 bg-rose-500 shadow-[0_0_8px_#f43f5e]" />
      </div>
    )`
  },
  {
    title: 'Figure-8 Figure Particle Track',
    badge: 'FIGURE8',
    tags: ['Figure8', 'Particle', 'Track'],
    component: `() => (
      <div className="font-mono text-sm font-black text-fuchsia-500 animate-pulse">
        8-LOOP LOADING
      </div>
    )`
  },
  {
    title: 'Ping Pong Bouncing Ricochet',
    badge: 'PONG',
    tags: ['Pong', 'Bounce', 'Retro'],
    component: `() => (
      <div className="w-24 h-6 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 relative overflow-hidden flex items-center">
        <motion.div animate={{ x: [0, 70, 0] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-3 h-3 rounded-full bg-indigo-600" />
      </div>
    )`
  },
  {
    title: 'Circular Dashed Tachometer Ring',
    badge: 'TACH',
    tags: ['Tachometer', 'Speed', 'Ring'],
    component: `() => (
      <div className="w-10 h-10 rounded-full border-2 border-indigo-500 border-dashed animate-[spin_4s_linear_infinite]" />
    )`
  },
  {
    title: 'Origami Cube 3D Fold Sequence',
    badge: 'ORIGAMI',
    tags: ['Origami', 'Cube', 'Fold'],
    component: `() => (
      <motion.div animate={{ scale: [1, 0.7, 1], rotate: [0, 180, 360] }} transition={{ duration: 2, repeat: Infinity }} className="w-7 h-7 bg-indigo-600 rounded-md" />
    )`
  },
  {
    title: 'Digital Clock Matrix Scrambler',
    badge: 'MATRIX',
    tags: ['Clock', 'Matrix', 'Scramble'],
    component: `() => (
      <div className="font-mono text-xs font-bold text-cyan-400 bg-neutral-950 px-2 py-1 rounded">
        SYNCING_TIMESTAMP
      </div>
    )`
  },
  {
    title: 'Sine Wave Floating Undulation',
    badge: 'SINE',
    tags: ['Sine', 'Wave', 'Ocean'],
    component: `() => (
      <div className="flex gap-1 items-center">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div key={i} animate={{ y: [-4, 4, -4] }} transition={{ duration: 0.6, delay: i * 0.1, repeat: Infinity }} className="w-1.5 h-4 bg-cyan-400 rounded-full" />
        ))}
      </div>
    )`
  },
  {
    title: 'Firefly Jar Ambient Glowing Embers',
    badge: 'FIREFLY',
    tags: ['Firefly', 'Ember', 'Glow'],
    component: `() => (
      <div className="flex gap-2 items-center">
        <motion.span animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity }} className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
        <motion.span animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, delay: 0.5, repeat: Infinity }} className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
      </div>
    )`
  },
  {
    title: 'Zen Mindfulness Breathing Circle',
    badge: 'ZEN',
    tags: ['Zen', 'Mindful', 'Breathe'],
    component: `() => (
      <motion.div animate={{ scale: [0.8, 1.3, 0.8] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="w-9 h-9 rounded-full bg-indigo-500/30 border border-indigo-400 flex items-center justify-center text-[8px] font-mono font-bold text-indigo-300">
        BREATHE
      </motion.div>
    )`
  },
  {
    title: 'Diamond Crystal Facet Rotation',
    badge: 'DIAMOND',
    tags: ['Diamond', 'Crystal', 'Luxury'],
    component: `() => (
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} className="w-7 h-7 border-2 border-cyan-300 rotate-45 shadow-[0_0_10px_#67e8f9]" />
    )`
  },
  {
    title: 'Snake Arcade Segment Crawl',
    badge: 'SNAKE',
    tags: ['Snake', 'Retro', 'Arcade'],
    component: `() => (
      <div className="flex gap-1">
        <div className="w-2 h-2 bg-emerald-500 rounded-xs" />
        <div className="w-2 h-2 bg-emerald-500/70 rounded-xs" />
        <div className="w-2 h-2 bg-emerald-500/40 rounded-xs" />
      </div>
    )`
  },
  {
    title: 'iOS Message Typing Bubble Stream',
    badge: 'TYPING',
    tags: ['Typing', 'iOS', 'Chat'],
    component: `() => (
      <div className="px-3 py-2 rounded-2xl bg-slate-200 dark:bg-white/10 flex gap-1 items-center">
        <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" />
        <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
        <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
      </div>
    )`
  },
  {
    title: 'WiFi Searching Animated Arcs',
    badge: 'WIFI',
    tags: ['WiFi', 'Network', 'Signal'],
    component: `() => (
      <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-bold">
        <Wifi className="w-5 h-5 animate-pulse" />
        <span>SEARCHING</span>
      </div>
    )`
  },
  {
    title: 'Magnetic Compass Needle Shiver',
    badge: 'COMPASS',
    tags: ['Compass', 'Magnetic', 'Shiver'],
    component: `() => (
      <motion.div animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 1, repeat: Infinity }}>
        <Compass className="w-6 h-6 text-indigo-500" />
      </motion.div>
    )`
  },
  {
    title: 'Starfield Warp Speed Streak',
    badge: 'WARPSPEED',
    tags: ['WarpSpeed', 'Stars', 'Space'],
    component: `() => (
      <div className="flex gap-2 items-center font-mono text-xs text-amber-400 font-bold">
        <span>WARP SPEED</span>
        <span className="w-6 h-0.5 bg-amber-400 animate-pulse" />
      </div>
    )`
  },
  {
    title: 'Sacred Triangle Delta Prism',
    badge: 'DELTA',
    tags: ['Delta', 'Prism', 'Sacred'],
    component: `() => (
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }} className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-fuchsia-500" />
    )`
  },
  {
    title: 'Yin Yang Duality Rotation',
    badge: 'YINYANG',
    tags: ['YinYang', 'Duality', 'Balance'],
    component: `() => (
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="w-8 h-8 rounded-full border-2 border-slate-900 dark:border-white border-t-transparent" />
    )`
  },
  {
    title: 'ECG Electrocardiogram Pulse EKG',
    badge: 'ECG',
    tags: ['ECG', 'Pulse', 'Heart'],
    component: `() => (
      <div className="flex items-center gap-1.5 text-xs font-mono text-rose-500 font-bold">
        <Activity className="w-5 h-5 animate-pulse" />
        <span>VITAL SYNC</span>
      </div>
    )`
  },
  {
    title: 'Shuffling Playing Cards Deck',
    badge: 'SHUFFLE',
    tags: ['Shuffle', 'Cards', 'Deck'],
    component: `() => (
      <div className="relative w-8 h-8">
        <motion.div animate={{ x: [-4, 4, -4] }} transition={{ duration: 0.8, repeat: Infinity }} className="absolute inset-0 rounded bg-indigo-500 shadow" />
        <div className="absolute inset-0 rounded bg-purple-500 shadow-sm" />
      </div>
    )`
  },
  {
    title: 'Target Crosshair Lock Acquisition',
    badge: 'CROSSHAIR',
    tags: ['Crosshair', 'Lock', 'Target'],
    component: `() => (
      <div className="relative w-9 h-9 flex items-center justify-center">
        <div className="absolute inset-0 border border-cyan-400 rounded-full animate-ping" />
        <span className="w-2 h-2 rounded-full bg-cyan-400" />
      </div>
    )`
  },
  {
    title: 'Kaleidoscope Prismatic Floral Spin',
    badge: 'KALEIDO',
    tags: ['Kaleidoscope', 'Prism', 'Floral'],
    component: `() => (
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 via-emerald-400 to-indigo-500 blur-xs" />
    )`
  },
  {
    title: 'Barcode Laser Scanning Ray',
    badge: 'BARCODE',
    tags: ['Barcode', 'Laser', 'Ray'],
    component: `() => (
      <div className="font-mono text-xs text-rose-500 font-bold tracking-widest animate-pulse">
        SCANNING_BARCODE
      </div>
    )`
  },
  {
    title: 'Satellite Space Station Beacon',
    badge: 'SATELLITE',
    tags: ['Satellite', 'Orbit', 'Space'],
    component: `() => (
      <div className="flex items-center gap-1.5 font-mono text-xs text-indigo-400 font-bold">
        <Radio className="w-4 h-4 animate-ping" />
        <span>UPLINK 100%</span>
      </div>
    )`
  },
  {
    title: 'Pendulum Wave Multi-Dot Swing',
    badge: 'PENDULUM',
    tags: ['Pendulum', 'Wave', 'Dots'],
    component: `() => (
      <div className="flex gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <motion.div key={i} animate={{ y: [-6, 6, -6] }} transition={{ duration: 0.5 + i * 0.1, repeat: Infinity }} className="w-2 h-2 rounded-full bg-cyan-400" />
        ))}
      </div>
    )`
  },
  {
    title: 'Singularity Black Hole Collapse',
    badge: 'SINGULARITY',
    tags: ['Singularity', 'BlackHole', 'Gravity'],
    component: `() => (
      <div className="relative w-10 h-10 flex items-center justify-center">
        <motion.div animate={{ scale: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-full h-full rounded-full bg-indigo-600/30" />
        <div className="w-3 h-3 rounded-full bg-black dark:bg-white shadow-xl z-10" />
      </div>
    )`
  }
];

// =========================================================================
// 2. 50 UNIQUE PORTFOLIO & PROFILE INFO CARDS
// =========================================================================
const portfolioItems = [
  {
    title: 'Senior Fullstack Engineer Bento Showcase',
    badge: 'STAFF',
    tags: ['Fullstack', 'Engineer', 'Bento'],
    component: `() => (
      <div className="w-72 p-5 rounded-2xl bg-white dark:bg-[#0d0f19] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-md">
            AV
          </div>
          <div>
            <h4 className="text-sm font-bold">Alexander Vance</h4>
            <p className="text-[11px] text-indigo-500 font-mono">Staff Fullstack Architect</p>
          </div>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Building distributed systems and real-time collaborative web apps.</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {['React 19', 'Next.js', 'Go', 'Postgres'].map(t => (
            <span key={t} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/5 text-[10px] font-mono text-slate-700 dark:text-slate-300">{t}</span>
          ))}
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-slate-100 dark:border-white/5 text-xs">
          <span className="text-emerald-500 font-mono font-bold">● Available for Q2</span>
          <button onClick={() => playSound('pop')} className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-bold text-[10px]">Contact</button>
        </div>
      </div>
    )`
  },
  {
    title: 'Product Designer Dribbble Case Study',
    badge: 'DESIGN',
    tags: ['Designer', 'Dribbble', 'UI/UX'],
    component: `() => (
      <div className="w-72 rounded-2xl bg-white dark:bg-[#0f111c] border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden text-slate-800 dark:text-white">
        <div className="h-28 bg-gradient-to-tr from-fuchsia-600 to-indigo-600 p-3 flex flex-col justify-between text-white">
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-black/40 w-fit">CASE STUDY</span>
          <div><h5 className="text-xs font-bold">Fintech Neo-Banking App</h5><span className="text-[10px] text-white/80">Redesign 2026</span></div>
        </div>
        <div className="p-4">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-slate-500">Elena Rostova</span>
            <span className="text-amber-500 font-bold">★ Apple Design Award</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5">Figma</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5">Prototyping</span>
          </div>
        </div>
      </div>
    )`
  },
  {
    title: 'AI Research Scientist Credentials',
    badge: 'AI LABS',
    tags: ['AI', 'Research', 'MachineLearning'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-2">
          <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-mono font-bold">GOOGLE BRAIN ALUM</span>
          <span className="text-[10px] font-mono text-slate-400">h-index: 32</span>
        </div>
        <h5 className="text-xs font-bold mb-1">Dr. Sophia Lin, PhD</h5>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">Diffusion Models & Large Multimodal Architecture Alignment.</p>
        <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono pt-2 border-t border-slate-100 dark:border-white/5">
          <div className="p-1.5 rounded-xl bg-slate-50 dark:bg-white/5"><div className="font-bold text-indigo-500">24</div><div className="text-[9px] text-slate-400">Papers</div></div>
          <div className="p-1.5 rounded-xl bg-slate-50 dark:bg-white/5"><div className="font-bold text-emerald-500">14.8k</div><div className="text-[9px] text-slate-400">Citations</div></div>
        </div>
      </div>
    )`
  },
  {
    title: 'Terminal CLI Developer Resume',
    badge: 'TERMINAL',
    tags: ['CLI', 'Resume', 'Hacker'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-[#090b14] border border-emerald-500/30 text-emerald-400 font-mono text-xs shadow-xl">
        <div className="text-slate-400 pb-1 mb-2 border-b border-emerald-500/20 text-[10px] flex justify-between">
          <span>resume.sh</span><span>bash</span>
        </div>
        <div className="space-y-1 text-[11px]">
          <div>&gt; WHOAMI: <span className="text-white font-bold">Kaelen Voss</span></div>
          <div>&gt; ROLE: <span className="text-cyan-400">Principal Systems Eng</span></div>
          <div>&gt; STACK: [Rust, Linux, eBPF, K8s]</div>
          <div className="text-emerald-300 font-bold">&gt; STATUS: <span className="text-emerald-400 underline">HIRE_ME</span></div>
        </div>
      </div>
    )`
  },
  {
    title: 'Indie Hacker Solo Founder Card',
    badge: 'FOUNDER',
    tags: ['Indie', 'Founder', 'SaaS'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0d18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold">Marc K. • Solo Maker</span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-bold">$42k MRR</span>
        </div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">Built 4 micro-SaaS tools bootstrapped to profitability with 0 VC funding.</p>
        <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-100 dark:border-white/5">
          <span>Stripe Verified</span><span>100% Bootstrapped</span>
        </div>
      </div>
    )`
  },
  {
    title: '3D Motion Designer Showreel Frame',
    badge: '3D SHOW',
    tags: ['3D', 'Motion', 'Blender'],
    component: `() => (
      <div className="w-72 rounded-2xl bg-white dark:bg-[#0e101a] border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden text-slate-800 dark:text-white">
        <div className="relative h-28 bg-gradient-to-tr from-slate-900 via-indigo-950 to-purple-950 flex items-center justify-center">
          <Play className="w-8 h-8 text-white/80 cursor-pointer hover:scale-110 transition-transform" onClick={() => playSound('pop')} />
          <span className="absolute bottom-2 right-2 text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/60 text-white">REEL 2026</span>
        </div>
        <div className="p-3">
          <h5 className="text-xs font-bold">Liam Gallagher • 3D Artist</h5>
          <p className="text-[10px] text-slate-400">Blender, Houdini, Octane Render</p>
        </div>
      </div>
    )`
  },
  {
    title: 'Mobile iOS Swift Developer Card',
    badge: 'SWIFT',
    tags: ['iOS', 'Swift', 'AppStore'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold">SwiftUI Craftsman</span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 font-bold">4.9 ★ RATING</span>
        </div>
        <div className="text-base font-bold mb-1">Clara Martinez</div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">120k+ App Store downloads across 3 featured utility apps.</p>
        <div className="text-[10px] font-mono text-slate-400 flex justify-between pt-2 border-t border-slate-100 dark:border-white/5">
          <span>CoreData & VisionOS</span><span>WWDC Scholar</span>
        </div>
      </div>
    )`
  },
  {
    title: 'Minimal Swiss Architect Profile',
    badge: 'SWISS',
    tags: ['Swiss', 'Architect', 'Editorial'],
    component: `() => (
      <div className="w-72 p-5 rounded-2xl bg-neutral-900 text-white border border-neutral-800 shadow-xl flex flex-col justify-between h-44">
        <div className="flex justify-between items-start">
          <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase">ARCHITECTURAL DESIGN</span>
          <span className="font-black text-xs">ZÜRICH</span>
        </div>
        <div>
          <h4 className="text-base font-black tracking-tight">Hans V. Keller</h4>
          <p className="text-[11px] text-neutral-400">Minimal structural systems and tactile physical materials.</p>
        </div>
      </div>
    )`
  },
  {
    title: 'Open Source Advocate & Contributor',
    badge: 'OPEN SOURCE',
    tags: ['OpenSource', 'GitHub', 'DevRel'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex items-center gap-2 mb-2">
          <GitBranch className="w-4 h-4 text-indigo-500" />
          <span className="text-xs font-bold">4.2k GitHub Stars</span>
        </div>
        <h5 className="text-xs font-bold mb-1">Felix O'Connor</h5>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">Core maintainer of 3 popular npm micro-packages.</p>
        <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-100 dark:border-white/5">
          <span>Speaker: ReactConf</span><span>Top 1% Contributor</span>
        </div>
      </div>
    )`
  },
  {
    title: 'Fintech Systems Core Architect',
    badge: 'FINTECH',
    tags: ['Fintech', 'Latency', 'Banking'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-mono font-bold text-cyan-500">HIGH-FREQUENCY TRADING</span>
          <span className="text-[10px] font-mono text-emerald-500">99.999% SLA</span>
        </div>
        <h5 className="text-xs font-bold">David Chen</h5>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-2">Ultra low latency order execution pipelines in C++23.</p>
        <div className="text-[9px] font-mono text-slate-400">$8B Daily Volume Handled</div>
      </div>
    )`
  },
  {
    title: 'Interactive Flip Project Case Study',
    badge: 'FLIP',
    tags: ['CaseStudy', 'Flip', 'Metrics'],
    component: `() => {
      const [flipped, setFlipped] = useState(false);
      return (
        <div onClick={() => { playSound('pop'); setFlipped(!flipped); }} className="w-72 h-40 cursor-pointer [perspective:1000px] select-none">
          <motion.div animate={{ rotateY: flipped ? 180 : 0 }} className="w-full h-full relative [transform-style:preserve-3d]">
            <div className="absolute inset-0 p-4 rounded-2xl bg-gradient-to-tr from-indigo-900 to-slate-900 text-white flex flex-col justify-between [backface-visibility:hidden]">
              <span className="text-[10px] font-mono text-indigo-300 font-bold">CASE STUDY • CLICK TO FLIP</span>
              <div><h5 className="text-sm font-bold">Global SaaS Checkout Flow</h5><p className="text-[10px] text-slate-300">Conversion optimization experiment</p></div>
            </div>
            <div className="absolute inset-0 p-4 rounded-2xl bg-neutral-900 text-white flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <span className="text-[10px] font-mono text-emerald-400 font-bold">RESULTS & OUTCOMES</span>
              <div><div className="text-xl font-black text-emerald-400">+34.8%</div><p className="text-[10px] text-slate-400">Increase in annual subscription completions</p></div>
            </div>
          </motion.div>
        </div>
      );
    }`
  },
  {
    title: 'Skills Matrix Pentagram Card',
    badge: 'SKILLS',
    tags: ['Skills', 'Matrix', 'Radar'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <h5 className="text-xs font-bold mb-2">Technical Proficiency</h5>
        <div className="space-y-1.5 text-xs font-mono">
          <div><div className="flex justify-between text-[10px] text-slate-400"><span>Frontend (React/Next)</span><span>95%</span></div><div className="h-1 bg-slate-200 dark:bg-white/10 rounded-full"><div className="h-full bg-indigo-500 rounded-full w-[95%]" /></div></div>
          <div><div className="flex justify-between text-[10px] text-slate-400"><span>Backend (Node/Go)</span><span>88%</span></div><div className="h-1 bg-slate-200 dark:bg-white/10 rounded-full"><div className="h-full bg-cyan-400 rounded-full w-[88%]" /></div></div>
          <div><div className="flex justify-between text-[10px] text-slate-400"><span>Cloud / DevOps</span><span>80%</span></div><div className="h-1 bg-slate-200 dark:bg-white/10 rounded-full"><div className="h-full bg-fuchsia-400 rounded-full w-[80%]" /></div></div>
        </div>
      </div>
    )`
  },
  {
    title: 'Career Timeline Journey Stepper',
    badge: 'CAREER',
    tags: ['Timeline', 'Career', 'Journey'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <h5 className="text-xs font-bold mb-3">Career Trajectory</h5>
        <div className="space-y-2 text-xs font-mono">
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-500" /><span>2024 - Present: Staff Eng @ Lumina</span></div>
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-400" /><span>2022 - 2024: Senior Eng @ Stripe</span></div>
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-400" /><span>2019 - 2022: Software Eng @ Uber</span></div>
        </div>
      </div>
    )`
  },
  {
    title: 'Verified Client Testimonial Endorsement',
    badge: 'ENDORSED',
    tags: ['Review', 'Testimonial', 'Client'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex gap-1 text-amber-400 mb-2">★★★★★</div>
        <p className="text-xs italic text-slate-600 dark:text-slate-300 mb-3">"Alexander delivered our entire design system in record time. Absolute 10/10 engineer."</p>
        <div className="text-[10px] font-mono text-slate-400">Sarah Jenkins • CEO @ Veloce Labs</div>
      </div>
    )`
  },
  {
    title: 'GitHub Commit Contribution Heatmap',
    badge: 'STREAK',
    tags: ['GitHub', 'Commits', 'Streak'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between text-xs mb-2"><span className="font-bold">1,842 Commits in 2025</span><span className="text-[10px] font-mono text-emerald-500">284 Day Streak</span></div>
        <div className="grid grid-cols-10 gap-1">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className={\`h-3 rounded-xs \${i % 4 === 0 ? 'bg-emerald-600' : i % 2 === 0 ? 'bg-emerald-400' : 'bg-slate-200 dark:bg-white/10'}\`} />
          ))}
        </div>
      </div>
    )`
  },
  {
    title: 'Dribbble Creative Shot Preview',
    badge: 'DRIBBBLE',
    tags: ['Dribbble', 'Creative', 'Shot'],
    component: `() => (
      <div className="w-72 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden text-slate-800 dark:text-white">
        <div className="h-28 bg-gradient-to-tr from-pink-500 to-rose-500 p-3 flex items-end justify-between text-white font-bold text-xs">
          <span>Glassmorphic Banking</span>
          <span className="flex items-center gap-1 font-mono text-[10px]">❤️ 1.4k</span>
        </div>
        <div className="p-3 text-xs flex justify-between"><span>Lumina Design</span><span className="text-slate-400">Pro</span></div>
      </div>
    )`
  },
  {
    title: 'Tech Stack Interactive Floating Cloud',
    badge: 'STACK',
    tags: ['Stack', 'Pills', 'Cloud'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <h5 className="text-xs font-bold mb-2">Core Arsenal</h5>
        <div className="flex flex-wrap gap-1.5">
          {['TypeScript', 'Tailwind', 'Next 15', 'Framer', 'Rust', 'GraphQL', 'Docker'].map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">{t}</span>
          ))}
        </div>
      </div>
    )`
  },
  {
    title: 'Hackathon 1st Place Champion Trophy',
    badge: 'HACKATHON',
    tags: ['Trophy', 'Hackathon', 'Winner'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 shadow-xl">
        <div className="flex items-center gap-2 mb-1">
          <Award className="w-5 h-5 text-amber-500" />
          <span className="text-xs font-bold">1st Place • ETHDenver 2025</span>
        </div>
        <p className="text-[11px] text-slate-600 dark:text-slate-300 mb-2">Built zero-knowledge private payroll application in 48 hours.</p>
        <div className="text-[10px] font-mono font-bold">$25,000 Grand Prize</div>
      </div>
    )`
  },
  {
    title: 'Freelance Rate & Availability Card',
    badge: 'FREELANCE',
    tags: ['Freelance', 'Rate', 'Hourly'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold">Freelance Contracts</span>
          <span className="text-xs font-mono font-bold text-indigo-500">$140 / hr</span>
        </div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">Taking on 1 high-impact design engineering project for Q2 2026.</p>
        <button onClick={() => playSound('pop')} className="w-full py-1.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700">Request Booking</button>
      </div>
    )`
  },
  {
    title: 'Podcast Host & Speaker Card',
    badge: 'PODCAST',
    tags: ['Podcast', 'Speaker', 'Audio'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex items-center gap-2 mb-2 text-indigo-500">
          <Mic className="w-4 h-4" />
          <span className="text-xs font-bold">The Frontline Podcast</span>
        </div>
        <h5 className="text-xs font-bold mb-1">Ep 84: The React 19 Shift</h5>
        <div className="text-[10px] font-mono text-slate-400">28k Monthly Listeners • Spotify & Apple</div>
      </div>
    )`
  },
  {
    title: 'Technical Book Author Credentials',
    badge: 'AUTHOR',
    tags: ['Author', 'Book', 'Writing'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-amber-500 font-bold uppercase">O\'Reilly Media Author</span>
        <h5 className="text-xs font-bold mb-1">"Advanced Component Systems"</h5>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">Over 15,000 copies sold worldwide.</p>
      </div>
    )`
  },
  {
    title: 'White-Hat Bug Bounty Hunter Vault',
    badge: 'BOUNTY',
    tags: ['Security', 'Bounty', 'Hacker'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-[#090b14] border border-cyan-500/30 text-white shadow-xl">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold font-mono text-cyan-400">HACKERONE TOP 50</span>
          <span className="text-[10px] font-mono text-emerald-400">$180k+ Bounties</span>
        </div>
        <h5 className="text-xs font-bold">Critical Vulnerabilities Patched</h5>
        <div className="text-[10px] font-mono text-slate-400 mt-1">Stripe, Shopify, Coinbase</div>
      </div>
    )`
  },
  {
    title: 'Game Developer Unity & Unreal Engine',
    badge: 'GAMEDEV',
    tags: ['GameDev', 'Unity', 'Unreal'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-indigo-500 font-bold">STEAM RELEASED</span>
        <h5 className="text-xs font-bold mb-1">Lead Technical Game Designer</h5>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">Shaders, Physics, Procedural Generation</p>
      </div>
    )`
  },
  {
    title: 'Web3 Smart Contract Security Auditor',
    badge: 'WEB3',
    tags: ['Web3', 'SmartContract', 'Solidity'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="text-xs font-bold text-emerald-500 mb-1">$450M TVL Audited</div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">Zero exploits post-deployment in audited protocols.</p>
      </div>
    )`
  },
  {
    title: 'Product Manager Metric Impact Card',
    badge: 'PRODUCT',
    tags: ['Product', 'Metrics', 'Impact'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono font-bold text-indigo-500 uppercase">Growth Outcomes</span>
        <div className="text-xl font-black text-slate-800 dark:text-white my-1">+140% LTV</div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">Spearheaded self-serve activation pipeline.</p>
      </div>
    )`
  },
  {
    title: 'Clean Minimalist Digital Business Card',
    badge: 'VCARD',
    tags: ['vCard', 'NFC', 'Contact'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-slate-900 text-white shadow-xl flex items-center justify-between">
        <div>
          <h5 className="text-xs font-bold">Alexander Vance</h5>
          <div className="text-[10px] text-slate-400 font-mono">alex@lumina.ui</div>
        </div>
        <button onClick={() => playSound('pop')} className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
          <QrCode className="w-5 h-5 text-indigo-400" />
        </button>
      </div>
    )`
  },
  {
    title: 'Design System Lead Token Architect',
    badge: 'TOKENS',
    tags: ['DesignSystem', 'Tokens', 'Components'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <h5 className="text-xs font-bold mb-1">Core Design System Lead</h5>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-2">Architected 85 production components used by 200+ engineers daily.</p>
        <span className="text-[10px] font-mono text-indigo-500 font-bold">100% TypeScript Coverage</span>
      </div>
    )`
  },
  {
    title: 'Data Science & Machine Learning Master',
    badge: 'ML',
    tags: ['DataScience', 'Kaggle', 'Master'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-amber-500 font-bold">KAGGLE GRANDMASTER</span>
        <h5 className="text-xs font-bold my-1">Predictive Analytics & LLMs</h5>
        <p className="text-[10px] text-slate-400">PyTorch, Transformers, Fine-Tuning</p>
      </div>
    )`
  },
  {
    title: 'Cloud Infrastructure & DevOps Architect',
    badge: 'CLOUD',
    tags: ['Cloud', 'AWS', 'Terraform'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-500 mb-1">
          <Cloud className="w-4 h-4" />
          <span>AWS Solutions Architect</span>
        </div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">Terraform, Kubernetes, Zero-Trust Architecture</p>
      </div>
    )`
  },
  {
    title: 'Creative Technologist Generative Art',
    badge: 'GEN-ART',
    tags: ['GenerativeArt', 'WebGL', 'ThreeJS'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-fuchsia-500 font-bold">WEBGL & THREE.JS</span>
        <h5 className="text-xs font-bold my-1">Generative Kinetic Canvases</h5>
        <p className="text-[10px] text-slate-400">Featured on FWA & Awwwards</p>
      </div>
    )`
  },
  {
    title: 'UX Researcher User Testing Insights',
    badge: 'RESEARCH',
    tags: ['UX', 'Research', 'Interviews'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <h5 className="text-xs font-bold mb-1">Qualitative UX Researcher</h5>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">120+ In-depth customer interviews conducted.</p>
      </div>
    )`
  },
  {
    title: 'Accessibility WCAG AAA Specialist',
    badge: 'A11Y',
    tags: ['A11y', 'WCAG', 'Accessible'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 shadow-xl">
        <h5 className="text-xs font-bold mb-1">WCAG 2.2 AAA Certified</h5>
        <p className="text-[10px] text-slate-600 dark:text-slate-300">Screen reader keyboard navigation audited.</p>
      </div>
    )`
  },
  {
    title: 'Micro-SaaS Profitability Snapshot',
    badge: 'METRICS',
    tags: ['MicroSaaS', 'LTV', 'Churn'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between text-xs font-bold mb-2"><span>SaaS Health</span><span className="text-emerald-500">1.2% Churn</span></div>
        <div className="text-base font-black font-mono mb-1">$840 LTV</div>
        <div className="text-[10px] font-mono text-slate-400">Net Revenue Retention: 118%</div>
      </div>
    )`
  },
  {
    title: 'YouTube Developer Educator Channel',
    badge: 'YOUTUBE',
    tags: ['YouTube', 'Educator', 'Video'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-rose-500 font-bold">250K SUBSCRIBERS</span>
        <h5 className="text-xs font-bold my-1">Modern React Tutorials</h5>
        <p className="text-[10px] text-slate-400">Practical software engineering masterclasses.</p>
      </div>
    )`
  },
  {
    title: 'Site Reliability MTTR Incident Hero',
    badge: 'SRE',
    tags: ['SRE', 'MTTR', 'Incident'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="text-xs font-bold text-cyan-500 mb-1">MTTR: 3.8 Minutes</div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">Zero unplanned production outages across 2025.</p>
      </div>
    )`
  },
  {
    title: 'Neu-Brutalist High-Contrast Resume',
    badge: 'BRUTAL',
    tags: ['Brutalist', 'Resume', 'Pop'],
    component: `() => (
      <div className="w-72 p-4 bg-yellow-300 text-black border-2 border-black shadow-[4px_4px_0px_#000] font-mono">
        <h5 className="font-black text-sm uppercase">BRUTALIST DEV</h5>
        <p className="text-xs font-bold mt-1">NO BORING CODE ALLOWED.</p>
      </div>
    )`
  },
  {
    title: 'Glassmorphic Haute Luxury Designer',
    badge: 'LUXURY',
    tags: ['Luxury', 'Glass', 'Gold'],
    component: `() => (
      <div className="w-72 p-5 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-amber-300/40 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-amber-500 tracking-widest uppercase">Haute Design</span>
        <h5 className="text-sm font-bold my-1">Julian De Montfort</h5>
        <p className="text-[10px] text-slate-400">Bespoke Digital Identity</p>
      </div>
    )`
  },
  {
    title: 'Startup Advisor & Angel Syndicate',
    badge: 'ANGEL',
    tags: ['Angel', 'Investor', 'Syndicate'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-indigo-500 font-bold">14 PORTFOLIO COMPANIES</span>
        <h5 className="text-xs font-bold my-1">Seed Stage Angel Investor</h5>
        <p className="text-[10px] text-slate-400">Developer Tools & Infrastructure</p>
      </div>
    )`
  },
  {
    title: 'Embedded Hardware IoT Engineer',
    badge: 'IOT',
    tags: ['IoT', 'Hardware', 'Firmware'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-emerald-500 font-bold">C++ & RASPBERRY PI</span>
        <h5 className="text-xs font-bold my-1">Firmware Architecture</h5>
        <p className="text-[10px] text-slate-400">Bluetooth LE & Smart Sensors</p>
      </div>
    )`
  },
  {
    title: 'Brand Typography & Foundry Stylist',
    badge: 'FOUNDRY',
    tags: ['Typography', 'Foundry', 'Serif'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <h5 className="text-sm font-serif italic mb-1">Custom Type Specimen</h5>
        <p className="text-[10px] text-slate-400 font-mono">Designed 8 bespoke retail font families.</p>
      </div>
    )`
  },
  {
    title: 'Agile Scrum Coach & Engineering Mentor',
    badge: 'COACH',
    tags: ['Scrum', 'Coach', 'Agile'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <h5 className="text-xs font-bold mb-1">Certified Scrum Master</h5>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">Trained 18 squads to 40% higher sprint velocity.</p>
      </div>
    )`
  },
  {
    title: 'Remote Global Nomad Engineer',
    badge: 'NOMAD',
    tags: ['Nomad', 'Remote', 'Async'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-cyan-500 font-bold">WORKING FROM BALI</span>
        <h5 className="text-xs font-bold my-1">Async-First Deep Work</h5>
        <p className="text-[10px] text-slate-400">18 Countries • 100% Remote</p>
      </div>
    )`
  },
  {
    title: 'Interactive Audio & Sound Designer',
    badge: 'SOUND',
    tags: ['Sound', 'Audio', 'OST'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-purple-500 font-bold">GAME OST COMPOSER</span>
        <h5 className="text-xs font-bold my-1">Spatial Audio & SFX</h5>
        <p className="text-[10px] text-slate-400">Over 40 million streams worldwide.</p>
      </div>
    )`
  },
  {
    title: 'Venture Capital Tech Scout',
    badge: 'SCOUT',
    tags: ['VC', 'Scout', 'Tech'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-indigo-500 font-bold">TIER-1 VC SCOUT</span>
        <h5 className="text-xs font-bold my-1">Early Dealflow Evaluator</h5>
        <p className="text-[10px] text-slate-400">B2B SaaS & AI Infrastructure</p>
      </div>
    )`
  },
  {
    title: 'E-Commerce Growth Hacker Extraordinaire',
    badge: 'GROWTH',
    tags: ['Growth', 'Shopify', 'eCommerce'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-emerald-500 font-bold">$4.2M GMV SCALED</span>
        <h5 className="text-xs font-bold my-1">Shopify Plus Architect</h5>
        <p className="text-[10px] text-slate-400">Conversion rate & retention optimization</p>
      </div>
    )`
  },
  {
    title: 'QA Automation Test Suite Champion',
    badge: 'QA',
    tags: ['QA', 'Playwright', 'Test'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="text-xs font-bold text-emerald-500 mb-1">98.4% Test Coverage</div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">Playwright, Cypress, E2E CI/CD Gates</p>
      </div>
    )`
  },
  {
    title: 'AR/VR Spatial Computing Visionary',
    badge: 'SPATIAL',
    tags: ['Spatial', 'VisionPro', 'VR'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-indigo-400 font-bold">APPLE VISION PRO</span>
        <h5 className="text-xs font-bold my-1">Spatial Computing Apps</h5>
        <p className="text-[10px] text-slate-400">RealityKit, SwiftUI, Hand Tracking</p>
      </div>
    )`
  },
  {
    title: 'Code Mentor & 1-on-1 Career Guide',
    badge: 'MENTOR',
    tags: ['Mentor', 'FAANG', 'Career'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-bold">4.9 ★ Rating</span>
          <span className="text-[10px] font-mono text-indigo-500 font-bold">200+ Placed</span>
        </div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">Helping engineers land senior roles at top tech companies.</p>
      </div>
    )`
  },
  {
    title: 'Tech Pioneer Hall of Fame Fellow',
    badge: 'LEGEND',
    tags: ['Pioneer', 'Legend', 'HallOfFame'],
    component: `() => (
      <div className="w-72 p-5 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-yellow-500/10 to-amber-600/20 border-2 border-amber-400/50 text-slate-900 dark:text-amber-200 shadow-2xl">
        <span className="text-[10px] font-mono font-black text-amber-600 dark:text-amber-400 tracking-widest uppercase">HALL OF FAME</span>
        <h4 className="text-sm font-black my-1">Emeritus Tech Fellow</h4>
        <p className="text-xs text-slate-600 dark:text-amber-300/80">25+ Years shaping the open web standards.</p>
      </div>
    )`
  },
  {
    title: 'Fractional CTO Strategic Advisory Board Card',
    badge: 'CTO',
    tags: ['CTO', 'Advisory', 'Strategy'],
    component: `() => (
      <div className="w-72 p-5 rounded-2xl bg-white dark:bg-[#0c0d18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-mono font-bold text-indigo-500 uppercase tracking-widest">BOARD ADVISOR</span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 font-bold">SERIES A-C</span>
        </div>
        <h4 className="text-sm font-bold">Elena Rostova</h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 my-1">Guiding technical architecture, hiring scale, and SOC2 readiness.</p>
        <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-100 dark:border-white/5">
          <span>5 Startups Advised</span>
          <span className="text-emerald-500 font-bold">$120M Raised</span>
        </div>
      </div>
    )`
  }
];

// Helper to write file
function writeCategory(items, categoryName, exportName, filePath) {
  let out = importsHeader + '\nexport const ' + exportName + ' = [\n';
  items.forEach((item, idx) => {
    const slug = categoryName + '-' + String(idx + 1).padStart(2, '0');
    out += '  {\n' +
      "    id: '" + slug + "',\n" +
      "    title: '" + item.title.replace(/'/g, "\\'") + "',\n" +
      "    category: '" + categoryName + "',\n" +
      "    badge: '" + item.badge + "',\n" +
      "    description: 'Distinctive interactive " + categoryName + " widget with customized visual physics.',\n" +
      "    tags: " + JSON.stringify(item.tags) + ",\n" +
      "    dependencies: ['framer-motion', 'lucide-react'],\n" +
      "    component: " + item.component + ",\n" +
      "    code: `export const " + item.title.replace(/[^a-zA-Z]/g, '') + " = () => (\n" +
      "  <div className=\"p-4 border rounded-2xl\">" + item.title.replace(/'/g, "\\'") + "</div>\n" +
      ");`\n" +
      '  },\n';
  });
  out += '];\n';
  fs.writeFileSync(filePath, out, 'utf-8');
  console.log('Successfully wrote ' + items.length + ' items to ' + categoryName + 'Data.jsx');
}

writeCategory(loaderItems, 'loaders', 'loadersData', loadersPath);
writeCategory(portfolioItems, 'portfolio', 'portfolioData', portfolioPath);

console.log('Finished writing 50 Loaders and 50 Portfolio Cards!');
