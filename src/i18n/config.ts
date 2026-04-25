// Configuration i18n
export const languages = {
  fr: 'Français',
  it: 'Italiano',
  en: 'English',
} as const;

export const defaultLang = 'fr';

export type Lang = keyof typeof languages;

// Helpers pour les chemins
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

// Préfixe URL selon langue (FR = pas de préfixe)
export function langPrefix(lang: Lang): string {
  return lang === defaultLang ? '' : `/${lang}`;
}

// Construit une URL traduite à partir d'un slug et d'une langue cible
export function localizedPath(lang: Lang, slug: string = ''): string {
  const prefix = langPrefix(lang);
  if (!slug) return prefix === '' ? '/' : `${prefix}/`;
  return `${prefix}/${slug}/`;
}
