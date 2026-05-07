import { useEffect } from 'react';

export default function InstagramFeed({ url }) {
  useEffect(() => {
    if (window.instgrm) window.instgrm.Embeds.process();
  }, [url]);

  return (
    <section className="my-12 text-center">
      <blockquote className="instagram-media" data-instgrm-permalink={url} />
    </section>
  );
}