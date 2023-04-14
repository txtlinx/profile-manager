import { renderHook } from '@testing-library/react';
import useMediaQuery from '../useMediaQuery';

test('useMediaQuery returns true when the query matches', () => {
  // Mock window.matchMedia to return true
  window.matchMedia = jest.fn().mockImplementation(query => ({
    matches: true,
    media: query,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }));

  // Render the hook with a query
  const { result } = renderHook(() => useMediaQuery('(min-width: 800px)'));

  // Expect the hook to return true
  expect(result.current).toBe(true);
});