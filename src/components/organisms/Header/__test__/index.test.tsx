import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from '..';
//import { applicationPaths } from '../../../../config/path';
import AppProvider from '../../../../context/appContext';
import useStore from '../../../../hooks/useStore';

//import { CompaniesExample } from '../../../molecules/Header/MyCompanies/MyCompanies-example';
jest.mock('../../../../hooks/useStore');
const setShowModalMock = jest.fn();
const setOpenMenuMock = jest.fn();
const WrappedHeader = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Header
          openMenu={false}
          setOpenMenu={setOpenMenuMock}
          setShowModal={setShowModalMock}
          showModal={'open'}
        />
      </BrowserRouter>
    </AppProvider>
  );
};
beforeEach(() => {
  (useStore as jest.Mock).mockReturnValue([
    {
      dashboard: {
        loading: false,
      },
    },
  ]);
});

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

global.scrollTo = jest.fn();
const target = 'https://example.com/';
describe('<Header />', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: new URL(target),
    });
  });

  afterEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: window.location,
    });
  });

  test('Render menu and button', () => {
    render(<WrappedHeader />);
    const switchButton = screen.getByTestId('button-menu-header');
    fireEvent.click(switchButton);
    expect(switchButton).toBeInTheDocument();
  });

  test('Render header and press icon', () => {
    process.env.REACT_APP_HOME_MF_URL = 'http://localhost.cl/';
    render(<WrappedHeader />);
    const logo = screen.getByTestId('logo-itau-mayorista');
    expect(window.location.href).toBe(target);
    fireEvent.click(logo);
    expect(window.location.href).toBe(process.env.REACT_APP_HOME_MF_URL);
  });

  test('Press menu Hamburger is called', () => {
    render(<WrappedHeader />);
    const btn = screen.getByTestId('btn-hamburger');
    fireEvent.click(btn);
    expect(setOpenMenuMock).toBeCalled();
  });
});
