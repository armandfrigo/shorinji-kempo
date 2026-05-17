/** In-page contact form anchor (same URL, all locales). */
export const CONTACT_FORM_ANCHOR = '#contact';

/** Club contact for trial-class inquiries (matches Footer). */
export const HERO_TRIAL_EMAIL = 'marco.pellegrino@shorinjikempo.ch';

export function heroTrialMailHref(subject: string, body: string): string {
  return `mailto:${HERO_TRIAL_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
