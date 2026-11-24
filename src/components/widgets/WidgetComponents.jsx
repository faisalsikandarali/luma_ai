import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Sparkles, Check, ArrowRight, Zap, Copy, Volume2, ShieldCheck, 
  CreditCard, Terminal, Search, Radio, Play, Pause, FastForward, 
  Layers, Compass, Flame, Star, Cpu, RefreshCw
} from 'lucide-react';
import { playSound } from '../../utils/sound';

// 1. Magnetic Liquid Button
export const MagneticLiquidButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = (e) => {
    playSound('pop');
    setClicked(true);
    setTimeout(() => setClicked(false), 500);
  };

  return (
    <div className="py-6 flex items-center justify-center">
      <motion.button
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 250, damping: 15, mass: 0.5 }}
        whileTap={{ scale: 0.94 }}
        className="relative group px-8 py-3.5 rounded-full overflow-hidden font-medium text-white shadow-xl shadow-indigo-500/20 active:shadow-none"
      >
        {/* Animated Gradient Background */}
        <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 transition-all duration-300 group-hover:scale-105" />
        
        {/* Liquid Light Sweep */}
        <span className="absolute -inset-full bg-gradient-to-r from-transparent via-white/25 to-transparent rotate-45 translate-x-[-150%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
        
        {/* Glow halo */}
        <span className="absolute -inset-1 rounded-full bg-indigo-500/30 blur-lg group-hover:opacity-100 opacity-0 transition-opacity" />
        
        <span className="relative z-10 flex items-center gap-2 tracking-wide text-sm font-semibold">
          <Sparkles className="w-4 h-4 text-cyan-300 animate-spin-slow" />
          <span>Magnetic Liquid</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </span>
      </motion.button>
    </div>
  );
};

// 2. Shimmer Cyber Border Button
export const ShimmerCyberBorderButton = () => {
  const handleClick = () => {
    playSound('laser');
  };

  return (
    <div className="py-6 flex items-center justify-center">
      <button 
        onClick={handleClick}
        className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1.5px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900 active:scale-95 transition-transform"
      >
        {/* Rotating laser gradient */}
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] bg-[#0d0f17] px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 hover:bg-[#121524] transition-colors">
          <Zap className="w-4 h-4 text-purple-400 fill-purple-400/20" />
          <span>Cyber Shimmer</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono">
            60FPS
          </span>
        </span>
      </button>
    </div>
  );
};

// 3. Confetti Explosion Button
export const ConfettiExplosionButton = () => {
  const [firing, setFiring] = useState(false);

  const triggerConfetti = (e) => {
    playSound('success');
    setFiring(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { x, y },
      colors: ['#6366f1', '#ec4899', '#3b82f6', '#10b981', '#f59e0b'],
      disableForReducedMotion: true
    });

    setTimeout(() => setFiring(false), 800);
  };

  return (
    <div className="py-6 flex items-center justify-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={triggerConfetti}
        className="relative group px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all flex items-center gap-2"
      >
        <motion.div animate={firing ? { rotate: [0, -20, 20, -10, 0], scale: [1, 1.4, 1] } : {}}>
          <Sparkles className="w-4 h-4 text-yellow-200 fill-yellow-200" />
        </motion.div>
        <span>Click for Confetti!</span>
        <span className="bg-white/20 px-2 py-0.5 rounded text-xs">🎉</span>
      </motion.button>
    </div>
  );
};

// 4. Morphing State Button (Idle -> Processing -> Success)
export const MorphingStateButton = () => {
  const [state, setState] = useState('idle'); // idle | loading | success

  const handleClick = () => {
    if (state !== 'idle') return;
    playSound('click');
    setState('loading');
    setTimeout(() => {
      playSound('success');
      setState('success');
      setTimeout(() => setState('idle'), 2500);
    }, 1200);
  };

  return (
    <div className="py-6 flex items-center justify-center">
      <motion.button
        layout
        onClick={handleClick}
        className={`relative h-11 px-6 rounded-xl font-medium text-sm flex items-center justify-center transition-colors duration-300 ${
          state === 'success' 
            ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' 
            : state === 'loading'
            ? 'bg-indigo-600 text-white/80'
            : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
        }`}
      >
        <AnimatePresence mode="wait">
          {state === 'idle' && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2"
            >
              <CreditCard className="w-4 h-4" />
              <span>Purchase License $49</span>
            </motion.div>
          )}

          {state === 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4 animate-spin text-white" />
              <span>Verifying Block...</span>
            </motion.div>
          )}

          {state === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 font-semibold"
            >
              <Check className="w-4 h-4 stroke-[3]" />
              <span>Payment Complete!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

// 5. Holographic 3D Tilt Card
export const HolographicTiltCard = () => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.4
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div className="py-4 flex items-center justify-center [perspective:1000px]">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-80 p-6 rounded-2xl bg-gradient-to-b from-[#181a26] to-[#0e101a] border border-white/10 shadow-2xl cursor-pointer overflow-hidden group"
      >
        {/* Glare effect */}
        <div 
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 180px at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent)`,
            opacity: glare.opacity
          }}
        />

        <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
          <div className="flex items-center justify-between mb-4">
            <span className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Cpu className="w-5 h-5" />
            </span>
            <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              HOLO-TILT 3D
            </span>
          </div>

          <h4 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
            Quantum Engine V4
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Interactive real-time 3D parallax tilt response with dynamic specular glare simulation.
          </p>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-500">TPS: 142,800</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ONLINE
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// 6. Spotlight Bento Grid Card
export const SpotlightBentoCard = () => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div className="py-4 flex items-center justify-center">
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}
        className="relative w-80 rounded-2xl border border-neutral-800 bg-neutral-950 p-6 overflow-hidden shadow-xl"
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`,
          }}
        />

        {/* Micro Circuit Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        <div className="relative z-10">
          <div className="w-9 h-9 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-white mb-1">
            Spotlight Proximity
          </h3>
          <p className="text-xs text-neutral-400 mb-4">
            Radial glow illuminates border edges dynamically as cursor glides across the surface.
          </p>

          <div className="flex gap-2">
            <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-300">
              #RadialBeam
            </span>
            <span className="px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono text-indigo-300">
              #ZeroLag
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 7. Glassmorphism Credit Card with Hover Flip
export const GlassmorphismCreditCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="py-4 flex flex-col items-center justify-center [perspective:1000px]">
      <motion.div
        onClick={() => {
          playSound('click');
          setFlipped(!flipped);
        }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-72 h-44 rounded-2xl p-5 cursor-pointer relative shadow-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 select-none overflow-hidden"
      >
        {/* Glow ambient circle */}
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-indigo-500/30 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-cyan-500/20 blur-2xl pointer-events-none" />

        {!flipped ? (
          <div className="h-full flex flex-col justify-between relative z-10 [backface-visibility:hidden]">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-1.5">
                <span className="w-8 h-6 rounded bg-gradient-to-r from-amber-300 to-amber-500 flex items-center justify-center shadow-inner">
                  <span className="w-6 h-4 border border-black/40 rounded-sm" />
                </span>
                <Radio className="w-4 h-4 text-white/50 rotate-90" />
              </div>
              <span className="font-heading font-bold text-sm tracking-widest text-indigo-300">
                LUMINA
              </span>
            </div>

            <div>
              <div className="font-mono text-sm tracking-[0.2em] text-white/90 drop-shadow">
                •••• 8824 5190 3341
              </div>
            </div>

            <div className="flex justify-between items-end text-[11px] font-mono text-white/70">
              <div>
                <div className="text-[8px] uppercase tracking-wider text-white/40">Cardholder</div>
                <div className="font-sans font-medium text-white">ALEXANDER VANE</div>
              </div>
              <div className="text-right">
                <div className="text-[8px] uppercase tracking-wider text-white/40">Expires</div>
                <div>09/29</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col justify-between py-2 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="w-full h-8 bg-black/60 -mx-5 px-5 mt-2" />
            <div className="bg-white/10 p-2 rounded flex justify-end font-mono text-xs text-white">
              <span className="italic pr-2 text-white/50">CVV</span> 742
            </div>
            <div className="text-[9px] text-white/40 text-center font-mono">
              Click again to flip back
            </div>
          </div>
        )}
      </motion.div>
      <span className="text-[11px] text-slate-500 mt-2 font-mono flex items-center gap-1">
        <Sparkles className="w-3 h-3 text-indigo-400" /> Tap card to flip (3D Spring)
      </span>
    </div>
  );
};

// 8. Orbiting Glow Border Card
export const OrbitingGlowBorderCard = () => {
  return (
    <div className="py-4 flex items-center justify-center">
      <div className="relative w-80 p-0.5 rounded-2xl overflow-hidden group">
        {/* Endless Laser Glow Trail */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-indigo-500 animate-[spin_4s_linear_infinite]" />
        
        <div className="relative z-10 w-full rounded-[15px] bg-[#0c0e15] p-5 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-medium text-cyan-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              LASER PERIMETER
            </span>
            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white/80 font-mono">CSS Conic</span>
          </div>
          <h4 className="text-base font-bold text-white mb-1">Dual Orbit Beacon</h4>
          <p className="text-xs text-slate-400 leading-relaxed mb-3">
            A continuous luminescent light stream travels along the rounded border smoothly.
          </p>
          <button 
            onClick={() => playSound('click')}
            className="w-full py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-200 transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Inspect Widget</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// 9. Cyberpunk Glitch Text
export const CyberpunkGlitchText = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="py-6 flex flex-col items-center justify-center">
      <div 
        onMouseEnter={() => {
          playSound('laser');
          setHovered(true);
        }}
        onMouseLeave={() => setHovered(false)}
        className="relative cursor-pointer select-none py-2"
      >
        <span className={`font-heading font-extrabold text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 ${hovered ? 'animate-pulse' : ''}`}>
          CYBERPUNK 2088
        </span>

        {hovered && (
          <>
            <span 
              className="absolute top-2 left-0 font-heading font-extrabold text-3xl tracking-wider text-cyan-400 opacity-70 pointer-events-none"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)', transform: 'translate(-2px, -1px)' }}
            >
              CYBERPUNK 2088
            </span>
            <span 
              className="absolute top-2 left-0 font-heading font-extrabold text-3xl tracking-wider text-fuchsia-500 opacity-70 pointer-events-none"
              style={{ clipPath: 'polygon(0 60%, 100% 60%, 100% 100%, 0 100%)', transform: 'translate(2px, 1px)' }}
            >
              CYBERPUNK 2088
            </span>
          </>
        )}
      </div>
      <span className="text-[11px] font-mono text-slate-500 mt-2">
        Hover to trigger chromatic slice aberration
      </span>
    </div>
  );
};

// 10. Aurora Gradient Flow Text
export const AuroraGradientFlowText = () => {
  return (
    <div className="py-6 flex flex-col items-center justify-center text-center">
      <h3 className="font-heading font-black text-3xl sm:text-4xl tracking-tight bg-gradient-to-r from-emerald-400 via-teal-300 via-indigo-400 to-fuchsia-400 bg-[length:200%_auto] animate-[gradient_4s_ease_infinite] bg-clip-text text-transparent">
        Fluid Aurora Flow
      </h3>
      <p className="text-xs font-mono text-slate-400 mt-2">
        Continuous multi-stop mesh gradient animation
      </p>
    </div>
  );
};

// 11. Terminal Typewriter with Interactive Input
export const TerminalTypewriterText = () => {
  const [text, setText] = useState('');
  const fullText = '$ npx create-lumina-app@latest --animated';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-4 w-full max-w-sm mx-auto">
      <div className="rounded-xl bg-[#0b0d14] border border-white/10 p-3.5 shadow-xl font-mono text-xs">
        <div className="flex items-center gap-1.5 mb-2.5 pb-2 border-b border-white/5 text-slate-500">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[10px] text-slate-400">bash — 80x24</span>
        </div>
        <div className="flex items-center text-emerald-400 font-semibold">
          <span>{text}</span>
          <span className="w-2 h-4 bg-emerald-400 ml-1 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

// 12. Dynamic Island Interactive Pill
export const DynamicIslandPill = () => {
  const [expanded, setExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = () => {
    playSound('pop');
    setExpanded(!expanded);
  };

  return (
    <div className="py-6 flex items-center justify-center">
      <motion.div
        layout
        onClick={toggle}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className={`bg-black border border-white/15 cursor-pointer shadow-2xl text-white overflow-hidden ${
          expanded ? 'w-80 rounded-3xl p-4' : 'w-48 rounded-full py-2 px-3.5'
        }`}
      >
        {!expanded ? (
          <motion.div layout className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[11px] text-neutral-300">Spotify Live</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-0.5 h-3 bg-indigo-400 animate-[bounce_0.8s_infinite]" />
              <span className="w-0.5 h-4 bg-indigo-300 animate-[bounce_0.6s_infinite_0.1s]" />
              <span className="w-0.5 h-2 bg-indigo-500 animate-[bounce_0.7s_infinite_0.2s]" />
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center shadow-lg">
                  <Flame className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Midnight Resonance</div>
                  <div className="text-[10px] text-neutral-400 font-mono">Synthwave FM • 320kbps</div>
                </div>
              </div>
              <button 
                onClick={toggle}
                className="text-[11px] text-neutral-400 hover:text-white px-2 py-0.5 rounded bg-white/10"
              >
                Close
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 py-1">
              <button 
                onClick={() => {
                  playSound('click');
                  setIsPlaying(!isPlaying);
                }}
                className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black ml-0.5" />}
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

// 13. Radar Sonar Beacon Badge
export const RadarBeaconBadge = () => {
  return (
    <div className="py-6 flex items-center justify-center gap-4">
      <div className="relative inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium shadow-lg shadow-emerald-500/10">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span>RADAR ACTIVE • 99.99% SYSTEM HEALTH</span>
      </div>
    </div>
  );
};

// 14. Cosmic Stardust Particle Pill
export const CosmicStardustPill = () => {
  return (
    <div className="py-6 flex items-center justify-center">
      <div className="relative px-5 py-2 rounded-full bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-slate-900/40 border border-purple-500/30 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs font-medium text-purple-200 overflow-hidden group">
        {/* Floating stardust lights */}
        <span className="w-1 h-1 rounded-full bg-white absolute top-1 left-4 animate-ping" />
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 absolute bottom-1 right-6 animate-pulse" />
        <Sparkles className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300 animate-spin-slow" />
        <span>Cosmic Particle Pill</span>
        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
          PRO
        </span>
      </div>
    </div>
  );
};

// 15. Tactile Elastic Switch / Toggle
export const TactileElasticSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    playSound('pop');
    setIsOn(!isOn);
  };

  return (
    <div className="py-6 flex items-center justify-center gap-4">
      <button
        onClick={toggle}
        className={`w-16 h-9 rounded-full p-1 cursor-pointer transition-colors duration-300 focus:outline-none ${
          isOn ? 'bg-indigo-600 shadow-lg shadow-indigo-500/40' : 'bg-neutral-800'
        }`}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 600, damping: 25 }}
          className={`w-7 h-7 rounded-full flex items-center justify-center shadow-md ${
            isOn ? 'bg-white text-indigo-600' : 'bg-neutral-400 text-neutral-800'
          }`}
        >
          {isOn ? <Zap className="w-3.5 h-3.5 fill-indigo-600" /> : <div className="w-2 h-2 rounded-full bg-neutral-600" />}
        </motion.div>
      </button>
      <span className="text-xs font-mono text-neutral-400">
        Status: <span className={isOn ? "text-indigo-400 font-bold" : "text-neutral-500"}>{isOn ? "POWERED" : "OFF"}</span>
      </span>
    </div>
  );
};

// 16. Spotlight Cyber Search Input
export const SpotlightCyberInput = () => {
  const [focused, setFocused] = useState(false);
  const [val, setVal] = useState('');

  return (
    <div className="py-4 w-full max-w-sm mx-auto">
      <div className="relative group">
        {/* Glow backdrop on focus */}
        <div className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 blur transition duration-300 ${
          focused ? 'opacity-100' : 'group-hover:opacity-30'
        }`} />

        <div className="relative flex items-center bg-[#0d0f17] border border-white/10 rounded-xl px-3.5 py-2.5 shadow-xl">
          <Search className={`w-4 h-4 mr-2.5 transition-colors ${focused ? 'text-indigo-400' : 'text-slate-400'}`} />
          <input 
            type="text"
            placeholder="Type component name..."
            value={val}
            onChange={(e) => setVal(e.target.value)}
            onFocus={() => {
              playSound('click');
              setFocused(true);
            }}
            onBlur={() => setFocused(false)}
            className="w-full bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] bg-white/10 text-slate-300 px-1.5 py-0.5 rounded border border-white/10">
            <span>⌘</span>K
          </kbd>
        </div>
      </div>
    </div>
  );
};

// 17. Fluid Value Slider
export const FluidValueSlider = () => {
  const [val, setVal] = useState(65);

  const handleChange = (e) => {
    setVal(Number(e.target.value));
    if (Math.random() > 0.7) playSound('click');
  };

  return (
    <div className="py-6 w-full max-w-xs mx-auto">
      <div className="flex justify-between items-center text-xs font-mono mb-2 text-slate-400">
        <span>Spring Damping</span>
        <span className="text-cyan-400 font-bold">{val}%</span>
      </div>
      <div className="relative">
        <input 
          type="range"
          min="0"
          max="100"
          value={val}
          onChange={handleChange}
          className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
        />
      </div>
    </div>
  );
};

// 18. Quantum Orbit Loader
export const QuantumOrbitLoader = () => {
  return (
    <div className="py-6 flex items-center justify-center">
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Ring 1 */}
        <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-[spin_1.5s_linear_infinite]" />
        {/* Ring 2 */}
        <div className="absolute inset-2 rounded-full border-2 border-cyan-400/20 border-r-cyan-400 animate-[spin_2s_linear_infinite_reverse]" />
        {/* Ring 3 */}
        <div className="absolute inset-4 rounded-full border-2 border-fuchsia-500/20 border-b-fuchsia-500 animate-[spin_1s_linear_infinite]" />
        {/* Nucleus */}
        <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_#6366f1] animate-ping" />
      </div>
    </div>
  );
};

// 19. Hyperspace Tunnel Loader
export const HyperspaceTunnelLoader = () => {
  return (
    <div className="py-6 flex items-center justify-center">
      <div className="relative w-20 h-20 flex items-center justify-center">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{
              scale: [0.2, 1.3],
              opacity: [1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: (i - 1) * 0.45,
              ease: "easeOut",
            }}
            className="absolute inset-0 rounded-2xl border border-indigo-400/60 shadow-[0_0_15px_rgba(99,102,241,0.3)]"
          />
        ))}
        <span className="font-mono text-[9px] text-indigo-300 font-bold z-10">WARP</span>
      </div>
    </div>
  );
};

// 20. MacOS Interactive Spring Dock
export const MacOSInteractiveDock = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const icons = [
    { label: 'Terminal', icon: Terminal, color: 'text-emerald-400' },
    { label: 'Shield', icon: ShieldCheck, color: 'text-indigo-400' },
    { label: 'Zap FX', icon: Zap, color: 'text-amber-400' },
    { label: 'Radar', icon: Compass, color: 'text-cyan-400' },
    { label: 'Favorites', icon: Star, color: 'text-pink-400' },
  ];

  return (
    <div className="py-4 flex flex-col items-center justify-center">
      <div className="flex items-end gap-2.5 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
        {icons.map((item, idx) => {
          const Icon = item.icon;
          const isHovered = hoveredIdx === idx;
          const isAdjacent = hoveredIdx !== null && Math.abs(hoveredIdx - idx) === 1;

          let scale = 1;
          if (isHovered) scale = 1.45;
          else if (isAdjacent) scale = 1.2;

          return (
            <motion.button
              key={item.label}
              onMouseEnter={() => {
                playSound('pop');
                setHoveredIdx(idx);
              }}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => playSound('click')}
              animate={{ scale, y: isHovered ? -8 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative p-2.5 rounded-xl bg-[#141724] border border-white/10 hover:border-indigo-500/50 hover:bg-[#1a1f33] transition-colors group flex items-center justify-center"
            >
              <Icon className={`w-5 h-5 ${item.color}`} />
              {isHovered && (
                <span className="absolute -top-7 text-[10px] font-mono bg-black/90 text-white px-2 py-0.5 rounded shadow pointer-events-none whitespace-nowrap border border-white/10">
                  {item.label}
                </span>
              )}
            </motion.button>
          );
        })}
      </div>
      <span className="text-[11px] font-mono text-slate-500 mt-2">
        Hover icons for macOS magnification spring
      </span>
    </div>
  );
};

// 21. Ambient Glow Tab Bar
export const AmbientGlowTabBar = () => {
  const [activeTab, setActiveTab] = useState('Components');
  const tabs = ['Components', 'Animations', 'Playground', 'API Docs'];

  return (
    <div className="py-6 flex items-center justify-center">
      <div className="flex items-center p-1.5 rounded-xl bg-[#0c0e16] border border-white/10 shadow-xl">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => {
                playSound('click');
                setActiveTab(tab);
              }}
              className="relative px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors"
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-indigo-600 rounded-lg shadow-md shadow-indigo-600/40"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors ${isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-slate-200'}`}>
                {tab}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
