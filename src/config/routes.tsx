import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { applicationPaths } from './path';
import Home from '../components/pages/Home';
import MasterTemplate from '../components/templates/MasterTemplate';
import UserList from '../components/pages/UserList';
const { basePath, createUser, userList, home } = applicationPaths;

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path={home} element={<MasterTemplate />}>
      <Route path={createUser} element={<Home />} />
      <Route path={userList} element={<UserList />} />
      <Route path="*" element={<Home />} />
    </Route>
  ),
  { basename: process.env.NODE_ENV === 'test' ? '/' : basePath }
);

export default Routes;
