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

export const badgesData = [
  {
    id: 'badges-01',
    title: 'Interactive Dynamic Island HUD',
    category: 'badges',
    badge: 'ISLAND',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Island","Apple","HUD"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="px-4 py-1.5 rounded-full bg-black text-white text-xs font-mono flex items-center gap-2.5 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-bold">AirPods Pro</span>
        <span className="text-slate-400 text-[10px]">98%</span>
      </div>
    ),
    code: `export const InteractiveDynamicIslandHUD = () => (
  <div className="p-3 border rounded-xl">Interactive Dynamic Island HUD</div>
);`
  },
  {
    id: 'badges-02',
    title: 'Sonar Radar Live Beacon',
    category: 'badges',
    badge: 'RADAR',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Sonar","Radar","Beacon"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>SYS_HEALTH 99.9%</span>
      </div>
    ),
    code: `export const SonarRadarLiveBeacon = () => (
  <div className="p-3 border rounded-xl">Sonar Radar Live Beacon</div>
);`
  },
  {
    id: 'badges-03',
    title: 'Cosmic Stardust Particle Pill',
    category: 'badges',
    badge: 'STARDUST',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Cosmic","Stardust","Stars"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="px-3.5 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-xs text-purple-200 flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
        <span className="font-medium">Cosmic Stardust</span>
      </div>
    ),
    code: `export const CosmicStardustParticlePill = () => (
  <div className="p-3 border rounded-xl">Cosmic Stardust Particle Pill</div>
);`
  },
  {
    id: 'badges-04',
    title: 'Git Branch Version Tag',
    category: 'badges',
    badge: 'GIT',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Git","Branch","Version"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300">
        <GitBranch className="w-3.5 h-3.5 text-emerald-500" />
        <span>main: <strong className="text-emerald-500">v4.2.0</strong></span>
      </div>
    ),
    code: `export const GitBranchVersionTag = () => (
  <div className="p-3 border rounded-xl">Git Branch Version Tag</div>
);`
  },
  {
    id: 'badges-05',
    title: 'SOC2 Certified Security Shield',
    category: 'badges',
    badge: 'SOC2',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Security","SOC2","Enterprise"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-xs text-indigo-700 dark:text-indigo-300 font-medium">
        <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
        <span>SOC2 Type II</span>
      </div>
    ),
    code: `export const SOCCertifiedSecurityShield = () => (
  <div className="p-3 border rounded-xl">SOC2 Certified Security Shield</div>
);`
  },
  {
    id: 'badges-06',
    title: 'Live Audio Recording Wave Pill',
    category: 'badges',
    badge: 'RECORD',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Audio","Recording","Live"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-500 text-xs font-mono">
        <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
        <span className="font-bold">REC 48kHz</span>
      </div>
    ),
    code: `export const LiveAudioRecordingWavePill = () => (
  <div className="p-3 border rounded-xl">Live Audio Recording Wave Pill</div>
);`
  },
  {
    id: 'badges-07',
    title: 'Hot Trending Flame Pill',
    category: 'badges',
    badge: 'TRENDING',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Trending","Hot","Flame"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold font-mono">
        <Flame className="w-3.5 h-3.5 fill-amber-500" />
        <span>HOT 10k+</span>
      </div>
    ),
    code: `export const HotTrendingFlamePill = () => (
  <div className="p-3 border rounded-xl">Hot Trending Flame Pill</div>
);`
  },
  {
    id: 'badges-08',
    title: 'Verified Pro Developer Checkmark',
    category: 'badges',
    badge: 'VERIFIED',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Verified","Check","Pro"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-500/10 border border-sky-300 dark:border-sky-500/30 text-sky-600 dark:text-sky-400 text-xs font-bold">
        <CheckCircle className="w-3.5 h-3.5 fill-sky-500 text-white" />
        <span>Verified Engineer</span>
      </div>
    ),
    code: `export const VerifiedProDeveloperCheckmark = () => (
  <div className="p-3 border rounded-xl">Verified Pro Developer Checkmark</div>
);`
  },
  {
    id: 'badges-09',
    title: 'AI Active Copilot Sparkle Chip',
    category: 'badges',
    badge: 'COPILOT',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["AI","Copilot","Sparkle"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-fuchsia-50 dark:bg-fuchsia-500/10 border border-fuchsia-300 dark:border-fuchsia-500/30 text-fuchsia-600 dark:text-fuchsia-400 text-xs font-mono font-bold">
        <Sparkles className="w-3 h-3 text-fuchsia-500" />
        <span>AI Copilot Active</span>
      </div>
    ),
    code: `export const AIActiveCopilotSparkleChip = () => (
  <div className="p-3 border rounded-xl">AI Active Copilot Sparkle Chip</div>
);`
  },
  {
    id: 'badges-10',
    title: 'Ultra Low Latency 4ms Ping',
    category: 'badges',
    badge: 'LATENCY',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Network","Ping","Latency"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-mono font-bold border border-emerald-500/20">
        <Wifi className="w-3.5 h-3.5" />
        <span>4ms PTT Edge</span>
      </div>
    ),
    code: `export const UltraLowLatencymsPing = () => (
  <div className="p-3 border rounded-xl">Ultra Low Latency 4ms Ping</div>
);`
  },
  {
    id: 'badges-11',
    title: 'Cyberpunk Cut-Corner Neon Tag',
    category: 'badges',
    badge: 'CYBER',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Cyber","CutCorner","Neon"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="px-3 py-1 bg-cyan-950 border border-cyan-400 text-cyan-400 text-xs font-mono font-bold [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,8px_100%,0_calc(100%-8px))]">
        SYS_OVERRIDE
      </div>
    ),
    code: `export const CyberpunkCutCornerNeonTag = () => (
  <div className="p-3 border rounded-xl">Cyberpunk Cut-Corner Neon Tag</div>
);`
  },
  {
    id: 'badges-12',
    title: 'Apple Frosted Translucent Glass Pill',
    category: 'badges',
    badge: 'GLASS',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Apple","Glass","Translucent"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="px-3.5 py-1 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/20 text-xs font-medium text-slate-800 dark:text-white shadow-sm">
        Frosted Translucent
      </div>
    ),
    code: `export const AppleFrostedTranslucentGlassPill = () => (
  <div className="p-3 border rounded-xl">Apple Frosted Translucent Glass Pill</div>
);`
  },
  {
    id: 'badges-13',
    title: 'Neumorphic Soft Inset Status Dot',
    category: 'badges',
    badge: 'NEUMORPHIC',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Neumorphic","Soft","Inset"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="px-3 py-1 rounded-full bg-slate-100 dark:bg-neutral-800 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1),inset_-2px_-2px_4px_rgba(255,255,255,0.7)] dark:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
        <span className="w-2 h-2 rounded-full bg-indigo-500" />
        <span>NEU_STATUS</span>
      </div>
    ),
    code: `export const NeumorphicSoftInsetStatusDot = () => (
  <div className="p-3 border rounded-xl">Neumorphic Soft Inset Status Dot</div>
);`
  },
  {
    id: 'badges-14',
    title: 'Eco Energy Saver Green Badge',
    category: 'badges',
    badge: 'ECO',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Eco","Green","Energy"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
        <span>🌱</span>
        <span>Eco Saver 0W</span>
      </div>
    ),
    code: `export const EcoEnergySaverGreenBadge = () => (
  <div className="p-3 border rounded-xl">Eco Energy Saver Green Badge</div>
);`
  },
  {
    id: 'badges-15',
    title: 'Experimental Beta Flask Chip',
    category: 'badges',
    badge: 'BETA',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Beta","Lab","Experimental"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-mono font-bold">
        <span>🧪</span>
        <span>BETA LABS</span>
      </div>
    ),
    code: `export const ExperimentalBetaFlaskChip = () => (
  <div className="p-3 border rounded-xl">Experimental Beta Flask Chip</div>
);`
  },
  {
    id: 'badges-16',
    title: 'Live Crypto Currency BTC/USD Pill',
    category: 'badges',
    badge: 'CRYPTO',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Crypto","BTC","Ticker"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-mono flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-amber-400" />
        <span>BTC $94.8k</span>
      </div>
    ),
    code: `export const LiveCryptoCurrencyBTCUSDPill = () => (
  <div className="p-3 border rounded-xl">Live Crypto Currency BTC/USD Pill</div>
);`
  },
  {
    id: 'badges-17',
    title: 'Neu-Brutalist Boxy Black Border Tag',
    category: 'badges',
    badge: 'BRUTALIST',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Brutalist","Border","Pop"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="px-3 py-0.5 bg-yellow-300 text-black font-mono font-black text-xs border-2 border-black shadow-[2px_2px_0px_#000]">
        POP BRUTAL
      </div>
    ),
    code: `export const NeuBrutalistBoxyBlackBorderTag = () => (
  <div className="p-3 border rounded-xl">Neu-Brutalist Boxy Black Border Tag</div>
);`
  },
  {
    id: 'badges-18',
    title: 'Holographic Metallic Foil Pill',
    category: 'badges',
    badge: 'HOLO',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Holo","Foil","Gradient"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="px-3.5 py-1 rounded-full bg-gradient-to-r from-pink-500 via-indigo-500 to-cyan-400 text-white text-xs font-bold shadow-md">
        Holo Foil Matrix
      </div>
    ),
    code: `export const HolographicMetallicFoilPill = () => (
  <div className="p-3 border rounded-xl">Holographic Metallic Foil Pill</div>
);`
  },
  {
    id: 'badges-19',
    title: 'VIP Gold Crown Luxury Badge',
    category: 'badges',
    badge: 'VIP',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["VIP","Gold","Crown"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs font-bold">
        <span>👑</span>
        <span>VIP Founder</span>
      </div>
    ),
    code: `export const VIPGoldCrownLuxuryBadge = () => (
  <div className="p-3 border rounded-xl">VIP Gold Crown Luxury Badge</div>
);`
  },
  {
    id: 'badges-20',
    title: 'Online Live Agent Support Beacon',
    category: 'badges',
    badge: 'SUPPORT',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Support","Agent","Beacon"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>Support Online</span>
      </div>
    ),
    code: `export const OnlineLiveAgentSupportBeacon = () => (
  <div className="p-3 border rounded-xl">Online Live Agent Support Beacon</div>
);`
  },
  {
    id: 'badges-21',
    title: 'Dark Mode Moon Crescent Indicator',
    category: 'badges',
    badge: 'DARKMODE',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Moon","Theme","Indicator"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-indigo-300 text-xs font-mono">
        <Moon className="w-3.5 h-3.5" />
        <span>Dark Active</span>
      </div>
    ),
    code: `export const DarkModeMoonCrescentIndicator = () => (
  <div className="p-3 border rounded-xl">Dark Mode Moon Crescent Indicator</div>
);`
  },
  {
    id: 'badges-22',
    title: 'Sound Equalizer Active Audio Pill',
    category: 'badges',
    badge: 'EQUALIZER',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Audio","Sound","Wave"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-mono">
        <Volume2 className="w-3.5 h-3.5" />
        <span>EQ 100%</span>
      </div>
    ),
    code: `export const SoundEqualizerActiveAudioPill = () => (
  <div className="p-3 border rounded-xl">Sound Equalizer Active Audio Pill</div>
);`
  },
  {
    id: 'badges-23',
    title: 'Shopping Discount -50% Off Tag',
    category: 'badges',
    badge: 'DISCOUNT',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Sale","Discount","Coupon"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="px-2.5 py-0.5 rounded-full bg-rose-600 text-white text-[11px] font-black font-mono tracking-wider">
        -50% SALE
      </div>
    ),
    code: `export const ShoppingDiscountOffTag = () => (
  <div className="p-3 border rounded-xl">Shopping Discount -50% Off Tag</div>
);`
  },
  {
    id: 'badges-24',
    title: 'New Release Sparkle Glow Pill',
    category: 'badges',
    badge: 'NEW',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["New","Release","Sparkle"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="px-3 py-1 rounded-full bg-indigo-500 text-white text-xs font-bold flex items-center gap-1 shadow-md">
        <Sparkles className="w-3 h-3" />
        <span>NEW v4.0</span>
      </div>
    ),
    code: `export const NewReleaseSparkleGlowPill = () => (
  <div className="p-3 border rounded-xl">New Release Sparkle Glow Pill</div>
);`
  },
  {
    id: 'badges-25',
    title: '24/7 Uptime Cluster Pill',
    category: 'badges',
    badge: 'UPTIME',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Cluster","Uptime","Server"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-emerald-500 font-bold">
        99.999% SLA
      </div>
    ),
    code: `export const UptimeClusterPill = () => (
  <div className="p-3 border rounded-xl">24/7 Uptime Cluster Pill</div>
);`
  },
  {
    id: 'badges-26',
    title: 'Security Threat Blocked Shield Badge',
    category: 'badges',
    badge: 'SHIELD',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Security","Threat","Blocked"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-500/10 border border-rose-300 dark:border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs font-bold">
        <Shield className="w-3.5 h-3.5" />
        <span>0 Threats Found</span>
      </div>
    ),
    code: `export const SecurityThreatBlockedShieldBadge = () => (
  <div className="p-3 border rounded-xl">Security Threat Blocked Shield Badge</div>
);`
  },
  {
    id: 'badges-27',
    title: 'High Performance Turbo Boost Pill',
    category: 'badges',
    badge: 'TURBO',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Turbo","Boost","Fast"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-black font-mono">
        <Zap className="w-3.5 h-3.5 fill-black" />
        <span>TURBO BOOST</span>
      </div>
    ),
    code: `export const HighPerformanceTurboBoostPill = () => (
  <div className="p-3 border rounded-xl">High Performance Turbo Boost Pill</div>
);`
  },
  {
    id: 'badges-28',
    title: 'Multi-Tenant Organization Switcher Tag',
    category: 'badges',
    badge: 'TENANT',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Tenant","Org","Enterprise"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300">
        <Users className="w-3.5 h-3.5 text-indigo-500" />
        <span>Acme Corp</span>
      </div>
    ),
    code: `export const MultiTenantOrganizationSwitcherTag = () => (
  <div className="p-3 border rounded-xl">Multi-Tenant Organization Switcher Tag</div>
);`
  },
  {
    id: 'badges-29',
    title: 'Step Completed Checkmark Pill',
    category: 'badges',
    badge: 'DONE',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Check","Completed","Done"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold shadow-sm">
        <Check className="w-3.5 h-3.5" />
        <span>Completed</span>
      </div>
    ),
    code: `export const StepCompletedCheckmarkPill = () => (
  <div className="p-3 border rounded-xl">Step Completed Checkmark Pill</div>
);`
  },
  {
    id: 'badges-30',
    title: 'Warning Amber Alert Tri-Pill',
    category: 'badges',
    badge: 'WARN',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Warning","Amber","Alert"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-bold font-mono">
        <AlertTriangle className="w-3.5 h-3.5" />
        <span>Attention Req</span>
      </div>
    ),
    code: `export const WarningAmberAlertTriPill = () => (
  <div className="p-3 border rounded-xl">Warning Amber Alert Tri-Pill</div>
);`
  },
  {
    id: 'badges-31',
    title: 'GPS Coordinates Geotag Pill',
    category: 'badges',
    badge: 'GEO',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["GPS","Location","Geotag"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300">
        <MapPin className="w-3.5 h-3.5 text-rose-500" />
        <span>37.7749° N</span>
      </div>
    ),
    code: `export const GPSCoordinatesGeotagPill = () => (
  <div className="p-3 border rounded-xl">GPS Coordinates Geotag Pill</div>
);`
  },
  {
    id: 'badges-32',
    title: 'Speed Dial 5G Ultrawide Beacon',
    category: 'badges',
    badge: '5G',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["5G","Speed","Wireless"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="px-3 py-1 rounded-full bg-indigo-900/60 border border-indigo-400 text-indigo-200 text-xs font-mono font-bold flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>5G UW ACTIVE</span>
      </div>
    ),
    code: `export const SpeedDialGUltrawideBeacon = () => (
  <div className="p-3 border rounded-xl">Speed Dial 5G Ultrawide Beacon</div>
);`
  },
  {
    id: 'badges-33',
    title: 'Open Source MIT License Tag',
    category: 'badges',
    badge: 'MIT',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["MIT","License","OpenSource"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="px-2.5 py-0.5 rounded-md bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-slate-200 font-mono text-xs font-bold">
        MIT License
      </div>
    ),
    code: `export const OpenSourceMITLicenseTag = () => (
  <div className="p-3 border rounded-xl">Open Source MIT License Tag</div>
);`
  },
  {
    id: 'badges-34',
    title: 'Read Time 4 Min Book Badge',
    category: 'badges',
    badge: 'READTIME',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Read","Time","Article"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 text-xs font-medium">
        <Clock className="w-3.5 h-3.5" />
        <span>4 min read</span>
      </div>
    ),
    code: `export const ReadTimeMinBookBadge = () => (
  <div className="p-3 border rounded-xl">Read Time 4 Min Book Badge</div>
);`
  },
  {
    id: 'badges-35',
    title: 'Download Offline Ready Pill',
    category: 'badges',
    badge: 'OFFLINE',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Offline","Download","Cache"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-medium">
        <Download className="w-3.5 h-3.5" />
        <span>Offline Cached</span>
      </div>
    ),
    code: `export const DownloadOfflineReadyPill = () => (
  <div className="p-3 border rounded-xl">Download Offline Ready Pill</div>
);`
  },
  {
    id: 'badges-36',
    title: 'Star Rating 4.9/5 Review Pill',
    category: 'badges',
    badge: 'RATING',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Review","Stars","Rating"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-bold font-mono">
        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        <span>4.9 (2.4k)</span>
      </div>
    ),
    code: `export const StarRatingReviewPill = () => (
  <div className="p-3 border rounded-xl">Star Rating 4.9/5 Review Pill</div>
);`
  },
  {
    id: 'badges-37',
    title: 'Zero Downtime Deploy Badge',
    category: 'badges',
    badge: 'DEPLOY',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Deploy","DevOps","ZeroDowntime"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm">
        <CheckCircle2 className="w-3.5 h-3.5" />
        <span>Zero Downtime</span>
      </div>
    ),
    code: `export const ZeroDowntimeDeployBadge = () => (
  <div className="p-3 border rounded-xl">Zero Downtime Deploy Badge</div>
);`
  },
  {
    id: 'badges-38',
    title: 'Secret Encrypted E2E Key Pill',
    category: 'badges',
    badge: 'ENCRYPTED',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Crypto","Key","Lock"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono">
        <Lock className="w-3.5 h-3.5" />
        <span>E2E Encrypted</span>
      </div>
    ),
    code: `export const SecretEncryptedEEKeyPill = () => (
  <div className="p-3 border rounded-xl">Secret Encrypted E2E Key Pill</div>
);`
  },
  {
    id: 'badges-39',
    title: 'Web3 Gas Price 15 Gwei Gas Tag',
    category: 'badges',
    badge: 'GAS',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Web3","Gas","Ethereum"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-cyan-300 text-xs font-mono font-bold">
        <span>⛽</span>
        <span>15 Gwei Fast</span>
      </div>
    ),
    code: `export const WebGasPriceGweiGasTag = () => (
  <div className="p-3 border rounded-xl">Web3 Gas Price 15 Gwei Gas Tag</div>
);`
  },
  {
    id: 'badges-40',
    title: 'CPU Thermal 42°C Thermal Badge',
    category: 'badges',
    badge: 'THERMAL',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Thermal","CPU","Hardware"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-cyan-500 font-bold">
        <Cpu className="w-3.5 h-3.5" />
        <span>42°C Optimal</span>
      </div>
    ),
    code: `export const CPUThermalCThermalBadge = () => (
  <div className="p-3 border rounded-xl">CPU Thermal 42°C Thermal Badge</div>
);`
  },
  {
    id: 'badges-41',
    title: 'Memory Quota 1.2 GB Usage Pill',
    category: 'badges',
    badge: 'RAM',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["RAM","Memory","Usage"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300">
        <Database className="w-3.5 h-3.5 text-indigo-500" />
        <span>1.2 / 16 GB</span>
      </div>
    ),
    code: `export const MemoryQuotaGBUsagePill = () => (
  <div className="p-3 border rounded-xl">Memory Quota 1.2 GB Usage Pill</div>
);`
  },
  {
    id: 'badges-42',
    title: 'Live Stream 1.4k Viewers Pill',
    category: 'badges',
    badge: 'STREAM',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Live","Stream","Viewers"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-600 text-white text-xs font-mono font-bold shadow-md">
        <Radio className="w-3.5 h-3.5 animate-pulse" />
        <span>1,420 LIVE</span>
      </div>
    ),
    code: `export const LiveStreamkViewersPill = () => (
  <div className="p-3 border rounded-xl">Live Stream 1.4k Viewers Pill</div>
);`
  },
  {
    id: 'badges-43',
    title: 'Multi-Language Global Locale Tag',
    category: 'badges',
    badge: 'LOCALE',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Locale","Language","Globe"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-300">
        <Globe className="w-3.5 h-3.5 text-indigo-500" />
        <span>EN • ES • FR</span>
      </div>
    ),
    code: `export const MultiLanguageGlobalLocaleTag = () => (
  <div className="p-3 border rounded-xl">Multi-Language Global Locale Tag</div>
);`
  },
  {
    id: 'badges-44',
    title: 'Biometric Passkey Verified Chip',
    category: 'badges',
    badge: 'PASSKEY',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Passkey","FIDO","Auth"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-medium">
        <Key className="w-3.5 h-3.5" />
        <span>FIDO2 Passkey</span>
      </div>
    ),
    code: `export const BiometricPasskeyVerifiedChip = () => (
  <div className="p-3 border rounded-xl">Biometric Passkey Verified Chip</div>
);`
  },
  {
    id: 'badges-45',
    title: 'Express Delivery Drone Pill',
    category: 'badges',
    badge: 'DRONE',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Drone","Shipping","Fast"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-slate-900 text-xs font-bold font-mono">
        <span>⚡ 1-Hour Air</span>
      </div>
    ),
    code: `export const ExpressDeliveryDronePill = () => (
  <div className="p-3 border rounded-xl">Express Delivery Drone Pill</div>
);`
  },
  {
    id: 'badges-46',
    title: 'Carbon Neutral Eco Leaf Tag',
    category: 'badges',
    badge: 'CARBON',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Carbon","Eco","Leaf"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-200 dark:border-emerald-500/20">
        <span>🍃 Carbon 0%</span>
      </div>
    ),
    code: `export const CarbonNeutralEcoLeafTag = () => (
  <div className="p-3 border rounded-xl">Carbon Neutral Eco Leaf Tag</div>
);`
  },
  {
    id: 'badges-47',
    title: 'Archived Read-Only Record Tag',
    category: 'badges',
    badge: 'ARCHIVE',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Archive","Record","Historical"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="px-2.5 py-0.5 rounded bg-slate-200 dark:bg-neutral-800 text-slate-600 dark:text-slate-400 font-mono text-xs">
        ARCHIVED_2025
      </div>
    ),
    code: `export const ArchivedReadOnlyRecordTag = () => (
  <div className="p-3 border rounded-xl">Archived Read-Only Record Tag</div>
);`
  },
  {
    id: 'badges-48',
    title: 'VIP Early Access Ticket Stub Badge',
    category: 'badges',
    badge: 'TICKET',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Ticket","VIP","Access"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="px-3 py-1 rounded-lg bg-gradient-to-r from-amber-500 to-rose-500 text-white text-xs font-mono font-bold shadow-md">
        🎟️ VIP ACCESS
      </div>
    ),
    code: `export const VIPEarlyAccessTicketStubBadge = () => (
  <div className="p-3 border rounded-xl">VIP Early Access Ticket Stub Badge</div>
);`
  },
  {
    id: 'badges-49',
    title: 'Admin Superuser Role Badge',
    category: 'badges',
    badge: 'ADMIN',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["Admin","Role","Superuser"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="px-3 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-500 text-xs font-mono font-black">
        ROOT // ADMIN
      </div>
    ),
    code: `export const AdminSuperuserRoleBadge = () => (
  <div className="p-3 border rounded-xl">Admin Superuser Role Badge</div>
);`
  },
  {
    id: 'badges-50',
    title: 'HTTP Status 200 OK Green Pill',
    category: 'badges',
    badge: 'HTTP200',
    description: 'Distinctive interactive badges widget with customized visual physics.',
    tags: ["HTTP","Status","API"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-mono font-bold">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <span>HTTP 200 OK</span>
      </div>
    ),
    code: `export const HTTPStatusOKGreenPill = () => (
  <div className="p-3 border rounded-xl">HTTP Status 200 OK Green Pill</div>
);`
  },
];
