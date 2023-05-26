/* eslint-disable */
import imgClients from '../../../assets2/imgClients.svg';
import imgFondo from '../../../assets2/imgFondo.svg';
import fondoLineas from '../../../assets2/fondo_lineas.svg';
import reloj from '../../../assets2/reloj.svg';
import ubicacion from '../../../assets2/ubicacion.svg';
import info from '../../../assets2/info.svg';
import sucursal from '../../../assets2/sucursal.svg';
import Carousel from '../../atoms/Carousel';
import { useRef } from 'react';
import Banner from '../../atoms/Banner';
import WarrantyCard from '../../atoms/WarrantyCard';
import FormContactUser from '../../molecules/FormContactUser';
import {
  BoletaStyled,
  Beneficios,
  BeneficiosContainer,
  TextoBeneficios,
  FullContainer,
  RequisitosContainer,
  Requisitos,
  FormContainer,
} from './styles';
import { InputRef } from '../../atoms/Input/types';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { devices } from '../../../consts/devices';
import { labels } from '../../../consts/labels';
const BoletaR = () => {
  const inputRef = useRef<InputRef>(null);
  const matchesMobile = useMediaQuery(`(max-width:${devices.tablet})`);

  return (
    <BoletaStyled>
      <Banner
        title="Boletas de Garantía"
        description={labels.BANNER.TITLE}
        picture={imgFondo}
        background={fondoLineas}
        buttonText="Me interesa"
        onClick={() => {
          inputRef.current?.focusInput();
        }}
      />{' '}
      <h2>Beneficios los 365 días</h2>
      <Beneficios>
        <TextoBeneficios>
        Evita la reiterada suscripción de solicitudes, contratos y pagarés 
        </TextoBeneficios>
        {!matchesMobile ? (
          <BeneficiosContainer>
            <WarrantyCard
              icon={ubicacion}
              title={'100% Online'}
              description={'Realiza tus operaciones desde cualquier lugar.'}
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
              description={'Escoge la sucursal para retirar los documentos.'}
            />
          </BeneficiosContainer>
        ):(
          <Carousel
            items={[
              <WarrantyCard
              icon={ubicacion}
              title={'100% Online'}
              description={'Realiza tus operaciones desde cualquier lugar.'}
            />,
            <WarrantyCard
              icon={reloj}
              title={'Rápido'}
              description={
                'Haz ingresos fácilmente y mejora los tiempos de respuesta.'
              }
            />,
            <WarrantyCard
              icon={info}
              title={'Seguimiento online'}
              description={
                'Revisa el estado de tus documentos solicitados en todo momento.'
              }
            />,
            <WarrantyCard
              icon={sucursal}
              title={'Sucursal cercana'}
              description={'Contrato Línea de Crédito para Boletas de Garantía, Multiboleta y Pagaré paraguas Boletas de Garantía multimoneda.'}
            />
            ]}
          />
        )}
      </Beneficios>
      <FullContainer>
        <RequisitosContainer>
          <h2>Requisitos</h2>
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
              description={'Escoge la sucursal para retirar los documentos.'}
            />
          </Requisitos>
        </RequisitosContainer>
        <FormContainer>
          <h2>¿Te interesa este producto?</h2>
          <FormContactUser refFocus={inputRef} />
        </FormContainer>
      </FullContainer>
    </BoletaStyled>
  );
};
export default BoletaR;
