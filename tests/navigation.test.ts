import { describe, expect, it } from 'vitest';
import { isPathActive } from '../lib/navigation';

describe('isPathActive', () => {
  it('treats the root path as exact match only', () => {
    expect(isPathActive('/', '/')).toBe(true);
    expect(isPathActive('/campaigns', '/')).toBe(false);
  });

  it('matches nested paths for non-root targets', () => {
    expect(isPathActive('/campaigns', '/campaigns')).toBe(true);
    expect(isPathActive('/campaigns/123', '/campaigns')).toBe(true);
  });

  it('returns false for unrelated paths', () => {
    expect(isPathActive('/analytics', '/campaigns')).toBe(false);
  });
});
