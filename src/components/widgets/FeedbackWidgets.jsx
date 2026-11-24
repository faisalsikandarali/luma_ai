import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertTriangle, X, Star, Bell, Info, ShieldAlert, Sparkles } from 'lucide-react';
import { playSound } from '../../utils/sound';

// 1. Sliding Toast Notification with Undo
export const SlidingToastNotification = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="w-64">
      <AnimatePresence>
        {show ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex items-center justify-between p-3 rounded-xl bg-[#0e101a] border border-white/10 shadow-2xl text-xs"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-white">Snippet Copied!</span>
            </div>
            <button 
              onClick={() => { playSound('pop'); setShow(false); }}
              className="text-[10px] text-indigo-400 font-mono hover:underline"
            >
              Dismiss
            </button>
          </motion.div>
        ) : (
          <button 
            onClick={() => { playSound('pop'); setShow(true); }}
            className="text-xs text-slate-400 hover:text-white underline font-mono"
          >
            Trigger Toast
          </button>
        )}
      </AnimatePresence>
    </div>
  );
};

// 2. Glassmorphism Modal Alert
export const GlassmorphismModalAlert = () => (
  <div className="w-64 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl space-y-2">
    <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold">
      <Info className="w-4 h-4" />
      <span>Session Verified</span>
    </div>
    <p className="text-[11px] text-slate-300">Your cryptographic token has been renewed successfully.</p>
  </div>
);

// 3. Cyberpunk Error Banner
export const CyberpunkErrorBanner = () => (
  <div className="w-64 p-3 rounded-xl bg-rose-950/40 border border-rose-500/40 shadow-[0_0_15px_rgba(244,63,94,0.15)] flex items-center gap-2.5">
    <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
    <span className="text-[11px] font-mono text-rose-200">ERR_403: ACCESS_RESTRICTED</span>
  </div>
);

// 4. Interactive Rating Stars
export const InteractiveRatingStars = () => {
  const [rating, setRating] = useState(4);
  return (
    <div className="flex gap-1.5 items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => { playSound('pop'); setRating(star); }}
          className="text-slate-600 hover:scale-110 transition-transform"
        >
          <Star className={`w-4 h-4 ${star <= rating ? 'text-amber-400 fill-amber-400' : ''}`} />
        </button>
      ))}
    </div>
  );
};

// 5. Tooltip Micro Bubble
export const TooltipMicroBubble = () => (
  <div className="relative group inline-block">
    <button className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-slate-200 border border-white/10">
      Hover Tooltip
    </button>
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2 py-1 rounded bg-black text-[10px] text-white whitespace-nowrap border border-white/15 shadow-xl font-mono">
      Copy to clipboard ↵
    </div>
  </div>
);

// 6. Warning Beacon Popover
export const WarningBeaconPopover = () => (
  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
    <AlertTriangle className="w-3.5 h-3.5" />
    <span className="font-mono text-[11px]">Unsaved changes pending</span>
  </div>
);

// 7. Success Verification Check
export const SuccessVerificationBadge = () => (
  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
    <span>Verified 100% Secure</span>
  </div>
);

// 8. Frosted Cookie Banner
export const FrostedCookieBanner = () => (
  <div className="w-64 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2">
    <p className="text-[10px] text-slate-400">We utilize telemetry cookies for physics simulations.</p>
    <button onClick={() => playSound('pop')} className="w-full py-1 rounded-lg bg-indigo-600 text-white text-[10px] font-bold">
      Accept All
    </button>
  </div>
);

// 9. Floating Notification Bubble
export const FloatingNotificationBubble = () => (
  <div className="relative p-2.5 rounded-xl bg-[#121422] border border-white/10 text-slate-300">
    <Bell className="w-4 h-4 text-indigo-400" />
    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-rose-500 border border-black flex items-center justify-center text-[7px] font-bold text-white">3</span>
  </div>
);

// 10. Live Audio Waveform Simulation
export const AudioWaveformFeedback = () => (
  <div className="flex items-center gap-1 h-6">
    {[8, 16, 24, 12, 20, 14, 22, 10].map((h, i) => (
      <span key={i} style={{ height: `${h}px` }} className="w-1 bg-cyan-400 rounded-full animate-pulse" />
    ))}
  </div>
);

// 11. Minimal Toast Alert
export const MinimalToastAlert = () => (
  <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-[#0d0f18] border border-white/10 text-xs font-mono text-emerald-400">
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
    <span>Deployed to Edge in 14ms</span>
  </div>
);
