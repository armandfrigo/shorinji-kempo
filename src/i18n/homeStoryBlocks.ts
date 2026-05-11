/** Concise home story body copy for non-DE locales (DE page keeps full prose in index.astro). */
export const homeStoryBlocks = {
  en: {
    kenZen2:
      'Shorinji Kempo (1947, Tadotsu, Japan) blends East Asian martial techniques with a holistic outlook. Founder Sō Dōshin drew on years of practice in Japan and China.',
    block1p1:
      'Like related arts of the era, it was shaped by war and post-war hardship. For more depth, use the site navigation (Origin, Founder, Philosophy, Techniques).',
    block2p1:
      'Philosophy is central: it is taught in training and underpins how techniques are understood—not as sport combat but as mutual development.',
    block2p2:
      'The guiding idea: half for your happiness, half for others’—respect and growth together.',
  },
  fr: {
    kenZen2:
      'Le Shorinji Kempo (1947, Tadotsu, Japon) unit techniques martiales et vision globale. Le fondateur Sō Dōshin s’appuie sur des années de pratique au Japon et en Chine.',
    block1p1:
      'Comme d’autres arts de l’époque, il est marqué par l’épreuve de guerre et d’après-guerre. Pour aller plus loin : menu Origine, Fondateur, Philosophie, Techniques.',
    block2p1:
      'La philosophie est centrale : elle est enseignée au dojo et donne sens aux techniques—visant le développement mutuel, pas la compétition spectacle.',
    block2p2:
      'Idée directrice : la moitié pour son bonheur, la moitié pour celui des autres—respect et progression ensemble.',
  },
  it: {
    kenZen2:
      'Lo Shorinji Kempo (1947, Tadotsu, Giappone) unisce tecniche marziali e una visione olistica. Il fondatore Sō Dōshin attinge a anni di pratica in Giappone e in Cina.',
    block1p1:
      'Come altre arti del tempo, è segnato dalla guerra e dal dopoguerra. Per approfondire: menu Origine, Fondatore, Filosofia, Tecniche.',
    block2p1:
      'La filosofia è centrale: si insegna in allenamento e sostiene le tecniche—obiettivo lo sviluppo reciproco, non lo sport da combattimento.',
    block2p2:
      'Linea guida: metà per la propria felicità, metà per quella degli altri—rispetto e crescita insieme.',
  },
} as const;

export type HomeStoryLang = keyof typeof homeStoryBlocks;
