/* eslint-disable */
import { useState, useMemo , useEffect} from 'react';
import Table from '../../atoms/Table';
import Checkbox from '../../atoms/Checkbox';
import PermissionLabel from '../../atoms/PermissionLabel';
import Oval from '../../atoms/Oval';
import usersMockData from '../../../mockdata/usersMockData';
import { User } from '../../../mockdata/UserType';
import Tooltip from '../../atoms/Tooltip';
import { ReactComponent as Detalle_usuario } from '../../../assets/img/detalle_usuario.svg';
import { ReactComponent as Detalle_usuario2 } from '../../../assets/img/detalle_usuario2.svg';
import { ReactComponent as Candado_bloqueado } from '../../../assets/img/candado_bloqueado.svg';
import { ReactComponent as Candado_desbl } from '../../../assets/img/candado_desbl.svg';
import { ReactComponent as Basurero } from '../../../assets/img/basurero.svg';
import { ReactComponent as EliminarUsuario } from '../../../assets/img/eliminar_usuario.svg';
import { ReactComponent as BusquedaInput } from '../../../assets/img/busqueda_input.svg';
import {
  ListContainer,
  Wrapper,
  AccionesMasivas,
  AccionesMasivasTitle,
  AccionesMasivasOptions,
  AccionesMasivasMobileButtons,
  StyledButtonCrear,
  StyledMobileTableControls,
  ContainerTitle,
  CardActions,
} from './styles';
import { Scrollbar } from 'react-scrollbars-custom';
import Button from '../../atoms/Button';
import InputSearch from '../../atoms/InputSearch';
import { devices } from '../../../consts/devices';
//para las vistas
import useMediaQuery from '../../../hooks/useMediaQuery';
import DropdownMobile from '../../atoms/DropdownMobile';

const UserList = () => {
  const initialSelectedUsers = (data: User[]) => {
    const map = new Map(); //Crea un nuevo mapa vacío.
    for (const obj of data) {
      map.set(obj.id, false);
    }
    return map;
  };
  //devuelve la cantidad de checkbox seleccionados
  const getSelectedUsersQty = (selectedUsers: Map<any, any>) => {
    const selectedqty = Array.from(selectedUsers.values()).reduce(
      (acc, value) => acc + (value ? 1 : 0)
    );
    return selectedqty;
  };
  const [search, setSearch] = useState('');
  /*
   * Map(8) {1 => false, 2 => false, 3 => false, 4 => false, 5 => false, …} */
  const [selectedUsers, setSelectedUsers] = useState(
    initialSelectedUsers(usersMockData)
  );
  const [users, setUsers] = useState(usersMockData);
  //console.log(users)

  const matchesMobile = useMediaQuery(`(max-width:${devices.mobile})`);
  //console.log(`matchesMobile :${matchesMobile}`)
  const matchesTablet = useMediaQuery(`(max-width:${devices.tablet})`);
  //console.log(`matchesTablet :${matchesTablet}`)
  const matchesDesktop = useMediaQuery(`(max-width:${devices.desktop})`);

  useEffect(
    ()=>{
      const $scroll: HTMLElement | null  = document.querySelector('.ScrollbarsCustom');
      if(!$scroll) return;
      $scroll.style.overflowY='scroll'
      $scroll.style.overflowX='visible'
      
    },
  )

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const filteredUsers = users.filter(
    ({ id, name, rut, permisos, enabled }) =>
      name.toLowerCase().includes(search.toLowerCase()) ||
      id.toString().includes(search) ||
      rut.toLowerCase().includes(search.toLowerCase()) ||
      permisos.join(', ').toLowerCase().includes(search.toLowerCase()) ||
      (enabled ? 'habilitado' : 'bloqueado')
        .toLowerCase()
        .includes(search.toLowerCase())
  );
  
  const rows = useMemo(
    () =>
      filteredUsers.map(({ id, name, rut, permisos, enabled }) => {
        //console.log(selectedUsers.get(id))
        let responsiveColumns: any = {
          Name: <span>{name}</span>,
          Rut: <span>{rut}</span>,
          Permisos: <PermissionLabel permissions={permisos} />,
          Oval: (
            <div
              style={{
                display: 'flex',
                gap: '5px',
              }}
            >
              <Oval isTrue={enabled} />
              {enabled ? 'Habilitado' : 'Bloqueado'}
            </div>
          ),
        };
        if (matchesTablet) {
          responsiveColumns = {
            Name: (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    fontWeight: 'bold',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    width: '125px',
                    fontSize: '14px',
                  }}
                >
                  {name}
                </span>
                <span
                  style={{
                    fontSize: '13px',
                  }}
                >
                  {rut}
                </span>
              </div>
            ),
            Permisos: <PermissionLabel permissions={permisos} />,
            Oval: (
              <div
                style={{
                  display: 'flex',
                  gap: '5px',
                  fontSize: '14px',
                }}
              >
                <Oval isTrue={enabled} />
                {enabled ? 'Habilitado' : 'Bloqueado'}
              </div>
            ),
          };
        }
        if (matchesMobile) {
          responsiveColumns = {
            Name: (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    fontWeight: 'bold',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    width: '125px',
                    fontSize: '14px',
                  }}
                >
                  {name}
                </span>
                <span
                  style={{
                    fontSize: '13px',
                  }}
                >
                  {rut}
                </span>
                <span
                  style={{
                    fontSize: '13px',
                  }}
                >
                  {enabled ? 'Habilitado' : 'Bloqueado'}
                </span>
              </div>
            ),
            Acciones: (
              <DropdownMobile
                items={[
                  {
                    icon: <Detalle_usuario2 />,
                    label: 'Detalle Usuario',
                  },
                  {
                    icon: enabled ? <Candado_desbl /> : <Candado_bloqueado />,
                    label: enabled ? 'Bloquear usuario' : 'Desbloquear usuario',
                  },
                  {
                    icon: <EliminarUsuario />,
                    label: 'Eliminar Usuario',
                  },
                ]}
              />
            ),
          };
        }
        return {
          id,
          Checkbox: (
            <Checkbox
              checked={selectedUsers.get(id)}
              onChange={(value) => {
                const newMap = new Map(selectedUsers);
                newMap.set(id, value);
                setSelectedUsers(newMap);
              }}
            />
          ),
          Acciones: (
            <div
              style={{
                display: 'flex',
                gap: '22px',
              }}
            >
              <Tooltip content={'Detalle usuario'} arrowOrientation="bottom">
                <Detalle_usuario />
              </Tooltip>
              <Tooltip
                content={enabled ? 'Bloquear usuario' : 'Desbloquear usuario'}
                arrowOrientation="bottom"
              >
                {enabled ? <Candado_desbl /> : <Candado_bloqueado />}
              </Tooltip>
              <Tooltip content={'Eliminar usuario'} arrowOrientation="bottom">
                <Basurero />
              </Tooltip>
            </div>
          ),
          selected: selectedUsers.get(id),
          ...responsiveColumns,
        };
      }),
    [filteredUsers, selectedUsers, matchesTablet]
  );
  let headersResponsive: any = {
    Checkbox: (
      <Checkbox
        checked={getSelectedUsersQty(selectedUsers) === selectedUsers.size}
        onChange={(value) => {
          const newMap = new Map(selectedUsers);
          newMap.forEach((_value, key) => {
            newMap.set(key, value);
          });
          setSelectedUsers(newMap);
        }}
      />
    ),
    Name: <span>Nombre usuario</span>,
    Rut: <span>RUT</span>,
    Permisos: <span>Permisos</span>,
    Oval: <span>Estado</span>,
    Acciones: <span></span>,
  };
  if (matchesTablet) {
    headersResponsive = {
      Checkbox: (
        <Checkbox
          checked={getSelectedUsersQty(selectedUsers) === selectedUsers.size}
          onChange={(value) => {
            const newMap = new Map(selectedUsers);
            newMap.forEach((_value, key) => {
              newMap.set(key, value);
            });
            setSelectedUsers(newMap);
          }}
        />
      ),
      Name: <span>Nombre usuario</span>,
      Permisos: <span>Permisos</span>,
      Oval: <span>Estado</span>,
      Acciones: <span></span>,
    };
  }
  if (matchesMobile) {
    headersResponsive = {
      Checkbox: <span></span>,
      Name: <span>Nombre usuario</span>,
      Acciones: <span></span>,
    };
  }
  const tableSettings = {
    headers: {
      ...headersResponsive,
    },
    rows,
    id: {
      property: 'id',
      showValue: false,
    },
    highlight: {
      property: 'selected',
      showValue: false,
    },
    hideHeaders: matchesMobile,
  };

  return (
    <>
      <ContainerTitle>
        <h1>Administrar usuarios</h1>

        <h2>Revisa y edita tus usuarios</h2>
      </ContainerTitle>
      <Wrapper>
        <ListContainer>
          <StyledMobileTableControls>
            <InputSearch
              id="search"
              name="search"
              value={search}
              placeholder={'Buscar'}
              icon={<BusquedaInput />}
              onChange={handleSearchChange}
            />
            {matchesMobile && (
              <Checkbox
                label="Seleccionar Todo"
                checked={
                  getSelectedUsersQty(selectedUsers) === selectedUsers.size
                }
                onChange={(value) => {
                  const newMap = new Map(selectedUsers);
                  newMap.forEach((_value, key) => {
                    newMap.set(key, value);
                  });
                  setSelectedUsers(newMap);
                }}
              />
            )}
          </StyledMobileTableControls>
          <Scrollbar
            style={{ width: '100%', height: '80%'}}
            mobileNative={true}
            trackYProps={{
              renderer: (props) => {
                const { elementRef, ...restProps } = props;
                return (
                  <span
                    {...restProps}
                    ref={elementRef}
                    style={{ ...restProps.style, background: 'transparent' }}
                  />
                );
              },
            }}
          >
            <Table {...tableSettings} />
          </Scrollbar>
        </ListContainer>
      </Wrapper>
      {!matchesMobile ? (
        <AccionesMasivas>
          {getSelectedUsersQty(selectedUsers) > 1 ? (
            <>
              <AccionesMasivasTitle>Acciones Masivas</AccionesMasivasTitle>
              <AccionesMasivasOptions>
                <Tooltip
                  content={'Desbloquear usuario'}
                  arrowOrientation="bottom"
                >
                  <Candado_desbl />
                </Tooltip>
                <Tooltip content={'Eliminar usuario'} arrowOrientation="bottom">
                  <Basurero />
                </Tooltip>
              </AccionesMasivasOptions>
            </>
          ) : null}

          <StyledButtonCrear>
            <Button variant="contained" level="n3">
              Crear nuevo usuario
            </Button>
          </StyledButtonCrear>
        </AccionesMasivas>
      ) : (
        <AccionesMasivas>
          {getSelectedUsersQty(selectedUsers) > 1 ? (
            <>
              <AccionesMasivasTitle>Acciones Masivas</AccionesMasivasTitle>
              <AccionesMasivasOptions>

                <Tooltip
                  content={'Desbloquear usuario'}
                  arrowOrientation="bottom"
                >
                  <Candado_desbl />
                </Tooltip>
                <Tooltip content={'Eliminar usuario'} arrowOrientation="bottom">
                  <Basurero />
                </Tooltip>
              </AccionesMasivasOptions>
              <AccionesMasivasMobileButtons>
                <Button variant="contained" level="n2">
                  Rechazar
                </Button>
                <Button variant="contained" level="n3">
                  Autorizar
                </Button>
              </AccionesMasivasMobileButtons>
            </>
          ) : (
            <CardActions>
              <Button variant="contained" level="n3">
                Crear nuevo usuario
              </Button>
            </CardActions>
          )}
        </AccionesMasivas>
      )}
    </>
  );
};

export default UserList;
