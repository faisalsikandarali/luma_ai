import React, { useState, useRef, useEffect } from 'react';
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

export const textData = [
  {
    id: 'text-01',
    title: 'Cyberpunk 2088 Chromatic Glitch',
    category: 'text',
    badge: 'GLITCH',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Cyber","Glitch","Chromatic"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span onClick={() => playSound('laser')} className="font-heading font-black text-2xl tracking-widest text-slate-900 dark:text-white hover:text-cyan-400 transition-colors cursor-pointer select-none drop-shadow-[2px_2px_0px_rgba(236,72,153,0.8)] dark:drop-shadow-[2px_2px_0px_#06b6d4]">
        CYBERPUNK 2088
      </span>
    ),
    code: `export const CyberpunkChromaticGlitch = () => (
  <div className="p-3 border rounded-xl">Cyberpunk 2088 Chromatic Glitch</div>
);`
  },
  {
    id: 'text-02',
    title: 'Fluid Aurora Mesh Gradient',
    category: 'text',
    badge: 'AURORA',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Gradient","Mesh","Aurora"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <h3 className="font-black text-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 via-indigo-500 to-fuchsia-500 bg-[length:200%_auto] animate-[gradient_4s_ease_infinite] bg-clip-text text-transparent">
        Fluid Aurora Mesh
      </h3>
    ),
    code: `export const FluidAuroraMeshGradient = () => (
  <div className="p-3 border rounded-xl">Fluid Aurora Mesh Gradient</div>
);`
  },
  {
    id: 'text-03',
    title: 'Terminal CLI Monospace Typewriter',
    category: 'text',
    badge: 'TERMINAL',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["CLI","Typewriter","Terminal"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="font-mono text-xs px-3 py-1.5 rounded-lg bg-slate-900 text-emerald-400 flex items-center shadow-md">
        <span>$ npm create-lumina-app@latest</span>
        <span className="w-1.5 h-3.5 bg-emerald-400 ml-1.5 animate-pulse" />
      </div>
    ),
    code: `export const TerminalCLIMonospaceTypewriter = () => (
  <div className="p-3 border rounded-xl">Terminal CLI Monospace Typewriter</div>
);`
  },
  {
    id: 'text-04',
    title: 'Staggered Wave Letter Bounce',
    category: 'text',
    badge: 'BOUNCE',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Bounce","Wave","Letters"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex gap-1 justify-center cursor-pointer select-none" onMouseEnter={() => playSound('pop')}>
        {"SPRING PHYSICS".split("").map((c, i) => (
          <motion.span key={i} whileHover={{ y: -6, color: "#6366f1" }} className="font-black text-lg text-slate-800 dark:text-slate-100">
            {c === " " ? "\u00A0" : c}
          </motion.span>
        ))}
      </div>
    ),
    code: `export const StaggeredWaveLetterBounce = () => (
  <div className="p-3 border rounded-xl">Staggered Wave Letter Bounce</div>
);`
  },
  {
    id: 'text-05',
    title: 'Neon Tube Signboard Glow',
    category: 'text',
    badge: 'NEON',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Neon","Glow","Night"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-mono text-xl font-black text-fuchsia-500 drop-shadow-[0_0_12px_rgba(217,70,239,0.8)] tracking-widest">
        NEON DREAMS
      </span>
    ),
    code: `export const NeonTubeSignboardGlow = () => (
  <div className="p-3 border rounded-xl">Neon Tube Signboard Glow</div>
);`
  },
  {
    id: 'text-06',
    title: 'Hollow Stroke Outline',
    category: 'text',
    badge: 'STROKE',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Outline","Stroke","Minimal"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-black text-2xl text-transparent" style={{ WebkitTextStroke: "1.5px #6366f1" }}>
        TRANSCENDENCE
      </span>
    ),
    code: `export const HollowStrokeOutline = () => (
  <div className="p-3 border rounded-xl">Hollow Stroke Outline</div>
);`
  },
  {
    id: 'text-07',
    title: 'Shimmering Champagne Gold Foil',
    category: 'text',
    badge: 'GOLD',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Gold","Luxury","Shimmer"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-extrabold text-lg bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
        ✦ LUXURY CHAMPAGNE ✦
      </span>
    ),
    code: `export const ShimmeringChampagneGoldFoil = () => (
  <div className="p-3 border rounded-xl">Shimmering Champagne Gold Foil</div>
);`
  },
  {
    id: 'text-08',
    title: 'Variable Weight Fluid Sweeper',
    category: 'text',
    badge: 'VARIABLE',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Font","Variable","Weight"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-light hover:font-black text-xl text-indigo-600 dark:text-indigo-400 transition-all duration-300 cursor-pointer">
        Variable Weight Dynamics
      </span>
    ),
    code: `export const VariableWeightFluidSweeper = () => (
  <div className="p-3 border rounded-xl">Variable Weight Fluid Sweeper</div>
);`
  },
  {
    id: 'text-09',
    title: 'Matrix Digital Rain Binary',
    category: 'text',
    badge: 'MATRIX',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Matrix","Binary","Hacker"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="font-mono text-xs text-emerald-400 bg-black/60 px-3 py-1 rounded-md border border-emerald-500/30">
        01001100 01010101 01001101 01001001
      </div>
    ),
    code: `export const MatrixDigitalRainBinary = () => (
  <div className="p-3 border rounded-xl">Matrix Digital Rain Binary</div>
);`
  },
  {
    id: 'text-10',
    title: 'Syntax Token Code Highlight',
    category: 'text',
    badge: 'SYNTAX',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Code","Syntax","Dev"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="font-mono text-xs px-3 py-1.5 rounded-lg bg-slate-900 text-slate-300">
        <span className="text-purple-400">const</span> <span className="text-amber-400">widget</span> = <span className="text-cyan-400">createUi</span>();
      </div>
    ),
    code: `export const SyntaxTokenCodeHighlight = () => (
  <div className="p-3 border rounded-xl">Syntax Token Code Highlight</div>
);`
  },
  {
    id: 'text-11',
    title: '3D Isometric Extruded Shadow',
    category: 'text',
    badge: '3D',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["3D","Isometric","Shadow"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-black text-2xl text-indigo-600 dark:text-indigo-400" style={{ textShadow: "0 2px 0 #4338ca, 0 4px 0 #3730a3, 0 6px 8px rgba(0,0,0,0.3)" }}>
        ISOMETRIC 3D
      </span>
    ),
    code: `export const DIsometricExtrudedShadow = () => (
  <div className="p-3 border rounded-xl">3D Isometric Extruded Shadow</div>
);`
  },
  {
    id: 'text-12',
    title: 'Monospace T-Minus Countdown',
    category: 'text',
    badge: 'TIMESTAMP',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Timestamp","Clock","Mono"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="font-mono text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span className="font-bold">T-MINUS 00:04:18.92</span>
      </div>
    ),
    code: `export const MonospaceTMinusCountdown = () => (
  <div className="p-3 border rounded-xl">Monospace T-Minus Countdown</div>
);`
  },
  {
    id: 'text-13',
    title: 'Gradient Liquid Wave Water',
    category: 'text',
    badge: 'LIQUID',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Liquid","Wave","Water"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-black text-2xl bg-gradient-to-t from-cyan-500 via-sky-400 to-transparent bg-clip-text text-transparent">
        LIQUID WATER
      </span>
    ),
    code: `export const GradientLiquidWaveWater = () => (
  <div className="p-3 border rounded-xl">Gradient Liquid Wave Water</div>
);`
  },
  {
    id: 'text-14',
    title: 'Retro 80s Synthwave Chrome',
    category: 'text',
    badge: 'RETRO',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Synthwave","80s","Chrome"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-heading font-black text-2xl italic tracking-wider bg-gradient-to-b from-sky-300 via-white to-pink-500 bg-clip-text text-transparent">
        SYNTHWAVE 1984
      </span>
    ),
    code: `export const RetrosSynthwaveChrome = () => (
  <div className="p-3 border rounded-xl">Retro 80s Synthwave Chrome</div>
);`
  },
  {
    id: 'text-15',
    title: 'Blur-to-Focus Cinema Reveal',
    category: 'text',
    badge: 'BLUR',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Cinema","Blur","Reveal"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-bold text-xl text-slate-800 dark:text-white hover:blur-none blur-[1.5px] transition-all cursor-pointer">
        Cinematic Perception
      </span>
    ),
    code: `export const BlurtoFocusCinemaReveal = () => (
  <div className="p-3 border rounded-xl">Blur-to-Focus Cinema Reveal</div>
);`
  },
  {
    id: 'text-16',
    title: 'Scramble Decrypt Cipher',
    category: 'text',
    badge: 'CIPHER',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Cipher","Decrypt","Hacker"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [txt, setTxt] = useState('DECRYPTED');
      return (
        <span 
          onClick={() => { playSound('laser'); setTxt('CONFIDENTIAL'); setTimeout(() => setTxt('DECRYPTED'), 1000); }}
          className="font-mono font-bold text-xs px-2.5 py-1 rounded bg-black text-emerald-400 border border-emerald-500/40 cursor-pointer"
        >
          &gt; {txt}
        </span>
      );
    },
    code: `export const ScrambleDecryptCipher = () => (
  <div className="p-3 border rounded-xl">Scramble Decrypt Cipher</div>
);`
  },
  {
    id: 'text-17',
    title: 'Magnetic Character Repulsion',
    category: 'text',
    badge: 'MAGNETIC',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Magnetic","Motion","Spring"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex gap-1 font-bold text-lg text-slate-800 dark:text-white cursor-pointer" onMouseEnter={() => playSound('pop')}>
        {"GRAVITATIONAL".split("").map((c, i) => (
          <motion.span key={i} whileHover={{ scale: 1.3, color: '#f43f5e' }}>{c}</motion.span>
        ))}
      </div>
    ),
    code: `export const MagneticCharacterRepulsion = () => (
  <div className="p-3 border rounded-xl">Magnetic Character Repulsion</div>
);`
  },
  {
    id: 'text-18',
    title: 'Cursive Signature Script',
    category: 'text',
    badge: 'SCRIPT',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Signature","Handwritten","Art"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-serif italic font-normal text-2xl text-indigo-600 dark:text-indigo-400">
        Alexander Vance
      </span>
    ),
    code: `export const CursiveSignatureScript = () => (
  <div className="p-3 border rounded-xl">Cursive Signature Script</div>
);`
  },
  {
    id: 'text-19',
    title: 'Strikethrough Price Animator',
    category: 'text',
    badge: 'PRICE',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Commerce","Price","Discount"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex items-center gap-2 font-mono">
        <span className="line-through text-slate-400 text-sm">$199.00</span>
        <span className="text-xl font-black text-rose-500">$89.00</span>
      </div>
    ),
    code: `export const StrikethroughPriceAnimator = () => (
  <div className="p-3 border rounded-xl">Strikethrough Price Animator</div>
);`
  },
  {
    id: 'text-20',
    title: 'Double Shadow Duotone Pop',
    category: 'text',
    badge: 'DUOTONE',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["PopArt","Duotone","Shadow"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-black text-2xl text-slate-900 dark:text-white" style={{ textShadow: "3px 3px 0 #ec4899, 6px 6px 0 #06b6d4" }}>
        POP ART DUO
      </span>
    ),
    code: `export const DoubleShadowDuotonePop = () => (
  <div className="p-3 border rounded-xl">Double Shadow Duotone Pop</div>
);`
  },
  {
    id: 'text-21',
    title: 'Floating Helium Bubble Text',
    category: 'text',
    badge: 'FLOAT',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Float","Helium","Physics"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <motion.div animate={{ y: [-3, 3, -3] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} className="font-black text-xl text-sky-500">
        FLOATING HELIUM
      </motion.div>
    ),
    code: `export const FloatingHeliumBubbleText = () => (
  <div className="p-3 border rounded-xl">Floating Helium Bubble Text</div>
);`
  },
  {
    id: 'text-22',
    title: 'Burning Ember Glow Sparks',
    category: 'text',
    badge: 'EMBER',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Fire","Ember","Glow"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-black text-xl text-amber-500 drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]">
        BURNING EMBER 🔥
      </span>
    ),
    code: `export const BurningEmberGlowSparks = () => (
  <div className="p-3 border rounded-xl">Burning Ember Glow Sparks</div>
);`
  },
  {
    id: 'text-23',
    title: 'Split Horizontal Slice Offset',
    category: 'text',
    badge: 'SLICE',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Slice","Offset","Cyber"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="relative font-black text-2xl tracking-widest text-slate-900 dark:text-white group cursor-pointer" onClick={() => playSound('pop')}>
        <span className="group-hover:translate-x-1 transition-transform inline-block">SLICED HORIZON</span>
      </div>
    ),
    code: `export const SplitHorizontalSliceOffset = () => (
  <div className="p-3 border rounded-xl">Split Horizontal Slice Offset</div>
);`
  },
  {
    id: 'text-24',
    title: 'Rolling Slot Machine Counter',
    category: 'text',
    badge: 'COUNTER',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Counter","Slot","Numbers"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="font-mono text-xl font-black text-indigo-600 dark:text-indigo-400 flex items-center">
        <span>$</span>
        <motion.span animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 1.5, repeat: Infinity }}>
          94,820.00
        </motion.span>
      </div>
    ),
    code: `export const RollingSlotMachineCounter = () => (
  <div className="p-3 border rounded-xl">Rolling Slot Machine Counter</div>
);`
  },
  {
    id: 'text-25',
    title: 'Frosted Glass Embossed Text',
    category: 'text',
    badge: 'FROSTED',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Glass","Emboss","Apple"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-bold text-lg text-slate-700 dark:text-slate-200" style={{ textShadow: "0 1px 1px rgba(255,255,255,0.8), 0 -1px 1px rgba(0,0,0,0.3)" }}>
        Frosted Glass Depth
      </span>
    ),
    code: `export const FrostedGlassEmbossedText = () => (
  <div className="p-3 border rounded-xl">Frosted Glass Embossed Text</div>
);`
  },
  {
    id: 'text-26',
    title: 'Gradient Underline Sweep',
    category: 'text',
    badge: 'UNDERLINE',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Underline","Sweep","Link"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-bold text-lg text-slate-800 dark:text-white border-b-2 border-indigo-500 pb-0.5 hover:border-fuchsia-500 transition-colors cursor-pointer">
        Underline Border Sweep
      </span>
    ),
    code: `export const GradientUnderlineSweep = () => (
  <div className="p-3 border rounded-xl">Gradient Underline Sweep</div>
);`
  },
  {
    id: 'text-27',
    title: 'Highlighter Fluorescent Yellow Marker',
    category: 'text',
    badge: 'MARKER',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Highlight","Marker","Yellow"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-bold text-base bg-yellow-300/80 dark:bg-yellow-400/20 text-slate-900 dark:text-yellow-300 px-2 py-0.5 rounded">
        CRITICAL MILESTONE
      </span>
    ),
    code: `export const HighlighterFluorescentYellowMarker = () => (
  <div className="p-3 border rounded-xl">Highlighter Fluorescent Yellow Marker</div>
);`
  },
  {
    id: 'text-28',
    title: 'Swiss All-Caps Spaced Headline',
    category: 'text',
    badge: 'SWISS',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Swiss","Spaced","Minimal"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-mono font-black text-sm tracking-[0.4em] text-slate-800 dark:text-white uppercase">
        L U M I N A
      </span>
    ),
    code: `export const SwissAllCapsSpacedHeadline = () => (
  <div className="p-3 border rounded-xl">Swiss All-Caps Spaced Headline</div>
);`
  },
  {
    id: 'text-29',
    title: 'Curved Badge Emblem Text',
    category: 'text',
    badge: 'EMBLEM',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Emblem","Circle","Stamp"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="px-3 py-1 rounded-full border border-indigo-500 text-indigo-500 font-mono text-xs font-bold flex items-center gap-1.5">
        <Sparkles className="w-3 h-3" />
        <span>AUTHENTICATED DESIGN</span>
      </div>
    ),
    code: `export const CurvedBadgeEmblemText = () => (
  <div className="p-3 border rounded-xl">Curved Badge Emblem Text</div>
);`
  },
  {
    id: 'text-30',
    title: 'Confidential CIA Redacted Bar',
    category: 'text',
    badge: 'REDACTED',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Redacted","Secret","Hover"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="font-mono text-xs text-slate-800 dark:text-white flex items-center gap-1">
        <span>PROJECT:</span>
        <span className="bg-slate-900 dark:bg-white text-transparent hover:text-white dark:hover:text-black px-1.5 py-0.5 rounded cursor-pointer transition-colors">
          TOP_SECRET_ORBIT
        </span>
      </div>
    ),
    code: `export const ConfidentialCIARedactedBar = () => (
  <div className="p-3 border rounded-xl">Confidential CIA Redacted Bar</div>
);`
  },
  {
    id: 'text-31',
    title: 'Rainbow Prism Holographic Text',
    category: 'text',
    badge: 'PRISM',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Rainbow","Prism","Color"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-black text-xl bg-gradient-to-r from-red-500 via-amber-400 via-emerald-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
        PRISM SPECTRUM
      </span>
    ),
    code: `export const RainbowPrismHolographicText = () => (
  <div className="p-3 border rounded-xl">Rainbow Prism Holographic Text</div>
);`
  },
  {
    id: 'text-32',
    title: 'Shaky Earthquake Jitter FX',
    category: 'text',
    badge: 'JITTER',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Jitter","Shake","Action"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <motion.span animate={{ x: [-1, 1, -1] }} transition={{ duration: 0.1, repeat: Infinity }} className="font-mono font-black text-lg text-rose-500">
        SEISMIC VIBRATION
      </motion.span>
    ),
    code: `export const ShakyEarthquakeJitterFX = () => (
  <div className="p-3 border rounded-xl">Shaky Earthquake Jitter FX</div>
);`
  },
  {
    id: 'text-33',
    title: 'Liquid Chrome Mercury Metal',
    category: 'text',
    badge: 'CHROME',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Chrome","Metal","Mercury"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-black text-xl bg-gradient-to-b from-white via-slate-400 to-slate-700 bg-clip-text text-transparent drop-shadow-md">
        MERCURY CHROME
      </span>
    ),
    code: `export const LiquidChromeMercuryMetal = () => (
  <div className="p-3 border rounded-xl">Liquid Chrome Mercury Metal</div>
);`
  },
  {
    id: 'text-34',
    title: 'Infinite Marquee Ticker Stream',
    category: 'text',
    badge: 'MARQUEE',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Marquee","Stream","Ticker"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-64 overflow-hidden rounded-lg bg-slate-100 dark:bg-white/5 py-1 px-2 border border-slate-200 dark:border-white/10 font-mono text-xs text-indigo-500 flex justify-between">
        <span className="font-bold">● LIVE TICKER</span>
        <span>LUMINA UI V4.0 LIVE NOW</span>
      </div>
    ),
    code: `export const InfiniteMarqueeTickerStream = () => (
  <div className="p-3 border rounded-xl">Infinite Marquee Ticker Stream</div>
);`
  },
  {
    id: 'text-35',
    title: 'Perspective Crawl Sci-Fi Text',
    category: 'text',
    badge: 'SCIFI',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["SciFi","Crawl","Space"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="font-mono text-xs text-amber-400 font-bold uppercase tracking-widest [transform:perspective(100px)_rotateX(20deg)]">
        EPISODE IV: A NEW CORE
      </div>
    ),
    code: `export const PerspectiveCrawlSciFiText = () => (
  <div className="p-3 border rounded-xl">Perspective Crawl Sci-Fi Text</div>
);`
  },
  {
    id: 'text-36',
    title: 'Bouncing Ping-Pong Ball Text',
    category: 'text',
    badge: 'BALL',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Bounce","Ball","Playful"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-white text-base">
        <span>Ping Pong</span>
        <motion.span animate={{ y: [-8, 0, -8] }} transition={{ duration: 0.4, repeat: Infinity }} className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
      </div>
    ),
    code: `export const BouncingPingPongBallText = () => (
  <div className="p-3 border rounded-xl">Bouncing Ping-Pong Ball Text</div>
);`
  },
  {
    id: 'text-37',
    title: 'RGB Chameleon Wave Cycle',
    category: 'text',
    badge: 'CHAMELEON',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Chameleon","Color","Cycle"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-black text-xl text-teal-400 hover:text-fuchsia-400 transition-colors duration-500 cursor-pointer">
        CHAMELEON SHIFTER
      </span>
    ),
    code: `export const RGBChameleonWaveCycle = () => (
  <div className="p-3 border rounded-xl">RGB Chameleon Wave Cycle</div>
);`
  },
  {
    id: 'text-38',
    title: 'Military Stencil Spray Paint',
    category: 'text',
    badge: 'STENCIL',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Military","Stencil","Spray"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-mono font-black text-xl text-slate-800 dark:text-slate-200 tracking-widest border-2 border-dashed border-slate-400 px-3 py-0.5">
        SECTOR-09
      </span>
    ),
    code: `export const MilitaryStencilSprayPaint = () => (
  <div className="p-3 border rounded-xl">Military Stencil Spray Paint</div>
);`
  },
  {
    id: 'text-39',
    title: 'Comic Book Dot Halftone Pop',
    category: 'text',
    badge: 'COMIC',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Comic","Halftone","Pop"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-black text-2xl text-amber-400 italic tracking-wider drop-shadow-[2px_2px_0px_#000]">
        BOOM! 💥
      </span>
    ),
    code: `export const ComicBookDotHalftonePop = () => (
  <div className="p-3 border rounded-xl">Comic Book Dot Halftone Pop</div>
);`
  },
  {
    id: 'text-40',
    title: 'UV Blacklight Cyan Glow Stick',
    category: 'text',
    badge: 'BLACKLIGHT',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["UV","Cyan","Glow"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-mono font-bold text-lg text-cyan-300 drop-shadow-[0_0_15px_#06b6d4]">
        UV LUMINESCENCE
      </span>
    ),
    code: `export const UVBlacklightCyanGlowStick = () => (
  <div className="p-3 border rounded-xl">UV Blacklight Cyan Glow Stick</div>
);`
  },
  {
    id: 'text-41',
    title: 'Distorted VHS Scanlines Glitch',
    category: 'text',
    badge: 'VHS',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["VHS","Tape","Scanline"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="font-mono text-xs text-rose-400 bg-neutral-900 px-3 py-1 rounded border border-rose-500/30 flex items-center justify-between">
        <span>REC ● 00:12:44</span>
        <span className="text-[10px] text-white">SP TAPE</span>
      </div>
    ),
    code: `export const DistortedVHSScanlinesGlitch = () => (
  <div className="p-3 border rounded-xl">Distorted VHS Scanlines Glitch</div>
);`
  },
  {
    id: 'text-42',
    title: 'Morphing Word Rotator Flip',
    category: 'text',
    badge: 'MORPH',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Morph","Words","Rotate"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [idx, setIdx] = useState(0);
      const words = ['Fast', 'Scalable', 'Beautiful'];
      return (
        <div className="flex items-center gap-2 font-black text-lg text-slate-800 dark:text-white cursor-pointer" onClick={() => { playSound('pop'); setIdx((idx + 1) % words.length); }}>
          <span>Build</span>
          <span className="text-indigo-600 dark:text-indigo-400 underline decoration-wavy">{words[idx]}</span>
        </div>
      );
    },
    code: `export const MorphingWordRotatorFlip = () => (
  <div className="p-3 border rounded-xl">Morphing Word Rotator Flip</div>
);`
  },
  {
    id: 'text-43',
    title: 'Golden Sparkler Particle Text',
    category: 'text',
    badge: 'SPARK',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Golden","Spark","Particle"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-extrabold text-base text-amber-400 flex items-center gap-1">
        <Sparkles className="w-4 h-4 text-yellow-300" />
        <span>SPARKLER STARLIGHT</span>
      </span>
    ),
    code: `export const GoldenSparklerParticleText = () => (
  <div className="p-3 border rounded-xl">Golden Sparkler Particle Text</div>
);`
  },
  {
    id: 'text-44',
    title: 'Minimalist Serpentine Italic Font',
    category: 'text',
    badge: 'SERIF',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Serif","Editorial","Italic"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-serif italic text-xl text-slate-700 dark:text-slate-300">
        "Elegance in restraint"
      </span>
    ),
    code: `export const MinimalistSerpentineItalicFont = () => (
  <div className="p-3 border rounded-xl">Minimalist Serpentine Italic Font</div>
);`
  },
  {
    id: 'text-45',
    title: 'Inverted Solid Hover Block',
    category: 'text',
    badge: 'INVERT',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Invert","Block","Contrast"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-bold text-base px-3 py-1 rounded-md text-slate-800 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer">
        Invert Block Switch
      </span>
    ),
    code: `export const InvertedSolidHoverBlock = () => (
  <div className="p-3 border rounded-xl">Inverted Solid Hover Block</div>
);`
  },
  {
    id: 'text-46',
    title: 'Elastic Rubber Band Stretch',
    category: 'text',
    badge: 'ELASTIC',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Stretch","Elastic","Physics"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <motion.span whileHover={{ scaleX: 1.2 }} className="font-black text-xl text-indigo-500 inline-block cursor-pointer">
        ELASTIC STRETCH
      </motion.span>
    ),
    code: `export const ElasticRubberBandStretch = () => (
  <div className="p-3 border rounded-xl">Elastic Rubber Band Stretch</div>
);`
  },
  {
    id: 'text-47',
    title: 'Laser Engraved Wood Burn',
    category: 'text',
    badge: 'ENGRAVED',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Laser","Engraved","Burn"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-mono font-bold text-base text-amber-700 dark:text-amber-500">
        LASER ETCHED // 2026
      </span>
    ),
    code: `export const LaserEngravedWoodBurn = () => (
  <div className="p-3 border rounded-xl">Laser Engraved Wood Burn</div>
);`
  },
  {
    id: 'text-48',
    title: 'Subtitle Speech Bubble Caption',
    category: 'text',
    badge: 'SPEECH',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Speech","Bubble","Caption"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="px-3 py-1 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-medium border border-indigo-200 dark:border-indigo-500/20">
        💬 "Design is intelligence made visible."
      </div>
    ),
    code: `export const SubtitleSpeechBubbleCaption = () => (
  <div className="p-3 border rounded-xl">Subtitle Speech Bubble Caption</div>
);`
  },
  {
    id: 'text-49',
    title: 'Pulsing Heartbeat Rhythm Text',
    category: 'text',
    badge: 'RHYTHM',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Heart","Rhythm","Pulse"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex items-center gap-1.5 font-bold text-base text-rose-500">
        <Heart className="w-4 h-4 fill-rose-500 animate-ping" />
        <span>PULSING CODE</span>
      </div>
    ),
    code: `export const PulsingHeartbeatRhythmText = () => (
  <div className="p-3 border rounded-xl">Pulsing Heartbeat Rhythm Text</div>
);`
  },
  {
    id: 'text-50',
    title: 'Deep Space Galaxy Texture Clip',
    category: 'text',
    badge: 'GALAXY',
    description: 'Distinctive interactive text widget with customized visual physics.',
    tags: ["Galaxy","DeepSpace","Stars"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <span className="font-black text-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
        GALAXY HORIZON
      </span>
    ),
    code: `export const DeepSpaceGalaxyTextureClip = () => (
  <div className="p-3 border rounded-xl">Deep Space Galaxy Texture Clip</div>
);`
  },
];
