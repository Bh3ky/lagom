export type MapPoint = {
  x: number;
  y: number;
  data?: {
    type?: string;
    id?: string;
  };
};

export type HotspotPosition = {
  id: string;
  xPercent: number;
  yPercent: number;
};

export const normalizeHotspotPoints = (points: MapPoint[]): HotspotPosition[] => {
  if (points.length === 0) {
    return [];
  }

  const xs = points.map((point) => point.x);
  const ys = points.map((point) => point.y);
  const minX = Math.min(...xs);
  const minY = Math.min(...ys);
  const maxX = Math.max(...xs);
  const maxY = Math.max(...ys);
  const rangeX = Math.max(1, maxX - minX);
  const rangeY = Math.max(1, maxY - minY);

  return points
    .filter((point) => point.data?.type === 'hotspot' && point.data.id)
    .map((point) => ({
      id: point.data?.id ?? '',
      xPercent: ((point.x - minX) / rangeX) * 100,
      yPercent: ((point.y - minY) / rangeY) * 100,
    }))
    .filter((point) => point.id.length > 0);
};
