import styled from 'styled-components';
import { ReactComponent as AvisoSolido } from '../../../assets/img/aviso_solido.svg';
import { devices } from '../../../consts/devices';
import { NavLink } from 'react-router-dom';

export const ContainerForm = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
  }
  & h3 {
    font-size: 24px;
  }
`;
export const StyledUserLinks = styled.div`
  display: flex;
  width: calc(100% - 20px);
  margin-left: 20px;
  justify-content: space-between;

  @media screen and (max-width: ${devices.mobile}) {
    & {
      justify-content: end;
    }
  }
`;

export const StyledBreadcrumb = styled.div`
  & img {
    width: 16px;
    height: 18px;
  }
  @media screen and (max-width: ${devices.mobile}) {
    & {
      display: none;
    }
  }
`;
export const StyledVolver = styled(NavLink)`
  display: none;
  color: #007ab7;
  font-size: 18px;
  @media screen and (max-width: ${devices.tablet}) {
    & {
      display: inline-block;
    }
  }
`;
interface CardNewUserFormProps {
  height?: number;
}
export const ContainerTitle = styled.div`
  & {
    width: 100%;
  }
  & > h2 {
    color: #231d19;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 41px;
    margin-left: 20px;
    flex: none;
    order: 1;
    flex-grow: 0;
    display: inline-block;
    width: calc(100% - 20px);
    font-family: Itau6;
  }
`;
export const CardNewUserForm = styled.div<CardNewUserFormProps>`
  box-shadow: 0px 0.79px 1.57px rgba(91, 65, 73, 0.2);
  border-radius: 7px;
  padding: 24px;
  gap: 32px;
  width: 600px;
  //height: ${(props) => (props.height ? `${props.height}px` : 'fit-content')};
  background: #ffffff;
  flex-grow: 0;
  @media screen and (max-width: ${devices.tablet}) {
    & {
      width: 98%;
      padding: 0px;
    }
  }
`;
export const CardUserData = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 100%;
  & > * {
    margin-bottom: 51px;
  }

  & > div {
    & > :nth-child(1) {
      flex-grow: 1;
    }
    & > :nth-child(2) {
      flex-grow: 16;
    }
  }
  h3 {
    margin-bottom: 24px;
  }
  @media screen and (max-width: ${devices.tablet}) {
    & {
      padding: 16px;
    }
  }
`;

export const FormRow = styled.div`
  & {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-bottom: 0px;
  }
  & > div {
    width: 45%;
    margin-bottom: 51px;
  }
  @media screen and (max-width: ${devices.tablet}) {
    & > div {
      width: 100%;
    }
    & {
      gap: 0px;
    }
  }
`;

export const CardPermissions = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  width: 100%;
  gap: 18px;
  @media screen and (max-width: ${devices.tablet}) {
    & {
      padding: 16px;
    }
  }
`;
export const PermissionsStyle = styled.div`
  display: flex;

  justify-content: space-between;
  padding: 12px;
  input[type='checkbox']:checked {
    background-color: orange;
  }
`;

export const PermissionsLabel = styled.div`
  display: flex;
  width: 80%;
  color: #56504c;
  font-weight: bold;
`;

export const AlertTitle = styled.span`
  font-weight: bold;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  max-width: 600px;

  @media screen and (max-width: ${devices.tablet}) {
    & {
      justify-content: center;
    }
  }
`;

export const InfoIconPermissions = styled.img`
  width: 20px;
  height: auto;
`;

export const StyledHr = styled.hr`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const FixedFormrow = styled.div`
  & {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 0px;
  }
  & > fieldset {
    width: 30%;
  }
  @media screen and (max-width: ${devices.mobile}) {
    & {
      gap: 0px;
    }
    & > fieldset {
      width: 100%;
    }
    & > fieldset:first-child {
      margin-bottom: 51px;
    }
  }
`;

export const StyledAvisoSolido = styled(AvisoSolido)`
  & {
    margin-right: 5px;
  }
  & path {
    fill: #b71c1c !important;
  }
`;
