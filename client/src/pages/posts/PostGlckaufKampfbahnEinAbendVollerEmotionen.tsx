import React, { useState }, { useState } from 'react';
import { Link } from 'wouter';
import heroImg from '@assets/generated_images/Glückauf_Kampfbahn_stadium_540adcba.png';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const images = [heroImg, altImg];



const PostGlckaufKampfbahnEinAbendVollerEmotionen: React.FC = () => {
  const title = "Gl\u00fcckauf Kampfbahn: Ein Abend voller Emotionen";
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <nav className="mb-4"><Link href="/">← Zurück zur Übersicht</Link></nav>
        <header className="mb-6">
          <h1 className="text-3xl font-heading mb-2">{title}</h1>
          <p className="text-sm text-muted-foreground">15.10.2024 — Glückauf Kampfbahn — Gelsenkirchen — Regionalliga — Ergebnis: 2:1</p>
        </header>
        <div className="post-hero mb-6">
          <img src={heroImg} alt={title} className="w-full h-auto object-cover" />
        </div>
        <article className="prose">
          <p>Ein elektrischer Abend auf der Glückauf Kampfbahn. Die Atmosphäre war geprägt von echtem Fußball-Spirit und leidenschaftlichen Fans.</p>
          <p>A.L.F. berichtet: Mit Schal, Kamera und einer Vorliebe für kleine Stadien war das ein denkwürdiger Abend. Die Wurst war heiß, die Stimmung launisch.</p>
          <p>Besondere Szene: Ein älterer Herr erklärte die Abseitsregel in Reimen. Wir waren begeistert.</p>
          <p><strong>Fazit:</strong> Ein Groundhop, den man nicht vergisst.</p>
        </article>
        <div className="mt-6">
          <button onClick={() => { setPhotoIndex(0); setIsOpen(true); }} className="px-4 py-2 rounded bg-chart-1 text-white">Bilder öffnen</button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setIsOpen(false)}>
          <div className="max-w-4xl max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
            <img src={heroImg} alt={title} className="w-full h-auto" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostGlckaufKampfbahnEinAbendVollerEmotionen;
