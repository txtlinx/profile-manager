/* eslint-disable */

import AdmIcon from '../../../assets/img/admin_usuario.svg';
import AutorizaIcon from '../../../assets/img/autoriza_trx.svg';
import consulta_trx from '../../../assets/img/consulta_trx.svg';
import { Permissions } from '../PermissionLabel/styles';
import styled from 'styled-components';
import { devices } from '../../../consts/devices';
interface Props {
  permissions: number[];
}

const StyledLabel = styled.span`
  font-size: 14px;
`


const permissionComponents = [
  <>
    <Permissions src={consulta_trx} alt="consulta_trx" />
    <StyledLabel> Consulta transacciones</StyledLabel>
  </>,
  <>
    <Permissions src={AdmIcon} alt="IconAdm" />
    <StyledLabel> Autoriza transacciones</StyledLabel>
  </>,
  <>
    <Permissions src={AutorizaIcon} alt="AutorizaIcon" />
    <StyledLabel> Administra usuarios</StyledLabel>
  </>,
];
const PermissionLabel = ({ permissions }: Props) => {
  if (!Array.isArray(permissions)) {
    return null;
  }

  return (
    <div>
      {permissions.map((permission,index) =><div key={index}>{ permissionComponents[permission-1]}</div>)}
    </div>
  );
};

export default PermissionLabel;
