/* eslint-disable */

import styled from 'styled-components';
import { devices } from '../../../consts/devices';
export const BoletaStyled = styled.div`
    width: calc(100% - (11px * 2));
    margin: 0 auto;
    display: flex;
    flex-direction:column;
    h1{
        font-size:32px;
    }
    h2{
        margin-top:34px;
        margin-bottom:23px;
        font-size:28px;
    }
    @media screen and (max-width: ${devices.tablet}) {
        width: calc(100% - (14px * 2));
        h2{
            font-size:20px;
        }
    }
`

export const Beneficios = styled.div`
    background: #FFFFFF;
    padding: 24px 23px;
    border-radius: 7px;
    display:flex;
    flex-direction:column;
    gap:10px;
    @media screen and (max-width: ${devices.tablet}) {
        background:transparent;
        article{
            height:200px;
            width:250px;
            margin-left:6px;
        }      
    }
    @media screen and (max-width: ${devices.mobile}) {
        background:transparent;
        article{
            height:200px;
            margin:0;
        }
    }

`
export const TextoBeneficios = styled.span`
color: #56504C;
    font-size: 16px;
`


export const BeneficiosContainer = styled.div`

    display:grid;
    grid-template-columns: repeat(4,1fr);
    gap:21px;

    @media screen and (max-width: ${devices.desktop}) {
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: repeat(2,1fr);
    }
`

export const FullContainer = styled.div`
    display:flex;
    width:100%;
    gap:24px;
    margin-top:24px;
    @media screen and (max-width: 630px) {
        flex-direction:column;
        align-items:center;
    }
`
export const Requisitos = styled.div`

    display:flex;
    flex-direction:column;
    gap:17px;
    
`

export const FormContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:24px;
    h2{
        margin:0;
    }
`

export const RequisitosContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:24px;
    width:100%;
    h2{
        margin:0;
    }
`
//26px Requisitos

//840px 1 columna
// 346px 2 columna