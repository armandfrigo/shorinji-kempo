export type HomeLang = 'de' | 'fr' | 'en' | 'it';

export type HomeDojo = {
  name: string;
  instructor: string;
  schedule: string;
  address: string;
  city: string;
  phone: string | null;
  email: string;
  fees: string;
  googleMapsUrl: string;
  slug: 'basel' | 'aubonne' | 'muri';
  description: string;
};

export type HomeCopy = {
  hero: { title: string; subtitle: string; cta: string; footer: string };
  philosophy: { heading: string; intro: string; benefits: string[]; learnMore: string };
  dojos: { heading: string; subheading: string; viewAll: string };
  whyJoin: { heading: string; reasons: { icon: string; title: string; description: string }[] };
  faqPreview: { heading: string; questions: { q: string; a: string }[]; viewAll: string };
  cta: { heading: string; subheading: string; button: string };
};

export const homeCopy: Record<HomeLang, HomeCopy> = {
  de: {
    hero: {
      title: 'Shorinji Kempo Schweiz',
      subtitle: 'Körper & Geist — Kraft & Liebe',
      cta: 'Kostenloses Probetraining',
      footer: 'Kostenloses Probetraining · Keine Verpflichtung · Anfänger willkommen',
    },
    philosophy: {
      heading: 'Was ist Shorinji Kempo?',
      intro: 'Eine Kampfkunst ohne Konkurrenz. Ein Weg zu innerer Kraft und äußerem Frieden.',
      benefits: [
        'Selbstverteidigung — realistische Techniken für die echte Welt',
        'Körper & Geist trainieren — nicht nur Muskeln, sondern mentale Klarheit',
        'Gemeinschaft — trainiere mit anderen, nicht gegen sie',
        'Für alle — Kinder, Jugendliche, Erwachsene, jedes Fitnesslevel',
      ],
      learnMore: 'Mehr über Philosophie',
    },
    dojos: {
      heading: 'Unsere Dojos',
      subheading: 'Trainiere dort, wo es für dich passt',
      viewAll: 'Alle Dojos ansehen',
    },
    whyJoin: {
      heading: 'Warum Shorinji Kempo?',
      reasons: [
        { icon: '💪', title: 'Echte Stärke', description: 'Körperlich und mental. Nicht Brutalität, sondern innere Kraft.' },
        { icon: '🤝', title: 'Gemeinschaft', description: 'Trainiere mit Menschen, die dich unterstützen, nicht gegen dich kämpfen.' },
        { icon: '🎯', title: 'Persönliche Entwicklung', description: 'Finde Selbstvertrauen, Disziplin und innere Balance.' },
        { icon: '👨‍👩‍👧‍👦', title: 'Für die ganze Familie', description: 'Kinder ab 6 Jahren bis Erwachsene. Zusammen trainieren.' },
      ],
    },
    faqPreview: {
      heading: 'Häufig gestellte Fragen',
      questions: [
        { q: 'Ist Shorinji Kempo ein Wettkampfsport?', a: 'Nein. Du trainierst mit anderen, nicht gegen sie. Es geht um gegenseitiges Wachstum, nicht um Konkurrenz.' },
        { q: 'Wie fange ich an?', a: 'Komm einfach zu einem kostenlosen Probetraining vorbei. Keine Verpflichtung, keine Verträge.' },
        { q: 'Ist es sicher für Kinder?', a: 'Ja. Shorinji Kempo ist speziell für Kinder gemacht. Keine Konkurrenz, viel Sicherheit, viel Spaß.' },
      ],
      viewAll: 'Alle Fragen ansehen',
    },
    cta: {
      heading: 'Bereit zu starten?',
      subheading: 'Komm zu einem kostenlosen Probetraining vorbei. Keine Verpflichtung.',
      button: 'Kontaktiere uns',
    },
  },
  fr: {
    hero: {
      title: 'Shorinji Kempo Suisse',
      subtitle: 'Corps & Esprit — Force & Amour',
      cta: "Cours d'essai gratuit",
      footer: "Cours d'essai gratuit · Sans engagement · Débutants bienvenus",
    },
    philosophy: {
      heading: "Qu'est-ce que le Shorinji Kempo?",
      intro: 'Un art martial sans compétition. Un chemin vers la force intérieure et la paix extérieure.',
      benefits: [
        'Autodéfense — techniques réalistes pour le monde réel',
        'Corps & Esprit — pas seulement les muscles, mais la clarté mentale',
        'Communauté — entraîne-toi avec les autres, pas contre eux',
        'Pour tous — enfants, adolescents, adultes, tous les niveaux',
      ],
      learnMore: 'En savoir plus sur la philosophie',
    },
    dojos: {
      heading: 'Nos Dojos',
      subheading: 'Entraîne-toi où cela te convient',
      viewAll: 'Voir tous les dojos',
    },
    whyJoin: {
      heading: 'Pourquoi le Shorinji Kempo?',
      reasons: [
        { icon: '💪', title: 'Vraie Force', description: 'Physique et mentale. Pas la brutalité, mais la force intérieure.' },
        { icon: '🤝', title: 'Communauté', description: 'Entraîne-toi avec des gens qui te soutiennent, pas contre toi.' },
        { icon: '🎯', title: 'Développement Personnel', description: "Trouve la confiance, la discipline et l'équilibre intérieur." },
        { icon: '👨‍👩‍👧‍👦', title: 'Pour Toute la Famille', description: 'Enfants à partir de 6 ans et adultes. Entraînez-vous ensemble.' },
      ],
    },
    faqPreview: {
      heading: 'Questions Fréquentes',
      questions: [
        { q: 'Le Shorinji Kempo est-il un sport compétitif?', a: "Non. Tu t'entraînes avec les autres, pas contre eux. C'est pour la croissance mutuelle, pas la compétition." },
        { q: 'Comment commencer?', a: "Viens simplement à un cours d'essai gratuit. Aucun engagement, aucun contrat." },
        { q: "C'est sûr pour les enfants?", a: 'Oui. Le Shorinji Kempo est conçu pour les enfants. Pas de compétition, beaucoup de sécurité, beaucoup de plaisir.' },
      ],
      viewAll: 'Voir toutes les questions',
    },
    cta: {
      heading: 'Prêt à commencer?',
      subheading: "Viens à un cours d'essai gratuit. Aucun engagement.",
      button: 'Contacte-nous',
    },
  },
  en: {
    hero: {
      title: 'Shorinji Kempo Switzerland',
      subtitle: 'Body & Spirit — Strength & Love',
      cta: 'Free Trial Class',
      footer: 'Free trial lesson · No obligation · Beginners welcome',
    },
    philosophy: {
      heading: 'What is Shorinji Kempo?',
      intro: 'A martial art without competition. A path to inner strength and outer peace.',
      benefits: [
        'Self-defense — realistic techniques for the real world',
        'Body & Spirit — not just muscles, but mental clarity',
        'Community — train with others, not against them',
        'For everyone — kids, teens, adults, all fitness levels',
      ],
      learnMore: 'Learn more about philosophy',
    },
    dojos: {
      heading: 'Our Dojos',
      subheading: 'Train where it works for you',
      viewAll: 'View all dojos',
    },
    whyJoin: {
      heading: 'Why Shorinji Kempo?',
      reasons: [
        { icon: '💪', title: 'Real Strength', description: 'Physical and mental. Not brutality, but inner power.' },
        { icon: '🤝', title: 'Community', description: 'Train with people who support you, not fight against you.' },
        { icon: '🎯', title: 'Personal Growth', description: 'Find confidence, discipline, and inner balance.' },
        { icon: '👨‍👩‍👧‍👦', title: 'For the Whole Family', description: 'Kids from age 6 to adults. Train together.' },
      ],
    },
    faqPreview: {
      heading: 'Frequently Asked Questions',
      questions: [
        { q: 'Is Shorinji Kempo a competitive sport?', a: "No. You train with others, not against them. It's about mutual growth, not competition." },
        { q: 'How do I start?', a: 'Just come to a free trial class. No commitment, no contracts.' },
        { q: 'Is it safe for kids?', a: 'Yes. Shorinji Kempo is designed for kids. No competition, lots of safety, lots of fun.' },
      ],
      viewAll: 'View all questions',
    },
    cta: {
      heading: 'Ready to start?',
      subheading: 'Come to a free trial class. No commitment.',
      button: 'Contact us',
    },
  },
  it: {
    hero: {
      title: 'Shorinji Kempo Svizzera',
      subtitle: 'Corpo & Spirito — Forza & Amore',
      cta: 'Lezione di prova gratuita',
      footer: 'Lezione di prova gratuita · Nessun impegno · Principianti benvenuti',
    },
    philosophy: {
      heading: "Cos'è lo Shorinji Kempo?",
      intro: "Un'arte marziale senza competizione. Un percorso verso la forza interiore e la pace esteriore.",
      benefits: [
        'Autodifesa — tecniche realistiche per il mondo reale',
        'Corpo & Spirito — non solo muscoli, ma chiarezza mentale',
        'Comunità — allenati con gli altri, non contro di loro',
        'Per tutti — bambini, adolescenti, adulti, ogni livello di forma fisica',
      ],
      learnMore: 'Scopri di più sulla filosofia',
    },
    dojos: {
      heading: 'I nostri Dojo',
      subheading: 'Allenati dove fa per te',
      viewAll: 'Vedi tutti i dojo',
    },
    whyJoin: {
      heading: 'Perché Shorinji Kempo?',
      reasons: [
        { icon: '💪', title: 'Vera Forza', description: 'Fisica e mentale. Non brutalità, ma forza interiore.' },
        { icon: '🤝', title: 'Comunità', description: 'Allenati con persone che ti sostengono, non contro di te.' },
        { icon: '🎯', title: 'Crescita Personale', description: 'Trova fiducia, disciplina ed equilibrio interiore.' },
        { icon: '👨‍👩‍👧‍👦', title: 'Per Tutta la Famiglia', description: 'Bambini dai 6 anni agli adulti. Allenatevi insieme.' },
      ],
    },
    faqPreview: {
      heading: 'Domande frequenti',
      questions: [
        { q: 'Lo Shorinji Kempo è uno sport agonistico?', a: 'No. Ti alleni con gli altri, non contro di loro. Si tratta di crescita reciproca, non di competizione.' },
        { q: 'Come iniziare?', a: 'Vieni a una lezione di prova gratuita. Nessun impegno, nessun contratto.' },
        { q: 'È sicuro per i bambini?', a: 'Sì. Lo Shorinji Kempo è pensato per i bambini. Nessuna competizione, molta sicurezza, molto divertimento.' },
      ],
      viewAll: 'Vedi tutte le domande',
    },
    cta: {
      heading: 'Pronto a iniziare?',
      subheading: 'Vieni a una lezione di prova gratuita. Nessun impegno.',
      button: 'Contattaci',
    },
  },
};

export const homeDojos: Record<HomeLang, HomeDojo[]> = {
  de: [
    {
      name: 'Basel',
      instructor: 'Marco Pellegrino, 5. Dan',
      schedule: 'Dienstag 19:00–21:00',
      address: 'Winkelriedplatz 6, CH-4053 Basel',
      city: 'Basel',
      phone: '+41 79 636 56 82',
      email: 'marco.pellegrino@shorinjikempo.ch',
      fees: 'CHF 90/Monat',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Winkelriedplatz+6,+4053+Basel,+Switzerland',
      slug: 'basel',
      description: 'Das älteste Dojo. Große, unterstützende Gemeinschaft. Marco unterrichtet mit Fokus auf Grundlagen.',
    },
    {
      name: 'Aubonne',
      instructor: 'Roberto Comino, 4. Dan',
      schedule: 'Dienstag 19:00–20:30',
      address: 'Collège du Chêne, Ave du Mont-Blanc 53, CH-1170 Aubonne',
      city: 'Aubonne',
      phone: null,
      email: 'comino.roberto@gmail.com',
      fees: 'CHF 150/Trimester',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Coll%C3%A9ge+du+Ch%C3%AAne,+Ave+du+Mont-Blanc+53,+1170+Aubonne,+Switzerland',
      slug: 'aubonne',
      description: 'Familien-freundlich. Kleine, enge Gemeinschaft. Roberto schafft eine sichere Atmosphäre für Wachstum.',
    },
    {
      name: 'Muri',
      instructor: 'Tomoko Muth-Akao, 4. Dan',
      schedule: 'Donnerstag 16:20–17:00',
      address: 'MüZe, Kranichweg 10, CH-3074 Muri bei Bern',
      city: 'Muri',
      phone: null,
      email: 'tomoko.muth@shorinjikempo.ch',
      fees: 'CHF 14–18/Kurs',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kranichweg+10,+3074+Muri+bei+Bern,+Switzerland',
      slug: 'muri',
      description: 'Spezialisiert auf Kinder. Spielerisch, sicher, voller Spaß. Tomoko schafft ein kind-freundliches Umfeld.',
    },
  ],
  fr: [
    {
      name: 'Basel',
      instructor: 'Marco Pellegrino, 5e dan',
      schedule: 'Mardi 19h00–21h00',
      address: 'Winkelriedplatz 6, CH-4053 Bâle',
      city: 'Bâle',
      phone: '+41 79 636 56 82',
      email: 'marco.pellegrino@shorinjikempo.ch',
      fees: 'CHF 90/mois',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Winkelriedplatz+6,+4053+Basel,+Switzerland',
      slug: 'basel',
      description: 'Le dojo le plus ancien. Grande communauté bienveillante. Marco enseigne avec un accent sur les fondamentaux.',
    },
    {
      name: 'Aubonne',
      instructor: 'Roberto Comino, 4e dan',
      schedule: 'Mardi 19h00–20h30',
      address: 'Collège du Chêne, Ave du Mont-Blanc 53, CH-1170 Aubonne',
      city: 'Aubonne',
      phone: null,
      email: 'comino.roberto@gmail.com',
      fees: 'CHF 150/trimestre',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Coll%C3%A9ge+du+Ch%C3%AAne,+Ave+du+Mont-Blanc+53,+1170+Aubonne,+Switzerland',
      slug: 'aubonne',
      description: 'Accueillant pour les familles. Petite communauté soudée. Roberto crée une atmosphère sûre pour progresser.',
    },
    {
      name: 'Muri',
      instructor: 'Tomoko Muth-Akao, 4e dan',
      schedule: 'Jeudi 16h20–17h00',
      address: 'MüZe, Kranichweg 10, CH-3074 Muri bei Bern',
      city: 'Muri',
      phone: null,
      email: 'tomoko.muth@shorinjikempo.ch',
      fees: 'CHF 14–18/cours',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kranichweg+10,+3074+Muri+bei+Bern,+Switzerland',
      slug: 'muri',
      description: 'Spécialisé pour les enfants. Ludique, sûr et amusant. Tomoko offre un cadre adapté aux plus jeunes.',
    },
  ],
  en: [
    {
      name: 'Basel',
      instructor: 'Marco Pellegrino, 5th Dan',
      schedule: 'Tuesday 7:00 p.m.–9:00 p.m.',
      address: 'Winkelriedplatz 6, CH-4053 Basel',
      city: 'Basel',
      phone: '+41 79 636 56 82',
      email: 'marco.pellegrino@shorinjikempo.ch',
      fees: 'CHF 90/month',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Winkelriedplatz+6,+4053+Basel,+Switzerland',
      slug: 'basel',
      description: 'The oldest dojo. A large, supportive community. Marco teaches with a focus on solid fundamentals.',
    },
    {
      name: 'Aubonne',
      instructor: 'Roberto Comino, 4th Dan',
      schedule: 'Tuesday 7:00 p.m.–8:30 p.m.',
      address: 'Collège du Chêne, Ave du Mont-Blanc 53, CH-1170 Aubonne',
      city: 'Aubonne',
      phone: null,
      email: 'comino.roberto@gmail.com',
      fees: 'CHF 150/term',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Coll%C3%A9ge+du+Ch%C3%AAne,+Ave+du+Mont-Blanc+53,+1170+Aubonne,+Switzerland',
      slug: 'aubonne',
      description: 'Family-friendly. A small, close-knit community. Roberto creates a safe atmosphere for growth.',
    },
    {
      name: 'Muri',
      instructor: 'Tomoko Muth-Akao, 4th Dan',
      schedule: 'Thursday 4:20 p.m.–5:00 p.m.',
      address: 'MüZe, Kranichweg 10, CH-3074 Muri bei Bern',
      city: 'Muri',
      phone: null,
      email: 'tomoko.muth@shorinjikempo.ch',
      fees: 'CHF 14–18/class',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kranichweg+10,+3074+Muri+bei+Bern,+Switzerland',
      slug: 'muri',
      description: 'Specialised in children. Playful, safe and fun. Tomoko offers a child-friendly environment.',
    },
  ],
  it: [
    {
      name: 'Basel',
      instructor: 'Marco Pellegrino, 5° dan',
      schedule: 'Martedì 19:00–21:00',
      address: 'Winkelriedplatz 6, CH-4053 Basilea',
      city: 'Basilea',
      phone: '+41 79 636 56 82',
      email: 'marco.pellegrino@shorinjikempo.ch',
      fees: 'CHF 90/mese',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Winkelriedplatz+6,+4053+Basel,+Switzerland',
      slug: 'basel',
      description: 'Il dojo più antico. Grande comunità accogliente. Marco insegna con attenzione alle basi solide.',
    },
    {
      name: 'Aubonne',
      instructor: 'Roberto Comino, 4° dan',
      schedule: 'Martedì 19:00–20:30',
      address: 'Collège du Chêne, Ave du Mont-Blanc 53, CH-1170 Aubonne',
      city: 'Aubonne',
      phone: null,
      email: 'comino.roberto@gmail.com',
      fees: 'CHF 150/trimestre',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Coll%C3%A9ge+du+Ch%C3%AAne,+Ave+du+Mont-Blanc+53,+1170+Aubonne,+Switzerland',
      slug: 'aubonne',
      description: 'Adatto alle famiglie. Comunità piccola e unita. Roberto crea un ambiente sicuro per crescere.',
    },
    {
      name: 'Muri',
      instructor: 'Tomoko Muth-Akao, 4° dan',
      schedule: 'Giovedì 16:20–17:00',
      address: 'MüZe, Kranichweg 10, CH-3074 Muri bei Bern',
      city: 'Muri',
      phone: null,
      email: 'tomoko.muth@shorinjikempo.ch',
      fees: 'CHF 14–18/lezione',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kranichweg+10,+3074+Muri+bei+Bern,+Switzerland',
      slug: 'muri',
      description: 'Specializzato per bambini. Giocoso, sicuro e divertente. Tomoko offre un ambiente adatto ai più piccoli.',
    },
  ],
};
