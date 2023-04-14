import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputSearch from '..';

describe('InputSearch', () => {
  it('calls onChange and onBlur prop functions when input is changed', () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <InputSearch
        id="search"
        name="search"
        value=""
        placeholder="Search..."
        icon={<i className="fa fa-search"></i>}
        maxLength={50}
        onChange={onChange}
        onBlur={onBlur}
      />
    );
    const input = getByTestId('search');
    fireEvent.change(input, { target: { value: 'hello' } });
    fireEvent.blur(input);
    expect(onChange).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalled();
  });
});