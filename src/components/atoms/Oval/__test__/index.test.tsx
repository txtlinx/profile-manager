/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import Oval from '../index';

describe('Oval', () => {
  it('renders an oval with the correct background color based on the isTrue prop', () => {
    const { container: container1 } = render(<Oval isTrue={true} />);
    const { container: container2 } = render(<Oval isTrue={false} />);

    expect(container1.firstChild).toHaveStyle('background: #00885A');
    expect(container2.firstChild).toHaveStyle('background: #B71C1C');
  });
});