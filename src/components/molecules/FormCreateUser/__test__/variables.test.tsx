import { DEFAULT_USER } from '../variables';

test('default user object has correct properties and values', () => {
  expect(DEFAULT_USER).toEqual({
    firstname: {
      value: '',
      validated: false,
      error: '',
    },
    lastname: {
      value: '',
      validated: false,
      error: '',
    },
    rut: {
      value: '',
      validated: false,
      error: '',
    },
    email: {
      value: '',
      validated: false,
      error: '',
    },
    codPais: {
      value: '',
      validated: false,
      error: '',
    },
    telefono: {
      value: '',
      validated: false,
      error: '',
    },
  });
});
