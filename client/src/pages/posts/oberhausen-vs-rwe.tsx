import React, { useState } from 'react';
import { Link } from 'wouter';
import img1 from '../../../public/favicon.png';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const PostOberhausenVsRwe: React.FC = () => {
  const title = "Rot-Wei\u00df Oberhausen \u2013 Rot-Weiss Essen";
  const images = [img1];
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <nav className="mb-4"><Link href="/">← Zurück zur Übersicht</Link></nav>
        <header className="mb-6">
          <h1 className="text-3xl font-heading mb-2">{title} — 24.08.2024</h1>
          <p className="text-sm text-muted-foreground">Stadion: Niederrheinstadion, Oberhausen • Ergebnis: 3:1</p>
        </header>
        <div className="post-hero mb-6">
          <img src={images[0]} alt={title} className="w-full h-auto object-cover rounded" />
        </div>
        <article className="prose">
          <p>Stadion & Atmosphäre: Niederrheinstadion, Oberhausen. Typischer Groundhop: ein Hauch von Rost, die Stimme eines Stadionsprechers, und eine Bratwurst, die ihr eigenes Pflichtprogramm hat.</p>
          <p>ALF’s Kommentar des Abends: Kamera gezückt, Schal fest um die Kehle und das unerschütterliche Gefühl, dass der Magen mehr Erinnerungen speichert als die Kameraobjektive.</p>
          <p>Besondere Szene: Ein Fan leitete eine improvisierte Fangesang-Einlage an — es klang nach Aufbruch und nach drei weiteren Bierflaschen.</p>
          <p>Fazit: Ein Abend, der nach mehr schmeckt — mehr Stadien, mehr Geschichten, mehr Würstchen.</p>
        </article>
        <div className="mt-6">
          <button onClick={() => { setPhotoIndex(0); setIsOpen(true); }} className="px-4 py-2 rounded bg-chart-1 text-white">Bilder öffnen</button>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </div>
  );
};

export default PostOberhausenVsRwe;