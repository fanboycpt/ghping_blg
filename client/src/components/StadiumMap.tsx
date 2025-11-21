import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface Stadium {
  id: string;
  name: string;
  location: string;
  coordinates: [number, number];
  lastVisit: string;
  league: string;
  reportTitle: string;
  reportLink: string;
}

const stadiums: Stadium[] = [
  {
    id: '1',
    name: 'Glückauf Kampfbahn',
    location: 'Gelsenkirchen',
    coordinates: [51.5225, 7.0653],
    lastVisit: '15.10.2024',
    league: 'Regionalliga West',
    reportTitle: 'Ein Abend voller Emotionen',
    reportLink: '/',
  },
  {
    id: '2',
    name: 'Stadion Niederrhein',
    location: 'Oberhausen',
    coordinates: [51.4963, 6.8508],
    lastVisit: '22.09.2024',
    league: 'Oberliga Niederrhein',
    reportTitle: 'Oberliga-Action im Ruhrgebiet',
    reportLink: '/',
  },
  {
    id: '3',
    name: 'Parkstadion',
    location: 'Gelsenkirchen',
    coordinates: [51.5548, 7.0677],
    lastVisit: '01.08.2024',
    league: 'Historisches Stadion',
    reportTitle: 'Eine Zeitreise',
    reportLink: '/',
  },
];

export default function StadiumMap() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .leaflet-container {
        background: #0a0a0a !important;
        font-family: 'IBM Plex Mono', monospace;
      }
      .leaflet-popup-content-wrapper {
        background: rgba(10, 10, 10, 0.95) !important;
        color: #e0e0e0 !important;
        border: 2px solid hsl(195 92% 45%) !important;
        box-shadow: 0 0 10px hsl(195 92% 45% / 0.5) !important;
      }
      .leaflet-popup-tip {
        background: rgba(10, 10, 10, 0.95) !important;
        border: 2px solid hsl(195 92% 45%) !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full h-96 md:h-[500px] rounded-md overflow-hidden border-2 border-chart-1 neon-glow" data-testid="map-stadiums">
      <MapContainer
        center={[51.52, 6.96]}
        zoom={10}
        className="w-full h-full"
        style={{ background: '#0a0a0a' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {stadiums.map((stadium) => (
          <Marker key={stadium.id} position={stadium.coordinates}>
            <Popup>
              <div className="font-mono text-xs">
                <h3 className="font-heading text-[10px] text-chart-1 mb-2">
                  &gt;&gt;&gt; {stadium.name}
                </h3>
                <p className="text-[10px] text-muted-foreground mb-1">
                  <span className="text-chart-2">Standort:</span> {stadium.location}
                </p>
                <p className="text-[10px] text-muted-foreground mb-1">
                  <span className="text-chart-2">Liga:</span> {stadium.league}
                </p>
                <p className="text-[10px] text-muted-foreground mb-2">
                  <span className="text-chart-2">Letzter Besuch:</span> {stadium.lastVisit}
                </p>
                <a 
                  href={stadium.reportLink}
                  className="inline-block text-[10px] text-chart-1 hover:text-chart-2 transition-colors border border-chart-1 px-2 py-1 rounded hover:border-chart-2"
                  style={{ textDecoration: 'none' }}
                >
                  &gt; {stadium.reportTitle}
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
