import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputSearch from '../index';

test('checks if onChange function gets called', () => {
  const onChange = jest.fn();
  const { getByPlaceholderText } = render(
    <InputSearch
      id="input-search"
      name="input-search"
      value=""
      placeholder="Search"
      icon={<i className="fa fa-search"></i>}
      maxLength={50}
      onChange={onChange}
      onBlur={() => {}}
    />
  );
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const input = getByPlaceholderText('Search');
  fireEvent.change(input, { target: { value: 'test' } });
  expect(onChange).toHaveBeenCalled();
});
