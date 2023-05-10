/* eslint-disable */

import styled from 'styled-components';

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
`

export const OpcionesBoletas = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:21px;
`