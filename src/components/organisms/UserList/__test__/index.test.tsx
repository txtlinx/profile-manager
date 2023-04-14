import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from '../../../atoms/Checkbox';

describe('filteredUsers', () => {
  const users = [
    { id: 1, name: 'John', rut: '12345678-9', permisos: ['admin'], enabled: true },
    { id: 2, name: 'Jane', rut: '98765432-1', permisos: ['user'], enabled: true },
    { id: 3, name: 'Bob', rut: '19283746-5', permisos: ['admin', 'user'], enabled: false },
  ];

  it('should filter users by name', () => {
    const search = 'jane';
    const filteredUsers = users.filter(
      ({ id, name, rut, permisos, enabled }) =>
        name.toLowerCase().includes(search.toLowerCase()) ||
        id.toString().includes(search) ||
        rut.toLowerCase().includes(search.toLowerCase()) ||
        permisos.join(', ').toLowerCase().includes(search.toLowerCase()) ||
        (enabled ? 'habilitado' : 'bloqueado')
          .toLowerCase()
          .includes(search.toLowerCase())
    );

    expect(filteredUsers).toEqual([{ id: 2, name: 'Jane', rut: '98765432-1', permisos: ['user'], enabled: true }]);
  });
});
describe('Checkbox', () => {
  it('should render a checkbox', () => {
    const { getByRole } = render(<Checkbox />);
    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('should call onChange when clicked', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Checkbox onChange={onChange} />);
    const checkbox = getByRole('checkbox');
    userEvent.click(checkbox);
    expect(onChange).toHaveBeenCalled();
  });
});
