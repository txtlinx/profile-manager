import { render, fireEvent } from '@testing-library/react';
import UserList from '../index';

test('selects and deselects users', () => {
  const { getAllByRole } = render(<UserList />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const checkboxInputs = getAllByRole('checkbox');
  expect(checkboxInputs[0]).not.toBeChecked();
  fireEvent.click(checkboxInputs[0]);
  expect(checkboxInputs[0]).toBeChecked();
  fireEvent.click(checkboxInputs[0]);
  expect(checkboxInputs[0]).not.toBeChecked();
});

test('users', () => {
  const { getAllByRole } = render(<UserList />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const checkboxInputs = getAllByRole('checkbox');
  expect(checkboxInputs[1]).not.toBeChecked();
  fireEvent.click(checkboxInputs[1]);
  expect(checkboxInputs[1]).toBeChecked();
  fireEvent.click(checkboxInputs[1]);
  expect(checkboxInputs[1]).not.toBeChecked();
});
