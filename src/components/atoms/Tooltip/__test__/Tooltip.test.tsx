import { fireEvent, render, screen } from '@testing-library/react';
import InformationIcon from '../../../../assets/img/information.svg';

import Tooltip from '..';

describe('<Tooltip />', () => {
  test('Render component with arrow arrowOrientation top', () => {
    render(
      <Tooltip
        id="test-tooltip"
        arrowOrientation="top"
        content="Tooltip arrow top"
      >
        Tooltip
      </Tooltip>
    );

    const tooltip = screen.getByText('Tooltip');
    fireEvent.mouseEnter(tooltip);
    const content = screen.queryByText('Tooltip arrow top');
    expect(content).toBeInTheDocument();
  });

  test('Render component with arrow arrowOrientation bottom and icon, and title', () => {
    render(
      <Tooltip
        id="test-tooltip"
        arrowOrientation="bottom"
        content="Tooltip arrow bottom"
        icon={<img src={InformationIcon} alt="" />}
        title="Title"
      >
        Tooltip
      </Tooltip>
    );
    const tooltip = screen.getByText('Tooltip');
    fireEvent.mouseEnter(tooltip);
    expect(tooltip).toHaveTextContent('Tooltip arrow bottom');
    expect(tooltip).toHaveTextContent('Title');
  });

  test('Close component when i click outside', () => {
    render(
      <Tooltip
        id="test-tooltip"
        arrowOrientation="bottom"
        content="Tooltip arrow bottom"
        icon={<img src={InformationIcon} alt="" />}
        title="Title"
      >
        Tooltip
      </Tooltip>
    );
    const tooltip = screen.getByText('Tooltip');
    fireEvent.mouseEnter(tooltip);
    expect(tooltip).toHaveTextContent('Tooltip arrow bottom');
    fireEvent.mouseDown(document);
    const content = screen.queryByText('Tooltip arrow bottom');
    expect(content).not.toBeInTheDocument();
  });
});
