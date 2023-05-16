/* eslint-disable */
import { useState } from 'react';
import Alert from '../../atoms/Alert';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Switch from '../../atoms/Switch';
import Dropdown from '../../atoms/Dropdown';
import {
  formatRut,
  validateLengthAndCharactersInRut,
  validateRut,
} from '../../../utils/rut';

import { labels } from '../../../consts/labels';
import {
  CardNewUserForm,
  CardUserData,
  StyledAvisoSolido,
  FixedFormrow,
  ButtonContainer
} from './style';
import Tooltip from '../../atoms/Tooltip';
import infoIcon from '../../../assets/img/information.svg';
import flagChile from '../../../assets/img/flagChile.svg';
import flagBr from '../../../assets/img/flagBr.svg';
import flagPe from '../../../assets/img/flagPe.svg';
import flagCo from '../../../assets/img/flagCo.svg';
import flagUr from '../../../assets/img/flagUr.svg';
import flagPr from '../../../assets/img/flagPr.svg';
import flagAr from '../../../assets/img/flagAr.svg';
import flagLn from '../../../assets/img/flagEng.svg';
import flagLu from '../../../assets/img/flagLu.svg';
import flagHo from '../../../assets/img/flagHo.svg';
import flagJp from '../../../assets/img/flagJp.svg';
import flagCh from '../../../assets/img/flagCh.svg';
import flagUsa from '../../../assets/img/flagUsa.svg';
import FlagElement from '../../atoms/FlagElement';
type UserParam = {
  value?: string;
  validated?: boolean;
  error?: string;
};
export type User = {
  [key: string]: {
    value: string;
    validated: boolean;
    error: string;
  };
};
type CheckboxUpdateKeys = {
  [key: string]: {
    setCheckboxes: () => void;
  };
};

interface Checkboxes {
  transactionsStatusCheck: boolean;
  transactionsAuth: boolean;
  usersAdmin: boolean;
}

const FormContactUser = () => {
  const [user, setUser] = useState<User>({
    fullname: {
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
  const [checkboxes, setCheckboxes] = useState<Checkboxes>({
    transactionsStatusCheck: false,
    transactionsAuth: false,
    usersAdmin: false,
  });
  const updateField = (campo: string, nuevoValor: UserParam): void => {
    setUser((estadoAnterior) => {
      return {
        ...estadoAnterior,
        [campo]: {
          ...estadoAnterior[campo],
          ...nuevoValor,
        },
      };
    });
  };
  const setAuthorizations = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    const checkboxUpdates: CheckboxUpdateKeys = {
      transactionsStatusCheck: {
        setCheckboxes: () =>
          setCheckboxes((prev) => ({
            ...prev,
            transactionsStatusCheck: checked,
            transactionsAuth: false,
          })),
      },
      transactionsAuth: {
        setCheckboxes: () =>
          setCheckboxes((prev) => ({
            ...prev,
            transactionsStatusCheck: false,
            transactionsAuth: checked,
          })),
      },
      usersAdmin: {
        setCheckboxes: () =>
          setCheckboxes((prev) => ({
            ...prev,
            usersAdmin: checked,
          })),
      },
    };

    checkboxUpdates[name].setCheckboxes();
  };
  const handleInputChange = (fieldName: string, value: any) => {
    updateField(fieldName, { value });
  };
  const handleInputBlur = (fieldName: any) => {
    const value = user[fieldName].value;
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      updateField(fieldName, {
        validated: true,
        error: 'Campo Requerido',
      });
    } else {
      updateField(fieldName, {
        value: trimmedValue,
        validated: true,
        error: '',
      });
    }
  };

  const handleFullNameBlur = () => {
    const pattern = /^[a-zA-Z]+$/;
    const fullname = user.fullname.value.trim();

    if (!fullname) {
      updateField('fullname', {
        validated: true,
        error: 'Campo requerido',
      });
    } else if (!pattern.test(fullname)) {
      updateField('fullname', {
        validated: true,
        error: 'Ingresar un nombre válido',
      });
    } else {
      updateField('fullname', {
        validated: true,
        error: '',
      });
    }
  };
  const handleLastnameBlur = () => {
    const pattern = /^[a-zA-Z]+$/;
    const lastname = user.lastname.value.trim();

    if (!lastname) {
      updateField('lastname', {
        validated: true,
        error: 'Campo requerido',
      });
    } else if (!pattern.test(lastname)) {
      updateField('lastname', {
        validated: true,
        error: 'Ingresar un apellido válido',
      });
    } else {
      updateField('lastname', {
        validated: true,
        error: '',
      });
    }
  };

  const handleInputBlurEmail = () => {
    const validateEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    const email = user.email.value.trim();

    if (!email) {
      updateField('email', {
        validated: true,
        error: 'Campo Requerido',
      });
    } else if (!validateEmail(email)) {
      updateField('email', {
        validated: true,
        error: 'Ingresar un correo válido',
      });
    } else {
      updateField('email', {
        validated: true,
        error: '',
      });
    }
  };

  const handleInputBlurRut = (fieldName: string) => {
    const value = user[fieldName].value;
    const trimmedValue = value.trim();
    console.log(trimmedValue);
    if (!trimmedValue) {
      updateField(fieldName, {
        validated: true,
        error: 'Campo requerido',
      });
    } else if (fieldName === 'rut' && !validateRut(trimmedValue)) {
      updateField(fieldName, {
        validated: true,
        error: 'RUT inválido',
      });
    } else if (
      fieldName === 'rut' &&
      !validateLengthAndCharactersInRut(trimmedValue)
    ) {
      updateField(fieldName, {
        validated: true,
        error: 'RUT debe tener hasta 12 caracteres',
      });
    } else {
      const formattedValue =
        fieldName === 'rut' ? formatRut(trimmedValue) : trimmedValue;
      updateField(fieldName, {
        value: formattedValue,
        validated: true,
        error: '',
      });
    }
  };

  return (
    <CardNewUserForm>
      <CardUserData>
        <h3>Dejanos los siguientes datos de contacto.</h3>
        <Input
          id="fullname"
          name="fullname"
          variant="ligth"
          placeholder="Juan"
          value={user.fullname.value}
          label="Nombre"
          type="text"
          error={Boolean(user.fullname.error)}
          errorMessage={user.fullname.error}
          icon={user.fullname.error ? <StyledAvisoSolido /> : null}
          maxLength={50}
          onChange={(e) => {
            handleInputChange('fullname', e.target.value);
          }}
          onBlur={handleFullNameBlur}
        />
        <Input
          id="email"
          name="email"
          placeholder="jperezcotapos@empresa.com"
          variant="ligth"
          label="Correo electrónico"
          type="text"
          error={Boolean(user.email.error)}
          errorMessage={user.email.error}
          icon={user.email.error ? <StyledAvisoSolido /> : null}
          value={user.email.value}
          maxLength={50}
          onChange={(e) => {
            handleInputChange('email', e.target.value);
          }}
          onBlur={handleInputBlurEmail}
        />
        <FixedFormrow>
          <Dropdown
            onClickElement={() => {}}
            placeholder=""
            id="1"
            legend="Código de país"
            elements={[
              {
                id: '1',
                legend: (
                  <FlagElement flagIcon={flagChile} id="1" legend="+56 Chile" />
                ),
              },

              {
                id: '2',
                legend: <FlagElement flagIcon={flagUsa} legend="+1 EEUU" />,
              },
              {
                id: '3',
                legend: <FlagElement flagIcon={flagBr} legend="+55 Brasil" />,
              },
              {
                id: '4',
                legend: <FlagElement flagIcon={flagPe} legend="+51 Peru" />,
              },
              {
                id: '5',
                legend: <FlagElement flagIcon={flagCo} legend="+57 Colombia" />,
              },
              {
                id: '6',
                legend: <FlagElement flagIcon={flagUr} legend="+598 Uruguay" />,
              },
              {
                id: '7',
                legend: (
                  <FlagElement flagIcon={flagPr} legend="+595 Paraguay" />
                ),
              },
              {
                id: '8',
                legend: (
                  <FlagElement flagIcon={flagAr} legend="+54 Argentina" />
                ),
              },
              {
                id: '9',
                legend: <FlagElement flagIcon={flagLn} legend="+44 Londres" />,
              },
              {
                id: '10',
                legend: (
                  <FlagElement flagIcon={flagLu} legend="+352 Luxemburgo" />
                ),
              },
              {
                id: '11',
                legend: (
                  <FlagElement flagIcon={flagHo} legend="+852 Hong Kong" />
                ),
              },
              {
                id: '12',
                legend: <FlagElement flagIcon={flagJp} legend="+81 Japon" />,
              },
              {
                id: '13',
                legend: <FlagElement flagIcon={flagCh} legend="+86 China" />,
              },
            ]}
            value={{
              id: '1',
              legend: <FlagElement flagIcon={flagChile} legend="+56" />,
            }}
            variant="ligth"
          />
          <Input
            id="telefono"
            name="telefono"
            placeholder="1234567890"
            variant="ligth"
            label="Número"
            type="text"
            error={Boolean(user.telefono.error)}
            errorMessage={user.telefono.error}
            value={user.telefono.value}
            icon={user.telefono.error ? <StyledAvisoSolido /> : null}
            onChange={(e) => {
              handleInputChange('telefono', e.target.value);
            }}
            onBlur={() => {
              handleInputBlur('telefono');
            }}
          />
        </FixedFormrow>
        <ButtonContainer>
          <Button variant={"contained"} level={"n3"}>Enviar</Button>
        </ButtonContainer>
      </CardUserData>
    </CardNewUserForm>
  );
};

export default FormContactUser;
