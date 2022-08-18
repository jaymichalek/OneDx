import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { Doctors } from './components/Doctors';
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    //requireAuth: true,
    element: <FetchData />
  },
  {
    path: '/listdoctors',
      //requireAuth: true,
      element: <Doctors />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
