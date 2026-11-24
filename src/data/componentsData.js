// 450 Production-Ready UI Widgets (50 in each of the 9 categories)
import { buttonsData } from './categories/buttonsData';
import { cardsData } from './categories/cardsData';
import { textData } from './categories/textData';
import { badgesData } from './categories/badgesData';
import { inputsData } from './categories/inputsData';
import { loadersData } from './categories/loadersData';
import { navData } from './categories/navData';
import { feedbackData } from './categories/feedbackData';
import { portfolioData } from './categories/portfolioData';

export const CATEGORIES = [
  { id: 'all', label: 'All 450 Widgets', icon: 'Sparkles', count: 450 },
  { id: 'portfolio', label: 'Portfolio & Profile Cards', icon: 'UserCheck', count: 50 },
  { id: 'buttons', label: 'Buttons & Actions', icon: 'Zap', count: 50 },
  { id: 'cards', label: '3D & Bento Cards', icon: 'Layers', count: 50 },
  { id: 'text', label: 'Text & Typo FX', icon: 'Terminal', count: 50 },
  { id: 'badges', label: 'Badges & Indicators', icon: 'ShieldCheck', count: 50 },
  { id: 'inputs', label: 'Inputs & Controls', icon: 'Sliders', count: 50 },
  { id: 'loaders', label: 'Loaders & Spinners', icon: 'RotateCw', count: 50 },
  { id: 'nav', label: 'Navigation & Docks', icon: 'Compass', count: 50 },
  { id: 'feedback', label: 'Feedback & Alerts', icon: 'Bell', count: 50 },
];

export const COMPONENTS_DATA = [
  ...portfolioData,
  ...buttonsData,
  ...cardsData,
  ...textData,
  ...badgesData,
  ...inputsData,
  ...loadersData,
  ...navData,
  ...feedbackData
];
