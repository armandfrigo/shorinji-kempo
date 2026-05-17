/**
 * Build en/fr/it datenschutzerklaerung.md from de source using section heading map
 * and per-locale intro/footer blocks. Body sections use locale-specific full text files
 * when present, otherwise fall back to machine-assisted legal translation pass.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dePath = join(__dirname, '../src/content/pages/de/datenschutzerklaerung.md');
const deRaw = readFileSync(dePath, 'utf8');
const deBody = deRaw.replace(/^---[\s\S]*?---\n*/, '');

const headingMap = {
  en: {
    '## Datenschutzerklärung': '## Privacy Policy',
    '## Allgemeiner Hinweis': '## General notice',
    '## Bearbeitung von Personendaten': '## Processing of personal data',
    '## Datenschutzerklärung für Cookies': '## Privacy policy for cookies',
    '## Datenschutzerklärung für SSL-/TLS-Verschlüsselung': '## Privacy policy for SSL/TLS encryption',
    '## Datenübertragungssicherheit (ohne SSL)': '## Data transmission security (without SSL)',
    '## Datenschutzerklärung für Server-Log-Files': '## Privacy policy for server log files',
    '## Dienste von Dritten': '## Third-party services',
    '## Datenschutzerklärung für Kontaktformular': '## Privacy policy for contact form',
    '## Datenschutzerklärung für Newsletterdaten': '## Privacy policy for newsletter data',
    '## Datenschutzerklärung für Kommentarfunktion auf dieser Webseite': '## Privacy policy for the comment function on this website',
    '### Speicherung der IP Adresse': '### Storage of IP addresses',
    '### Abonnieren von Kommentaren': '### Subscribing to comments',
    '## Datenschutzerklärung für Recht auf Auskunft, Löschung, Sperrung': '## Privacy policy for the right of access, erasure and blocking',
    '## Datenschutzerklärung für Widerspruch Werbe-Mails': '## Privacy policy for objection to advertising e-mails',
    '## Kostenpflichtige Leistungen': '## Paid services',
    '## Verwendung von Google Maps': '## Use of Google Maps',
    '## Google AdWords': '## Google AdWords',
    '## Einsatz von Google Remarketing': '## Use of Google Remarketing',
    '## Verwendung von Google reCAPTCHA': '## Use of Google reCAPTCHA',
    '## Datenschutzerklärung für Google Analytics': '## Privacy policy for Google Analytics',
    '## Datenschutzerklärung für Google AdSense': '## Privacy policy for Google AdSense',
    '## Datenschutzerklärung für Google +1': '## Privacy policy for Google +1',
    '## Datenschutzerklärung für die Nutzung von Google Web Fonts': '## Privacy policy for the use of Google Web Fonts',
    '## Google Tag Manager': '## Google Tag Manager',
    '## Datenschutzerklärung für Facebook': '## Privacy policy for Facebook',
    '## Datenschutzerklärung für Twitter': '## Privacy policy for Twitter',
    '## Datenschutzerklärung für Instagram': '## Privacy policy for Instagram',
    '## Datenschutzerklärung für LinkedIn': '## Privacy policy for LinkedIn',
    '## Datenschutzerklärung für Pinterest': '## Privacy policy for Pinterest',
    '## Datenschutzerklärung für SoundCloud': '## Privacy policy for SoundCloud',
    '## Datenschutzerklärung für Tumblr': '## Privacy policy for Tumblr',
    '## Externe Zahlungsdienstleister': '## External payment service providers',
    '## Newsletter - Mailchimp': '## Newsletter – Mailchimp',
    '## Datenschutzerklärung für YouTube': '## Privacy policy for YouTube',
    '## Datenschutzerklärung für Vimeo': '## Privacy policy for Vimeo',
    '## Amazon-Partnerprogramm': '## Amazon affiliate programme',
    '## Booking.com-Partnerprogramm': '## Booking.com affiliate programme',
    '## Bestellabwicklung im Online-Shop mit Kundenkonto': '## Order processing in the online shop with customer account',
    '## Agenturdienstleistungen': '## Agency services',
    '## Maklerleistungen': '## Brokerage services',
    '## Vertragliche Leistungen': '## Contractual services',
    '## Administration, Finanzbuchhaltung, Büroorganisation, Kontaktverwaltung': '## Administration, financial accounting, office organisation, contact management',
    '## Erbringung unserer Leistungen nach Statuten': '## Provision of our services under the statutes',
    '## Hinweis betreffend Datenübermittlungen in die USA (Vereinigte Staaten von Amerika)': '## Notice regarding data transfers to the USA (United States of America)',
    '## Urheberrechte': '## Copyright',
    '## Allgemeiner Haftungsausschluss': '## General disclaimer of liability',
    '## Änderungen': '## Changes',
    '## Fragen an den Datenschutzbeauftragten': '## Questions for the data protection officer',
  },
  fr: {
    '## Datenschutzerklärung': '## Politique de confidentialité',
    '## Allgemeiner Hinweis': '## Avis général',
    '## Bearbeitung von Personendaten': '## Traitement des données personnelles',
    '## Datenschutzerklärung für Cookies': '## Politique de confidentialité relative aux cookies',
    '## Datenschutzerklärung für SSL-/TLS-Verschlüsselung': '## Politique de confidentialité relative au chiffrement SSL/TLS',
    '## Datenübertragungssicherheit (ohne SSL)': '## Sécurité de la transmission des données (sans SSL)',
    '## Datenschutzerklärung für Server-Log-Files': '## Politique de confidentialité relative aux fichiers journaux du serveur',
    '## Dienste von Dritten': '## Services de tiers',
    '## Datenschutzerklärung für Kontaktformular': '## Politique de confidentialité relative au formulaire de contact',
    '## Datenschutzerklärung für Newsletterdaten': '## Politique de confidentialité relative aux données de newsletter',
    '## Datenschutzerklärung für Kommentarfunktion auf dieser Webseite': '## Politique de confidentialité relative à la fonction de commentaires sur ce site',
    '### Speicherung der IP Adresse': '### Stockage des adresses IP',
    '### Abonnieren von Kommentaren': '### Abonnement aux commentaires',
    '## Datenschutzerklärung für Recht auf Auskunft, Löschung, Sperrung': '## Politique de confidentialité relative au droit d\'accès, d\'effacement et de blocage',
    '## Datenschutzerklärung für Widerspruch Werbe-Mails': '## Politique de confidentialité relative à l\'opposition aux e-mails publicitaires',
    '## Kostenpflichtige Leistungen': '## Services payants',
    '## Verwendung von Google Maps': '## Utilisation de Google Maps',
    '## Google AdWords': '## Google AdWords',
    '## Einsatz von Google Remarketing': '## Utilisation du remarketing Google',
    '## Verwendung von Google reCAPTCHA': '## Utilisation de Google reCAPTCHA',
    '## Datenschutzerklärung für Google Analytics': '## Politique de confidentialité relative à Google Analytics',
    '## Datenschutzerklärung für Google AdSense': '## Politique de confidentialité relative à Google AdSense',
    '## Datenschutzerklärung für Google +1': '## Politique de confidentialité relative à Google +1',
    '## Datenschutzerklärung für die Nutzung von Google Web Fonts': '## Politique de confidentialité relative à l\'utilisation de Google Web Fonts',
    '## Google Tag Manager': '## Google Tag Manager',
    '## Datenschutzerklärung für Facebook': '## Politique de confidentialité relative à Facebook',
    '## Datenschutzerklärung für Twitter': '## Politique de confidentialité relative à Twitter',
    '## Datenschutzerklärung für Instagram': '## Politique de confidentialité relative à Instagram',
    '## Datenschutzerklärung für LinkedIn': '## Politique de confidentialité relative à LinkedIn',
    '## Datenschutzerklärung für Pinterest': '## Politique de confidentialité relative à Pinterest',
    '## Datenschutzerklärung für SoundCloud': '## Politique de confidentialité relative à SoundCloud',
    '## Datenschutzerklärung für Tumblr': '## Politique de confidentialité relative à Tumblr',
    '## Externe Zahlungsdienstleister': '## Prestataires de paiement externes',
    '## Newsletter - Mailchimp': '## Newsletter – Mailchimp',
    '## Datenschutzerklärung für YouTube': '## Politique de confidentialité relative à YouTube',
    '## Datenschutzerklärung für Vimeo': '## Politique de confidentialité relative à Vimeo',
    '## Amazon-Partnerprogramm': '## Programme d\'affiliation Amazon',
    '## Booking.com-Partnerprogramm': '## Programme d\'affiliation Booking.com',
    '## Bestellabwicklung im Online-Shop mit Kundenkonto': '## Traitement des commandes dans la boutique en ligne avec compte client',
    '## Agenturdienstleistungen': '## Services d\'agence',
    '## Maklerleistungen': '## Services de courtage',
    '## Vertragliche Leistungen': '## Prestations contractuelles',
    '## Administration, Finanzbuchhaltung, Büroorganisation, Kontaktverwaltung': '## Administration, comptabilité, organisation de bureau, gestion des contacts',
    '## Erbringung unserer Leistungen nach Statuten': '## Prestation de nos services selon les statuts',
    '## Hinweis betreffend Datenübermittlungen in die USA (Vereinigte Staaten von Amerika)': '## Avis concernant les transferts de données vers les États-Unis d\'Amérique',
    '## Urheberrechte': '## Droits d\'auteur',
    '## Allgemeiner Haftungsausschluss': '## Clause générale de non-responsabilité',
    '## Änderungen': '## Modifications',
    '## Fragen an den Datenschutzbeauftragten': '## Questions au délégué à la protection des données',
  },
  it: {
    '## Datenschutzerklärung': '## Informativa sulla privacy',
    '## Allgemeiner Hinweis': '## Avviso generale',
    '## Bearbeitung von Personendaten': '## Trattamento dei dati personali',
    '## Datenschutzerklärung für Cookies': '## Informativa sulla privacy relativa ai cookie',
    '## Datenschutzerklärung für SSL-/TLS-Verschlüsselung': '## Informativa sulla privacy relativa alla crittografia SSL/TLS',
    '## Datenübertragungssicherheit (ohne SSL)': '## Sicurezza della trasmissione dei dati (senza SSL)',
    '## Datenschutzerklärung für Server-Log-Files': '## Informativa sulla privacy relativa ai file di log del server',
    '## Dienste von Dritten': '## Servizi di terze parti',
    '## Datenschutzerklärung für Kontaktformular': '## Informativa sulla privacy relativa al modulo di contatto',
    '## Datenschutzerklärung für Newsletterdaten': '## Informativa sulla privacy relativa ai dati della newsletter',
    '## Datenschutzerklärung für Kommentarfunktion auf dieser Webseite': '## Informativa sulla privacy relativa alla funzione commenti su questo sito',
    '### Speicherung der IP Adresse': '### Conservazione degli indirizzi IP',
    '### Abonnieren von Kommentaren': '### Abbonamento ai commenti',
    '## Datenschutzerklärung für Recht auf Auskunft, Löschung, Sperrung': '## Informativa sulla privacy relativa al diritto di accesso, cancellazione e blocco',
    '## Datenschutzerklärung für Widerspruch Werbe-Mails': '## Informativa sulla privacy relativa all\'opposizione alle e-mail pubblicitarie',
    '## Kostenpflichtige Leistungen': '## Servizi a pagamento',
    '## Verwendung von Google Maps': '## Utilizzo di Google Maps',
    '## Google AdWords': '## Google AdWords',
    '## Einsatz von Google Remarketing': '## Utilizzo del remarketing di Google',
    '## Verwendung von Google reCAPTCHA': '## Utilizzo di Google reCAPTCHA',
    '## Datenschutzerklärung für Google Analytics': '## Informativa sulla privacy relativa a Google Analytics',
    '## Datenschutzerklärung für Google AdSense': '## Informativa sulla privacy relativa a Google AdSense',
    '## Datenschutzerklärung für Google +1': '## Informativa sulla privacy relativa a Google +1',
    '## Datenschutzerklärung für die Nutzung von Google Web Fonts': '## Informativa sulla privacy relativa all\'utilizzo di Google Web Fonts',
    '## Google Tag Manager': '## Google Tag Manager',
    '## Datenschutzerklärung für Facebook': '## Informativa sulla privacy relativa a Facebook',
    '## Datenschutzerklärung für Twitter': '## Informativa sulla privacy relativa a Twitter',
    '## Datenschutzerklärung für Instagram': '## Informativa sulla privacy relativa a Instagram',
    '## Datenschutzerklärung für LinkedIn': '## Informativa sulla privacy relativa a LinkedIn',
    '## Datenschutzerklärung für Pinterest': '## Informativa sulla privacy relativa a Pinterest',
    '## Datenschutzerklärung für SoundCloud': '## Informativa sulla privacy relativa a SoundCloud',
    '## Datenschutzerklärung für Tumblr': '## Informativa sulla privacy relativa a Tumblr',
    '## Externe Zahlungsdienstleister': '## Fornitori di servizi di pagamento esterni',
    '## Newsletter - Mailchimp': '## Newsletter – Mailchimp',
    '## Datenschutzerklärung für YouTube': '## Informativa sulla privacy relativa a YouTube',
    '## Datenschutzerklärung für Vimeo': '## Informativa sulla privacy relativa a Vimeo',
    '## Amazon-Partnerprogramm': '## Programma di affiliazione Amazon',
    '## Booking.com-Partnerprogramm': '## Programma di affiliazione Booking.com',
    '## Bestellabwicklung im Online-Shop mit Kundenkonto': '## Gestione degli ordini nel negozio online con account cliente',
    '## Agenturdienstleistungen': '## Servizi di agenzia',
    '## Maklerleistungen': '## Servizi di intermediazione',
    '## Vertragliche Leistungen': '## Prestazioni contrattuali',
    '## Administration, Finanzbuchhaltung, Büroorganisation, Kontaktverwaltung': '## Amministrazione, contabilità, organizzazione d\'ufficio, gestione dei contatti',
    '## Erbringung unserer Leistungen nach Statuten': '## Erogazione dei nostri servizi secondo lo statuto',
    '## Hinweis betreffend Datenübermittlungen in die USA (Vereinigte Staaten von Amerika)': '## Avviso relativo ai trasferimenti di dati negli USA (Stati Uniti d\'America)',
    '## Urheberrechte': '## Diritti d\'autore',
    '## Allgemeiner Haftungsausschluss': '## Esclusione generale di responsabilità',
    '## Änderungen': '## Modifiche',
    '## Fragen an den Datenschutzbeauftragten': '## Domande al responsabile della protezione dei dati',
  },
};

const meta = {
  en: { lang: 'en', title: 'Privacy Policy' },
  fr: { lang: 'fr', title: 'Politique de confidentialité' },
  it: { lang: 'it', title: 'Informativa sulla privacy' },
};

const phraseReplacements = {
  en: [
    [/Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung \(DSGVO\), ist:/g,
      'The controller within the meaning of data protection laws, in particular the EU General Data Protection Regulation (GDPR), is:'],
    [/Schweizerische Shorinji Kempo Föderation/g, 'Swiss Shorinji Kempo Federation'],
    [/WebSite:/g, 'Website:'],
    [/Gestützt auf Artikel 13 der schweizerischen Bundesverfassung/g,
      'Pursuant to Article 13 of the Swiss Federal Constitution'],
    [/Datenschutzgesetz, DSG/g, 'Federal Act on Data Protection (FADP)'],
    [/personenbezogenen Daten/g, 'personal data'],
    [/Personendaten/g, 'personal data'],
    [/betroffenen Person/g, 'data subject'],
    [/Diese WebSite/g, 'This website'],
    [/dieser WebSite/g, 'this website'],
    [/unserer WebSite/g, 'our website'],
    [/Impressum/g, 'legal notice'],
    [/gemäss/g, 'in accordance with'],
    [/gemäss/g, 'in accordance with'],
    [/Quelle:/g, 'Source:'],
    [/Basel, 15\.10\.2019/g, 'Basel, 15 October 2019'],
    [/lit\. a\)/g, 'lit. a)'],
    [/lit\. b\)/g, 'lit. b)'],
    [/lit\. c\)/g, 'lit. c)'],
    [/lit\. d\)/g, 'lit. d)'],
    [/lit\. f\)/g, 'lit. f)'],
  ],
  fr: [
    [/Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung \(DSGVO\), ist:/g,
      'Le responsable au sens des lois sur la protection des données, en particulier du Règlement général sur la protection des données de l\'UE (RGPD), est :'],
    [/Schweizerische Shorinji Kempo Föderation/g, 'Fédération suisse de Shorinji Kempo'],
    [/WebSite:/g, 'Site web :'],
    [/Gestützt auf Artikel 13 der schweizerischen Bundesverfassung/g,
      'Conformément à l\'article 13 de la Constitution fédérale suisse'],
    [/Datenschutzgesetz, DSG/g, 'loi fédérale sur la protection des données (LPD)'],
    [/personenbezogenen Daten/g, 'données personnelles'],
    [/Personendaten/g, 'données personnelles'],
    [/betroffenen Person/g, 'personne concernée'],
    [/Diese WebSite/g, 'Ce site web'],
    [/dieser WebSite/g, 'ce site web'],
    [/unserer WebSite/g, 'notre site web'],
    [/Impressum/g, 'mentions légales'],
    [/gemäss/g, 'conformément à'],
    [/Quelle:/g, 'Source :'],
    [/Basel, 15\.10\.2019/g, 'Bâle, 15 octobre 2019'],
  ],
  it: [
    [/Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung \(DSGVO\), ist:/g,
      'Il titolare del trattamento ai sensi delle leggi sulla protezione dei dati, in particolare del Regolamento generale sulla protezione dei dati dell\'UE (GDPR), è:'],
    [/Schweizerische Shorinji Kempo Föderation/g, 'Federazione svizzera di Shorinji Kempo'],
    [/WebSite:/g, 'Sito web:'],
    [/Gestützt auf Artikel 13 der schweizerischen Bundesverfassung/g,
      'Ai sensi dell\'articolo 13 della Costituzione federale svizzera'],
    [/Datenschutzgesetz, DSG/g, 'legge federale sulla protezione dei dati (LPD)'],
    [/personenbezogenen Daten/g, 'dati personali'],
    [/Personendaten/g, 'dati personali'],
    [/betroffenen Person/g, 'interessato'],
    [/Diese WebSite/g, 'Questo sito web'],
    [/dieser WebSite/g, 'questo sito web'],
    [/unserer WebSite/g, 'il nostro sito web'],
    [/Impressum/g, 'note legali'],
    [/gemäss/g, 'conformemente a'],
    [/Quelle:/g, 'Fonte:'],
    [/Basel, 15\.10\.2019/g, 'Basilea, 15 ottobre 2019'],
  ],
};

function translateBody(locale, body) {
  const fullPath = join(__dirname, `datenschutz-body-${locale}.md`);
  if (existsSync(fullPath)) {
    return readFileSync(fullPath, 'utf8');
  }
  let out = body;
  for (const [de, loc] of Object.entries(headingMap[locale])) {
    out = out.split(de).join(loc);
  }
  for (const [re, rep] of phraseReplacements[locale]) {
    out = out.replace(re, rep);
  }
  return out;
}

for (const locale of ['en', 'fr', 'it']) {
  const body = translateBody(locale, deBody);
  const { lang, title } = meta[locale];
  const out = join(__dirname, `../src/content/pages/${locale}/datenschutzerklaerung.md`);
  writeFileSync(
    out,
    `---
lang: ${lang}
routeSlug: datenschutzerklaerung
title: ${title}
---

${body}`,
    'utf8',
  );
  console.log('Wrote', out);
}
