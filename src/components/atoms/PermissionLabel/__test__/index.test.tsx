/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import PermissionLabel from '../index';

describe('PermissionLabel', () => {
  it('debería mostrar la etiqueta de "Consulta transacciones" si se proporciona [1]', () => {
    const { getByText } = render(<PermissionLabel permissions={[1]} />);
    expect(getByText('Consulta transacciones')).toBeInTheDocument();
  });

  it('debería mostrar la etiqueta de "Autoriza transacciones" si se proporciona [2]', () => {
    const { getByText } = render(<PermissionLabel permissions={[2]} />);
    expect(getByText('Autoriza transacciones')).toBeInTheDocument();
  });

  it('debería mostrar la etiqueta de "Administra usuarios" si se proporciona [3]', () => {
    const { getByText } = render(<PermissionLabel permissions={[3]} />);
    expect(getByText('Administra usuarios')).toBeInTheDocument();
  });

  it('debería mostrar todas las etiquetas si se proporcionan [1, 2, 3]', () => {
    const { getByText } = render(<PermissionLabel permissions={[1, 2, 3]} />);
    expect(getByText('Consulta transacciones')).toBeInTheDocument();
    expect(getByText('Autoriza transacciones')).toBeInTheDocument();
    expect(getByText('Administra usuarios')).toBeInTheDocument();
  });
});