import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import FormCreateUser from '..';

describe('<FormCreateUser/>', () => {
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<FormCreateUser />, { container });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  test('Render component Crear usuario', () => {
    const heading = screen.getByText('Crear nuevo usuario');
    expect(heading).toBeInTheDocument();
  });

  test('Render component Ingresar datos', () => {
    const heading = screen.getByText('Ingresar datos');
    expect(heading).toBeInTheDocument();
  });

  test('Render component Configurar permisos', () => {
    const heading = screen.getByText('Configurar permisos');
    expect(heading).toBeInTheDocument();
  });

  test('Render component estados de transacciones', () => {
    const heading = screen.getByText(
      'Permite consultar estados de transacciones'
    );
    expect(heading).toBeInTheDocument();
  });

  test('Update the user firstname field', () => {
    const inputElement = screen.getByTestId('input_firstname');
    fireEvent.change(inputElement, { target: { value: 'Carlos' } });
    fireEvent.blur(inputElement);
    expect(inputElement).toHaveValue('Carlos');
  });

  test('Update the user lastname field', () => {
    const inputElement = screen.getByTestId('input_lastname');

    fireEvent.change(inputElement, { target: { value: 'Gilgamesh' } });
    fireEvent.blur(inputElement);

    expect(inputElement).toHaveValue('Gilgamesh');
  });

  test('Update the user email field', () => {
    const inputElement = screen.getByTestId('input_email');

    fireEvent.change(inputElement, { target: { value: 'itau@itau.cl' } });
    fireEvent.blur(inputElement);

    expect(inputElement).toHaveValue('itau@itau.cl');
  });
  test('Alert email field', async () => {
    const inputElement = screen.getByTestId('input_email');

    fireEvent.change(inputElement, { target: { value: '' } });
    fireEvent.blur(inputElement);

    await waitFor(() => {
      const errorMessage = screen.getByText('Campo Requerido');
      expect(errorMessage).toBeInTheDocument();
    });
  });

  test('should activate only one of two dependent toggles (1 and 2) and allow activation of third toggle regardless of previous selections', async () => {
    const toggleOne = screen.getByTestId(/checkbox-transactionsStatusCheck/);
    const toggleTwo = screen.getByTestId(/checkbox-transactionsAuth/);
    const toggleThree = screen.getByTestId(/checkbox-usersAdmin/);

    fireEvent.click(toggleOne);

    await waitFor(() => {
      expect(toggleOne).toBeChecked();
    });

    fireEvent.click(toggleTwo);

    await waitFor(() => {
      expect(toggleTwo).toBeChecked();
    });

    expect(toggleOne).not.toBeChecked();

    fireEvent.click(toggleThree);

    await waitFor(() => {
      expect(toggleThree).toBeChecked();
    });

    expect(toggleTwo).toBeChecked();
    expect(toggleOne).not.toBeChecked();
  });
});
