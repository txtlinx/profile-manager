/* eslint-disable */
import imgClients from '../../../assets2/imgClients.svg';
import imgFondo from '../../../assets2/imgFondo.svg';
import fondoLineas from '../../../assets2/fondo_lineas.svg';
import reloj from '../../../assets2/reloj.svg';
import ubicacion from '../../../assets2/ubicacion.svg';
import info from '../../../assets2/info.svg';
import sucursal from '../../../assets2/sucursal.svg';

import {useRef} from "react";
import Banner from '../../atoms/Banner';
import WarrantyCard from '../../atoms/WarrantyCard';
import FormContactUser from '../../molecules/FormContactUser';
import { BoletaStyled, Beneficios, BeneficiosContainer,TextoBeneficios,Grid, Requisitos} from './styles';
import { InputRef } from '../../atoms/Input/types';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { devices } from '../../../consts/devices';
const BoletaR = () => {
  const inputRef=useRef<InputRef>(null);
  const matchesMobile= useMediaQuery(`(max-width:${devices.tablet})`);

  return (
    <BoletaStyled>
      <Banner
        title="Boletas de Garantía"
        description="Autogestiona la solicitud de Boletas de Garantía en modalidad individual o por carga masiva. Además, haz seguimiento en línea del estado de tu boleta y vale vista 24/7."
        picture={imgFondo}
        background={fondoLineas}
        buttonText="Me interesa"
        onClick={() => {
          inputRef.current?.focusInput();
        }}
      />{' '}
      <h2>Beneficios los 365 días</h2>
      
      {!matchesMobile && <Beneficios>
        <TextoBeneficios>Disfruta de estos atributos mientras evitas la reiterada suscripción de solicitudes, contratos y pagarés</TextoBeneficios>
        <BeneficiosContainer>
          <WarrantyCard
            icon={ubicacion}
            title={'100% Online'}
            description={
              'Realiza tus operaciones desde cualquier lugar.'
            }
          />
          <WarrantyCard
            icon={reloj}
            title={'Rápido'}
            description={
              'Haz ingresos fácilmente y mejora los tiempos de respuesta.'
            }
          />
          <WarrantyCard
            icon={info}
            title={'Seguimiento online'}
            description={
              'Revisa el estado de tus documentos solicitados en todo momento.'
            }
          />
          <WarrantyCard
            icon={sucursal}
            title={'Sucursal cercana'}
            description={
              'Escoge la sucursal para retirar los documentos.'
            }
          />
        </BeneficiosContainer>
      </Beneficios>}
      <Grid>
        <h2>Requisitos</h2>
        <h2>¿Te interesa este producto?</h2>
        <Requisitos>
          <WarrantyCard
              icon={info}
              title={'Seguimiento online'}
              description={
                'Revisa el estado de tus documentos solicitados en todo momento.'
              }
            />
            <WarrantyCard
              icon={sucursal}
              title={'Sucursal cercana'}
              description={
                'Escoge la sucursal para retirar los documentos.'
              }
            />
        </Requisitos>
        
        <FormContactUser refFocus={inputRef}/>
      </Grid>
      
    </BoletaStyled>
  );
};
export default BoletaR;
