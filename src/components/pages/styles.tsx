/* eslint-disable */

import styled from 'styled-components';

import { devices } from '../../consts/devices';

export const ListContainer = styled.div`
  width: 80%;
  padding: 24px;
  height: 60vh;
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-color: #ffffff;
  @media screen and (max-width: ${devices.tablet}) {
    width: 95%;
    height: 768px;
  }
  @media screen and (max-width: ${devices.mobile}) {
    width: calc(100% - 8px);
    height: 500px;
    align-items: flex-start;
    padding: 8px;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const AccionesMasivas = styled.div`
  width: calc(100% - 88px);
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  position: fixed;
  bottom: 0;
  box-shadow: 0px 1px 7px rgba(91, 81, 73, 0.3);
  z-index: 10000;

  @media screen and (max-width: ${devices.tablet}) {
    width: 100%;
  }
`;

export const AccionesMasivasTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-left: 77px;
`;

export const AccionesMasivasOptions = styled.div`
  margin-left: 19px;
  display: flex;
  width: 60px;
  gap: 19px;
`;
export const StyledButtonCrear = styled.div`
  position: absolute;
  right: 24px;
  & > button {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const StyledMobileTableControls = styled.div`
  display:flex;
  flex-direction:column;
  padding-left:10px;
  gap: 37px;
  width:100%;
  align-items: flex-end;
  & label{
    font-size:16px;
  }
  @media screen and (max-width: ${devices.mobile}) {
    align-items: flex-start;
  }
`
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

export const CardActions = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  max-width: 600px;

  @media screen and (max-width: ${devices.mobile}) {
    & {
      justify-content: center;
    }
  }
`;

export const CardActionsHide = styled.div`
  display: none;
  @media screen and (max-width: ${devices.mobile}) {
    & {
      justify-content: center;
      font-family: Itau6;
    }
  }
`;

