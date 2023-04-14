import { validateRut, formatRut } from '../rut';

describe('Rut', () => {
  test('Invalid rut', () => {
    const resultRules = validateRut('18488019-8');
    expect(resultRules).toBe(false);
  });

  test('Invalid value empty', () => {
    const resultRules = validateRut('');
    expect(resultRules).toBe(false);
  });

  test('valid rut', () => {
    const resultRules = validateRut('18488019-9');
    expect(resultRules).toBe(true);
  });

  test('valid rut with k', () => {
    const resultRules = validateRut('54513280-k');
    expect(resultRules).toBe(true);
  });

  test('valid rut with upper K', () => {
    const resultRules = validateRut('54513280-K');
    expect(resultRules).toBe(true);
  });

  test('formateo de rut', () => {
    const resultRules = formatRut('184880199');
    expect(resultRules).toBe('18.488.019-9');
  });

  test('format rut empty', () => {
    const resultRules = formatRut('');
    expect(resultRules).toBe('');
  });
});
