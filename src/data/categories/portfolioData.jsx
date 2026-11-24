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

export const portfolioData = [
  {
    id: 'portfolio-01',
    title: 'Senior Fullstack Engineer Bento Showcase',
    category: 'portfolio',
    badge: 'STAFF',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Fullstack","Engineer","Bento"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
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
    ),
    code: `export const SeniorFullstackEngineerBentoShowcase = () => (
  <div className="p-4 border rounded-2xl">Senior Fullstack Engineer Bento Showcase</div>
);`
  },
  {
    id: 'portfolio-02',
    title: 'Product Designer Dribbble Case Study',
    category: 'portfolio',
    badge: 'DESIGN',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Designer","Dribbble","UI/UX"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
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
    ),
    code: `export const ProductDesignerDribbbleCaseStudy = () => (
  <div className="p-4 border rounded-2xl">Product Designer Dribbble Case Study</div>
);`
  },
  {
    id: 'portfolio-03',
    title: 'AI Research Scientist Credentials',
    category: 'portfolio',
    badge: 'AI LABS',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["AI","Research","MachineLearning"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
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
    ),
    code: `export const AIResearchScientistCredentials = () => (
  <div className="p-4 border rounded-2xl">AI Research Scientist Credentials</div>
);`
  },
  {
    id: 'portfolio-04',
    title: 'Terminal CLI Developer Resume',
    category: 'portfolio',
    badge: 'TERMINAL',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["CLI","Resume","Hacker"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
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
    ),
    code: `export const TerminalCLIDeveloperResume = () => (
  <div className="p-4 border rounded-2xl">Terminal CLI Developer Resume</div>
);`
  },
  {
    id: 'portfolio-05',
    title: 'Indie Hacker Solo Founder Card',
    category: 'portfolio',
    badge: 'FOUNDER',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Indie","Founder","SaaS"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
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
    ),
    code: `export const IndieHackerSoloFounderCard = () => (
  <div className="p-4 border rounded-2xl">Indie Hacker Solo Founder Card</div>
);`
  },
  {
    id: 'portfolio-06',
    title: '3D Motion Designer Showreel Frame',
    category: 'portfolio',
    badge: '3D SHOW',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["3D","Motion","Blender"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
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
    ),
    code: `export const DMotionDesignerShowreelFrame = () => (
  <div className="p-4 border rounded-2xl">3D Motion Designer Showreel Frame</div>
);`
  },
  {
    id: 'portfolio-07',
    title: 'Mobile iOS Swift Developer Card',
    category: 'portfolio',
    badge: 'SWIFT',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["iOS","Swift","AppStore"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
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
    ),
    code: `export const MobileiOSSwiftDeveloperCard = () => (
  <div className="p-4 border rounded-2xl">Mobile iOS Swift Developer Card</div>
);`
  },
  {
    id: 'portfolio-08',
    title: 'Minimal Swiss Architect Profile',
    category: 'portfolio',
    badge: 'SWISS',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Swiss","Architect","Editorial"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
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
    ),
    code: `export const MinimalSwissArchitectProfile = () => (
  <div className="p-4 border rounded-2xl">Minimal Swiss Architect Profile</div>
);`
  },
  {
    id: 'portfolio-09',
    title: 'Open Source Advocate & Contributor',
    category: 'portfolio',
    badge: 'OPEN SOURCE',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["OpenSource","GitHub","DevRel"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
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
    ),
    code: `export const OpenSourceAdvocateContributor = () => (
  <div className="p-4 border rounded-2xl">Open Source Advocate & Contributor</div>
);`
  },
  {
    id: 'portfolio-10',
    title: 'Fintech Systems Core Architect',
    category: 'portfolio',
    badge: 'FINTECH',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Fintech","Latency","Banking"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-mono font-bold text-cyan-500">HIGH-FREQUENCY TRADING</span>
          <span className="text-[10px] font-mono text-emerald-500">99.999% SLA</span>
        </div>
        <h5 className="text-xs font-bold">David Chen</h5>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-2">Ultra low latency order execution pipelines in C++23.</p>
        <div className="text-[9px] font-mono text-slate-400">$8B Daily Volume Handled</div>
      </div>
    ),
    code: `export const FintechSystemsCoreArchitect = () => (
  <div className="p-4 border rounded-2xl">Fintech Systems Core Architect</div>
);`
  },
  {
    id: 'portfolio-11',
    title: 'Interactive Flip Project Case Study',
    category: 'portfolio',
    badge: 'FLIP',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["CaseStudy","Flip","Metrics"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
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
    },
    code: `export const InteractiveFlipProjectCaseStudy = () => (
  <div className="p-4 border rounded-2xl">Interactive Flip Project Case Study</div>
);`
  },
  {
    id: 'portfolio-12',
    title: 'Skills Matrix Pentagram Card',
    category: 'portfolio',
    badge: 'SKILLS',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Skills","Matrix","Radar"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <h5 className="text-xs font-bold mb-2">Technical Proficiency</h5>
        <div className="space-y-1.5 text-xs font-mono">
          <div><div className="flex justify-between text-[10px] text-slate-400"><span>Frontend (React/Next)</span><span>95%</span></div><div className="h-1 bg-slate-200 dark:bg-white/10 rounded-full"><div className="h-full bg-indigo-500 rounded-full w-[95%]" /></div></div>
          <div><div className="flex justify-between text-[10px] text-slate-400"><span>Backend (Node/Go)</span><span>88%</span></div><div className="h-1 bg-slate-200 dark:bg-white/10 rounded-full"><div className="h-full bg-cyan-400 rounded-full w-[88%]" /></div></div>
          <div><div className="flex justify-between text-[10px] text-slate-400"><span>Cloud / DevOps</span><span>80%</span></div><div className="h-1 bg-slate-200 dark:bg-white/10 rounded-full"><div className="h-full bg-fuchsia-400 rounded-full w-[80%]" /></div></div>
        </div>
      </div>
    ),
    code: `export const SkillsMatrixPentagramCard = () => (
  <div className="p-4 border rounded-2xl">Skills Matrix Pentagram Card</div>
);`
  },
  {
    id: 'portfolio-13',
    title: 'Career Timeline Journey Stepper',
    category: 'portfolio',
    badge: 'CAREER',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Timeline","Career","Journey"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <h5 className="text-xs font-bold mb-3">Career Trajectory</h5>
        <div className="space-y-2 text-xs font-mono">
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-500" /><span>2024 - Present: Staff Eng @ Lumina</span></div>
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-400" /><span>2022 - 2024: Senior Eng @ Stripe</span></div>
          <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-400" /><span>2019 - 2022: Software Eng @ Uber</span></div>
        </div>
      </div>
    ),
    code: `export const CareerTimelineJourneyStepper = () => (
  <div className="p-4 border rounded-2xl">Career Timeline Journey Stepper</div>
);`
  },
  {
    id: 'portfolio-14',
    title: 'Verified Client Testimonial Endorsement',
    category: 'portfolio',
    badge: 'ENDORSED',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Review","Testimonial","Client"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex gap-1 text-amber-400 mb-2">★★★★★</div>
        <p className="text-xs italic text-slate-600 dark:text-slate-300 mb-3">"Alexander delivered our entire design system in record time. Absolute 10/10 engineer."</p>
        <div className="text-[10px] font-mono text-slate-400">Sarah Jenkins • CEO @ Veloce Labs</div>
      </div>
    ),
    code: `export const VerifiedClientTestimonialEndorsement = () => (
  <div className="p-4 border rounded-2xl">Verified Client Testimonial Endorsement</div>
);`
  },
  {
    id: 'portfolio-15',
    title: 'GitHub Commit Contribution Heatmap',
    category: 'portfolio',
    badge: 'STREAK',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["GitHub","Commits","Streak"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between text-xs mb-2"><span className="font-bold">1,842 Commits in 2025</span><span className="text-[10px] font-mono text-emerald-500">284 Day Streak</span></div>
        <div className="grid grid-cols-10 gap-1">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className={`h-3 rounded-xs ${i % 4 === 0 ? 'bg-emerald-600' : i % 2 === 0 ? 'bg-emerald-400' : 'bg-slate-200 dark:bg-white/10'}`} />
          ))}
        </div>
      </div>
    ),
    code: `export const GitHubCommitContributionHeatmap = () => (
  <div className="p-4 border rounded-2xl">GitHub Commit Contribution Heatmap</div>
);`
  },
  {
    id: 'portfolio-16',
    title: 'Dribbble Creative Shot Preview',
    category: 'portfolio',
    badge: 'DRIBBBLE',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Dribbble","Creative","Shot"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden text-slate-800 dark:text-white">
        <div className="h-28 bg-gradient-to-tr from-pink-500 to-rose-500 p-3 flex items-end justify-between text-white font-bold text-xs">
          <span>Glassmorphic Banking</span>
          <span className="flex items-center gap-1 font-mono text-[10px]">❤️ 1.4k</span>
        </div>
        <div className="p-3 text-xs flex justify-between"><span>Lumina Design</span><span className="text-slate-400">Pro</span></div>
      </div>
    ),
    code: `export const DribbbleCreativeShotPreview = () => (
  <div className="p-4 border rounded-2xl">Dribbble Creative Shot Preview</div>
);`
  },
  {
    id: 'portfolio-17',
    title: 'Tech Stack Interactive Floating Cloud',
    category: 'portfolio',
    badge: 'STACK',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Stack","Pills","Cloud"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <h5 className="text-xs font-bold mb-2">Core Arsenal</h5>
        <div className="flex flex-wrap gap-1.5">
          {['TypeScript', 'Tailwind', 'Next 15', 'Framer', 'Rust', 'GraphQL', 'Docker'].map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">{t}</span>
          ))}
        </div>
      </div>
    ),
    code: `export const TechStackInteractiveFloatingCloud = () => (
  <div className="p-4 border rounded-2xl">Tech Stack Interactive Floating Cloud</div>
);`
  },
  {
    id: 'portfolio-18',
    title: 'Hackathon 1st Place Champion Trophy',
    category: 'portfolio',
    badge: 'HACKATHON',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Trophy","Hackathon","Winner"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 shadow-xl">
        <div className="flex items-center gap-2 mb-1">
          <Award className="w-5 h-5 text-amber-500" />
          <span className="text-xs font-bold">1st Place • ETHDenver 2025</span>
        </div>
        <p className="text-[11px] text-slate-600 dark:text-slate-300 mb-2">Built zero-knowledge private payroll application in 48 hours.</p>
        <div className="text-[10px] font-mono font-bold">$25,000 Grand Prize</div>
      </div>
    ),
    code: `export const HackathonstPlaceChampionTrophy = () => (
  <div className="p-4 border rounded-2xl">Hackathon 1st Place Champion Trophy</div>
);`
  },
  {
    id: 'portfolio-19',
    title: 'Freelance Rate & Availability Card',
    category: 'portfolio',
    badge: 'FREELANCE',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Freelance","Rate","Hourly"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold">Freelance Contracts</span>
          <span className="text-xs font-mono font-bold text-indigo-500">$140 / hr</span>
        </div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">Taking on 1 high-impact design engineering project for Q2 2026.</p>
        <button onClick={() => playSound('pop')} className="w-full py-1.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700">Request Booking</button>
      </div>
    ),
    code: `export const FreelanceRateAvailabilityCard = () => (
  <div className="p-4 border rounded-2xl">Freelance Rate & Availability Card</div>
);`
  },
  {
    id: 'portfolio-20',
    title: 'Podcast Host & Speaker Card',
    category: 'portfolio',
    badge: 'PODCAST',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Podcast","Speaker","Audio"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex items-center gap-2 mb-2 text-indigo-500">
          <Mic className="w-4 h-4" />
          <span className="text-xs font-bold">The Frontline Podcast</span>
        </div>
        <h5 className="text-xs font-bold mb-1">Ep 84: The React 19 Shift</h5>
        <div className="text-[10px] font-mono text-slate-400">28k Monthly Listeners • Spotify & Apple</div>
      </div>
    ),
    code: `export const PodcastHostSpeakerCard = () => (
  <div className="p-4 border rounded-2xl">Podcast Host & Speaker Card</div>
);`
  },
  {
    id: 'portfolio-21',
    title: 'Technical Book Author Credentials',
    category: 'portfolio',
    badge: 'AUTHOR',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Author","Book","Writing"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-amber-500 font-bold uppercase">O'Reilly Media Author</span>
        <h5 className="text-xs font-bold mb-1">"Advanced Component Systems"</h5>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">Over 15,000 copies sold worldwide.</p>
      </div>
    ),
    code: `export const TechnicalBookAuthorCredentials = () => (
  <div className="p-4 border rounded-2xl">Technical Book Author Credentials</div>
);`
  },
  {
    id: 'portfolio-22',
    title: 'White-Hat Bug Bounty Hunter Vault',
    category: 'portfolio',
    badge: 'BOUNTY',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Security","Bounty","Hacker"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-[#090b14] border border-cyan-500/30 text-white shadow-xl">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold font-mono text-cyan-400">HACKERONE TOP 50</span>
          <span className="text-[10px] font-mono text-emerald-400">$180k+ Bounties</span>
        </div>
        <h5 className="text-xs font-bold">Critical Vulnerabilities Patched</h5>
        <div className="text-[10px] font-mono text-slate-400 mt-1">Stripe, Shopify, Coinbase</div>
      </div>
    ),
    code: `export const WhiteHatBugBountyHunterVault = () => (
  <div className="p-4 border rounded-2xl">White-Hat Bug Bounty Hunter Vault</div>
);`
  },
  {
    id: 'portfolio-23',
    title: 'Game Developer Unity & Unreal Engine',
    category: 'portfolio',
    badge: 'GAMEDEV',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["GameDev","Unity","Unreal"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-indigo-500 font-bold">STEAM RELEASED</span>
        <h5 className="text-xs font-bold mb-1">Lead Technical Game Designer</h5>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">Shaders, Physics, Procedural Generation</p>
      </div>
    ),
    code: `export const GameDeveloperUnityUnrealEngine = () => (
  <div className="p-4 border rounded-2xl">Game Developer Unity & Unreal Engine</div>
);`
  },
  {
    id: 'portfolio-24',
    title: 'Web3 Smart Contract Security Auditor',
    category: 'portfolio',
    badge: 'WEB3',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Web3","SmartContract","Solidity"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="text-xs font-bold text-emerald-500 mb-1">$450M TVL Audited</div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">Zero exploits post-deployment in audited protocols.</p>
      </div>
    ),
    code: `export const WebSmartContractSecurityAuditor = () => (
  <div className="p-4 border rounded-2xl">Web3 Smart Contract Security Auditor</div>
);`
  },
  {
    id: 'portfolio-25',
    title: 'Product Manager Metric Impact Card',
    category: 'portfolio',
    badge: 'PRODUCT',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Product","Metrics","Impact"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono font-bold text-indigo-500 uppercase">Growth Outcomes</span>
        <div className="text-xl font-black text-slate-800 dark:text-white my-1">+140% LTV</div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">Spearheaded self-serve activation pipeline.</p>
      </div>
    ),
    code: `export const ProductManagerMetricImpactCard = () => (
  <div className="p-4 border rounded-2xl">Product Manager Metric Impact Card</div>
);`
  },
  {
    id: 'portfolio-26',
    title: 'Clean Minimalist Digital Business Card',
    category: 'portfolio',
    badge: 'VCARD',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["vCard","NFC","Contact"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-slate-900 text-white shadow-xl flex items-center justify-between">
        <div>
          <h5 className="text-xs font-bold">Alexander Vance</h5>
          <div className="text-[10px] text-slate-400 font-mono">alex@lumina.ui</div>
        </div>
        <button onClick={() => playSound('pop')} className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
          <QrCode className="w-5 h-5 text-indigo-400" />
        </button>
      </div>
    ),
    code: `export const CleanMinimalistDigitalBusinessCard = () => (
  <div className="p-4 border rounded-2xl">Clean Minimalist Digital Business Card</div>
);`
  },
  {
    id: 'portfolio-27',
    title: 'Design System Lead Token Architect',
    category: 'portfolio',
    badge: 'TOKENS',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["DesignSystem","Tokens","Components"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <h5 className="text-xs font-bold mb-1">Core Design System Lead</h5>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-2">Architected 85 production components used by 200+ engineers daily.</p>
        <span className="text-[10px] font-mono text-indigo-500 font-bold">100% TypeScript Coverage</span>
      </div>
    ),
    code: `export const DesignSystemLeadTokenArchitect = () => (
  <div className="p-4 border rounded-2xl">Design System Lead Token Architect</div>
);`
  },
  {
    id: 'portfolio-28',
    title: 'Data Science & Machine Learning Master',
    category: 'portfolio',
    badge: 'ML',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["DataScience","Kaggle","Master"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-amber-500 font-bold">KAGGLE GRANDMASTER</span>
        <h5 className="text-xs font-bold my-1">Predictive Analytics & LLMs</h5>
        <p className="text-[10px] text-slate-400">PyTorch, Transformers, Fine-Tuning</p>
      </div>
    ),
    code: `export const DataScienceMachineLearningMaster = () => (
  <div className="p-4 border rounded-2xl">Data Science & Machine Learning Master</div>
);`
  },
  {
    id: 'portfolio-29',
    title: 'Cloud Infrastructure & DevOps Architect',
    category: 'portfolio',
    badge: 'CLOUD',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Cloud","AWS","Terraform"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-500 mb-1">
          <Cloud className="w-4 h-4" />
          <span>AWS Solutions Architect</span>
        </div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">Terraform, Kubernetes, Zero-Trust Architecture</p>
      </div>
    ),
    code: `export const CloudInfrastructureDevOpsArchitect = () => (
  <div className="p-4 border rounded-2xl">Cloud Infrastructure & DevOps Architect</div>
);`
  },
  {
    id: 'portfolio-30',
    title: 'Creative Technologist Generative Art',
    category: 'portfolio',
    badge: 'GEN-ART',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["GenerativeArt","WebGL","ThreeJS"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-fuchsia-500 font-bold">WEBGL & THREE.JS</span>
        <h5 className="text-xs font-bold my-1">Generative Kinetic Canvases</h5>
        <p className="text-[10px] text-slate-400">Featured on FWA & Awwwards</p>
      </div>
    ),
    code: `export const CreativeTechnologistGenerativeArt = () => (
  <div className="p-4 border rounded-2xl">Creative Technologist Generative Art</div>
);`
  },
  {
    id: 'portfolio-31',
    title: 'UX Researcher User Testing Insights',
    category: 'portfolio',
    badge: 'RESEARCH',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["UX","Research","Interviews"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <h5 className="text-xs font-bold mb-1">Qualitative UX Researcher</h5>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">120+ In-depth customer interviews conducted.</p>
      </div>
    ),
    code: `export const UXResearcherUserTestingInsights = () => (
  <div className="p-4 border rounded-2xl">UX Researcher User Testing Insights</div>
);`
  },
  {
    id: 'portfolio-32',
    title: 'Accessibility WCAG AAA Specialist',
    category: 'portfolio',
    badge: 'A11Y',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["A11y","WCAG","Accessible"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 shadow-xl">
        <h5 className="text-xs font-bold mb-1">WCAG 2.2 AAA Certified</h5>
        <p className="text-[10px] text-slate-600 dark:text-slate-300">Screen reader keyboard navigation audited.</p>
      </div>
    ),
    code: `export const AccessibilityWCAGAAASpecialist = () => (
  <div className="p-4 border rounded-2xl">Accessibility WCAG AAA Specialist</div>
);`
  },
  {
    id: 'portfolio-33',
    title: 'Micro-SaaS Profitability Snapshot',
    category: 'portfolio',
    badge: 'METRICS',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["MicroSaaS","LTV","Churn"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between text-xs font-bold mb-2"><span>SaaS Health</span><span className="text-emerald-500">1.2% Churn</span></div>
        <div className="text-base font-black font-mono mb-1">$840 LTV</div>
        <div className="text-[10px] font-mono text-slate-400">Net Revenue Retention: 118%</div>
      </div>
    ),
    code: `export const MicroSaaSProfitabilitySnapshot = () => (
  <div className="p-4 border rounded-2xl">Micro-SaaS Profitability Snapshot</div>
);`
  },
  {
    id: 'portfolio-34',
    title: 'YouTube Developer Educator Channel',
    category: 'portfolio',
    badge: 'YOUTUBE',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["YouTube","Educator","Video"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-rose-500 font-bold">250K SUBSCRIBERS</span>
        <h5 className="text-xs font-bold my-1">Modern React Tutorials</h5>
        <p className="text-[10px] text-slate-400">Practical software engineering masterclasses.</p>
      </div>
    ),
    code: `export const YouTubeDeveloperEducatorChannel = () => (
  <div className="p-4 border rounded-2xl">YouTube Developer Educator Channel</div>
);`
  },
  {
    id: 'portfolio-35',
    title: 'Site Reliability MTTR Incident Hero',
    category: 'portfolio',
    badge: 'SRE',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["SRE","MTTR","Incident"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="text-xs font-bold text-cyan-500 mb-1">MTTR: 3.8 Minutes</div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">Zero unplanned production outages across 2025.</p>
      </div>
    ),
    code: `export const SiteReliabilityMTTRIncidentHero = () => (
  <div className="p-4 border rounded-2xl">Site Reliability MTTR Incident Hero</div>
);`
  },
  {
    id: 'portfolio-36',
    title: 'Neu-Brutalist High-Contrast Resume',
    category: 'portfolio',
    badge: 'BRUTAL',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Brutalist","Resume","Pop"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 bg-yellow-300 text-black border-2 border-black shadow-[4px_4px_0px_#000] font-mono">
        <h5 className="font-black text-sm uppercase">BRUTALIST DEV</h5>
        <p className="text-xs font-bold mt-1">NO BORING CODE ALLOWED.</p>
      </div>
    ),
    code: `export const NeuBrutalistHighContrastResume = () => (
  <div className="p-4 border rounded-2xl">Neu-Brutalist High-Contrast Resume</div>
);`
  },
  {
    id: 'portfolio-37',
    title: 'Glassmorphic Haute Luxury Designer',
    category: 'portfolio',
    badge: 'LUXURY',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Luxury","Glass","Gold"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-5 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-amber-300/40 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-amber-500 tracking-widest uppercase">Haute Design</span>
        <h5 className="text-sm font-bold my-1">Julian De Montfort</h5>
        <p className="text-[10px] text-slate-400">Bespoke Digital Identity</p>
      </div>
    ),
    code: `export const GlassmorphicHauteLuxuryDesigner = () => (
  <div className="p-4 border rounded-2xl">Glassmorphic Haute Luxury Designer</div>
);`
  },
  {
    id: 'portfolio-38',
    title: 'Startup Advisor & Angel Syndicate',
    category: 'portfolio',
    badge: 'ANGEL',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Angel","Investor","Syndicate"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-indigo-500 font-bold">14 PORTFOLIO COMPANIES</span>
        <h5 className="text-xs font-bold my-1">Seed Stage Angel Investor</h5>
        <p className="text-[10px] text-slate-400">Developer Tools & Infrastructure</p>
      </div>
    ),
    code: `export const StartupAdvisorAngelSyndicate = () => (
  <div className="p-4 border rounded-2xl">Startup Advisor & Angel Syndicate</div>
);`
  },
  {
    id: 'portfolio-39',
    title: 'Embedded Hardware IoT Engineer',
    category: 'portfolio',
    badge: 'IOT',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["IoT","Hardware","Firmware"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-emerald-500 font-bold">C++ & RASPBERRY PI</span>
        <h5 className="text-xs font-bold my-1">Firmware Architecture</h5>
        <p className="text-[10px] text-slate-400">Bluetooth LE & Smart Sensors</p>
      </div>
    ),
    code: `export const EmbeddedHardwareIoTEngineer = () => (
  <div className="p-4 border rounded-2xl">Embedded Hardware IoT Engineer</div>
);`
  },
  {
    id: 'portfolio-40',
    title: 'Brand Typography & Foundry Stylist',
    category: 'portfolio',
    badge: 'FOUNDRY',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Typography","Foundry","Serif"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <h5 className="text-sm font-serif italic mb-1">Custom Type Specimen</h5>
        <p className="text-[10px] text-slate-400 font-mono">Designed 8 bespoke retail font families.</p>
      </div>
    ),
    code: `export const BrandTypographyFoundryStylist = () => (
  <div className="p-4 border rounded-2xl">Brand Typography & Foundry Stylist</div>
);`
  },
  {
    id: 'portfolio-41',
    title: 'Agile Scrum Coach & Engineering Mentor',
    category: 'portfolio',
    badge: 'COACH',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Scrum","Coach","Agile"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <h5 className="text-xs font-bold mb-1">Certified Scrum Master</h5>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">Trained 18 squads to 40% higher sprint velocity.</p>
      </div>
    ),
    code: `export const AgileScrumCoachEngineeringMentor = () => (
  <div className="p-4 border rounded-2xl">Agile Scrum Coach & Engineering Mentor</div>
);`
  },
  {
    id: 'portfolio-42',
    title: 'Remote Global Nomad Engineer',
    category: 'portfolio',
    badge: 'NOMAD',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Nomad","Remote","Async"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-cyan-500 font-bold">WORKING FROM BALI</span>
        <h5 className="text-xs font-bold my-1">Async-First Deep Work</h5>
        <p className="text-[10px] text-slate-400">18 Countries • 100% Remote</p>
      </div>
    ),
    code: `export const RemoteGlobalNomadEngineer = () => (
  <div className="p-4 border rounded-2xl">Remote Global Nomad Engineer</div>
);`
  },
  {
    id: 'portfolio-43',
    title: 'Interactive Audio & Sound Designer',
    category: 'portfolio',
    badge: 'SOUND',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Sound","Audio","OST"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-purple-500 font-bold">GAME OST COMPOSER</span>
        <h5 className="text-xs font-bold my-1">Spatial Audio & SFX</h5>
        <p className="text-[10px] text-slate-400">Over 40 million streams worldwide.</p>
      </div>
    ),
    code: `export const InteractiveAudioSoundDesigner = () => (
  <div className="p-4 border rounded-2xl">Interactive Audio & Sound Designer</div>
);`
  },
  {
    id: 'portfolio-44',
    title: 'Venture Capital Tech Scout',
    category: 'portfolio',
    badge: 'SCOUT',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["VC","Scout","Tech"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-indigo-500 font-bold">TIER-1 VC SCOUT</span>
        <h5 className="text-xs font-bold my-1">Early Dealflow Evaluator</h5>
        <p className="text-[10px] text-slate-400">B2B SaaS & AI Infrastructure</p>
      </div>
    ),
    code: `export const VentureCapitalTechScout = () => (
  <div className="p-4 border rounded-2xl">Venture Capital Tech Scout</div>
);`
  },
  {
    id: 'portfolio-45',
    title: 'E-Commerce Growth Hacker Extraordinaire',
    category: 'portfolio',
    badge: 'GROWTH',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Growth","Shopify","eCommerce"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-emerald-500 font-bold">$4.2M GMV SCALED</span>
        <h5 className="text-xs font-bold my-1">Shopify Plus Architect</h5>
        <p className="text-[10px] text-slate-400">Conversion rate & retention optimization</p>
      </div>
    ),
    code: `export const ECommerceGrowthHackerExtraordinaire = () => (
  <div className="p-4 border rounded-2xl">E-Commerce Growth Hacker Extraordinaire</div>
);`
  },
  {
    id: 'portfolio-46',
    title: 'QA Automation Test Suite Champion',
    category: 'portfolio',
    badge: 'QA',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["QA","Playwright","Test"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="text-xs font-bold text-emerald-500 mb-1">98.4% Test Coverage</div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">Playwright, Cypress, E2E CI/CD Gates</p>
      </div>
    ),
    code: `export const QAAutomationTestSuiteChampion = () => (
  <div className="p-4 border rounded-2xl">QA Automation Test Suite Champion</div>
);`
  },
  {
    id: 'portfolio-47',
    title: 'AR/VR Spatial Computing Visionary',
    category: 'portfolio',
    badge: 'SPATIAL',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Spatial","VisionPro","VR"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <span className="text-[10px] font-mono text-indigo-400 font-bold">APPLE VISION PRO</span>
        <h5 className="text-xs font-bold my-1">Spatial Computing Apps</h5>
        <p className="text-[10px] text-slate-400">RealityKit, SwiftUI, Hand Tracking</p>
      </div>
    ),
    code: `export const ARVRSpatialComputingVisionary = () => (
  <div className="p-4 border rounded-2xl">AR/VR Spatial Computing Visionary</div>
);`
  },
  {
    id: 'portfolio-48',
    title: 'Code Mentor & 1-on-1 Career Guide',
    category: 'portfolio',
    badge: 'MENTOR',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Mentor","FAANG","Career"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-4 rounded-2xl bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-white/10 shadow-xl text-slate-800 dark:text-white">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-bold">4.9 ★ Rating</span>
          <span className="text-[10px] font-mono text-indigo-500 font-bold">200+ Placed</span>
        </div>
        <p className="text-[11px] text-slate-500 dark:text-slate-400">Helping engineers land senior roles at top tech companies.</p>
      </div>
    ),
    code: `export const CodeMentoronCareerGuide = () => (
  <div className="p-4 border rounded-2xl">Code Mentor & 1-on-1 Career Guide</div>
);`
  },
  {
    id: 'portfolio-49',
    title: 'Tech Pioneer Hall of Fame Fellow',
    category: 'portfolio',
    badge: 'LEGEND',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["Pioneer","Legend","HallOfFame"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-72 p-5 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-yellow-500/10 to-amber-600/20 border-2 border-amber-400/50 text-slate-900 dark:text-amber-200 shadow-2xl">
        <span className="text-[10px] font-mono font-black text-amber-600 dark:text-amber-400 tracking-widest uppercase">HALL OF FAME</span>
        <h4 className="text-sm font-black my-1">Emeritus Tech Fellow</h4>
        <p className="text-xs text-slate-600 dark:text-amber-300/80">25+ Years shaping the open web standards.</p>
      </div>
    ),
    code: `export const TechPioneerHallofFameFellow = () => (
  <div className="p-4 border rounded-2xl">Tech Pioneer Hall of Fame Fellow</div>
);`
  },
  {
    id: 'portfolio-50',
    title: 'Fractional CTO Strategic Advisory Board Card',
    category: 'portfolio',
    badge: 'CTO',
    description: 'Distinctive interactive portfolio widget with customized visual physics.',
    tags: ["CTO","Advisory","Strategy"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
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
    ),
    code: `export const FractionalCTOStrategicAdvisoryBoardCard = () => (
  <div className="p-4 border rounded-2xl">Fractional CTO Strategic Advisory Board Card</div>
);`
  },
];
