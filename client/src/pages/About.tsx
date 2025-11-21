import { Card, CardContent, CardHeader } from "@/components/ui/card";
import alfLogo from "@assets/generated_images/ALF_pixel_art_logo_eb4dab3a.png";

export default function About() {
  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <img
            src={alfLogo}
            alt="ALF Logo"
            className="h-24 md:h-32 w-auto mx-auto mb-6 pixelated"
            style={{ imageRendering: 'pixelated' }}
          />
          <h1 className="font-heading text-base md:text-lg text-chart-1 glitch mb-4">
            &gt;&gt;&gt; ÜBER A.L.F.
          </h1>
          <p className="font-mono text-xs text-muted-foreground">
            Alien_Life_Form meets Football Culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-2 border-chart-1 neon-glow">
            <CardHeader>
              <h2 className="font-heading text-xs text-chart-2">
                &gt; DIE MISSION
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="font-mono text-xs text-foreground leading-relaxed">
                A.L.F. (Alien Life Form) steht für eine andere Art, Fußball zu erleben. 
                Fernab von kommerzialisiertem Mainstream-Fußball dokumentieren wir die echte, 
                ungefilterte Kultur. Nicht mehr auf der Flucht vor der US-Regierung, sondern als intergalaktischer Groundhopper auf interstellarer Mission, durch die Hinterhöfe der Republik. Melmac war gestern – jetzt ist Meppen, Marl und Mülheim.
Ich hab das All gegen Flugmeilen, den Raumgleiter gegen 'ne Boarding-Card und die Laserkanone gegen 'ne Stadionwurst mit Senf getauscht. – Meine neue Base ist die lokale Trinkhalle.
              </p>
              <p className="font-mono text-xs text-foreground leading-relaxed">
                Inspiriert vom 80er-Jahre Kultcharakter ALF und dem Cyberpunk-Aesthetic der Zukunft, 
                schaffen wir eine einzigartige Perspektive auf Groundhopping im Ruhrgebiet und darüber hinaus.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-chart-2">
            <CardHeader>
              <h2 className="font-heading text-xs text-chart-1">
                &gt; WAS IST GROUNDHOPPING?
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="font-mono text-xs text-foreground leading-relaxed">
                Groundhopping ist mehr als nur Stadionbesuche. Es ist das bewusste Erleben von 
                Fußballkultur in ihrer reinsten Form. Jedes Stadion erzählt seine eigene Geschichte, 
                jede Fankultur hat ihre eigene Identität.
              </p>
              <ul className="space-y-2 font-mono text-xs text-muted-foreground pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-chart-1">&gt;</span>
                  <span>Dokumentation kleinerer, unbekannter Stadien</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-chart-1">&gt;</span>
                  <span>Erhalt der Fußballkultur jenseits der Bundesliga</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-chart-1">&gt;</span>
                  <span>Sammeln von Erfahrungen und Erinnerungen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-chart-1">&gt;</span>
                  <span>Verbindung mit echten Fußball-Enthusiasten</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-chart-1">
            <CardHeader>
              <h2 className="font-heading text-xs text-chart-2">
                &gt; DAS RUHRGEBIET
              </h2>
            </CardHeader>
            <CardContent>
              <p className="font-mono text-xs text-foreground leading-relaxed">
                Das Ruhrgebiet ist die Heimat unserer Groundhopping-Adventures. Eine Region mit 
                tiefverwurzelter Fußballtradition, industriellem Charme und einer einzigartigen 
                Fankultur. Von der Glückauf Kampfbahn über das Stadion Niederrhein bis zum 
                legendären Parkstadion - hier schlägt das Herz des authentischen Fußballs.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-chart-2 neon-glow">
            <CardHeader>
              <h2 className="font-heading text-xs text-chart-1">
                &gt; DER CYBERPUNK-STYLE
              </h2>
            </CardHeader>
            <CardContent>
              <p className="font-mono text-xs text-foreground leading-relaxed">
                Warum Cyberpunk? Weil die Zukunft des Fußballs in der Vergangenheit liegt. 
                Im Kontrast zwischen Neon-Ästhetik und roher Stadionatmosphäre, zwischen digitaler 
                Dokumentation und analoger Leidenschaft. Terminal-Schrift trifft auf Rasengras, 
                Scan-Effekte auf Fangesänge - eine Hommage an die Zeitlosigkeit der Fußballkultur.
              </p>
            </CardContent>
          </Card>

        </div>

          <div className="text-center pt-8 border-t border-border">
            <p className="font-mono text-xs text-chart-1 mb-2">
              &gt;&gt;&gt; SYSTEM_STATUS: ACTIVE
            </p>
            <p className="font-mono text-[10px] text-muted-foreground">
              Join the groundhopping revolution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
