import React from 'react';
import { render } from '@testing-library/react';
import Table from '..';
import PermissionLabel from '../../PermissionLabel';

test('renders table with headers and rows', () => {
    const headers = {
      Name: 'Name',
      Rut: 'Rut',
      Permisos: <PermissionLabel permissions={[3, 2]} />,
    };
    const rows = [
      {
        Name: 'John',
        Rut: '13.545.433-6',
        Permisos: <PermissionLabel permissions={[3, 2]} />,
      },
      {
        Name: 'Jane',
        Rut: '13.545.433-6',
        Permisos: <PermissionLabel permissions={[3, 2]} />,
      },
    ];
    const id = {
      property: 'name',
      showValue: true,
    };
    const highlight = {
      property: 'id',
      showValue: true,
    };
    
    expect(() => {
      render(<Table headers={headers} rows={rows} id={id} highlight={highlight} />);
    }).toThrowError('Boolean type for highlight value is required');
  });