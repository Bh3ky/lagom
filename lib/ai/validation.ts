type ValidationResult =
  | { ok: true; value: string }
  | { ok: false; error: string };

type ValidationOptions = {
  field: string;
  minLength?: number;
  maxLength?: number;
};

export const validateTextInput = (
  value: unknown,
  { field, minLength = 1, maxLength = 2000 }: ValidationOptions,
): ValidationResult => {
  if (typeof value !== 'string') {
    return { ok: false, error: `${field} must be a string` };
  }

  const trimmed = value.trim();
  if (trimmed.length < minLength) {
    return {
      ok: false,
      error: `${field} must be at least ${minLength} characters`,
    };
  }

  if (trimmed.length > maxLength) {
    return {
      ok: false,
      error: `${field} must be ${maxLength} characters or fewer`,
    };
  }

  return { ok: true, value: trimmed };
};
