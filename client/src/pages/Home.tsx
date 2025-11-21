import { Link } from "wouter";
import MapLeaflet from '@/components/MapLeaflet';

import MapSection from '@/components/MapSection';

import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Regional_football_match_action_276cc275.png";
import stadium1 from "@assets/generated_images/Glückauf_Kampfbahn_stadium_540adcba.png";
import stadium2 from "@assets/generated_images/Stadion_Niederrhein_7f358c95.png";
import stadium3 from "@assets/generated_images/Parkstadion_Gelsenkirchen_3195c597.png";

const dummyArticles = [
  {
    id: "1",
    title: "{<a href="/posts/gl-ckauf-kampfbahn-ein-abend-voller-emotionen">Glückauf Kampfbahn: Ein Abend voller Emotionen</a>}",
    date: "15.10.2024",
    location: "Gelsenkirchen",
    stadium: "Glückauf Kampfbahn",
    league: "Regionalliga",
    result: "2:1",
    image: stadium1,
    excerpt: "Ein elektrischer Abend auf der Glückauf Kampfbahn. Die Atmosphäre war geprägt von echtem Fußball-Spirit und leidenschaftlichen Fans.",
  },
  {
    id: "2",
    title: "{<a href="/posts/stadion-niederrhein-oberliga-action-im-ruhrgebiet">Stadion Niederrhein: Oberliga-Action im Ruhrgebiet</a>}",
    date: "22.09.2024",
    location: "Oberhausen",
    stadium: "Stadion Niederrhein",
    league: "Oberliga",
    result: "3:2",
    image: stadium2,
    excerpt: "Oberliga-Fußball vom Feinsten. Das Stadion Niederrhein bot die perfekte Kulisse für spannende 90 Minuten voller Kampfgeist.",
  },
  {
    id: "3",
    title: "{<a href="/posts/parkstadion-gelsenkirchen-eine-zeitreise">Parkstadion Gelsenkirchen: Eine Zeitreise</a>}",
    date: "01.08.2024",
    location: "Gelsenkirchen",
    stadium: "Parkstadion",
    league: "Freundschaftsspiel",
    result: "1:1",
    image: stadium3,
    excerpt: "Das legendäre Parkstadion - ein Ort voller Geschichte. Ein nostalgischer Trip durch die Fußballkultur des Ruhrgebiets.",
  },
  {
    id: "4",
    title: "{<a href="/posts/derby-atmosph-re-wenn-lokalrivalen-aufeinandertreffen">Derby-Atmosphäre: Wenn Lokalrivalen aufeinandertreffen</a>}",
    date: "05.11.2024",
    location: "Gelsenkirchen",
    stadium: "Glückauf Kampfbahn",
    league: "Regionalliga",
    result: "0:0",
    image: stadium1,
    excerpt: "Ein Derby ist immer etwas Besonderes. Auch wenn die Tore ausblieben, die Stimmung war grandios.",
  },
  {
    id: "5",
    title: "{<a href="/posts/flutlichtspiel-in-oberhausen">Flutlichtspiel in Oberhausen</a>}",
    date: "12.10.2024",
    location: "Oberhausen",
    stadium: "Stadion Niederrhein",
    league: "Oberliga",
    result: "4:1",
    image: stadium2,
    excerpt: "Unter Flutlicht entfaltet Fußball seinen ganz eigenen Charme. Ein Torfestival im Stadion Niederrhein.",
  },
  {
    id: "6",
    title: "{<a href="/posts/groundhopping-tour-durchs-revier">Groundhopping-Tour durchs Revier</a>}",
    date: "20.09.2024",
    location: "Gelsenkirchen",
    stadium: "Parkstadion",
    league: "Historisch",
    result: "Besichtigung",
    image: stadium3,
    excerpt: "Eine Tour durch die Fußball-Geschichte des Ruhrgebiets. Vom Parkstadion bis zu den modernen Arenen.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden scanlines">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Groundhopping Action"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="font-heading text-sm md:text-lg lg:text-xl text-chart-1 glitch mb-4">
            A.L.F. GROUNDHOPPING
          </h1>
          <p className="font-mono text-xs md:text-sm text-foreground max-w-2xl mb-8 leading-relaxed">
            {'>>> SYSTEM_INITIALIZED:'} Willkommen in der Cyberpunk-Chronik des Underground-Fußballs.
            Erlebnisberichte, Stadion-Scouts und die wahre Kultur des Spiels.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/gallery" data-testid="link-cta-gallery">
              <Button className="font-heading text-xs bg-chart-1 text-background border-2 border-chart-1 hover:bg-chart-1/90 backdrop-blur-sm">
                &gt;&gt;&gt; Stadion-Karte
              </Button>
            </Link>
            <Link href="/about" data-testid="link-cta-about">
              <Button variant="outline" className="font-heading text-xs border-2 backdrop-blur-sm bg-background/30">
                Über das Projekt
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="mb-8">
          <h2 className="font-heading text-sm md:text-base text-chart-2 mb-2">
            &gt;&gt;&gt; AKTUELLE BERICHTE
          </h2>
          <p className="font-mono text-xs text-muted-foreground">
            Wir erzählen vom Dreck unter den Stollen, von echten Typen, ungefiltert mit Herz am rechten Fleck und von Vereinen, die mehr Seele haben als Social-Media-Follower.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/gallery" data-testid="link-view-all">
            <Button variant="outline" className="font-heading text-xs scan-hover">
              Alle Berichte anzeigen {'>>>'}
            </Button>
          </Link>
        </div>
      </section>
    
      <MapLeaflet />
</div>
  );
}
