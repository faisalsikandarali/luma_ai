import fs from 'fs';
import path from 'path';

const outDir = path.resolve('src/data/categories');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// 1. BUTTONS (50 items)
const buttonDefs = [
  { id: 'btn-magnetic-liquid', title: 'Magnetic Liquid Spring Button', badge: 'HOT', color: 'indigo', icon: 'Sparkles', effect: 'liquid-magnetic', desc: 'Fluid magnetic attraction pulling toward cursor coordinates with liquid glossy glare.' },
  { id: 'btn-shimmer-cyber', title: 'Cyber Conic Shimmer Button', badge: 'TRENDING', color: 'purple', icon: 'Zap', effect: 'conic-spin', desc: 'Rotating laser conic beam traveling along button perimeter with dark obsidian core.' },
  { id: 'btn-confetti-cannon', title: 'Confetti Cannon Explosion', badge: 'POPULAR', color: 'rose', icon: 'Sparkles', effect: 'confetti', desc: 'Triggers multi-color celebration particle cannon directly at button coordinates.' },
  { id: 'btn-morphing-state', title: 'Morphing Payment Button', badge: 'PRO', color: 'emerald', icon: 'CreditCard', effect: 'morph-state', desc: 'Seamless layout transition between Idle, Spinner, and Success states.' },
  { id: 'btn-neon-cyber', title: 'Neon Cyber Glow Button', badge: 'CYBER', color: 'cyan', icon: 'Terminal', effect: 'neon-glow', desc: 'Sci-fi holographic border glow with subtle ping indicator.' },
  { id: 'btn-frosted-glass', title: 'Frosted Glassmorphism Button', badge: 'CLASSY', color: 'white', icon: 'Shield', effect: 'glass', desc: 'Translucent frosted backdrop blur with soft white specular border.' },
  { id: 'btn-ripple-pulse', title: 'Ripple Quantum Pulse Button', badge: 'NEW', color: 'pink', icon: 'Sparkles', effect: 'pulse-ripple', desc: 'Concentric pulse glow wave radiating on interaction.' },
  { id: 'btn-gradient-sweep', title: 'Gradient Sweep Border', badge: 'SMOOTH', color: 'emerald', icon: 'Zap', effect: 'gradient-sweep', desc: 'Tri-color gradient rotating behind obsidian surface.' },
  { id: 'btn-holographic-foil', title: 'Holographic Metallic Foil', badge: 'CHIC', color: 'amber', icon: 'Sparkles', effect: 'foil', desc: 'Multi-stop pastel foil gradient with high-end luxury shine.' },
  { id: 'btn-minimal-pill', title: 'Minimalist Monospace Pill Button', badge: 'CLEAN', color: 'slate', icon: 'Terminal', effect: 'mono-pill', desc: 'Subtle monochromatic pill button with monospaced typography.' },
  { id: 'btn-neu-brutalist', title: 'Neu-Brutalist High Contrast Button', badge: 'BOLD', color: 'yellow', icon: 'ArrowRight', effect: 'brutalist', desc: 'Punchy high contrast yellow action button with hard 4px drop shadow offset.' },
  { id: 'btn-floating-elevation', title: 'Floating 3D Push Button', badge: 'TACTILE', color: 'indigo', icon: 'Download', effect: 'elevation-push', desc: 'Physical 3D press-down depth sensation with 8px base ledge.' },
  { id: 'btn-retro-arcade', title: 'Retro Arcade 8-Bit Button', badge: 'RETRO', color: 'fuchsia', icon: 'Zap', effect: 'arcade', desc: 'Nostalgic arcade machine neon button with pixel border glow.' },
  { id: 'btn-liquid-fill', title: 'Liquid Fluid Fill Button', badge: 'SURGE', color: 'indigo', icon: 'Heart', effect: 'liquid-surge', desc: 'Smooth vertical liquid surge filling button background on mouse hover.' },
  { id: 'btn-border-beam', title: 'Border Beam Traveling Ray', badge: 'POPULAR', color: 'cyan', icon: 'Zap', effect: 'border-beam', desc: 'Luminescent laser beam tracing the rounded rectangular perimeter.' },
  { id: 'btn-cosmic-stardust', title: 'Cosmic Stardust Particle Button', badge: 'PRO', color: 'purple', icon: 'Sparkles', effect: 'stardust', desc: 'Twinkling particle sparkles floating inside a gradient glass capsule.' },
  { id: 'btn-jelly-bounce', title: 'Jelly Elastic Wobble Button', badge: 'PLAYFUL', color: 'amber', icon: 'Zap', effect: 'jelly', desc: 'Squishy spring physics bouncing like jelly when tapped.' },
  { id: 'btn-sound-reactive', title: 'Haptic Audio Click Button', badge: 'AUDIO', color: 'emerald', icon: 'Volume2', effect: 'haptic', desc: 'Mechanical click synthesizer triggered on each cursor interaction.' },
  { id: 'btn-chromatic-slice', title: 'Chromatic Glitch Slice Button', badge: 'CYBER', color: 'rose', icon: 'Terminal', effect: 'glitch-slice', desc: 'RGB chromatic split displacement triggered on hover state.' },
  { id: 'btn-metallic-chrome', title: 'Chrome Metallic Reflection Button', badge: 'LUXURY', color: 'slate', icon: 'Shield', effect: 'chrome', desc: 'Liquid mercury chrome gradient with specular horizon reflections.' },
  { id: 'btn-radar-ping', title: 'Radar Sonar Pulse Button', badge: 'RADAR', color: 'emerald', icon: 'Radio', effect: 'radar', desc: 'Concentric sonar pulse rings expanding from button center.' },
  { id: 'btn-split-flap', title: 'Mechanical Split-Flap Button', badge: 'RETRO', color: 'neutral', icon: 'RefreshCw', effect: 'split-flap', desc: 'Airport departure board mechanical flap flip transition on click.' },
  { id: 'btn-aurora-glow', title: 'Aurora Mesh Bloom Button', badge: 'AURA', color: 'teal', icon: 'Sparkles', effect: 'aurora-bloom', desc: 'Vibrant aurora borealis color gradient blooming on button hover.' },
  { id: 'btn-velvet-dark', title: 'Obsidian Velvet Touch Button', badge: 'MINIMAL', color: 'zinc', icon: 'Lock', effect: 'velvet', desc: 'Subtle matte dark luxury feel with razor-thin white border highlight.' },
  { id: 'btn-heartbeat-pulse', title: 'Heartbeat Rhythm Glow Button', badge: 'VITAL', color: 'rose', icon: 'Heart', effect: 'heartbeat', desc: 'Dual-beat rhythmic pulse glowing smoothly like human heartbeat.' },
  { id: 'btn-matrix-code', title: 'Matrix Rain Terminal Button', badge: 'MATRIX', color: 'emerald', icon: 'Terminal', effect: 'matrix', desc: 'Digital green rain matrix streaming across button background.' },
  { id: 'btn-diamond-crystal', title: 'Diamond Crystal Facet Button', badge: 'GEM', color: 'cyan', icon: 'Sparkles', effect: 'crystal', desc: 'Multi-facet prism reflection simulating cut diamond refraction.' },
  { id: 'btn-rainbow-wave', title: 'Rainbow Chromatic Wave Button', badge: 'COLOR', color: 'indigo', icon: 'Zap', effect: 'rainbow', desc: 'Continuous flowing spectral wave animation across border perimeter.' },
  { id: 'btn-split-action', title: 'Split Action Dropdown Button', badge: 'ACTION', color: 'indigo', icon: 'ChevronDown', effect: 'split-action', desc: 'Dual-compartment button with primary trigger and options dropdown.' },
  { id: 'btn-slide-reveal', title: 'Slide Arrow Reveal Button', badge: 'SMOOTH', color: 'blue', icon: 'ArrowRight', effect: 'slide-reveal', desc: 'Arrow icon slides in smoothly and pushes label text forward.' },
  { id: 'btn-magnetic-pull', title: 'Heavy Gravity Magnetic Button', badge: 'PHYSICS', color: 'violet', icon: 'Compass', effect: 'gravity', desc: 'Strong magnetic pull toward cursor with elastic spring release.' },
  { id: 'btn-glow-badge', title: 'Live Metric Pill Button', badge: 'BADGE', color: 'green', icon: 'Activity', effect: 'metric-pill', desc: 'Integrated notification pill inside primary action container.' },
  { id: 'btn-cyber-barcode', title: 'Cyber Barcode Scan Button', badge: 'SCAN', color: 'slate', icon: 'Barcode', effect: 'barcode', desc: 'Animated laser red scan line sweeping across simulated barcode.' },
  { id: 'btn-double-layer', title: 'Double Layer Offset Button', badge: '3D', color: 'amber', icon: 'Layers', effect: 'double-layer', desc: 'Dual layered stacked button with 3D isometric parallax offset.' },
  { id: 'btn-sparkle-trail', title: 'Cursor Sparkle Trail Button', badge: 'MAGIC', color: 'pink', icon: 'Sparkles', effect: 'sparkle-trail', desc: 'Generates tiny floating star sparks as cursor moves over button.' },
  { id: 'btn-soundwave-fx', title: 'Soundwave Audio Equalizer Button', badge: 'AUDIO', color: 'cyan', icon: 'Volume2', effect: 'soundwave', desc: 'Animated equalizer bars jumping to simulated beat inside button.' },
  { id: 'btn-expandable-icon', title: 'Expanding Icon Capsule Button', badge: 'CLEVER', color: 'indigo', icon: 'Send', effect: 'expand-icon', desc: 'Round icon capsule smoothly stretches into full button on hover.' },
  { id: 'btn-laser-cut', title: 'Laser Cut Chamfered Button', badge: 'CYBER', color: 'sky', icon: 'Zap', effect: 'chamfer', desc: 'Angled sci-fi chamfered corners with glowing edge lighting.' },
  { id: 'btn-gradient-shadow', title: 'Glowing Ambient Shadow Button', badge: 'GLOW', color: 'fuchsia', icon: 'Sparkles', effect: 'ambient-glow', desc: 'Deep luminous shadow matching primary gradient color.' },
  { id: 'btn-press-scale', title: 'Subtle Spring Scale Button', badge: 'TACTILE', color: 'slate', icon: 'Check', effect: 'spring-scale', desc: 'Micro-scale down spring with instant crisp physical snap back.' },
  { id: 'btn-halo-beacon', title: 'Halo Ring Beacon Button', badge: 'BEACON', color: 'emerald', icon: 'Radio', effect: 'halo-beacon', desc: 'Pulsing outer beacon ring drawing user visual attention.' },
  { id: 'btn-futuristic-capsule', title: 'Futuristic Capsule Pill Button', badge: 'SCI-FI', color: 'teal', icon: 'Cpu', effect: 'capsule', desc: 'Ultra-rounded titanium capsule with illuminated indicator dot.' },
  { id: 'btn-shimmer-text', title: 'Shimmering Light Text Button', badge: 'ELEGANT', color: 'slate', icon: 'Sparkles', effect: 'shimmer-text', desc: 'Silvery light sweep gliding across the text characters continuously.' },
  { id: 'btn-speed-blur', title: 'Hyperspeed Streak Button', badge: 'SPEED', color: 'orange', icon: 'FastForward', effect: 'speed-streak', desc: 'Light streaks stretching horizontally simulating hyperdrive speed.' },
  { id: 'btn-neon-switch', title: 'Neon Rocker Switch Button', badge: 'SWITCH', color: 'cyan', icon: 'Zap', effect: 'neon-rocker', desc: 'Mechanical toggle rocker with glowing neon state indicator.' },
  { id: 'btn-dark-glass', title: 'Deep Obsidian Glass Button', badge: 'LUXURY', color: 'zinc', icon: 'Lock', effect: 'dark-glass', desc: 'Frosted smoked glass with high-precision specular highlights.' },
  { id: 'btn-minimal-underline', title: 'Sliding Underline Surge Button', badge: 'MINIMAL', color: 'indigo', icon: 'ArrowRight', effect: 'underline-surge', desc: 'Underline bar expands from left to right on cursor hover.' },
  { id: 'btn-confetti-burst', title: 'Star Confetti Burst Button', badge: 'PARTY', color: 'yellow', icon: 'Star', effect: 'star-burst', desc: 'Explodes golden stars outward in 360 degree celebration circle.' },
  { id: 'btn-biometric-scan', title: 'Biometric Touch Scan Button', badge: 'SECURITY', color: 'cyan', icon: 'ShieldCheck', effect: 'bio-scan', desc: 'Simulated fingerprint optical scan beam with verified success check.' },
  { id: 'btn-cosmic-warp', title: 'Cosmic Warp Speed Button', badge: 'COSMIC', color: 'purple', icon: 'Zap', effect: 'warp-speed', desc: 'Space warp distortion effect with pulsating central gravitational core.' }
];

console.log('Total button definitions prepared:', buttonDefs.length);
