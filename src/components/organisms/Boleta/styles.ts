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

export const OpcionesBoletas = styled.div`
    display:grid;
    grid-template-columns: repeat(2,1fr);
    gap:21px;

    @media screen and (max-width: ${devices.tablet}) {
        grid-template-columns: 1fr;
    }
`