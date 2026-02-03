import { describe, expect, it } from 'vitest';
import { validateTextInput } from '../lib/ai/validation';

describe('validateTextInput', () => {
  it('rejects non-string values', () => {
    const result = validateTextInput(123, { field: 'prompt' });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error).toBe('prompt must be a string');
    }
  });

  it('trims whitespace and enforces minimum length', () => {
    const result = validateTextInput('   hello  ', { field: 'goal', minLength: 3 });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value).toBe('hello');
    }
  });

  it('rejects too-short input after trimming', () => {
    const result = validateTextInput('  hi  ', { field: 'prompt', minLength: 3 });
    expect(result.ok).toBe(false);
  });

  it('rejects input longer than max length', () => {
    const result = validateTextInput('abcd', { field: 'prompt', maxLength: 3 });
    expect(result.ok).toBe(false);
  });
});
