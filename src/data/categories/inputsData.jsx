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

export const inputsData = [
  {
    id: 'inputs-01',
    title: 'Tactile Elastic Spring Toggle Switch',
    category: 'inputs',
    badge: 'SWITCH',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Toggle","Switch","Tactile"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [on, setOn] = useState(true);
      return (
        <button 
          onClick={() => { playSound('pop'); setOn(!on); }} 
          className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 ${on ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-neutral-700'}`}
        >
          <motion.div layout className={`w-6 h-6 rounded-full bg-white shadow-md ${on ? 'translate-x-6' : 'translate-x-0'}`} />
        </button>
      );
    },
    code: `export const TactileElasticSpringToggleSwitch = () => (
  <div className="p-3 border rounded-xl">Tactile Elastic Spring Toggle Switch</div>
);`
  },
  {
    id: 'inputs-02',
    title: 'Spotlight Cyber Search Input',
    category: 'inputs',
    badge: 'SEARCH',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Search","Input","Spotlight"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="relative w-64">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input type="text" placeholder="Quick find..." className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl pl-9 pr-12 py-1.5 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-indigo-500" />
        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-slate-500">⌘K</span>
      </div>
    ),
    code: `export const SpotlightCyberSearchInput = () => (
  <div className="p-3 border rounded-xl">Spotlight Cyber Search Input</div>
);`
  },
  {
    id: 'inputs-03',
    title: 'Fluid Spring Value Slider',
    category: 'inputs',
    badge: 'SLIDER',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Slider","Range","Value"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
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
    },
    code: `export const FluidSpringValueSlider = () => (
  <div className="p-3 border rounded-xl">Fluid Spring Value Slider</div>
);`
  },
  {
    id: 'inputs-04',
    title: 'OTP 4-Digit Security Cells',
    category: 'inputs',
    badge: 'OTP',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["OTP","Security","Code"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
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
    ),
    code: `export const OTPDigitSecurityCells = () => (
  <div className="p-3 border rounded-xl">OTP 4-Digit Security Cells</div>
);`
  },
  {
    id: 'inputs-05',
    title: 'Interactive Stepper Counter',
    category: 'inputs',
    badge: 'STEPPER',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Stepper","Counter","Number"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [c, setC] = useState(1);
      return (
        <div className="inline-flex items-center rounded-xl bg-slate-100 dark:bg-[#0c0e18] p-1 border border-slate-200 dark:border-white/10">
          <button onClick={() => { playSound('click'); setC(Math.max(1, c - 1)); }} className="w-7 h-7 rounded-lg bg-white dark:bg-white/10 text-slate-700 dark:text-white flex items-center justify-center font-bold text-xs shadow-sm hover:scale-105">-</button>
          <span className="w-8 text-center text-xs font-mono font-bold text-slate-800 dark:text-white">{c}</span>
          <button onClick={() => { playSound('click'); setC(c + 1); }} className="w-7 h-7 rounded-lg bg-white dark:bg-white/10 text-slate-700 dark:text-white flex items-center justify-center font-bold text-xs shadow-sm hover:scale-105">+</button>
        </div>
      );
    },
    code: `export const InteractiveStepperCounter = () => (
  <div className="p-3 border rounded-xl">Interactive Stepper Counter</div>
);`
  },
  {
    id: 'inputs-06',
    title: 'Glowing Cyber Checkbox',
    category: 'inputs',
    badge: 'CHECKBOX',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Checkbox","Glowing","Cyber"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [chk, setChk] = useState(true);
      return (
        <label onClick={() => { playSound('pop'); setChk(!chk); }} className="flex items-center gap-2.5 cursor-pointer text-xs font-medium text-slate-700 dark:text-slate-300 select-none">
          <div className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-all ${chk ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-500/30' : 'border-slate-300 dark:border-slate-600'}`}>
            {chk && <Check className="w-3.5 h-3.5" />}
          </div>
          <span>Automatic Deployments</span>
        </label>
      );
    },
    code: `export const GlowingCyberCheckbox = () => (
  <div className="p-3 border rounded-xl">Glowing Cyber Checkbox</div>
);`
  },
  {
    id: 'inputs-07',
    title: 'Credit Card Expiry & CVV Input Form',
    category: 'inputs',
    badge: 'FINTECH',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["CreditCard","Form","Fintech"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex gap-2 w-64">
        <input placeholder="MM/YY" className="w-1/2 px-3 py-1.5 text-xs font-mono rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white focus:outline-none" />
        <input placeholder="CVV" maxLength={3} className="w-1/2 px-3 py-1.5 text-xs font-mono rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white focus:outline-none" />
      </div>
    ),
    code: `export const CreditCardExpiryCVVInputForm = () => (
  <div className="p-3 border rounded-xl">Credit Card Expiry & CVV Input Form</div>
);`
  },
  {
    id: 'inputs-08',
    title: 'Neumorphic Dual Soft Touch Radios',
    category: 'inputs',
    badge: 'RADIO',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Radio","Neumorphic","Soft"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [sel, setSel] = useState('A');
      return (
        <div className="flex gap-4">
          {['A', 'B'].map((opt) => (
            <label key={opt} onClick={() => { playSound('click'); setSel(opt); }} className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 dark:text-slate-300">
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${sel === opt ? 'border-indigo-600' : 'border-slate-400'}`}>
                {sel === opt && <div className="w-2 h-2 rounded-full bg-indigo-600" />}
              </div>
              <span>Tier {opt}</span>
            </label>
          ))}
        </div>
      );
    },
    code: `export const NeumorphicDualSoftTouchRadios = () => (
  <div className="p-3 border rounded-xl">Neumorphic Dual Soft Touch Radios</div>
);`
  },
  {
    id: 'inputs-09',
    title: 'Range Price Slider ($20 - $250)',
    category: 'inputs',
    badge: 'PRICE',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Price","Range","Filter"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-60">
        <div className="flex justify-between text-xs font-mono text-slate-500 mb-1"><span>Min: $20</span><span>Max: $250</span></div>
        <input type="range" defaultValue={140} min="20" max="250" className="w-full h-1.5 accent-indigo-600 bg-slate-200 dark:bg-neutral-800 rounded cursor-pointer" />
      </div>
    ),
    code: `export const RangePriceSlider = () => (
  <div className="p-3 border rounded-xl">Range Price Slider ($20 - $250)</div>
);`
  },
  {
    id: 'inputs-10',
    title: 'Password Strength Meter with Bar',
    category: 'inputs',
    badge: 'PASSWORD',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Password","Strength","Meter"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
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
    ),
    code: `export const PasswordStrengthMeterwithBar = () => (
  <div className="p-3 border rounded-xl">Password Strength Meter with Bar</div>
);`
  },
  {
    id: 'inputs-11',
    title: 'Minimal Floating Underline Input',
    category: 'inputs',
    badge: 'UNDERLINE',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Underline","Minimal","Input"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-60">
        <input type="text" placeholder="Your full name" className="w-full pb-1 bg-transparent border-b-2 border-indigo-500 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-fuchsia-500 transition-colors placeholder:text-slate-400" />
      </div>
    ),
    code: `export const MinimalFloatingUnderlineInput = () => (
  <div className="p-3 border rounded-xl">Minimal Floating Underline Input</div>
);`
  },
  {
    id: 'inputs-12',
    title: 'Tag Token Chip Input Field',
    category: 'inputs',
    badge: 'CHIPS',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Tags","Chips","Tokens"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-64 p-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex flex-wrap gap-1 items-center">
        <span className="px-2 py-0.5 rounded-md bg-indigo-600 text-white text-[10px] font-mono flex items-center gap-1">React <X className="w-2.5 h-2.5 cursor-pointer" /></span>
        <span className="px-2 py-0.5 rounded-md bg-indigo-600 text-white text-[10px] font-mono flex items-center gap-1">Tailwind <X className="w-2.5 h-2.5 cursor-pointer" /></span>
        <span className="text-[10px] text-slate-400 pl-1">+ add</span>
      </div>
    ),
    code: `export const TagTokenChipInputField = () => (
  <div className="p-3 border rounded-xl">Tag Token Chip Input Field</div>
);`
  },
  {
    id: 'inputs-13',
    title: 'Copyable Secret Share Link Input',
    category: 'inputs',
    badge: 'COPY',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Copy","Share","Link"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [copied, setCopied] = useState(false);
      return (
        <div className="flex w-64 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 p-1">
          <input readOnly value="lumina.ui/share?id=842" className="flex-1 bg-transparent px-2 text-xs font-mono text-slate-700 dark:text-slate-300 focus:outline-none truncate" />
          <button onClick={() => { playSound('pop'); setCopied(true); setTimeout(() => setCopied(false), 1500); }} className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white text-[10px] font-bold">
            {copied ? '✓' : 'Copy'}
          </button>
        </div>
      );
    },
    code: `export const CopyableSecretShareLinkInput = () => (
  <div className="p-3 border rounded-xl">Copyable Secret Share Link Input</div>
);`
  },
  {
    id: 'inputs-14',
    title: 'Star Rating Input Picker (1-5)',
    category: 'inputs',
    badge: 'RATING',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Star","Rating","Input"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [r, setR] = useState(4);
      return (
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <button key={s} onClick={() => { playSound('pop'); setR(s); }} className="hover:scale-125 transition-transform">
              <Star className={`w-5 h-5 ${s <= r ? 'text-amber-400 fill-amber-400' : 'text-slate-300 dark:text-slate-600'}`} />
            </button>
          ))}
        </div>
      );
    },
    code: `export const StarRatingInputPicker = () => (
  <div className="p-3 border rounded-xl">Star Rating Input Picker (1-5)</div>
);`
  },
  {
    id: 'inputs-15',
    title: 'Preset Color Palette Swatch Picker',
    category: 'inputs',
    badge: 'COLOR',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Color","Picker","Palette"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [c, setC] = useState('#6366f1');
      const colors = ['#6366f1', '#06b6d4', '#ec4899', '#10b981', '#f59e0b', '#8b5cf6'];
      return (
        <div className="flex gap-2">
          {colors.map((col) => (
            <button key={col} onClick={() => { playSound('click'); setC(col); }} className={`w-6 h-6 rounded-full transition-transform ${c === col ? 'scale-125 ring-2 ring-indigo-500 ring-offset-2' : ''}`} style={{ backgroundColor: col }} />
          ))}
        </div>
      );
    },
    code: `export const PresetColorPaletteSwatchPicker = () => (
  <div className="p-3 border rounded-xl">Preset Color Palette Swatch Picker</div>
);`
  },
  {
    id: 'inputs-16',
    title: 'File Drag & Drop Upload Zone',
    category: 'inputs',
    badge: 'UPLOAD',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["File","Upload","Dropzone"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-64 p-3 rounded-2xl border-2 border-dashed border-slate-300 dark:border-white/20 text-center cursor-pointer hover:border-indigo-500 transition-colors">
        <Cloud className="w-5 h-5 mx-auto text-indigo-500 mb-1" />
        <div className="text-xs font-bold text-slate-800 dark:text-white">Drop PNG or SVG here</div>
        <div className="text-[9px] text-slate-400">up to 25 MB</div>
      </div>
    ),
    code: `export const FileDragDropUploadZone = () => (
  <div className="p-3 border rounded-xl">File Drag & Drop Upload Zone</div>
);`
  },
  {
    id: 'inputs-17',
    title: 'Dropdown Select Menu Control',
    category: 'inputs',
    badge: 'SELECT',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Select","Dropdown","Menu"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-60 relative">
        <select className="w-full px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-800 dark:text-white appearance-none focus:outline-none">
          <option>US-East (N. Virginia)</option>
          <option>EU-West (Frankfurt)</option>
          <option>AP-South (Mumbai)</option>
        </select>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none" />
      </div>
    ),
    code: `export const DropdownSelectMenuControl = () => (
  <div className="p-3 border rounded-xl">Dropdown Select Menu Control</div>
);`
  },
  {
    id: 'inputs-18',
    title: 'Monthly vs Yearly Segmented Switch',
    category: 'inputs',
    badge: 'SEGMENT',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Segmented","Billing","Toggle"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [yearly, setYearly] = useState(true);
      return (
        <div className="p-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 inline-flex text-xs font-medium">
          <button onClick={() => { playSound('click'); setYearly(false); }} className={`px-3 py-1 rounded-lg transition-colors ${!yearly ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm font-bold' : 'text-slate-500'}`}>Monthly</button>
          <button onClick={() => { playSound('click'); setYearly(true); }} className={`px-3 py-1 rounded-lg transition-colors ${yearly ? 'bg-indigo-600 text-white font-bold shadow-sm' : 'text-slate-500'}`}>Yearly (20% Off)</button>
        </div>
      );
    },
    code: `export const MonthlyvsYearlySegmentedSwitch = () => (
  <div className="p-3 border rounded-xl">Monthly vs Yearly Segmented Switch</div>
);`
  },
  {
    id: 'inputs-19',
    title: 'Rotary Dial Knob Volume Control',
    category: 'inputs',
    badge: 'ROTARY',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Dial","Knob","Volume"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-12 h-12 rounded-full border-4 border-indigo-600 bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative shadow-md">
        <div className="w-1 h-3 bg-indigo-600 rounded-full absolute -top-1" />
        <span className="text-[10px] font-mono font-bold text-slate-800 dark:text-white">75%</span>
      </div>
    ),
    code: `export const RotaryDialKnobVolumeControl = () => (
  <div className="p-3 border rounded-xl">Rotary Dial Knob Volume Control</div>
);`
  },
  {
    id: 'inputs-20',
    title: 'Search with Voice Dictation Trigger',
    category: 'inputs',
    badge: 'VOICE',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Voice","Search","Mic"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="relative w-64">
        <input type="text" placeholder="Search with voice..." className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl pl-3 pr-9 py-1.5 text-xs text-slate-800 dark:text-white focus:outline-none" />
        <button onClick={() => playSound('pop')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-indigo-500 hover:scale-110">
          <Mic className="w-4 h-4" />
        </button>
      </div>
    ),
    code: `export const SearchwithVoiceDictationTrigger = () => (
  <div className="p-3 border rounded-xl">Search with Voice Dictation Trigger</div>
);`
  },
  {
    id: 'inputs-21',
    title: 'Expanding Search Bar on Focus',
    category: 'inputs',
    badge: 'EXPAND',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Expand","Search","Focus"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <motion.div whileFocus={{ width: 280 }} className="w-48 transition-all">
        <input type="text" placeholder="Expand on focus..." className="w-full px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-800 dark:text-white focus:outline-none focus:border-indigo-500" />
      </motion.div>
    ),
    code: `export const ExpandingSearchBaronFocus = () => (
  <div className="p-3 border rounded-xl">Expanding Search Bar on Focus</div>
);`
  },
  {
    id: 'inputs-22',
    title: 'Currency Input with Dollar Prefix',
    category: 'inputs',
    badge: 'CURRENCY',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Currency","Dollar","Finance"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="relative w-48">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-slate-400 text-xs">$</span>
        <input type="number" defaultValue="2500" className="w-full pl-7 pr-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono font-bold text-slate-800 dark:text-white focus:outline-none" />
      </div>
    ),
    code: `export const CurrencyInputwithDollarPrefix = () => (
  <div className="p-3 border rounded-xl">Currency Input with Dollar Prefix</div>
);`
  },
  {
    id: 'inputs-23',
    title: 'Date Picker Field with Calendar Icon',
    category: 'inputs',
    badge: 'DATE',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Date","Calendar","Picker"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="relative w-60">
        <Calendar className="w-4 h-4 text-indigo-500 absolute left-3 top-1/2 -translate-y-1/2" />
        <input type="date" defaultValue="2026-11-24" className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-800 dark:text-white focus:outline-none" />
      </div>
    ),
    code: `export const DatePickerFieldwithCalendarIcon = () => (
  <div className="p-3 border rounded-xl">Date Picker Field with Calendar Icon</div>
);`
  },
  {
    id: 'inputs-24',
    title: 'Clearable Input with Reset Cross',
    category: 'inputs',
    badge: 'CLEARABLE',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Clear","Reset","Input"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [v, setV] = useState('Lumina UI Project');
      return (
        <div className="relative w-60">
          <input value={v} onChange={(e) => setV(e.target.value)} className="w-full pl-3 pr-8 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-800 dark:text-white focus:outline-none" />
          {v && <button onClick={() => setV('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-800"><X className="w-3.5 h-3.5" /></button>}
        </div>
      );
    },
    code: `export const ClearableInputwithResetCross = () => (
  <div className="p-3 border rounded-xl">Clearable Input with Reset Cross</div>
);`
  },
  {
    id: 'inputs-25',
    title: 'Multi-Checkbox Role Permission Grid',
    category: 'inputs',
    badge: 'PERMISSIONS',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Permission","Roles","Access"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex gap-3 text-xs text-slate-700 dark:text-slate-300">
        <label className="flex items-center gap-1.5 cursor-pointer"><input type="checkbox" defaultChecked className="accent-indigo-600 rounded" /><span>Read</span></label>
        <label className="flex items-center gap-1.5 cursor-pointer"><input type="checkbox" defaultChecked className="accent-indigo-600 rounded" /><span>Write</span></label>
        <label className="flex items-center gap-1.5 cursor-pointer"><input type="checkbox" className="accent-indigo-600 rounded" /><span>Delete</span></label>
      </div>
    ),
    code: `export const MultiCheckboxRolePermissionGrid = () => (
  <div className="p-3 border rounded-xl">Multi-Checkbox Role Permission Grid</div>
);`
  },
  {
    id: 'inputs-26',
    title: 'Sun & Moon Theme Toggle Switch',
    category: 'inputs',
    badge: 'THEME',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Theme","Sun","Moon"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [dark, setDark] = useState(true);
      return (
        <button onClick={() => { playSound('pop'); setDark(!dark); }} className="w-16 h-8 rounded-full p-1 bg-slate-200 dark:bg-slate-800 flex items-center justify-between border border-slate-300 dark:border-white/10 shadow-inner">
          <Sun className="w-4 h-4 text-amber-500" />
          <Moon className="w-4 h-4 text-indigo-400" />
        </button>
      );
    },
    code: `export const SunMoonThemeToggleSwitch = () => (
  <div className="p-3 border rounded-xl">Sun & Moon Theme Toggle Switch</div>
);`
  },
  {
    id: 'inputs-27',
    title: 'Character Limit Counter Input',
    category: 'inputs',
    badge: 'LIMIT',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Limit","Counter","Length"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-60">
        <input maxLength={20} defaultValue="Lumina Engine" className="w-full px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-800 dark:text-white focus:outline-none" />
        <div className="text-[9px] font-mono text-slate-400 text-right mt-1">13 / 20 chars</div>
      </div>
    ),
    code: `export const CharacterLimitCounterInput = () => (
  <div className="p-3 border rounded-xl">Character Limit Counter Input</div>
);`
  },
  {
    id: 'inputs-28',
    title: 'PIN Verification Security Lock',
    category: 'inputs',
    badge: 'PIN',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["PIN","Lock","Vault"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex items-center gap-2">
        <Lock className="w-4 h-4 text-indigo-500" />
        <span className="font-mono font-bold text-sm tracking-widest text-slate-800 dark:text-white">● ● ● ●</span>
      </div>
    ),
    code: `export const PINVerificationSecurityLock = () => (
  <div className="p-3 border rounded-xl">PIN Verification Security Lock</div>
);`
  },
  {
    id: 'inputs-29',
    title: 'Sliding Rating Feedback Emoji Bar',
    category: 'inputs',
    badge: 'EMOJI',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Emoji","Feedback","Mood"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [sel, setSel] = useState(3);
      const emojis = ['😡', '😐', '😊', '🤩'];
      return (
        <div className="flex gap-3 text-lg p-1.5 rounded-2xl bg-slate-100 dark:bg-white/5">
          {emojis.map((em, i) => (
            <button key={i} onClick={() => { playSound('pop'); setSel(i); }} className={`hover:scale-125 transition-transform ${sel === i ? 'scale-125' : 'opacity-40'}`}>
              {em}
            </button>
          ))}
        </div>
      );
    },
    code: `export const SlidingRatingFeedbackEmojiBar = () => (
  <div className="p-3 border rounded-xl">Sliding Rating Feedback Emoji Bar</div>
);`
  },
  {
    id: 'inputs-30',
    title: 'URL Domain Slug Prefix Field',
    category: 'inputs',
    badge: 'SLUG',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Domain","Slug","URL"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex w-64 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-xs">
        <span className="bg-slate-200 dark:bg-white/10 px-2 py-1.5 text-slate-500 font-mono">lumina.io/</span>
        <input type="text" defaultValue="dashboard" className="flex-1 bg-transparent px-2 text-slate-800 dark:text-white focus:outline-none font-mono" />
      </div>
    ),
    code: `export const URLDomainSlugPrefixField = () => (
  <div className="p-3 border rounded-xl">URL Domain Slug Prefix Field</div>
);`
  },
  {
    id: 'inputs-31',
    title: 'Custom Quantity Numeric Box',
    category: 'inputs',
    badge: 'QUANTITY',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Quantity","Cart","Box"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex items-center border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden bg-slate-100 dark:bg-white/5">
        <button onClick={() => playSound('click')} className="px-2.5 py-1 text-slate-500 hover:text-slate-800 dark:hover:text-white">-</button>
        <span className="px-3 font-mono font-bold text-xs text-slate-800 dark:text-white">3</span>
        <button onClick={() => playSound('click')} className="px-2.5 py-1 text-slate-500 hover:text-slate-800 dark:hover:text-white">+</button>
      </div>
    ),
    code: `export const CustomQuantityNumericBox = () => (
  <div className="p-3 border rounded-xl">Custom Quantity Numeric Box</div>
);`
  },
  {
    id: 'inputs-32',
    title: 'Filter Chips Multi-Select Bar',
    category: 'inputs',
    badge: 'FILTER',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Filter","Chips","Selection"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [sel, setSel] = useState(['All']);
      return (
        <div className="flex gap-1.5">
          {['All', 'React', 'Vue', 'Next'].map((f) => (
            <button key={f} onClick={() => { playSound('click'); setSel([f]); }} className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${sel.includes(f) ? 'bg-indigo-600 text-white font-bold' : 'bg-slate-100 dark:bg-white/5 text-slate-500'}`}>
              {f}
            </button>
          ))}
        </div>
      );
    },
    code: `export const FilterChipsMultiSelectBar = () => (
  <div className="p-3 border rounded-xl">Filter Chips Multi-Select Bar</div>
);`
  },
  {
    id: 'inputs-33',
    title: 'Glowing Gradient Border Focus Input',
    category: 'inputs',
    badge: 'GLOW',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Glow","Gradient","Border"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-60 p-[1.5px] rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400">
        <input type="text" placeholder="Gradient border focus..." className="w-full px-3 py-1.5 rounded-[10px] bg-white dark:bg-slate-900 text-xs text-slate-800 dark:text-white focus:outline-none" />
      </div>
    ),
    code: `export const GlowingGradientBorderFocusInput = () => (
  <div className="p-3 border rounded-xl">Glowing Gradient Border Focus Input</div>
);`
  },
  {
    id: 'inputs-34',
    title: 'Phone Number with Country Flag',
    category: 'inputs',
    badge: 'PHONE',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Phone","Country","Flag"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex w-64 rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-xs">
        <span className="px-2.5 py-1.5 bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300 font-mono">🇺🇸 +1</span>
        <input type="tel" placeholder="(555) 000-0000" className="flex-1 bg-transparent px-2 text-slate-800 dark:text-white focus:outline-none font-mono" />
      </div>
    ),
    code: `export const PhoneNumberwithCountryFlag = () => (
  <div className="p-3 border rounded-xl">Phone Number with Country Flag</div>
);`
  },
  {
    id: 'inputs-35',
    title: 'Auto-Grow Bio Textarea Field',
    category: 'inputs',
    badge: 'TEXTAREA',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Bio","Textarea","AutoGrow"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <textarea rows={2} placeholder="Write a short personal bio..." className="w-64 p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-800 dark:text-white focus:outline-none resize-none" />
    ),
    code: `export const AutoGrowBioTextareaField = () => (
  <div className="p-3 border rounded-xl">Auto-Grow Bio Textarea Field</div>
);`
  },
  {
    id: 'inputs-36',
    title: 'ON/OFF Label Toggle Switch',
    category: 'inputs',
    badge: 'ONOFF',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Toggle","Labels","Switch"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [on, setOn] = useState(true);
      return (
        <button onClick={() => { playSound('pop'); setOn(!on); }} className={`w-16 h-7 rounded-full p-1 flex items-center justify-between text-[9px] font-mono font-bold px-2 ${on ? 'bg-emerald-600 text-white' : 'bg-slate-300 dark:bg-neutral-700 text-slate-500'}`}>
          <span>{on ? 'ON' : ''}</span>
          <div className="w-5 h-5 rounded-full bg-white shadow-md" />
          <span>{!on ? 'OFF' : ''}</span>
        </button>
      );
    },
    code: `export const ONOFFLabelToggleSwitch = () => (
  <div className="p-3 border rounded-xl">ON/OFF Label Toggle Switch</div>
);`
  },
  {
    id: 'inputs-37',
    title: 'Neu-Brutalist Thick Border Input',
    category: 'inputs',
    badge: 'BRUTAL',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Brutalist","Thick","Retro"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <input type="text" placeholder="Brutalist prompt..." className="w-60 px-3 py-1.5 bg-yellow-200 text-black font-mono font-bold text-xs border-2 border-black shadow-[3px_3px_0px_#000] focus:outline-none" />
    ),
    code: `export const NeuBrutalistThickBorderInput = () => (
  <div className="p-3 border rounded-xl">Neu-Brutalist Thick Border Input</div>
);`
  },
  {
    id: 'inputs-38',
    title: 'Glassmorphism Translucent Blur Input',
    category: 'inputs',
    badge: 'GLASS',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Glass","Blur","Translucent"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <input type="text" placeholder="Frosted glass input..." className="w-60 px-3 py-1.5 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-md border border-slate-300/60 dark:border-white/20 text-xs text-slate-800 dark:text-white focus:outline-none" />
    ),
    code: `export const GlassmorphismTranslucentBlurInput = () => (
  <div className="p-3 border rounded-xl">Glassmorphism Translucent Blur Input</div>
);`
  },
  {
    id: 'inputs-39',
    title: 'Biometric Fingerprint Auth Trigger',
    category: 'inputs',
    badge: 'BIOMETRIC',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Fingerprint","Biometric","Scan"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <button onClick={() => playSound('laser')} className="px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-bold text-xs flex items-center gap-2 hover:scale-105 transition-transform">
        <Radio className="w-4 h-4" />
        <span>Scan Fingerprint</span>
      </button>
    ),
    code: `export const BiometricFingerprintAuthTrigger = () => (
  <div className="p-3 border rounded-xl">Biometric Fingerprint Auth Trigger</div>
);`
  },
  {
    id: 'inputs-40',
    title: 'Dual Option Yes/No Segmented Switch',
    category: 'inputs',
    badge: 'YESNO',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["YesNo","Segment","Decision"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [yes, setYes] = useState(true);
      return (
        <div className="p-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 inline-flex text-xs font-mono font-bold">
          <button onClick={() => { playSound('click'); setYes(true); }} className={`px-3 py-1 rounded-lg ${yes ? 'bg-emerald-600 text-white' : 'text-slate-400'}`}>YES</button>
          <button onClick={() => { playSound('click'); setYes(false); }} className={`px-3 py-1 rounded-lg ${!yes ? 'bg-rose-600 text-white' : 'text-slate-400'}`}>NO</button>
        </div>
      );
    },
    code: `export const DualOptionYesNoSegmentedSwitch = () => (
  <div className="p-3 border rounded-xl">Dual Option Yes/No Segmented Switch</div>
);`
  },
  {
    id: 'inputs-41',
    title: 'Color Hue Spectrum Slider Bar',
    category: 'inputs',
    badge: 'HUE',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Hue","Color","Rainbow"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-60">
        <input type="range" min="0" max="360" className="w-full h-3 rounded-lg appearance-none cursor-pointer" style={{ background: 'linear-gradient(to right, red, yellow, lime, cyan, blue, magenta, red)' }} />
      </div>
    ),
    code: `export const ColorHueSpectrumSliderBar = () => (
  <div className="p-3 border rounded-xl">Color Hue Spectrum Slider Bar</div>
);`
  },
  {
    id: 'inputs-42',
    title: 'Filter Chips Multi-Selection Bar',
    category: 'inputs',
    badge: 'PILLS',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Filter","Multi","Pills"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex gap-1.5">
        <span className="px-2.5 py-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-bold">Frontend</span>
        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-[10px]">Backend</span>
      </div>
    ),
    code: `export const FilterChipsMultiSelectionBar = () => (
  <div className="p-3 border rounded-xl">Filter Chips Multi-Selection Bar</div>
);`
  },
  {
    id: 'inputs-43',
    title: 'Stepper 3-Progress Dots Bar',
    category: 'inputs',
    badge: 'STEPDOTS',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Stepper","Dots","Step"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-indigo-600" />
        <span className="w-6 h-1 bg-indigo-600 rounded-full" />
        <span className="w-3 h-3 rounded-full bg-indigo-600" />
        <span className="w-6 h-1 bg-slate-300 dark:bg-neutral-700 rounded-full" />
        <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-neutral-700" />
      </div>
    ),
    code: `export const StepperProgressDotsBar = () => (
  <div className="p-3 border rounded-xl">Stepper 3-Progress Dots Bar</div>
);`
  },
  {
    id: 'inputs-44',
    title: 'Animated Confetti Pop Checkbox',
    category: 'inputs',
    badge: 'CONFETTI',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Checkbox","Confetti","Pop"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [chk, setChk] = useState(false);
      return (
        <button 
          onClick={(e) => {
            playSound('success');
            confetti({ particleCount: 25, spread: 50, origin: { y: 0.8 } });
            setChk(!chk);
          }}
          className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${chk ? 'bg-emerald-500 border-emerald-400 text-white' : 'bg-slate-100 dark:bg-white/5 border-slate-300 dark:border-white/10 text-slate-700 dark:text-white'}`}
        >
          <span>{chk ? '✓ Task Done!' : '○ Mark Complete'}</span>
        </button>
      );
    },
    code: `export const AnimatedConfettiPopCheckbox = () => (
  <div className="p-3 border rounded-xl">Animated Confetti Pop Checkbox</div>
);`
  },
  {
    id: 'inputs-45',
    title: 'Card CVV 3-Digit Security Input',
    category: 'inputs',
    badge: 'CVV',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["CVV","Security","Card"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-32">
        <input type="password" maxLength={3} placeholder="CVV 123" className="w-full text-center px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono font-bold text-slate-800 dark:text-white focus:outline-none" />
      </div>
    ),
    code: `export const CardCVVDigitSecurityInput = () => (
  <div className="p-3 border rounded-xl">Card CVV 3-Digit Security Input</div>
);`
  },
  {
    id: 'inputs-46',
    title: 'Sound Volume Slider with Mute Toggle',
    category: 'inputs',
    badge: 'VOLUME',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Volume","Audio","Mute"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [mute, setMute] = useState(false);
      return (
        <div className="flex items-center gap-2 w-56">
          <button onClick={() => { playSound('click'); setMute(!mute); }} className="text-slate-500">
            {mute ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4 text-indigo-500" />}
          </button>
          <input type="range" disabled={mute} defaultValue={60} className="w-full h-1.5 accent-indigo-600 bg-slate-200 dark:bg-neutral-800 rounded cursor-pointer" />
        </div>
      );
    },
    code: `export const SoundVolumeSliderwithMuteToggle = () => (
  <div className="p-3 border rounded-xl">Sound Volume Slider with Mute Toggle</div>
);`
  },
  {
    id: 'inputs-47',
    title: 'Search Input with Live Suggestions Pill',
    category: 'inputs',
    badge: 'SUGGEST',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Search","Suggestions","Pill"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="w-60 space-y-1">
        <input type="text" defaultValue="React Framer" className="w-full px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs text-slate-800 dark:text-white focus:outline-none" />
        <div className="flex gap-1 text-[9px] font-mono text-indigo-500">
          <span>Suggestions:</span>
          <span className="underline cursor-pointer">Framer Motion</span>
          <span className="underline cursor-pointer">Hooks</span>
        </div>
      </div>
    ),
    code: `export const SearchInputwithLiveSuggestionsPill = () => (
  <div className="p-3 border rounded-xl">Search Input with Live Suggestions Pill</div>
);`
  },
  {
    id: 'inputs-48',
    title: 'Time Picker Hour & Minute Selector',
    category: 'inputs',
    badge: 'TIME',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Time","Clock","Picker"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => (
      <div className="flex items-center gap-1 font-mono text-xs">
        <input defaultValue="14" className="w-10 text-center py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-bold" />
        <span>:</span>
        <input defaultValue="30" className="w-10 text-center py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-bold" />
        <span className="text-[10px] text-indigo-500 font-bold ml-1">PM</span>
      </div>
    ),
    code: `export const TimePickerHourMinuteSelector = () => (
  <div className="p-3 border rounded-xl">Time Picker Hour & Minute Selector</div>
);`
  },
  {
    id: 'inputs-49',
    title: 'Security Captcha "Not a Robot" Checkbox',
    category: 'inputs',
    badge: 'CAPTCHA',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Captcha","Security","Robot"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
      const [checked, setChecked] = useState(false);
      return (
        <div onClick={() => { playSound('pop'); setChecked(!checked); }} className="p-3 rounded-2xl bg-slate-100 dark:bg-[#0c0d16] border border-slate-200 dark:border-white/10 flex items-center gap-3 cursor-pointer select-none">
          <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center ${checked ? 'bg-emerald-600 border-emerald-500 text-white' : 'border-slate-400'}`}>
            {checked && <Check className="w-4 h-4" />}
          </div>
          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">I am not a robot</span>
        </div>
      );
    },
    code: `export const SecurityCaptchaNotaRobotCheckbox = () => (
  <div className="p-3 border rounded-xl">Security Captcha "Not a Robot" Checkbox</div>
);`
  },
  {
    id: 'inputs-50',
    title: 'Quantum Cyber Slider with Digital Readout',
    category: 'inputs',
    badge: 'QUANTUM',
    description: 'Distinctive interactive inputs widget with customized visual physics.',
    tags: ["Quantum","Cyber","Slider"],
    dependencies: ['framer-motion', 'lucide-react'],
    component: () => {
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
    },
    code: `export const QuantumCyberSliderwithDigitalReadout = () => (
  <div className="p-3 border rounded-xl">Quantum Cyber Slider with Digital Readout</div>
);`
  },
];
