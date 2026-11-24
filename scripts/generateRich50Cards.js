import fs from 'fs';
import path from 'path';

const outPath = path.resolve('src/data/categories/cardsData.jsx');

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
  Clock, GitBranch, Copy, ExternalLink, Box, QrCode, Maximize2, Tag
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSound } from '../../utils/sound';
`;

const cards = [
  // 1. 3D Tilt Hologram
  {
    title: 'Holographic 3D Tilt Glare',
    badge: '3D TILT',
    tags: ['3D', 'Hologram', 'Perspective'],
    component: `() => {
      const [pos, setPos] = useState({ x: 0, y: 0 });
      return (
        <motion.div 
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setPos({ x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height });
          }}
          whileHover={{ scale: 1.03 }}
          className="relative w-72 p-5 rounded-2xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/80 dark:from-[#111322] dark:via-[#16182a] dark:to-[#1a1230] border border-indigo-200/60 dark:border-indigo-500/30 shadow-xl overflow-hidden cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/10 to-fuchsia-400/15 pointer-events-none" style={{ transform: \`translate(\${(pos.x - 0.5) * 30}px, \${(pos.y - 0.5) * 30}px)\` }} />
          <div className="flex justify-between items-center mb-3">
            <span className="p-2 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400"><Cpu className="w-4 h-4" /></span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 font-bold">3D_GLARE</span>
          </div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Quantum Neural Core</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">Specular light reflection responding dynamically to mouse coordinates.</p>
          <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
            <span>X: {pos.x.toFixed(2)} | Y: {pos.y.toFixed(2)}</span>
          </div>
        </motion.div>
      );
    }`
  },

  // 2. Apple Activity Rings
  {
    title: 'Apple Watch Activity Rings',
    badge: 'HEALTH',
    tags: ['Progress', 'Fitness', 'Rings'],
    component: `() => (
      <div className="w-72 p-5 rounded-2xl bg-white dark:bg-[#0c0e17] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Activity Goals</span>
          <span className="text-xs font-mono font-bold text-rose-500">840 CAL</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90">
              <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="6" className="text-rose-500/20" fill="transparent" />
              <circle cx="40" cy="40" r="32" stroke="#f43f5e" strokeWidth="6" strokeDasharray="200" strokeDashoffset="45" strokeLinecap="round" fill="transparent" />
              <circle cx="40" cy="40" r="23" stroke="currentColor" strokeWidth="6" className="text-emerald-500/20" fill="transparent" />
              <circle cx="40" cy="40" r="23" stroke="#10b981" strokeWidth="6" strokeDasharray="145" strokeDashoffset="30" strokeLinecap="round" fill="transparent" />
              <circle cx="40" cy="40" r="14" stroke="currentColor" strokeWidth="6" className="text-cyan-500/20" fill="transparent" />
              <circle cx="40" cy="40" r="14" stroke="#06b6d4" strokeWidth="6" strokeDasharray="90" strokeDashoffset="15" strokeLinecap="round" fill="transparent" />
            </svg>
          </div>
          <div className="space-y-1 text-[11px] font-mono">
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-rose-500" /><span>Move: 84%</span></div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500" /><span>Exercise: 78%</span></div>
            <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cyan-500" /><span>Stand: 10/12h</span></div>
          </div>
        </div>
      </div>
    )`
  },

  // 3. 3D Flippable Credit Card
  {
    title: '3D Flip Frosted Gold Card',
    badge: '3D FLIP',
    tags: ['Fintech', '3D', 'Flip'],
    component: `() => {
      const [flipped, setFlipped] = useState(false);
      return (
        <div 
          onClick={() => { playSound('pop'); setFlipped(!flipped); }}
          className="w-72 h-44 cursor-pointer [perspective:1000px] select-none"
        >
          <motion.div 
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="w-full h-full relative [transform-style:preserve-3d]"
          >
            {/* Front */}
            <div className="absolute inset-0 rounded-2xl p-4 bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 border border-white/20 text-white shadow-2xl flex flex-col justify-between [backface-visibility:hidden]">
              <div className="flex justify-between items-center">
                <span className="w-8 h-6 rounded bg-gradient-to-r from-amber-300 to-yellow-500 shadow-md" />
                <span className="font-mono text-xs text-indigo-300 tracking-widest font-black">LUMINA BLACK</span>
              </div>
              <div className="font-mono text-sm tracking-[0.25em] text-slate-200">•••• 9402 8110 5283</div>
              <div className="flex justify-between items-end text-[10px] font-mono text-slate-400">
                <div><div className="text-[8px] text-slate-500">CARDHOLDER</div><div className="font-bold text-slate-200">JORDAN BELFORT</div></div>
                <div><div className="text-[8px] text-slate-500">EXPIRES</div><div className="font-bold text-slate-200">08/30</div></div>
              </div>
            </div>
            {/* Back */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-slate-950 to-neutral-900 border border-white/10 text-white shadow-2xl flex flex-col justify-between py-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="w-full h-8 bg-neutral-800" />
              <div className="px-5 flex items-center justify-between">
                <span className="text-[9px] font-mono text-slate-400">CLICK TO FLIP</span>
                <span className="px-3 py-1 bg-white text-slate-900 font-mono text-xs font-bold rounded">CVV: 742</span>
              </div>
              <div className="px-5 text-[8px] font-mono text-slate-500">ISSUED BY LUMINA BANK • WORLDWIDE ACCESS</div>
            </div>
          </motion.div>
        </div>
      );
    }`
  },

  // 4. Cyber Perimeter Laser Border
  {
    title: 'Cyber Perimeter Laser Loop',
    badge: 'CYBER',
    tags: ['Laser', 'Glow', 'Cyberpunk'],
    component: `() => (
      <div className="relative w-72 p-[2px] rounded-2xl overflow-hidden group">
        <span className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#06b6d4,#ec4899,#6366f1,#06b6d4)] animate-[spin_3s_linear_infinite]" />
        <div className="relative p-5 rounded-[14px] bg-slate-900/95 dark:bg-black/95 backdrop-blur-xl text-white">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold font-mono text-cyan-400">PERIMETER_HUD</span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          </div>
          <h4 className="text-sm font-bold mb-1">High-Voltage Shield</h4>
          <p className="text-xs text-slate-400 mb-3">Conic gradient tracing the border contour at 60 FPS.</p>
          <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>
        </div>
      </div>
    )`
  },

  // 5. Swiss Editorial Bento
  {
    title: 'Swiss Editorial Architecture Bento',
    badge: 'MINIMAL',
    tags: ['Bento', 'Typography', 'Swiss'],
    component: `() => (
      <div className="w-72 p-5 rounded-2xl bg-neutral-900 text-white border border-neutral-800 shadow-xl flex flex-col justify-between h-48">
        <div className="flex justify-between items-start">
          <span className="text-3xl font-black tracking-tighter">01.</span>
          <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white text-black font-bold">EDITION</span>
        </div>
        <div>
          <div className="text-xs font-mono text-neutral-400 mb-1">TYPOGRAPHIC SYSTEM</div>
          <h4 className="text-base font-bold tracking-tight">Structured Hierarchy</h4>
          <p className="text-[11px] text-neutral-400">Pure monochrome balance with mathematical grid tension.</p>
        </div>
      </div>
    )`
  },

  // 6. Live Music Player with Dancing Equalizer
  {
    title: 'Audio Spectrum Music Player',
    badge: 'AUDIO',
    tags: ['Audio', 'Equalizer', 'Player'],
    component: `() => {
      const [playing, setPlaying] = useState(true);
      return (
        <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#10121d] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white shadow-md">
              <Music className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="text-xs font-bold truncate">Midnight Horizon</h5>
              <p className="text-[10px] text-slate-400 font-mono">Synthwave Dreams</p>
            </div>
            <button onClick={() => { playSound('pop'); setPlaying(!playing); }} className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:scale-105 transition-transform">
              {playing ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
            </button>
          </div>
          <div className="flex items-end justify-between h-8 px-2 bg-slate-50 dark:bg-black/30 rounded-lg mb-2">
            {[40, 75, 55, 95, 60, 85, 30, 90, 65, 45, 80].map((h, i) => (
              <motion.span 
                key={i} 
                animate={playing ? { height: [\`\${h * 0.2}%\`, \`\${h}%\`, \`\${h * 0.4}%\`] } : { height: '15%' }}
                transition={{ duration: 0.6 + (i * 0.08), repeat: Infinity, repeatType: 'reverse' }}
                className="w-1 rounded-full bg-gradient-to-t from-indigo-500 to-fuchsia-400" 
              />
            ))}
          </div>
          <div className="flex justify-between text-[9px] font-mono text-slate-400"><span>1:24</span><span>3:48</span></div>
        </div>
      );
    }`
  },

  // 7. Live Crypto Ticker with Sparkline
  {
    title: 'Crypto Pulse Live Sparkline',
    badge: 'CRYPTO',
    tags: ['Crypto', 'Finance', 'Sparkline'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-xs font-mono">₿</span>
            <span className="font-bold text-xs">Bitcoin / USD</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-bold flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +5.82%
          </span>
        </div>
        <div className="text-xl font-mono font-black mb-2">$94,820.50</div>
        <svg className="w-full h-12 overflow-visible">
          <path d="M 0 35 Q 35 15, 70 25 T 140 10 T 210 20 T 260 5" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="260" cy="5" r="4" fill="#10b981" className="animate-ping" />
          <circle cx="260" cy="5" r="3" fill="#10b981" />
        </svg>
      </div>
    )`
  },

  // 8. Neumorphic Soft Touch Weather Card
  {
    title: 'Neumorphic Soft Weather Card',
    badge: 'WEATHER',
    tags: ['Neumorphism', 'Weather', 'Soft'],
    component: `() => (
      <div className="w-72 p-5 rounded-2xl bg-slate-100 dark:bg-[#141624] shadow-[6px_6px_12px_#cbd5e1,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_14px_#0b0c15,-6px_-6px_14px_#1d2033] text-slate-800 dark:text-white border border-white/40 dark:border-white/5">
        <div className="flex justify-between items-center mb-4">
          <div><div className="text-xs font-bold">San Francisco, CA</div><div className="text-[10px] text-slate-400">Mostly Sunny</div></div>
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}>
            <Sun className="w-8 h-8 text-amber-500" />
          </motion.div>
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-black">72°</span>
          <span className="text-xs text-slate-400 font-mono">H: 76° L: 58°</span>
        </div>
        <div className="flex justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-white/10">
          <span>Humidity: 48%</span><span>Wind: 9 mph</span>
        </div>
      </div>
    )`
  },

  // 9. Particle Starfield Galaxy Card
  {
    title: 'Cosmic Nebula Particle Card',
    badge: 'COSMIC',
    tags: ['Space', 'Stars', 'Particles'],
    component: `() => (
      <div className="relative w-72 h-44 rounded-2xl bg-[#070814] border border-indigo-500/30 overflow-hidden p-5 flex flex-col justify-between text-white shadow-2xl">
        <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-purple-600/30 blur-2xl animate-pulse" />
        <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full bg-cyan-600/30 blur-2xl" />
        <div className="relative z-10 flex justify-between items-center">
          <span className="p-2 rounded-xl bg-white/10 backdrop-blur-md text-amber-300"><Sparkles className="w-4 h-4" /></span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-cyan-300 font-bold">APOLLO_11</span>
        </div>
        <div className="relative z-10">
          <h4 className="text-base font-black tracking-wide">Deep Cosmos Horizon</h4>
          <p className="text-xs text-slate-300">Constellation telemetry in deep space vacuum.</p>
        </div>
      </div>
    )`
  },

  // 10. Retro CRT Scanline Terminal
  {
    title: 'Retro CRT Scanline Terminal',
    badge: 'RETRO',
    tags: ['CRT', 'Terminal', 'Phosphor'],
    component: `() => (
      <div className="relative w-72 p-4 rounded-xl bg-black border-2 border-emerald-500/50 text-emerald-400 font-mono text-xs shadow-[0_0_20px_rgba(16,185,129,0.2)] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_51%)] bg-[length:100%_4px] pointer-events-none opacity-40" />
        <div className="flex justify-between items-center pb-2 mb-2 border-b border-emerald-500/30 text-[10px]">
          <span>VT100 EMULATOR</span><span>OK 200</span>
        </div>
        <div className="space-y-1 text-[11px] leading-relaxed">
          <p>&gt; BOOTLOADER INITIALIZED</p>
          <p>&gt; CONNECTING TO MAINFRAME...</p>
          <p className="text-white flex items-center">&gt; ACCESS GRANTED <span className="w-1.5 h-3.5 bg-emerald-400 ml-1 animate-pulse" /></p>
        </div>
      </div>
    )`
  },

  // 11. Expandable FAQ Accordion Card
  {
    title: 'Interactive Spring Accordion Card',
    badge: 'ACCORDION',
    tags: ['Accordion', 'Expandable', 'Interactive'],
    component: `() => {
      const [open, setOpen] = useState(false);
      return (
        <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0f111c] border border-slate-200 dark:border-white/10 shadow-lg text-slate-800 dark:text-white">
          <button onClick={() => { playSound('pop'); setOpen(!open); }} className="w-full flex items-center justify-between text-left">
            <span className="text-xs font-bold">How does Lumina caching work?</span>
            <ChevronRight className={\`w-4 h-4 text-indigo-500 transition-transform duration-300 \${open ? 'rotate-90' : ''}\`} />
          </button>
          <AnimatePresence>
            {open && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden pt-2 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5 mt-2"
              >
                Zero-cold-start edge in-memory key-value cache distributes assets across 280 edge locations globally with sub-5ms lookup latency.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }`
  },

  // 12. Glitch Cyberpunk Hologram
  {
    title: 'Cyberpunk Barcode Glitch Card',
    badge: 'GLITCH',
    tags: ['Cyberpunk', 'Glitch', 'Barcode'],
    component: `() => (
      <div className="w-72 p-5 rounded-2xl bg-[#09090e] border border-rose-500/30 text-white relative overflow-hidden group cursor-pointer" onClick={() => playSound('laser')}>
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold border border-rose-500/30">NIGHT_CITY</span>
          <span className="text-[9px] font-mono text-cyan-400">ID: 884-AX</span>
        </div>
        <h4 className="text-base font-black tracking-wider text-rose-500 group-hover:text-cyan-400 transition-colors">NEO TOKYO 2099</h4>
        <p className="text-[11px] text-slate-400 mb-3">Bionic neural augmentations certified for standard military combat.</p>
        <div className="font-mono text-xs text-slate-500 flex justify-between items-center">
          <span>||| || ||| || |||</span>
          <span className="text-[10px] text-rose-400 font-bold">VERIFIED</span>
        </div>
      </div>
    )`
  },

  // 13. Magnetic Cursor Follower Card
  {
    title: 'Magnetic Elastic Cursor Card',
    badge: 'MAGNETIC',
    tags: ['Physics', 'Spring', 'Interactive'],
    component: `() => {
      const [offset, setOffset] = useState({ x: 0, y: 0 });
      return (
        <motion.div 
          animate={{ x: offset.x, y: offset.y }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setOffset({ x: (e.clientX - (rect.left + rect.width / 2)) * 0.25, y: (e.clientY - (rect.top + rect.height / 2)) * 0.25 });
          }}
          onMouseLeave={() => setOffset({ x: 0, y: 0 })}
          className="w-72 p-5 rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-500/30 cursor-pointer"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="p-1.5 rounded-lg bg-white/20"><Compass className="w-4 h-4" /></span>
            <span className="text-[10px] font-mono font-bold bg-white/20 px-2 py-0.5 rounded-full">SPRING 200</span>
          </div>
          <h4 className="text-sm font-bold mb-1">Magnetic Gravitational Card</h4>
          <p className="text-xs text-indigo-100">Hover your cursor near boundaries to feel the tactile spring resistance.</p>
        </motion.div>
      );
    }`
  },

  // 14. Glassmorphism Receipt Breakdown
  {
    title: 'Glassmorphic Bill Invoice Card',
    badge: 'RECEIPT',
    tags: ['Receipt', 'Glass', 'Invoice'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white/70 dark:bg-[#121422]/70 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center pb-2 mb-2 border-b border-dashed border-slate-300 dark:border-white/10">
          <span className="font-bold text-xs">INVOICE #9812</span>
          <span className="text-[10px] font-mono text-emerald-500 font-bold">PAID</span>
        </div>
        <div className="space-y-1.5 text-xs">
          <div className="flex justify-between text-slate-500 dark:text-slate-400"><span>Lumina Pro Annual</span><span className="font-mono text-slate-800 dark:text-white">$240.00</span></div>
          <div className="flex justify-between text-slate-500 dark:text-slate-400"><span>Edge Compute Add-on</span><span className="font-mono text-slate-800 dark:text-white">$36.00</span></div>
          <div className="flex justify-between text-slate-500 dark:text-slate-400"><span>Tax (0.0%)</span><span className="font-mono text-slate-800 dark:text-white">$0.00</span></div>
        </div>
        <div className="flex justify-between font-bold text-sm pt-2 mt-2 border-t border-slate-200 dark:border-white/10">
          <span>Total</span>
          <span className="font-mono text-indigo-600 dark:text-indigo-400">$276.00</span>
        </div>
      </div>
    )`
  },

  // 15. Confetti Scratch Voucher
  {
    title: 'Confetti Unlock Discount Coupon',
    badge: 'VOUCHER',
    tags: ['Voucher', 'Coupon', 'Confetti'],
    component: `() => {
      const [unlocked, setUnlocked] = useState(false);
      return (
        <div className="w-72 p-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white shadow-xl">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase">Special Reward</span>
            <Tag className="w-4 h-4" />
          </div>
          <div className="text-xl font-black mb-2">50% OFF LIFETIME</div>
          <div className="p-2 rounded-xl bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-between">
            <span className="font-mono text-xs font-bold tracking-widest">{unlocked ? 'LUMINA50PRO' : '••••••••••••'}</span>
            <button 
              onClick={(e) => {
                playSound('success');
                confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
                setUnlocked(true);
              }}
              className="px-2.5 py-1 rounded-lg bg-white text-slate-900 text-[10px] font-bold hover:scale-105 transition-transform"
            >
              {unlocked ? 'COPIED!' : 'REVEAL'}
            </button>
          </div>
        </div>
      );
    }`
  },

  // 16. Multi-Step Pipeline Stepper
  {
    title: 'Multi-Step Deployment Stepper',
    badge: 'PIPELINE',
    tags: ['Stepper', 'Pipeline', 'CI/CD'],
    component: `() => {
      const [step, setStep] = useState(2);
      return (
        <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold">Release Pipeline</span>
            <span className="text-[10px] font-mono text-indigo-500 font-bold">Step {step}/3</span>
          </div>
          <div className="flex items-center justify-between relative mb-4 px-2">
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-200 dark:bg-white/10 -translate-y-1/2 z-0" />
            {[1, 2, 3].map((s) => (
              <button 
                key={s} 
                onClick={() => { playSound('click'); setStep(s); }}
                className={\`relative z-10 w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all \${step >= s ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}\`}
              >
                {step > s ? '✓' : s}
              </button>
            ))}
          </div>
          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono flex items-center justify-between">
            <span>{step === 1 ? 'Build assets' : step === 2 ? 'Run unit tests' : 'Live deployed'}</span>
            <span className="text-emerald-500 font-bold">RUNNING</span>
          </div>
        </div>
      );
    }`
  },

  // 17. Server Radar Cluster
  {
    title: 'Server Latency Radar Scanner',
    badge: 'NETWORK',
    tags: ['Radar', 'Server', 'Ping'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-[#090b14] border border-cyan-500/30 text-white shadow-xl relative overflow-hidden">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-1.5"><Wifi className="w-4 h-4 text-cyan-400" /><span className="text-xs font-bold font-mono">EDGE_RADAR</span></div>
          <span className="text-[10px] font-mono text-emerald-400">99.99%</span>
        </div>
        <div className="relative w-full h-20 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-center overflow-hidden mb-2">
          <div className="absolute inset-0 border border-cyan-500/20 rounded-full scale-50" />
          <div className="absolute inset-0 border border-cyan-500/20 rounded-full scale-90" />
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} className="absolute w-28 h-28 origin-center bg-gradient-to-tr from-cyan-400/30 to-transparent rounded-full" />
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping z-10" />
        </div>
        <div className="flex justify-between text-[10px] font-mono text-slate-400">
          <span>US-East: 12ms</span><span>EU-West: 19ms</span><span>AP-South: 41ms</span>
        </div>
      </div>
    )`
  },

  // 18. Storage Disk Quota Analyzer
  {
    title: 'Segmented Disk Storage Quota',
    badge: 'STORAGE',
    tags: ['Storage', 'Bar', 'Metrics'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold">NVMe SSD Storage</span>
          <span className="text-xs font-mono font-bold text-indigo-500">768 GB / 1 TB</span>
        </div>
        <div className="h-3 w-full rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden flex gap-0.5 p-0.5 mb-3">
          <div className="h-full bg-indigo-500 rounded-l-full w-[45%]" />
          <div className="h-full bg-cyan-400 w-[25%]" />
          <div className="h-full bg-fuchsia-400 w-[15%]" />
        </div>
        <div className="grid grid-cols-3 gap-1 text-[10px] font-mono">
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-indigo-500" /><span>App: 45%</span></div>
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-400" /><span>Media: 25%</span></div>
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-fuchsia-400" /><span>Logs: 15%</span></div>
        </div>
      </div>
    )`
  },

  // 19. Battery & Power Telemetry
  {
    title: 'Charging Battery Power Gauge',
    badge: 'BATTERY',
    tags: ['Battery', 'Charging', 'Energy'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0f111e] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Fast Charge Active</span>
          <span className="text-xs font-mono text-emerald-500 font-bold">65W PD</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-24 rounded-2xl border-2 border-slate-300 dark:border-slate-700 p-1 flex flex-col justify-end">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-t" />
            <motion.div animate={{ height: ['80%', '88%', '80%'] }} transition={{ duration: 2, repeat: Infinity }} className="w-full bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-xl" />
          </div>
          <div>
            <div className="text-2xl font-black font-mono">88%</div>
            <div className="text-xs text-slate-400">24 mins until full</div>
            <div className="text-[10px] font-mono text-emerald-500 font-bold flex items-center gap-1 mt-1">
              <Zap className="w-3 h-3 fill-emerald-500" /> 4,820 mAh
            </div>
          </div>
        </div>
      </div>
    )`
  },

  // 20. Avatar Orbit Presence Card
  {
    title: 'Team Lead Orbit Presence Card',
    badge: 'ORBIT',
    tags: ['Avatar', 'Orbit', 'Social'],
    component: `() => (
      <div className="w-72 p-5 rounded-2xl bg-white dark:bg-[#121422] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white text-center">
        <div className="relative w-20 h-20 mx-auto mb-3 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-dashed border-indigo-400 animate-[spin_10s_linear_infinite]" />
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
            AV
          </div>
          <span className="absolute bottom-1 right-2 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" />
        </div>
        <h4 className="text-sm font-bold">Alexander Vance</h4>
        <p className="text-xs text-indigo-500 font-mono mb-2">Staff Design Engineer</p>
        <div className="flex justify-center gap-1 text-[10px] font-mono text-slate-400">
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5">React</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5">Tailwind</span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5">Motion</span>
        </div>
      </div>
    )`
  },

  // 21. Live Countdown Timer Card
  {
    title: 'Product Drop Countdown Timer',
    badge: 'TIMER',
    tags: ['Timer', 'Countdown', 'Drop'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0d18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white text-center">
        <div className="text-[10px] font-mono tracking-widest uppercase text-indigo-500 font-bold mb-2">SPRING DROP 2026</div>
        <div className="flex justify-center items-center gap-2 font-mono mb-3">
          <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 min-w-12"><div className="text-lg font-black">04</div><div className="text-[8px] text-slate-400">DAYS</div></div>
          <span className="text-indigo-500 font-bold animate-pulse">:</span>
          <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 min-w-12"><div className="text-lg font-black">18</div><div className="text-[8px] text-slate-400">HOURS</div></div>
          <span className="text-indigo-500 font-bold animate-pulse">:</span>
          <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 min-w-12"><div className="text-lg font-black">42</div><div className="text-[8px] text-slate-400">MINS</div></div>
        </div>
        <button onClick={() => playSound('pop')} className="w-full py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors">Notify Me</button>
      </div>
    )`
  },

  // 22. Git Commit Timeline Card
  {
    title: 'Git Commit Branch Timeline',
    badge: 'GIT',
    tags: ['Git', 'Branch', 'DevTools'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0d0f19] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center pb-2 mb-2 border-b border-slate-100 dark:border-white/10">
          <div className="flex items-center gap-1.5"><GitBranch className="w-4 h-4 text-emerald-500" /><span className="text-xs font-mono font-bold">main (v4.2.0)</span></div>
          <span className="text-[10px] font-mono text-slate-400">3 commits</span>
        </div>
        <div className="space-y-2 text-xs font-mono">
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500" /><span className="text-indigo-500">7f2a1b</span><span className="text-[11px] truncate text-slate-500">feat: add 50 widgets</span></div>
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cyan-400" /><span className="text-indigo-500">c930ee</span><span className="text-[11px] truncate text-slate-500">fix: Tailwind dark mode</span></div>
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-400" /><span className="text-indigo-500">01e82a</span><span className="text-[11px] truncate text-slate-500">chore: update Vite v8</span></div>
        </div>
      </div>
    )`
  },

  // 23. Terminal Log Ingestion
  {
    title: 'Streaming Ingestion Log Window',
    badge: 'TERMINAL',
    tags: ['Logs', 'Terminal', 'Dev'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-[#090b14] border border-slate-800 text-white font-mono text-[11px] shadow-xl">
        <div className="flex justify-between items-center pb-2 mb-2 border-b border-white/10 text-[9px] text-slate-400">
          <div className="flex gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" /><span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" /><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" /></div>
          <span>WORKER_04.LOG</span>
        </div>
        <div className="space-y-1">
          <div className="text-slate-400">[11:04:12] <span className="text-emerald-400">INFO</span> DB connected</div>
          <div className="text-slate-400">[11:04:13] <span className="text-cyan-400">AUTH</span> Session verified</div>
          <div className="text-slate-400">[11:04:15] <span className="text-indigo-400">PULL</span> Ingesting 400 events</div>
          <div className="text-emerald-400 font-bold flex items-center gap-1">&gt; SYNC COMPLETE <span className="w-1.5 h-3 bg-emerald-400 animate-pulse" /></div>
        </div>
      </div>
    )`
  },

  // 24. 5-Star Interactive Rating Card
  {
    title: 'Interactive 5-Star Feedback Card',
    badge: 'RATING',
    tags: ['Rating', 'Review', 'Stars'],
    component: `() => {
      const [rate, setRate] = useState(5);
      return (
        <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white text-center">
          <h5 className="text-xs font-bold mb-1">Rate this Experience</h5>
          <p className="text-[10px] text-slate-400 mb-2">Click stars to submit instant feedback</p>
          <div className="flex justify-center gap-1.5 mb-3">
            {[1, 2, 3, 4, 5].map((s) => (
              <button key={s} onClick={() => { playSound('pop'); setRate(s); }} className="hover:scale-125 transition-transform">
                <Star className={\`w-6 h-6 \${s <= rate ? 'text-amber-400 fill-amber-400' : 'text-slate-300 dark:text-slate-700'}\`} />
              </button>
            ))}
          </div>
          <div className="text-xs font-mono font-bold text-indigo-500">{rate} of 5 Stars Selected</div>
        </div>
      );
    }`
  },

  // 25. Color Swatch Copy Card
  {
    title: 'Design System Color Palette Card',
    badge: 'PALETTE',
    tags: ['Palette', 'Colors', 'Design'],
    component: `() => {
      const [copied, setCopied] = useState('');
      const colors = ['#6366f1', '#06b6d4', '#ec4899', '#10b981'];
      return (
        <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold">Accent Palette</span>
            <span className="text-[10px] font-mono text-slate-400">{copied ? \`Copied \${copied}!\` : 'Click to copy'}</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {colors.map((c) => (
              <button 
                key={c}
                onClick={() => { playSound('click'); navigator.clipboard?.writeText(c); setCopied(c); setTimeout(() => setCopied(''), 1500); }}
                className="group flex flex-col items-center gap-1"
              >
                <div className="w-full h-12 rounded-xl shadow-md group-hover:scale-105 transition-transform" style={{ backgroundColor: c }} />
                <span className="text-[9px] font-mono text-slate-500 dark:text-slate-400">{c}</span>
              </button>
            ))}
          </div>
        </div>
      );
    }`
  },

  // 26. Mini macOS Browser Chrome Card
  {
    title: 'macOS Browser Viewport Mockup',
    badge: 'MOCKUP',
    tags: ['Browser', 'Frame', 'Mockup'],
    component: `() => (
      <div className="w-72 rounded-2xl bg-white dark:bg-[#0f111e] border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden text-slate-800 dark:text-white">
        <div className="px-3 py-2 bg-slate-100 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 flex items-center gap-2">
          <div className="flex gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rose-500" /><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /></div>
          <div className="flex-1 px-2 py-0.5 rounded-md bg-white dark:bg-white/10 text-[9px] font-mono text-slate-400 text-center truncate">lumina.ui/preview</div>
        </div>
        <div className="p-4 text-center">
          <div className="text-xs font-bold mb-1">Live App In Viewport</div>
          <p className="text-[10px] text-slate-400">Sandboxed iframe component runtime</p>
        </div>
      </div>
    )`
  },

  // 27. Agile Kanban Task Card
  {
    title: 'Agile Kanban Ticket Card',
    badge: 'KANBAN',
    tags: ['Kanban', 'Agile', 'Task'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-2">
          <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 text-[10px] font-bold font-mono">P0 URGENT</span>
          <span className="text-[10px] font-mono text-slate-400">#KAN-482</span>
        </div>
        <h5 className="text-xs font-bold mb-1">Implement OAuth PKCE Flow</h5>
        <p className="text-[10px] text-slate-400 mb-3">Ensure state parameter validates against CSRF attacks on callback.</p>
        <div className="flex justify-between items-center pt-2 border-t border-slate-100 dark:border-white/5 text-[10px] font-mono">
          <div className="flex -space-x-1.5">
            <span className="w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-[8px]">JD</span>
            <span className="w-5 h-5 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-[8px]">SK</span>
          </div>
          <span className="text-emerald-500 font-bold">In Progress</span>
        </div>
      </div>
    )`
  },

  // 28. Masked API Token Vault
  {
    title: 'Cryptographic API Key Vault',
    badge: 'SECURITY',
    tags: ['API', 'Key', 'Vault'],
    component: `() => {
      const [show, setShow] = useState(false);
      return (
        <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0d0f19] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
          <div className="flex items-center gap-2 mb-2">
            <Key className="w-4 h-4 text-indigo-500" />
            <span className="text-xs font-bold">Production API Secret</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-mono text-xs mb-2">
            <span>{show ? 'sk_live_94a82c19f04' : 'sk_live_••••••••••••'}</span>
            <button onClick={() => { playSound('click'); setShow(!show); }} className="text-slate-400 hover:text-slate-800 dark:hover:text-white">
              {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <p className="text-[9px] font-mono text-rose-500">Do not expose in public frontend bundles.</p>
        </div>
      );
    }`
  },

  // 29. Global Visitor World Map Card
  {
    title: 'World Map Geo Telemetry Card',
    badge: 'GEO',
    tags: ['Map', 'Geo', 'Telemetry'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-[#090b16] border border-white/10 text-white shadow-xl">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-indigo-400" /><span className="text-xs font-bold">Global Presence</span></div>
          <span className="text-[10px] font-mono text-cyan-400">142 Countries</span>
        </div>
        <div className="relative w-full h-20 rounded-xl bg-indigo-950/20 border border-indigo-500/20 flex items-center justify-center mb-2">
          <span className="text-[9px] font-mono text-indigo-300">MAP SILHOUETTE ACTIVE</span>
          <span className="absolute top-4 left-10 w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="absolute top-7 right-14 w-2 h-2 rounded-full bg-fuchsia-400 animate-ping" />
          <span className="absolute bottom-4 left-24 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </div>
        <div className="flex justify-between text-[10px] font-mono text-slate-400">
          <span>NYC: 42k</span><span>LDN: 38k</span><span>TYO: 65k</span>
        </div>
      </div>
    )`
  },

  // 30. Bandwidth Speedometer Gauge
  {
    title: 'Bandwidth Speedometer Gauge',
    badge: 'NETWORK',
    tags: ['Speed', 'Gauge', 'Bandwidth'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white text-center">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Fiber Network Test</div>
        <div className="relative w-28 h-14 mx-auto overflow-hidden flex items-end justify-center mb-2">
          <div className="w-28 h-28 rounded-full border-8 border-slate-100 dark:border-white/10 border-t-indigo-600 border-r-indigo-500 absolute top-0" />
        </div>
        <div className="text-2xl font-black font-mono">942.5 <span className="text-xs text-indigo-500">Mbps</span></div>
        <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-100 dark:border-white/5 mt-2">
          <span>Latency: 4ms</span><span>Jitter: 0.8ms</span>
        </div>
      </div>
    )`
  },

  // 31. SSL Encryption Padlock Card
  {
    title: 'SSL TLS 1.3 Security Shield',
    badge: 'SSL',
    tags: ['Security', 'SSL', 'Encryption'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-emerald-950/20 dark:bg-emerald-950/30 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-5 h-5 text-emerald-500" />
          <span className="text-xs font-bold uppercase tracking-wider">TLS 1.3 Encrypted</span>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-300 mb-3">ECDSA 256-bit cipher suite certified by DigiCert Global Root G2.</p>
        <div className="flex justify-between text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
          <span>Valid until: 2028</span><span>Status: SECURE</span>
        </div>
      </div>
    )`
  },

  // 32. Video Player Showcase Card
  {
    title: 'Floating Video Thumbnail Scrubber',
    badge: 'MEDIA',
    tags: ['Video', 'Media', 'Thumbnail'],
    component: `() => (
      <div className="w-72 rounded-2xl bg-white dark:bg-[#0e101a] border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden text-slate-800 dark:text-white">
        <div className="relative h-28 bg-gradient-to-tr from-slate-900 to-indigo-950 flex items-center justify-center">
          <button onClick={() => playSound('pop')} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:scale-110 transition-transform">
            <Play className="w-4 h-4 ml-0.5 fill-white" />
          </button>
          <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/60 text-[9px] font-mono text-white">14:28</span>
        </div>
        <div className="p-3">
          <h5 className="text-xs font-bold truncate">Mastering Micro-Interactions in React 19</h5>
          <p className="text-[10px] text-slate-400">Lumina Academy • 84k views</p>
        </div>
      </div>
    )`
  },

  // 33. Multi-Bar Audio Spectrum
  {
    title: 'Equalizer Audio Wave Spectrum',
    badge: 'AUDIO',
    tags: ['Equalizer', 'Bars', 'Sound'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0d18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold">Live Spectrum Analyzer</span>
          <span className="text-[10px] font-mono text-indigo-500 font-bold">48.0 kHz</span>
        </div>
        <div className="flex items-end justify-between h-14 px-1 gap-1">
          {[20, 60, 90, 40, 75, 100, 85, 30, 95, 50, 70, 40].map((h, i) => (
            <motion.div 
              key={i} 
              animate={{ height: [\`\${h * 0.3}%\`, \`\${h}%\`, \`\${h * 0.4}%\`] }}
              transition={{ duration: 0.5 + (i * 0.05), repeat: Infinity, repeatType: 'reverse' }}
              className="flex-1 rounded-t bg-gradient-to-t from-indigo-600 via-cyan-400 to-emerald-400" 
            />
          ))}
        </div>
      </div>
    )`
  },

  // 34. Biometric Scan Card
  {
    title: 'Biometric Touch ID Scanner',
    badge: 'BIOMETRIC',
    tags: ['Biometric', 'Auth', 'TouchID'],
    component: `() => {
      const [scanning, setScanning] = useState(false);
      return (
        <div 
          onClick={() => { playSound('laser'); setScanning(true); setTimeout(() => setScanning(false), 2000); }}
          className="w-72 p-5 rounded-2xl bg-white dark:bg-[#0d0f19] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white text-center cursor-pointer select-none"
        >
          <div className="relative w-14 h-14 mx-auto mb-2 flex items-center justify-center rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            <Radio className="w-8 h-8" />
            {scanning && <motion.div animate={{ y: [-15, 15, -15] }} transition={{ duration: 1, repeat: Infinity }} className="absolute inset-x-2 h-0.5 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />}
          </div>
          <h5 className="text-xs font-bold">{scanning ? 'Authenticating Token...' : 'Touch to Authenticate'}</h5>
          <p className="text-[10px] font-mono text-slate-400 mt-1">FIDO2 WebAuthn Passkey</p>
        </div>
      );
    }`
  },

  // 35. Pro Pricing Tier Card
  {
    title: 'Pro Enterprise Pricing Matrix',
    badge: 'PRICING',
    tags: ['Pricing', 'SaaS', 'Tier'],
    component: `() => (
      <div className="w-72 p-5 rounded-2xl bg-gradient-to-b from-indigo-50/50 to-white dark:from-[#131526] dark:to-[#0c0d16] border-2 border-indigo-500 shadow-xl text-slate-800 dark:text-white relative">
        <span className="absolute -top-3 right-4 px-2 py-0.5 rounded-full bg-indigo-600 text-white text-[9px] font-bold font-mono">MOST POPULAR</span>
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Startup Pro</div>
        <div className="flex items-baseline gap-1 my-2">
          <span className="text-3xl font-black font-mono">$49</span>
          <span className="text-xs text-slate-400">/ month</span>
        </div>
        <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 mb-4">
          <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500" /><span>Unlimited Widget Downloads</span></div>
          <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-500" /><span>Custom Branding & Theme Engine</span></div>
        </div>
        <button onClick={() => playSound('pop')} className="w-full py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition-colors">Start 14-Day Trial</button>
      </div>
    )`
  },

  // 36. AI Prompt Assistant Card
  {
    title: 'AI Prompt Generation Assistant',
    badge: 'AI',
    tags: ['AI', 'Prompt', 'Copilot'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-fuchsia-500" /><span className="text-xs font-bold">AI Component Copilot</span></div>
          <span className="text-[10px] font-mono text-slate-400">GPT-4o</span>
        </div>
        <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-500 dark:text-slate-400 italic mb-3">
          "Create a glassmorphism audio player with tactile haptic controls..."
        </div>
        <div className="flex gap-1.5">
          <button onClick={() => playSound('click')} className="px-2 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 text-[10px] font-mono">Generate</button>
          <button onClick={() => playSound('click')} className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-[10px] font-mono">Refactor</button>
        </div>
      </div>
    )`
  },

  // 37. Folded Origami Corner Card
  {
    title: 'Origami Folded Shadow Ribbon',
    badge: 'CHIC',
    tags: ['Origami', 'Fold', 'Shadow'],
    component: `() => (
      <div className="relative w-72 p-5 rounded-2xl bg-white dark:bg-[#121422] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-indigo-600 to-transparent [clip-path:polygon(100%_0,0_0,100%_100%)]" />
        <h5 className="text-sm font-bold mb-1">Architectural Origami</h5>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Diagonal clipped corner providing dimensional optical depth.</p>
        <span className="text-[10px] font-mono text-indigo-500 font-bold">#ORIGAMI_01</span>
      </div>
    )`
  },

  // 38. Multiplayer Cursor Co-Presence
  {
    title: 'Multiplayer Real-Time Cursors',
    badge: 'LIVE',
    tags: ['Cursor', 'Multiplayer', 'Figma'],
    component: `() => (
      <div className="relative w-72 h-36 rounded-2xl bg-white dark:bg-[#0c0d17] border border-slate-200 dark:border-white/10 shadow-xl p-4 overflow-hidden text-slate-800 dark:text-white">
        <div className="text-xs font-bold mb-1">Interactive Canvas Viewport</div>
        <p className="text-[10px] text-slate-400">3 editors currently active</p>
        <motion.div animate={{ x: [20, 120, 60], y: [10, 40, 20] }} transition={{ duration: 4, repeat: Infinity }} className="absolute z-10 flex items-center gap-1 pointer-events-none">
          <div className="w-3 h-3 bg-fuchsia-500 rounded-sm rotate-45" />
          <span className="px-1.5 py-0.5 rounded bg-fuchsia-500 text-white font-mono text-[9px] font-bold">Sarah</span>
        </motion.div>
        <motion.div animate={{ x: [140, 40, 110], y: [30, 10, 50] }} transition={{ duration: 5, repeat: Infinity }} className="absolute z-10 flex items-center gap-1 pointer-events-none">
          <div className="w-3 h-3 bg-cyan-400 rounded-sm rotate-45" />
          <span className="px-1.5 py-0.5 rounded bg-cyan-400 text-black font-mono text-[9px] font-bold">Ken</span>
        </motion.div>
      </div>
    )`
  },

  // 39. Microservice 3x3 Status Grid
  {
    title: 'Microservice Node Status Matrix',
    badge: 'STATUS',
    tags: ['Server', 'Status', 'Nodes'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold">Kubernetes Cluster Pods</span>
          <span className="text-[10px] font-mono text-emerald-500 font-bold">9/9 Healthy</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {['Auth', 'Payment', 'Graph', 'CDN', 'Worker', 'Cache', 'Ingest', 'Search', 'Storage'].map((name, i) => (
            <div key={i} className="p-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 flex items-center justify-between text-[10px] font-mono">
              <span className="truncate">{name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    )`
  },

  // 40. Interactive Before/After Toggle
  {
    title: 'Before & After Contrast Switcher',
    badge: 'CONTRAST',
    tags: ['Toggle', 'BeforeAfter', 'Compare'],
    component: `() => {
      const [after, setAfter] = useState(true);
      return (
        <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white text-center">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold">Rendering Engine</span>
            <div className="flex p-0.5 bg-slate-100 dark:bg-white/10 rounded-lg text-[10px] font-mono">
              <button onClick={() => { playSound('click'); setAfter(false); }} className={\`px-2 py-0.5 rounded \${!after ? 'bg-white dark:bg-slate-800 font-bold shadow-sm' : 'text-slate-400'}\`}>Before</button>
              <button onClick={() => { playSound('click'); setAfter(true); }} className={\`px-2 py-0.5 rounded \${after ? 'bg-indigo-600 text-white font-bold shadow-sm' : 'text-slate-400'}\`}>After</button>
            </div>
          </div>
          <div className={\`p-4 rounded-xl transition-colors font-mono text-xs \${after ? 'bg-gradient-to-r from-indigo-500 to-cyan-400 text-white shadow-lg' : 'bg-slate-200 dark:bg-neutral-800 text-slate-500'}\`}>
            {after ? '⚡ 60 FPS Hardware Accelerated' : '🐢 Software Fallback CPU 12 FPS'}
          </div>
        </div>
      );
    }`
  },

  // 41. E-Commerce Sneaker Card
  {
    title: 'Sneaker E-Commerce Quick Add',
    badge: 'STORE',
    tags: ['Store', 'Product', 'Sneaker'],
    component: `() => {
      const [size, setSize] = useState('42');
      return (
        <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0e101b] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
          <div className="flex justify-between items-start mb-2">
            <div><h5 className="text-xs font-bold">Lumina Cyber Runner</h5><div className="text-[10px] text-slate-400">Carbon Plate Tech</div></div>
            <span className="font-mono font-bold text-xs text-indigo-600 dark:text-indigo-400">$189</span>
          </div>
          <div className="flex gap-1.5 mb-3">
            {['40', '41', '42', '43', '44'].map((s) => (
              <button key={s} onClick={() => { playSound('click'); setSize(s); }} className={\`flex-1 py-1 rounded-lg text-[10px] font-mono border \${size === s ? 'bg-slate-900 dark:bg-white text-white dark:text-black font-bold' : 'border-slate-200 dark:border-white/10'}\`}>
                {s}
              </button>
            ))}
          </div>
          <button onClick={() => playSound('pop')} className="w-full py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-indigo-700 transition-colors">
            <ShoppingBag className="w-3.5 h-3.5" /> Add to Cart
          </button>
        </div>
      );
    }`
  },

  // 42. Calendar Event Invitation
  {
    title: 'Calendar Meeting Schedule Card',
    badge: 'CALENDAR',
    tags: ['Calendar', 'Meeting', 'Event'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0d0f19] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex items-center gap-2 mb-2 text-indigo-500">
          <Clock className="w-4 h-4" />
          <span className="text-xs font-bold">11:30 AM - 12:15 PM</span>
        </div>
        <h5 className="text-xs font-bold mb-1">Design System Sync & Review</h5>
        <p className="text-[10px] text-slate-400 mb-3">Discuss token variables and Tailwind v4 transition strategy.</p>
        <button onClick={() => playSound('pop')} className="w-full py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-xs border border-indigo-200 dark:border-indigo-500/20">
          Join Google Meet
        </button>
      </div>
    )`
  },

  // 43. Heart Rate Telemetry
  {
    title: 'Cardio Heart Rate ECG Telemetry',
    badge: 'HEALTH',
    tags: ['Heart', 'ECG', 'Telemetry'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0d18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-1.5 text-rose-500 font-bold text-xs"><Heart className="w-4 h-4 fill-rose-500 animate-pulse" /><span>BPM Sensor</span></div>
          <span className="text-[10px] font-mono text-emerald-500">Normal Sinus</span>
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-black font-mono">72</span>
          <span className="text-xs text-slate-400 font-mono">beats / min</span>
        </div>
        <svg className="w-full h-8 overflow-visible">
          <path d="M 0 15 L 60 15 L 75 0 L 85 30 L 95 10 L 105 15 L 260 15" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    )`
  },

  // 44. Database Replica Cluster
  {
    title: 'PostgreSQL Primary & Replica Sync',
    badge: 'DATABASE',
    tags: ['Database', 'Postgres', 'Replica'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-1.5 text-cyan-500"><Database className="w-4 h-4" /><span className="text-xs font-bold">Postgres 16 HA</span></div>
          <span className="text-[10px] font-mono text-slate-400">0 lag</span>
        </div>
        <div className="space-y-1.5 text-[11px] font-mono">
          <div className="flex justify-between p-1.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
            <span className="text-indigo-500 font-bold">Primary (Write)</span><span>2,400 qps</span>
          </div>
          <div className="flex justify-between p-1.5 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
            <span className="text-cyan-500 font-bold">Replica A (Read)</span><span>8,150 qps</span>
          </div>
        </div>
      </div>
    )`
  },

  // 45. Webhook HTTP Payload Inspector
  {
    title: 'Webhook Event Delivery Card',
    badge: 'WEBHOOK',
    tags: ['Webhook', 'API', 'HTTP'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-bold">200 OK</span>
          <span className="text-[10px] font-mono text-slate-400">42ms latency</span>
        </div>
        <div className="text-xs font-mono font-bold mb-1">POST /api/v1/stripe-webhook</div>
        <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-mono text-slate-500 dark:text-slate-400">
          event: "charge.succeeded"
        </div>
      </div>
    )`
  },

  // 46. Social Growth Follower Card
  {
    title: 'Social Analytics Growth Card',
    badge: 'ANALYTICS',
    tags: ['Social', 'Analytics', 'Growth'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold">Community Followers</span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-bold">+24.8%</span>
        </div>
        <div className="text-2xl font-black font-mono mb-1">128,490</div>
        <p className="text-[10px] text-slate-400">Verified creators and developers worldwide</p>
      </div>
    )`
  },

  // 47. Folder Tree Directory Browser
  {
    title: 'Collapsible Project Directory Tree',
    badge: 'FILES',
    tags: ['Tree', 'Files', 'Directory'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white font-mono text-xs">
        <div className="font-bold mb-2 flex items-center gap-1.5"><Box className="w-4 h-4 text-indigo-500" /><span>src / repository</span></div>
        <div className="space-y-1 text-[11px] text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1 text-slate-700 dark:text-slate-200 font-bold">📁 components/</div>
          <div className="pl-4 flex items-center gap-1">📄 CardWidget.tsx</div>
          <div className="pl-4 flex items-center gap-1">📄 AudioSpectrum.tsx</div>
          <div className="flex items-center gap-1 text-slate-700 dark:text-slate-200 font-bold">📁 utils/</div>
          <div className="pl-4 flex items-center gap-1">📄 sound.ts</div>
        </div>
      </div>
    )`
  },

  // 48. Delivery Transit Tracking Card
  {
    title: 'Package Delivery Transit Tracker',
    badge: 'SHIPPING',
    tags: ['Shipping', 'Delivery', 'Tracking'],
    component: `() => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold">FedEx Express #9410</span>
          <span className="text-[10px] font-mono text-indigo-500 font-bold">Out for Delivery</span>
        </div>
        <div className="h-1.5 w-full bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden mb-3">
          <div className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 w-3/4 rounded-full" />
        </div>
        <div className="flex justify-between text-[10px] font-mono text-slate-400">
          <span>San Jose Hub</span><span>Arriving Today 4 PM</span>
        </div>
      </div>
    )`
  },

  // 49. Fluid Shifting Ambient Glow
  {
    title: 'Ambient Fluid Aurora Mesh Card',
    badge: 'AURORA',
    tags: ['Aurora', 'Ambient', 'Mesh'],
    component: `() => (
      <div className="relative w-72 h-36 rounded-2xl bg-slate-900 border border-white/15 overflow-hidden p-5 flex flex-col justify-between text-white shadow-xl">
        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute -top-12 -left-12 w-40 h-40 rounded-full bg-cyan-500/40 blur-2xl pointer-events-none" />
        <motion.div animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }} transition={{ duration: 8, repeat: Infinity }} className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-fuchsia-500/40 blur-2xl pointer-events-none" />
        <div className="relative z-10 flex justify-between items-center">
          <span className="text-xs font-bold font-mono text-cyan-300">AURORA_FX</span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10">60 FPS</span>
        </div>
        <div className="relative z-10">
          <h5 className="text-sm font-bold">Fluid Atmospheric Mesh</h5>
          <p className="text-[10px] text-slate-300">Shifting ambient color spectrum backdrop.</p>
        </div>
      </div>
    )`
  },

  // 50. Quantum QPU Status Card
  {
    title: 'Quantum QPU Coherence Processor',
    badge: 'QUANTUM',
    tags: ['Quantum', 'Physics', 'Qubit'],
    component: `() => (
      <div className="w-72 p-5 rounded-2xl bg-[#080912] border border-cyan-500/30 text-white shadow-2xl relative overflow-hidden">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold font-mono text-cyan-400 flex items-center gap-1.5"><Cpu className="w-4 h-4 text-cyan-400" /> IBM Eagle QPU</span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">127 QUBITS</span>
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-2xl font-black font-mono text-cyan-300">99.84%</span>
          <span className="text-[10px] text-slate-400 font-mono">Fidelity</span>
        </div>
        <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/10">
          <span>Temp: 15 mK</span><span>Cryo: ACTIVE</span>
        </div>
      </div>
    )`
  }
];

let out = importsHeader + '\nexport const cardsData = [\n';

cards.forEach((card, idx) => {
  const slug = `card-${String(idx + 1).padStart(2, '0')}`;
  out += `  {
    id: '${slug}',
    title: '${card.title}',
    category: 'cards',
    badge: '${card.badge}',
    description: 'Distinctive interactive animated card widget with customized visual physics.',
    tags: ${JSON.stringify(card.tags)},
    dependencies: ['framer-motion', 'lucide-react'],
    component: ${card.component},
    code: \`export const ${card.title.replace(/[^a-zA-Z]/g, '')} = () => (
  <div className="w-72 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-lg text-slate-900 dark:text-white">
    <h4 className="text-xs font-bold mb-1">${card.title}</h4>
  </div>
);\`
  },\n`;
});

out += '];\n';

fs.writeFileSync(outPath, out, 'utf-8');
console.log('Successfully wrote all 50 handcrafted unique animated cards!');
