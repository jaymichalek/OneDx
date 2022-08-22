import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { Doctors } from './components/Doctors';
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import UpdatePatientForm from './components/patientcomponents/UpdatePatientForm';
import { Patients } from './components/Patients';
import { PostPatient } from './components/PostPatient';

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
        element: <PostPatient />
    },
    {
        path: '/edit-patient/:id',
        //requireAuth: true,
        element: <UpdatePatientForm />
    },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
