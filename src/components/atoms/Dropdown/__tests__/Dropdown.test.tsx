import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Dropdown from '..';

const LIST_COMPANY = [
  { id: '1', legend: '71.335.345-K - Fruticola Andes' },
  { id: '2', legend: '71.335.345-K - Fruticola Empresas grandes' },
  { id: '3', legend: '71.335.345-K - Fruticola Empresas medianas' },
  { id: '4', legend: '71.335.345-K - Fruticola Empresas chicas' },
  { id: '5', legend: '71.335.345-K - sodimac s.a.' },
];

describe('<Dropdown />', () => {
  test('Render component', () => {
    render(
      <Dropdown
        id="test-dropdown"
        legend="Dropdown"
        placeholder="Selecciona empresa"
        elements={LIST_COMPANY}
        onClickElement={jest.fn()}
        value={{ id: '', legend: '' }}
      />
    );
    const dropdown = screen.getByTestId('test-dropdown');
    expect(dropdown).toHaveTextContent('Selecciona empresa');
  });

  test('Render component and view options', () => {
    render(
      <Dropdown
        id="test-dropdown"
        legend="Dropdown"
        placeholder="Selecciona empresa"
        elements={LIST_COMPANY}
        onClickElement={jest.fn()}
        value={{ id: '', legend: '' }}
      />
    );

    const dropdown = screen.getByTestId('test-dropdown');
    expect(dropdown).toHaveTextContent('Selecciona empresa');
    const firstElementFirstTime = screen.queryByText(
      '71.335.345-K - Fruticola Andes'
    );
    expect(firstElementFirstTime).not.toBeInTheDocument();
    fireEvent.click(dropdown);
    const firstElementSecondTime = screen.queryByText(
      '71.335.345-K - Fruticola Andes'
    );
    expect(firstElementSecondTime).toBeInTheDocument();
    const firstElement = screen.getByTestId('test-dropdown-option-0');
    fireEvent.click(firstElement);
    const secondElementFirstTime = screen.queryByText(
      '71.335.345-K - Fruticola Empresas grandes'
    );
    expect(secondElementFirstTime).not.toBeInTheDocument();
  });

  test('Render component with value and disabled marquee', () => {
    render(
      <Dropdown
        id="test-dropdown"
        legend="Dropdown"
        placeholder="Selecciona empresa"
        elements={LIST_COMPANY}
        onClickElement={jest.fn()}
        value={{ id: '1', legend: '71.335.345-K - Fruticola Andes' }}
        disableMarquee
      />
    );
    const dropdownWithValue = screen.queryByText(
      '71.335.345-K - Fruticola Andes'
    );
    expect(dropdownWithValue).toBeInTheDocument();
    const dropdown = screen.getByTestId('test-dropdown');
    fireEvent.click(dropdown);
    const firstElement = screen.getByTestId('test-dropdown-option-0');
    fireEvent.mouseOver(firstElement);
    expect(firstElement).not.toHaveStyle('text-overflow: clip');
  });
  test('Close component when i click outside', () => {
    render(
      <Dropdown
        variant="ligth"
        icon="*"
        id="test-dropdown"
        legend="Dropdown"
        placeholder="Selecciona empresa"
        elements={LIST_COMPANY}
        onClickElement={jest.fn()}
        value={{ id: '', legend: '' }}
        disableMarquee
      />
    );
    const icon = screen.getByText('Dropdown*');
    expect(icon).toBeInTheDocument();
    const tooltip = screen.getByTestId('test-dropdown');
    fireEvent.click(tooltip);
    const legend = screen.getByText('71.335.345-K - Fruticola Andes');
    expect(legend).toBeInTheDocument();
    fireEvent.mouseDown(document);
    expect(
      screen.queryByText('71.335.345-K - Fruticola Andes')
    ).not.toBeInTheDocument();
  });
});
