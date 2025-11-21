import StadiumMap from "@/components/StadiumMap";
import GalleryGrid from "@/components/GalleryGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import stadium1 from "@assets/generated_images/Glückauf_Kampfbahn_stadium_540adcba.png";
import stadium2 from "@assets/generated_images/Stadion_Niederrhein_7f358c95.png";
import stadium3 from "@assets/generated_images/Parkstadion_Gelsenkirchen_3195c597.png";
import heroImage from "@assets/generated_images/Regional_football_match_action_276cc275.png";
import stickerImage from "@assets/generated_images/Groundhopping_sticker_collection_126c1d11.png";

const galleryImages = [
  {
    id: "1",
    src: stadium1,
    alt: "Glückauf Kampfbahn",
    caption: "Glückauf Kampfbahn - Gelsenkirchen | Regionalliga West",
  },
  {
    id: "2",
    src: stadium2,
    alt: "Stadion Niederrhein",
    caption: "Stadion Niederrhein - Oberhausen | Oberliga Niederrhein",
  },
  {
    id: "3",
    src: stadium3,
    alt: "Parkstadion",
    caption: "Parkstadion - Gelsenkirchen | Historisches Stadion",
  },
  {
    id: "4",
    src: heroImage,
    alt: "Match Action",
    caption: "Regionalliga Action - Spannende 90 Minuten voller Leidenschaft",
  },
  {
    id: "5",
    src: stickerImage,
    alt: "Sticker Collection",
    caption: "Groundhopping Memorabilia - Sticker & Street Art Collection",
  },
  {
    id: "6",
    src: stadium1,
    alt: "Night Game",
    caption: "Flutlichtspiel auf der Glückauf Kampfbahn",
  },
  {
    id: "7",
    src: stadium2,
    alt: "Fan Culture",
    caption: "Echte Fankultur im Stadion Niederrhein",
  },
  {
    id: "8",
    src: stadium3,
    alt: "Historic Grounds",
    caption: "Parkstadion - Ein Stück Fußballgeschichte",
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="font-heading text-base md:text-lg text-chart-1 mb-4">
            &gt;&gt;&gt; GALERIE_SAISON_2024/25
          </h1>
          <p className="font-mono text-xs text-muted-foreground max-w-2xl mx-auto">
            Stadion-Karte, Foto-Archive und visuelle Dokumentation unserer Groundhopping-Touren
          </p>
        </div>

        <Tabs defaultValue="map" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-card border-2 border-chart-1">
            <TabsTrigger 
              value="map" 
              className="font-heading text-xs data-[state=active]:bg-chart-1 data-[state=active]:text-background"
              data-testid="tab-map"
            >
              &gt; Stadion-Karte
            </TabsTrigger>
            <TabsTrigger 
              value="photos" 
              className="font-heading text-xs data-[state=active]:bg-chart-2 data-[state=active]:text-background"
              data-testid="tab-photos"
            >
              &gt; Foto-Archiv
            </TabsTrigger>
          </TabsList>

          <TabsContent value="map" className="space-y-6">
            <div className="max-w-5xl mx-auto">
              <div className="mb-6">
                <h2 className="font-heading text-xs text-chart-2 mb-2">
                  &gt; INTERAKTIVE_STADION_MAP
                </h2>
                <p className="font-mono text-xs text-muted-foreground">
                  Alle besuchten Stadien im Ruhrgebiet - Klicke auf die Marker für Details
                </p>
              </div>
              <StadiumMap />
            </div>
          </TabsContent>

          <TabsContent value="photos" className="space-y-6">
            <div className="mb-6">
              <h2 className="font-heading text-xs text-chart-2 mb-2">
                &gt; FOTO_DOKUMENTATION
              </h2>
              <p className="font-mono text-xs text-muted-foreground">
                Klicke auf ein Bild für Vollansicht
              </p>
            </div>
            <GalleryGrid images={galleryImages} />
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center border-t border-border pt-8">
          <p className="font-mono text-xs text-chart-1 mb-2">
            &gt;&gt;&gt; STATS_2024/25
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-4">
            <div className="text-center">
              <p className="font-heading text-lg text-chart-1">3</p>
              <p className="font-mono text-[10px] text-muted-foreground">Stadien besucht</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-lg text-chart-2">8</p>
              <p className="font-mono text-[10px] text-muted-foreground">Spiele gesehen</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-lg text-chart-1">247</p>
              <p className="font-mono text-[10px] text-muted-foreground">Fotos geschossen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
