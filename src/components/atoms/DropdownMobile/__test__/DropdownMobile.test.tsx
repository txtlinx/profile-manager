/* eslint-disable */
import { render, fireEvent, screen } from '@testing-library/react';
import DropdownMobile from '..';
describe('DropdownMobile', () => {
  const items = [
    { icon: <div>icon1</div>, label: 'label1' },
    { icon: <div>icon2</div>, label: 'label2' },
    { icon: <div>icon3</div>, label: 'label3' },
  ];
  it('renders the component with the given items', () => {
    render(<DropdownMobile items={items} />);
    const dropdown = screen.getByTestId('dropdown-mobile');
    expect(dropdown).toBeInTheDocument();
    const clickable = screen.getByTestId('clickable');
    expect(clickable).toBeInTheDocument();
    fireEvent.click(clickable);
    const list = screen.getByTestId('list');
    expect(list).toBeInTheDocument();
    const listItems = screen.getAllByTestId('item');
    expect(listItems).toHaveLength(items.length);
    listItems.forEach((item, index) => {
      const icon = screen.getByTestId(`icon-${index}`);
      const label = screen.getByTestId(`label-${index}`);
      expect(item).toBeInTheDocument();
      expect(icon).toBeInTheDocument();
      expect(label).toBeInTheDocument();
      expect(icon.textContent).toBe(`icon${index + 1}`);
      expect(label.textContent).toBe(`label${index + 1}`);
    });
  });
  it('opens and closes the list when clicking on the clickable div', () => {
    render(<DropdownMobile items={items} />);
    const clickable = screen.getByTestId('clickable');
    expect(clickable).toBeInTheDocument();
    fireEvent.click(clickable);
    const list = screen.getByTestId('list');
    expect(list).toBeInTheDocument();
    fireEvent.click(clickable);
    expect(list).not.toBeInTheDocument();
  });
  it('closes the list when clicking outside the component', () => {
    render(<DropdownMobile items={items} />);
    const clickable = screen.getByTestId('clickable');
    expect(clickable).toBeInTheDocument();
    fireEvent.click(clickable);
    const list = screen.getByTestId('list');
    expect(list).toBeInTheDocument();
    fireEvent.click(document.body);
    expect(list).not.toBeInTheDocument();
  });
});
