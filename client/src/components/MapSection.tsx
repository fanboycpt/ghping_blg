import React from 'react';

const MapSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="font-heading text-lg mb-4">Ground Map</h2>
      <div className="w-full h-80">
        <iframe
          title="Ground Map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=7.0%2C51.4%2C7.2%2C51.6&layer=mapnik"
          style={{border:0, width: '100%', height: '100%'}}
        />
      </div>
      <p className="text-xs text-muted-foreground mt-2">Interaktive Leaflet-Map (react-leaflet) can be enabled after installing dependencies.</p>
    </section>
  );
};

export default MapSection;
