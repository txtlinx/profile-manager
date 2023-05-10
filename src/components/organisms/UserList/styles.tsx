/* eslint-disable */
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../../../consts/devices';

export const ListContainer = styled.div`
  width: 80%;
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
  @media screen and (max-width: ${devices.mobile}) {
    width: 100%;
    height: 121px;
    flex-wrap:wrap;
    justify-content:space-between;
  }
`;

export const AccionesMasivasTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-left: 77px;
  width:max-content;
  @media screen and (max-width: ${devices.mobile}) {
    margin-left:24px;
  }
`;

export const AccionesMasivasMobileButtons = styled.div`
  display:flex;
  justify-content: center;
  width:100%;
  gap:48.5px;
`

export const AccionesMasivasOptions = styled.div`
  margin-left: 19px;
  display: flex;
  width: 60px;
  gap: 19px;
  @media screen and (max-width: ${devices.mobile}) {
    margin:0;
    margin-right:30px;
  }
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
  & > h1 {
    color: #231d19;
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    line-height: 41px;
    margin-left: 20px;
    flex: none;
    order: 1;
    flex-grow: 0;
    display: inline-block;
    width: calc(100% - 20px);
    font-family: Itau6;
    margin-top: 25px;
    margin-bottom: 24px;
    @media screen and (max-width: ${devices.mobile}) {
    & {
      font-size: 30px;
    }
  }
  }
  & > h2  {
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
    margin-bottom: 24px;
    white-space: nowrap;
    @media screen and (max-width: ${devices.mobile}) {
    & {
      font-size: 28px;
    }
  }
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
export const StyledVolver = styled(NavLink)`
  margin-left: 90%;
  margin-top: -20px;
  color: #007AB7;
  font-size: 18px;
  font-family: itau6;
  font-weight: 400;
  text-underline-offset: 5px;
   @media screen and (max-width: ${devices.mobile}) {
    & {
      margin-left: 80%;
    }
  }
`;
export const StyledBreadcrumb = styled.div`
  & img {
    width: 16px;
    height: 18px;
  }
 /* @media screen and (max-width: ${devices.mobile}) {
    & {
      display: none;
    }
  }*/
`;

