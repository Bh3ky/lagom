import { describe, expect, it } from 'vitest';
import {
  normalizeHotspotPoints,
  type MapPoint,
} from '../lib/maps/normalizeHotspotPoints';

describe('normalizeHotspotPoints', () => {
  it('returns an empty array for empty points', () => {
    expect(normalizeHotspotPoints([])).toEqual([]);
  });

  it('normalizes hotspot points to percentages', () => {
    const points: MapPoint[] = [
      { x: 0, y: 0 },
      { x: 10, y: 5, data: { type: 'hotspot', id: 'a' } },
      { x: 20, y: 10, data: { type: 'hotspot', id: 'b' } },
    ];

    const result = normalizeHotspotPoints(points);

    expect(result).toEqual([
      { id: 'a', xPercent: 50, yPercent: 50 },
      { id: 'b', xPercent: 100, yPercent: 100 },
    ]);
  });

  it('filters out non-hotspot points and missing ids', () => {
    const points: MapPoint[] = [
      { x: 5, y: 5, data: { type: 'other', id: 'x' } },
      { x: 5, y: 5, data: { type: 'hotspot' } },
    ];

    const result = normalizeHotspotPoints(points);

    expect(result).toEqual([]);
  });

  it('accounts for non-zero minimum coordinates', () => {
    const points: MapPoint[] = [
      { x: 5, y: 5 },
      { x: 15, y: 25, data: { type: 'hotspot', id: 'offset' } },
    ];

    const result = normalizeHotspotPoints(points);

    expect(result).toEqual([{ id: 'offset', xPercent: 100, yPercent: 100 }]);
  });
});
