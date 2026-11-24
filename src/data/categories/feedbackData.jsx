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

export const feedbackData = [
  {
    id: 'feedback-01',
    title: 'Sliding Toast Notification With Dismiss',
    category: 'feedback',
    badge: 'HOT',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-white dark:bg-[#0e101a] border border-slate-200 dark:border-white/10 shadow-lg text-xs flex items-center justify-between"><div className="flex items-center gap-2 text-emerald-500"><CheckCircle2 className="w-4 h-4" /><span className="text-slate-800 dark:text-white font-medium">Saved to Cloud</span></div><button onClick={() => playSound('pop')} className="text-[10px] text-indigo-500 font-mono">Dismiss</button></div>),
    code: `export const SlidingToastNotificationWithDismiss = () => (
  <div className="w-64 p-3 rounded-xl border">Sliding Toast Notification With Dismiss</div>
);`
  },
  {
    id: 'feedback-02',
    title: 'Glassmorphism Modal Alert',
    category: 'feedback',
    badge: 'NEW',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-4 rounded-2xl bg-white dark:bg-[#0b0d15] border border-slate-200 dark:border-white/10 shadow-xl space-y-1"><div className="text-xs font-bold text-indigo-500">Session Verified</div><p className="text-[11px] text-slate-500 dark:text-slate-400">Cryptographic token refreshed.</p></div>),
    code: `export const GlassmorphismModalAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Glassmorphism Modal Alert</div>
);`
  },
  {
    id: 'feedback-03',
    title: 'Cyberpunk Error Glitch Banner',
    category: 'feedback',
    badge: '3D',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-2.5 rounded-xl bg-rose-500/10 border border-rose-500 text-rose-500 font-mono text-xs flex items-center gap-2"><AlertTriangle className="w-4 h-4" /><span>ERR_403: DENIED</span></div>),
    code: `export const CyberpunkErrorGlitchBanner = () => (
  <div className="w-64 p-3 rounded-xl border">Cyberpunk Error Glitch Banner</div>
);`
  },
  {
    id: 'feedback-04',
    title: 'Interactive 5-Star Rating Bar',
    category: 'feedback',
    badge: 'PRO',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
    const [r, setR] = useState(4);
    return (<div className="flex gap-1 items-center">{[1,2,3,4,5].map(s => (<button key={s} onClick={() => { playSound('pop'); setR(s); }}><Star className={`w-4 h-4 ${s <= r ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} /></button>))}</div>);
  },
    code: `export const InteractiveStarRatingBar = () => (
  <div className="w-64 p-3 rounded-xl border">Interactive 5-Star Rating Bar</div>
);`
  },
  {
    id: 'feedback-05',
    title: 'Feedback Alert #5',
    category: 'feedback',
    badge: 'CYBER',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #5</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #5</div>
);`
  },
  {
    id: 'feedback-06',
    title: 'Feedback Alert #6',
    category: 'feedback',
    badge: 'POPULAR',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #6</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #6</div>
);`
  },
  {
    id: 'feedback-07',
    title: 'Feedback Alert #7',
    category: 'feedback',
    badge: 'TACTILE',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #7</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #7</div>
);`
  },
  {
    id: 'feedback-08',
    title: 'Feedback Alert #8',
    category: 'feedback',
    badge: 'CHIC',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #8</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #8</div>
);`
  },
  {
    id: 'feedback-09',
    title: 'Feedback Alert #9',
    category: 'feedback',
    badge: 'HOT',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #9</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #9</div>
);`
  },
  {
    id: 'feedback-10',
    title: 'Feedback Alert #10',
    category: 'feedback',
    badge: 'NEW',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #10</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #10</div>
);`
  },
  {
    id: 'feedback-11',
    title: 'Feedback Alert #11',
    category: 'feedback',
    badge: '3D',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #11</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #11</div>
);`
  },
  {
    id: 'feedback-12',
    title: 'Feedback Alert #12',
    category: 'feedback',
    badge: 'PRO',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #12</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #12</div>
);`
  },
  {
    id: 'feedback-13',
    title: 'Feedback Alert #13',
    category: 'feedback',
    badge: 'CYBER',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #13</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #13</div>
);`
  },
  {
    id: 'feedback-14',
    title: 'Feedback Alert #14',
    category: 'feedback',
    badge: 'POPULAR',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #14</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #14</div>
);`
  },
  {
    id: 'feedback-15',
    title: 'Feedback Alert #15',
    category: 'feedback',
    badge: 'TACTILE',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #15</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #15</div>
);`
  },
  {
    id: 'feedback-16',
    title: 'Feedback Alert #16',
    category: 'feedback',
    badge: 'CHIC',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #16</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #16</div>
);`
  },
  {
    id: 'feedback-17',
    title: 'Feedback Alert #17',
    category: 'feedback',
    badge: 'HOT',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #17</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #17</div>
);`
  },
  {
    id: 'feedback-18',
    title: 'Feedback Alert #18',
    category: 'feedback',
    badge: 'NEW',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #18</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #18</div>
);`
  },
  {
    id: 'feedback-19',
    title: 'Feedback Alert #19',
    category: 'feedback',
    badge: '3D',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #19</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #19</div>
);`
  },
  {
    id: 'feedback-20',
    title: 'Feedback Alert #20',
    category: 'feedback',
    badge: 'PRO',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #20</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #20</div>
);`
  },
  {
    id: 'feedback-21',
    title: 'Feedback Alert #21',
    category: 'feedback',
    badge: 'CYBER',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #21</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #21</div>
);`
  },
  {
    id: 'feedback-22',
    title: 'Feedback Alert #22',
    category: 'feedback',
    badge: 'POPULAR',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #22</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #22</div>
);`
  },
  {
    id: 'feedback-23',
    title: 'Feedback Alert #23',
    category: 'feedback',
    badge: 'TACTILE',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #23</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #23</div>
);`
  },
  {
    id: 'feedback-24',
    title: 'Feedback Alert #24',
    category: 'feedback',
    badge: 'CHIC',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #24</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #24</div>
);`
  },
  {
    id: 'feedback-25',
    title: 'Feedback Alert #25',
    category: 'feedback',
    badge: 'HOT',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #25</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #25</div>
);`
  },
  {
    id: 'feedback-26',
    title: 'Feedback Alert #26',
    category: 'feedback',
    badge: 'NEW',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #26</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #26</div>
);`
  },
  {
    id: 'feedback-27',
    title: 'Feedback Alert #27',
    category: 'feedback',
    badge: '3D',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #27</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #27</div>
);`
  },
  {
    id: 'feedback-28',
    title: 'Feedback Alert #28',
    category: 'feedback',
    badge: 'PRO',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #28</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #28</div>
);`
  },
  {
    id: 'feedback-29',
    title: 'Feedback Alert #29',
    category: 'feedback',
    badge: 'CYBER',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #29</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #29</div>
);`
  },
  {
    id: 'feedback-30',
    title: 'Feedback Alert #30',
    category: 'feedback',
    badge: 'POPULAR',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #30</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #30</div>
);`
  },
  {
    id: 'feedback-31',
    title: 'Feedback Alert #31',
    category: 'feedback',
    badge: 'TACTILE',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #31</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #31</div>
);`
  },
  {
    id: 'feedback-32',
    title: 'Feedback Alert #32',
    category: 'feedback',
    badge: 'CHIC',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #32</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #32</div>
);`
  },
  {
    id: 'feedback-33',
    title: 'Feedback Alert #33',
    category: 'feedback',
    badge: 'HOT',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #33</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #33</div>
);`
  },
  {
    id: 'feedback-34',
    title: 'Feedback Alert #34',
    category: 'feedback',
    badge: 'NEW',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #34</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #34</div>
);`
  },
  {
    id: 'feedback-35',
    title: 'Feedback Alert #35',
    category: 'feedback',
    badge: '3D',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #35</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #35</div>
);`
  },
  {
    id: 'feedback-36',
    title: 'Feedback Alert #36',
    category: 'feedback',
    badge: 'PRO',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #36</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #36</div>
);`
  },
  {
    id: 'feedback-37',
    title: 'Feedback Alert #37',
    category: 'feedback',
    badge: 'CYBER',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #37</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #37</div>
);`
  },
  {
    id: 'feedback-38',
    title: 'Feedback Alert #38',
    category: 'feedback',
    badge: 'POPULAR',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #38</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #38</div>
);`
  },
  {
    id: 'feedback-39',
    title: 'Feedback Alert #39',
    category: 'feedback',
    badge: 'TACTILE',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #39</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #39</div>
);`
  },
  {
    id: 'feedback-40',
    title: 'Feedback Alert #40',
    category: 'feedback',
    badge: 'CHIC',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #40</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #40</div>
);`
  },
  {
    id: 'feedback-41',
    title: 'Feedback Alert #41',
    category: 'feedback',
    badge: 'HOT',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #41</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #41</div>
);`
  },
  {
    id: 'feedback-42',
    title: 'Feedback Alert #42',
    category: 'feedback',
    badge: 'NEW',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #42</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #42</div>
);`
  },
  {
    id: 'feedback-43',
    title: 'Feedback Alert #43',
    category: 'feedback',
    badge: '3D',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #43</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #43</div>
);`
  },
  {
    id: 'feedback-44',
    title: 'Feedback Alert #44',
    category: 'feedback',
    badge: 'PRO',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #44</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #44</div>
);`
  },
  {
    id: 'feedback-45',
    title: 'Feedback Alert #45',
    category: 'feedback',
    badge: 'CYBER',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #45</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #45</div>
);`
  },
  {
    id: 'feedback-46',
    title: 'Feedback Alert #46',
    category: 'feedback',
    badge: 'POPULAR',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #46</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #46</div>
);`
  },
  {
    id: 'feedback-47',
    title: 'Feedback Alert #47',
    category: 'feedback',
    badge: 'TACTILE',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #47</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #47</div>
);`
  },
  {
    id: 'feedback-48',
    title: 'Feedback Alert #48',
    category: 'feedback',
    badge: 'CHIC',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #48</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #48</div>
);`
  },
  {
    id: 'feedback-49',
    title: 'Feedback Alert #49',
    category: 'feedback',
    badge: 'HOT',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #49</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #49</div>
);`
  },
  {
    id: 'feedback-50',
    title: 'Feedback Alert #50',
    category: 'feedback',
    badge: 'NEW',
    description: 'Distinctive feedback alert widget with responsive light & dark styling.',
    tags: ['Feedback', 'Alerts', 'Toast'],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (<div className="w-64 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs flex items-center gap-2 text-slate-800 dark:text-white"><Info className="w-4 h-4 text-indigo-500" /><span className="truncate">Alert Message #50</span></div>),
    code: `export const FeedbackAlert = () => (
  <div className="w-64 p-3 rounded-xl border">Feedback Alert #50</div>
);`
  },
];
