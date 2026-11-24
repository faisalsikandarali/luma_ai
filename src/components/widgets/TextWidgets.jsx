import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Sparkles } from 'lucide-react';
import { playSound } from '../../utils/sound';

// 1. Cyberpunk Glitch Text
export const CyberpunkGlitchText = () => {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => { playSound('laser'); setH(true); }} onMouseLeave={() => setH(false)} className="relative cursor-pointer select-none py-2 text-center">
      <span className="font-heading font-black text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400">
        CYBERPUNK 2088
      </span>
      {h && (
        <>
          <span className="absolute top-2 left-0 right-0 font-heading font-black text-2xl tracking-wider text-cyan-400 opacity-70 pointer-events-none" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)', transform: 'translate(-2px, -1px)' }}>
            CYBERPUNK 2088
          </span>
          <span className="absolute top-2 left-0 right-0 font-heading font-black text-2xl tracking-wider text-fuchsia-500 opacity-70 pointer-events-none" style={{ clipPath: 'polygon(0 60%, 100% 60%, 100% 100%, 0 100%)', transform: 'translate(2px, 1px)' }}>
            CYBERPUNK 2088
          </span>
        </>
      )}
    </div>
  );
};

// 2. Aurora Gradient Flow Text
export const AuroraGradientText = () => (
  <div className="text-center py-2">
    <h3 className="font-heading font-black text-2xl tracking-tight bg-gradient-to-r from-emerald-400 via-cyan-300 via-indigo-400 to-fuchsia-400 bg-[length:200%_auto] animate-[gradient_4s_ease_infinite] bg-clip-text text-transparent">
      Fluid Aurora Mesh
    </h3>
  </div>
);

// 3. Terminal Typewriter
export const TerminalTypewriter = () => {
  const [t, setT] = useState('');
  const str = '$ npm create-lumina-app@latest';
  useEffect(() => {
    let i = 0;
    const inv = setInterval(() => {
      setT(str.slice(0, i));
      i++;
      if (i > str.length) clearInterval(inv);
    }, 60);
    return () => clearInterval(inv);
  }, []);
  return (
    <div className="rounded-xl bg-[#0b0d14] border border-white/10 p-3 font-mono text-xs text-emerald-400 flex items-center">
      <span>{t}</span>
      <span className="w-1.5 h-3.5 bg-emerald-400 ml-1 animate-pulse" />
    </div>
  );
};

// 4. Staggered Wave Letter Bounce
export const StaggeredLetterWave = () => {
  const text = "SPRING PHYSICS";
  return (
    <div className="flex gap-0.5 justify-center cursor-pointer py-2" onMouseEnter={() => playSound('pop')}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          whileHover={{ y: -6, color: "#67e8f9" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="font-heading font-black text-lg text-slate-200"
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </div>
  );
};

// 5. Neon Glow Signboard Text
export const NeonSignText = () => (
  <div className="text-center py-2">
    <span className="font-mono text-xl font-black text-fuchsia-300 drop-shadow-[0_0_12px_rgba(217,70,239,0.8)] tracking-widest">
      NEON DREAMS
    </span>
  </div>
);

// 6. Gradient Stroke Hollow Outline Text
export const HollowOutlineText = () => (
  <div className="text-center py-2">
    <span 
      className="font-heading font-black text-3xl tracking-wider text-transparent"
      style={{ WebkitTextStroke: "1px #818cf8" }}
    >
      TRANSCENDENCE
    </span>
  </div>
);

// 7. Shimmering Gold Text
export const ShimmerGoldText = () => (
  <div className="text-center py-2">
    <span className="font-heading font-extrabold text-xl bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
      ✦ LUXURY CHAMPAGNE ✦
    </span>
  </div>
);

// 8. Variable Weight Font Sweeper
export const VariableWeightSweeper = () => (
  <div className="text-center py-2 cursor-pointer group">
    <span className="font-sans font-light group-hover:font-black text-xl text-indigo-300 transition-all duration-300 tracking-tight">
      Variable Weight Dynamics
    </span>
  </div>
);

// 9. Cyber Matrix Rain Fragment
export const MatrixRainFragment = () => (
  <div className="rounded-lg bg-black/90 p-2 border border-emerald-500/30 font-mono text-[11px] text-emerald-400 text-center tracking-widest">
    01001100 01010101 01001101
  </div>
);

// 10. Code Token Syntax Highlighting
export const CodeTokenSyntax = () => (
  <div className="rounded-lg bg-[#0c0e18] p-2 border border-white/10 font-mono text-xs">
    <span className="text-purple-400">const</span> <span className="text-yellow-300">magic</span> = <span className="text-cyan-400">useFramer</span>();
  </div>
);

// 11. 3D Extruded Block Text
export const ExtrudedBlockText = () => (
  <div className="text-center py-2">
    <span 
      className="font-heading font-black text-2xl text-white"
      style={{ textShadow: "0 1px 0 #6366f1, 0 2px 0 #4f46e5, 0 3px 0 #4338ca, 0 4px 6px rgba(0,0,0,0.5)" }}
    >
      ISOMETRIC 3D
    </span>
  </div>
);

// 12. Minimalist Monospace Timestamp
export const MonospaceTimestamp = () => (
  <div className="flex items-center justify-center gap-2 font-mono text-xs text-slate-400">
    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
    <span>T-MINUS 00:04:18.92</span>
  </div>
);
