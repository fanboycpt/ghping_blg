import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    toast({
      title: ">>> TRANSMISSION_SENT",
      description: "Deine Nachricht wurde erfolgreich übermittelt!",
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-2xl mx-auto" data-testid="form-contact">
      <div className="border-2 border-chart-1 rounded-md overflow-hidden neon-glow">
        <div className="bg-card border-b-2 border-chart-1 px-4 py-3 scanlines">
          <p className="font-heading text-xs text-chart-1">
            &gt;&gt;&gt; FUNKKONTAKT_TERMINAL_v2.5
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6 bg-card/50">
          <div className="space-y-2">
            <label className="font-mono text-xs text-chart-2 flex items-center gap-2">
              <span>&gt;</span>
              <span>NAME_INPUT:</span>
            </label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="font-mono text-sm bg-background/50 border-chart-1 focus:border-chart-2"
              placeholder="Dein Name..."
              data-testid="input-name"
            />
          </div>

          <div className="space-y-2">
            <label className="font-mono text-xs text-chart-2 flex items-center gap-2">
              <span>&gt;</span>
              <span>EMAIL_ADDRESS:</span>
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="font-mono text-sm bg-background/50 border-chart-1 focus:border-chart-2"
              placeholder="deine@email.de..."
              data-testid="input-email"
            />
          </div>

          <div className="space-y-2">
            <label className="font-mono text-xs text-chart-2 flex items-center gap-2">
              <span>&gt;</span>
              <span>MESSAGE_CONTENT:</span>
            </label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className="font-mono text-sm bg-background/50 border-chart-1 focus:border-chart-2 resize-none"
              placeholder="Deine Nachricht..."
              data-testid="textarea-message"
            />
          </div>

          <div className="flex items-center gap-4">
            <Button
              type="submit"
              className="font-heading text-xs bg-chart-1 text-background border-2 border-chart-1 hover:bg-chart-1/90"
              data-testid="button-submit"
            >
              &gt;&gt;&gt; SENDEN
            </Button>
            <span className="font-mono text-[10px] text-muted-foreground">
              [ENTER] to transmit
            </span>
          </div>
        </form>

        <div className="bg-card border-t-2 border-chart-1 px-4 py-2">
          <p className="font-mono text-[10px] text-muted-foreground">
            STATUS: <span className="text-chart-1">READY_FOR_TRANSMISSION</span>
          </p>
        </div>
      </div>
    </div>
  );
}
