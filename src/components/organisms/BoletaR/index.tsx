/* eslint-disable */
import imgClients from '../../../assets2/imgClients.svg';
import imgFondo from '../../../assets2/imgFondo.svg';
import fondoLineas from '../../../assets2/fondo_lineas.svg';
import solicitudCargaMasiva from '../../../assets2/solicitud_CargaMasiva.svg';
import documento from '../../../assets2/documento.svg';
import busqueda from '../../../assets2/busqueda.svg';

import Banner from '../../atoms/Banner';
import WarrantyCard from '../../atoms/WarrantyCard';
import FormContactUser from '../../molecules/FormContactUser';
import { BoletaStyled, Beneficios, BeneficiosContainer,TextoBeneficios } from './styles';

const BoletaR = () => {
  return (
    <BoletaStyled>
      <Banner
        title="Boletas de Garantía"
        description="Autogestiona la solicitud de Boletas de Garantía en modalidad individual o por carga masiva. Además, haz seguimiento en línea del estado de tu boleta y vale vista 24/7."
        picture={imgFondo}
        background={fondoLineas}
        buttonText="Me interesa"
        onClick={() => {}}
      />{' '}
      <h2>Beneficios los 365 días</h2>
      <Beneficios>
        <TextoBeneficios>Disfruta de estos atributos mientras evitas la reiterada suscripción de solicitudes, contratos y pagarés</TextoBeneficios>
        <BeneficiosContainer>
          <WarrantyCard
            icon={documento}
            title={'100% Online'}
            description={
              'Realiza tus operaciones desde cualquier lugar.'
            }
          />
          <WarrantyCard
            icon={solicitudCargaMasiva}
            title={'Rápido'}
            description={
              'Haz ingresos fácilmente y mejora los tiempos de respuesta.'
            }
          />
          <WarrantyCard
            icon={busqueda}
            title={'Seguimiento online'}
            description={
              'Revisa el estado de tus documentos solicitados en todo momento.'
            }
          />
          <WarrantyCard
            icon={busqueda}
            title={'Sucursal cercana'}
            description={
              'Escoge la sucursal para retirar los documentos.'
            }
          />
        </BeneficiosContainer>
      </Beneficios>
      <FormContactUser/>
    </BoletaStyled>
  );
};
export default BoletaR;
