import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import FlagElement from '..';
import flagLn from '../../../../assets/img/flagChile.svg';

test('should render a FlagElement with a Chilean flag', async () => {
  render(
    <FlagElement flagIcon={flagLn} id="test-flagIcon" legend="+56 Chile" />
  );
  await waitFor(() => {
    const spanElement = screen.getByTestId('test-flagIcon');
    expect(spanElement).toBeInTheDocument();
  });
});
describe('FlagElement', () => {
  const id = 'test-flagIcon';
  const legend = '+56 Chile';

  test('should render icon and legend', () => {
    render(<FlagElement flagIcon={flagLn} id={id} legend={legend} />);
    expect(screen.getByTestId(id)).toContainHTML(
      `<img src="${flagLn}" alt="flag"/>`
    );
    expect(screen.getByTestId(id)).toHaveTextContent(legend);
  });
});
