import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { createRef, Fragment } from 'react';
import useOnClickOutside from '../useOnClickOutside';
const mockFunction = jest.fn();
describe('useOnClickOutside', () => {
  test('Validate if done outside element', () => {
    const ref1 = createRef<HTMLDivElement>();
    const ref2 = createRef<HTMLDivElement>();
    render(
      <Fragment>
        <div ref={ref1} data-testid="ref">
          ref 1
        </div>
        <div ref={ref2}>ref 2</div>
      </Fragment>
    );
    renderHook(() => useOnClickOutside(ref1, mockFunction, ref2));
    fireEvent.mouseDown(document);
    expect(mockFunction).toBeCalled();
  });

  test('Validate if done inside element', () => {
    const ref1 = createRef<HTMLDivElement>();
    const ref2 = createRef<HTMLDivElement>();
    render(
      <Fragment>
        <div ref={ref1} data-testid="ref">
          ref 1
        </div>
        <div ref={ref2}>ref 2</div>
      </Fragment>
    );
    renderHook(() => useOnClickOutside(ref1, mockFunction, ref2));
    fireEvent.mouseDown(screen.getByTestId('ref'));
    expect(mockFunction).not.toBeCalled();
  });
});
