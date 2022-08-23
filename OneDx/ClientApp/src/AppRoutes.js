import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { Doctors } from './components/Doctors';
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { CreateNewPatient } from './components/patientcomponents/CreateNewPatient';
import { Patients } from './components/Patients';
import { UpdatePatient }  from './components/patientcomponents/UpdatePatient';

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
    {
        path: '/listpatients',
        //requireAuth: true,
        element: <Patients />
    },
    {
        path: '/create-patient',
        //requireAuth: true,
        element: <CreateNewPatient />
    },
    {
        path: '/edit-patient/:patientId',
        //requireAuth: true,
        element: <UpdatePatient />
    },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
