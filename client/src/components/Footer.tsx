import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xs font-heading text-chart-1 mb-4">&gt; Rechtliches</h3>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <Link href="/impressum" data-testid="link-footer-impressum">
                  <span className="text-muted-foreground hover:text-chart-1 transition-colors cursor-pointer">
                    Impressum
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" data-testid="link-footer-datenschutz">
                  <span className="text-muted-foreground hover:text-chart-1 transition-colors cursor-pointer">
                    Datenschutzhinweise
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-heading text-chart-2 mb-4">&gt; Social</h3>
            <ul className="space-y-2 font-mono text-xs">
              <li className="text-muted-foreground">Instagram: @alf.groundhopping</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-heading text-chart-1 mb-4">&gt; Info</h3>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              Nur ein außerirdischer Groundhopper auf Patrouille durch das wunderschöne Ruhrgebiet.
            </p>
            <div className="mt-4 text-[10px] font-mono text-muted-foreground/60">
              <p>&copy; 2025 A.L.F. Groundhopping</p>
              <p className="mt-1">Powered by Cyberpunk Dreams</p>
            <div className="mt-2">
              <a href="https://instagram.com/hopperalien_a.l.f" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex items-center gap-2">
                <Instagram className="h-5 w-5 text-chart-1" />
                <span className="text-xs font-mono text-muted-foreground">hopperalien_a.l.f</span>
              </a>
            </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50">
          <p className="text-center font-mono text-[10px] text-chart-1">
            &gt;&gt;&gt; SYSTEM_STATUS: ONLINE &lt;&lt;&lt;
          </p>
        </div>
      </div>
    </footer>
  );
}
