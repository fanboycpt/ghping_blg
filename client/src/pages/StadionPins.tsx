import React from 'react';
import MapLeaflet from '@/components/MapLeaflet';

export default function StadionPins() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-2xl mb-4">🏟️ Stadion-PIN’s</h1>
        <p className="text-sm text-muted-foreground mb-6">Klicke auf einen PIN, um zum jeweiligen Spielbericht zu springen.</p>
        <MapLeaflet />
      </div>
    </div>
  );
}
