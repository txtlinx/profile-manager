/* eslint-disable */
import imgClients from '../../../assets2/imgClients.svg';
import imgFondo from '../../../assets2/imgFondo.svg';
import fondoLineas from '../../../assets2/fondo_lineas.svg';
import solicitudCargaMasiva from '../../../assets2/solicitud_CargaMasiva.svg';
import documento from '../../../assets2/documento.svg';
import busqueda from '../../../assets2/busqueda.svg';

import Banner from '../../atoms/Banner';
import WarrantyCard from '../../atoms/WarrantyCard';

import { BoletaStyled, OpcionesBoletas } from './styles';
import { labels } from '../../../consts/labels';

const Boleta = () => {
  return (
    <BoletaStyled>
      <Banner
        title="Boletas de Garantía"
        description="Accede a un financiamiento flexible, de acuerdo con las necesidades y dinámicas propias de tu negocio.."
        picture={imgFondo}
        background={fondoLineas}
      />{' '}
      <h2>¿Qué deseas realizar hoy?</h2>
      <OpcionesBoletas>
        <WarrantyCard
          icon={documento}
          title={'Solicitud boletas de garantía individual'}
          description={labels.WARRANTYCARD.B_INDIVIDUAL}
          button
        />
        <WarrantyCard
          icon={solicitudCargaMasiva}
          title={'Solicitud de carga masiva boleta de garantía'}
          description={labels.WARRANTYCARD.S_MASIVA}
          button
        />
        <WarrantyCard
          icon={busqueda}
          title={'Consultar boletas emitidas '}
          description={'Puedes consultar las boletas que están en stock vigente y revisar la gestión de las boletas que se están solicitando.'}
          button
        />
        <WarrantyCard
          icon={busqueda}
          title={'Consultar boletas recibidas'}
          description={'Podrá visualizar el detalle de las boletas de garantía emitidas en Itaú en donde usted es beneficiario.'}
          button
        />
      </OpcionesBoletas>
    </BoletaStyled>
  );
};
export default Boleta;
