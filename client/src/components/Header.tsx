import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import alfLogo from "@assets/generated_images/ALF_pixel_art_logo_eb4dab3a.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Über A.L.F." },
    { path: "/gallery", label: "Galerie" },
    { path: "/sticker-street", label: "Sticker & Street" },
    { path: "/contact", label: "Funkkontakt" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur scanlines">
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 hover-elevate active-elevate-2 px-2 py-1 rounded-md cursor-pointer">
              <img 
                src={alfLogo} 
                alt="ALF Logo" 
                className="h-10 md:h-12 w-auto pixelated"
                style={{ imageRendering: 'pixelated' }}
              />
              <div>
                <h1 className="text-xs md:text-sm text-chart-1 glitch font-heading">A.L.F.</h1>
                <p className="text-[8px] md:text-[10px] text-muted-foreground font-mono hidden sm:block">
                  Groundhopping Chronicles
                </p>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <Button
                  variant={location === item.path ? "secondary" : "ghost"}
                  size="sm"
                  className="text-xs font-heading scan-hover"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <a href="/stadion-pins" className="ml-4 font-mono text-sm">🏟️ Stadion-PIN&rsquo;s</a>
</nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" style={{ imageRendering: 'pixelated' }} />
            ) : (
              <Menu className="h-5 w-5" style={{ imageRendering: 'pixelated' }} />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-sm z-40 scanlines">
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Button
                  variant={location === item.path ? "secondary" : "ghost"}
                  size="lg"
                  className="w-full justify-start text-sm font-heading scan-hover neon-glow-hover"
                >
                  <span className="mr-2 text-chart-1">&gt;&gt;&gt;</span>
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
