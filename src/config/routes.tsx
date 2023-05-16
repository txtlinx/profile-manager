import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { applicationPaths } from './path';
import Home from '../components/pages/Home';
import Boleta from '../components/pages/Boleta';
import MasterTemplate from '../components/templates/MasterTemplate';
import UserList from '../components/pages/UserList';
import BoletaR from '../components/pages/BoletaR';
const { basePath, createUser, userList, home, boleta, boletaR } =
  applicationPaths;

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path={home} element={<MasterTemplate />}>
      <Route path={createUser} element={<Home />} />
      <Route path={userList} element={<UserList />} />
      <Route path={boleta} element={<Boleta />} />
      <Route path={boletaR} element={<BoletaR />} />
      <Route path="*" element={<Home />} />
    </Route>
  ),
  { basename: process.env.NODE_ENV === 'test' ? '/' : basePath }
);

export default Routes;
