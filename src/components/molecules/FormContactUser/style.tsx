/* eslint-disable */

import styled from 'styled-components';
import { ReactComponent as AvisoSolido } from '../../../assets/img/aviso_solido.svg';
import { devices } from '../../../consts/devices';
import { NavLink } from 'react-router-dom';

interface CardNewUserFormProps {
  height?: number;
}

export const CardNewUserForm = styled.div<CardNewUserFormProps>`
  box-shadow: 0px 0.79px 1.57px rgba(91, 65, 73, 0.2);
  border-radius: 7px;
  padding: 24px;
  gap: 32px;
  width: 346px;
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
    margin-bottom: 24px;
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

export const FixedFormrow = styled.div`
  & {
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
  }
  & > fieldset {
    width: 120px;
    flex-grow: 0;
  }
  & > fieldset:first-child {
    width: 120px;
    flex-grow: 0;
  }
  & > div {
    flex-basis: 168px;
    width: 168px;
    flex-grow: 0 !important;

    input {
      width: 168px;
    }
  }
  @media screen and (max-width: ${devices.mobile}) {
    & {
      gap: 0px;
    }
    & > fieldset {
      width: 120px;
    }
    & > fieldset:first-child {
      width: 120px;
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

export const ButtonContainer = styled.div`
  width:100%;
  margin-bottom:0px;
  button{
    width:100%;
  }
`;
