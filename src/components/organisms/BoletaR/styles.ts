/* eslint-disable */

import styled from 'styled-components';
import { devices } from '../../../consts/devices';
export const BoletaStyled = styled.div`
    width: calc(100% - (45px * 2));
    margin: 0 auto;
    display: flex;
    flex-direction:column;
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

`
export const TextoBeneficios = styled.span`
color: #56504C;
    font-size: 16px;
`


export const BeneficiosContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(4,1fr);
    gap:21px;

    @media screen and (max-width: ${devices.tablet}) {
        grid-template-columns: 1fr;
    }
`