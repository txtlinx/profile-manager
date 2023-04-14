import Breadcrumb from '../atoms/Breadcrumb';
import { StyledBreadcrumb, StyledVolver } from '../organisms/UserList/styles';
import DashboardComponent from '../organisms/UserList';
import HomeUser from '../../assets/img/homeuser.svg';

const UserList = () => {
  return (
    <>
      <StyledBreadcrumb>
        <Breadcrumb
          elements={[
            {
              legend: <img src={HomeUser} alt="home_user" />,
              url: '/',
            },
            {
              legend: 'Administrar usuarios',
              url: '/',
            },
          ]}
        />
      </StyledBreadcrumb>
      <StyledVolver to="/">{'<  '}Volver</StyledVolver>

      <DashboardComponent />
    </>
  );
};

export default UserList;
