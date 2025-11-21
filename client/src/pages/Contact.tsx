import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, MessageSquare, Radio } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Radio className="h-6 w-6 text-chart-1 animate-pulse" />
            <h1 className="font-heading text-base md:text-lg text-chart-1">
              &gt;&gt;&gt; FUNKKONTAKT
            </h1>
          </div>
          <p className="font-mono text-xs text-muted-foreground max-w-2xl mx-auto">
            Öffne einen Kommunikationskanal - Feedback, Fragen oder Groundhopping-Stories
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-chart-1">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-chart-1" />
                  <h3 className="font-heading text-xs text-chart-1">
                    &gt; EMAIL
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-xs text-muted-foreground">
                  contact@alf-groundhopping.de
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-chart-2">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-chart-2" />
                  <h3 className="font-heading text-xs text-chart-2">
                    &gt; INSTAGRAM
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-xs text-muted-foreground">
                  @alf.groundhopping
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-chart-1">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Radio className="h-4 w-4 text-chart-1" />
                  <h3 className="font-heading text-xs text-chart-1">
                    &gt; STATUS
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-mono text-xs text-chart-1">
                  ONLINE • EMPFANGSBEREIT
                </p>
              </CardContent>
            </Card>
          </div>

          <ContactForm />

          <Card className="border-2 border-chart-2 mt-12">
            <CardHeader>
              <h2 className="font-heading text-xs text-chart-1">
                &gt; TRANSMISSION_GUIDELINES
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="font-mono text-xs text-foreground leading-relaxed">
                Wir freuen uns über jede Nachricht! Egal ob du Feedback zu unseren Berichten hast, 
                eigene Groundhopping-Erlebnisse teilen möchtest, oder einfach nur Hallo sagen willst.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                <div className="space-y-2">
                  <p className="text-chart-1">&gt; Wir antworten auf:</p>
                  <ul className="space-y-1 text-muted-foreground text-[10px] pl-4">
                    <li>• Feedback zu Berichten</li>
                    <li>• Stadion-Empfehlungen</li>
                    <li>• Groundhopping-Stories</li>
                    <li>• Kooperationsanfragen</li>
                    <li>• Allgemeine Fragen</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-chart-2">&gt; Response Zeit:</p>
                  <ul className="space-y-1 text-muted-foreground text-[10px] pl-4">
                    <li>• Normal: 24-48 Stunden</li>
                    <li>• An Spieltagen: 48-72h</li>
                    <li>• Spam wird ignoriert</li>
                    <li>• Alle Nachrichten werden gelesen</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center border-t border-border pt-8">
            <p className="font-mono text-xs text-chart-1 mb-2 animate-pulse">
              &gt;&gt;&gt; AWAITING_YOUR_TRANSMISSION
            </p>
            <p className="font-mono text-[10px] text-muted-foreground">
              Frequency: ALF-Groundhopping.freq | Status: Active
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
