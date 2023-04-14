import FormCreateUser from '../../molecules/FormCreateUser';
import {
  DashboardStyle,
  StyledUserLinks,
  StyledBreadcrumb,
  StyledVolver,
} from './styles';
import HomeUser from '../../../assets/img/homeuser.svg';
import Breadcrumb from '../../atoms/Breadcrumb';
const DashboardComponent = () => {
  return (
    <DashboardStyle>
      <section>
        {/*vovler titulo justify-content: end; dentro de @media*/}
        <StyledUserLinks>
          {/*Imgaen home con @media para */}
          <StyledBreadcrumb>
            {/*Breadcrumbs estatico por ahora */}
            <Breadcrumb
              elements={[
                {
                  legend: <img src={HomeUser} alt="home_user" />,
                  url: '/',
                },
                {
                  legend: 'Administración de usuarios',
                  url: '/',
                },
                {
                  legend: 'Crear nuevo usuario',
                  url: '/',
                },
              ]}
            />
          </StyledBreadcrumb>
          <StyledVolver to="/">{'<  '}Volver</StyledVolver>
        </StyledUserLinks>
        <FormCreateUser />
      </section>
    </DashboardStyle>
  );
};

export default DashboardComponent;
