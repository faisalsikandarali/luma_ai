import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, Check, Eye, EyeOff, Plus, Minus, ChevronDown, Lock } from 'lucide-react';
import { playSound } from '../../utils/sound';

// 1. Tactile Elastic Spring Switch
export const TactileElasticSwitch = () => {
  const [on, setOn] = useState(false);
  const toggle = () => { playSound('pop'); setOn(!on); };
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={toggle}
        className={`w-14 h-8 rounded-full p-1 transition-colors ${on ? 'bg-indigo-600 shadow-lg shadow-indigo-500/40' : 'bg-neutral-800'}`}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 600, damping: 25 }}
          className={`w-6 h-6 rounded-full flex items-center justify-center ${on ? 'bg-white text-indigo-600' : 'bg-neutral-400'}`}
        >
          {on ? <Zap className="w-3 h-3 fill-indigo-600" /> : <div className="w-1.5 h-1.5 rounded-full bg-neutral-600" />}
        </motion.div>
      </button>
      <span className="text-xs font-mono text-slate-400">{on ? 'ENABLED' : 'DISABLED'}</span>
    </div>
  );
};

// 2. Spotlight Cyber Search Input
export const SpotlightCyberInput = () => {
  const [f, setF] = useState(false);
  return (
    <div className="relative group w-64">
      <div className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 blur opacity-0 transition ${f ? 'opacity-100' : ''}`} />
      <div className="relative flex items-center bg-[#0d0f17] border border-white/10 rounded-xl px-3 py-2">
        <Search className="w-3.5 h-3.5 text-slate-400 mr-2" />
        <input 
          type="text" 
          placeholder="Quick search..." 
          onFocus={() => { playSound('click'); setF(true); }}
          onBlur={() => setF(false)}
          className="w-full bg-transparent text-xs text-white focus:outline-none"
        />
        <kbd className="font-mono text-[9px] bg-white/10 text-slate-300 px-1 py-0.5 rounded">⌘K</kbd>
      </div>
    </div>
  );
};

// 3. Fluid Value Slider
export const FluidValueSlider = () => {
  const [v, setV] = useState(65);
  return (
    <div className="w-56">
      <div className="flex justify-between text-xs font-mono mb-1 text-slate-400">
        <span>Spring Tension</span>
        <span className="text-cyan-400 font-bold">{v}%</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={v}
        onChange={(e) => { setV(Number(e.target.value)); if (Math.random() > 0.7) playSound('click'); }}
        className="w-full h-1.5 bg-neutral-800 rounded-lg cursor-pointer accent-indigo-500"
      />
    </div>
  );
};

// 4. OTP Pin Code Input
export const OTPPinInput = () => {
  const [code, setCode] = useState(['4', '8', '2', '']);
  return (
    <div className="flex gap-2 justify-center">
      {code.map((digit, i) => (
        <input
          key={i}
          type="text"
          maxLength={1}
          value={digit}
          onChange={() => playSound('click')}
          className="w-9 h-11 text-center font-mono font-bold text-sm rounded-xl bg-[#0e101a] border border-white/15 focus:border-indigo-500 text-white focus:outline-none"
        />
      ))}
    </div>
  );
};

// 5. Interactive Stepper Counter
export const StepperCounter = () => {
  const [c, setC] = useState(1);
  return (
    <div className="inline-flex items-center rounded-xl bg-[#0c0e18] border border-white/10 p-1">
      <button onClick={() => { playSound('click'); setC(Math.max(0, c - 1)); }} className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white">
        <Minus className="w-3.5 h-3.5" />
      </button>
      <span className="w-8 text-center font-mono font-bold text-xs text-white">{c}</span>
      <button onClick={() => { playSound('click'); setC(c + 1); }} className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white">
        <Plus className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

// 6. Floating Label Cyber Input
export const FloatingLabelInput = () => (
  <div className="relative w-56">
    <input
      type="text"
      placeholder=" "
      className="peer w-full bg-white/5 border border-white/10 rounded-xl px-3 pt-4 pb-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
    />
    <label className="absolute left-3 top-1 text-[10px] font-mono text-slate-400 uppercase transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-xs peer-focus:top-1 peer-focus:text-[10px] peer-focus:text-indigo-400">
      Project Slug
    </label>
  </div>
);

// 7. Password Strength Input
export const PasswordStrengthInput = () => {
  const [val, setVal] = useState('Pass!99');
  return (
    <div className="w-56 space-y-1.5">
      <div className="relative">
        <input
          type="password"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="w-full bg-[#0d0f18] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="flex gap-1 h-1">
        <span className="flex-1 bg-emerald-500 rounded-full" />
        <span className="flex-1 bg-emerald-500 rounded-full" />
        <span className="flex-1 bg-emerald-500 rounded-full" />
        <span className="flex-1 bg-slate-700 rounded-full" />
      </div>
    </div>
  );
};

// 8. Segmented Radio Option Pill
export const SegmentedRadioPill = () => {
  const [sel, setSel] = useState('Light');
  return (
    <div className="flex p-0.5 rounded-xl bg-neutral-900 border border-white/10 text-xs">
      {['Light', 'System', 'Dark'].map((item) => (
        <button
          key={item}
          onClick={() => { playSound('click'); setSel(item); }}
          className={`px-3 py-1 rounded-lg transition-colors ${sel === item ? 'bg-indigo-600 text-white font-medium' : 'text-slate-400'}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

// 9. Glowing Checkbox
export const GlowingCheckbox = () => {
  const [chk, setChk] = useState(true);
  return (
    <label onClick={() => { playSound('pop'); setChk(!chk); }} className="flex items-center gap-2 cursor-pointer select-none">
      <div className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-all ${chk ? 'bg-indigo-600 border-indigo-400 shadow-[0_0_10px_#6366f1]' : 'border-neutral-700 bg-neutral-900'}`}>
        {chk && <Check className="w-3.5 h-3.5 text-white" />}
      </div>
      <span className="text-xs text-slate-300">Accept Terms & Privacy</span>
    </label>
  );
};

// 10. Tag Pill Creator
export const TagPillCreator = () => (
  <div className="flex flex-wrap gap-1.5 w-60">
    <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-mono border border-indigo-500/30">#react</span>
    <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-mono border border-cyan-500/30">#framer</span>
    <span className="px-2 py-0.5 rounded-full bg-white/10 text-slate-300 text-[10px] font-mono">+ Add</span>
  </div>
);

// 11. Minimal Number Input
export const MinimalNumberInput = () => (
  <div className="flex items-center gap-2 bg-[#0c0e18] px-3 py-1.5 rounded-xl border border-white/10 text-xs font-mono">
    <span className="text-slate-500">PORT:</span>
    <input type="text" defaultValue="5173" className="w-16 bg-transparent text-cyan-400 font-bold focus:outline-none" />
  </div>
);

// 12. Dropdown Select Trigger
export const DropdownSelectTrigger = () => (
  <button onClick={() => playSound('click')} className="flex items-center justify-between w-52 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
    <span>Production (US-East)</span>
    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
  </button>
);
