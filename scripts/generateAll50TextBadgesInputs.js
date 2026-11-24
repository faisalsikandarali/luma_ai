import fs from 'fs';
import path from 'path';

const textPath = path.resolve('src/data/categories/textData.jsx');
const badgePath = path.resolve('src/data/categories/badgesData.jsx');
const inputPath = path.resolve('src/data/categories/inputsData.jsx');

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
  ThumbsUp, VolumeX, Mic, Calendar, DollarSign, Percent, Paperclip, SlidersHorizontal
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSound } from '../../utils/sound';
`;

// =========================================================================
// 1. 50 TEXT ITEMS
// =========================================================================
const textItems = [
  {
    title: 'Cyberpunk 2088 Chromatic Glitch',
    badge: 'GLITCH',
    tags: ['Cyber', 'Glitch', 'Chromatic'],
    component: `() => (
      <span onClick={() => playSound('laser')} className="font-heading font-black text-2xl tracking-widest text-slate-900 dark:text-white hover:text-cyan-400 transition-colors cursor-pointer select-none drop-shadow-[2px_2px_0px_rgba(236,72,153,0.8)] dark:drop-shadow-[2px_2px_0px_#06b6d4]">
        CYBERPUNK 2088
      </span>
    )`
  },
  {
    title: 'Fluid Aurora Mesh Gradient',
    badge: 'AURORA',
    tags: ['Gradient', 'Mesh', 'Aurora'],
    component: `() => (
      <h3 className="font-black text-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 via-indigo-500 to-fuchsia-500 bg-[length:200%_auto] animate-[gradient_4s_ease_infinite] bg-clip-text text-transparent">
        Fluid Aurora Mesh
      </h3>
    )`
  },
  {
    title: 'Terminal CLI Monospace Typewriter',
    badge: 'TERMINAL',
    tags: ['CLI', 'Typewriter', 'Terminal'],
    component: `() => (
      <div className="font-mono text-xs px-3 py-1.5 rounded-lg bg-slate-900 text-emerald-400 flex items-center shadow-md">
        <span>$ npm create-lumina-app@latest</span>
        <span className="w-1.5 h-3.5 bg-emerald-400 ml-1.5 animate-pulse" />
      </div>
    )`
  },
  {
    title: 'Staggered Wave Letter Bounce',
    badge: 'BOUNCE',
    tags: ['Bounce', 'Wave', 'Letters'],
    component: `() => (
      <div className="flex gap-1 justify-center cursor-pointer select-none" onMouseEnter={() => playSound('pop')}>
        {"SPRING PHYSICS".split("").map((c, i) => (
          <motion.span key={i} whileHover={{ y: -6, color: "#6366f1" }} className="font-black text-lg text-slate-800 dark:text-slate-100">
            {c === " " ? "\\u00A0" : c}
          </motion.span>
        ))}
      </div>
    )`
  },
  {
    title: 'Neon Tube Signboard Glow',
    badge: 'NEON',
    tags: ['Neon', 'Glow', 'Night'],
    component: `() => (
      <span className="font-mono text-xl font-black text-fuchsia-500 drop-shadow-[0_0_12px_rgba(217,70,239,0.8)] tracking-widest">
        NEON DREAMS
      </span>
    )`
  },
  {
    title: 'Hollow Stroke Outline',
    badge: 'STROKE',
    tags: ['Outline', 'Stroke', 'Minimal'],
    component: `() => (
      <span className="font-black text-2xl text-transparent" style={{ WebkitTextStroke: "1.5px #6366f1" }}>
        TRANSCENDENCE
      </span>
    )`
  },
  {
    title: 'Shimmering Champagne Gold Foil',
    badge: 'GOLD',
    tags: ['Gold', 'Luxury', 'Shimmer'],
    component: `() => (
      <span className="font-extrabold text-lg bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
        ✦ LUXURY CHAMPAGNE ✦
      </span>
    )`
  },
  {
    title: 'Variable Weight Fluid Sweeper',
    badge: 'VARIABLE',
    tags: ['Font', 'Variable', 'Weight'],
    component: `() => (
      <span className="font-light hover:font-black text-xl text-indigo-600 dark:text-indigo-400 transition-all duration-300 cursor-pointer">
        Variable Weight Dynamics
      </span>
    )`
  },
  {
    title: 'Matrix Digital Rain Binary',
    badge: 'MATRIX',
    tags: ['Matrix', 'Binary', 'Hacker'],
    component: `() => (
      <div className="font-mono text-xs text-emerald-400 bg-black/60 px-3 py-1 rounded-md border border-emerald-500/30">
        01001100 01010101 01001101 01001001
      </div>
    )`
  },
  {
    title: 'Syntax Token Code Highlight',
    badge: 'SYNTAX',
    tags: ['Code', 'Syntax', 'Dev'],
    component: `() => (
      <div className="font-mono text-xs px-3 py-1.5 rounded-lg bg-slate-900 text-slate-300">
        <span className="text-purple-400">const</span> <span className="text-amber-400">widget</span> = <span className="text-cyan-400">createUi</span>();
      </div>
    )`
  },
  {
    title: '3D Isometric Extruded Shadow',
    badge: '3D',
    tags: ['3D', 'Isometric', 'Shadow'],
    component: `() => (
      <span className="font-black text-2xl text-indigo-600 dark:text-indigo-400" style={{ textShadow: "0 2px 0 #4338ca, 0 4px 0 #3730a3, 0 6px 8px rgba(0,0,0,0.3)" }}>
        ISOMETRIC 3D
      </span>
    )`
  },
  {
    title: 'Monospace T-Minus Countdown',
    badge: 'TIMESTAMP',
    tags: ['Timestamp', 'Clock', 'Mono'],
    component: `() => (
      <div className="font-mono text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="font-bold">T-MINUS 00:04:18.92</span>
      </div>
    )`
  },
  {
    title: 'Gradient Liquid Wave Water',
    badge: 'LIQUID',
    tags: ['Liquid', 'Wave', 'Water'],
    component: `() => (
      <span className="font-black text-2xl bg-gradient-to-t from-cyan-500 via-sky-400 to-transparent bg-clip-text text-transparent">
        LIQUID WATER
      </span>
    )`
  },
  {
    title: 'Retro 80s Synthwave Chrome',
    badge: 'RETRO',
    tags: ['Synthwave', '80s', 'Chrome'],
    component: `() => (
      <span className="font-heading font-black text-2xl italic tracking-wider bg-gradient-to-b from-sky-300 via-white to-pink-500 bg-clip-text text-transparent">
        SYNTHWAVE 1984
      </span>
    )`
  },
  {
    title: 'Blur-to-Focus Cinema Reveal',
    badge: 'BLUR',
    tags: ['Cinema', 'Blur', 'Reveal'],
    component: `() => (
      <span className="font-bold text-xl text-slate-800 dark:text-white hover:blur-none blur-[1.5px] transition-all cursor-pointer">
        Cinematic Perception
      </span>
    )`
  },
  {
    title: 'Scramble Decrypt Cipher',
    badge: 'CIPHER',
    tags: ['Cipher', 'Decrypt', 'Hacker'],
    component: `() => {
      const [txt, setTxt] = useState('DECRYPTED');
      return (
        <span 
          onClick={() => { playSound('laser'); setTxt('CONFIDENTIAL'); setTimeout(() => setTxt('DECRYPTED'), 1000); }}
          className="font-mono font-bold text-xs px-2.5 py-1 rounded bg-black text-emerald-400 border border-emerald-500/40 cursor-pointer"
        >
          &gt; {txt}
        </span>
      );
    }`
  },
  {
    title: 'Magnetic Character Repulsion',
    badge: 'MAGNETIC',
    tags: ['Magnetic', 'Motion', 'Spring'],
    component: `() => (
      <div className="flex gap-1 font-bold text-lg text-slate-800 dark:text-white cursor-pointer" onMouseEnter={() => playSound('pop')}>
        {"GRAVITATIONAL".split("").map((c, i) => (
          <motion.span key={i} whileHover={{ scale: 1.3, color: '#f43f5e' }}>{c}</motion.span>
        ))}
      </div>
    )`
  },
  {
    title: 'Cursive Signature Script',
    badge: 'SCRIPT',
    tags: ['Signature', 'Handwritten', 'Art'],
    component: `() => (
      <span className="font-serif italic font-normal text-2xl text-indigo-600 dark:text-indigo-400">
        Alexander Vance
      </span>
    )`
  },
  {
    title: 'Strikethrough Price Animator',
    badge: 'PRICE',
    tags: ['Commerce', 'Price', 'Discount'],
    component: `() => (
      <div className="flex items-center gap-2 font-mono">
        <span className="line-through text-slate-400 text-sm">$199.00</span>
        <span className="text-xl font-black text-rose-500">$89.00</span>
      </div>
    )`
  },
  {
    title: 'Double Shadow Duotone Pop',
    badge: 'DUOTONE',
    tags: ['PopArt', 'Duotone', 'Shadow'],
    component: `() => (
      <span className="font-black text-2xl text-slate-900 dark:text-white" style={{ textShadow: "3px 3px 0 #ec4899, 6px 6px 0 #06b6d4" }}>
        POP ART DUO
      </span>
    )`
  },
  {
    title: 'Floating Helium Bubble Text',
    badge: 'FLOAT',
    tags: ['Float', 'Helium', 'Physics'],
    component: `() => (
      <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="font-black text-xl text-sky-500">
        FLOATING HELIUM
      </motion.div>
    )`
  },
  {
    title: 'Burning Ember Glow Sparks',
    badge: 'EMBER',
    tags: ['Fire', 'Ember', 'Glow'],
    component: `() => (
      <span className="font-black text-xl text-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]">
        BURNING EMBER 🔥
      </span>
    )`
  },
  {
    title: 'Split Horizontal Slice Offset',
    badge: 'SLICE',
    tags: ['Slice', 'Offset', 'Cyber'],
    component: `() => (
      <div className="relative font-black text-2xl tracking-widest text-slate-900 dark:text-white group cursor-pointer" onClick={() => playSound('pop')}>
        <span className="group-hover:translate-x-1 transition-transform inline-block">SLICED HORIZON</span>
      </div>
    )`
  },
  {
    title: 'Rolling Slot Machine Counter',
    badge: 'COUNTER',
    tags: ['Counter', 'Slot', 'Numbers'],
    component: `() => (
      <div className="font-mono text-xl font-black text-indigo-600 dark:text-indigo-400 flex items-center">
        <span>$</span>
        <motion.span animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 1.5, repeat: Infinity }}>
          94,820.00
        </motion.span>
      </div>
    )`
  },
  {
    title: 'Frosted Glass Embossed Text',
    badge: 'FROSTED',
    tags: ['Glass', 'Emboss', 'Apple'],
    component: `() => (
      <span className="font-bold text-lg text-slate-700 dark:text-slate-200" style={{ textShadow: "0 1px 1px rgba(255,255,255,0.8), 0 -1px 1px rgba(0,0,0,0.3)" }}>
        Frosted Glass Depth
      </span>
    )`
  },
  {
    title: 'Gradient Underline Sweep',
    badge: 'UNDERLINE',
    tags: ['Underline', 'Sweep', 'Link'],
    component: `() => (
      <span className="font-bold text-lg text-slate-800 dark:text-white border-b-2 border-indigo-500 pb-0.5 hover:border-fuchsia-500 transition-colors cursor-pointer">
        Underline Border Sweep
      </span>
    )`
  },
  {
    title: 'Highlighter Fluorescent Yellow Marker',
    badge: 'MARKER',
    tags: ['Highlight', 'Marker', 'Yellow'],
    component: `() => (
      <span className="font-bold text-base bg-yellow-300/80 dark:bg-yellow-400/20 text-slate-900 dark:text-yellow-300 px-2 py-0.5 rounded">
        CRITICAL MILESTONE
      </span>
    )`
  },
  {
    title: 'Swiss All-Caps Spaced Headline',
    badge: 'SWISS',
    tags: ['Swiss', 'Spaced', 'Minimal'],
    component: `() => (
      <span className="font-mono font-black text-sm tracking-[0.4em] text-slate-800 dark:text-white uppercase">
        L U M I N A
      </span>
    )`
  },
  {
    title: 'Curved Badge Emblem Text',
    badge: 'EMBLEM',
    tags: ['Emblem', 'Circle', 'Stamp'],
    component: `() => (
      <div className="px-3 py-1 rounded-full border border-indigo-500 text-indigo-500 font-mono text-xs font-bold flex items-center gap-1.5">
        <Sparkles className="w-3 h-3" />
        <span>AUTHENTICATED DESIGN</span>
      </div>
    )`
  },
  {
    title: 'Confidential CIA Redacted Bar',
    badge: 'REDACTED',
    tags: ['Redacted', 'Secret', 'Hover'],
    component: `() => (
      <div className="font-mono text-xs text-slate-800 dark:text-white flex items-center gap-1">
        <span>PROJECT:</span>
        <span className="bg-slate-900 dark:bg-white text-transparent hover:text-white dark:hover:text-black px-1.5 py-0.5 rounded cursor-pointer transition-colors">
          TOP_SECRET_ORBIT
        </span>
      </div>
    )`
  },
  {
    title: 'Rainbow Prism Holographic Text',
    badge: 'PRISM',
    tags: ['Rainbow', 'Prism', 'Color'],
    component: `() => (
      <span className="font-black text-xl bg-gradient-to-r from-red-500 via-amber-400 via-emerald-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
        PRISM SPECTRUM
      </span>
    )`
  },
  {
    title: 'Shaky Earthquake Jitter FX',
    badge: 'JITTER',
    tags: ['Jitter', 'Shake', 'Action'],
    component: `() => (
      <motion.span animate={{ x: [-1, 1, -1] }} transition={{ duration: 0.1, repeat: Infinity }} className="font-mono font-black text-lg text-rose-500">
        SEISMIC VIBRATION
      </motion.span>
    )`
  },
  {
    title: 'Liquid Chrome Mercury Metal',
    badge: 'CHROME',
    tags: ['Chrome', 'Metal', 'Mercury'],
    component: `() => (
      <span className="font-black text-xl bg-gradient-to-b from-white via-slate-400 to-slate-700 bg-clip-text text-transparent drop-shadow-md">
        MERCURY CHROME
      </span>
    )`
  },
  {
    title: 'Infinite Marquee Ticker Stream',
    badge: 'MARQUEE',
    tags: ['Marquee', 'Stream', 'Ticker'],
    component: `() => (
      <div className="w-64 overflow-hidden rounded-lg bg-slate-100 dark:bg-white/5 py-1 px-2 border border-slate-200 dark:border-white/10 font-mono text-xs text-indigo-500 flex justify-between">
        <span className="font-bold">● LIVE TICKER</span>
        <span>LUMINA UI V4.0 LIVE NOW</span>
      </div>
    )`
  },
  {
    title: 'Perspective Crawl Sci-Fi Text',
    badge: 'SCIFI',
    tags: ['SciFi', 'Crawl', 'Space'],
    component: `() => (
      <div className="font-mono text-xs text-amber-400 font-bold uppercase tracking-widest [transform:perspective(100px)_rotateX(20deg)]">
        EPISODE IV: A NEW CORE
      </div>
    )`
  },
  {
    title: 'Bouncing Ping-Pong Ball Text',
    badge: 'BALL',
    tags: ['Bounce', 'Ball', 'Playful'],
    component: `() => (
      <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-white text-base">
        <span>Ping Pong</span>
        <motion.span animate={{ y: [-8, 0, -8] }} transition={{ duration: 0.4, repeat: Infinity }} className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
      </div>
    )`
  },
  {
    title: 'RGB Chameleon Wave Cycle',
    badge: 'CHAMELEON',
    tags: ['Chameleon', 'Color', 'Cycle'],
    component: `() => (
      <span className="font-black text-xl text-teal-400 hover:text-fuchsia-400 transition-colors duration-500 cursor-pointer">
        CHAMELEON SHIFTER
      </span>
    )`
  },
  {
    title: 'Military Stencil Spray Paint',
    badge: 'STENCIL',
    tags: ['Military', 'Stencil', 'Spray'],
    component: `() => (
      <span className="font-mono font-black text-xl text-slate-800 dark:text-slate-200 tracking-widest border-2 border-dashed border-slate-400 px-3 py-0.5">
        SECTOR-09
      </span>
    )`
  },
  {
    title: 'Comic Book Dot Halftone Pop',
    badge: 'COMIC',
    tags: ['Comic', 'Halftone', 'Pop'],
    component: `() => (
      <span className="font-black text-2xl text-amber-400 italic tracking-wider drop-shadow-[2px_2px_0px_#000]">
        BOOM! 💥
      </span>
    )`
  },
  {
    title: 'UV Blacklight Cyan Glow Stick',
    badge: 'BLACKLIGHT',
    tags: ['UV', 'Cyan', 'Glow'],
    component: `() => (
      <span className="font-mono font-bold text-lg text-cyan-300 drop-shadow-[0_0_15px_#06b6d4]">
        UV LUMINESCENCE
      </span>
    )`
  },
  {
    title: 'Distorted VHS Scanlines Glitch',
    badge: 'VHS',
    tags: ['VHS', 'Tape', 'Scanline'],
    component: `() => (
      <div className="font-mono text-xs text-rose-400 bg-neutral-900 px-3 py-1 rounded border border-rose-500/30 flex items-center justify-between">
        <span>REC ● 00:12:44</span>
        <span className="text-[10px] text-white">SP TAPE</span>
      </div>
    )`
  },
  {
    title: 'Morphing Word Rotator Flip',
    badge: 'MORPH',
    tags: ['Morph', 'Words', 'Rotate'],
    component: `() => {
      const [idx, setIdx] = useState(0);
      const words = ['Fast', 'Scalable', 'Beautiful'];
      return (
        <div className="flex items-center gap-2 font-black text-lg text-slate-800 dark:text-white cursor-pointer" onClick={() => { playSound('pop'); setIdx((idx + 1) % words.length); }}>
          <span>Build</span>
          <span className="text-indigo-600 dark:text-indigo-400 underline decoration-wavy">{words[idx]}</span>
        </div>
      );
    }`
  },
  {
    title: 'Golden Sparkler Particle Text',
    badge: 'SPARK',
    tags: ['Golden', 'Spark', 'Particle'],
    component: `() => (
      <span className="font-extrabold text-base text-amber-400 flex items-center gap-1">
        <Sparkles className="w-4 h-4 text-yellow-300" />
        <span>SPARKLER STARLIGHT</span>
      </span>
    )`
  },
  {
    title: 'Minimalist Serpentine Italic Font',
    badge: 'SERIF',
    tags: ['Serif', 'Editorial', 'Italic'],
    component: `() => (
      <span className="font-serif italic text-xl text-slate-700 dark:text-slate-300">
        "Elegance in restraint"
      </span>
    )`
  },
  {
    title: 'Inverted Solid Hover Block',
    badge: 'INVERT',
    tags: ['Invert', 'Block', 'Contrast'],
    component: `() => (
      <span className="font-bold text-base px-3 py-1 rounded-md text-slate-800 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer">
        Invert Block Switch
      </span>
    )`
  },
  {
    title: 'Elastic Rubber Band Stretch',
    badge: 'ELASTIC',
    tags: ['Stretch', 'Elastic', 'Physics'],
    component: `() => (
      <motion.span whileHover={{ scaleX: 1.2 }} className="font-black text-xl text-indigo-500 inline-block cursor-pointer">
        ELASTIC STRETCH
      </motion.span>
    )`
  },
  {
    title: 'Laser Engraved Wood Burn',
    badge: 'ENGRAVED',
    tags: ['Laser', 'Engraved', 'Burn'],
    component: `() => (
      <span className="font-mono font-bold text-base text-amber-700 dark:text-amber-500">
        LASER ETCHED // 2026
      </span>
    )`
  },
  {
    title: 'Subtitle Speech Bubble Caption',
    badge: 'SPEECH',
    tags: ['Speech', 'Bubble', 'Caption'],
    component: `() => (
      <div className="px-3 py-1 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-medium border border-indigo-200 dark:border-indigo-500/20">
        💬 "Design is intelligence made visible."
      </div>
    )`
  },
  {
    title: 'Pulsing Heartbeat Rhythm Text',
    badge: 'RHYTHM',
    tags: ['Heart', 'Rhythm', 'Pulse'],
    component: `() => (
      <div className="flex items-center gap-1.5 font-bold text-base text-rose-500">
        <Heart className="w-4 h-4 fill-rose-500 animate-ping" />
        <span>PULSING CODE</span>
      </div>
    )`
  },
  {
    title: 'Deep Space Galaxy Texture Clip',
    badge: 'GALAXY',
    tags: ['Galaxy', 'DeepSpace', 'Stars'],
    component: `() => (
      <span className="font-black text-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
        GALAXY HORIZON
      </span>
    )`
  }
];

// =========================================================================
// 2. 50 BADGE ITEMS
// =========================================================================
const badgeItems = [
  {
    title: 'Interactive Dynamic Island HUD',
    badge: 'ISLAND',
    tags: ['Island', 'Apple', 'HUD'],
    component: `() => (
      <div className="px-4 py-1.5 rounded-full bg-black text-white text-xs font-mono flex items-center gap-2.5 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-bold">AirPods Pro</span>
        <span className="text-slate-400 text-[10px]">98%</span>
      </div>
    )`
  },
  {
    title: 'Sonar Radar Live Beacon',
    badge: 'RADAR',
    tags: ['Sonar', 'Radar', 'Beacon'],
    component: `() => (
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>SYS_HEALTH 99.9%</span>
      </div>
    )`
  },
  {
    title: 'Cosmic Stardust Particle Pill',
    badge: 'STARDUST',
    tags: ['Cosmic', 'Stardust', 'Stars'],
    component: `() => (
      <div className="px-3.5 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-xs text-purple-200 flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
        <span className="font-medium">Cosmic Stardust</span>
      </div>
    )`
  },
  {
    title: 'Git Branch Version Tag',
    badge: 'GIT',
    tags: ['Git', 'Branch', 'Version'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300">
        <GitBranch className="w-3.5 h-3.5 text-emerald-500" />
        <span>main: <strong className="text-emerald-500">v4.2.0</strong></span>
      </div>
    )`
  },
  {
    title: 'SOC2 Certified Security Shield',
    badge: 'SOC2',
    tags: ['Security', 'SOC2', 'Enterprise'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-xs text-indigo-700 dark:text-indigo-300 font-medium">
        <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
        <span>SOC2 Type II</span>
      </div>
    )`
  },
  {
    title: 'Live Audio Recording Wave Pill',
    badge: 'RECORD',
    tags: ['Audio', 'Recording', 'Live'],
    component: `() => (
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-500 text-xs font-mono">
        <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
        <span className="font-bold">REC 48kHz</span>
      </div>
    )`
  },
  {
    title: 'Hot Trending Flame Pill',
    badge: 'TRENDING',
    tags: ['Trending', 'Hot', 'Flame'],
    component: `() => (
      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold font-mono">
        <Flame className="w-3.5 h-3.5 fill-amber-500" />
        <span>HOT 10k+</span>
      </div>
    )`
  },
  {
    title: 'Verified Pro Developer Checkmark',
    badge: 'VERIFIED',
    tags: ['Verified', 'Check', 'Pro'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-300 dark:border-sky-500/30 text-sky-600 dark:text-sky-400 text-xs font-bold">
        <CheckCircle className="w-3.5 h-3.5 fill-sky-500 text-white" />
        <span>Verified Engineer</span>
      </div>
    )`
  },
  {
    title: 'AI Active Copilot Sparkle Chip',
    badge: 'COPILOT',
    tags: ['AI', 'Copilot', 'Sparkle'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fuchsia-50 dark:bg-fuchsia-500/10 border border-fuchsia-300 dark:border-fuchsia-500/30 text-fuchsia-600 dark:text-fuchsia-400 text-xs font-mono font-bold">
        <Sparkles className="w-3 h-3 text-fuchsia-500" />
        <span>AI Copilot Active</span>
      </div>
    )`
  },
  {
    title: 'Ultra Low Latency 4ms Ping',
    badge: 'LATENCY',
    tags: ['Network', 'Ping', 'Latency'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-mono font-bold border border-emerald-500/20">
        <Wifi className="w-3.5 h-3.5" />
        <span>4ms PTT Edge</span>
      </div>
    )`
  },
  {
    title: 'Cyberpunk Cut-Corner Neon Tag',
    badge: 'CYBER',
    tags: ['Cyber', 'CutCorner', 'Neon'],
    component: `() => (
      <div className="px-3 py-1 bg-cyan-950 border border-cyan-400 text-cyan-400 text-xs font-mono font-bold [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%-8px))]">
        SYS_OVERRIDE
      </div>
    )`
  },
  {
    title: 'Apple Frosted Translucent Glass Pill',
    badge: 'GLASS',
    tags: ['Apple', 'Glass', 'Translucent'],
    component: `() => (
      <div className="px-3.5 py-1 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/20 text-xs font-medium text-slate-800 dark:text-white shadow-sm">
        Frosted Translucent
      </div>
    )`
  },
  {
    title: 'Neumorphic Soft Inset Status Dot',
    badge: 'NEUMORPHIC',
    tags: ['Neumorphic', 'Soft', 'Inset'],
    component: `() => (
      <div className="px-3 py-1 rounded-full bg-slate-100 dark:bg-neutral-800 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.7)] dark:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
        <span className="w-2 h-2 rounded-full bg-indigo-500" />
        <span>NEU_STATUS</span>
      </div>
    )`
  },
  {
    title: 'Eco Energy Saver Green Badge',
    badge: 'ECO',
    tags: ['Eco', 'Green', 'Energy'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
        <span>🌱</span>
        <span>Eco Saver 0W</span>
      </div>
    )`
  },
  {
    title: 'Experimental Beta Flask Chip',
    badge: 'BETA',
    tags: ['Beta', 'Lab', 'Experimental'],
    component: `() => (
      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-mono font-bold">
        <span>🧪</span>
        <span>BETA LABS</span>
      </div>
    )`
  },
  {
    title: 'Live Crypto Currency BTC/USD Pill',
    badge: 'CRYPTO',
    tags: ['Crypto', 'BTC', 'Ticker'],
    component: `() => (
      <div className="px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-mono flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-amber-400" />
        <span>BTC $94.8k</span>
      </div>
    )`
  },
  {
    title: 'Neu-Brutalist Boxy Black Border Tag',
    badge: 'BRUTALIST',
    tags: ['Brutalist', 'Border', 'Pop'],
    component: `() => (
      <div className="px-3 py-0.5 bg-yellow-300 text-black font-mono font-black text-xs border-2 border-black shadow-[2px_2px_0px_#000]">
        POP BRUTAL
      </div>
    )`
  },
  {
    title: 'Holographic Metallic Foil Pill',
    badge: 'HOLO',
    tags: ['Holo', 'Foil', 'Gradient'],
    component: `() => (
      <div className="px-3.5 py-1 rounded-full bg-gradient-to-r from-pink-500 via-indigo-500 to-cyan-400 text-white text-xs font-bold shadow-md">
        Holo Foil Matrix
      </div>
    )`
  },
  {
    title: 'VIP Gold Crown Luxury Badge',
    badge: 'VIP',
    tags: ['VIP', 'Gold', 'Crown'],
    component: `() => (
      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs font-bold">
        <span>👑</span>
        <span>VIP Founder</span>
      </div>
    )`
  },
  {
    title: 'Online Live Agent Support Beacon',
    badge: 'SUPPORT',
    tags: ['Support', 'Agent', 'Beacon'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Support Online</span>
      </div>
    )`
  },
  {
    title: 'Dark Mode Moon Crescent Indicator',
    badge: 'DARKMODE',
    tags: ['Moon', 'Theme', 'Indicator'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-indigo-300 text-xs font-mono">
        <Moon className="w-3.5 h-3.5" />
        <span>Dark Active</span>
      </div>
    )`
  },
  {
    title: 'Sound Equalizer Active Audio Pill',
    badge: 'EQUALIZER',
    tags: ['Audio', 'Sound', 'Wave'],
    component: `() => (
      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-mono">
        <Volume2 className="w-3.5 h-3.5" />
        <span>EQ 100%</span>
      </div>
    )`
  },
  {
    title: 'Shopping Discount -50% Off Tag',
    badge: 'DISCOUNT',
    tags: ['Sale', 'Discount', 'Coupon'],
    component: `() => (
      <div className="px-2.5 py-0.5 rounded-full bg-rose-600 text-white text-[11px] font-black font-mono tracking-wider">
        -50% SALE
      </div>
    )`
  },
  {
    title: 'New Release Sparkle Glow Pill',
    badge: 'NEW',
    tags: ['New', 'Release', 'Sparkle'],
    component: `() => (
      <div className="px-3 py-1 rounded-full bg-indigo-500 text-white text-xs font-bold flex items-center gap-1 shadow-md">
        <Sparkles className="w-3 h-3" />
        <span>NEW v4.0</span>
      </div>
    )`
  },
  {
    title: '24/7 Uptime Cluster Pill',
    badge: 'UPTIME',
    tags: ['Cluster', 'Uptime', 'Server'],
    component: `() => (
      <div className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-emerald-500 font-bold">
        99.999% SLA
      </div>
    )`
  },
  {
    title: 'Security Threat Blocked Shield Badge',
    badge: 'SHIELD',
    tags: ['Security', 'Threat', 'Blocked'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-500/10 border border-rose-300 dark:border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-bold">
        <Shield className="w-3.5 h-3.5" />
        <span>0 Threats Found</span>
      </div>
    )`
  },
  {
    title: 'High Performance Turbo Boost Pill',
    badge: 'TURBO',
    tags: ['Turbo', 'Boost', 'Fast'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-black font-mono">
        <Zap className="w-3.5 h-3.5 fill-black" />
        <span>TURBO BOOST</span>
      </div>
    )`
  },
  {
    title: 'Multi-Tenant Organization Switcher Tag',
    badge: 'TENANT',
    tags: ['Tenant', 'Org', 'Enterprise'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300">
        <Users className="w-3.5 h-3.5 text-indigo-500" />
        <span>Acme Corp</span>
      </div>
    )`
  },
  {
    title: 'Step Completed Checkmark Pill',
    badge: 'DONE',
    tags: ['Check', 'Completed', 'Done'],
    component: `() => (
      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold shadow-sm">
        <Check className="w-3.5 h-3.5" />
        <span>Completed</span>
      </div>
    )`
  },
  {
    title: 'Warning Amber Alert Tri-Pill',
    badge: 'WARN',
    tags: ['Warning', 'Amber', 'Alert'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold font-mono">
        <AlertTriangle className="w-3.5 h-3.5" />
        <span>Attention Req</span>
      </div>
    )`
  },
  {
    title: 'GPS Coordinates Geotag Pill',
    badge: 'GEO',
    tags: ['GPS', 'Location', 'Geotag'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300">
        <MapPin className="w-3.5 h-3.5 text-rose-500" />
        <span>37.7749° N</span>
      </div>
    )`
  },
  {
    title: 'Speed Dial 5G Ultrawide Beacon',
    badge: '5G',
    tags: ['5G', 'Speed', 'Wireless'],
    component: `() => (
      <div className="px-3 py-1 rounded-full bg-indigo-900/60 border border-indigo-400 text-indigo-200 text-xs font-mono font-bold flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>5G UW ACTIVE</span>
      </div>
    )`
  },
  {
    title: 'Open Source MIT License Tag',
    badge: 'MIT',
    tags: ['MIT', 'License', 'OpenSource'],
    component: `() => (
      <div className="px-2.5 py-0.5 rounded-md bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-slate-200 font-mono text-xs font-bold">
        MIT License
      </div>
    )`
  },
  {
    title: 'Read Time 4 Min Book Badge',
    badge: 'READTIME',
    tags: ['Read', 'Time', 'Article'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 text-xs font-medium">
        <Clock className="w-3.5 h-3.5" />
        <span>4 min read</span>
      </div>
    )`
  },
  {
    title: 'Download Offline Ready Pill',
    badge: 'OFFLINE',
    tags: ['Offline', 'Download', 'Cache'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-medium">
        <Download className="w-3.5 h-3.5" />
        <span>Offline Cached</span>
      </div>
    )`
  },
  {
    title: 'Star Rating 4.9/5 Review Pill',
    badge: 'RATING',
    tags: ['Review', 'Stars', 'Rating'],
    component: `() => (
      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-bold font-mono">
        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        <span>4.9 (2.4k)</span>
      </div>
    )`
  },
  {
    title: 'Zero Downtime Deploy Badge',
    badge: 'DEPLOY',
    tags: ['Deploy', 'DevOps', 'ZeroDowntime'],
    component: `() => (
      <div className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm">
        <CheckCircle2 className="w-3.5 h-3.5" />
        <span>Zero Downtime</span>
      </div>
    )`
  },
  {
    title: 'Secret Encrypted E2E Key Pill',
    badge: 'ENCRYPTED',
    tags: ['Crypto', 'Key', 'Lock'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono">
        <Lock className="w-3.5 h-3.5" />
        <span>E2E Encrypted</span>
      </div>
    )`
  },
  {
    title: 'Web3 Gas Price 15 Gwei Gas Tag',
    badge: 'GAS',
    tags: ['Web3', 'Gas', 'Ethereum'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-cyan-300 text-xs font-mono font-bold">
        <span>⛽</span>
        <span>15 Gwei Fast</span>
      </div>
    )`
  },
  {
    title: 'CPU Thermal 42°C Thermal Badge',
    badge: 'THERMAL',
    tags: ['Thermal', 'CPU', 'Hardware'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-cyan-500 font-bold">
        <Cpu className="w-3.5 h-3.5" />
        <span>42°C Optimal</span>
      </div>
    )`
  },
  {
    title: 'Memory Quota 1.2 GB Usage Pill',
    badge: 'RAM',
    tags: ['RAM', 'Memory', 'Usage'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300">
        <Database className="w-3.5 h-3.5 text-indigo-500" />
        <span>1.2 / 16 GB</span>
      </div>
    )`
  },
  {
    title: 'Live Stream 1.4k Viewers Pill',
    badge: 'STREAM',
    tags: ['Live', 'Stream', 'Viewers'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-mono font-bold shadow-md">
        <Radio className="w-3.5 h-3.5 animate-pulse" />
        <span>1,420 LIVE</span>
      </div>
    )`
  },
  {
    title: 'Multi-Language Global Locale Tag',
    badge: 'LOCALE',
    tags: ['Locale', 'Language', 'Globe'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300">
        <Globe className="w-3.5 h-3.5 text-indigo-500" />
        <span>EN • ES • FR</span>
      </div>
    )`
  },
  {
    title: 'Biometric Passkey Verified Chip',
    badge: 'PASSKEY',
    tags: ['Passkey', 'FIDO', 'Auth'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-medium">
        <Key className="w-3.5 h-3.5" />
        <span>FIDO2 Passkey</span>
      </div>
    )`
  },
  {
    title: 'Express Delivery Drone Pill',
    badge: 'DRONE',
    tags: ['Drone', 'Shipping', 'Fast'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-slate-900 text-xs font-bold font-mono">
        <span>⚡ 1-Hour Air</span>
      </div>
    )`
  },
  {
    title: 'Carbon Neutral Eco Leaf Tag',
    badge: 'CARBON',
    tags: ['Carbon', 'Eco', 'Leaf'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-500/20">
        <span>🍃 Carbon 0%</span>
      </div>
    )`
  },
  {
    title: 'Archived Read-Only Record Tag',
    badge: 'ARCHIVE',
    tags: ['Archive', 'Record', 'Historical'],
    component: `() => (
      <div className="px-2.5 py-0.5 rounded bg-slate-200 dark:bg-neutral-800 text-slate-600 dark:text-slate-400 font-mono text-xs">
        ARCHIVED_2025
      </div>
    )`
  },
  {
    title: 'VIP Early Access Ticket Stub Badge',
    badge: 'TICKET',
    tags: ['Ticket', 'VIP', 'Access'],
    component: `() => (
      <div className="px-3 py-1 rounded-lg bg-gradient-to-r from-amber-500 to-rose-500 text-white text-xs font-mono font-bold shadow-md">
        🎟️ VIP ACCESS
      </div>
    )`
  },
  {
    title: 'Admin Superuser Role Badge',
    badge: 'ADMIN',
    tags: ['Admin', 'Role', 'Superuser'],
    component: `() => (
      <div className="px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-500 text-xs font-mono font-black">
        ROOT // ADMIN
      </div>
    )`
  },
  {
    title: 'HTTP Status 200 OK Green Pill',
    badge: 'HTTP200',
    tags: ['HTTP', 'Status', 'API'],
    component: `() => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-mono font-bold">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <span>HTTP 200 OK</span>
      </div>
    )`
  }
];

// =========================================================================
// 3. 50 INPUT ITEMS
// =========================================================================
const inputItems = [
  {
    title: 'Tactile Elastic Spring Toggle Switch',
    badge: 'SWITCH',
    tags: ['Toggle', 'Switch', 'Tactile'],
    component: `() => {
      const [on, setOn] = useState(true);
      return (
        <button 
          onClick={() => { playSound('pop'); setOn(!on); }} 
          className={\`w-14 h-8 rounded-full p-1 transition-colors duration-300 \${on ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-neutral-700'}\`}
        >
          <motion.div layout className={\`w-6 h-6 rounded-full bg-white shadow-md \${on ? 'translate-x-6' : 'translate-x-0'}\`} />
        </button>
      );
    }`
  },
  {
    title: 'Spotlight Cyber Search Input',
    badge: 'SEARCH',
    tags: ['Search', 'Input', 'Spotlight'],
    component: `() => (
      <div className="relative w-64">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input type="text" placeholder="Quick find..." className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-12 py-1.5 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-indigo-500" />
        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-slate-500">⌘K</span>
      </div>
    )`
  },
  {
    title: 'Fluid Spring Value Slider',
    badge: 'SLIDER',
    tags: ['Slider', 'Range', 'Value'],
    component: `() => {
      const [val, setVal] = useState(72);
      return (
        <div className="w-60">
          <div className="flex justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
            <span>Tension</span>
            <span className="font-bold text-indigo-500">{val}%</span>
          </div>
          <input type="range" min="0" max="100" value={val} onChange={(e) => setVal(Number(e.target.value))} className="w-full h-1.5 accent-indigo-600 bg-slate-200 dark:bg-neutral-700 rounded-lg cursor-pointer" />
        </div>
      );
    }`
  },
  {
    title: 'OTP 4-Digit Security Cells',
    badge: 'OTP',
    tags: ['OTP', 'Security', 'Code'],
    component: `() => (
      <div className="flex gap-2">
        {['5', '8', '2', ''].map((d, i) => (
          <input 
            key={i} 
            maxLength={1} 
            value={d} 
            onChange={() => playSound('click')}
            className="w-9 h-11 text-center font-mono font-bold text-sm bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/15 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500" 
          />
        ))}
      </div>
    )`
  },
  {
    title: 'Interactive Stepper Counter',
    badge: 'STEPPER',
    tags: ['Stepper', 'Counter', 'Number'],
    component: `() => {
      const [c, setC] = useState(1);
      return (
        <div className="inline-flex items-center rounded-xl bg-slate-100 dark:bg-[#0c0e18] p-1 border border-slate-200 dark:border-white/10">
          <button onClick={() => { playSound('click'); setC(Math.max(1, c - 1)); }} className="w-7 h-7 rounded-lg bg-white dark:bg-white/10 text-slate-700 dark:text-white flex items-center justify-center font-bold text-xs shadow-sm hover:scale-105">-</button>
          <span className="w-8 text-center text-xs font-mono font-bold text-slate-800 dark:text-white">{c}</span>
          <button onClick={() => { playSound('click'); setC(c + 1); }} className="w-7 h-7 rounded-lg bg-white dark:bg-white/10 text-slate-700 dark:text-white flex items-center justify-center font-bold text-xs shadow-sm hover:scale-105">+</button>
        </div>
      );
    }`
  },
  {
    title: 'Glowing Cyber Checkbox',
    badge: 'CHECKBOX',
    tags: ['Checkbox', 'Glowing', 'Cyber'],
    component: `() => {
      const [chk, setChk] = useState(true);
      return (
        <label onClick={() => { playSound('pop'); setChk(!chk); }} className="flex items-center gap-2.5 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300 select-none">
          <div className={\`w-5 h-5 rounded-lg border flex items-center justify-center transition-all \${chk ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-500/30' : 'border-slate-300 dark:border-slate-600'}\`}>
            {chk && <Check className="w-3.5 h-3.5" />}
          </div>
          <span>Automatic Deployments</span>
        </label>
      );
    }`
  },
  {
    title: 'Credit Card Expiry & CVV Input Form',
    badge: 'FINTECH',
    tags: ['CreditCard', 'Form', 'Fintech'],
    component: `() => (
      <div className="flex gap-2 w-64">
        <input placeholder="MM/YY" className="w-1/2 px-3 py-1.5 text-xs font-mono rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white focus:outline-none" />
        <input placeholder="CVV" maxLength={3} className="w-1/2 px-3 py-1.5 text-xs font-mono rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white focus:outline-none" />
      </div>
    )`
  },
  {
    title: 'Neumorphic Dual Soft Touch Radios',
    badge: 'RADIO',
    tags: ['Radio', 'Neumorphic', 'Soft'],
    component: `() => {
      const [sel, setSel] = useState('A');
      return (
        <div className="flex gap-4">
          {['A', 'B'].map((opt) => (
            <label key={opt} onClick={() => { playSound('click'); setSel(opt); }} className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 dark:text-slate-300">
              <div className={\`w-4 h-4 rounded-full border flex items-center justify-center \${sel === opt ? 'border-indigo-600' : 'border-slate-400'}\`}>
                {sel === opt && <div className="w-2 h-2 rounded-full bg-indigo-600" />}
              </div>
              <span>Tier {opt}</span>
            </label>
          ))}
        </div>
      );
    }`
  },
  {
    title: 'Range Price Slider ($20 - $250)',
    badge: 'PRICE',
    tags: ['Price', 'Range', 'Filter'],
    component: `() => (
      <div className="w-60">
        <div className="flex justify-between text-xs font-mono text-slate-500 mb-1"><span>Min: $20</span><span>Max: $250</span></div>
        <input type="range" defaultValue={140} min="20" max="250" className="w-full h-1.5 accent-indigo-600 bg-slate-200 dark:bg-neutral-800 rounded cursor-pointer" />
      </div>
    )`
  },
  {
    title: 'Password Strength Meter with Bar',
    badge: 'PASSWORD',
    tags: ['Password', 'Strength', 'Meter'],
    component: `() => (
      <div className="w-64 space-y-1.5">
        <input type="password" value="••••••••••••" readOnly className="w-full px-3 py-1.5 text-xs rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white" />
        <div className="flex gap-1 h-1">
          <div className="flex-1 bg-emerald-500 rounded-full" />
          <div className="flex-1 bg-emerald-500 rounded-full" />
          <div className="flex-1 bg-emerald-500 rounded-full" />
          <div className="flex-1 bg-emerald-500 rounded-full" />
        </div>
        <div className="text-[10px] font-mono text-emerald-500 font-bold">Strong (128-bit Entropy)</div>
      </div>
    )`
  },
  {
    title: 'Minimal Floating Underline Input',
    badge: 'UNDERLINE',
    tags: ['Underline', 'Minimal', 'Input'],
    component: `() => (
      <div className="w-60">
        <input type="text" placeholder="Your full name" className="w-full pb-1 bg-transparent border-b-2 border-indigo-500 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-fuchsia-500 transition-colors placeholder:text-slate-400" />
      </div>
    )`
  },
  {
    title: 'Tag Token Chip Input Field',
    badge: 'CHIPS',
    tags: ['Tags', 'Chips', 'Tokens'],
    component: `() => (
      <div className="w-64 p-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex flex-wrap gap-1 items-center">
        <span className="px-2 py-0.5 rounded-md bg-indigo-600 text-white text-[10px] font-mono flex items-center gap-1">React <X className="w-2.5 h-2.5 cursor-pointer" /></span>
        <span className="px-2 py-0.5 rounded-md bg-indigo-600 text-white text-[10px] font-mono flex items-center gap-1">Tailwind <X className="w-2.5 h-2.5 cursor-pointer" /></span>
        <span className="text-[10px] text-slate-400 pl-1">+ add</span>
      </div>
    )`
  },
  {
    title: 'Copyable Secret Share Link Input',
    badge: 'COPY',
    tags: ['Copy', 'Share', 'Link'],
    component: `() => {
      const [copied, setCopied] = useState(false);
      return (
        <div className="flex w-64 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 p-1">
          <input readOnly value="lumina.ui/share?id=842" className="flex-1 bg-transparent px-2 text-xs font-mono text-slate-700 dark:text-slate-300 focus:outline-none truncate" />
          <button onClick={() => { playSound('pop'); setCopied(true); setTimeout(() => setCopied(false), 1500); }} className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white text-[10px] font-bold">
            {copied ? '✓' : 'Copy'}
          </button>
        </div>
      );
    }`
  },
  {
    title: 'Star Rating Input Picker (1-5)',
    badge: 'RATING',
    tags: ['Star', 'Rating', 'Input'],
    component: `() => {
      const [r, setR] = useState(4);
      return (
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <button key={s} onClick={() => { playSound('pop'); setR(s); }} className="hover:scale-125 transition-transform">
              <Star className={\`w-5 h-5 \${s <= r ? 'text-amber-400 fill-amber-400' : 'text-slate-300 dark:text-slate-600'}\`} />
            </button>
          ))}
        </div>
      );
    }`
  },
  {
    title: 'Preset Color Palette Swatch Picker',
    badge: 'COLOR',
    tags: ['Color', 'Picker', 'Palette'],
    component: `() => {
      const [c, setC] = useState('#6366f1');
      const colors = ['#6366f1', '#06b6d4', '#ec4899', '#10b981', '#f59e0b', '#8b5cf6'];
      return (
        <div className="flex gap-2">
          {colors.map((col) => (
            <button key={col} onClick={() => { playSound('click'); setC(col); }} className={\`w-6 h-6 rounded-full transition-transform \${c === col ? 'scale-125 ring-2 ring-indigo-500 ring-offset-2' : ''}\`} style={{ backgroundColor: col }} />
          ))}
        </div>
      );
    }`
  },
  {
    title: 'File Drag & Drop Upload Zone',
    badge: 'UPLOAD',
    tags: ['File', 'Upload', 'Dropzone'],
    component: `() => (
      <div className="w-64 p-3 rounded-2xl border-2 border-dashed border-slate-300 dark:border-white/20 text-center cursor-pointer hover:border-indigo-500 transition-colors">
        <Cloud className="w-5 h-5 mx-auto text-indigo-500 mb-1" />
        <div className="text-xs font-bold text-slate-800 dark:text-white">Drop PNG or SVG here</div>
        <div className="text-[9px] text-slate-400">up to 25 MB</div>
      </div>
    )`
  },
  {
    title: 'Dropdown Select Menu Control',
    badge: 'SELECT',
    tags: ['Select', 'Dropdown', 'Menu'],
    component: `() => (
      <div className="w-60 relative">
        <select className="w-full px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-800 dark:text-white appearance-none focus:outline-none">
          <option>US-East (N. Virginia)</option>
          <option>EU-West (Frankfurt)</option>
          <option>AP-South (Mumbai)</option>
        </select>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
      </div>
    )`
  },
  {
    title: 'Monthly vs Yearly Segmented Switch',
    badge: 'SEGMENT',
    tags: ['Segmented', 'Billing', 'Toggle'],
    component: `() => {
      const [yearly, setYearly] = useState(true);
      return (
        <div className="p-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 inline-flex text-xs font-medium">
          <button onClick={() => { playSound('click'); setYearly(false); }} className={\`px-3 py-1 rounded-lg transition-colors \${!yearly ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm font-bold' : 'text-slate-500'}\`}>Monthly</button>
          <button onClick={() => { playSound('click'); setYearly(true); }} className={\`px-3 py-1 rounded-lg transition-colors \${yearly ? 'bg-indigo-600 text-white font-bold shadow-sm' : 'text-slate-500'}\`}>Yearly (20% Off)</button>
        </div>
      );
    }`
  },
  {
    title: 'Rotary Dial Knob Volume Control',
    badge: 'ROTARY',
    tags: ['Dial', 'Knob', 'Volume'],
    component: `() => (
      <div className="w-12 h-12 rounded-full border-4 border-indigo-600 bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative shadow-md">
        <div className="w-1 h-3 bg-indigo-600 rounded-full absolute -top-1" />
        <span className="text-[10px] font-mono font-bold text-slate-800 dark:text-white">75%</span>
      </div>
    )`
  },
  {
    title: 'Search with Voice Dictation Trigger',
    badge: 'VOICE',
    tags: ['Voice', 'Search', 'Mic'],
    component: `() => (
      <div className="relative w-64">
        <input type="text" placeholder="Search with voice..." className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl pl-3 pr-9 py-1.5 text-xs text-slate-800 dark:text-white focus:outline-none" />
        <button onClick={() => playSound('pop')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-indigo-500 hover:scale-110">
          <Mic className="w-4 h-4" />
        </button>
      </div>
    )`
  },
  {
    title: 'Expanding Search Bar on Focus',
    badge: 'EXPAND',
    tags: ['Expand', 'Search', 'Focus'],
    component: `() => (
      <motion.div whileFocus={{ width: 280 }} className="w-48 transition-all">
        <input type="text" placeholder="Expand on focus..." className="w-full px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-indigo-500" />
      </motion.div>
    )`
  },
  {
    title: 'Currency Input with Dollar Prefix',
    badge: 'CURRENCY',
    tags: ['Currency', 'Dollar', 'Finance'],
    component: `() => (
      <div className="relative w-48">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-slate-400 text-xs">$</span>
        <input type="number" defaultValue="2500" className="w-full pl-7 pr-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono font-bold text-slate-800 dark:text-white focus:outline-none" />
      </div>
    )`
  },
  {
    title: 'Date Picker Field with Calendar Icon',
    badge: 'DATE',
    tags: ['Date', 'Calendar', 'Picker'],
    component: `() => (
      <div className="relative w-60">
        <Calendar className="w-4 h-4 text-indigo-500 absolute left-3 top-1/2 -translate-y-1/2" />
        <input type="date" defaultValue="2026-11-24" className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-800 dark:text-white focus:outline-none" />
      </div>
    )`
  },
  {
    title: 'Clearable Input with Reset Cross',
    badge: 'CLEARABLE',
    tags: ['Clear', 'Reset', 'Input'],
    component: `() => {
      const [v, setV] = useState('Lumina UI Project');
      return (
        <div className="relative w-60">
          <input value={v} onChange={(e) => setV(e.target.value)} className="w-full pl-3 pr-8 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-800 dark:text-white focus:outline-none" />
          {v && <button onClick={() => setV('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-800"><X className="w-3.5 h-3.5" /></button>}
        </div>
      );
    }`
  },
  {
    title: 'Multi-Checkbox Role Permission Grid',
    badge: 'PERMISSIONS',
    tags: ['Permission', 'Roles', 'Access'],
    component: `() => (
      <div className="flex gap-3 text-xs text-slate-700 dark:text-slate-300">
        <label className="flex items-center gap-1.5 cursor-pointer"><input type="checkbox" defaultChecked className="accent-indigo-600 rounded" /><span>Read</span></label>
        <label className="flex items-center gap-1.5 cursor-pointer"><input type="checkbox" defaultChecked className="accent-indigo-600 rounded" /><span>Write</span></label>
        <label className="flex items-center gap-1.5 cursor-pointer"><input type="checkbox" className="accent-indigo-600 rounded" /><span>Delete</span></label>
      </div>
    )`
  },
  {
    title: 'Sun & Moon Theme Toggle Switch',
    badge: 'THEME',
    tags: ['Theme', 'Sun', 'Moon'],
    component: `() => {
      const [dark, setDark] = useState(true);
      return (
        <button onClick={() => { playSound('pop'); setDark(!dark); }} className="w-16 h-8 rounded-full p-1 bg-slate-200 dark:bg-slate-800 flex items-center justify-between border border-slate-300 dark:border-white/10 shadow-inner">
          <Sun className="w-4 h-4 text-amber-500" />
          <Moon className="w-4 h-4 text-indigo-400" />
        </button>
      );
    }`
  },
  {
    title: 'Character Limit Counter Input',
    badge: 'LIMIT',
    tags: ['Limit', 'Counter', 'Length'],
    component: `() => (
      <div className="w-60">
        <input maxLength={20} defaultValue="Lumina Engine" className="w-full px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-800 dark:text-white focus:outline-none" />
        <div className="text-[9px] font-mono text-slate-400 text-right mt-1">13 / 20 chars</div>
      </div>
    )`
  },
  {
    title: 'PIN Verification Security Lock',
    badge: 'PIN',
    tags: ['PIN', 'Lock', 'Vault'],
    component: `() => (
      <div className="flex items-center gap-2">
        <Lock className="w-4 h-4 text-indigo-500" />
        <span className="font-mono font-bold text-sm tracking-widest text-slate-800 dark:text-white">● ● ● ●</span>
      </div>
    )`
  },
  {
    title: 'Sliding Rating Feedback Emoji Bar',
    badge: 'EMOJI',
    tags: ['Emoji', 'Feedback', 'Mood'],
    component: `() => {
      const [sel, setSel] = useState(3);
      const emojis = ['😡', '😐', '😊', '🤩'];
      return (
        <div className="flex gap-3 text-lg p-1.5 rounded-2xl bg-slate-100 dark:bg-white/5">
          {emojis.map((em, i) => (
            <button key={i} onClick={() => { playSound('pop'); setSel(i); }} className={\`hover:scale-125 transition-transform \${sel === i ? 'scale-125' : 'opacity-40'}\`}>
              {em}
            </button>
          ))}
        </div>
      );
    }`
  },
  {
    title: 'URL Domain Slug Prefix Field',
    badge: 'SLUG',
    tags: ['Domain', 'Slug', 'URL'],
    component: `() => (
      <div className="flex w-64 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-xs">
        <span className="bg-slate-200 dark:bg-white/10 px-2 py-1.5 text-slate-500 font-mono">lumina.io/</span>
        <input type="text" defaultValue="dashboard" className="flex-1 bg-transparent px-2 text-slate-800 dark:text-white focus:outline-none font-mono" />
      </div>
    )`
  },
  {
    title: 'Custom Quantity Numeric Box',
    badge: 'QUANTITY',
    tags: ['Quantity', 'Cart', 'Box'],
    component: `() => (
      <div className="flex items-center border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden bg-slate-100 dark:bg-white/5">
        <button onClick={() => playSound('click')} className="px-2.5 py-1 text-slate-500 hover:text-slate-800 dark:hover:text-white">-</button>
        <span className="px-3 font-mono font-bold text-xs text-slate-800 dark:text-white">3</span>
        <button onClick={() => playSound('click')} className="px-2.5 py-1 text-slate-500 hover:text-slate-800 dark:hover:text-white">+</button>
      </div>
    )`
  },
  {
    title: 'Filter Chips Multi-Select Bar',
    badge: 'FILTER',
    tags: ['Filter', 'Chips', 'Selection'],
    component: `() => {
      const [sel, setSel] = useState(['All']);
      return (
        <div className="flex gap-1.5">
          {['All', 'React', 'Vue', 'Next'].map((f) => (
            <button key={f} onClick={() => { playSound('click'); setSel([f]); }} className={\`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors \${sel.includes(f) ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-100 dark:bg-white/5 text-slate-500'}\`}>
              {f}
            </button>
          ))}
        </div>
      );
    }`
  },
  {
    title: 'Glowing Gradient Border Focus Input',
    badge: 'GLOW',
    tags: ['Glow', 'Gradient', 'Border'],
    component: `() => (
      <div className="w-60 p-[1.5px] rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400">
        <input type="text" placeholder="Gradient border focus..." className="w-full px-3 py-1.5 rounded-[10px] bg-white dark:bg-slate-900 text-xs text-slate-800 dark:text-white focus:outline-none" />
      </div>
    )`
  },
  {
    title: 'Phone Number with Country Flag',
    badge: 'PHONE',
    tags: ['Phone', 'Country', 'Flag'],
    component: `() => (
      <div className="flex w-64 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-xs">
        <span className="px-2.5 py-1.5 bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-mono">🇺🇸 +1</span>
        <input type="tel" placeholder="(555) 000-0000" className="flex-1 bg-transparent px-2 text-slate-800 dark:text-white focus:outline-none font-mono" />
      </div>
    )`
  },
  {
    title: 'Auto-Grow Bio Textarea Field',
    badge: 'TEXTAREA',
    tags: ['Bio', 'Textarea', 'AutoGrow'],
    component: `() => (
      <textarea rows={2} placeholder="Write a short personal bio..." className="w-64 p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-800 dark:text-white focus:outline-none resize-none" />
    )`
  },
  {
    title: 'ON/OFF Label Toggle Switch',
    badge: 'ONOFF',
    tags: ['Toggle', 'Labels', 'Switch'],
    component: `() => {
      const [on, setOn] = useState(true);
      return (
        <button onClick={() => { playSound('pop'); setOn(!on); }} className={\`w-16 h-7 rounded-full p-1 flex items-center justify-between text-[9px] font-mono font-bold px-2 \${on ? 'bg-emerald-600 text-white' : 'bg-slate-300 dark:bg-neutral-700 text-slate-500'}\`}>
          <span>{on ? 'ON' : ''}</span>
          <div className="w-5 h-5 rounded-full bg-white shadow-md" />
          <span>{!on ? 'OFF' : ''}</span>
        </button>
      );
    }`
  },
  {
    title: 'Neu-Brutalist Thick Border Input',
    badge: 'BRUTAL',
    tags: ['Brutalist', 'Thick', 'Retro'],
    component: `() => (
      <input type="text" placeholder="Brutalist prompt..." className="w-60 px-3 py-1.5 bg-yellow-200 text-black font-mono font-bold text-xs border-2 border-black shadow-[3px_3px_0px_#000] focus:outline-none" />
    )`
  },
  {
    title: 'Glassmorphism Translucent Blur Input',
    badge: 'GLASS',
    tags: ['Glass', 'Blur', 'Translucent'],
    component: `() => (
      <input type="text" placeholder="Frosted glass input..." className="w-60 px-3 py-1.5 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-md border border-slate-300/60 dark:border-white/20 text-xs text-slate-800 dark:text-white focus:outline-none" />
    )`
  },
  {
    title: 'Biometric Fingerprint Auth Trigger',
    badge: 'BIOMETRIC',
    tags: ['Fingerprint', 'Biometric', 'Scan'],
    component: `() => (
      <button onClick={() => playSound('laser')} className="px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-bold text-xs flex items-center gap-2 hover:scale-105 transition-transform">
        <Radio className="w-4 h-4" />
        <span>Scan Fingerprint</span>
      </button>
    )`
  },
  {
    title: 'Dual Option Yes/No Segmented Switch',
    badge: 'YESNO',
    tags: ['YesNo', 'Segment', 'Decision'],
    component: `() => {
      const [yes, setYes] = useState(true);
      return (
        <div className="p-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 inline-flex text-xs font-mono font-bold">
          <button onClick={() => { playSound('click'); setYes(true); }} className={\`px-3 py-1 rounded-lg \${yes ? 'bg-emerald-600 text-white' : 'text-slate-400'}\`}>YES</button>
          <button onClick={() => { playSound('click'); setYes(false); }} className={\`px-3 py-1 rounded-lg \${!yes ? 'bg-rose-600 text-white' : 'text-slate-400'}\`}>NO</button>
        </div>
      );
    }`
  },
  {
    title: 'Color Hue Spectrum Slider Bar',
    badge: 'HUE',
    tags: ['Hue', 'Color', 'Rainbow'],
    component: `() => (
      <div className="w-60">
        <input type="range" min="0" max="360" className="w-full h-3 rounded-lg appearance-none cursor-pointer" style={{ background: 'linear-gradient(to right, red, yellow, lime, cyan, blue, magenta, red)' }} />
      </div>
    )`
  },
  {
    title: 'Filter Chips Multi-Selection Bar',
    badge: 'PILLS',
    tags: ['Filter', 'Multi', 'Pills'],
    component: `() => (
      <div className="flex gap-1.5">
        <span className="px-2.5 py-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-bold">Frontend</span>
        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-[10px]">Backend</span>
      </div>
    )`
  },
  {
    title: 'Stepper 3-Progress Dots Bar',
    badge: 'STEPDOTS',
    tags: ['Stepper', 'Dots', 'Step'],
    component: `() => (
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-indigo-600" />
        <span className="w-6 h-1 bg-indigo-600 rounded-full" />
        <span className="w-3 h-3 rounded-full bg-indigo-600" />
        <span className="w-6 h-1 bg-slate-300 dark:bg-neutral-700 rounded-full" />
        <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-neutral-700" />
      </div>
    )`
  },
  {
    title: 'Animated Confetti Pop Checkbox',
    badge: 'CONFETTI',
    tags: ['Checkbox', 'Confetti', 'Pop'],
    component: `() => {
      const [chk, setChk] = useState(false);
      return (
        <button 
          onClick={(e) => {
            playSound('success');
            confetti({ particleCount: 25, spread: 50, origin: { y: 0.8 } });
            setChk(!chk);
          }}
          className={\`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all \${chk ? 'bg-emerald-500 border-emerald-400 text-white' : 'bg-slate-100 dark:bg-white/5 border-slate-300 dark:border-white/10 text-slate-700 dark:text-white'}\`}
        >
          <span>{chk ? '✓ Task Done!' : '○ Mark Complete'}</span>
        </button>
      );
    }`
  },
  {
    title: 'Card CVV 3-Digit Security Input',
    badge: 'CVV',
    tags: ['CVV', 'Security', 'Card'],
    component: `() => (
      <div className="w-32">
        <input type="password" maxLength={3} placeholder="CVV 123" className="w-full text-center px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono font-bold text-slate-800 dark:text-white focus:outline-none" />
      </div>
    )`
  },
  {
    title: 'Sound Volume Slider with Mute Toggle',
    badge: 'VOLUME',
    tags: ['Volume', 'Audio', 'Mute'],
    component: `() => {
      const [mute, setMute] = useState(false);
      return (
        <div className="flex items-center gap-2 w-56">
          <button onClick={() => { playSound('click'); setMute(!mute); }} className="text-slate-500">
            {mute ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4 text-indigo-500" />}
          </button>
          <input type="range" disabled={mute} defaultValue={60} className="w-full h-1.5 accent-indigo-600 bg-slate-200 dark:bg-neutral-800 rounded cursor-pointer" />
        </div>
      );
    }`
  },
  {
    title: 'Search Input with Live Suggestions Pill',
    badge: 'SUGGEST',
    tags: ['Search', 'Suggestions', 'Pill'],
    component: `() => (
      <div className="w-60 space-y-1">
        <input type="text" defaultValue="React Framer" className="w-full px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-800 dark:text-white focus:outline-none" />
        <div className="flex gap-1 text-[9px] font-mono text-indigo-500">
          <span>Suggestions:</span>
          <span className="underline cursor-pointer">Framer Motion</span>
          <span className="underline cursor-pointer">Hooks</span>
        </div>
      </div>
    )`
  },
  {
    title: 'Time Picker Hour & Minute Selector',
    badge: 'TIME',
    tags: ['Time', 'Clock', 'Picker'],
    component: `() => (
      <div className="flex items-center gap-1 font-mono text-xs">
        <input defaultValue="14" className="w-10 text-center py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-bold" />
        <span>:</span>
        <input defaultValue="30" className="w-10 text-center py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-bold" />
        <span className="text-[10px] text-indigo-500 font-bold ml-1">PM</span>
      </div>
    )`
  },
  {
    title: 'Security Captcha "Not a Robot" Checkbox',
    badge: 'CAPTCHA',
    tags: ['Captcha', 'Security', 'Robot'],
    component: `() => {
      const [checked, setChecked] = useState(false);
      return (
        <div onClick={() => { playSound('pop'); setChecked(!checked); }} className="p-3 rounded-2xl bg-slate-100 dark:bg-[#0c0d16] border border-slate-200 dark:border-white/10 flex items-center gap-3 cursor-pointer select-none">
          <div className={\`w-6 h-6 rounded-md border-2 flex items-center justify-center \${checked ? 'bg-emerald-600 border-emerald-500 text-white' : 'border-slate-400'}\`}>
            {checked && <Check className="w-4 h-4" />}
          </div>
          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">I am not a robot</span>
        </div>
      );
    }`
  },
  {
    title: 'Quantum Cyber Slider with Digital Readout',
    badge: 'QUANTUM',
    tags: ['Quantum', 'Cyber', 'Slider'],
    component: `() => {
      const [v, setV] = useState(84);
      return (
        <div className="w-64 p-3 rounded-2xl bg-[#090b14] border border-cyan-500/30 text-white">
          <div className="flex justify-between text-[10px] font-mono text-cyan-400 mb-1">
            <span>CORE FREQUENCY</span>
            <span>{v} GHz</span>
          </div>
          <input type="range" min="10" max="100" value={v} onChange={(e) => setV(Number(e.target.value))} className="w-full h-1.5 accent-cyan-400 bg-slate-800 rounded cursor-pointer" />
        </div>
      );
    }`
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
      "  <div className=\"p-3 border rounded-xl\">" + item.title.replace(/'/g, "\\'") + "</div>\n" +
      ");`\n" +
      '  },\n';
  });
  out += '];\n';
  fs.writeFileSync(filePath, out, 'utf-8');
  console.log('Successfully wrote ' + items.length + ' items to ' + categoryName + 'Data.jsx');
}

writeCategory(textItems, 'text', 'textData', textPath);
writeCategory(badgeItems, 'badges', 'badgesData', badgePath);
writeCategory(inputItems, 'inputs', 'inputsData', inputPath);

console.log('All 3 categories (Text, Badges, Inputs) regenerated with 50 distinct items each!');
