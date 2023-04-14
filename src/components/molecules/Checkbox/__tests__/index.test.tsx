/* eslint-disable */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from '../index';

describe('Checkbox', () => {
  it('renders a checkbox with the given label and checked state', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <Checkbox label="My Checkbox" checked={true} onChange={onChange} />
    );

    expect(getByLabelText('My Checkbox')).toBeInTheDocument();
    expect(getByLabelText('My Checkbox')).toBeChecked();
  });

  it('calls the onChange function with the new checked state when clicked', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <Checkbox label="My Checkbox" checked={false} onChange={onChange} />
    );

    fireEvent.click(getByLabelText('My Checkbox'));

    expect(onChange).toHaveBeenCalledWith(true);
  });
});