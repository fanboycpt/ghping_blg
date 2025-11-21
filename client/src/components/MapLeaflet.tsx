import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const stadiums = [
  {
    "name": "Veltins-Arena",
    "city": "Gelsenkirchen",
    "coords": [
      51.5546,
      7.0008
    ],
    "first": "30.10.2024",
    "last": "30.10.2024",
    "slug": "schalke-vs-rwe"
  },
  {
    "name": "Stadion Rote Erde",
    "city": "Dortmund",
    "coords": [
      51.4959,
      7.4558
    ],
    "first": "19.03.2024",
    "last": "19.03.2024",
    "slug": "dortmund-vs-rwe"
  },
  {
    "name": "Stadion am Zoo",
    "city": "Wuppertal",
    "coords": [
      51.2556,
      7.1649
    ],
    "first": "29.05.2024",
    "last": "29.05.2024",
    "slug": "wuppertal-vs-rwe"
  },
  {
    "name": "Stadion am Hünting",
    "city": "Bocholt",
    "coords": [
      51.8379,
      6.6201
    ],
    "first": "06.06.2024",
    "last": "06.06.2024",
    "slug": "bocholt-vs-rwe"
  },
  {
    "name": "Niederrheinstadion",
    "city": "Oberhausen",
    "coords": [
      51.4975,
      6.864
    ],
    "first": "24.08.2024",
    "last": "24.08.2024",
    "slug": "oberhausen-vs-rwe"
  },
  {
    "name": "Lohrheidestadion",
    "city": "Bochum",
    "coords": [
      51.4703,
      7.2345
    ],
    "first": "28.10.2024",
    "last": "28.10.2024",
    "slug": "wattenscheid-vs-rwe"
  }
];

const MapLeaflet: React.FC = () => (
  <div className="w-full h-96 rounded overflow-hidden shadow">
    <MapContainer center={[51.5,7.0]} zoom={10} style={{ height: '100%', width: '100%' }}>
      <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {stadiums.map((s) => (
        <Marker key={s.slug} position={s.coords as [number, number]}>
          <Popup>
            <div style={{whiteSpace: 'normal', maxWidth: '240px'}}>
              <h3 style={{fontWeight:700}}>{s.name}, {s.city}</h3>
              <p style={{margin:0}}>Erstbesuch: {s.first}</p>
              <p style={{margin:0}}>Letzter Besuch: {s.last}</p>
              <p style={{marginTop:8}}><a href={'/posts/' + s.slug} className="text-chart-1 underline">Zum Spielbericht →</a></p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>
);
export default MapLeaflet;