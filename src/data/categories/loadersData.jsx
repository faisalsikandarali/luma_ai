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
  ThumbsUp, VolumeX, Mic, Calendar, DollarSign, Percent, Paperclip, SlidersHorizontal,
  Briefcase, Code, GraduationCap, Mail, UserCheck, TerminalSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSound } from '../../utils/sound';

export const loadersData = [
  {
    id: 'loaders-01',
    title: 'Quantum Orbit Gyroscopic Loader',
    category: 'loaders',
    badge: 'QUANTUM',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Quantum","Orbit","Spinner"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
        <div className="absolute inset-1 rounded-full border-2 border-cyan-400/20 border-b-cyan-400 animate-[spin_1.5s_linear_infinite_reverse]" />
        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
      </div>
    ),
    code: `export const QuantumOrbitGyroscopicLoader = () => (
  <div className="p-4 border rounded-2xl">Quantum Orbit Gyroscopic Loader</div>
);`
  },
  {
    id: 'loaders-02',
    title: 'Hyperspace Warp Tunnel',
    category: 'loaders',
    badge: 'WARP',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Warp","Tunnel","SciFi"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="relative w-14 h-14 flex items-center justify-center">
        <motion.div animate={{ scale: [0.3, 1.2], opacity: [1, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }} className="absolute inset-0 rounded-xl border-2 border-indigo-400" />
        <motion.div animate={{ scale: [0.3, 1.2], opacity: [1, 0] }} transition={{ duration: 1.2, delay: 0.4, repeat: Infinity, ease: 'easeOut' }} className="absolute inset-0 rounded-xl border-2 border-cyan-400" />
        <span className="font-mono text-[9px] text-indigo-400 font-bold">WARP</span>
      </div>
    ),
    code: `export const HyperspaceWarpTunnel = () => (
  <div className="p-4 border rounded-2xl">Hyperspace Warp Tunnel</div>
);`
  },
  {
    id: 'loaders-03',
    title: 'Pulsing Sonic Wave Ring',
    category: 'loaders',
    badge: 'SONIC',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Sonic","Pulse","Wave"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="relative w-12 h-12 flex items-center justify-center">
        <span className="w-full h-full rounded-full bg-cyan-400/30 animate-ping absolute" />
        <span className="w-8 h-8 rounded-full bg-cyan-400/50 absolute" />
        <span className="w-3.5 h-3.5 rounded-full bg-cyan-500 z-10" />
      </div>
    ),
    code: `export const PulsingSonicWaveRing = () => (
  <div className="p-4 border rounded-2xl">Pulsing Sonic Wave Ring</div>
);`
  },
  {
    id: 'loaders-04',
    title: 'Bouncing Three Dot Wave',
    category: 'loaders',
    badge: 'DOTS',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Dots","Bounce","Wave"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex gap-2 items-center">
        <motion.span animate={{ y: [-6, 6, -6] }} transition={{ duration: 0.6, repeat: Infinity }} className="w-3 h-3 rounded-full bg-indigo-600" />
        <motion.span animate={{ y: [-6, 6, -6] }} transition={{ duration: 0.6, delay: 0.2, repeat: Infinity }} className="w-3 h-3 rounded-full bg-purple-500" />
        <motion.span animate={{ y: [-6, 6, -6] }} transition={{ duration: 0.6, delay: 0.4, repeat: Infinity }} className="w-3 h-3 rounded-full bg-pink-500" />
      </div>
    ),
    code: `export const BouncingThreeDotWave = () => (
  <div className="p-4 border rounded-2xl">Bouncing Three Dot Wave</div>
);`
  },
  {
    id: 'loaders-05',
    title: 'Cyber Matrix Progress Segment Bar',
    category: 'loaders',
    badge: 'MATRIX',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Progress","Bar","Cyber"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-48 space-y-1.5">
        <div className="flex justify-between text-[10px] font-mono text-cyan-500 font-bold">
          <span>BUFFERING</span><span>84%</span>
        </div>
        <div className="h-2 bg-slate-200 dark:bg-neutral-800 rounded-full overflow-hidden p-0.5 flex gap-1">
          <div className="h-full bg-cyan-500 rounded-l-full w-[84%]" />
        </div>
      </div>
    ),
    code: `export const CyberMatrixProgressSegmentBar = () => (
  <div className="p-4 border rounded-2xl">Cyber Matrix Progress Segment Bar</div>
);`
  },
  {
    id: 'loaders-06',
    title: 'Rotating Hexagon Prism',
    category: 'loaders',
    badge: 'HEX',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Hexagon","Prism","Geometry"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="w-10 h-10 border-2 border-fuchsia-500 border-dashed rounded-xl" />
    ),
    code: `export const RotatingHexagonPrism = () => (
  <div className="p-4 border rounded-2xl">Rotating Hexagon Prism</div>
);`
  },
  {
    id: 'loaders-07',
    title: 'Infinite Möbius Ribbon Loop',
    category: 'loaders',
    badge: 'INFINITY',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Infinity","Ribbon","Math"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} className="text-indigo-600 dark:text-indigo-400 font-black text-3xl">
        ∞</motion.div>
    ),
    code: `export const InfiniteMbiusRibbonLoop = () => (
  <div className="p-4 border rounded-2xl">Infinite Möbius Ribbon Loop</div>
);`
  },
  {
    id: 'loaders-08',
    title: 'Liquid Mercury Fluid Droplet',
    category: 'loaders',
    badge: 'MERCURY',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Mercury","Liquid","Fluid"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <motion.div animate={{ borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%', '50% 50% 20% 80% / 25% 80% 20% 75%', '30% 70% 70% 30% / 30% 30% 70% 70%'], rotate: 360 }} transition={{ duration: 4, repeat: Infinity }} className="w-10 h-10 bg-gradient-to-tr from-indigo-500 to-cyan-400 shadow-md" />
    ),
    code: `export const LiquidMercuryFluidDroplet = () => (
  <div className="p-4 border rounded-2xl">Liquid Mercury Fluid Droplet</div>
);`
  },
  {
    id: 'loaders-09',
    title: 'Radar Sweeper Beam Scanner',
    category: 'loaders',
    badge: 'RADAR',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Radar","Scanner","Beam"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="relative w-12 h-12 rounded-full border border-emerald-500/30 overflow-hidden flex items-center justify-center">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="absolute w-full h-full bg-gradient-to-tr from-emerald-500/40 to-transparent rounded-full" />
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 z-10" />
      </div>
    ),
    code: `export const RadarSweeperBeamScanner = () => (
  <div className="p-4 border rounded-2xl">Radar Sweeper Beam Scanner</div>
);`
  },
  {
    id: 'loaders-10',
    title: 'Clockwise Speedometer Ticker',
    category: 'loaders',
    badge: 'TICKER',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Ticker","Clock","Dial"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="relative w-11 h-11 rounded-full border-2 border-slate-300 dark:border-white/10 flex items-center justify-center">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-0.5 h-4 bg-indigo-600 rounded-full origin-bottom -translate-y-2" />
        <div className="w-2 h-2 rounded-full bg-indigo-600" />
      </div>
    ),
    code: `export const ClockwiseSpeedometerTicker = () => (
  <div className="p-4 border rounded-2xl">Clockwise Speedometer Ticker</div>
);`
  },
  {
    id: 'loaders-11',
    title: 'Hourglass Sand Granule Flip',
    category: 'loaders',
    badge: 'HOURGLASS',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Hourglass","Time","Flip"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <motion.div animate={{ rotate: [0, 180, 180, 360] }} transition={{ duration: 2, repeat: Infinity }} className="text-xl">
        ⏳
      </motion.div>
    ),
    code: `export const HourglassSandGranuleFlip = () => (
  <div className="p-4 border rounded-2xl">Hourglass Sand Granule Flip</div>
);`
  },
  {
    id: 'loaders-12',
    title: 'Neon Cyberpunk Dual Glow Ring',
    category: 'loaders',
    badge: 'NEON',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Neon","Glow","Ring"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="relative w-11 h-11 flex items-center justify-center">
        <div className="w-full h-full rounded-full border-2 border-fuchsia-500 border-t-cyan-400 animate-spin shadow-[0_0_12px_rgba(217,70,239,0.5)]" />
      </div>
    ),
    code: `export const NeonCyberpunkDualGlowRing = () => (
  <div className="p-4 border rounded-2xl">Neon Cyberpunk Dual Glow Ring</div>
);`
  },
  {
    id: 'loaders-13',
    title: 'DNA Double Helix Twist',
    category: 'loaders',
    badge: 'DNA',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["DNA","Helix","Biology"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex gap-1.5 items-center">
        {[0, 1, 2, 3].map((i) => (
          <motion.div key={i} animate={{ y: [-8, 8, -8] }} transition={{ duration: 0.8, delay: i * 0.15, repeat: Infinity }} className="w-2 h-2 rounded-full bg-indigo-500" />
        ))}
      </div>
    ),
    code: `export const DNADoubleHelixTwist = () => (
  <div className="p-4 border rounded-2xl">DNA Double Helix Twist</div>
);`
  },
  {
    id: 'loaders-14',
    title: 'Newton Pendulum Clacker',
    category: 'loaders',
    badge: 'NEWTON',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Newton","Pendulum","Physics"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex gap-1 items-center">
        <motion.div animate={{ rotate: [0, -35, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-2.5 h-2.5 rounded-full bg-slate-700 dark:bg-white origin-top" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-700 dark:bg-white" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-700 dark:bg-white" />
        <motion.div animate={{ rotate: [0, 35, 0] }} transition={{ duration: 0.8, delay: 0.4, repeat: Infinity }} className="w-2.5 h-2.5 rounded-full bg-slate-700 dark:bg-white origin-top" />
      </div>
    ),
    code: `export const NewtonPendulumClacker = () => (
  <div className="p-4 border rounded-2xl">Newton Pendulum Clacker</div>
);`
  },
  {
    id: 'loaders-15',
    title: 'Pac-Man Chomper Dot Eater',
    category: 'loaders',
    badge: 'PACMAN',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Pacman","Retro","Arcade"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex items-center gap-2">
        <span className="text-xl animate-pulse">🟡</span>
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
      </div>
    ),
    code: `export const PacManChomperDotEater = () => (
  <div className="p-4 border rounded-2xl">Pac-Man Chomper Dot Eater</div>
);`
  },
  {
    id: 'loaders-16',
    title: 'Glowing Particle Vortex Swarm',
    category: 'loaders',
    badge: 'VORTEX',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Vortex","Particle","Swarm"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} className="w-10 h-10 border-2 border-indigo-500 border-dotted rounded-full flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-cyan-400" />
      </motion.div>
    ),
    code: `export const GlowingParticleVortexSwarm = () => (
  <div className="p-4 border rounded-2xl">Glowing Particle Vortex Swarm</div>
);`
  },
  {
    id: 'loaders-17',
    title: 'Equalizer Audio Dancing Frequency',
    category: 'loaders',
    badge: 'AUDIO',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Audio","Frequency","Bars"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex gap-1 items-end h-8">
        {[40, 80, 50, 95, 30].map((h, i) => (
          <motion.span key={i} animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`] }} transition={{ duration: 0.5 + i * 0.1, repeat: Infinity, repeatType: 'reverse' }} className="w-1.5 bg-indigo-600 rounded-full" />
        ))}
      </div>
    ),
    code: `export const EqualizerAudioDancingFrequency = () => (
  <div className="p-4 border rounded-2xl">Equalizer Audio Dancing Frequency</div>
);`
  },
  {
    id: 'loaders-18',
    title: 'Rubik Cube 3D Rotating Blocks',
    category: 'loaders',
    badge: 'RUBIK',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Rubik","Cube","3D"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <motion.div animate={{ rotate: [0, 90, 180, 270, 360] }} transition={{ duration: 2, repeat: Infinity }} className="grid grid-cols-2 gap-1 w-7 h-7">
        <div className="bg-indigo-500 rounded-xs" /><div className="bg-cyan-400 rounded-xs" />
        <div className="bg-rose-500 rounded-xs" /><div className="bg-amber-400 rounded-xs" />
      </motion.div>
    ),
    code: `export const RubikCubeDRotatingBlocks = () => (
  <div className="p-4 border rounded-2xl">Rubik Cube 3D Rotating Blocks</div>
);`
  },
  {
    id: 'loaders-19',
    title: 'Retro Floppy Disk Writer LED',
    category: 'loaders',
    badge: 'FLOPPY',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Floppy","Disk","Retro"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 text-white font-mono text-xs">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
        <span>WRITING DISK...</span>
      </div>
    ),
    code: `export const RetroFloppyDiskWriterLED = () => (
  <div className="p-4 border rounded-2xl">Retro Floppy Disk Writer LED</div>
);`
  },
  {
    id: 'loaders-20',
    title: 'Terminal Hex Code Ingestion Stream',
    category: 'loaders',
    badge: 'HEX',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Terminal","Hex","Stream"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="font-mono text-[10px] text-emerald-400 bg-black/80 px-2 py-1 rounded">
        0x7F...SYNCING
      </div>
    ),
    code: `export const TerminalHexCodeIngestionStream = () => (
  <div className="p-4 border rounded-2xl">Terminal Hex Code Ingestion Stream</div>
);`
  },
  {
    id: 'loaders-21',
    title: 'Orbiting Solar Planetary Satellite',
    category: 'loaders',
    badge: 'PLANET',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Planet","Solar","Orbit"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-amber-400 shadow-md" />
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 flex items-start justify-center">
          <div className="w-2 h-2 rounded-full bg-cyan-400" />
        </motion.div>
      </div>
    ),
    code: `export const OrbitingSolarPlanetarySatellite = () => (
  <div className="p-4 border rounded-2xl">Orbiting Solar Planetary Satellite</div>
);`
  },
  {
    id: 'loaders-22',
    title: 'Calm Ripple Expanding Water Drop',
    category: 'loaders',
    badge: 'RIPPLE',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Ripple","Water","Calm"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="relative w-10 h-10 flex items-center justify-center">
        <span className="w-full h-full rounded-full border border-sky-400 animate-ping absolute" />
        <span className="w-3 h-3 rounded-full bg-sky-500" />
      </div>
    ),
    code: `export const CalmRippleExpandingWaterDrop = () => (
  <div className="p-4 border rounded-2xl">Calm Ripple Expanding Water Drop</div>
);`
  },
  {
    id: 'loaders-23',
    title: 'Interlocked Rotating Gears Duo',
    category: 'loaders',
    badge: 'GEARS',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Gears","Cog","Engine"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex items-center gap-1">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
          <RotateCw className="w-5 h-5 text-indigo-500" />
        </motion.div>
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
          <RotateCw className="w-4 h-4 text-cyan-400" />
        </motion.div>
      </div>
    ),
    code: `export const InterlockedRotatingGearsDuo = () => (
  <div className="p-4 border rounded-2xl">Interlocked Rotating Gears Duo</div>
);`
  },
  {
    id: 'loaders-24',
    title: 'Battery Fast Pulse Charging Bolt',
    category: 'loaders',
    badge: 'BATTERY',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Battery","Charge","Bolt"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex items-center gap-1.5 font-mono text-xs text-emerald-500 font-bold">
        <Zap className="w-4 h-4 fill-emerald-500 animate-bounce" />
        <span>CHARGING</span>
      </div>
    ),
    code: `export const BatteryFastPulseChargingBolt = () => (
  <div className="p-4 border rounded-2xl">Battery Fast Pulse Charging Bolt</div>
);`
  },
  {
    id: 'loaders-25',
    title: 'Inertial Fidget Spinner Tri-Blade',
    category: 'loaders',
    badge: 'SPINNER',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Fidget","Spinner","Inertial"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} className="w-8 h-8 rounded-full border-4 border-indigo-600 border-t-transparent" />
    ),
    code: `export const InertialFidgetSpinnerTriBlade = () => (
  <div className="p-4 border rounded-2xl">Inertial Fidget Spinner Tri-Blade</div>
);`
  },
  {
    id: 'loaders-26',
    title: 'Laser Scanning Barcode Reader',
    category: 'loaders',
    badge: 'SCANNER',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Laser","Barcode","Scan"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="relative w-28 h-6 bg-slate-900 rounded flex items-center justify-center overflow-hidden font-mono text-[9px] text-slate-400">
        <span>||| || ||| ||</span>
        <motion.div animate={{ x: [-50, 50, -50] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-y-0 w-1 bg-rose-500 shadow-[0_0_8px_#f43f5e]" />
      </div>
    ),
    code: `export const LaserScanningBarcodeReader = () => (
  <div className="p-4 border rounded-2xl">Laser Scanning Barcode Reader</div>
);`
  },
  {
    id: 'loaders-27',
    title: 'Figure-8 Figure Particle Track',
    category: 'loaders',
    badge: 'FIGURE8',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Figure8","Particle","Track"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="font-mono text-sm font-black text-fuchsia-500 animate-pulse">
        8-LOOP LOADING
      </div>
    ),
    code: `export const FigureFigureParticleTrack = () => (
  <div className="p-4 border rounded-2xl">Figure-8 Figure Particle Track</div>
);`
  },
  {
    id: 'loaders-28',
    title: 'Ping Pong Bouncing Ricochet',
    category: 'loaders',
    badge: 'PONG',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Pong","Bounce","Retro"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-24 h-6 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 relative overflow-hidden flex items-center">
        <motion.div animate={{ x: [0, 70, 0] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-3 h-3 rounded-full bg-indigo-600" />
      </div>
    ),
    code: `export const PingPongBouncingRicochet = () => (
  <div className="p-4 border rounded-2xl">Ping Pong Bouncing Ricochet</div>
);`
  },
  {
    id: 'loaders-29',
    title: 'Circular Dashed Tachometer Ring',
    category: 'loaders',
    badge: 'TACH',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Tachometer","Speed","Ring"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-10 h-10 rounded-full border-2 border-indigo-500 border-dashed animate-[spin_4s_linear_infinite]" />
    ),
    code: `export const CircularDashedTachometerRing = () => (
  <div className="p-4 border rounded-2xl">Circular Dashed Tachometer Ring</div>
);`
  },
  {
    id: 'loaders-30',
    title: 'Origami Cube 3D Fold Sequence',
    category: 'loaders',
    badge: 'ORIGAMI',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Origami","Cube","Fold"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <motion.div animate={{ scale: [1, 0.7, 1], rotate: [0, 180, 360] }} transition={{ duration: 2, repeat: Infinity }} className="w-7 h-7 bg-indigo-600 rounded-md" />
    ),
    code: `export const OrigamiCubeDFoldSequence = () => (
  <div className="p-4 border rounded-2xl">Origami Cube 3D Fold Sequence</div>
);`
  },
  {
    id: 'loaders-31',
    title: 'Digital Clock Matrix Scrambler',
    category: 'loaders',
    badge: 'MATRIX',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Clock","Matrix","Scramble"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="font-mono text-xs font-bold text-cyan-400 bg-neutral-950 px-2 py-1 rounded">
        SYNCING_TIMESTAMP
      </div>
    ),
    code: `export const DigitalClockMatrixScrambler = () => (
  <div className="p-4 border rounded-2xl">Digital Clock Matrix Scrambler</div>
);`
  },
  {
    id: 'loaders-32',
    title: 'Sine Wave Floating Undulation',
    category: 'loaders',
    badge: 'SINE',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Sine","Wave","Ocean"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex gap-1 items-center">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div key={i} animate={{ y: [-4, 4, -4] }} transition={{ duration: 0.6, delay: i * 0.1, repeat: Infinity }} className="w-1.5 h-4 bg-cyan-400 rounded-full" />
        ))}
      </div>
    ),
    code: `export const SineWaveFloatingUndulation = () => (
  <div className="p-4 border rounded-2xl">Sine Wave Floating Undulation</div>
);`
  },
  {
    id: 'loaders-33',
    title: 'Firefly Jar Ambient Glowing Embers',
    category: 'loaders',
    badge: 'FIREFLY',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Firefly","Ember","Glow"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex gap-2 items-center">
        <motion.span animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity }} className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
        <motion.span animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, delay: 0.5, repeat: Infinity }} className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
      </div>
    ),
    code: `export const FireflyJarAmbientGlowingEmbers = () => (
  <div className="p-4 border rounded-2xl">Firefly Jar Ambient Glowing Embers</div>
);`
  },
  {
    id: 'loaders-34',
    title: 'Zen Mindfulness Breathing Circle',
    category: 'loaders',
    badge: 'ZEN',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Zen","Mindful","Breathe"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <motion.div animate={{ scale: [0.8, 1.3, 0.8] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} className="w-9 h-9 rounded-full bg-indigo-500/30 border border-indigo-400 flex items-center justify-center text-[8px] font-mono font-bold text-indigo-300">
        BREATHE
      </motion.div>
    ),
    code: `export const ZenMindfulnessBreathingCircle = () => (
  <div className="p-4 border rounded-2xl">Zen Mindfulness Breathing Circle</div>
);`
  },
  {
    id: 'loaders-35',
    title: 'Diamond Crystal Facet Rotation',
    category: 'loaders',
    badge: 'DIAMOND',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Diamond","Crystal","Luxury"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} className="w-7 h-7 border-2 border-cyan-300 rotate-45 shadow-[0_0_10px_#67e8f9]" />
    ),
    code: `export const DiamondCrystalFacetRotation = () => (
  <div className="p-4 border rounded-2xl">Diamond Crystal Facet Rotation</div>
);`
  },
  {
    id: 'loaders-36',
    title: 'Snake Arcade Segment Crawl',
    category: 'loaders',
    badge: 'SNAKE',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Snake","Retro","Arcade"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex gap-1">
        <div className="w-2 h-2 bg-emerald-500 rounded-xs" />
        <div className="w-2 h-2 bg-emerald-500/70 rounded-xs" />
        <div className="w-2 h-2 bg-emerald-500/40 rounded-xs" />
      </div>
    ),
    code: `export const SnakeArcadeSegmentCrawl = () => (
  <div className="p-4 border rounded-2xl">Snake Arcade Segment Crawl</div>
);`
  },
  {
    id: 'loaders-37',
    title: 'iOS Message Typing Bubble Stream',
    category: 'loaders',
    badge: 'TYPING',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Typing","iOS","Chat"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="px-3 py-2 rounded-2xl bg-slate-200 dark:bg-white/10 flex gap-1 items-center">
        <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" />
        <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
        <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
      </div>
    ),
    code: `export const iOSMessageTypingBubbleStream = () => (
  <div className="p-4 border rounded-2xl">iOS Message Typing Bubble Stream</div>
);`
  },
  {
    id: 'loaders-38',
    title: 'WiFi Searching Animated Arcs',
    category: 'loaders',
    badge: 'WIFI',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["WiFi","Network","Signal"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-bold">
        <Wifi className="w-5 h-5 animate-pulse" />
        <span>SEARCHING</span>
      </div>
    ),
    code: `export const WiFiSearchingAnimatedArcs = () => (
  <div className="p-4 border rounded-2xl">WiFi Searching Animated Arcs</div>
);`
  },
  {
    id: 'loaders-39',
    title: 'Magnetic Compass Needle Shiver',
    category: 'loaders',
    badge: 'COMPASS',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Compass","Magnetic","Shiver"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <motion.div animate={{ rotate: [-15, 15, -15] }} transition={{ duration: 1, repeat: Infinity }}>
        <Compass className="w-6 h-6 text-indigo-500" />
      </motion.div>
    ),
    code: `export const MagneticCompassNeedleShiver = () => (
  <div className="p-4 border rounded-2xl">Magnetic Compass Needle Shiver</div>
);`
  },
  {
    id: 'loaders-40',
    title: 'Starfield Warp Speed Streak',
    category: 'loaders',
    badge: 'WARPSPEED',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["WarpSpeed","Stars","Space"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex gap-2 items-center font-mono text-xs text-amber-400 font-bold">
        <span>WARP SPEED</span>
        <span className="w-6 h-0.5 bg-amber-400 animate-pulse" />
      </div>
    ),
    code: `export const StarfieldWarpSpeedStreak = () => (
  <div className="p-4 border rounded-2xl">Starfield Warp Speed Streak</div>
);`
  },
  {
    id: 'loaders-41',
    title: 'Sacred Triangle Delta Prism',
    category: 'loaders',
    badge: 'DELTA',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Delta","Prism","Sacred"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }} className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-fuchsia-500" />
    ),
    code: `export const SacredTriangleDeltaPrism = () => (
  <div className="p-4 border rounded-2xl">Sacred Triangle Delta Prism</div>
);`
  },
  {
    id: 'loaders-42',
    title: 'Yin Yang Duality Rotation',
    category: 'loaders',
    badge: 'YINYANG',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["YinYang","Duality","Balance"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="w-8 h-8 rounded-full border-2 border-slate-900 dark:border-white border-t-transparent" />
    ),
    code: `export const YinYangDualityRotation = () => (
  <div className="p-4 border rounded-2xl">Yin Yang Duality Rotation</div>
);`
  },
  {
    id: 'loaders-43',
    title: 'ECG Electrocardiogram Pulse EKG',
    category: 'loaders',
    badge: 'ECG',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["ECG","Pulse","Heart"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex items-center gap-1.5 text-xs font-mono text-rose-500 font-bold">
        <Activity className="w-5 h-5 animate-pulse" />
        <span>VITAL SYNC</span>
      </div>
    ),
    code: `export const ECGElectrocardiogramPulseEKG = () => (
  <div className="p-4 border rounded-2xl">ECG Electrocardiogram Pulse EKG</div>
);`
  },
  {
    id: 'loaders-44',
    title: 'Shuffling Playing Cards Deck',
    category: 'loaders',
    badge: 'SHUFFLE',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Shuffle","Cards","Deck"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="relative w-8 h-8">
        <motion.div animate={{ x: [-4, 4, -4] }} transition={{ duration: 0.8, repeat: Infinity }} className="absolute inset-0 rounded bg-indigo-500 shadow" />
        <div className="absolute inset-0 rounded bg-purple-500 shadow-sm" />
      </div>
    ),
    code: `export const ShufflingPlayingCardsDeck = () => (
  <div className="p-4 border rounded-2xl">Shuffling Playing Cards Deck</div>
);`
  },
  {
    id: 'loaders-45',
    title: 'Target Crosshair Lock Acquisition',
    category: 'loaders',
    badge: 'CROSSHAIR',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Crosshair","Lock","Target"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="relative w-9 h-9 flex items-center justify-center">
        <div className="absolute inset-0 border border-cyan-400 rounded-full animate-ping" />
        <span className="w-2 h-2 rounded-full bg-cyan-400" />
      </div>
    ),
    code: `export const TargetCrosshairLockAcquisition = () => (
  <div className="p-4 border rounded-2xl">Target Crosshair Lock Acquisition</div>
);`
  },
  {
    id: 'loaders-46',
    title: 'Kaleidoscope Prismatic Floral Spin',
    category: 'loaders',
    badge: 'KALEIDO',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Kaleidoscope","Prism","Floral"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }} className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 via-emerald-400 to-indigo-500 blur-xs" />
    ),
    code: `export const KaleidoscopePrismaticFloralSpin = () => (
  <div className="p-4 border rounded-2xl">Kaleidoscope Prismatic Floral Spin</div>
);`
  },
  {
    id: 'loaders-47',
    title: 'Barcode Laser Scanning Ray',
    category: 'loaders',
    badge: 'BARCODE',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Barcode","Laser","Ray"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="font-mono text-xs text-rose-500 font-bold tracking-widest animate-pulse">
        SCANNING_BARCODE
      </div>
    ),
    code: `export const BarcodeLaserScanningRay = () => (
  <div className="p-4 border rounded-2xl">Barcode Laser Scanning Ray</div>
);`
  },
  {
    id: 'loaders-48',
    title: 'Satellite Space Station Beacon',
    category: 'loaders',
    badge: 'SATELLITE',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Satellite","Orbit","Space"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex items-center gap-1.5 font-mono text-xs text-indigo-400 font-bold">
        <Radio className="w-4 h-4 animate-ping" />
        <span>UPLINK 100%</span>
      </div>
    ),
    code: `export const SatelliteSpaceStationBeacon = () => (
  <div className="p-4 border rounded-2xl">Satellite Space Station Beacon</div>
);`
  },
  {
    id: 'loaders-49',
    title: 'Pendulum Wave Multi-Dot Swing',
    category: 'loaders',
    badge: 'PENDULUM',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Pendulum","Wave","Dots"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <motion.div key={i} animate={{ y: [-6, 6, -6] }} transition={{ duration: 0.5 + i * 0.1, repeat: Infinity }} className="w-2 h-2 rounded-full bg-cyan-400" />
        ))}
      </div>
    ),
    code: `export const PendulumWaveMultiDotSwing = () => (
  <div className="p-4 border rounded-2xl">Pendulum Wave Multi-Dot Swing</div>
);`
  },
  {
    id: 'loaders-50',
    title: 'Singularity Black Hole Collapse',
    category: 'loaders',
    badge: 'SINGULARITY',
    description: 'Distinctive interactive loaders widget with customized visual physics.',
    tags: ["Singularity","BlackHole","Gravity"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="relative w-10 h-10 flex items-center justify-center">
        <motion.div animate={{ scale: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-full h-full rounded-full bg-indigo-600/30" />
        <div className="w-3 h-3 rounded-full bg-black dark:bg-white shadow-xl z-10" />
      </div>
    ),
    code: `export const SingularityBlackHoleCollapse = () => (
  <div className="p-4 border rounded-2xl">Singularity Black Hole Collapse</div>
);`
  },
];
