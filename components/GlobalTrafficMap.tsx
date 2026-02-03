'use client';

import React, { useMemo } from 'react';
import DottedMap from 'dotted-map';
import { normalizeHotspotPoints } from '../lib/maps/normalizeHotspotPoints';

export type TrafficHotspot = {
  id: string;
  label: string;
  lat: number;
  lng: number;
  color: string;
  size: number;
  delayMs: number;
};

const DEFAULT_HOTSPOTS: TrafficHotspot[] = [
  {
    id: 'na-west',
    label: 'North America (West)',
    lat: 37.7749,
    lng: -122.4194,
    color: '#60a5fa',
    size: 10,
    delayMs: 0,
  },
  {
    id: 'na-east',
    label: 'North America (East)',
    lat: 40.7128,
    lng: -74.006,
    color: '#a78bfa',
    size: 9,
    delayMs: 250,
  },
  {
    id: 'eu',
    label: 'Europe',
    lat: 48.8566,
    lng: 2.3522,
    color: '#f472b6',
    size: 9,
    delayMs: 400,
  },
  {
    id: 'me',
    label: 'Middle East',
    lat: 25.2048,
    lng: 55.2708,
    color: '#f59e0b',
    size: 8,
    delayMs: 600,
  },
  {
    id: 'asia',
    label: 'Asia',
    lat: 35.6762,
    lng: 139.6503,
    color: '#22d3ee',
    size: 10,
    delayMs: 800,
  },
  {
    id: 'sa',
    label: 'South America',
    lat: -23.5505,
    lng: -46.6333,
    color: '#34d399',
    size: 8,
    delayMs: 700,
  },
  {
    id: 'au',
    label: 'Australia',
    lat: -33.8688,
    lng: 151.2093,
    color: '#38bdf8',
    size: 8,
    delayMs: 900,
  },
];

type GlobalTrafficMapProps = {
  className?: string;
  hotspots?: TrafficHotspot[];
};

const GlobalTrafficMap: React.FC<GlobalTrafficMapProps> = ({
  className = '',
  hotspots = DEFAULT_HOTSPOTS,
}) => {
  const { svgMap, hotspotPositions } = useMemo(() => {
    const map = new DottedMap({ height: 60, grid: 'diagonal' });

    hotspots.forEach((spot) => {
      map.addPin({
        lat: spot.lat,
        lng: spot.lng,
        svgOptions: {
          color: spot.color,
          radius: 0.6,
        },
        data: {
          type: 'hotspot',
          id: spot.id,
        },
      });
    });

    const svgMap = map.getSVG({
      radius: 0.22,
      color: '#1f1f1f',
      shape: 'circle',
      backgroundColor: 'transparent',
    });

    const hotspotPositions = normalizeHotspotPoints(map.getPoints());

    return { svgMap, hotspotPositions };
  }, [hotspots]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <div
        className="absolute inset-0 [&>svg]:w-full [&>svg]:h-full [&>svg]:block"
        aria-hidden
        dangerouslySetInnerHTML={{ __html: svgMap }}
      />

      {hotspots.map((spot) => {
        const position = hotspotPositions.find((item) => item.id === spot.id);
        if (!position) {
          return null;
        }

        return (
          <div
            key={spot.id}
            className="absolute"
            style={{
              left: `${position.xPercent}%`,
              top: `${position.yPercent}%`,
              transform: 'translate(-50%, -50%)',
            }}
            aria-label={`${spot.label} activity hotspot`}
          >
            <span
              className="absolute inline-flex rounded-full opacity-60 animate-ping"
              style={{
                width: spot.size * 2,
                height: spot.size * 2,
                backgroundColor: spot.color,
                animationDuration: '1.8s',
                animationDelay: `${spot.delayMs}ms`,
              }}
            />
            <span
              className="relative inline-flex rounded-full"
              style={{
                width: spot.size,
                height: spot.size,
                backgroundColor: spot.color,
                boxShadow: `0 0 12px ${spot.color}`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GlobalTrafficMap;
