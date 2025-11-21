import GalleryGrid from "@/components/GalleryGrid";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import stickerImage from "@assets/generated_images/Groundhopping_sticker_collection_126c1d11.png";
import stadium1 from "@assets/generated_images/Glückauf_Kampfbahn_stadium_540adcba.png";
import stadium2 from "@assets/generated_images/Stadion_Niederrhein_7f358c95.png";
import stadium3 from "@assets/generated_images/Parkstadion_Gelsenkirchen_3195c597.png";

const stickerImages = [
  {
    id: "1",
    src: stickerImage,
    alt: "Sticker Collection Main",
    caption: "Groundhopping Sticker Sammlung - Underground Football Culture",
  },
  {
    id: "2",
    src: stadium1,
    alt: "Stadium Art 1",
    caption: "Glückauf Kampfbahn Street Art & Fan Culture",
  },
  {
    id: "3",
    src: stadium2,
    alt: "Stadium Art 2",
    caption: "Stadion Niederrhein - Urban Football Aesthetic",
  },
  {
    id: "4",
    src: stadium3,
    alt: "Stadium Art 3",
    caption: "Parkstadion Graffiti & Fan Expression",
  },
  {
    id: "5",
    src: stickerImage,
    alt: "Sticker Detail",
    caption: "Fanzine Culture meets Cyberpunk - Die Kunst der Straße",
  },
  {
    id: "6",
    src: stadium1,
    alt: "Fan Culture",
    caption: "Banners, Flags & Scarves - Die visuelle Identität",
  },
];

export default function StickerStreet() {
  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="font-heading text-base md:text-lg text-chart-2 mb-4">
            &gt;&gt;&gt; STICKER_&_STREET
          </h1>
          <p className="font-mono text-xs text-muted-foreground max-w-2xl mx-auto">
            Die visuelle Kultur des Underground-Fußballs: Sticker, Street Art und Fan-Memorabilia
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          <Card className="border-2 border-chart-2 neon-glow">
            <CardHeader>
              <h2 className="font-heading text-xs text-chart-1">
                &gt; DIE KULTUR DER STRASSE
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="font-mono text-xs text-foreground leading-relaxed">
                Groundhopping ist nicht nur das Stadionerlebnis selbst - es ist die gesamte Kultur 
                drumherum. Sticker-Tausch, Fan-Zines, Street Art rund um die Stadien, Schals und 
                Aufnäher. Jedes Element erzählt die Geschichte einer Fankultur, die weit über 90 
                Minuten hinausgeht.
              </p>
              <p className="font-mono text-xs text-foreground leading-relaxed">
                In dieser Sektion dokumentieren wir die visuellen Artefakte unserer Touren - von 
                selbstgestalteten Stickern bis zu gefundener Street Art in der Nähe der Stadien.
              </p>
            </CardContent>
          </Card>

          <div>
            <h2 className="font-heading text-xs text-chart-2 mb-6">
              &gt; VISUAL_ARCHIVE
            </h2>
            <GalleryGrid images={stickerImages} />
          </div>

          <Card className="border-2 border-chart-1">
            <CardHeader>
              <h2 className="font-heading text-xs text-chart-2">
                &gt; STICKER_EXCHANGE
              </h2>
            </CardHeader>
            <CardContent>
              <p className="font-mono text-xs text-foreground leading-relaxed mb-4">
                Teil der Groundhopping-Tradition ist der Sticker-Tausch. Sammler aus ganz Deutschland 
                treffen sich an Spieltagen, um ihre neuesten Designs zu präsentieren und zu tauschen.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                <div className="border border-chart-1 rounded p-4 space-y-2">
                  <p className="text-chart-1">&gt; Was macht einen guten Sticker aus?</p>
                  <ul className="space-y-1 text-muted-foreground text-[10px] pl-4">
                    <li>• Kreatives, einzigartiges Design</li>
                    <li>• Lokaler Bezug zum Stadion/Verein</li>
                    <li>• Hochwertige Druckqualität</li>
                    <li>• Limitierte Auflagen</li>
                  </ul>
                </div>
                <div className="border border-chart-2 rounded p-4 space-y-2">
                  <p className="text-chart-2">&gt; Unsere Philosophie</p>
                  <ul className="space-y-1 text-muted-foreground text-[10px] pl-4">
                    <li>• Cyberpunk meets Fußballkultur</li>
                    <li>• 80er-Retro-Aesthetic</li>
                    <li>• Neon-Farben & Pixel-Art</li>
                    <li>• DIY-Spirit & Authentizität</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center border-t border-border pt-8">
            <p className="font-mono text-xs text-chart-2 mb-2">
              &gt;&gt;&gt; COLLECTION_STATS
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-4">
              <div className="text-center">
                <p className="font-heading text-lg text-chart-2">127</p>
                <p className="font-mono text-[10px] text-muted-foreground">Unique Sticker</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-lg text-chart-1">43</p>
                <p className="font-mono text-[10px] text-muted-foreground">Street Art Spots</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-lg text-chart-2">18</p>
                <p className="font-mono text-[10px] text-muted-foreground">Fan-Zines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
