import { render, screen } from '@testing-library/react';
import Breadcrumb from '..';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('<Breadcrumb />', () => {
  const elements = [
    {
      legend: 'url1',
      url: '/',
    },
    {
      legend: 'url2',
      url: '/',
    },
    {
      legend: 'url3',
      url: '/',
    },
  ];

  test('Render component', () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route
            path="/"
            element={<Breadcrumb id="test-breadcrumb" elements={elements} />}
          />
        </Routes>
      </MemoryRouter>
    );
    const breadcrumb = screen.getByTestId('test-breadcrumb');
    expect(breadcrumb).toBeInTheDocument();
  });

  test('Render all elements', () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route
            path="/"
            element={<Breadcrumb id="test-breadcrumb" elements={elements} />}
          />
        </Routes>
      </MemoryRouter>
    );
    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(elements.length);
  });
});

//con beforeEach
/**import { render, RenderResult } from '@testing-library/react';
import Breadcrumb from '..';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
describe('<Breadcrumb />', () => {
  let breadcrumb: HTMLElement;
  let router: RenderResult;
  const elements = [
    {
      legend: 'url1',
      url: '/',
    },
    {
      legend: 'url2',
      url: '/',
    },
    {
      legend: 'url3',
      url: '/',
    },
  ];
  beforeEach(() => {
    router = render(
      <MemoryRouter>
        <Routes>
          <Route
            path="/"
            element={<Breadcrumb id="test-breadcrumb" elements={elements} />}
          />
        </Routes>
      </MemoryRouter>
    );
    breadcrumb = router.getByTestId('test-breadcrumb');
  });

  test('Render component', () => {
    expect(breadcrumb).toBeInTheDocument();
  });

  test('Render all elements', () => {
    const { getAllByRole } = router;
    const items = getAllByRole('listitem');
    expect(items.length).toBe(elements.length);
  });
});
 */
