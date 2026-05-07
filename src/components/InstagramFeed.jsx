import React, { useEffect } from 'react';

export default function InstagramFeed({ url, limit = 6 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [url]);

  return (
    <section className="instagram-section">
      <div className="instagram-grid">
        {Array.from({ length: limit }).map((_, i) => (
          <div key={i} className="instagram-item">
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink={`${url}?img_index=${i}`}
              data-instgrm-max-width="300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

<style>
{`
.instagram-section {
  padding: 2rem 0;
}
.instagram-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}
.instagram-item {
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  min-height: 300px;
}
`}
</style>