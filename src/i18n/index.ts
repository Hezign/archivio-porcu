import { fr } from './fr';
import { it } from './it';
import { en } from './en';
import type { Lang } from './config';

export const translations = { fr, it, en };

export function useTranslations(lang: Lang) {
  return translations[lang];
}

// Mapping des slugs de pages par langue (pour le sélecteur de langue)
// Permet à un visiteur sur /sardaigne/ de basculer vers /it/sardegna/ ou /en/sardinia/
export const pageSlugs = {
  home: { fr: '', it: '', en: '' },
  name: { fr: 'le-nom-porcu', it: 'il-cognome-porcu', en: 'the-porcu-name' },
  sardinia: { fr: 'sardaigne', it: 'sardegna', en: 'sardinia' },
  banditry: { fr: 'banditisme-sarde', it: 'banditismo-sardo', en: 'sardinian-banditry' },
  anonima: { fr: 'anonima-sarda', it: 'anonima-sarda', en: 'anonima-sarda' },
  genealogy: { fr: 'genealogie', it: 'genealogia', en: 'genealogy' },
  legalMentions: { fr: 'mentions-legales', it: 'note-legali', en: 'legal-notice' },
  legalPrivacy: { fr: 'mentions-legales/confidentialite', it: 'note-legali/privacy', en: 'legal-notice/privacy' },
  legalRemoval: { fr: 'mentions-legales/retrait', it: 'note-legali/rimozione', en: 'legal-notice/removal' },
} as const;

export type PageKey = keyof typeof pageSlugs;
