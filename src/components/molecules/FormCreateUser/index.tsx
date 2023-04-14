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
  ContainerForm,
  CardUserData,
  CardActions,
  CardPermissions,
  PermissionsStyle,
  ContainerTitle,
  PermissionsLabel,
  InfoIconPermissions,
  StyledHr,
  AlertTitle,
  FormRow,
  StyledAvisoSolido,
  FixedFormrow,
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

const FormCreateUser = () => {
  const [user, setUser] = useState<User>({
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

  const handleFirstnameBlur = () => {
    const pattern = /^[a-zA-Z]+$/;
    const firstname = user.firstname.value.trim();

    if (!firstname) {
      updateField('firstname', {
        validated: true,
        error: 'Campo requerido',
      });
    } else if (!pattern.test(firstname)) {
      updateField('firstname', {
        validated: true,
        error: 'Ingresar un nombre válido',
      });
    } else {
      updateField('firstname', {
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
    <ContainerForm>
      <ContainerTitle>
        <h2>Crear nuevo usuario</h2>
      </ContainerTitle>
      <CardNewUserForm>
        <CardUserData>
          <h3>Ingresar datos</h3>
          <FormRow>
            <Input
              id="firstname"
              name="firstname"
              variant="ligth"
              placeholder="Juan"
              value={user.firstname.value}
              label="Nombre"
              type="text"
              error={Boolean(user.firstname.error)}
              errorMessage={user.firstname.error}
              icon={user.firstname.error ? <StyledAvisoSolido /> : null}
              maxLength={50}
              onChange={(e) => {
                handleInputChange('firstname', e.target.value);
              }}
              onBlur={handleFirstnameBlur}
            />
            <Input
              id="lastname"
              name="lastname"
              placeholder="Perez Cotapos"
              variant="ligth"
              label="Apellido"
              type="text"
              error={Boolean(user.lastname.error)}
              errorMessage={user.lastname.error}
              value={user.lastname.value}
              icon={user.lastname.error ? <StyledAvisoSolido /> : null}
              maxLength={50}
              onChange={(e) => {
                handleInputChange('lastname', e.target.value);
              }}
              onBlur={handleLastnameBlur}
            />
          </FormRow>
          <Input
            id="rut"
            name="rut"
            placeholder="13.545.433-6"
            variant="ligth"
            label="Rut"
            type="text"
            error={Boolean(user.rut.error)}
            errorMessage={user.rut.error}
            value={user.rut.value}
            icon={user.rut.error ? <StyledAvisoSolido /> : null}
            onChange={(e) => {
              handleInputChange('rut', e.target.value);
            }}
            onBlur={() => {
              handleInputBlurRut('rut');
            }}
          />
          <Input
            id="email"
            name="email"
            placeholder="jperezcotapos@empresa.com"
            variant="ligth"
            label="Email"
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
                    <FlagElement
                      flagIcon={flagChile}
                      id="1"
                      legend="+56 Chile"
                    />
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
                  legend: (
                    <FlagElement flagIcon={flagCo} legend="+57 Colombia" />
                  ),
                },
                {
                  id: '6',
                  legend: (
                    <FlagElement flagIcon={flagUr} legend="+598 Uruguay" />
                  ),
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
                  legend: (
                    <FlagElement flagIcon={flagLn} legend="+44 Londres" />
                  ),
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
              label="Teléfono"
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
        </CardUserData>
      </CardNewUserForm>
      <CardNewUserForm>
        <CardPermissions>
          <h3>{labels.PERMISSIONS_CONFIGURATION.TITLE}</h3>
          <PermissionsStyle>
            <PermissionsLabel>
              {labels.PERMISSIONS_CONFIGURATION.STATUS_CHECK_LABEL}
              <Tooltip
                id="1"
                arrowOrientation="bottom"
                content={labels.PERMISSIONS_CONFIGURATION.STATUS_CHECK_TOOLTIP}
              >
                <InfoIconPermissions src={infoIcon} alt="infoIcon" />
              </Tooltip>
            </PermissionsLabel>
            <Switch
              name="transactionsStatusCheck"
              onChange={setAuthorizations}
              checked={checkboxes.transactionsStatusCheck}
            />
          </PermissionsStyle>
          <StyledHr />
          <PermissionsStyle>
            <PermissionsLabel>
              {labels.PERMISSIONS_CONFIGURATION.TRANSACTIONS_AUTH_LABEL}
              <Tooltip
                id="2"
                arrowOrientation="bottom"
                content={
                  labels.PERMISSIONS_CONFIGURATION.TRANSACTIONS_AUTH_TOOLTIP
                }
              >
                <InfoIconPermissions src={infoIcon} alt="infoIcon" />
              </Tooltip>
            </PermissionsLabel>
            <Switch
              name="transactionsAuth"
              onChange={setAuthorizations}
              checked={checkboxes.transactionsAuth}
            />
          </PermissionsStyle>
          <StyledHr />
          <PermissionsStyle>
            <PermissionsLabel>
              {labels.PERMISSIONS_CONFIGURATION.USERS_ADMIN_LABEL}
              <Tooltip
                id="3"
                arrowOrientation="bottom"
                content={labels.PERMISSIONS_CONFIGURATION.USERS_ADMIN_TOOLTIP}
              >
                <InfoIconPermissions src={infoIcon} alt="infoIcon" />
              </Tooltip>
            </PermissionsLabel>
            <Switch
              name="usersAdmin"
              onChange={setAuthorizations}
              checked={checkboxes.usersAdmin}
            />
          </PermissionsStyle>
          <Alert open={true}>
            <AlertTitle>
              {labels.PERMISSIONS_CONFIGURATION.ALERT_TITLE}
            </AlertTitle>
            <br />
            {labels.PERMISSIONS_CONFIGURATION.ALERT_CONTENT}
          </Alert>
        </CardPermissions>
      </CardNewUserForm>
      <CardActions>
        <Button variant="contained" level="n1">
          {labels.PERMISSIONS_CONFIGURATION.FORM_BUTTON}
        </Button>
      </CardActions>
    </ContainerForm>
  );
};

export default FormCreateUser;
