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

export const navData = [
  {
    id: 'nav-01',
    title: 'macOS Interactive Spring Dock',
    category: 'nav',
    badge: 'HOT',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 p-2 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">{[Terminal, Shield, Zap, Star].map((I, i) => (<button key={i} onClick={() => playSound('pop')} className="p-2 rounded-xl bg-white dark:bg-[#141724] text-indigo-500 shadow-sm"><I className="w-4 h-4" /></button>))}</div>),
    code: `export const macOSInteractiveSpringDock = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">macOS Interactive Spring Dock</div>
);`
  },
  {
    id: 'nav-02',
    title: 'Ambient Glow Sliding Tab Bar',
    category: 'nav',
    badge: 'NEW',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
    const [t, setT] = useState('Overview');
    return (<div className="flex p-1 rounded-xl bg-slate-100 dark:bg-[#0c0e16] border border-slate-200 dark:border-white/10 text-xs">{['Overview', 'Metrics', 'Logs'].map(tab => (<button key={tab} onClick={() => { playSound('click'); setT(tab); }} className={`px-3 py-1 rounded-lg transition-colors ${t === tab ? 'bg-indigo-600 text-white font-medium' : 'text-slate-500'}`}>{tab}</button>))}</div>);
  },
    code: `export const AmbientGlowSlidingTabBar = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Ambient Glow Sliding Tab Bar</div>
);`
  },
  {
    id: 'nav-03',
    title: 'Floating Pill Bottom Navbar',
    category: 'nav',
    badge: '3D',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-4 px-4 py-2 rounded-full bg-slate-900 text-white text-xs shadow-xl"><Home className="w-4 h-4" /><Compass className="w-4 h-4" /><Bell className="w-4 h-4" /></div>),
    code: `export const FloatingPillBottomNavbar = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Floating Pill Bottom Navbar</div>
);`
  },
  {
    id: 'nav-04',
    title: 'Glass Breadcrumb Path Strip',
    category: 'nav',
    badge: 'PRO',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-500"><span>Home</span><span>/</span><span>UI</span><span>/</span><span className="text-indigo-500 font-bold">Widgets</span></div>),
    code: `export const GlassBreadcrumbPathStrip = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Glass Breadcrumb Path Strip</div>
);`
  },
  {
    id: 'nav-05',
    title: 'Nav Component #5',
    category: 'nav',
    badge: 'CYBER',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #5</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #5</div>
);`
  },
  {
    id: 'nav-06',
    title: 'Nav Component #6',
    category: 'nav',
    badge: 'POPULAR',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #6</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #6</div>
);`
  },
  {
    id: 'nav-07',
    title: 'Nav Component #7',
    category: 'nav',
    badge: 'TACTILE',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #7</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #7</div>
);`
  },
  {
    id: 'nav-08',
    title: 'Nav Component #8',
    category: 'nav',
    badge: 'CHIC',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #8</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #8</div>
);`
  },
  {
    id: 'nav-09',
    title: 'Nav Component #9',
    category: 'nav',
    badge: 'HOT',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #9</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #9</div>
);`
  },
  {
    id: 'nav-10',
    title: 'Nav Component #10',
    category: 'nav',
    badge: 'NEW',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #10</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #10</div>
);`
  },
  {
    id: 'nav-11',
    title: 'Nav Component #11',
    category: 'nav',
    badge: '3D',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #11</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #11</div>
);`
  },
  {
    id: 'nav-12',
    title: 'Nav Component #12',
    category: 'nav',
    badge: 'PRO',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #12</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #12</div>
);`
  },
  {
    id: 'nav-13',
    title: 'Nav Component #13',
    category: 'nav',
    badge: 'CYBER',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #13</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #13</div>
);`
  },
  {
    id: 'nav-14',
    title: 'Nav Component #14',
    category: 'nav',
    badge: 'POPULAR',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #14</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #14</div>
);`
  },
  {
    id: 'nav-15',
    title: 'Nav Component #15',
    category: 'nav',
    badge: 'TACTILE',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #15</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #15</div>
);`
  },
  {
    id: 'nav-16',
    title: 'Nav Component #16',
    category: 'nav',
    badge: 'CHIC',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #16</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #16</div>
);`
  },
  {
    id: 'nav-17',
    title: 'Nav Component #17',
    category: 'nav',
    badge: 'HOT',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #17</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #17</div>
);`
  },
  {
    id: 'nav-18',
    title: 'Nav Component #18',
    category: 'nav',
    badge: 'NEW',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #18</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #18</div>
);`
  },
  {
    id: 'nav-19',
    title: 'Nav Component #19',
    category: 'nav',
    badge: '3D',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #19</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #19</div>
);`
  },
  {
    id: 'nav-20',
    title: 'Nav Component #20',
    category: 'nav',
    badge: 'PRO',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #20</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #20</div>
);`
  },
  {
    id: 'nav-21',
    title: 'Nav Component #21',
    category: 'nav',
    badge: 'CYBER',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #21</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #21</div>
);`
  },
  {
    id: 'nav-22',
    title: 'Nav Component #22',
    category: 'nav',
    badge: 'POPULAR',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #22</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #22</div>
);`
  },
  {
    id: 'nav-23',
    title: 'Nav Component #23',
    category: 'nav',
    badge: 'TACTILE',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #23</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #23</div>
);`
  },
  {
    id: 'nav-24',
    title: 'Nav Component #24',
    category: 'nav',
    badge: 'CHIC',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #24</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #24</div>
);`
  },
  {
    id: 'nav-25',
    title: 'Nav Component #25',
    category: 'nav',
    badge: 'HOT',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #25</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #25</div>
);`
  },
  {
    id: 'nav-26',
    title: 'Nav Component #26',
    category: 'nav',
    badge: 'NEW',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #26</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #26</div>
);`
  },
  {
    id: 'nav-27',
    title: 'Nav Component #27',
    category: 'nav',
    badge: '3D',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #27</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #27</div>
);`
  },
  {
    id: 'nav-28',
    title: 'Nav Component #28',
    category: 'nav',
    badge: 'PRO',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #28</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #28</div>
);`
  },
  {
    id: 'nav-29',
    title: 'Nav Component #29',
    category: 'nav',
    badge: 'CYBER',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #29</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #29</div>
);`
  },
  {
    id: 'nav-30',
    title: 'Nav Component #30',
    category: 'nav',
    badge: 'POPULAR',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #30</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #30</div>
);`
  },
  {
    id: 'nav-31',
    title: 'Nav Component #31',
    category: 'nav',
    badge: 'TACTILE',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #31</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #31</div>
);`
  },
  {
    id: 'nav-32',
    title: 'Nav Component #32',
    category: 'nav',
    badge: 'CHIC',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #32</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #32</div>
);`
  },
  {
    id: 'nav-33',
    title: 'Nav Component #33',
    category: 'nav',
    badge: 'HOT',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #33</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #33</div>
);`
  },
  {
    id: 'nav-34',
    title: 'Nav Component #34',
    category: 'nav',
    badge: 'NEW',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #34</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #34</div>
);`
  },
  {
    id: 'nav-35',
    title: 'Nav Component #35',
    category: 'nav',
    badge: '3D',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #35</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #35</div>
);`
  },
  {
    id: 'nav-36',
    title: 'Nav Component #36',
    category: 'nav',
    badge: 'PRO',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #36</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #36</div>
);`
  },
  {
    id: 'nav-37',
    title: 'Nav Component #37',
    category: 'nav',
    badge: 'CYBER',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #37</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #37</div>
);`
  },
  {
    id: 'nav-38',
    title: 'Nav Component #38',
    category: 'nav',
    badge: 'POPULAR',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #38</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #38</div>
);`
  },
  {
    id: 'nav-39',
    title: 'Nav Component #39',
    category: 'nav',
    badge: 'TACTILE',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #39</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #39</div>
);`
  },
  {
    id: 'nav-40',
    title: 'Nav Component #40',
    category: 'nav',
    badge: 'CHIC',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #40</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #40</div>
);`
  },
  {
    id: 'nav-41',
    title: 'Nav Component #41',
    category: 'nav',
    badge: 'HOT',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #41</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #41</div>
);`
  },
  {
    id: 'nav-42',
    title: 'Nav Component #42',
    category: 'nav',
    badge: 'NEW',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #42</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #42</div>
);`
  },
  {
    id: 'nav-43',
    title: 'Nav Component #43',
    category: 'nav',
    badge: '3D',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #43</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #43</div>
);`
  },
  {
    id: 'nav-44',
    title: 'Nav Component #44',
    category: 'nav',
    badge: 'PRO',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #44</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #44</div>
);`
  },
  {
    id: 'nav-45',
    title: 'Nav Component #45',
    category: 'nav',
    badge: 'CYBER',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #45</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #45</div>
);`
  },
  {
    id: 'nav-46',
    title: 'Nav Component #46',
    category: 'nav',
    badge: 'POPULAR',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #46</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #46</div>
);`
  },
  {
    id: 'nav-47',
    title: 'Nav Component #47',
    category: 'nav',
    badge: 'TACTILE',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #47</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #47</div>
);`
  },
  {
    id: 'nav-48',
    title: 'Nav Component #48',
    category: 'nav',
    badge: 'CHIC',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #48</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #48</div>
);`
  },
  {
    id: 'nav-49',
    title: 'Nav Component #49',
    category: 'nav',
    badge: 'HOT',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #49</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #49</div>
);`
  },
  {
    id: 'nav-50',
    title: 'Nav Component #50',
    category: 'nav',
    badge: 'NEW',
    description: 'Distinctive navigation menu widget with responsive light & dark styling.',
    tags: ['Navigation', 'Menu', 'Tabs'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="flex gap-2 text-xs font-medium text-slate-600 dark:text-slate-400"><span className="text-indigo-600 font-bold border-b border-indigo-500">Section #50</span><span>Docs</span><span>Help</span></div>),
    code: `export const NavComponent = () => (
  <div className="flex gap-2 text-xs font-medium text-slate-700 dark:text-slate-200">Nav Component #50</div>
);`
  },
];
